import request from '@/utils/request'

const api_name = '/eduservice/chapter'

export default {
    getNestedTreeList(courseId){
        return request({
            url : `${api_name}/chapterList`,
            method: 'get',
            params:{
                courseId:courseId
            }
        })

    }

}