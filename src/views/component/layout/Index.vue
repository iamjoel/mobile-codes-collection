<template>
  <div class="layout" :class="[`layout--${type}`]" :style="getStyle">
    <slot />
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
