import { RouteComponentProps } from 'react-router-dom'
import qs from 'querystring'
import { StaticContext } from 'react-router'

type Reflect<T> = {
    (): T;
  };

interface LifeCycleContext<P ={}, S ={}> {
    route: RouteComponentProps<P, StaticContext,S>
    getQuery:Reflect<S>
    getParams: Reflect<P>
}
export interface LifeCycleProps<P = {}, S = {}> extends RouteComponentProps<P, StaticContext,S> {
    $ctx:LifeCycleContext<P, S>
}

export default abstract class <P = {}, S = {}>{
    constructor (props:RouteComponentProps<P, StaticContext, S>) {
        this.$ctx = Object.assign({
            route: props,
            getParams: () => props.match.params,
            getQuery: () => qs.parse(props.location.search.replace('?', ''))
        })
        console.log('__plugins', this.$ctx)
    }
    componentDidMount = () => {}
    componentWillUnmount = () =>{}
    $ctx:LifeCycleContext<P, S>
}
