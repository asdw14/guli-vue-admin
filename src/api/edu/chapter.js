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

    },

    //添加章节
    save(chapter){
        return request({
            url: `${api_name}/`,
            method : "post",
            data: chapter
        })
    },

    //删除章节
    removeById(id){
        return request({
            url: `${api_name}/${id}`,
            method : "delete",
        })
    },
    
    //修改章节
    updateById(chapter){
        return request({
            url: `${api_name}/${chapter.id}`,
            method : "put",
            data: chapter
        })
    },

    //根据id查章节
    getById(id) {
        return request({
            url: `${api_name}/${id}`,
            method : "get",
        })
    }


}