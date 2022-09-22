<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
     
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card style="background-color:#20283F;border: #20283F;">
    <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入商品id" v-model="sid" clearable >
            <el-button slot="append" icon="el-icon-search" @click="searchGood"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="goAddpage" style="font-size:20px">添加商品</el-button>
        </el-col>
      </el-row>

        <!-- 搜索与添加区域 -->
        <!-- <el-row :gutter="20" style="height:40px">
        <el-col :span="8">
          <el-input placeholder="请输入商品的ID" v-model="sid" clearable >
            <el-button slot="append" icon="el-icon-search" @click="searchGood" style="font-size:30px"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"  @click="goAddpage" style="font-size:20px">添加商品</el-button>
        </el-col>
      </el-row> -->

      <!-- table表格区域 -->
      <el-table :data="goodslist" stripe >
        <el-table-column label="ID" prop="sid" width="50px"></el-table-column>
        <el-table-column label="商品名称" prop="title"></el-table-column>
        <el-table-column label="商品价格(元)" prop="piric" width="120px"></el-table-column>
        <el-table-column label="商店" prop="store" width="300px">
          <!-- <template slot-scope="scope">
            {{scope.row.add_time | dateFormat}}
          </template> -->
        </el-table-column>
        <el-table-column label="操作" width="160px">
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
    <!-- <el-form-item label="商品图片" prop="pic">
        <el-input v-model="addForm.pic" ></el-input>
    </el-form-item> -->
    <el-form-item label="商品成本" prop="dpiric">
        <el-input v-model="addForm.dpiric" ></el-input>
    </el-form-item>
    <el-form-item label="squan" prop="squan">
        <el-input v-model="addForm.squan" ></el-input>
    </el-form-item>
    <el-form-item label="图片地址" prop="pic">
     <el-input v-model="addForm.pic"></el-input>
     
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
      sid:'',
       //标签栏靠左
       tabPosition: 'left',
     //激活标签
     activeIndex:'0',
                //添加商品基本信息
                addForm:{
                 sid:99,
                  title:'发送',
                  pic:'大叔大婶',
                 dpiric:'436345',
                  squan:'合法的规划',
                  piric:'12234',
                
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
        pagesize: 10,
        tableList:[]
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
       this.queryInfo.tableList=this.goodslist.slice(this.queryInfo.pagenum-1,this.queryInfo.pagesize)//表单数据列第一次加载进来，默认第一页数据
      })
      
      
    },
    //查询数据
    searchGood(){
    if(!this.sid){
      this.getGoodsList()
    }else{
    
    this.$http.get(`shop/${this.sid}`).then(res=>{
     console.log('查询情况',res);
           if(res.data.code==200){
          
             this.goodslist=res.data.data
         console.log('查询结果',this.goodlist);
           }
    })
  }
         
       },

    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
     
      this.getGoodsList()
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      let first=this.queryInfo.pagesize-20
      let last=this.queryInfo.pagesize*newPage
      if(this.goodslist.length<=this.queryInfo.pagesize){
        //20条数据以下情况
        this.tableList=this.goodslist
      }else{
        if(this.queryInfo.pagesize*newPage>=this.goodslist.length){
          //最后一页的数据
          this.tableList=this.goodslist.slice(first)
        }else{
          //点击不是最后一页
          this.tableList=this.goodslist.slice(first,last)
        }
      }
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
           
            if(res.data.data.code==200){  
              console.log('插入成功',res);
              this.$message.success('添加成功')
              this.dialogFormVisible=false
            }else{this.$message.error('添加失败，请检查数据')}
          
          })
        })
      },
      
    



  }
}
</script>
<style lang="less" scoped>
  .el-breadcrumb  /deep/  .el-breadcrumb__inner 
      {
        font-size: 20px;
        color: #ccc !important;				//你想要设置的字体颜色
    }
     //   表格
 
     .el-table {
          border-top:none ;
          border-left: none;
          border-right: none;
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
          height: 50x;
          font-size: 20px;
         
          
        }
// 或者
// ::v-deep .el-input__inner{
//           height: 40px;
//         }

</style>
