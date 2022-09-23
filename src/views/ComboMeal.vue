<template>
  <div class="pageZztc">
    <div class="banner">
      <div class="container">
        <div class="taocan">
          <h2>
            <span class="word">Home</span>
            舒适主张
          </h2>
          <div class="slogan">颜值过人·舒适过分·最优配置·细节控</div>
          <div class="prise">¥119900</div>
          <div class="depict">
            以新房80m²为例
            <br />(各城市价格不同，以门店实际报价为准)
          </div>
        </div>
        <div class="right">
          <div class="example-3d">
            <swiper class="swiper" :options="swiperOption2">
              <swiper-slide>
                <span>实体样板间</span>
                <img
                  style="height:300px"
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/banner-3.png"
                  alt
                />
              </swiper-slide>
              <swiper-slide>
                <span>实体样板间</span>
                <img
                  style="height:300px"
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/banner-1.png"
                  alt
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  style="height:300px"
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/banner-2.png"
                  alt
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionA">
      <div class="container">
        <div class="secTitle">
          <h2>一站式省心家装服务</h2>
        </div>
        <!-- 第二层轮播区域 -->
        <div class="swiper2">
          <div class="swiper-wrapper">
            <!-- 图片区域 -->
            <div class="swiper-slide">
              <!-- 按钮区域 -->
              <div class="picture">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/a-2.png"
                  alt
                />
                <span>我要新房装修</span>
              </div>
              <!-- 右侧区域 -->
              <div class="service">
                <ul>
                  <li>包检测排雷</li>
                  <li>包拆除修复</li>
                  <li>包水电改造</li>
                  <li>包上门量房</li>
                  <li>包基础施工</li>
                  <li>包全屋建材</li>
                  <li>包整体厨卫</li>
                  <li>包定制家具</li>
                  <li>包全程托管</li>
                </ul>
                <a title="美墅设计服务流程" href>
                  美墅设计服务流程
                  <span>一站式</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三层 -->
    <div class="sectionB">
      <div class="container">
        <div class="secTitle">
          <h2>整屋空间配置 升维生活可能性</h2>
        </div>
        <template>
          <swiper class="swiper-container" :options="swiperOption1">
            <!-- 厨房 -->
            <swiper-slide class="slide-1">
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/cf.jpg"
                alt
              />
              <ul class="point">
                <li style="top: 57px; left: 287px">
                  <i></i>
                  <span>法尼尼整体橱柜</span>
                </li>
                <li style="top: 85px; left: 538px">
                  <i></i>
                  <span>老板烟机灶具</span>
                </li>
                <li style="top: 159px; left: 651px">
                  <i></i>
                  <span>马可波罗墙砖</span>
                </li>
                <li style="top: 267px; left: 1042px">
                  <i></i>
                  <span>法尼尼龙头水盆</span>
                </li>
                <li style="top: 480px; left: 352px">
                  <i></i>
                  <span>马可波罗地砖</span>
                </li>
              </ul>
              <div class="spaceFt">
                <dl>
                  <dt>
                    厨房
                    <br />配置
                  </dt>
                  <dd>
                    <span>橱柜</span>
                    <span>厨房五金</span>
                    <span>墙地砖</span>
                    <span>烟机灶具</span>
                    <span>烟机灶具</span>
                    <span>灯具</span>
                    <span>铝扣板吊顶</span>
                    <span>开关插座</span>
                    <span>开关插座</span>
                  </dd>
                </dl>
                <div class="lookAll">
                  <a title="查看全部品牌">查看全部品牌</a>
                </div>
              </div>
            </swiper-slide>
            <!-- 卫生间 -->
            <swiper-slide class="slide-2">
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/wsj.jpg"
                alt
              />
              <ul class="point">
                <li style="top: 68px; left: 248px">
                  <i></i>
                  <span>科勒恒温花洒</span>
                </li>
                <li style="top: 5px; left: 670px">
                  <i></i>
                  <span>友邦铝扣板吊顶</span>
                </li>
                <li style="top: 78px; left: 923px">
                  <i></i>
                  <span>马可波罗墙砖</span>
                </li>
                <li style="top: 238px; left: 352px">
                  <i></i>
                  <span>科鲁迪五金件</span>
                </li>
                <li style="top: 250px; left: 990px">
                  <i></i>
                  <span>西门子插座</span>
                </li>
                <li style="top: 314px; left: 493px">
                  <i></i>
                  <span>科勒抽拉龙头</span>
                </li>
                <li style="top: 420px; left: 956px">
                  <i></i>
                  <span>法尼尼浴室柜</span>
                </li>
                <li style="top: 500px; left: 860px">
                  <i></i>
                  <span>马可波罗地砖</span>
                </li>
              </ul>
              <div class="spaceFt">
                <dl>
                  <dt>
                    卫生间
                    <br />配置
                  </dt>
                  <dd>
                    <span>浴室柜</span>
                    <span>卫浴</span>
                    <span>墙地砖</span>
                    <span>浴霸</span>
                    <span>铝扣板吊顶</span>
                    <span>灯具</span>
                    <span>开关插座</span>
                    <span>开关插座</span>
                  </dd>
                </dl>
                <div class="lookAll">
                  <a title="查看全部品牌">查看全部品牌</a>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide-3">
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/kw.jpg"
                alt
              />
              <ul class="point">
                <li style="top: 134px; left: 166px">
                  <i></i>
                  <span>来威漆乳胶</span>
                </li>
                <li style="top: 277px; left: 146px">
                  <i></i>
                  <span>公牛开关</span>
                </li>
                <li style="top: 474px; left: 1026px">
                  <i></i>
                  <span>大自然地板</span>
                </li>
              </ul>
              <div class="spaceFt">
                <dl>
                  <dt>
                    餐客卧
                    <br />配 置
                  </dt>
                  <dd>
                    <span>地板</span>
                    <span>地板</span>
                    <span>墙地砖</span>
                    <span>内门</span>
                    <span>乳胶漆</span>
                    <span>开关插座</span>
                    <span>开关插座</span>
                  </dd>
                </dl>
                <div class="lookAll">
                  <a title="查看全部品牌">查看全部品牌</a>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </swiper>
        </template>
      </div>
    </div>
    <!-- 第四层 -->
    <div class="sectionC">
      <div class="container">
        <div class="secTitle">
          <h2>6000m²实景展厅 千套真实案例</h2>
          <p>我们的标配 别人的高配</p>
        </div>
        <div class="swiperLifeVR">
          <template>
            <swiper class="swiper" :options="swiperOption3">
              <swiper-slide class="slide-1">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/life12.jpg"
                  alt
                />
                <div class="l1">Good Life</div>
                <div class="z1">
                  <div class="classType">VR旗舰店</div>
                  <div class="typeStyle">liFE 12 +美好生活提案</div>
                  <div class="wordText">
                    探究 12种
                    最舒适的生活方式，国际知名设计师「吴胜人」联合打造。深入
                    挖掘“家”与“生活”的关系和内涵。用生活诠释家，用家承载生活。
                  </div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide class="slide-2">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/man1.png"
                  alt
                />
                <div class="l1">Rambling</div>
                <div class="z1">
                  <div class="classType">漫</div>
                  <div class="typeStyle">北欧风</div>
                  <span>业主：婚纱摄影师</span>
                  <div class="wordText">
                    喜欢自然，那就在阳台 设置一个花房吧
                    ！把森林搬回家，在工作之余享受宁静悠闲，身心完全放松的愉悦，这样的生活，又慢又美。
                  </div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-3">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/huai1.png"
                  alt
                />
                <div class="l1">Conceive</div>
                <div class="z1">
                  <div class="classType">怀</div>
                  <div class="typeStyle">意大利风</div>
                  <span>业主：小学老师</span>
                  <div
                    class="wordText"
                  >爱玩是孩子的天性，设计中平衡好玩耍和学习，把家改成一个有滑梯、有书房的游乐场。让孩子在安全舒适的环境里嬉戏玩耍，不断探索、学习、成长。</div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-4">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/an1.png"
                  alt
                />
                <div class="l1">security</div>
                <div class="z1">
                  <div class="classType">安</div>
                  <div class="typeStyle">复古风</div>
                  <span>业主:退休:"知青"</span>
                  <div class="wordText">
                    <div
                      class="wordText"
                    >新时代的老人，即使退休，也能像年轻人一样享受生活，找回年轻时没有实现的一些梦想。退休不是告别社会，而是为生活按下更新键，开启新的人生体验。</div>
                  </div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-5">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/cong1.png"
                  alt
                />
                <div class="l1">Spoil</div>
                <div class="z1">
                  <div class="classType">宠</div>
                  <div class="typeStyle">美式</div>
                  <span>业主:乐团琴手</span>
                  <div class="wordText">
                    宠物也是家人
                    ，家也应该让宠物感到舒适自在。客厅两面墙设置猫爬架，人与猫既相互陪伴和依存，又互不干扰，烦恼的时候撸一下，是情绪最舒缓的良药。
                  </div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide class="slide-6">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/yuan1.png"
                  alt
                />
                <div class="l1">Source</div>
                <div class="z1">
                  <div class="classType">源</div>
                  <div class="typeStyle">自然主义</div>
                  <span>业主:皮具工作室</span>
                  <div class="wordText">以爱好为事业，家也可以变成工作室；大尺寸操纵台和充足的空间，让居住者可以自由发挥灵感。</div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-7">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/xin1.png"
                  alt
                />
                <div class="l1">letter</div>
                <div class="z1">
                  <div class="classType">信</div>
                  <div class="typeStyle">轻奢风</div>
                  <span>业主:电视节目制作人</span>
                  <div class="wordText">好友相聚，家是最理想的排队场所。围合式的下沉餐厅，营造更温暖亲密的氛围。所有人都能找到合适的位置畅所欲言。</div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-8">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/ai1.png"
                  alt
                />
                <div class="l1">AI</div>
                <div class="z1">
                  <div class="classType">AI</div>
                  <div class="typeStyle">极简主义</div>
                  <span>业主:电视节目制作人</span>
                  <div
                    class="wordText"
                  >科技感的家，应该是什么样？智能让家变得更大，实现更多功能！1个客厅4种模式—私人影院+健身空间+餐厨空间+温馨舒适卧室，实现小空间的极致利用。</div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-9">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/yue1.png"
                  alt
                />
                <div class="l1">Read</div>
                <div class="z1">
                  <div class="classType">阅</div>
                  <div class="typeStyle">日式风</div>
                  <span>业主:广告总监</span>
                  <div class="wordText">
                    探究 12种
                    最舒适的生活方式，国际知名设计师「吴胜人」联合打造。深入
                    挖掘“家”与“生活”的关系和内涵。用生活诠释家，用家承载生活。
                  </div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-10">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/le1.png"
                  alt
                />
                <div class="l1">happy</div>
                <div class="z1">
                  <div class="classType">乐</div>
                  <div class="typeStyle">工业风</div>
                  <span>业主：自由音乐人</span>
                  <div class="wordText">享受音乐是生活中美好的体验感，音乐在传递情绪间藏于心底，留下喜悦。当旋律在房间里萦绕，享受轻松就是对生活的界定。</div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-11">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/jing1.png"
                  alt
                />
                <div class="l1">Boundary</div>
                <div class="z1">
                  <div class="classType">境</div>
                  <div class="typeStyle">新中式</div>
                  <span>业主：素食主义者</span>
                  <div class="wordText">自从爱上喝茶，生活便围绕着茶室中心展开。在禅茶一味里自我调节，修习内心，朋友相聚的时光也变得如茶般回味无穷。</div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-12">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/cao1.png"
                  alt
                />
                <div class="l1">tide</div>
                <div class="z1">
                  <div class="classType">潮</div>
                  <div class="typeStyle">波尔多（海派）</div>
                  <span>业主：游戏主播</span>
                  <div class="wordText">
                    探究 12种
                    最舒适的生活方式，国际知名设计师「吴胜人」联合打造。深入
                    挖掘“家”与“生活”的关系和内涵。用生活诠释家，用家承载生活。
                  </div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-13">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/fan1.png"
                  alt
                />
                <div class="l1">Model</div>
                <div class="z1">
                  <div class="classType">范</div>
                  <div class="typeStyle">莫兰蒂</div>
                  <span>业主：舞蹈家</span>
                  <div class="wordText">对新时代女性而言，生活是舞台，而自己就是生活的最佳C位。如何诠释女性风范？那就是力所能及的给自己最好的生活。</div>
                  <div class="ft">
                    <a href class="forecast">AI预测我的家</a>
                    <a href class="forecast">查看全部案例</a>
                  </div>
                </div>
              </swiper-slide>

              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </template>
        </div>
      </div>
    </div>
    <!-- 第五层遮罩层 -->
    <div class="sectionD">
      <div class="secTitle">
        <h3>家有无限可能 温暖却必须专属</h3>
      </div>
      <div class="zhe">
        <div class="styleCase">
          <a href>
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEzOjEwOjU0LjgxNQ==.jpg"
              alt
            />
            <div class="info">
              <h4>现代简约</h4>
              <p>橡树珑湾 129m² 三居室</p>
            </div>
          </a>
        </div>
        <div class="styleCase">
          <a href>
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEzOjM2OjU5LjQ1NQ==.jpg"
              alt
            />
            <div class="info">
              <h4>现代简约</h4>
              <p>中海寰宇时代 89m² 二居室</p>
            </div>
          </a>
        </div>
        <div class="styleCase">
          <a href>
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEzOjI4OjEyLjkyNw==.jpg"
              alt
            />
            <div class="info">
              <h4>现代简约</h4>
              <p>金融街·金悦嘉苑 109m² 三居室</p>
            </div>
          </a>
        </div>
        <div class="styleCase">
          <a href>
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEzOjIyOjM0LjczOA==.jpg"
              alt
            />
            <div class="info">
              <h4>现代简约</h4>
              <p>金辰府 85m² 二居室</p>
            </div>
          </a>
        </div>
        <div class="styleCase">
          <a href>
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEzOjE3OjEwLjU1NQ==.jpg"
              alt
            />
            <div class="info">
              <h4>现代简约</h4>
              <p>中骏·西山天璟 99m² 三居室</p>
            </div>
          </a>
        </div>
        <div class="styleCase">
          <a href>
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEyOjM0OjMwLjAxMQ==.jpg"
              alt
            />
            <div class="info">
              <h4>现代简约</h4>
              <p>招商都会中心 85m² 二居室</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="sectionE">
      <div class="container">
        <div class="secTitle">
          <h2>看不见的也是大牌</h2>
          <p>对辅材斤斤计较 隐蔽工程不做表面功夫</p>
        </div>
        <div class="auxLogo">
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNmJjNmQxZThkNS1lNGU1LTRlMmUtOWI3OS1iY2VjYzE5N2UzYjVfMjAyMS0wOC0wOVQxNToyODozMS4wNDQ=.jpg"
              alt
            />
          </div>
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNm7nq4vpgqZfMjAyMS0wOC0wOVQxNTo1MDoxMS4wNjA=.jpg"
              alt
            />
          </div>
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNm3nkZ7lo6vopb_ljaFfMjAyMS0wOC0wOVQxNTo1MDowMS42ODU=.jpg"
              alt
            />
          </div>
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNmzkvJ_kvK9fMjAyMS0wOC0wOVQxNTo0OTo1My42NDk=.jpg"
              alt
            />
          </div>
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNmvkvJ_mmJ9fMjAyMS0wOC0wOVQxNTo0OTo0Mi4wMjg=.jpg"
              alt
            />
          </div>
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNmrnibnlj5jnlLXlt6VfMjAyMS0wOC0wOVQxNTo0OTozMi43MzU=.jpg"
              alt
            />
          </div>
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNmnnp4vlj7bljp9fMjAyMS0wOC0wOVQxNTo0OToyMi42NzY=.jpg"
              alt
            />
          </div>
          <div class="ul">
            <img
              src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/a3MyeGJsNmJjNmQxZThkNS1lNGU1LTRlMmUtOWI3OS1iY2VjYzE5N2UzYjVfMjAyMS0wOC0wOVQxNToyODozMS4wNDQ=.jpg"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 最后一层 -->
    <div class="sectionF">
      <div class="container">
        <div class="secTitle">
          <h2>官网预约 服务指南</h2>
        </div>
        <ul>
          <li>
            <span>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/yy-1.png"
                alt
              />
            </span>
            <br />在线预约
          </li>

          <li>
            <span>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/yy-2.png"
                alt
              />
            </span>
            <br />到店咨询
          </li>
          <li>
            <span>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/yy-3.png"
                alt
              />
            </span>
            <br />确定方案
          </li>
          <li>
            <span>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/yy-4.png"
                alt
              />
            </span>
            <br />一站选材
          </li>
          <li>
            <span>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/yy-5.png"
                alt
              />
            </span>
            <br />装修施工
          </li>
          <li>
            <span>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/yy-6.png"
                alt
              />
            </span>
            <br />竣工验收
          </li>
          <li>
            <span>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/yy-7.png"
                alt
              />
            </span>
            <br />收获服务
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  //第一个轮播
  name: "swiper-example-3d-coverflow",
  title: "3D Coverflow effect",
  //第二个轮播
  name: "swiper-example-fade-effect",
  title: "Fade effect",
  //第三个轮播
  name: "swiper-example-3d-flip",
  title: "3D Flip effect",

  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      //第一个轮播
      swiperOption1: {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      //第二个轮播
      swiperOption2: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      //第三个轮播
      swiperOption3: {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style>
.li {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  margin: 0 auto;
  position: relative;
}
.t1,
.t2 {
  width: 200px;
  height: 200px;
  position: absolute;
  text-align: center;
  line-height: 200px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 2s;
}
.t1 {
  transform: rotateY(0deg);
}
.t2 {
  transform: rotateY(-180deg);
}
.li:hover .t1 {
  transform: rotateY(0deg);
}
.li:hover .t2 {
  transform: rotateY(180deg);
}
</style>
<style lang="scss" scoped>
//最后一层
.sectionF {
   margin-top: 100px;
  padding-top: 94px;
  height: 359px;
  background: #f5f6fb;
  > .container {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    > .secTitle {
      padding-bottom: 60px;
      text-align: center;
      > h2 {
        font-size: 30px;
        line-height: 32px;
        font-weight: bold;
      }
    }
    > ul {
      display: flex;
      justify-content: space-between;
      margin-top: -3px;
      font-size: 18px;
      font-weight: 500;
      color: #1e1e1e;
      line-height: 1;
      > li {
        float: left;
        text-align: center;
        > span {
          display: block;
          margin-bottom: 6px;
          height: 71px;
          line-height: 71px;
        }
      }
    }
  }
}
// 第六层反转层
.pageZztc {
  > .sectionE {
    margin-top: 100px;
    height: 680px;
    padding-top: 95px;
    background: url(https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/brand-bg.jpg)
      no-repeat top center;
    > .container {
      position: relative;
      margin: 0 auto;
      width: 1200px;
      > .secTitle {
        padding-bottom: 24px;
        margin-left: 550px;
        > h2 {
          color: #fff;
          font-size: 30px;
          line-height: 32px;
          font-weight: bold;
          margin: 0 auto;
        }
        > p {
          margin-top: 10px;
          color: #fff;
          margin-left: -10px;
        }
      }
      > .auxLogo {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        > .ul {
          margin-left: 80px;
          > img {
            width: 176px;
            height: 176px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}

//第五层遮罩层
.sectionD {
  margin: 0 auto;

  width: 1215px;
  overflow: hidden;

  > .secTitle {
    padding-bottom: 60px;
    text-align: center;
    > h3 {
      font-size: 24px;
      line-height: 1;
    }
  }
  > .zhe {
    margin-left: -15px;
    width: 1215px;
    overflow: hidden;
    > .styleCase {
      float: left;
      margin: 0 0 15px 15px;
      width: 390px;
      height: 260px;
      border-radius: 16px;
      overflow: hidden;
      position: relative;
      > a {
        > img {
          width: 390px;
          height: 260px;
          object-fit: cover;
        }
        > .info {
          width: 490px;
          height: 0px;
          background-color: rgba(0, 0, 0, 0);
          position: absolute;
          left: 0;
          top: -80px;

          transition: all ease 0.5s;
          > h4 {
            font-size: 40px;
            color: #fff;
            margin-left: 90px;
          }
          > p {
            margin-left: 85px;
            color: #fff;
          }
        }
      }
      > a:hover img {
        filter: blur(5px);
      }
      > a:hover .info {
        height: 260px;
        top: 100px;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}

// VR轮播
.slide-1 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 880px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;

      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-2 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-3 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 900px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-4 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-5 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-6 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 900px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-7 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-8 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 780px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-9 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-10 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-11 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-12 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 780px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 930px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.slide-13 {
  position: relative;
  > img {
    border-radius: 10px;
  }
  > .l1 {
    position: absolute;
    left: 730px;
    top: 50px;
    font-size: 80px;
    color: #eceef4;
    line-height: 1;
  }
  > .z1 {
    position: relative;
    > .classType {
      position: absolute;
      left: 730px;
      top: -460px;
      font-size: 30px;
      font-weight: bold;
      color: #111111;
    }
    > .typeStyle {
      position: absolute;
      left: 800px;
      top: -450px;
      font-size: 18px;
      font-weight: 500;
      color: #111111;
      margin: 0 12px;
    }
    > span {
      position: absolute;
      left: 880px;
      top: -448px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
    }
    > .wordText {
      width: 435px;
      font-size: 14px;
      font-weight: 300;
      color: #111111;
      position: absolute;
      left: 730px;
      top: -360px;
    }
    > .ft {
      position: absolute;
      left: 730px;
      top: -60px;
      width: 471px;
      > .forecast {
        color: #111;
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
      > .forecast:hover {
        background-color: #ff6400;
        color: #fff;
      }
      > .lookAll {
        display: block;
        float: left;
        width: 200px;
        height: 40px;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 20px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
}
.swiper {
  width: 300px;
  padding: 50px;

  .swiper-slide {
    background-position: 50%;
    background-size: cover;
    width: 100%;
  }
}

// 第三层轮播图样式
.swiper-container {
  width: 100%;

  > .swiper-slide {
    background-position: center;
    background-size: cover;
  }
}
// 第三层轮播图内部样式
.slide-1 {
  position: relative;
  > .point {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    > li {
      position: absolute;
      color: #fff;
      white-space: nowrap;
      > i {
        position: relative;
        display: inline-block;
        margin-right: 6px;
        width: 14px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        vertical-align: middle;
        > span {
          display: inline-block;
          padding: 0 10px;
          height: 30px;
          line-height: 30px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 15px;
        }
      }
    }
  }
  > .spaceFt {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 94px;
    padding: 22px 70px;
    background: rgba(0, 0, 0, 0.7);
    > dl {
      float: left;
      padding-top: 3px;
      width: 838px;
      color: #fff;
      > dt {
        position: relative;
        float: left;
        padding-right: 95px;
        width: 142px;
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
      }
      > dd {
        height: 44px;
        font-size: 14px;
        line-height: 22px;
        padding-right: 60px;
        overflow: hidden;
        > span {
          margin-right: 16px;
          min-width: 100px;
        }
      }
    }
    > .lookAll {
      float: left;
      padding: 5px 0 5px 30px;
      height: 50px;
      border-left: 1px solid rgba(229, 228, 226, 0.25);
      > a {
        display: block;
        width: 130px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background: #ff6400;
        border-radius: 20px;
      }
    }
  }
}
.slide-2 {
  position: relative;
  > .point {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    > li {
      position: absolute;
      color: #fff;
      white-space: nowrap;
      > i {
        position: relative;
        display: inline-block;
        margin-right: 6px;
        width: 14px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        vertical-align: middle;
        > span {
          display: inline-block;
          padding: 0 10px;
          height: 30px;
          line-height: 30px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 15px;
        }
      }
    }
  }
  > .spaceFt {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 94px;
    padding: 22px 70px;
    background: rgba(0, 0, 0, 0.7);
    > dl {
      float: left;
      padding-top: 3px;
      width: 838px;
      color: #fff;
      > dt {
        position: relative;
        float: left;
        padding-right: 95px;
        width: 142px;
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
      }
      > dd {
        height: 44px;
        font-size: 14px;
        line-height: 22px;
        padding-right: 60px;
        overflow: hidden;
        > span {
          margin-right: 16px;
          min-width: 100px;
        }
      }
    }
    > .lookAll {
      float: left;
      padding: 5px 0 5px 30px;
      height: 50px;
      border-left: 1px solid rgba(229, 228, 226, 0.25);
      > a {
        display: block;
        width: 130px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background: #ff6400;
        border-radius: 20px;
      }
    }
  }
}
.slide-3 {
  position: relative;
  > .point {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    > li {
      position: absolute;
      color: #fff;
      white-space: nowrap;
      > i {
        position: relative;
        display: inline-block;
        margin-right: 6px;
        width: 14px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        vertical-align: middle;
        > span {
          display: inline-block;
          padding: 0 10px;
          height: 30px;
          line-height: 30px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 15px;
        }
      }
    }
  }
  > .spaceFt {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 94px;
    padding: 22px 70px;
    background: rgba(0, 0, 0, 0.7);
    > dl {
      float: left;
      padding-top: 3px;
      width: 838px;
      color: #fff;
      > dt {
        position: relative;
        float: left;
        padding-right: 95px;
        width: 142px;
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
      }
      > dd {
        height: 44px;
        font-size: 14px;
        line-height: 22px;
        padding-right: 60px;
        overflow: hidden;
        > span {
          margin-right: 16px;
          min-width: 100px;
        }
      }
    }
    > .lookAll {
      float: left;
      padding: 5px 0 5px 30px;
      height: 50px;
      border-left: 1px solid rgba(229, 228, 226, 0.25);
      > a {
        display: block;
        width: 130px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background: #ff6400;
        border-radius: 20px;
      }
    }
  }
}
// 第一层轮播图样式

.example-3d {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
  > .swiper {
    height: 100%;
    width: 100%;
    > swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      text-align: center;
      font-weight: bold;

      background-position: center;
      background-size: cover;
    }
  }
}

.pageZztc {
  color: #111;
  > .banner {
    position: relative;
    padding: 97px 0;
    height: 540px;
    background: url(https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/banner.jpg)
      no-repeat center -50px #c0c5c7;

    > .container {
      position: relative;
      margin: 0 auto;
      width: 1200px;
      > .taocan {
        float: left;
        width: 600px;
        padding-left: 72px;
        > h2 {
          color: #111111;
          font-size: 48px;
          line-height: 1;
          > span {
            font-size: 72px;
          }
        }
        > .slogan {
          margin: 15px 0 57px;
          font-size: 24px;
          line-height: 1;
          color: #484848;
        }
        > .prise {
          margin-bottom: 8px;
          font-size: 30px;
          font-weight: 400;
          color: #111111;
          line-height: 1;
        }
        > .depict {
          font-size: 14px;
          color: #484848;
        }
      }
      > .right {
        float: left;
        width: 600px;
        > .example-3d {
          > .swiper {
            > swiper-slide {
              > span {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  > .sectionA {
    height: 643px;
    padding: 98px 0 100px;
    > .container {
      position: relative;
      margin: 0 auto;
      width: 1200px;
      > .secTitle {
        padding-bottom: 60px;
        text-align: center;
        > h2 {
          font-size: 30px;
          line-height: 32px;
          font-weight: bold;
        }
      }
      > .swiper2 {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        > .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          transition-property: transform;
          box-sizing: content-box;
          > .swiper-slide {
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;
            transition-property: transform;
            > .picture {
              float: left;
              position: relative;
              margin-left: 75px;
              > span {
                display: block;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -20px;
                z-index: 1;
                color: #fff;
                font-size: 24px;
                transform: translate(-50%, -50%);
              }
            }
            > .service {
              float: left;
              padding: 25px 0 0 16px;
              width: 386px;

              > ul {
                margin: 0;
                padding: 0;
                list-style: none;
                overflow: hidden;
                > li {
                  float: left;
                  position: relative;
                  height: 18px;
                  width: 114px;
                  margin: 20px 0 0 65px;
                  font-size: 18px;
                  line-height: 18px;
                  white-space: nowrap;
                  overflow: hidden;
                }
                > :before {
                  content: "";
                  display: inline-block;
                  margin-right: 7px;
                  width: 17px;
                  height: 17px;
                  vertical-align: -1px;
                  background: url(https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/zztc/a-icon.png)
                    no-repeat;
                }
              }
              > a {
                position: relative;
                margin: 42px 0 0 66px;
                display: block;
                width: 280px;
                height: 40px;
                font-size: 14px;
                color: #111;
                line-height: 38px;
                text-align: center;
                border: 1px solid #111111;
                border-radius: 20px;
                > span {
                  display: block;
                  position: absolute;
                  top: -1px;
                  right: 0;
                  width: 50px;
                  height: 20px;
                  color: #fff;
                  font-size: 12px;
                  line-height: 20px;
                  background: #ff6400;
                  border-radius: 6px;
                }
              }
            }
          }
        }
      }
    }
  }
  > .sectionB {
    height: 966px;
    padding: 98px 0 100px;
    background: #f5f6fb;
    > .container {
      position: relative;
      margin: 0 auto;
      width: 1200px;
      > .secTitle {
        padding-bottom: 60px;
        text-align: center;
        > h2 {
          font-size: 30px;
          line-height: 32px;
          font-weight: bold;
        }
      }
    }
  }
  > .sectionC {
    height: 1000px;
    padding: 98px 0 100px;
    > .container {
      position: relative;
      margin: 0 auto;
      width: 1200px;
      > .secTitle {
        padding-bottom: 60px;
        text-align: center;
        > h2 {
          font-size: 30px;
          line-height: 32px;
          font-weight: bold;
        }
        > p {
          margin-top: 16px;
          line-height: 1;
          font-size: 14px;
          font-weight: 400;
          color: #484848;
        }
      }
    }
  }
}
</style>
