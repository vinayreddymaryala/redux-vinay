const { createStore } = require("redux")

const initialState={
    numberOfLaptops:100
}

const BUYLAPTOP=()=>{

return {
    type:Buy-Laptop
}

}
const reducer=(state=initialState,action)=>{
// if(action.type==="Buy-laptop"){
//     return{numberOfLaptops:state.numberOfLaptops-1}
// }else{
//     return state;
// }
switch(action.type){
case "Buy-laptop":
    return{numberOfLaptops:state.numberOfLaptops-1}
    default:
        return state;
}

}
const store=createStore(reducer);
//console.log(store)

store.subscribe(()=>{console.log(store.getState())});
store.dispatch(BUYLAPTOP());


