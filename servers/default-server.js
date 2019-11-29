process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; //  <------ 使用8050时要加上这行，忽略https的证书

module.exports = {
  server: 'http://10.1.2.165:8081', // ip or domain
  // plugin: 'default',
  cookie: 'your cookie here',
  useUser: 'user1',
  users: {
    user1: '123456',
    user2: '12345678',
  },
  reloginSeq: 0,
};
