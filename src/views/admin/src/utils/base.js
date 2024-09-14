const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejs943wpi16/",
            name: "nodejs943wpi16",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejs943wpi16/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的云校园的设计与实现"
        } 
    }
}
export default base
