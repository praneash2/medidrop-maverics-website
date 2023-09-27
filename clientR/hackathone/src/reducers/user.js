export default(state={data:[]}, action) => {
    switch(action.type){
        case 'LOGIN':
            if(action?.payload?.message!=="nope"){
            localStorage.setItem('profile',JSON.stringify(action?.payload));
            window.location.reload();
            }
            else{
                alert("cannot login");
            }
            return {data:action.payload};
        case "SIGNUP":
            if(action?.payload?.message!=="nope"){
                localStorage.setItem('profile',JSON.stringify(action?.payload));
                window.location.reload();
            }
            else{
                alert("cannot signup");
            }
            return {data:action?.payload};
        case "LOGOUT":
                localStorage.clear();
                return {...state,data:{}};
        default:
            return state;
    }
  };