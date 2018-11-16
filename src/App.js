import React, { Component } from 'react'
import { css } from 'react-emotion'
import logo from './logo.png'

import Header from 'components/Header'
import ImageSpin from 'components/ImageSpin'
import Link from 'components/Link'
import Video from 'components/Video'
import Body from 'components/Body'

const className = css`
	display: flex;
	flex-direction: column;
`

class App extends Component {
	render() {
		return (
			<React.Fragment className={className}>
				<Header>
					<ImageSpin src={logo} alt="logo" />
					<p>Components with CSS in JS</p>
					<Link href="https://github.com/emotion-js/emotion">
						Learn Emotion
					</Link>
				</Header>
				<Body>
					<Video url="https://www.youtube.com/embed/jjN2yURa_uM" />
				</Body>
			</React.Fragment>
		)
	}
}

export default App
