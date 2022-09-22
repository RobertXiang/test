<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
     
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card style="background-color:#20283F;border: #20283F;">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true" style="font-size:20px">添加订单</el-button>
        </el-col>
      </el-row>

      <!-- 订单列表数据 -->
      <el-table :data="orderlist" stripe >
      
        <el-table-column label="订单编号" prop="oid"></el-table-column>
        <el-table-column label="订单状态" prop="status">
          <template slot-scope="scope">
          
            <el-tag type="warning" v-if="scope.row.status==1">等待付款</el-tag>
            <el-tag type="primary" v-if="scope.row.status==2">等待发货</el-tag>
            <el-tag type="primary" v-if="scope.row.status==3">运输中</el-tag>
            <el-tag type="success" v-if="scope.row.status==4">已签收</el-tag>
            <el-tag type="info" v-if="scope.row.status==5">已取消</el-tag>
          </template>

        </el-table-column>
        <el-table-column label="付款时间" prop="pay_time">
         
        </el-table-column>
        <el-table-column label="发货时间" prop="deliver_time">

        </el-table-column>
        <el-table-column label="签收时间" prop="received_time">
         
        </el-table-column>
        <!-- <el-table-column label="下单时间" prop="create_time">
          <template slot-scope="scope">
            {{scope.row.create_time | dateFormat}}
          </template>
        </el-table-column> -->
        <el-table-column label="操作">
          <template>
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="showBox"></el-button>
            <el-button size="mini" type="success" icon="el-icon-location" @click="showProgressBox"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum" :page-sizes="[5, 10, 15]" :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>

    <!-- 修改地址的对话框 -->
    <el-dialog title="修改地址" :visible.sync="addressVisible" width="50%" @close="addressDialogClosed">
      <el-form :model="addressForm" :rules="addressFormRules" ref="addressFormRef" label-width="100px">
        <el-form-item label="省市区/县" prop="address1">
          <el-cascader :options="cityData" v-model="addressForm.address1"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address2">
          <el-input v-model="addressForm.address2"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addressVisible = false">取 消</el-button>
        <el-button type="primary" @click="addressVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 展示物流进度的对话框 -->
    <el-dialog title="物流进度" :visible.sync="progressVisible" width="50%">
      <!-- 时间线 -->
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in progressInfo" :key="index" :timestamp="activity.time">
          {{activity.context}}
        </el-timeline-item>
      </el-timeline>
    </el-dialog>
  </div>
</template>

<script>
import cityData from './citydata.js'

export default {
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      total: 5,
      orderlist:[],
      fakelist: [{oid:'120432',status:'4',pay_status:1,deliver_time:'2022-09-13-10-10',received_time:'2022-09-15-10-10',pay_time:'2022-09-12-10-35'},{oid:'120432',status:'3',pay_status:1,deliver_time:'2022-09-13-10-10',received_time:'',pay_time:'2022-09-12-10-35'},{oid:'120432',status:'5',pay_status:1,deliver_time:'',received_time:'',pay_time:''},],
      addressVisible: false,
      addressForm: {
        address1: [],
        address2: ''
      },
      addressFormRules: {
        address1: [
          { required: true, message: '请选择省市区县', trigger: 'blur' }
        ],
        address2: [
          { required: true, message: '请填写详细地址', trigger: 'blur' }
        ]
      },
      cityData,
      progressVisible: false,
      progressInfo: []
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
     getOrderList() {
this.$http.get(`order/${this.$store.state.uid}`).then(res=>{
  console.log('订单数据',res);
  if(!res.data.data){
    this.orderlist=this.fakelist
  }else if(res.data.code==200){this.orderlist=res.data.data}else{
    console.log('获取失败');
  }
  
  // this.total=res.data.data.length
})

      // const { data: res } = await this.$http.get('orders', {
      //   params: this.queryInfo
      // })

      // if (res.meta.status !== 200) {
      //   return this.$message.error('获取订单列表失败！')
      // }

      // console.log(res)
      // this.total = res.data.total
      // this.orderlist = res.data.goods
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getOrderList()
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getOrderList()
    },
    // 展示修改地址的对话框
    showBox() {
      this.addressVisible = true
    },
    addressDialogClosed() {
      this.$refs.addressFormRef.resetFields()
    },
    async showProgressBox() {
      const { data: res } = await this.$http.get('/kuaidi/804909574412544580')

      if (res.meta.status !== 200) {
        return this.$message.error('获取物流进度失败！')
      }

      this.progressInfo = res.data

      this.progressVisible = true
      console.log(this.progressInfo)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../plugins/timeline/timeline.css';
@import '../../plugins/timeline-item/timeline-item.css';

.el-cascader {
  width: 100%;
}
.el-breadcrumb  /deep/  .el-breadcrumb__inner 
      {
        font-size:20px;
        color: #ccc !important;				//你想要设置的字体颜色
    }
     //   表格
 
     .el-table {
      border: none !important;
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
        // /deep/ .el-input__inner{
        //   height: 30px;
        //   font-size: 2px;
        // }
// 或者
// ::v-deep .el-input__inner{
//           height: 40px;
//         }

</style>
