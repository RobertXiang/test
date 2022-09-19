<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getGoodsList">
            <el-button slot="append" icon="el-icon-search" @click="getGoodsList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="goAddpage">添加商品</el-button>
        </el-col>
      </el-row>

      <!-- table表格区域 -->
      <el-table :data="goodslist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="商品名称" prop="title"></el-table-column>
        <el-table-column label="商品价格(元)" prop="piric" width="95px"></el-table-column>
        <el-table-column label="商店" prop="store" width="140px">
          <!-- <template slot-scope="scope">
            {{scope.row.add_time | dateFormat}}
          </template> -->
        </el-table-column>
        <el-table-column label="操作" width="130px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeById(scope.row.sid)"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum" :page-sizes="[5, 10, 15, 20]" :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total" background>
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      // 商品列表
      goodslist: [{goods_name:'欧式精装',goods_price:'130000',add_time:'2022-09-09'},
      {goods_name:'中式精装',goods_price:'150000',add_time:'2022-09-09'},
      {goods_name:'旧房改造',goods_price:'80000',add_time:'2022-09-09'},
      {goods_name:'新概念装修',goods_price:'100000',add_time:'2022-09-09'},
      {goods_name:'简装',goods_price:'50000',add_time:'2022-09-09'},],
      // 总数据条数
      total: 5
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    // 根据分页获取对应的商品列表
    getGoodsList() {
      this.$http.get('shop/all').then(res=>{
        console.log('商品情况',res);
        this.goodslist=res.data.data
        this.total=res.data.data.length
      })
      // const { data: res } = await this.$http.get('goods', {
      //   params: this.queryInfo
      // })

      // if (res.meta.status !== 200) {
      //   return this.$message.error('获取商品列表失败！')
      // }

      // this.$message.success('获取商品列表成功！')
      // console.log(res.data)
      // this.goodslist = res.data.goods
      // this.total = res.data.total
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getGoodsList()
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getGoodsList()
    },
    async removeById(id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该商品, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)

      if (confirmResult !== 'confirm') {
        return this.$message.info('已经取消删除！')
      }

      const { data: res } = await this.$http.get(`shop/delete/${id}`)
      console.log('删除情况',res);
      if (res.code!== 200) {
        return this.$message.error('删除失败！')
      }

      this.$message.success('删除成功！')
      this.getGoodsList()
    },
    goAddpage() {
      this.$router.push('/goods/add')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
