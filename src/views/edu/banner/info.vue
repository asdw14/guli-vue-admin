<template>

  <div class="app-container">

    <h2 style="text-align: center;">发布新Banner</h2>

<el-form label-width="120px">

  <el-form-item label="Banner标题">
    <el-input v-model="bannerInfo.title" placeholder=" 示例：618活动99折"/>
  </el-form-item>

    <el-form-item label="链接地址">
    <el-input v-model="bannerInfo.linkUrl" placeholder=" 示例：/teacher"/>
  </el-form-item>

    <!-- Banner封面-->
<el-form-item label="Banner封面">

  <el-upload
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :action="BASE_API+'/eduoss/file/upload?host=cover'"
    class="avatar-uploader">
    <img :src="bannerInfo.imageUrl">
  </el-upload>

</el-form-item>
  <el-form-item label="Banner排序">
    <el-input-number :min="0" v-model="bannerInfo.sort" controls-position="right"/>
  </el-form-item>
  
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="next">保存并下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import banner from '@/api/edu/banner'
   
const defaultForm = {
  title: '',
  sort: 0,
  linkUrl: '',
  imageUrl: process.env.OSS_PATH + '/cover/1.jpg',
}

export default {
  data() {
    return {
      saveBtnDisabled: false ,// 保存按钮是否禁用,
      bannerInfo: defaultForm,
        BASE_API: process.env.BASE_API // 接口API地址

    }
  },

    watch: {
        $route(to, from) {
        console.log('watch $route')
        this.init()
        }
    },

  created() {
    console.log('info created')
    this.init()
  },

  methods: {
    init(){
      if (this.$route.params && this.$route.params.id) {
          const id = this.$route.params.id
          // 根据id获取banner
          this.fetchBannerInfoById(id)
        } else {
          this.bannerInfo = { ...defaultForm }

        }
    },

    fetchBannerInfoById(id){
        banner.queryById(id).then(response => {
        this.bannerInfo = response.data.item
  }).catch((response) => {
    this.$message({
      type: 'error',
      message: response.message
    })
  })
    },


    next() {
      console.log('next')
      this.saveBtnDisabled = true
        if (!this.bannerInfo.id) {
            this.saveData()
        } else {
            this.updateData()
        }

    },
        // 保存
    saveData(){
        banner.save(this.bannerInfo).then(response =>{
            this.$message({
                type: 'success',
                message: '保存成功!'
        })
         return response// 将响应结果传递给then
        }).then(response => {
            this.$router.push({ path: '/edu/banner/list' })
        }).catch((response) => {
            this.$message({
                type: 'error',
                message: response.message
            })
        })
    },
    
    updateData() {
      banner.updateById(this.bannerInfo).then(response =>{
            this.$message({
                type: 'success',
                message: '修改成功!'
        })
         return response// 将响应结果传递给then
        }).then(response => {
            this.$router.push({ path: '/edu/banner/list' })
        }).catch((response) => {
            this.$message({
                type: 'error',
                message: response.message
            })
        })
    },


    //上传成功后
    handleAvatarSuccess(res, file) {
        console.log(res)// 上传响应
        console.log(URL.createObjectURL(file.raw))// base64编码
        this.bannerInfo.imageUrl = res.data.url
    },
    //上传前进行校验
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 5

        if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 5MB!')
        }
        return isJPG && isLt2M
    }
  }
}
</script>
<style scoped>
.tinymce-container {
  line-height: 29px;
}
</style>