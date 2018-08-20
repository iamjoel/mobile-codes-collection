<template>
  <div class="main">
    <section>
      <div class="demo__title">基础用法</div>
      <div class="p-20rem" style="height:4.5rem;overflow: hidden;">
        <!-- 减少简介，位置微调 -->
        <div style="width: 100%;height: 6rem;position: relative;top: -1.3rem">
          <chart :options="chartOpts"></chart>
        </div>
      </div>
    </section>
    
    <p>其他内容</p>
  </div>
</template>

<script src="./main.js">
  
</script>
<style scoped src="@/assets/chart.css"></style>