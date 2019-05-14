<template>
  <div class="main">
    <div class="box">
      <div class="box__title">订单号 {{ $route.params.code }}</div>
      <template v-if="$route.params.type === 'success'">
        <div class="result">
          <div class="result--success">购买成功</div>
        </div>
        <div class="btns ly ly-j">
          <a
            href="javascript:void(0);"
            class="btn btn--return"
            @click="$router.push('/')"
            >返回首页</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn--fill"
            @click="$router.push('/page/order/list')"
            >查看订单</a
          >
        </div>
      </template>
      <template v-else>
        <div class="result">
          <div class="result--fail">购买失败</div>
        </div>
        <div class="return">
          <a
            href="javascript:void(0)"
            class="fail-btn"
            @click="$router.push('/')"
            >返回首页</a
          >
        </div>
      </template>
    </div>
    <p class="mt-20rem">$route.params.type 不为 success 则显示失败</p>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
