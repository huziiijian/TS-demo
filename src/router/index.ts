
import AsyncComponent from 'src/components/AsyncComponent'
let RouteConfig:Array<{
    path: string,
    component: any
}> = [

];

const Routes = RouteConfig.map((item) => {
    return {
        exact: true,
        ...item
    }
})

Routes.push({
    path: '*',
    exact: false,
    component: AsyncComponent(() => import('src/pages/TsDemo'))
})

export default Routes
