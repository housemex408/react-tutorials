export default function reducer(state={
    items: [],
    newItem: null
}, action) {

    switch (action.type) {
        case "ADD_ITEM": {
            const itemValue = action.payload;
            const newItems = state.items.concat([itemValue]);
            return { items: newItems, newItem: null };
        }
        case "UPDATE_CURRENT_ITEM": {
            const itemValue = action.payload;
            return { ...state, newItem: itemValue };
        }
    }

    return state
}
