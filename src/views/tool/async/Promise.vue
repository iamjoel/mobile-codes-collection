<template>
  <div class="main">
  </div>
</template>

<script>
import {fetchModel} from '@/service/api'
export default {
  data() {
    return {

    }  
  },
  mounted() {
    // 串行
    fetchModel('singer', 1).then(({data}) => {
      console.log(`串行: 歌手1:` + data.data.name)
      return fetchModel('singer', 2)
    }).then(({data}) => {
      console.log(`串行: 歌手2:` + data.data.name)
      return fetchModel('singer', 3)
    }).then(({data}) => {
      console.log(`串行: 歌手3:` + data.data.name)
    })
    // 串行的错误处理
    fetchModel('singer', 1).then(({data}) => {
      console.log(`串行: 歌手1:` + data.data.name)
      return makeError('串行出错')
    }).catch(e => {
      console.log('error:' + e)
    })
    // 并行
    Promise.all([fetchModel('singer', 1), fetchModel('singer', 2), fetchModel('singer', 3)]).then(([data1, data2, data3]) => {
      console.log(`并行: 歌手们: ${data1.data.data.name},${data2.data.data.name},${data3.data.data.name}`)
    })
    // 并行的错误处理
    Promise.all([fetchModel('singer', 1), makeError('并行出错')]).then(([data1, data2, data3]) => {
    }).catch(e => {
      console.log('error:' + e)
    })

    function makeError(errMsg) {
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          reject(errMsg)
        }, 1000)
      })
    }

  }
}
</script>

<style scoped></style>