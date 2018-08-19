
<template>
  <div class="main">
    <div class="demo__title">时间格式化</div>
    YYYY-MM-DD : {{Date.now() | time}} <br>
    YY年MM月DD日 : {{Date.now() | time('YY年MM月DD日')}} <br>
    YYYY/MM/DD HH:mm: ss: {{Date.now() | time('YYYY/MM/DD HH:mm: ss')}}

    <div class="demo__title">距当前时间</div>
    {{justNow | time('YYYY/MM/DD HH:mm')}} 是 {{justNow | diffNow}} <br>
    {{minutesAgo | time('YYYY/MM/DD HH:mm')}} 是 {{minutesAgo | diffNow}} <br>
    {{hoursAgo | time('YYYY/MM/DD HH:mm')}} 是 {{hoursAgo | diffNow}} <br>
    {{daysAgo | time('YYYY/MM/DD HH:mm')}} 是 {{daysAgo | diffNow}} <br>
    {{longAgo | time('YYYY/MM/DD HH:mm')}} 是 {{longAgo | diffNow(undefined, 'YY年MM月DD日')}} <br>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      justNow: moment().add('seconds', -10),
      minutesAgo: moment().add('minutes', -2),
      hoursAgo: moment().add('hours', -2),
      daysAgo: moment().add('days', -2),
      longAgo: moment().add('months', -2),
    }
  },
  methods: {
    
  }
}
</script>

<style scoped></style>