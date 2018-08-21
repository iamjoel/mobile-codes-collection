import moment from 'moment'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'

export default {
  components: {
    chart: ECharts
  },
  data() {
    return {
      isShowTimeType: false,
      timeType: 0,
      allTimeType: ['今日', '本周', '本月', '自定义'],

      isShowStartDate: null,
      tempStartDate: null,
      startDate: null,

      isShowEndDate: null,
      tempEndDate: null,
      endDate: null,

      chartOpts: {
        xAxis: {
            type: 'category', 
            data: []
        },
        yAxis: {
          type: 'value',
          minInterval: 1
        },
        series: [{
            data: [],
            type: 'line' // 图表类型
        }]
      }
    }  
  },
  methods: {
    chooseTimeType(name, index) {
      this.timeType = index // 0,1,2,3
      if(index == 0) {
        this.startDate = moment()
        this.endDate = moment()
      } else if(index == 1) {
        this.startDate = moment().startOf('week').add('d', 1)
        this.endDate = moment().endOf('week').add('d', 1)
      } else if(index == 2) {
        this.startDate = moment().startOf('month')
        this.endDate = moment().endOf('month')
      }

      this.tempStartDate = moment(this.startDate).toDate()
      this.tempEndDate = moment(this.endDate).toDate()
      this.search()
      this.isShowTimeType = false
    },
    chooseTime(type) {
      if(type == 'start') {
        this.startDate = moment(this.tempStartDate)
        this.isShowStartDate = false
      } else {
        this.endDate = moment(this.tempEndDate)
        this.isShowEndDate = false
      }
      this.timeType = 3 // 改成自定义类型的
      this.search()
    },
    search() {
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      })
      
      setTimeout(()=> {
        this.chartOpts.xAxis.data = ['08-05', '08-06', '08-07', '08-08']
        this.chartOpts.series[0].data = this.chartOpts.xAxis.data.map(() => {
          return Math.round(Math.random() * 100)
        })
        this.$toast.clear()
      }, 1000)
      
      // this.$http.post(urls.statistics.order, {
      //   StartDate: this.startDate.format('YYYY-MM-DD'),
      //   EndDate: this.endDate.format('YYYY-MM-DD'),
      //   "Uid": this.sellerId,
      // }).then(({data}) => {
      //   data.OrderStatisticsLineChartList = data.OrderStatisticsLineChartList || []
      //   data.OrderStatisticsList = data.OrderStatisticsList || []
      //   this.result = data
      //   this.chartOpts.xAxis.data = data.OrderStatisticsLineChartList.map(item => {
      //     return moment(item.Date).format('MM-DD')
      //   })
          
      //   this.chartOpts.series[0].data = data.OrderStatisticsLineChartList.map(item => {
      //     return item.DayOrderCount
      //   })
      // })
    }
  },
  mounted() {
    this.chooseTimeType(undefined, 0) // 今日
  }
}