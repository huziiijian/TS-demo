
/// <reference path="wx.d.ts" />
declare type MockCallback<T> = T extends PromiseLike<infer U> ? U : T extends ((...args: any[]) => Promise<infer V>) ? V : T
declare module '*.less' {
    const content: {[className: string]: string};
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}

declare module '*.gif' {
    const content: any;
    export default content;
}
declare interface Window {
    Swiper: any,
    _global: {
        appId: string
        dsn: string
        pid: string
        prefixAPI: string
        prefix: "saas/o2ocommon" | "saas/canting" | "saas/beauty" | "saas/kld3"
        filePath: string
        payPath: string
        commonPath: string
        env: "qa" | "dev" | "pl" | "online"
        solutionCode: string
        solutionName: string
        user: {
            city: string
            country: string
            headimgurl: string
            nickname: string
            openid: string
            province: string
            sex: number
            unionid: string
            uuid: string
            weimobopenid: string
            payopenid: string
            wid: string | number
        }
    }
    WeixinJSBridge: any
}
