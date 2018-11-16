import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 0;
	padding-top: 56.25%;
	margin: 20px;
`

const Iframe = styled('iframe')`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	border: 0;
`

const Video = ({ url }) => {
	return (
		<Container>
			<Iframe title="Video" src={url} />
		</Container>
	)
}

export default Video
