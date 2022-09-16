<template>
  <div class="managingPatientSize">
    <div style="text-align:center;">美墅装修后台数据统计</div>
    <el-row>
      <el-col :span="6">
        <div ref="pan" id="pan" :style="{width: '150px', height: '150px'}"></div>
      </el-col>
      <el-col :span="12">
      <div ref="myChartChina" :style="{width: '400px', height: '400px'}"></div>

      </el-col>
      <el-col :span="6">1</el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  
  data() {
    
var chartDom = document.getElementById('pan');
var myChart = echarts.init(chartDom);
var option;
option = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);

    return {
      
      
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
   drawLine () {
            let dom = this.$refs.myChartChina
            let myChart = this.$echarts.init(dom)
            function randomData () {
                return Math.round(Math.random() * 500);
            }
            // 绘制图表
            myChart.setOption(  {
                tooltip: {},
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['']
                },
                selectedMode: 'single',
                series: [
                    {
                        name: '',
                        type: 'map',
                        mapType: 'china',
                        center:[115.97, 29.71],
                        layoutCenter: ['80%', '100%'],
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0, 0, 0, 0.2)'
                            },
                            emphasis: {
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        showLegendSymbol: true,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        data: [
                            { name: '北京', value: randomData(50) },
                            { name: '天津', value: randomData() },
                            { name: '上海', value: randomData() },
                            { name: '重庆', value: randomData() },
                            { name: '河北', value: randomData() },
                            { name: '河南', value: randomData() },
                            { name: '云南', value: randomData() },
                            { name: '辽宁', value: randomData() },
                            { name: '黑龙江', value: randomData() },
                            { name: '湖南', value: randomData() },
                            { name: '安徽', value: randomData() },
                            { name: '山东', value: randomData() },
                            { name: '新疆', value: randomData() },
                            { name: '江苏', value: randomData() },
                            { name: '浙江', value: randomData() },
                            { name: '江西', value: randomData() },
                            { name: '湖北', value: randomData() },
                            { name: '广西', value: randomData() },
                            { name: '甘肃', value: randomData() },
                            { name: '山西', value: randomData() },
                            { name: '内蒙古', value: randomData() },
                            { name: '陕西', value: randomData() },
                            { name: '吉林', value: randomData() },
                            { name: '福建', value: randomData() },
                            { name: '贵州', value: randomData() },
                            { name: '广东', value: randomData() },
                            { name: '青海', value: randomData() },
                            { name: '西藏', value: randomData() },
                            { name: '四川', value: randomData() },
                            { name: '宁夏', value: randomData() },
                            { name: '海南', value: randomData() },
                            { name: '台湾', value: randomData() },
                            { name: '香港', value: randomData() },
                            { name: '澳门', value: randomData() }
                        ]
                    }
                ]
            }
            )
        }

  },
};
</script>

<style lang="scss" scoped>
.managingPatientSize {
  height: 100%;
 
  color: orange;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      position: relative;
      #china-map {
        height: 100%;
      }
    }
  }
}
</style>

