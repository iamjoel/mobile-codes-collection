<template>
  <div class="main">
    <van-cell-group>
      <van-cell title="选择日期" @click="showDatePicker = true">
        {{date | time}}
      </van-cell>
    </van-cell-group>

    <van-popup 
      v-model="showDatePicker"
      position="bottom"
    >
      <van-datetime-picker 
        type="date"
        v-model="tempDate"
        @confirm="selectedDate"
        @cancel="showDatePicker = false"
      />
    </van-popup>

    <van-cell-group>
      <van-cell title="时间" @click="showTimePicker = true">
        {{time}}
      </van-cell>
    </van-cell-group>

    <van-popup 
      v-model="showTimePicker"
      position="bottom"
    >
      <van-datetime-picker 
        type="time"
        v-model="tempTime"
        @confirm="selectedTime"
        @cancel="showTimePicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      time: null,
      showDatePicker: false,
      tempDate: null,
      showDatePicker: false,

      tempTime: null,
      showTimePicker: false,
    }  
  },
  methods: {
    selectedDate(date) {
      this.date = date
      this.showDatePicker = false
    },
    selectedTime(time) {
      this.time = time
      this.showTimePicker = false
    },
  }
}
</script>

<style scoped></style>