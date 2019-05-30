<template>
  <div class="main">
    <div class="box ta-c">
      <template v-if="$route.params.type === 'success'">
        <div class="result ta-c">
          <div class="result__icon success"></div>
          <div class="result--success">支付成功</div>
          <div class="result__content">你的订单号为:  123456789， 您可在订单中<br>心查看详细订单状态</div>
        </div>
        <div class="btns">
          <a
            href="javascript:void(0);"
            class="btn btn--fill"
            @click="$router.push('/page/order/list')"
            >前往我的订单中心</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn--return"
            @click="$router.push('/')"
            >返回首页</a
          >
        </div>
      </template>

      <template v-else>
        <div class="result ta-c">
          <div class="result__icon fail"></div>
          <div class="result--fail">支付失败</div>
          <div class="result__content">你的订单号为:  123456789， 您可在订单中<br>心查看详细订单状态</div>
        </div>
        <div class="btns">
          <a
            href="javascript:void(0);"
            class="btn btn--fill"
            @click="$router.push('/page/order/list')"
            >前往我的订单中心</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn--return"
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
