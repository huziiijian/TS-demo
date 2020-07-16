import React, { useEffect } from 'react'
import { useLocalStore, useObserver, observer, useForceUpdate,useAsObservableSource } from "mobx-react-lite"
import { ErrorBoundary } from 'src/components'
interface base {
    _install?: Function
    _uninstall?: Function
}
type Func<T, P>  = {
    (arg: P): T
}
function connect<P, T extends base> (View:React.FC<{store: T}>, Model:Func<T,P>):React.FC<P> {
    return observer((props) => {

        const observableProps = useAsObservableSource(Object.assign(props))
        const Store = useLocalStore(Model.bind(null, observableProps))
        useEffect(() => {
            Store._install && Store._install()
            return () => {
                Store._uninstall && Store._uninstall()
            }
        }, [])
    return <ErrorBoundary>
            <View store={Store} />
        </ErrorBoundary>
    })
}

export default connect
