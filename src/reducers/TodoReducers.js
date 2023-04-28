const initialState = []
export const todoReducer = (state = initialState, action) => {

    // const _todo = todos.slice()
    // console.log(state)
    switch (action.type) {
        case "ADD_TODO":
            // code here 
            // console.log(todos.todos)
            return [...state, action.payload];
        case "REMOVE_TODO":
            // code here 
            return state.filter(todo => action.id !== todo.id);
        default:
            return state
    }


}