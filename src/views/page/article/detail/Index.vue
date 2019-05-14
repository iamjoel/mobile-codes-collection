<template>
  <div class="main">
    <lj-fetch-model :url="$SERVER_PREFIX + '/news/detail/' + $route.params.id">
      <template slot-scope="scope" v-if="scope.data">
        <h1 class="title ff-yahei">{{ scope.data.title }}</h1>
        <h1 class="time">
          {{ scope.data.createTime | time('YYYY-MM-DD hh:mm') }}
        </h1>
        <div class="rich-editor-result" v-html="scope.data.detail"></div>
      </template>
    </lj-fetch-model>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
