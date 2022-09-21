<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table border :data="data" style="width: 100%">
        <el-table-column prop="HouseStatu" label="房屋状态" width="120">
        </el-table-column>
        <el-table-column prop="house" label="房屋类型" width="120">
        </el-table-column>
        <el-table-column label="家庭成员"
          ><template slot-scope="data">
            {{ data.row.live }} - {{ data.row.choice }}
          </template>
        </el-table-column>
        <el-table-column prop="style" label="喜欢装修风格"> </el-table-column>
        <el-table-column prop="spaces" label="个性选择"> </el-table-column>
        <el-table-column prop="preference" label="卫生间选择">
        </el-table-column>
        <el-table-column prop="other" label="其他需求"> </el-table-column>
        <el-table-column prop="yhphone" label="手机号"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >联系</el-button
            >
            <el-button @click="delClick(scope.row)" type="text" size="small"
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

<style lang="scss" scoped></style>
