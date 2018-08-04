<template>
  <div class="calender">
    <div class="calender__title ly ly-j">
      <div class="calender__year">{{year}}</div>
      <div class="calender__op ly ly-m">
        <a href="javascript:void(0);" class="calender__btn calender__btn--prev" @click="prevMonth">&lt;</a>
        <div class="calender__month">{{month}}月</div>
        <a href="javascript:void(0);" class="calender__btn calender__btn--next" @click="nextMonth">&gt;</a>
      </div>
    </div>
    <div class="calender__head ly ly-multi">
      <div class="calender__head-item" v-for="item in weekTitles" :key="item">{{item}}</div>
    </div>
    <div class="calender__body ly ly-multi">
      <div class="calender__body-item " v-for="item in emptyBeforeCellNum" :key="Math.random()"></div>
      <div class="calender__body-item ly ly-c" v-for="(item,i) in dayNum" :key="item">
        <div class="calender__body-item__inner ly ly-c">
        {{item}}
      </div>
      </div>
      <div class="calender__body-item " v-for="item in emptyAfterCellNum" :key="Math.random()"></div>
    </div>
  </div>
</template>

<script src="./main.js">
  
</script>

<style scoped src="./style.css"></style>