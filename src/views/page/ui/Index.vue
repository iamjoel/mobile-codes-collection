<template>
  <div class="main">
    <h2 class="demo-classify__title">颜色</h2>
    <div class="demo__title">标准主颜色</div>
    <div class="ly ph-20rem">
      <div class="color">
        <div class="color__show" style="background: #FFCD55"></div>
        <div class="color__value">#FFCD55</div>
      </div>
      <div class="color">
        <div class="color__show" style="background: #FF9B28"></div>
        <div class="color__value">#FF9B28</div>
      </div>
    </div>
    
    <div class="demo__title">辅助颜色</div>
    <div class="ly ph-20rem">
      <div class="color">
        <div class="color__show" style="background: #E15F55"></div>
        <div class="color__value">#E15F55</div>
      </div>
      <div class="color">
        <div class="color__show" style="background: #FFF06E"></div>
        <div class="color__value">#FFF06E</div>
      </div>
    </div>
    <div class="demo__title">文字颜色</div>
    <div class="ly ph-20rem">
      <div class="color">
        <div class="color__show" style="background: #333333"></div>
        <div class="color__value">#333333</div>
      </div>
      <div class="color">
        <div class="color__show" style="background: #666666"></div>
        <div class="color__value">#666666</div>
      </div>
      <div class="color">
        <div class="color__show" style="background: #999999"></div>
        <div class="color__value">#999999</div>
      </div>
    </div>
    <div class="demo__title">其他颜色</div>
    <div class="ly ph-20rem">
      <div class="color">
        <div class="color__show" style="background: #69B455"></div>
        <div class="color__value">#69B455</div>
      </div>
      <div class="color">
        <div class="color__show" style="background: #64A0FF"></div>
        <div class="color__value">#64A0FF</div>
      </div>
    </div>
    <div class="demo-classify__title">文字</div>
    <div class="demo__title">默认字</div>
    <div class="ph-20rem">Segoe UI #333 12px</div>
    <div class="demo__title">一级标题</div>
    <h2 class="ff-yahei fz-16 ph-20rem">微软雅黑 #333 16px</h2>
    <div class="demo__title">二级标题</div>
    <h2 class="ff-yahei fz-14 ph-20rem">微软雅黑 #333 14px</h2>
    <div class="demo__title">提示</div>
    <div class="c-999 ph-20rem">Segoe UI #999 12px</div>

    <h2 class="demo-classify__title">按钮</h2>
    <div class="demo__title">标准尺寸</div>
    <div class="ph-20rem">
      <van-button type="primary">主要按钮</van-button>
    </div>
    <div class="demo__title">禁用</div>
    <div class="ph-20rem">
      <van-button type="primary" disabled>禁用</van-button>
    </div>
    <div class="demo__title">提交按钮</div>
    <div class="ph-20rem">
      <van-button type="primary" size="large">提交</van-button>
    </div>
    <div class="demo__title">新增按钮</div>
    <div class="ph-20rem">
      <van-button type="primary" size="large">新增</van-button>
    </div>
    <div class="demo__title">删除按钮</div>
    <div class="ph-20rem">
      <van-button type="danger" size="large">删除</van-button>
    </div>

    <!-- <h2 class="demo-classify__title">弹出框</h2> -->
    <h2 class="demo-classify__title">表单</h2>
    <van-field
      label="用户名"
      placeholder="请输入用户名"
    />
    <van-field
      type="password"
      label="密码"
      placeholder="请输入密码"
    />
    <div class="p-20rem">
      <van-button type="primary" size="large">提交</van-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .color {
    display: flex;
    align-items: center;
    margin-right: .2rem;
  }
  .color__show{
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    margin-right: .2rem;
  }
</style>