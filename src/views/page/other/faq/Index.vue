<template>
  <div class="main mt-10rem">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="xxx提供哪些服务？" name="1">
        <p>xxx是一家专注居家医养照护上门服务及高端健康管理的专业平台机构。专注于高龄、失能、失智、半失能、术后康复老人或患者的居家和医院医养照护上门服务，为老人或患者的饮、食、起、居提供一对一的照护服务。并针对慢病、康复、预防提供专业的高端健康管服务。</p>
      </van-collapse-item>

      <van-collapse-item title="xxx有哪些服务项目？" name="2">
        <p>xxx的服务项目分为照护服务和健康管理服务理两类服务。</p>
        <p>照护服务分为医院陪护和居家照护。医院陪护能为患者提供疾病术前、术后及康复期专业照护；居家照护能为患者提供居家慢病照护、院后恢复期持续照护。</p>
        <p>健康管理服务以套餐形式为客户提供预防、咨询、评估等高端健康服务。</p>
      </van-collapse-item>

    </van-collapse>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>