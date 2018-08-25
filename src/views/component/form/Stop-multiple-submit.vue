<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">用 Loading 图标提示正在提交中</h2>
      <div class="ly ly-c ph-10rem">
        <van-button size="large" type="primary" @click="save" :loading="isSubmiting">保存</van-button> 
      </div>
    </section>
    
    <section class="demo">
      <h2 class="demo__title">用文字提示正在提交中</h2>
      <div class="ly ly-c ph-10rem">
        <van-button size="large" type="primary" @click="save2">{{isSubmiting2 ? '提交中...' : '保存'}}</van-button> 
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubmiting: false,
      isSubmiting2: false
    }  
  },
  methods: {
    save() {
      // loading 状态不会进入 click 回调
      this.isSubmiting = true
      // 模拟提交
      setTimeout(()=> {
        this.$toast('已提交')
        this.isSubmiting = false
      }, 3000)
    },
    save2() {
      if(this.isSubmiting2) {
        return false
      }

      this.isSubmiting2 = true
      setTimeout(()=> {
        this.$toast('已提交')
        this.isSubmiting2 = false
      }, 3000)
    }
  }
}
</script>

<style scoped></style>