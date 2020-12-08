import React from 'react'
import HomeReducer, {initialState} from '../reducer/reducer'

// You pass the initial state values into this to make a context to reference
export const HomeContext = React.createContext(initialState)

function HomeProvider ({children}) {

	// state holds the state "values" of the website
	// dispatch is used to send actions to the reducer to modify the state
	const [state, dispatch] = React.useReducer(
		HomeReducer, initialState
	)

	// Returns the children components passed to it, wrapped in a provider so they can access
	// the state created
	return (
		<HomeContext.Provider value={{state, dispatch}}>
			{children}
		</HomeContext.Provider>
	)
}

export default HomeProvider