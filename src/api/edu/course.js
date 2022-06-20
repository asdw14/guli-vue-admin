import request from '@/utils/request'

const api_name = '/eduservice/course'

export default {
    saveCourseInfo(courseInfo){
        return request({
            url : `${api_name}/addCourseInfo`,
            method: 'post',
            data : courseInfo
        })

    }

}