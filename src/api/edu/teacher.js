import request from '@/utils/request'
const api_name = '/eduservice/teacher'

export default{
  getPageList(page,limit,searchObj){
    return request({
      url:`${api_name}/pageTeacherQuery/${page}/${limit}`,
      method : 'post',
      data: searchObj
    })
  },
  getList(){
    return request({
      url:`${api_name}/findAll`,
      method : 'get',
    })
  },

  //通过ID删除讲师
  removeById(id){
    return request({
      url:`${api_name}/${id}`,
      method : 'delete',
    })
  },
  // 添加讲师
  save(teacher){
    return request({
      url:`${api_name}/addTeacher`,
      method : 'post',
      data: teacher
    })
  },

    // 通过id查询讲师
    queryById(id){
      return request({
        url:`${api_name}/${id}`,
        method : 'get',
      })
    },
    updateById(teacher){
      return request({
        url:`${api_name}/update`,
        method : 'post',
        data: teacher
      })
    },

}
