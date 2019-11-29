/**
 * @file 统一转发文件
 */
module.exports = [
    // 统一做的转发, 根据相应需求修改
    {test: '/success', static: 'success/index.html'},
    {test: '/failure', mock: 'common/failure'},
];
