import {createSlice} from "@reduxjs/toolkit"
import { log } from "console";

type Item = {
    img: string,
    title: string,
    price: number,
    count: number,
    id: string,
}
export function loadState(KEY:string) {
    try {
      const serializedState = localStorage.getItem(KEY);
      if (!serializedState) {console.log("serialized serialized state : ",serializedState);return undefined;}
      return Number(serializedState) || JSON.parse(serializedState) ;
    } catch (e) {
        console.log("error message : ",e);
        
      return undefined;
    }
  }

 function loadNumState(KEY:string) {
    try {
      const serializedState = localStorage.getItem(KEY);
      if (!serializedState) {console.log("serialized serialized state : ",serializedState);return undefined;}
      return Number(serializedState) ;
    } catch (e) {
        console.log("error message : ",e);
        
      return undefined;
    }
  }

// const getFromLocalStorage = (key: string) => {
//     if (!key || typeof window === 'undefined') {
//         console.log("undefined window")
//         return undefined
//     }

//      return localStorage.getItem(key)
//   }
const cartSlice = createSlice({

    name:"cart",
    initialState : {
        totalItems: loadNumState("totalItems") || 0,
        totalAmount: loadNumState("totalAmount") || 0,
        // totalAmount: loadState("totalAmount"),
        cartItems: loadState("cart") || {}
    },
    reducers:{
        
        addItem :(state,action) => {
            const selID = action.payload.id;
            const price = action.payload.amount
            const image = action.payload.image
            const title = action.payload.title
            console.log('All Items: ', state.cartItems)
            

            let updatedOrNewCartItem :Item = {
                id:"",
                count : 0,
                price: 0,
                img:"",
                title:"",
            };
            //if cart item already exists
             if (state.cartItems[selID]){
            // increment quantity || count
                updatedOrNewCartItem.id = selID
                updatedOrNewCartItem.count = state.cartItems[selID].count + 1
                updatedOrNewCartItem.price = price
                updatedOrNewCartItem.img = image
                updatedOrNewCartItem.title = title
                
            
        }
        //if new item, quantity || count = 1. 
        else {
            updatedOrNewCartItem  = {
                id:selID,
                count : 1,
                price: price,
                img:image,
                title:title,
            };

        }

         //update cart in local storage
         var total = state.totalItems + 1
         var amt = state.totalAmount + price
        
         localStorage.setItem('totalItems', total.toString())
         localStorage.setItem('totalAmount', amt.toString())
         localStorage.setItem('cart', JSON.stringify({ ...state.cartItems, [selID]: updatedOrNewCartItem }))
        //return new or updated cart state
        return {
            ...state,
            cartItems: { ...state.cartItems, [selID]: updatedOrNewCartItem },
            totalItems: total,
            totalAmount: amt
        }


        },
        removeItem: (state,action) =>{
            const selID = action.payload.id;
            console.log("tYPE OF cart items",typeof(state.cartItems));

            var newTotalItems = state.totalItems - 1
            var newTotalAmount = state.totalAmount - state.cartItems[selID].price
            
            if (state.cartItems[selID].count == 1){    
                delete state.cartItems[selID] 
            }else{
                state.cartItems[selID].count -= 1
            }
            localStorage.setItem('totalItems', newTotalItems.toString())
            localStorage.setItem('totalAmount', newTotalAmount.toString())
            state.totalAmount = newTotalAmount
            state.totalItems = newTotalItems
            localStorage.setItem('cart', JSON.stringify( state.cartItems))



        },
        clearCart: (state,action) =>{

            for (var i in state.cartItems){
                if (state.cartItems.hasOwnProperty(i)){
                      delete state.cartItems[i];
                  }
              }
            state.totalItems = 0
            state.totalAmount = 0,
           //remove cart item from local storage
        //    localStorage.removeItem("cart"); 
        //    localStorage.removeItem("totalItems"); 
        //    localStorage.removeItem("totalAmount"); 
           localStorage.setItem("cart","0"); 
           localStorage.setItem("totalItems","0"); 
           localStorage.setItem("totalAmount","0"); 

            // return{
            //     ...state,
            //     cartItems : {},
            //     totalItems:0,
            //     totalAmount:0,
            // }
        }
    }

})
export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer ;