import React, { Component } from 'react'
import logo from './logo.svg'

import Header from 'components/Header'
import ImageSpin from 'components/ImageSpin'
import Link from 'components/Link'

class App extends Component {
	render() {
		return (
			<Header>
				<ImageSpin src={logo} alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Link href="https://reactjs.org">Learn React</Link>
			</Header>
		)
	}
}

export default App
