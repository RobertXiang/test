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
          <el-input placeholder="请输入内容" v-model="sid" clearable >
            <el-button slot="append" icon="el-icon-search" @click="searchGood"></el-button>
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

    <!-- 添加商品弹出框 -->
     <!-- 添加商品区域 -->
     <el-dialog title="添加商品信息" :visible.sync="dialogFormVisible">
  
   
  
  <!-- 标签页 tab-->
  
      <el-form label="基本信息填写" ref="addFormRef" :model="addForm" :rule="addFormRules" label-width="100px" class="demo-ruleForm" label-position="top">
        <el-form-item label="商品编号" prop="sid">
        <el-input v-model="addForm.sid" ></el-input>
    </el-form-item>
     <el-form-item label="商品名称" prop="title">
        <el-input v-model="addForm.title" ></el-input>
    </el-form-item>
     <el-form-item label="商品价格" prop="piric">
        <el-input v-model="addForm.piric" ></el-input>
    </el-form-item>
     <el-form-item label="商店名" prop="goods_weight">
        <el-input v-model="addForm.store" ></el-input>
    </el-form-item>
    <el-form-item label="商品图片" prop="pic">
        <el-input v-model="addForm.pic" ></el-input>
    </el-form-item>
    <el-form-item label="商品成本" prop="dpiric">
        <el-input v-model="addForm.dpiric" ></el-input>
    </el-form-item>
    <el-form-item label="squan" prop="squan">
        <el-input v-model="addForm.squan" ></el-input>
    </el-form-item>
 
    
        
      </el-form>
      
     
    
        
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addShop">确 定</el-button>

   
    
  </el-dialog>
     
     <!-- 编辑对话框 -->
    <!-- <el-dialog title="商品编辑" :visible.sync="editDialogVisible" clearable >
    <el-form :model="form"  ref="editFormRef">
      <el-form-item label="名称"  prop="goods_name">
        <el-input v-model="form.goods_name" :value="shoplist.goods_name"></el-input>
      </el-form-item>
          <el-form-item label="价格" prop="goods_price" >
        <el-input v-model="form.goods_price"></el-input>
      </el-form-item>
         <el-form-item label="重量" prop="goods_weight" >
        <el-input v-model="form.goods_weight" ></el-input>
      </el-form-item>
       <el-form-item label="数量"  prop="goods_number">
        <el-input v-model="form.goods_number" ></el-input>
      </el-form-item>
  
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="editShop">确 定</el-button>
    </div>
  </el-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
       //标签栏靠左
       tabPosition: 'left',
     //激活标签
     activeIndex:'0',
                //添加商品基本信息
                addForm:{
                 sid:99,
                  title:'发送',
                  pic:'大叔大婶',
                 dpiric:899,
                  squan:'合法的规划',
                  piric:544,
                
                 store:'阿顺丰到付',
                 

                },
       //添加分类表单的验证规则对象
       addFormRules:{
        title:[
            {
                required:true,
                message:'请输入名称',trigger:'blur'
            }
        ],
         store:[
            {
                required:true,
                message:'请输入商店名',trigger:'blur'
            },{

            }
        ],
         piric:[
            {
                required:true,
                message:'请输入价格',trigger:'blur'
            }
        ],
      
      },
      //默认弹出框为关闭
      dialogFormVisible:false,
      sid:'',
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
  // created() {
  //   this.getGoodsList()
  // },
  mounted () {
    this.getGoodsList();
  },
  methods: {
    // 根据分页获取对应的商品列表
    getGoodsList() {
      this.$http.get('shop/all').then(res=>{
        console.log('商品情况',res);
        this.goodslist=res.data.data
        this.total=res.data.data.length
      })
      
      
    },
    //查询数据
    searchGood(){
     
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
      this.dialogFormVisible=true
    },
    //添加框开关
    addDialogForm(){
              this.dialogFormVisible=true
            },
      addShop(){
        this.$refs.addFormRef.validate(valid=>{
          if(!valid)return
          const params=`sid=${this.addForm.sid}&title=${this.addForm.title}&pic=${this.addForm.pic}&dpiric=${this.addForm.dpiric}&squan=${this.addForm.squan}&piric=${this.addForm.piric}&store=${this.addForm.store}`
          this.$http.post('shop/set',params).then(res=>{
            console.log('插入成功',res);
          })
        })
      }
  }
}
</script>

