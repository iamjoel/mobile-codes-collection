<template>
  <div class="main">
    <h2 class="demo-classify__title">文档</h2>
    <ul class="doc-list">
      <li v-for="(item, index) in list">
        <a :href="item.url">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          label: 'Vue',
          url: 'http://vuejs.org/'
        },
        {
          label: 'Vant UI',
          url: 'https://www.youzanyun.com/zanui/vant#/zh-CN/component/intro'
        },
        {
          label: '前端常用网站导航',
          url: 'https://iamjoel.github.io/bookmark-nav/src/front-end.html'
        },
        {
          label: '常用数组方法',
          url: 'https://www.jianshu.com/p/741009fda86b'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
li {
  padding-left: 0.2rem;
  list-style-type: square;
  line-height: 1.5;
}
.doc-list a {
  text-decoration: underline;
}
</style>
