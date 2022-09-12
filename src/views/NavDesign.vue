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
          <div v-for="(house, index) in houses" :key="index">
            <img @click="now = index" :src="house.img" alt="" />
            <img :src="now == index ? 'duigou.png' : 'noneIcon.png'" />
          </div>
        </div>
      </div>
      <div class="design-2">
        <div class="bt">
          <span class="xing">*</span><span>您计划和谁一起住?</span>
        </div>
        <div>
          <div class="design-2-1" v-for="(live, index) in lives" :key="index">
            <img @click="now1 = index" :src="live.img" alt="" />
            <img :src="now1 == index ? '/duigou.png' : ''" alt="" />
            <div>{{ live.liveType }}</div>
          </div>
        </div>
        <div class="design-2-2">
          <div @click="choices[0].elderly = !choices[0].elderly">
            <img :src="choices[0].elderly ? '/sel2.png' : '/sel1.png'" alt="" />
            <span>{{ choices[0].choice }}</span>
          </div>
          <div @click="choices[1].pets = !choices[1].pets">
            <img :src="choices[1].pets ? '/sel2.png' : '/sel1.png'" alt="" />
            <span>{{ choices[1].choice }}</span>
          </div>
        </div>
      </div>
      <div class="design-3">
        <div class="bt">
          <span class="xing">*</span><span>您更喜欢哪种装修风格?</span>
        </div>
        <div class="design-3-1">
          <div v-for="(item, index) in styles" :key="index">
            <img @click="now3 = index" :src="item.img" alt="" />
            <img :src="now3 == index ? 'duigou.png' : 'noneIcon.png'" alt="" />
          </div>
        </div>
      </div>
      <div class="design-3">
        <div class="bt">
          <span>你想要的个性空间(可多选)</span>
        </div>
        <div class="design-3-1">
          <div v-for="(space, index) in spaces" :key="index">
            <img
              @click="spaces[index].space = !spaces[index].space"
              :src="space.img"
              alt=""
            />
            <img :src="spaces[index].space ? 'duigou.png' : 'sel2.png'" />
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
        <div>— 美墅科技（成都）有限公司 京ICP备15007819号-1 —</div>
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
      houses: [
        { img: "house1.png", houseType: "LOFT" },
        { img: "house2.png", houseType: "平层住宅" },
        { img: "house3.png", houseType: "复式住宅" },
        { img: "house4.png", houseType: "LOFT" },
      ],
      lives: [
        { img: "live1.png", liveType: "就我自己" },
        { img: "live2.png", liveType: "和另一半" },
        { img: "live3.png", liveType: "亲子共住" },
      ],
      choices: [
        { choice: "有老人", elderly: true },
        { choice: "有宠物", pets: true },
      ],

      styles: [
        {img:"style1.png",style:'轻奢风'},
        {img:"style2.png",style:'北欧风'},
        {img:"style3.png",style:'日式'},
        {img:"style4.png",style:'美式'},
        {img:"style5.png",style:'现代简约'},
        {img:"style6.png",style:'新中式'},
        {img:"style7.png",style:'新古典'},
      ],
      spaces: [
        { img: "space1.png", space: false },
        { img: "space2.png", space: false },
        { img: "space3.png", space: false },
        { img: "space4.png", space: false },
        { img: "space5.png", space: false },
        { img: "space6.png", space: false },
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
.design-7 {
  width: 100%;
  text-align: center;
  margin: 30px 0;
  > button {
    width: 100%;
    background-color: #ff6400;
    color: white;
    border: none;
    padding: 10px 0;
    border-radius: 10px;
  }
}
.design-footer {
  width: 100%;
  font-size: 12px;
  padding-bottom: 50px;
  > div {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
  }
}
</style>
