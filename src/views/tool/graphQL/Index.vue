<template>
  <div class="main">
    我 GitHub 上 Star 最多的3个库
    <ul>
      <li v-for="(item, i) in list" :key="i">
        {{item.node.name}}
        Star数: {{item.node.stargazers.totalCount}}
        语言: {{item.node.primaryLanguage.name}}
      </li>
    </ul>

  </div>
</template>

<script>
// https://github.com/settings/tokens
const token = 'c20ce96139ded4b38d360b20b5fa1cec107e9424'

import axios from 'axios'

export default {
  data() {
    return {
      list: []
    }
  },
  methods: {

  },
  mounted() {
    var query = `
{
  user(login: "iamjoel") {
    repositories(first: 3, orderBy: {
      field: STARGAZERS
      direction: DESC
    }){
      edges {
        node {
          name
          stargazers {
            totalCount
          }
          primaryLanguage {
            name
          }
        }
      }
    }
  }
}`
    // 跨域会发 option 请求，然后就报错了。。。
    // axios.post('https://api.github.com/graphql', {
    //   query
    // }, {
    //   headers: {
    //     'Authorization': `bearer ${token}`,
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   },
    // }).then(({data}) => {
    //   debugger
    // })

    // fetch 的 type 就是 fetch，不是xhr，不会发 option 请求，所以能ok。 
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query})
    })
    .then(r => r.json())
    .then(({data}) => {
      this.list = data.user.repositories.edges
    })
    
  }
}


</script>

<style scoped></style>