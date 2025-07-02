
import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
    items: [
        {
            id: 42,
            cartlineid: nanoid(),
            title: "Sample Product",
            price: 999,
            qty: 1,
            thumbnail: "/placeholder.png",
        },
    ],        // {id, title, price, qty, thumbnail}
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;        // whole product object
            const existing = state.items.find(i => i.id === item.id);
            if (existing) {
                existing.qty += 1;
            } else {
                state.items.push({ ...item,  /*id: nanoid()*/ qty: 1 });
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },

        updateQty(state, action) {
            const { id, qty } = action.payload;
            const target = state.items.find(i => i.id === id);
            if (target) target.qty = qty;
        },

        clearCart(state) {
            state.items = [];
        },
    }
})

export const { addItem, removeItem, updateQty, clearCart } = cartSlice.actions;

export default cartSlice.reducer;