import request from '@/utils/request'

const api_name = '/admin/servicesta'
export default {

  createStatistics(day) {
    return request({
      url: `${api_name}/day/${day}`,
      method: 'post'
    })
  },

  //展示图表
  showChart(searchObj) {
    return request({
        url: `${api_name}/showChart/${searchObj.begin}/${searchObj.end}/${searchObj.type}`,
        method: 'get'
    })
}
}