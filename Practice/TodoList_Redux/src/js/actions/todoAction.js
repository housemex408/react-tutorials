
export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        payload: item,
    }
}

export function updateCurrentItem(item) {
    return {
        type: 'UPDATE_CURRENT_ITEM',
        payload: item,
    }
}
