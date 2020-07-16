import React, { FC } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less';
import tsDemo from '../model/tsDemo'

import Model from '../model'
interface Props {
    store: Model
}

const View: FC<Props> = observer((props) => {

    return (
        <div>{tsDemo.map((item,index) => <p key={index}>{item}</p>)}</div>
    );
})

export default View;
