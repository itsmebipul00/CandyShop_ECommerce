export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case 'UPDATE_CART':
			return {
				cartItems: action.payload,
			}
		case 'CART_ERROR':
			return {
				error: action.payload,
			}
		case 'CLEAR_CART':
			console.log('here')

			return {
				cartItems: [],
			}
		default:
			return state
	}
}
