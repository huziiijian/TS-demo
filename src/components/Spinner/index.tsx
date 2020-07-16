import React, {FC, CSSProperties} from 'react';
import Mask from '../Mask'
import style from './style/index.less'
interface Props  {
    style?: CSSProperties
}
const Component:FC<Props> = (props) => (
    <Mask style = {props.style}>
        <div className={style.wm_loading} style={props.style}>
            <div>
                <img src="https://image-c.weimobwmc.com/wrz/7785104134a64df18db742c4756db741.png" alt="" className={style.wm_loading_icon}/>
            </div>
        </div>
    </Mask>
)
export default Component
