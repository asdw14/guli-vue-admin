import request from '@/utils/request'

const api_name = '/vodservice'

export default {
    removeById(videoId){
        return request({
            url: `${api_name}/deleteVideo/${videoId}`,
            method: "delete",

        })
    }
}