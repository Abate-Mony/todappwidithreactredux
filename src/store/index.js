import { configureStore, createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        increment(state, { type }) {

            state.counter++
        },
        decrement(state, { type }) {
            state.counter--

        },
        addBy(state, { type, payload }) {
            state.counter += payload

        },
    }
})
export const actions = counterSlice.actions
const store = configureStore({ reducer: counterSlice.reducer });
export default store