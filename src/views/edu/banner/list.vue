<template>
  <div class="app-container">
<!--查询表单-->
<el-form :inline="true" class="demo-form-inline">

  
  <!-- 标题 -->
  <el-form-item>
    <el-input v-model="searchObj.title" placeholder="banner标题"/>
  </el-form-item>

  <el-button type="primary" icon="el-icon-search" @click="fetchData()">查询</el-button>
  <el-button type="default" @click="resetData()">清空</el-button>
</el-form>

   <!-- 表格 -->
<el-table
  v-loading="listLoading"
  :data="list"
  element-loading-text="数据加载中"
  border
  fit
  highlight-current-row
  row-class-name="myClassList">

  <el-table-column
    label="序号"
    width="70"
    align="center">
    <template slot-scope="scope">
      {{ (page - 1) * limit + scope.$index + 1 }}
    </template>
  </el-table-column>

  <el-table-column label="Banner信息" width="470" align="center">
    <template slot-scope="scope">
      <div class="info">
        <div class="pic">
          <img :src="scope.row.imageUrl"  width="150px">
        </div>
        <div class="title">
          <a href="">{{ scope.row.title }}</a>  

        </div>
      </div>

    </template>
  </el-table-column>
  <el-table-column label="跳转地址" align="center">
    <template slot-scope="scope">
      {{ scope.row.linkUrl }}
    </template>
  </el-table-column>
  <el-table-column label="创建时间" align="center">
    <template slot-scope="scope">
      {{ scope.row.gmtCreate.substr(0, 10) }}
    </template>
  </el-table-column>

  

  <el-table-column label="操作" width="150" align="center">
    <template slot-scope="scope">
      <router-link :to="'/edu/banner/info/'+scope.row.id">
        <el-button type="text" size="mini" icon="el-icon-edit">编辑banner信息</el-button>
      </router-link>

      <el-button type="text" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
    </template>
  </el-table-column>
</el-table>

<!-- 分页 -->
<el-pagination
  :current-page="page"
  :page-size="limit"
  :total="total"
  style="padding: 30px 0; text-align: center;"
  layout="total, prev, pager, next, jumper"
  @current-change="getPageList"
/>
  </div>
</template>
<script>
  import banner from '@/api/edu/banner'
  export default{
      data(){
          return{
            listLoading: false, // 是否显示loading信息
            list: null, // 数据列表
            total: 0, // 总记录数
            page: 1, // 页码
            limit: 10, // 每页记录数
            searchObj: {},// 查询条件
          }
      },
      created(){
          this.getList()
      },
    methods:{
        fetchData(){
            //获取课程列表分页
            this.getPageList()
        },
    
      getList(){
            banner.getList().then(response=>{
                this.list = response.data.items
            })
        },
        // 条件查询带分页
        getPageList(page=1){
          this.page = page
          this.listLoading = true
            banner.getPageList(this.page, this.limit, this.searchObj).then(response=>{
                this.list = response.data.items
                this.total = response.data.total
                this.listLoading = false
            })
        },
  
      //清空
      resetData(){
        this.searchObj = {}
        this.page = 1
        this.getList()
      },
      //删除课程by Id
      removeDataById(id,page){
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(() => {
          return banner.removeById(id)
        }).then(() => {
          this.getPageList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch((response) => { // 失败
          if (response === 'cancel') {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          } else {
            this.$message({
              type: 'error',
              message: '删除失败'
            })
          }
        })
	},
  }

}
</script>
