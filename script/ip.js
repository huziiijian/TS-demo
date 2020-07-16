 // 在开发环境中获取局域网中的本机iP地

module.exports = () => {
    let os= require('os');
    let ipStr = '';
    let infaces = os.networkInterfaces();
    let bool= false;
    for (let i in infaces) {
        // eslint-disable-next-line no-loop-func
        infaces[i].some((x) => {
            if ((x.family === 'IPv4')&&(x.internal === false)) {
                ipStr=x.address;
                bool = true;
                return true;
            }
            return false;
        });
        if (bool) { break; }
    }
    return ipStr;
};
