<template>
  <div>
    <van-nav-bar title="看案例" left-text="" left-arrow>
    </van-nav-bar>

   <van-row gutter="1" class="a1">
     <van-col span="3">风格</van-col>
     <van-tabs>
        <van-tab v-for="index in 12" :title="'标签'">
       </van-tab>
     </van-tabs>
   </van-row>

   <van-row gutter="1">
    <van-col span="3">户型</van-col>
     <van-tabs>
       <van-tab v-for="index in 6" :title="'标签'">
       </van-tab>
     </van-tabs>
   </van-row>

   <van-row gutter="1">
     <van-col span="3">面积</van-col>
     <van-tabs>
       <van-tab v-for="index in 7" :title="'标签'">
       </van-tab>
     </van-tabs>
   </van-row>
    
   <!-- <van-grid :border="false" :column-num="2">
  <van-grid-item text="锦绣天伦112平米三居室现代简约风装修案例">
    <van-image src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg" />
     <van-tag color="#969799" size="small">标签</van-tag>
  </van-grid-item>

  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid> -->
  
  <!-- <van-grid :column-num="2">
     <van-grid-item 
     v-for="value in 6" 
     :key="value" 
     
     text="文字" />
      <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid> -->
<div class="t">
      <ul>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg"
            alt=""
          />
          <span>锦绣天伦平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>

       <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z20yXzIwMjItMDQtMDdUMTg6MDA6MDQuNDg0.jpg"
            alt=""
          />
          <span>骏景花园95平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>
      </ul>
      <ul>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg"
            alt=""
          />
          <span>锦绣天伦112平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>

       <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z20yXzIwMjItMDQtMDdUMTg6MDA6MDQuNDg0.jpg"
            alt=""
          />
          <span>骏景花园95平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>
      </ul>
      <ul>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg"
            alt=""
          />
          <span>锦绣天伦112平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>

       <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z20yXzIwMjItMDQtMDdUMTg6MDA6MDQuNDg0.jpg"
            alt=""
          />
          <span>骏景花园95平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>
      </ul>
      <ul>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg"
            alt=""
          />
          <span>锦绣天伦112平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>

       <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z20yXzIwMjItMDQtMDdUMTg6MDA6MDQuNDg0.jpg"
            alt=""
          />
          <span>骏景花园95平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>
      </ul>
      <ul>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg"
            alt=""
          />
          <span>锦绣天伦112平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>

       <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z20yXzIwMjItMDQtMDdUMTg6MDA6MDQuNDg0.jpg"
            alt=""
          />
          <span>骏景花园平米三居室现代简约风装修案例</span>
          <del style="float:left">北欧风·98m²</del>
          <del style="float:right">北京</del>
          <br>
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
          <button class="button disabled3">色彩搭配</button>
        </li>
      </ul>
    </div>
   
   <!-- <van-tag color="#969799" size="small">标签</van-tag>
   <van-tag color="#f2826a" size="small">标签</van-tag>
   <van-tag color="#969799" size="small">标签</van-tag> -->

  
  </div>
</template>

 
<script>
// export default {
//   data() {
//     return {
//        title: [
//     "全部","日式","极简风","法式风","复古风","现代简约","新中式","美式","北欧风","轻奢风","工业风","INS风"],
//     num:''
//     };
//   }
//   }
</script>
<style>
/* 看案例 */
.van-nav-bar__content {
  padding-top: 4vh;
}
.van-nav-bar .van-icon {
  font-size: 18px;
  color: gray;
}
.van-nav-bar__title {
  font-weight: 600;
  color: rgba(75, 67, 94);
  font-size: 1rem;
}
.van-nav-bar__left {
  padding-top: 4vh;
}
/* 滑动 */

 .van-row{
  margin: 10px;
  margin-top:15px ;
  align-items:baseline;
  
}
.van-col{
  text-align: justify;
}
.van-tab{
  text-align: justify;
  display: inline-block;
  
}

.van-tabs__line {
    /* display: none; */
    /* position: absolute; */
    bottom: 10px;
    left: 0;
    /* z-index: 1; */
    /* display: inline; */
} 

 .t {
  padding: 0 10px;
}
.t ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.t ul li {
  background-color: white;
  width: 46vw;
  height: 40vh;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
  
}
.t ul li img {
  width: 100%;
  height: 22vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
}
.t ul li span {
  font-size: 15px;
  display: block;
  margin: 0 5px;
  overflow:hidden;
  height: 40px;
}

.t ul li del { 
  
  justify-content: space-between;
  margin-left: 5px;
  display: inline-block;
  font-size: 12px;
  color: rgb(145, 140, 140);
}
.disabled1{
  background-color: rgb(160, 155, 155);
  border: none;
  border-radius: 1px;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}
.disabled2{
  background-color: #e49f6e;
  border: none;
  border-radius: 1px;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}
.disabled3{
  background-color: rgb(160, 155, 155);
  border: none;
  border-radius: 1px;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}
</style>