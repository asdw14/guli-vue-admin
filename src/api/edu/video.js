import request from '@/utils/request'

const api_name = '/eduservice/video'

export default {
    //增
    saveVideoInfo(videoInfoForm){
        return request({
            url : `${api_name}/saveVideoInfo`,
            method: 'post',
            data : videoInfoForm,
        })

    },

    //删

    removeById(id){
        return request({
            url : `${api_name}/${id}`,
            method: 'delete',
        })
    },

    //改
    updateVideoInfoById(videoInfoForm){
        return request({
            url : `${api_name}/updateVideoInfo`,
            method: 'put',
            data : videoInfoForm,
        })
    },

    //查
    getVideoInfoById(id){
        return request({
            url : `${api_name}/videoInfo/${id}`,
            method: 'get',
        })
    },

}