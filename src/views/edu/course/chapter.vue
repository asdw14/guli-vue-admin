<template>

  <div class="app-container">

    <el-button type="text">添加章节</el-button>
<!-- 章节 -->
<ul class="chanpterList">
    <li
        v-for="chapter in chapterNestedList"
        :key="chapter.id">
        <p>
            {{ chapter.title }}

            <span class="acts">
                <el-button type="text">添加课时</el-button>
                <el-button style="" type="text">编辑</el-button>
                <el-button type="text">删除</el-button>
            </span>
        </p>

        <!-- 视频 -->
        <ul class="chanpterList videoList">
            <li
                v-for="video in chapter.children"
                :key="video.id">
                <p>{{ video.title }}
                    <span class="acts">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">删除</el-button>
                    </span>
                </p>
            </li>
        </ul>
    </li>
</ul>
<div>
    <el-button @click="previous">上一步</el-button>
    <el-button :disabled="saveBtnDisabled" type="primary" @click="next">下一步</el-button>
</div>
  </div>
</template>
<script>
import chapter from "@/api/edu/chapter"
export default {
  data() {
    return {
      saveBtnDisabled: false, // 保存按钮是否禁用
      courseId: '', // 所属课程id
      chapterNestedList: [] // 章节嵌套课时列表
    }
  },

  created() {
    console.log('info created')
    this.init()
  },

  methods: {
    init(){
        if (this.$route.params && this.$route.params.id) {
        this.courseId =  this.$route.params.id
        // 根据id获取课程基本信息
        this.fetchChapterNestedListByCourseId()
        }
    },
// 根据id获取课程基本信息
    fetchChapterNestedListByCourseId(){
      chapter.getNestedTreeList(this.courseId).then(resopnse =>{
        this.chapterNestedList = resopnse.data.items
})

    },      

    previous() {
      console.log('previous')
      this.$router.push({ path: '/edu/course/info/' + this.courseId  })

    },
    next() {
      console.log('next')
      this.$router.push({ path: '/edu/course/publish/' +this.courseId })
    }
  }
}
</script>