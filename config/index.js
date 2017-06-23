module.exports = {
  dev: {
    port: 80, // 监听端口
    localData: false, // 是否启用本地测试数据,
    publicPath: '/', // 项目发布路径
    proxyTable: {// 反向代列表
      '/data/service': {
        target: 'http://lx.cdepb.gov.cn:20001/ds/s/dcds/service',
        pathRewrite: { '^/data/service': '' }
      }
    }
  }
}
