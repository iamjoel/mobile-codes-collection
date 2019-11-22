<template>
  <div class="main">
    <div>
      <template v-if="$route.params.type === 'success'">
        <div class="order-result ta-c">
          <div class="pay ta-c">
            <div class="pay__icon success"></div>
            <div class="pay--success">支付成功</div>
            <div class="pay__content">你的订单号为:  123456789， 您可在订单中<br>心查看详细订单状态</div>
          </div>
          <div>
            <a
              href="javascript:void(0);"
              class="pay-btn pay-btn--fill"
              @click="$router.push('/page/order/list')"
              >前往我的订单中心</a
            >
            <a
              href="javascript:void(0);"
              class="pay-btn pay-btn--return"
              @click="$router.push('/')"
              >返回首页</a
            >
          </div>
        </div>

        <div class="box">
          <div class="box__title">订单号 {{ $route.params.code }}</div>
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
        </div>
      </template>

      <template v-else>
        <div class="order-result ta-c">
          <div class="pay ta-c">
            <div class="pay__icon fail"></div>
            <div class="pay--fail">支付失败</div>
            <div class="pay__content">你的订单号为:  123456789， 您可在订单中<br>心查看详细订单状态</div>
          </div>
          <div>
            <a
              href="javascript:void(0);"
              class="pay-btn pay-btn--fill"
              @click="$router.push('/page/order/list')"
              >前往我的订单中心</a
            >
            <a
              href="javascript:void(0);"
              class="pay-btn pay-btn--return"
              @click="$router.push('/')"
              >返回首页</a
            >
          </div>
        </div>

        <div class="box">
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
        </div>
      </template>
    </div>
    <p class="mt-20rem">$route.params.type 不为 success 则显示失败</p>
  </div>
</template>


<script src="./main.js"></script>

<style scoped src="./style.css"></style>
