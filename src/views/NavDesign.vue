<template>
  <div class="nav-design">
    <van-nav-bar title="免费设计" left-arrow />
    <img src="/head.png" alt="" />
    <div>
      <div class="white">
        <div class="nav-design-item-img">
          <div class="bt">
            <span class="xing">*</span><span>您的房子是?</span>
          </div>
          <div v-for="(i, index) in house" :key="index">
            <img @click="now = index" :src="i" alt="" />
            <img :src="now == index ? 'duigou.png' : 'noneIcon.png'" />
          </div>
        </div>
      </div>
      <div class="design-2">
        <div class="bt">
          <span class="xing">*</span><span>您计划和谁一起住?</span>
        </div>
        <div>
          <div class="design-2-1">
            <img
              @click="now1 = 1"
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/mfsj/live1.png"
              alt=""
            />
            <img :src="now1 == 1 ? '/duigou.png' : ''" alt="" />
            <div>就我自己</div>
          </div>
          <div class="design-2-1">
            <img
              @click="now1 = 2"
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/mfsj/live2.png"
              alt=""
            />
            <img :src="now1 == 2 ? '/duigou.png' : ''" alt="" />
            <div>和另一半</div>
          </div>
          <div class="design-2-1">
            <img
              @click="now1 = 3"
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/mfsj/live3.png"
              alt=""
            />
            <img :src="now1 == 3 ? '/duigou.png' : ''" alt="" />
            <div>亲子共住</div>
          </div>
        </div>
        <div class="design-2-2">
          <div @click="lr = !lr">
            <img :src="lr ? '/sel2.png' : '/sel1.png'" alt="" />
            <span>有老人</span>
          </div>
          <div @click="cw = !cw">
            <img :src="cw ? '/sel2.png' : '/sel1.png'" alt="" />
            <span>有宠物</span>
          </div>
        </div>
      </div>
      <div class="design-3">
        <div class="bt">
          <span class="xing">*</span><span>您更喜欢哪种装修风格?</span>
        </div>
        <div class="design-3-1">
          <div v-for="(img, index) in style" :key="index">
            <img @click="now3 = index" :src="img" alt="" />
            <img :src="now3 == index ? 'duigou.png' : 'noneIcon.png'" alt="" />
          </div>
        </div>
      </div>
      <div class="design-3">
        <div class="bt">
          <span>你想要的个性空间(可多选)</span>
        </div>
        <div class="design-3-1">
          <div v-for="(img, index) in space" :key="index">
            <img
              @click="space[index].dj = !space[index].dj"
              :src="img.img"
              alt=""
            />
            <img :src="space[index].dj ? 'duigou.png' : 'sel2.png'" />
          </div>
        </div>
      </div>
      <div class="design-4">
        <div class="bt"><span class="xing">*</span><span>卫生间偏好</span></div>
        <div>
          <span
            @click="preferenceNow = index"
            :class="{ active: preferenceNow == index }"
            v-for="(i, index) in preference"
            :key="index"
            >{{ i }}</span
          >
        </div>
      </div>
      <div class="design-5">
        <div class="bt">
          <span>其他装修需求(可多选)</span>
        </div>
        <div>
          <span
            @click="item.xz = !item.xz"
            :class="{ active: item.xz }"
            v-for="(item, index) in other"
            :key="index"
            >{{ item.item }}</span
          >
        </div>
      </div>
      <div class="design-6">
        <div class="bt"><span class="xing">*</span><span>房屋状态</span></div>
        <div>
          <div @click="HouseStatu = !HouseStatu">
            <img :src="HouseStatu ? 'sel1.png' : 'sel2.png'" alt="" />
            老房
          </div>
          <div @click="HouseStatu = !HouseStatu">
            <img :src="HouseStatu ? 'sel2.png' : 'sel1.png'" alt="" />
            新房
          </div>
          <div>*新房=毛坯房, 不含拆除。</div>
        </div>
        <div><input type="text" placeholder="请输入手机号:" /></div>
      </div>
      <div class="design-7">
        <button>领取方案</button>
      </div>
      <div class="design-footer">
        <div>
          <span>首页</span>
          <span>app下载</span>
          <span>关于我们</span>
        </div>
        <div>
          — 美墅科技（成都）有限公司 京ICP备15007819号-1 —
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HouseStatu: false,
      now: null,
      now1: null,
      now3: null,
      lr: true,
      cw: true,
      preferenceNow: null,
      house: ["house1.png", "house2.png", "house3.png", "house4.png"],
      style: [
        "style1.png",
        "style2.png",
        "style3.png",
        "style4.png",
        "style5.png",
        "style6.png",
        "style7.png",
      ],
      space: [
        { img: "space1.png", dj: false },
        { img: "space2.png", dj: false },
        { img: "space3.png", dj: false },
        { img: "space4.png", dj: false },
        { img: "space5.png", dj: false },
        { img: "space6.png", dj: false },
      ],
      preference: ["干湿分离", "浴缸", "淋浴房"],
      other: [
        { item: "定制家具", xz: false },
        { item: "暖气", xz: false },
        { item: "全屋净水", xz: false },
        { item: "防盗门", xz: false },
        { item: "外窗", xz: false },
        { item: "热水器", xz: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.white {
  background-color: white;
}
.bt {
  margin: 0 15px;
}
.xing {
  color: red;
}
.nav-design {
  background-color: #f5f5f5;
  > img {
    width: 100%;
  }
  > div:nth-child(3) {
    margin: 15px;
    border-radius: 8px;
  }
}
.nav-design-item-img {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    width: 48%;
    position: relative;
    margin-top: 10px;
    > img:nth-child(1) {
      width: 100%;
    }
    > img:nth-child(2) {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 25px;
    }
  }
}
.design-2 {
  margin-top: 20px;
  padding: 10px 0;
  background-color: white;
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }

  .design-2-1 {
    margin-top: 15px;
    position: relative;
    width: 30%;
    text-align: center;

    > img:nth-child(1) {
      width: 80%;
    }
    > img:nth-child(2) {
      position: absolute;
      bottom: 15px;
      right: 0px;
      width: 25px;
    }
  }
}
.design-2-2 {
  display: flex;
  margin: 20px 0;
  > div {
    display: flex;
    border: 1px solid #dddddd;
    padding: 10px;
    margin-left: 20px;
    border-radius: 50px;
    > span {
      font-size: 25px;
      margin-right: 10px;
    }
    > img {
      padding-top: 6px;
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
  }
}
.design-3 {
  margin-top: 40px;
  padding: 10px 0;
  background-color: white;
  .design-3-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px;
    > div {
      width: 32%;
      position: relative;
      > img:nth-child(1) {
        width: 100%;
      }
      > img:nth-child(2) {
        width: 20px;
        position: absolute;
        right: 5px;
        top: 5px;
      }
    }
  }
}
.design-4 {
  margin: 20px 0;
  background-color: white;
  padding: 10px 0;
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > span {
      margin: 10px;
      width: 20%;
      text-align: center;
      border: 1px solid #f1f2f4;
      padding: 5px 10px;
      &.active {
        border-color: #ffaa6e;
        color: #ffaa6e;
      }
    }
  }
}
.design-5 {
  margin: 20px 0;
  background-color: white;
  padding: 10px 0;
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > span {
      border-radius: 20px;
      margin: 10px;
      width: 20%;
      text-align: center;
      border: 1px solid #f1f2f4;
      padding: 5px 10px;
      &.active {
        border-color: #ffaa6e;
        color: #ffaa6e;
      }
    }
  }
}
.design-6 {
  padding-top: 10px;
  background-color: white;
  > div:nth-child(2) {
    margin-top: 15px;
    display: flex;
    height: 30px;
    line-height: 30px;
    text-align: center;
    > div:nth-child(3) {
      margin-left: auto;
    }
    > div:nth-child(3) {
      color: #999999;
      font-size: 0.7rem;
    }
    > div {
      margin-left: 15px;
      > img {
        width: 14px;
      }
    }
  }
  > div:nth-child(3) {
    margin-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    > input {
      background-color: #f5f5f5;
      border: none;
      padding: 10px;
      width: 80%;
      border-radius: 10px;
    }
  }
}
.design-7{
  width: 100%;
  text-align: center;
  margin: 30px 0;
  >button{
    width: 100%;
    background-color: #ff6400;
    color: white;
    border: none;
    padding: 10px 0;
    border-radius: 10px;
  }
}
.design-footer{
  width: 100%;
  font-size: 12px;
  padding-bottom: 50px;
  >div{
    margin: 10px 0;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
  }
}
</style>
