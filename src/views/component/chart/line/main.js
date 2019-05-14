import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'

export default {
  components: {
    chart: ECharts
  },
  data () {
    return {
      chartOpts: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line' // 图表类型
          }
        ]
      }
    }
  },
  methods: {}
}
