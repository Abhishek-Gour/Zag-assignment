/* This code is configuring a Redux store using the `configureStore` function from the
`@reduxjs/toolkit` package. It is importing a `cartReducer` from a `CartSlice` file and adding it to
the store's reducers under the key `mainCart`. Finally, it is exporting the configured store as the
default export of the module. */
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
const store = configureStore({
    reducer: {
        mainCart: cartReducer,
    }
})
export default store