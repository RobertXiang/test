<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="color:white;font-size: 20px;">
      <el-breadcrumb-item :to="{ path: '/home' }" style="color:white;font-size: 20px;">首页</el-breadcrumb-item>
      <el-breadcrumb-item style="color:white;font-size: 20px;">用户管理</el-breadcrumb-item>

    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card  style="background-color:#20283F;border: #20283F;">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20" style="height:40px">
        <el-col :span="8">
          <el-input placeholder="请输入搜索的ID" v-model="uid" clearable >
            <el-button slot="append" icon="el-icon-search" @click="searchUser" style="font-size:30px"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true" style="font-size:20px">添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 用户列表区域 -->
      <el-table :data="userlist" stripe  :row-class-name="tableRowClassName">
        <el-table-column label="ID" prop="uid"></el-table-column>
        <el-table-column label="姓名" prop="uname"></el-table-column>
        <el-table-column label="性别" prop="genter">
          <template slot-scope="scope">
            <el-tag type="success" effect="dark" v-if="scope.row.genter==2">未知</el-tag>
            <el-tag type="primary" effect="dark" v-if="scope.row.genter==0">男</el-tag>
            <el-tag type="success" effect="dark" v-if="scope.row.genter==1">女</el-tag>

          </template>
        </el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="phone"></el-table-column>
        <el-table-column label="生日" prop="birthday"></el-table-column>
        <!-- <el-table-column label="角色" prop="role_name"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)">
            </el-switch>
          </template>
        </el-table-column> -->
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeById(scope.$index)"></el-button>
            <!-- 分配角色按钮 -->
            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]" :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>

    <!-- 添加用户的对话框 -->
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
        <el-form-item label="用户名" prop="uname">
          <el-input v-model="addForm.uname"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="addForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input v-model="addForm.upwd"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
       
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  // import { mapState } from 'vuex'
export default {
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

      if (regEmail.test(value)) {
        // 合法的邮箱
        return cb()
      }

      cb(new Error('请输入合法的邮箱'))
    }

    // 验证手机号的规则
    var checkMobile = (rule, value, cb) => {
      // 验证手机号的正则表达式
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

      if (regMobile.test(value)) {
        return cb()
      }

      cb(new Error('请输入合法的手机号'))
    }

    return {
      user:[],
      //查询uid
      uid:'',
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 2
      },
      userlist: [
       
      ],
      total: 10,
      // 控制添加用户对话框的显示与隐藏
      addDialogVisible: false,
      // 添加用户的表单数据
      addForm: {
        uname: '',
        upwd: '',
        email: '',
       phone: ''
      },
      // 添加表单的验证规则对象
      addFormRules: {
        uname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '用户名的长度在3~10个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '用户名的长度在6~15个字符之间',
            trigger: 'blur'
          }
        ],
        // email: [
        //   { required: false, message: '请输入邮箱', trigger: 'blur' },
        //   { validator: checkEmail, trigger: 'blur' }
        // // ],
        // phone: [
        //   { required: true, message: '请输入手机号', trigger: 'blur' },
        //   { validator: checkMobile, trigger: 'blur' }
        // ]
      }
    }
  },
  // created() {
   
  //   this.getUserList()
    
  //     this.searchUser()
    
  // },
  mounted () {
    this.getUserList();
  },
 
  methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 === 0) {
          return 'warning-row';
        }
        return '';
      },
    //添加用户

    //删除用户提示框
    
async removeById(id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?',
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

      this.$http.get(`user/delete/${this.userlist[id].uid}`).then(res=>{
        console.log('用户删除的情况',res);
       
        if(res.status==200){
        this.$message.success('用户删除成功')
          this.getUserList()
      }})
      


    },

  
    //获取用户列表
    async getUserList() {
   
      await  this.$http.get('user/all').then(res=>{
      console.log('用户列表',res);
      if(res.data.code==200){
        this.userlist=res.data.data
        this.total=res.data.data.length
      
      }
 
     })},
  searchUser(){
    if(!this.uid){
      this.getUserList()
    }else{
 this.$http.get(`user/${this.uid}`).then(res=>{
  console.log('查询情况',res);
        if(res.data.code==200){
       
          this.userlist=res.data.data
      console.log('查询结果',this.userlist);
        }
 })
}   
      
    },
    // //查询用户
    // searchUser(){
     
    // },
      //删除用户
      deleteUser(i){
      this.$http.get(`user/delete/${this.userlist[i].uid}`).then(res=>{
        console.log('用户删除的情况',res);
       
        if(res.status==200){
        this.$message.success('用户删除成功')
          this.getUserList()
      }})
      
    },
    // 监听 pagesize 改变的事件
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    // 监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },
    // 监听 switch 开关状态的改变
    async userStateChanged(userinfo) {
      console.log(userinfo)
      const { data: res } = await this.$http.put(
        `users/${userinfo.id}/state/${userinfo.mg_state}`
      )
      if (res.meta.status !== 200) {
        userinfo.mg_state = !userinfo.mg_state
        return this.$message.error('更新用户状态失败！')
      }
      this.$message.success('更新用户状态成功！')
    },
    // 监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields()
    },
    // 点击按钮，添加新用户
    addUser() {
      this.$refs.addFormRef.validate(valid => {
        if (!valid) return
        // 可以发起添加用户的网络请求
        const params=`uname=${this.addForm.uname}&phone=${this.addForm.phone}`
        this.$http.post('user/register', params).then(res=>{
          console.log('添加了没有',res);
          if (res.data.code!==200) {
          this.$message.error('添加用户失败！')
        }else{
          
        this.$message.success('添加用户成功！')
        // 隐藏添加用户的对话框
        this.addDialogVisible = false
        // 重新获取用户列表数据
        this.getUserList()
        }
      }
        )

       
        }

      )
    }
  }
}
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
// 或者
// ::v-deep .el-input__inner{
//           height: 40px;
//         }

      
</style>
