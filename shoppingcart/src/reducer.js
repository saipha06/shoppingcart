const initState = {
    username:'',
    userloggedIn:false,
    checkout:false,
    orderId:0
}

const reducer = (state = initState,action)=>{
    switch(action.type){
        case('LOGIN'):
            return {...state,username:action.username,userloggedIn:true}
        case('LOGOUT'):
        return {...state,username:'',userloggedIn:false}
        case('CHECKOUT'):
        return {...state,checkout:true}
        case('ORDER'):
        return {...state,orderId:action.id}
        
        default:
            return state
    }
}

export default reducer