<template>
  <div>
    <van-nav-bar title="设计师" left-arrow />
    <img
      class="nav-detail"
      src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/mxsjs/banner.png"
      alt=""
    />
    <ul>
      <span>设计师榜</span>
      <li v-for="i in 20" :key="i">
        <div>
          <div>
            <div>
              <img
                class="img-portrait"
                src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/f6ac5cd8/c26e956c/7b635a95/d0524ddf/5pyq5qCH6aKYLTFfMjAyMi0wOC0yNVQxNTo0Mzo1Ny4xMTY=.jpg"
                alt=""
              />
            </div>
            <div>
              <h4>刘</h4>
              <div>服务案例...</div>
              <div>设计风格</div>
            </div>
          </div>
          <div>
            <span>用户质询</span>
            <van-button size="mini" type="info">1v1和TA沟通</van-button>
          </div>
        </div>
        <div>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d8a7f1e3/0d0cebe8/a7866103/40f20a4f/5a6i6aSQ5Y6FICgxKV8yMDIyLTA4LTI1VDE1OjU3OjQ5LjkxNw==.jpg"
            alt=""
          />
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d8a7f1e3/0d0cebe8/a7866103/40f20a4f/5pyq5qCH6aKYLTFfMjAyMi0wOC0yNVQxNTo1ODowMC40NTI=.jpg"
            alt=""
          />
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d8a7f1e3/0d0cebe8/a7866103/40f20a4f/5pyq5qCH6aKYLTFfMjAyMi0wOC0yNVQxNTo1ODoxMC43OTM=.jpg"
            alt=""
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-detail {
  width: 100vw;
}
ul {
  margin: 15px;
  li {
    padding: 15px;
    background-color: #fafafa;
    margin: 10px;
    border-radius: 5px;
    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      > img {
        width: 30%;
        border-radius: 5px;
      }
    }
    > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
      }
      > div:nth-child(1) {
        display: flex;
        > div:nth-child(2) {
          margin-left: 10px;
          > h4 {
            padding: 0;
            margin: 0;
          }
          > div {
            font-size: 10px;
            margin-top: 3px;
          }
        }
      }
    }
  }
  .img-portrait {
    border-radius: 50%;
    width: 70px;
  }
}
</style>
