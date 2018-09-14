<template>
  <div class="main">
    <div class="header ly ly-j">
      <div class="title">我的朋友圈</div>
      <a href="javascript:void(0)" class="primary-md-btn" @click="$router.push('/page/other/community/create')">发布</a>
    </div>

    <template>
      <div>
        <div class="list" v-for="i in 3" :key="i">
          <div class="ly">
            <img class=" user-avatar" src="http://via.placeholder.com/200x100" alt=""/>
            <div>
                <div class="user-name">张三</div>
                <div class="user-create-time">10小时前</div>
            </div>
          </div>
          <div>
            <p class="user-create-content">农家乐</p>
          </div>
      
          <div class="ly ly-multi create-img">
            <img class=" user-create-img" src="http://via.placeholder.com/200x100" alt="" v-for="i in 4" :key="i"/>
          </div>
          
          <div class="ly ly-j like">
            <div class="ly ly-multi ly-m">
              <img class="like-img" src="./images/like-img.png">
              <div class="like-username" v-for="item in 4" :key="item">张三</div>
            </div>
            <a href="javascript:void(0)" class="comment-link" @click="isShowComment = !isShowComment">
              <img class="like-user-write" src="./images/like-user-write.png">
              <div class="comment ly" v-if="isShowComment">
                <a href="javascript:void(0)" class="comment__item "><span class="comment__item-praise">赞</span></a>
                <a href="javascript:void(0)" class="comment__item "><span class="comment__item-comment" @click.stop="isShowBox = true">评论</span></a>
              </div>
            </a>
          </div>
      
          <div class="ly Comments">
            <div class="like-username-create">张三</div>
            <div class="like-username-create-content">很好吃</div>
          </div>
        </div>

        <van-popup v-model="isShowBox" position="top">
          <div class="box-body">
            <textarea class="box-body__textarea" placeholder="请输入评论内容"></textarea>
            <div class="box-btn">
              <a href="javascript:void(0)" class="primary-lg-btn" @click="isShowBox = false">确定</a>
            </div>
          </div>
        </van-popup>
      </div>
    </template>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>