import request from '@/utils/request'

const api_name = '/eduservice/course'

export default {
    //添加课程信息
    saveCourseInfo(courseInfo){
        return request({
            url : `${api_name}/addCourseInfo`,
            method: 'post',
            data : courseInfo
        })

    },

    // 获取课程基本信息
    getCourseInfoById(id){
        return request({                    
            url : `${api_name}/courseInfo/${id}`,
            method: 'get',
        })

    },

    //修改课程信息
    updateCourseInfo(courseInfo){
        return request({
            url : `${api_name}/updateCourseInfo`,
            method: 'post',
            data : courseInfo
        })

    },

    //通过id获取课程最终发布信息
    getCoursePublishInfoById(id) {
        return request({
          url: `${api_name}/coursePublishInfo/${id}`,
          method: 'get'
        })
      },

      //根据id发布课程
      publishCourse(id){
        return request({
            url: `${api_name}/publishCourse/${id}`,
            method: 'put'
          })
      },

      //课程列表
      list(){
        return request({
            url : `${api_name}/listCourse`,
            method :'get'
        })
      },

    //课程列表分页查询
    getPageList(page,limit,searchObj){
        return request({
            url : `${api_name}/getPageList/${page}/${limit}`,
            method :'post',
            data : searchObj
        })
      },
      removeById(id){
        return request({
            url : `${api_name}/removeById/${id}`,
            method :'delete'
        })
      }
}