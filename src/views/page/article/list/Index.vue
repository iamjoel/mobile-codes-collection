<template>
  <div class="main">
    <list-fetcher key-id="news" 
      page-limit="5" 
      :isInfinate="true"
    >
      <template slot-scope="scope" v-if="scope.data">
        <media
          :style="{
            padding: '.2rem',
            'border-bottom': '1px solid #f0f0f0',
            background: '#fff'
          }"
          :img="{
            src: scope.data.logo,
            isRight: true,
            height:'1.35rem',
            width: '2rem'
          }"
          has-border
          @click.native="$router.push('/page/article/detail/' + scope.data.id)"
        >
          <div class="media__main ly ly-j">
            <div class="media__title ff-yahei">{{scope.data.title}}</div>
            <div class="media__time">{{new Date() | time('YYYY-MM-DD HH:mm')}}</div>
          </div>
          
        </media>
      </template>
    </list-fetcher>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>