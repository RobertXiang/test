<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="十秒装修报价" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 图片 -->
    <van-image width="100%" height="100%" src="zhuangxiu.jpg" />
      <!-- 图片下方按钮 -->
  <van-row>
    <van-col span='1'></van-col>
  <van-col span="10">
    <van-button type="warning"  size="large" icon="fire-o">新房装修</van-button>
  </van-col>
 <van-col span='2'></van-col>
  <van-col span="10">
    <van-button  color="#aaa"  size="large" icon='like-o'>老房改造</van-button>
  </van-col>
 <van-col span='1'></van-col>
</van-row>

<!-- 表单-->
<van-form validate-first>
  <!-- 地址选择框 -->
  <van-field
  v-model="defaultValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="citydata"
    @close="show = false"
    @finish="onFinish"
  />
</van-popup>
  <!-- 通过 pattern 进行正则校验 -->
  <van-field
    v-model="value1"
    name="pattern"
      label="面积"
    placeholder="输入面积 可填至小数点后两位"
    :rules="[{ pattern, message: '请输入正确内容' }]"
    icon=''
  />
  <van-field
    v-model="value2"
    name="pattern1"
      label="手机号"

    placeholder="联系方式，方便提供装修服务"
    :rules="[{ pattern, message: '请输入正确内容' }]"
    icon='phone'
  />
 
  <div style="margin: 16px;">
    <van-button  block type="warning" native-type="submit">计算精准报价</van-button>
  </div>
</van-form>
<!-- 底部栏 -->
<div class="tabbar" style="display:flex;background-color:#aaa;">
  <van-row>
    <van-col style="display:flex;flex-direction:column;" span='10'>
    <van-icon name="phone-o"></van-icon>
    <span>8888-8888888</span>
    </van-col>
    <van-col style="display:flex;flex-direction:column" span='10'>
      <van-icon name='records'></van-icon>
      <span>装修报价</span>
    </van-col>

</van-row>
  <van-button round color="orange">立即预约</van-button>
</div>

  </div>
</template>

<script>
// import citydata from '@/assets/js/citydata.js'
export default {
  data() {
    return {
     
      defaultValue:'',
      cascaderValue:'',
      show:false,
     citydata:[],
           value1: '',
      value2: '',
    
        pattern: /\d{9}/,
        
    }
  },
   mounted() {
   
  },
  methods: {
    //箭头符号点击后返回到首页
    onClickLeft () {
     this.$router.push('/')
     //
    },
     // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      // this.show = false;
      // this.fieldValue = selectedOptions.map((option) => option.text).join('/');
      
    },
    

    

  },
}
</script>

<style>
.van-nav-bar .van-icon{
  color: #353a3f !important;
}
.van-nav-bar__text {
    color: #353a3f !important;
}
.tabbar{
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
 opacity: 80%;
 text-align: center;
 line-height: 100%;
}
</style>