import { fetchModel, editModel, deleteModel } from "@/service/api";
import { urls, SERVER_PREFIX } from '@/setting'
export default {
  data() {
    return {
      goodsList:[],
      list: [],
      loading: false,
      finished: false,
      imageURL: "http://via.placeholder.com/100x100",
      shopCarts: [],
      selectAll: false,
      totalPrice: 0
    };
  },
  mounted() {
    this.fetchGoodsList()
  },
  methods: {
    fetchGoodsList() {
      this.goodsList = [{
        id: 1,
        storeName: '舒肤佳'
      }]
    },
    deleteGoods(i) {      
      this.$toast('删除')
    },
    onChange(res) {
      // editModel("mall_order_detail/shopcart", {
      //   userId: this.$store.state.user.userId,
      //   productSkuId: res.productSkuId,
      //   quantity: res.quantity
      // }).then(({ data: { data } }) => {
      //   this.countTotalPrice();
      // });
    },
    changeGroup(data) {
      // data.checked = !data.checked;
      // for (let i = 0; i < data.products.length; i++) {
      //   data.products[i].checked = data.checked;
      // }
      // let count = 0
      // for (let i = 0; i < this.shopCarts.length; i++) {
      //   if (this.shopCarts[i].checked) {
      //     count++
      //   }
      // }
      // this.selectAll =  this.shopCarts.length === count ? true : false
      // this.countTotalPrice();

    },
    changeProductItem(parent,data) {
      // let count = 0;
      // for (let i = 0; i < parent.products.length; i++) {
      //   if (data.productSkuId === parent.products[i].productSkuId) {
      //     parent.products[i].checked = !data.checked;
      //   }
      //   if (parent.products[i].checked) {
      //     count++;
      //   }
      // }
      // parent.checked =
      //   parent.products.length === count ? true : false;

      // let countd = 0
      // for (let i = 0; i < this.shopCarts.length; i++) {
      //   if (this.shopCarts[i].checked) {
      //     countd++;
      //   }
      // }
      // this.selectAll = this.shopCarts.length === countd ? true : false;
      // this.countTotalPrice();

     
    },
    handleSelectAll() {
      // this.selectAll = !this.selectAll
      // for (let i = 0; i < this.shopCarts.length; i++) {
      //   this.shopCarts[i].checked = this.selectAll
      //   for (let j = 0; j < this.shopCarts[i].products.length; j++) {
      //     this.shopCarts[i].products[j].checked = this.selectAll
      //   }       
      // }
      // this.countTotalPrice()
    },
    onSubmit() {
      // var url = `${SERVER_PREFIX}/${"mall_order/preorder/create"}`;
      // const detailList = this.handleRreorder();
      // axios
      //   .post(`${url}`, {
      //     userId: this.$store.state.user.userId,
      //     channelId: "1",
      //     detailList
      //   })
      //   .then(res => {
      //     this.$router.push(`/mall/order/make-order/cart/${res.data.data}`);
      //   });
    },
    handleRreorder() {
      // const temp = []
      // for (let i = 0; i < this.shopCarts.length; i++) {
      //   let cart = this.shopCarts[i]
      //   for (let j = 0; j < cart.products.length; j++) {
      //     let product = cart.products[j]
      //     if (product.checked) {
      //       temp.push({
      //         productSkuId: product.productSkuId,
      //         quantity: product.quantity
      //       });
      //     }
      //   }
      // }
      // return temp
    },
    countTotalPrice() {      
      // let totalPrice = 0
      // for (let i = 0; i < this.shopCarts.length; i++) {
      //   for (let j = 0; j < this.shopCarts[i].products.length; j++) {
      //     if (this.shopCarts[i].products[j].checked) {
      //       totalPrice +=
      //         this.shopCarts[i].products[j].price *
      //         this.shopCarts[i].products[j].quantity * 100
      //     }
      //   }
      // }      
      // this.totalPrice = parseFloat((totalPrice / 100).toFixed(2))
    }
  }
};