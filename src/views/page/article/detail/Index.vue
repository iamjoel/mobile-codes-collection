<template>
  <div class="main">
    <data-fetcher :config="{
      key: 'news',
      id: $route.params.id
    }">
      <template slot-scope="scope" v-if="scope.data">
        <h1 class="title ff-yahei">{{scope.data.title}}</h1>
        <h1 class="time">{{scope.data.createTime | time('YYYY-MM-DD hh:mm')}}</h1>
        <div class="rich-editor-result" v-html="scope.data.detail"></div>
      </template>
    </data-fetcher>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>