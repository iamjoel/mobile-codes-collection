import Media from '@/components/media'
import {fetchList, addModel} from '@/service/api'
import {pay} from '@/assets/utils/wechat'

export default {
  components: {
    Media
  },
  data() {
    return {
      list: [],
      careStatus: null,
      servicePackageList: [],
      servicePackageStatus: null,
      unfold: false,
    } 
  },
  methods: {
    getSatausName(status) {
      if(status == 1) {
        return '待付款'
      } else if(status == 2) {
        return '待服务'
      } else if(status == 3){
        return '待评价'
      } else if(status == 4){
        return '已完成'
      } else if(status == 0){
        return '已取消'
      } else if(status == 5){
        return '退款中'
      }
    },
   
    fetchList(status) {
      var list = [{
        id: 1,
        status: 1,
        logo: 'http://via.placeholder.com/50x50',
        serialNum: 'xx1'
      },{
        id: 2,
        status: 2,
        logo: 'http://via.placeholder.com/50x50',
        serialNum: 'xx2'
      },{
        id: 3,
        status: 3,
        logo: 'http://via.placeholder.com/50x50',
        serialNum: 'xx3'
      },{
        id: 4,
        status: 4,
        logo: 'http://via.placeholder.com/50x50',
        serialNum: 'xx4'
      },{
        id: 5,
        status: 5,
        logo: 'http://via.placeholder.com/50x50',
        serialNum: 'xx5'
      },]
      
      this.careStatus = status
      if(this.careStatus) {
        this.list = list.filter(item => item.status == this.careStatus)
      } else {
        this.list = list
      }
      
    },
    pay(orderId, name) {
      pay({
        orderId: orderId,
        openid: this.$store.state.openid,
        productName: name,
      }, () => {
        this.$router.push('/order/result/success/' + orderId)
      }, () => {
        this.$router.push('/order/result/fail/' + orderId)
      })
    },
    // 退款
    refund(orderId) {
      addModel('refund', {
        openid: this.$store.state.openid,
        orderId,
      }).then(() => {
        this.fetch(this.active, 2)
        this.$toast('操作成功,等待审核!')
      })
    }
  },
  mounted() {
    this.fetchList()
  }
}