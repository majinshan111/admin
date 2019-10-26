import State from './state'
export default (preState=State,action)=>{
    
    let newData=JSON.parse(JSON.stringify(preState))
    let {type,params}=action
    switch(type){
        case 'CHANGE_TOKEN_MODEL':
            newData.tokenModel=params
            console.log(newData)
            break;
            default:
                break;
    }
    console.log(newData)
    return newData
}