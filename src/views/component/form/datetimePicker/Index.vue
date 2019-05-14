<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">选择日期</h2>
      <van-cell-group>
        <van-cell title="选择日期" @click="isShowDatePicker = true">
          {{ date | time }}
        </van-cell>
      </van-cell-group>

      <van-popup v-model="isShowDatePicker" position="bottom">
        <van-datetime-picker
          type="date"
          v-model="tempDate"
          @confirm="selectedDate"
          @cancel="
            showMinMax
            DatePicker = false
          "
        />
      </van-popup>
    </section>

    <section class="demo">
      <h2 class="demo__title">最小&最大日期区间</h2>
      <van-cell-group>
        <van-cell title="选择日期" @click="isShowMinMaxDatePicker = true">
          {{ date | time }}
        </van-cell>
      </van-cell-group>

      <van-popup v-model="isShowMinMaxDatePicker" position="bottom">
        <van-datetime-picker
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          v-model="tempDate"
          @confirm="selectedDate"
          @cancel="isShowMinMaxDatePicker = false"
        />
      </van-popup>
    </section>

    <section class="demo">
      <h2 class="demo__title">选择时间</h2>
      <van-cell-group>
        <van-cell title="选择时间" @click="showTimePicker = true">
          {{ time }}
        </van-cell>
      </van-cell-group>

      <van-popup v-model="showTimePicker" position="bottom">
        <van-datetime-picker
          type="time"
          v-model="tempTime"
          @confirm="selectedTime"
          @cancel="showTimePicker = false"
        />
      </van-popup>
    </section>

    <section class="demo">
      <h2 class="demo__title">完整时间</h2>
      <van-datetime-picker type="datetime" />
    </section>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      date: null,
      time: null,
      isShowDatePicker: false,
      tempDate: null,

      isShowMinMaxDatePicker: false,
      minDate: moment().toDate(),
      maxDate: moment()
        .add(5, 'years')
        .toDate(),

      tempTime: null,
      showTimePicker: false
    }
  },
  methods: {
    selectedDate (date) {
      this.date = date
      this.isShowDatePicker = false
    },
    selectedTime (time) {
      this.time = time
      this.showTimePicker = false
    }
  }
}
</script>

<style scoped></style>
