<template>
  <div class="main p-10">
    <div class="mb-20rem">
      当前语言: {{ $i18n.locale == 'zh' ? '中文' : 'English' }}
    </div>
    <div class="ly ly-c">
      <van-button
        type="primary"
        @click="$i18n.locale = 'zh'"
        v-show="$i18n.locale == 'en'"
        >切换为中文</van-button
      >
      <van-button
        type="primary"
        @click="$i18n.locale = 'en'"
        v-show="$i18n.locale == 'zh'"
        >Switch to English</van-button
      >
    </div>

    <div class="mv-20rem ta-c">{{ $t('title') }}: {{ $t('content') }}</div>
  </div>
</template>

<script>
// 文档: https://kazupon.github.io/vue-i18n/
export default {
  data () {
    return {}
  },
  i18n: {
    messages: {
      zh: { title: '标题', content: '一堆乱七八糟的内容。' },
      en: { title: 'Title', content: 'A lot of massive contents.' }
    }
  },
  methods: {}
}
</script>

<style scoped></style>
