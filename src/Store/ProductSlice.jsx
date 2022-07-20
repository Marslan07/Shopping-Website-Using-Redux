import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


export const STATUSES=Object.freeze({
    IDLE:'idle',
    LOADING:'loading',
    ERROR:'error',
})

const productSlice= createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
    reducers:{

        // setProduct(state,action){


        //     //Do not do async call in reduser becasue reducer contain only sync called and its pure function(no side effect)
        //     // const res=await fetch('https://fakestoreapi.com/products');


        //     state.data=action.payload;
        // },
        // setState(state,action){
        //     state.status=action.payload;
        // }
    },

    extraReducers : (builder)=>{
        builder.addCase(fetchProductThunk.pending , (state,action)=>{
            state.status=STATUSES.LOADING;
        })
        .addCase(fetchProductThunk.fulfilled , (state,action) =>{
            state.data=action.payload;
            state.status=STATUSES.IDLE;
        })
        .addCase(fetchProductThunk.rejected, (state,action)=>{
            state.status=STATUSES.ERROR;
        })
    }


})
export const {setProduct,setState}=productSlice.actions;
export default productSlice.reducer;

//Thunk
//Thunk is basically an function which called a function 

//Method2
//CreateAsyncThunk is created to do better error handling

export const fetchProductThunk= createAsyncThunk('product/fetch' , async ()=>{
    const res= await fetch('https://fakestoreapi.com/products');
      const data= await res.json();
      return data;

})


//Method1

// export function fetchProductThunk(){
//     return async function fetchProduct(dispatch,getState){
//         dispatch(setState(STATUSES.LOADING));
//         try{
//             const res=await fetch('https://fakestoreapi.com/productss');
//       const data= await res.json();
//       dispatch(setProduct(data));
//       dispatch(setState(STATUSES.IDLE));
//         } catch(err){
//             console.log(err);
//             dispatch(setState(STATUSES.ERROR));
//         }
//     }
// }