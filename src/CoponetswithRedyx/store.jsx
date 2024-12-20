import { configureStore } from '@reduxjs/toolkit'
// import userslice from './COmSlice'
// import  TextShow  from '../features/TextShowInUiSlice'
// import  ListItem  from './ListSlice'

import  {api} from '../RTkQuery/FetchDataWithRtk'



// export const store = configureStore({
//     reducer :{
//     counter : userslice,
//     texts : TextShow,
//     Listitems : ListItem

//     }
// })

export const store = configureStore({
    reducer: {
    
      [api.reducerPath]: api.reducer,
    },
   
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  })















  

//   Action ➡️ Dispatch ➡️ Store ➡️ Reducer ➡️ New State ➡️ UI Update

// Action: Describe what happened.

// Dispatch: Send the action to the store.

// Reducer: Calculates the new state based on the action.

// Store: Holds the updated state.

// UI Update: React components re-render based on the updated state.



// Scenario: Ordering Pizza
// Action (Customer places an order)
// You decide to order a pizza. You tell the cashier your choice (action).

// Dispatch (Cashier notes the order and passes it)
// The cashier writes down your order and sends it to the kitchen (dispatch).

// Store (Order Queue)
// The kitchen stores all orders in a queue (store).

// Reducer (Chef prepares the pizza)
// The chef in the kitchen processes the order based on the current ingredients and oven space (reducer).

// New State (Pizza is ready)
// The pizza is prepared, and the status of the order is updated (new state).

// UI Update (Order delivered to customer)
// You get your pizza, and the customer’s experience reflects the updated state.

