import React, {FC} from "react";
import {observer} from 'mobx-react'
import {ModelType} from '../model'

const View:React.FC<{store:ModelType }> = observer((props) => <div>
    NEW Widget
</div>)

export default View;
