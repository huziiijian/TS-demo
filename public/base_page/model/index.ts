import { observable, computed, action } from "mobx";
import {
    history,
    qs,
} from 'src/utils';
import Service from '../service'


import LifeCycle, {LifeCycleProps} from 'src/utils/VM/lifeCycle'
interface Params  {
}
interface Query  {
}
class PageModel extends LifeCycle <Params, Query>{
    constructor(props:LifeCycleProps<Params, Query>){
        super(props)

    }
    @observable showLoading = true
}


export default PageModel;
