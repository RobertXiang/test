<template>
  <div>
    <!-- banner图 -->
    <div id="banner">
      <img src="../assets/img/aboutus-banner.jpg" alt />
    </div>
    <div class="app">
      <!-- 视频和品牌故事 -->
      <div id="sectionA">
        <div id="video" @click="play1()">
          <video
            id="vdo"
            style="background: black"
            src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/upload/20200902/ppsls.mp4"
          ></video>
          <img
            id="play"
            v-if="open"
            src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/ppsl/play.png"
            alt
          />
        </div>
        <div id="pinpai">
          <h2>品牌故事</h2>
          <p>
            装修一个家，本应是幸福新生活的开始，
            <br />但往往令人心力交瘁。
            <br />我们希望改变家装行业，让它变成一场省心之旅，
            <br />让家的美好，简单实现。
            <br />
            <br />2014年10月，爱空间正式成立，致力于通过科技创新，
            <br />建设以“供应链、信息化系统、产业化工人”
            <br />三大基础设施为支柱的标准化家装，
            <br />让每一个中国家庭都能享受靠谱、省心的一站式家装服务。
            <br />
          </p>
        </div>
      </div>
    </div>
    <div id="sectionB">
      <div id="container">
        <div id="file">
          <span class="wow"></span>
          <img
            style="position: absolute; left: 30px; top: -20px"
            src="../assets/img/aboutus-rk.png"
            alt
          />
        </div>
        <div id="dsc">
          <h2>
            权威认可
            <br />领跑家装行业
          </h2>
          <p>
            中国建筑装饰协会权威认证爱空间
            <br />成为标准化家装领先企业
          </p>
        </div>
      </div>
    </div>
    <div id="sectionC">
      <div id="text">
        <h2>
          获顺为、国美资本青睐
          <br />首家完成C轮融资
        </h2>
      </div>
      <div id="img">
        <div class="img1">
          <div class="img11">
            <span>A</span>
            <p>
              Round
              <br />Financing
            </p>
          </div>
          <div class="img12">
            <span>2015.02</span>
            <p>获得顺为资本6000万A轮投资</p>
          </div>
        </div>
        <div class="img2">
          <div class="img21">
            <span>B</span>
            <p>
              Round
              <br />Financing
            </p>
          </div>
          <div class="img22">
            <span>2015.12</span>
            <p>获得景林资本1.35亿B轮投资</p>
          </div>
        </div>
        <div class="img3">
          <div class="img31">
            <span>C</span>
            <p>
              Round
              <br />Financing
            </p>
          </div>
          <div class="img32">
            <span>2017.06</span>
            <p>获得国美资本2.16亿C轮投资</p>
          </div>
        </div>
      </div>
    </div>
    <div id="sectionD">
      <div id="sectionD1">
        <div id="secTitle">
          <img src="../assets/img/aboutus-mmdgz.jpg" alt />
          <div id="secTitleh4">
            <h4>
              连续2年 CCTV－2《秘密大改造》
              <br />指定合作伙伴
            </h4>
          </div>
        </div>
        <div id="box">
          <div id="boximg">
            <img src="../assets/img/aboutus-hbs.jpg" alt />
          </div>
          <div id="sectionD1right">
            <h2>
              联合中国建筑装饰协会
              <br />颁布《红宝书》
              <br />成为家装行业施工与管理规范的
              <br />标准制定者
            </h2>
            <p>
              以“施工流水线”模式变革传统装修，
              <br />拆解16个工种、16道工序，240道工法，保障高品质施工始终如一。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="sectionE">
      <div id="sectionE1">
        <h2>
          发展历程
          <br />
        </h2>坚守初心 勇往直前
        <div id="sectionE2">
          <div id="sectionE20">
            <div class="rec"></div>
            <span class="sectionEs">2014.10</span>
            <p class="sectionEp">开创标准化家装新品类</p>
          </div>
          <div id="sectionE21">
            <div class="rec"></div>
            <span class="sectionEs">2015.03</span>
            <p class="sectionEp">建立行业首个参与感群</p>
          </div>
          <div id="sectionE22">
            <div class="rec"></div>
            <span class="sectionEs">2015.12</span>
            <p class="sectionEp">
              完成1.35亿
              <br />B轮融资
            </p>
          </div>
          <div id="sectionE23">
            <div class="rec"></div>
            <span class="sectionEs">2016.01</span>
            <p class="sectionEp">
              召开行业首届
              <br />产业工人大会
            </p>
          </div>

          <div id="sectionE24">
            <div class="rec"></div>
            <span class="sectionEs">2016.10</span>
            <p class="sectionEp">销售额破10亿</p>
          </div>
          <div id="sectionE25">
            <div class="rec"></div>
            <span class="sectionEs">2017.04</span>
            <p class="sectionEp">
              制定行业标准
              <br />颁布《红宝书》
            </p>
          </div>
          <div id="sectionE26">
            <div class="rec"></div>
            <span class="sectionEs">2017.04</span>
            <p class="sectionEp">
              被认定为标准化家装
              <br />领先企业
            </p>
          </div>
          <div id="sectionE27">
            <div class="rec"></div>
            <span class="sectionEs">2017.06</span>
            <p class="sectionEp">
              业内首个完成C轮融资
              <br />国美领投2.16亿
            </p>
          </div>
          <div id="sectionE28">
            <div class="rec"></div>
            <span class="sectionEs">2017.07</span>
            <p class="sectionEp">
              成为CCTV-2
              <br />《秘密大改造》
              <br />制定施工合作伙伴
            </p>
          </div>
          <div id="sectionE29">
            <div class="rec"></div>
            <span class="sectionEs">2018.09</span>
            <p class="sectionEp">
              开创Matrix产品
              <br />全新模式
            </p>
          </div>
          <div id="sectionE210">
            <div class="rec"></div>
            <span class="sectionEs">2018.11</span>
            <p class="sectionEp">
              小米战略合作
              <br />推出“全屋智能照明”
              <br />安装服务
            </p>
          </div>
          <div id="sectionE211">
            <div class="rec"></div>
            <span class="sectionEs">2019.08</span>
            <p class="sectionEp">
              覆盖全国15城
              <br />服务50000+家庭
            </p>
          </div>
          <div id="sectionE212">
            <div class="rec"></div>
            <span class="sectionEs">2020.09</span>
            <p class="sectionEp">
              爱空间受邀
              <br />参展北京国际设计周
            </p>
          </div>
          <div id="sectionE213">
            <div class="rec"></div>
            <span class="sectionEs">2020.12</span>
            <p class="sectionEp">
              LIFE12+家装理念
              <br />与α-next新品 正式发布
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 覆盖城市 -->
    <div id="sectionF">
      <div id="sectionFtext">
        <h2>覆盖城市</h2>
        <p>服务范围覆盖全国15城</p>
      </div>
      <div id="sectionFimg">
        <img src="../assets/img/aboutus-map.png" alt />
      </div>
      <div id="s1">
        <span></span>
        <p>成都</p>
      </div>
      <div id="s2">
        <span></span>
        <p>贵阳</p>
      </div>
      <div id="s3">
        <span></span>
        <p>武汉</p>
      </div>
      <div id="s4">
        <span></span>
        <p>南昌</p>
      </div>
      <div id="s5">
        <span></span>
        <p>郑州</p>
      </div>
      <div id="s6">
        <span></span>
        <p>广州</p>
      </div>
      <div id="s7">
        <span></span>
        <p>深圳</p>
      </div>
      <div id="s8">
        <span></span>
        <p>西安</p>
      </div>
      <div id="s9">
        <span></span>
        <p>太原</p>
      </div>
      <div id="s10">
        <span></span>
        <p>廊坊</p>
      </div>
      <div id="s11">
        <span></span>
        <p>北京</p>
      </div>
      <div id="s12">
        <span></span>
        <p>天津</p>
      </div>
      <div id="s13">
        <span></span>
        <p>济南</p>
      </div>
      <div id="s14">
        <span></span>
        <p>苏州</p>
      </div>
      <div id="s15">
        <span></span>
        <p>上海</p>
      </div>
    </div>
    <!-- 客户口碑 -->
    <div id="sectionG">
      <h2>客户口碑</h2>
      <br />
      <span>76%口碑推荐率 看得见的硬实力</span>
      <div id="sectionGvideo" @click="play2()">
        <video
          id="vdo2"
          src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/upload/20200902/ppslx.mp4"
        ></video>
        <img
          v-if="open2"
          src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/ppsl/play.png"
          alt
        />
      </div>
    </div>
    <!-- 底部 -->
    <!-- <div id="sectionH">
      <div>
        <img src="../assets/img/about-data_b.jpg" alt="" />
      </div>
      <div id="sectionHbox">
        <div id="sectionH1">
          <h2 style="margin-bottom: 100px">
            美墅设计 <br />让家的美好,简单实现
          </h2>
        </div>
        <div id="sectionH2">
          <div>
            <h2>No.1</h2>
            <p>标准化家装开创者</p>
          </div>
          <div>
            <h2>70000+</h2>
            <p>家庭信赖首选</p>
          </div>
          <div>
            <h2>72.7%</h2>
            <p>NPS净推荐值</p>
          </div>
          <div>
            <h2>15 家</h2>
            <p>直营分公司</p>
          </div>
          <div>
            <h2>一线</h2>
            <p>品质环保建材</p>
          </div>
          <div>
            <h2>10 年</h2>
            <p>水电防水质保</p>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true, //默认不播放
      open2: true
    };
  },
  methods: {
    play1() {
      console.log("点击到视频div");
      let player = document.getElementById("vdo");
      if (player.paused) {
        // 让播放器开始播放
        player.play();
        this.open = false;
      } else {
        player.pause();
        this.open = true;
      }
    },
    play2() {
      console.log("点击到视频div");
      let player = document.getElementById("vdo2");
      if (player.paused) {
        // 让播放器开始播放
        player.play();
        this.open2 = false;
      } else {
        player.pause();
        this.open2 = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  color: black !important;
  margin-bottom: 15px;
  line-height: 1.2;
  font-size: 30px;
  font-weight: bold;
}
#banner {
  img {
    width: 100%;
  }
}
.app {
  width: 1200px;
  margin: 0 auto;
  #sectionA {
    padding: 100px 0 90px;
    background: #fff;
    #video {
      width: 800px;
      margin-bottom: 50px;
      video {
        margin: 0 200px;
        width: 100%;
      }
    }
    #pinpai {
      text-align: center;
      color: black;
    }
  }
}
#sectionA {
  #video {
    position: relative;
    #play {
      position: absolute;
      top: 50%;
      left: 75%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }
  }
}
#sectionB {
  width: 100vw;
  background: #f5f6fb;
  height: 639px;
  padding: 122px 0 100px;
  #container {
    width: 800px;
    margin: 0 auto;
    display: flex;
    #file {
      position: relative;
      .wow {
        display: block;
        position: absolute;
        left: 0px;
        width: 417px;
        height: 417px;
        background-color: #ff6400;
        border-radius: 50%;
      }
    }
    #dsc {
      margin-left: 450px;
      margin-top: 120px;
    }
  }
}
#sectionC {
  width: 1200px;
  margin: 0 auto;
  padding: 100px 100px;
  #text {
    margin-bottom: 45px;
  }
  #img {
    display: flex;
    height: 600px;
    .img1 {
      width: 300px;
      background: url(../assets/img/aboutus-A.jpg) no-repeat;
      background-size: 100%;
      .img11 {
        display: flex;
        span {
          color: #fff !important;
          margin-left: 20px;
          margin-top: 10px;
          font-size: 40px;
        }
        p {
          display: inline-block;
          color: #fff;
          margin-top: 20px;
          margin-left: 5px;
          font-size: 14px;
        }
      }
      .img12 {
        color: #fff;
        margin-top: 280px;
        margin-left: 20px;
        span {
          font-size: 30px;
        }
        p {
          font-size: 14px;
        }
      }
    }

    .img2 {
      background: url(../assets/img/aboutus-B.jpg) no-repeat;
      background-size: 100%;
      width: 300px;
      margin-top: 80px;
      .img21 {
        display: flex;
        margin-top: 10px;
        margin-left: 20px;
        span {
          font-size: 40px;
          color: #fff;
        }
        p {
          margin-left: 5px;
          margin-top: 10px;
          font-size: 14px;
          color: #fff;
        }
      }
      .img22 {
        margin-top: 280px;
        margin-left: 20px;
        color: #fff;
        span {
          font-size: 30px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .img3 {
      background: url(../assets/img/aboutus-C.jpg) no-repeat;
      background-size: 100%;
      width: 300px;
      .img31 {
        display: flex;
        color: #fff;
        margin-left: 20px;
        margin-top: 10px;
        span {
          font-size: 40px;
        }
        p {
          margin-top: 10px;
        }
      }
      .img32 {
        color: #fff;
        margin-top: 280px;
        margin-left: 20px;
        span {
          font-size: 30px;
        }
      }
    }
  }
}
#sectionD1 {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0 0 400px;
  #secTitle {
    img {
      width: 100%;
    }
    #secTitleh4 {
      width: 1200px;
      position: absolute;
      margin: 0 auto !important;
      text-align: center;
      top: 0;
      h4 {
        margin-top: 20px;
        font-weight: bold;
        font-size: 24px;
        line-height: 1.1;
      }
    }
  }
  #box {
    width: 800px;
    height: 400px;
    background: #f5f6fb;
    position: absolute;
    top: 400px;
    left: 200px;
    display: flex;
    #boximg {
      margin-left: 100px;
      margin-top: 50px;
      width: 200px;
      img {
        width: 100%;
      }
    }
    #sectionD1right {
      margin-left: 20px;
      margin-top: 90px;
    }
  }
}
.rec {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff6400;
  transform: translate(-50%, -50%);
}
.sectionEs {
  font-size: 20px;
  color: #ff6400;
  margin-left: 5px;
}
.sectionEp {
  font-size: 10px;
  margin-left: 5px;
}
#sectionE {
  background: url(../assets/img/aboutus-licheng.png) no-repeat;
  background-size: 100%;
  padding-top: 100px;
  width: 1900px;
  height: 600px;
  margin: 200px auto 0;
  position: relative;
  #sectionE1 {
    position: absolute;
    top: -200px;
    left: 550px;
    width: 800px;
    margin: 0 auto;
  }
  #sectionE2 {
    width: 800px;
    position: relative;
    top: 50px;
  }
  #sectionE20 {
    height: 250px;
    position: absolute;
    top: 100px;
    border-left: 1px solid #ff6400;
  }
  #sectionE21 {
    height: 240px;
    position: absolute;
    top: 170px;
    left: 60px;
    border-left: 1px solid #ff6400;
  }
  #sectionE22 {
    height: 140px;
    position: absolute;
    top: 240px;
    left: 120px;
    border-left: 1px solid #ff6400;
  }
  #sectionE23 {
    height: 270px;
    position: absolute;
    top: 60px;
    left: 170px;
    border-left: 1px solid #ff6400;
  }
  #sectionE24 {
    height: 190px;
    position: absolute;
    top: 150px;
    left: 220px;
    border-left: 1px solid #ff6400;
  }
  #sectionE25 {
    height: 90px;
    position: absolute;
    top: 220px;
    left: 260px;
    border-left: 1px solid #ff6400;
  }
  #sectionE26 {
    height: 260px;
    position: absolute;
    top: 20px;
    left: 320px;
    border-left: 1px solid #ff6400;
  }
  #sectionE27 {
    height: 190px;
    position: absolute;
    top: 90px;
    left: 380px;
    border-left: 1px solid #ff6400;
  }
  #sectionE28 {
    height: 100px;
    position: absolute;
    top: 190px;
    left: 430px;
    border-left: 1px solid #ff6400;
  }
  #sectionE29 {
    height: 270px;
    position: absolute;
    top: 50px;
    left: 490px;
    border-left: 1px solid #ff6400;
  }
  #sectionE210 {
    height: 210px;
    position: absolute;
    top: 120px;
    left: 550px;
    border-left: 1px solid #ff6400;
  }
  #sectionE211 {
    height: 120px;
    position: absolute;
    top: 230px;
    left: 600px;
    border-left: 1px solid #ff6400;
  }
  #sectionE212 {
    height: 320px;
    position: absolute;
    top: -20px;
    left: 660px;
    border-left: 1px solid #ff6400;
  }
  #sectionE213 {
    height: 100px;
    position: absolute;
    top: 150px;
    left: 720px;
    border-left: 1px solid #ff6400;
  }
}
#sectionF {
  width: 100vw;
  background-color: black;
  margin: 0 auto;
  padding: 100px;
  position: relative;
  #s1 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 33%;
    left: 50%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s2 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 27%;
    left: 53%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s3 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 35%;
    left: 58%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s4 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 28%;
    left: 60%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s5 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 41%;
    left: 58%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s6 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 19%;
    left: 58%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s7 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 20%;
    left: 60%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s8 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 43%;
    left: 55%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s9 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 49%;
    left: 57%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s10 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 50%;
    left: 59.5%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s11 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 54%;
    left: 60%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s12 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 53%;
    left: 61%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s13 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 45%;
    left: 61%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s14 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 35%;
    left: 64%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #s15 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ff6400;
    position: absolute;
    bottom: 33%;
    left: 65%;
    > p {
      display: none;
      color: #fff;
    }
    &:hover > p {
      display: block;
    }
  }
  #sectionFtext {
    text-align: center;
    color: #fff !important;
    h2 {
      color: #fff !important;
    }
  }
  #sectionFimg {
    width: 800px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
#sectionG {
  width: 1200px;
  margin: 0 auto;
  padding: 100px;
  text-align: center;
  #sectionGvideo {
    width: 800px;
    margin-top: 50px;
    position: relative;
    > video {
      width: 100%;
      margin-left: 100px;
    }
    > img {
      position: absolute;
      top: 50%;
      left: 65%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }
  }
}
// #sectionH {
//   position: relative;
//   img {
//     width: 100%;
//   }
//   #sectionHbox {
//     position: absolute;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     top: 300px;
//     width: 600px;
//     margin: 0 auto;
//     color: #fff !important;
//     text-align: center;
//     h2 {
//       color: #fff !important;
//     }
//     #sectionH1 {
//       width: 500px;
//       margin: 0 auto;
//       text-align: center;
//     }
//     #sectionH2 {
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-between;
//       > div {
//         width: 200px;
//         margin-bottom: 50px;
//       }
//     }
//   }
// }
</style>
