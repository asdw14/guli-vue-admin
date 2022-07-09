import request from '@/utils/request'
const api_name = '/educms/banner'

export default{
  getPageList(page,limit,searchObj){
    return request({
      url:`${api_name}/pageTeacherQuery/${page}/${limit}`,
      method : 'post',
      data: searchObj
    })
  },
  //获取所有
  getList(){
    return request({
      url:`${api_name}/findAll`,
      method : 'get',
    })
  },

  //通过ID删banner
  removeById(id){
    return request({
      url:`${api_name}/remove/${id}`,
      method : 'delete',
    })
  },
  // 添加banner
  save(banner){
    return request({
      url:`${api_name}/save`,
      method : 'post',
      data: banner
    })
  },

    // 通过id查询banner
    queryById(id){
      return request({
        url:`${api_name}/get/${id}`,
        method : 'get',
      })
    },
    updateById(banner){
      return request({
        url:`${api_name}/update`,
        method : 'put',
        data: banner
      })
    },

}
