
import View from "./view";
import Model, {ModelType} from './model'
import React from 'react';
import {Props} from './dto'
import {WidgetVM} from 'src/utils';
const Widget:React.FC<Props> = WidgetVM.connect<Props,ModelType>(View, Model)
export default Widget

