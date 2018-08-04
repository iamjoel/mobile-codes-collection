import moment from 'moment'
var today = moment()
import {urls} from '@/setting'

export default {
  props: {
    
  },
 
  data() {
    return {
      curr: moment(today),
      year: null,
      month: null,
      weekTitles: '一二三四五六日'.split(''),
      emptyBeforeCellNum: 0,
      dayNum: 0,
      emptyAfterCellNum: 0,
    }  
  },
  methods: {
    update() {
      this.year = this.curr.year()
      this.month = this.curr.month() + 1

      this.dayNum = this.curr.daysInMonth()
      // 这个月的第一天 是周几
      var firstDayDate = moment(this.curr).date(1).day()
      // 周日是显示放最后，所以是 6。
      this.emptyBeforeCellNum = firstDayDate === 0 ? 6 : firstDayDate - 1
      // 这个月的最后一天 是周几
      var endDayDate = moment(this.curr).date(this.dayNum).day()
      this.emptyAfterCellNum = endDayDate === 0 ? 0 : 7 - endDayDate

    },
    nextMonth() {
      this.curr = this.curr.add(1, 'month')
      this.update()
    },
    prevMonth() {
      this.curr.add(-1, 'month')
      this.update()
    },
  },
  mounted() {
    this.update()
  }
}