<template>
  <div class="main">
    <div class="mb-10">
      <van-cell-group>
        <van-switch-cell v-model="isUserCenter" title="在个人中心中呈现" />
      </van-cell-group>
    </div>
    <!-- 从个人中心进 -->
    <address-list
      :is-user-center="isUserCenter"
      :list="addressList"
      @select="select"
      @save="save"
      @delete="onDelete"
    >
    </address-list>
  </div>
</template>

<script>
import AddressList from '@/components/address'
var id = 100
export default {
  components: {
    AddressList
  },
  data () {
    return {
      isUserCenter: true,
      addressList: [
        {
          id: 1,
          name: '金先生',
          tel: '13822123222',
          province: '江苏省',
          city: '苏州市',
          county: '吴中区',
          addressDetail: '东吴北路98号 新苏国际广场1109',
          areaCode: '320506',
          isDefault: true
        },
        {
          id: 2,
          name: '阎先生',
          tel: '13912332211',
          province: '江苏省',
          city: '苏州市',
          county: '吴中区',
          addressDetail: '吴中东路98号 联青大厦12号405',
          areaCode: '320506',
          isDefault: false
        }
      ],
      chosenAddressId: null
    }
  },
  methods: {
    select (address) {
      this.$toast(`选择: ${address.name}`)
    },
    // 新增，编辑都走这
    save (address) {
      var method = address.id ? 'edit' : 'add'
      console.log(`${method}: ${JSON.stringify(address)}`)
      if (method === 'add') {
        this.addressList.push({
          id: id++,
          ...address
        })
      } else {
        this.addressList = this.addressList.map(item => {
          if (item.id == address.id) {
            return address
          } else {
            return item
          }
        })
      }
    },
    onDelete (id) {
      this.addressList = this.addressList.filter(item => item.id != id)
      this.$toast('操作成功!')
    }
  }
}
</script>

<style scoped></style>
