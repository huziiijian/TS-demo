import React, { ComponentType } from 'react';
import { setTitle } from 'src/utils'
import { withRouter,WithRouterProps,WithRouterStatics, RouteComponentProps, StaticContext} from 'react-router'

import LifeCycle from './lifeCycle'

interface State {
    hasError: Boolean,
    errMsg: string
}
interface connect {
    (Model:any, View: React.FC<any>, title: string):ComponentType<any>
}

const connect:connect = (Model, View, title) => {

    class ConnectHoc extends React.Component<RouteComponentProps, State> {
        constructor(props:RouteComponentProps) {
            super(props);
            setTitle(title)
            this.store = new Model(this.props)
        }
        public state = {
            hasError: false,
            errMsg: ''
        }
        private store:LifeCycle
        static getDerivedStateFromError (e:any) {
            return {
                hasError: true,
                errMsg:e.toString()
            }
        }
        componentDidMount() {
            this.store.componentDidMount()
        }
        componentDidCatch(e:any) {
            console.log('----error')
            console.error(e)
        }
        async componentWillUnmount () {
            this.store.componentWillUnmount()
        }
        render() {
            return (
                <React.Fragment>
                    {
                        this.state.hasError ?
                            <div>
                                {this.state.errMsg}
                            </div> : <View
                                store={this.store}
                            />
                    }
                </React.Fragment>);
        }
    };
    return withRouter(ConnectHoc)
};
export default connect;
