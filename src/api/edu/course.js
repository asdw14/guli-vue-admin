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
      }

}