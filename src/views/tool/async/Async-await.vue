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
  async mounted() {
    // 串行
    {
      let singer1 = await fetchModel('singer', 1)
      console.log(`串行: 歌手1:` + singer1.data.data.name)
      let singer2 = await fetchModel('singer', 2)
      console.log(`串行: 歌手2:` + singer1.data.data.name)
      let singer3 = await fetchModel('singer', 3)
      console.log(`串行: 歌手3:` + singer1.data.data.name)
    }
    
    // 串行的错误处理
    {
      try {
        let singer1 = await fetchModel('singer', 1)
        console.log(`串行: 歌手1:` + singer1.data.data.name)
        await makeError('串行出错')
      } catch(e) {
        console.log('error:' + e)
      }
    }
    
    // 并行
    {
      var promises = [1, 2, 3].map(id => fetchModel('singer', id))
      var results = await Promise.all(promises)
      var singerNames = results.map(data => {
        return data.data.data.name
      }).join(',')
      console.log(`并行: 歌手们: ${singerNames}`)
    }
    
    // 并行的错误处理
    {
      try {
        var promises = [1, 2, 3].map(id => {
          return id == 2 ? makeError('并行出错') : fetchModel('singer', id)
        })
        var results = await Promise.all(promises)
        var singerNames = results.map(data => {
          return data.data.data.name
        }).join(',')
        console.log(`并行: 歌手们: ${singerNames}`)
      } catch(e) {
        console.log('error:' + e)
      }
    }

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