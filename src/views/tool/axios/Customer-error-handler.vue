<template>
  <div class="main">
    {{errMsg}}
  </div>
</template>

<script>
import {fetchList} from '@/service/api'
export default {
  data() {
    return {
      errMsg: null
    }
  },
  mounted() {
    fetchList('error', undefined, undefined, undefined, {
      transformResponse: [(data)=> {
        // 改变后台给的数据。 errorCode 不返回，就不会报错。
        data = JSON.parse(data)
        this.errMsg = `截获的报错信息:${data.errorMessage}`
        return {
        }
      }]
    })
    
  }
}
</script>

<style scoped></style>