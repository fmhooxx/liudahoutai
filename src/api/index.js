import request from '../utils/request';
export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

// get 请求没有参数
const getSwiper = query => {
    return request({
        url: 'api/getlunbo',
        method: 'get',
        params: query
    });
};


export default {
    getSwiper
}