import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'

export default {
  components: {
    chart: ECharts
  },
  data () {
    return {
      chartOpts: {
        title: {
          text: '世界人口总量',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [12, 22, 33, 44, 56, 45]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [11, 32, 43, 64, 66, 65]
          }
        ]
      }
    }
  },
  methods: {}
}
