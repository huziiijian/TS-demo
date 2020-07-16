import React from 'react';
import Spinner from '../Spinner'
const Suspense = (Component:any) => (props:any) =>{
    console.log('suspense', props)
    return <React.Suspense fallback={<Spinner />}><Component {...props} /></React.Suspense>
};
const AsyncComponent =(component:any) => Suspense(React.lazy(component))
export default AsyncComponent
