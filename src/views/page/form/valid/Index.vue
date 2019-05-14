<template>
  <div class="main">
    <h2 class="title">填写店铺资料信息</h2>
    <h3>目前用的 Toast 的方式，考虑类似桌面的，在输入框下面显示报错。</h3>
    <div class="form">
      <div class="form-info">
        <input
          type="file"
          ref="Thumb"
          accept="image/*"
          class="tpye-file"
          @change="uploadImg('Thumb')"
        />
        <a href="javascript:void(0)" class="form__item--upload">
          <div>上传店铺logo图片</div>
          <div class="ly ly-m">
            <img
              :src="previewUrl.Thumb"
              alt=""
              class="upload-img"
              v-show="previewUrl.Thumb"
            />
            <img src="./images/right.png" alt="" class="icon-right" />
          </div>
        </a>
      </div>
      <div class="form-info">
        <div class="form__item">
          <div class="form__item--title required">店铺名称:</div>
          <input
            type="text"
            placeholder="请输入店铺名称"
            v-model="model.Name"
          />
        </div>
        <div class="form__item form__item-textarea">
          <div class="form__item--title required">经营内容:</div>
          <textarea
            type="text"
            placeholder="请输入经营内容"
            v-model="model.Title"
          ></textarea>
        </div>
        <div class="form__item">
          <div class="form__item--title required">店铺手机:</div>
          <input
            type="text"
            placeholder="请输入店铺手机号"
            v-model="model.Mobile"
          />
        </div>
        <div class="form__item">
          <div class="form__item--title required">店铺电话:</div>
          <input
            type="text"
            placeholder="请输入店铺电话"
            v-model="model.Telphone"
          />
        </div>
        <div class="form__item form__item-textarea">
          <div class="form__item--title required">店铺简介:</div>
          <textarea
            type="text"
            placeholder="请输入店铺简介"
            v-model="model.Description"
          ></textarea>
        </div>
      </div>

      <div class="btn" @click="save">提交审核</div>
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
