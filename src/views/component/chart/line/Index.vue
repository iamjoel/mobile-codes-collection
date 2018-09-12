<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">基础用法</div>
      <div class="p-20rem" style="height:4rem">
        <!-- 减少间隙，位置微调 -->
        <div style="width: 6.4rem;height: 6rem;position: relative;top: -1.3rem">
          <chart :options="chartOpts"></chart>
        </div>
      </div>
    </section>
    
    <div class="p-10rem">
      注意：需要在 webpack.base.conf.js 中的 loader: 'babel-loader' 加 <br>
      <code >
        resolve('node_modules/vue-echarts'),<br>
        resolve('node_modules/resize-detector') <br>
      </code>
      不加 npm run build 时会报错。
    </div>
  </div>
</template>

<script src="./main.js">
  
</script>
