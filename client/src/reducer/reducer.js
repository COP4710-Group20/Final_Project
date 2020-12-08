export const initialState = {
	user: {},
}

const HomeReducer = (state, action) => {
	switch (action.type) {
		case 'update_user': {

			// ...state just means all the values of the state then anything after the , are values
			// that are overwritten in the state
			return {...state, user: action.payload}
		}
		case 'update_user_search': {
			return {...state, display_name: action.payload.text}
		}
		default: {
			// ${varName} is a way of accessing a variable within a string, but string must use ``
			throw new Error(`Home Reducer: action type: ${action.type} is not supported`)
		}
	}
}

export default HomeReducer