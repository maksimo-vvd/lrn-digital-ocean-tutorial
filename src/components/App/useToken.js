import { useState } from 'react'

export default function useToken() {
	const getToken = () => {
		const tokenString = sessionStorage.getItem('token')
		const userToken = JSON.parse(tokenString)
		console.log('getToken user Hook', userToken?.token)
		return userToken?.token
	}

	// Set the token each render iteration
	const [token, setToken ] = useState(getToken())

	const saveToken = (userToken) => {
		sessionStorage.setItem('token', JSON.stringify(userToken))
		// for run rerender app after set token to Storage(L/S)
		// execute code below
		setToken(userToken.token)
	}

	return {
		setToken: saveToken,
		token,
	}
}
