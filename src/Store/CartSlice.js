import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import data from "../Components/ProductsData";

const initialState = {
    cart: [],
    cartItems: data,
    totalPrice: 0,
    totalQuantity: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            // redux:
            state.cart.push(action.payload);
            // const itemIdx = state.cart.findIndex((item) => item.id === action.payload.id)

            // if (itemIdx >= 0) {
            //     state.cart[itemIdx].quantity += 1;
            //     toast.success(`${state.cart[itemIdx].title.slice(0, 10)} quantity increased`, {
            //         position: "bottom-left",
            //         autoClose: 3000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //     })
            // } else {

            //     toast.success(`${action.payload.title} is added in the list 🎉🫠`, {
            //         position: "bottom-left",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //     })
            // }

            // localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        calculateTotal(state) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })

            state.totalPrice = parseFloat(total).toFixed(2)
            state.totalQuantity = quantity;
        },
        remove(state, action) {
            toast.warn("Product is removed from the list", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            })
            const updateCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
            state.cartItems = updateCartItems;
        },
        removeAllItems(state, action) {
            state.cartItems = [];
            // localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        decreaseItems(state, action) {
            const itemIdx = state.cartItems.findIndex(cartItem => cartItem.id === action.payload)

            if (state.cartItems[itemIdx].cartQuantity > 1) {
                state.cartItems[itemIdx].cartQuantity -= 1;
                toast.success(`${state.cartItems[itemIdx].title.slice(0, 10)} quantity decreased`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                })
            }
            else if (state.cartItems[itemIdx].cartQuantity === 1) {
                state.cartItems[itemIdx].cartQuantity = 0;
                toast.success(`${state.cartItems[itemIdx].title.slice(0, 10)} quantity decreased`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                })
            }
        }
    }
})

export const { add, remove, calculateTotal,
    removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;