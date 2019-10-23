import State from './state'
export default (preState=State,action)=>{
    let newData=JSON.parse(JSON.stringify(preState))
    let {type,params}=action
    switch(type){
        case 'CHANGE_TOKEN_MODEL':
            newData.tokenModel=params
            break;
            default:
                break;
    }
    return newData
}