import Service from '../service'

const GetTemplateQuery:MockCallback<{}> ={}
export default {
    GetTemplateQuery: process.env.NODE_ENV === 'development' && GetTemplateQuery
}
