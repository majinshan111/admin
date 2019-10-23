export default{
    changeTokenModel(params){
        let action={
            type:'CHANGE_TOKEN_MODEL',
            params:params
        }
        return action
    }
}