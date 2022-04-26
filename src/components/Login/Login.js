import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from "styled-components"

const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: darkcyan;
	height: 100vh;
	padding: 25% 10px;
`

async function loginUser(credential) {
	return fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(credential)
	}).then(data => data.json())
}

function Login({ setToken }) {
	const [username, setUserName] = useState()
	const [password, setPassword] = useState()

	const handleSubmit = async e => {
		e.preventDefault()
		const token = await loginUser({
			username,
			password,
		})
		setToken(token)
	}

	return (
		<LoginWrapper>
			<h2>Please Log In</h2>

			<form onSubmit={handleSubmit} autoComplete="off">
				<label>
					<p>Username</p>
					<input type="text" onChange={e => setUserName(e.target.value)} autoComplete='off' />
				</label>

				<label>
					<p>Password</p>
					<input type="password" onChange={e => setPassword(e.target.value)} />
				</label>

				<br/>
				<button type="submit">Log In</button>

			</form>
		</LoginWrapper>
	)
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
}

export default Login
