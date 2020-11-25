export const initialState = {
    user:null,
}

export const actionTypes = {
    SET_USER : "SET_USER",
};

// In this we check user is present or not
// if yes then return it state and action.user
const reducer = (state, action) =>{
  console.log(action);
  switch (action.type){
case actionTypes.SET_USER:
    return {
        ...state,
        user:action.user,
    };
    default:
    return state;
  }    
};

export default reducer;