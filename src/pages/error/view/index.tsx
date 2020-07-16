import React, {FC} from "react";
import { observer } from "mobx-react";
import style from '../style/index.less';



import Model from '../model'
interface Props {
    store: Model
}

const View:FC<Props> = observer((props) => {

    return (
        <div>404 error</div>
    );
})

export default View;
