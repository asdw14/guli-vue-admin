import request from '@/utils/request'
const api_name = '/serviceedu/teacher'

export default{
  getPageList(page,limit,searchObj){
    return request({
      url:`${api_name}/pageTeacher/${page}/${limit}`,
      method : 'post',
      data: searchObj
    })
  }
}
