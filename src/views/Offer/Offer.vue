<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }" style="font-size:20px;color:white">首页</el-breadcrumb-item>
      <el-breadcrumb-item style="font-size:20px;color:white">报价管理</el-breadcrumb-item>
     
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card  style="background-color:#20283F;border: #20283F;">
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table border :data="data" style="width: 100%">
        <el-table-column prop="mid" width="50">
        </el-table-column>
        <el-table-column prop="HouseStatu" label="房屋状态" width="120">
        </el-table-column>
        <el-table-column prop="house" label="房屋类型" width="120">
        </el-table-column>
        <el-table-column label="家庭成员"
          ><template slot-scope="data">
            {{ data.row.live }} - {{ data.row.choice }}
          </template>
        </el-table-column>
        <el-table-column prop="style" label="装修风格"> </el-table-column>
        <el-table-column prop="spaces" label="个性选择"> </el-table-column>
        <el-table-column prop="preference" label="卫生间选择">
        </el-table-column>
        <el-table-column prop="other" label="其他需求"> </el-table-column>
        <el-table-column prop="yhphone" label="手机号"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="big"
              >联系</el-button
            >
            <el-button @click="delClick(scope.row)" type="text" size="big"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      total: 5,
      data: [],
    };
  },
  mounted() {
    this.$http.get("/mfsj/all").then((res) => {
      console.log(res);
      this.data = res.data.data;
    });
  },
  methods: {
    // 点击获取电话
    handleClick(r) {
      console.log(r.yhphone);
    },
    // 报价完成 点击删除用户信息
    delClick(r) {
      console.log(r.mid);
      let url = `/mfsj/delete/${r.mid}`;
      this.$http.get(url).then((res) => {
        console.log(res);
      });
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getOrderList();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getOrderList();
    },
  },
};
</script>

  <style>
  /* *{
    background-color: #20283F;
    color: white;
  } */
  .el-table .warning-row {
    background: rgb(190, 224, 247);
  }

  /* .el-table .success-row {
    background: #c9cefd;
  } */
  .el-breadcrumb ::v-deep .el-breadcrumb__inner {
  color: #f7ede1 !important;
}
</style>

<style lang="less" scoped>
  .el-breadcrumb  /deep/  .el-breadcrumb__inner 
      {
        color: #ccc !important;				//你想要设置的字体颜色
    }
 //   表格
 
        .el-table {
          border-top:none ;
          border-left: none;
          font-size: 20px !important;
          color: #4e5561 !important;
          background: #093e74 !important;
          &::before {
            height: 0 !important;
          }
          /deep/ td, /deep/ th.is-leaf {
            border-width: 0 !important;
          }
          /deep/ thead tr th{
            background: #021b34 !important;
            color: #fdfcfc !important;
          }
          /deep/ tr:hover > td {
            background: transparent !important;
          }
          ::-webkit-scrollbar-corner {
            background: #021b34;
          }
        }
        /deep/ .el-input__inner{
          height: 40px;
          font-size: 20px;
        }
</style>
