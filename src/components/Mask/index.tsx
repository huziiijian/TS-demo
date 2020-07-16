import React, {useState, FC, CSSProperties} from 'react';
import classnames from 'classnames'

import style from './style/index.less'

type Prop = {
    style?:CSSProperties
    withBackground?: boolean
}

const Mask:FC<Prop> = (props) => {
    const MaskClass = classnames(style.wm_mask, props.withBackground ? style.wm_mask_withBackground: '')
    return (
        <div className={MaskClass} style={props.style}>{props.children}</div>)
}

export default Mask;
