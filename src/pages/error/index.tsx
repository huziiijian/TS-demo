import ViewModel from 'src/utils/VM';
import View from "./view";
import Model from "./model";
const Page = ViewModel.connect(Model,View,'');

export default Page;
