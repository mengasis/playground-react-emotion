import styled, { keyframes } from 'react-emotion'

const spin = keyframes`
	from { transform: rotate(0deg) }
  	to { transform: rotate(360deg) }
`

export default styled('img')`
	animation: ${spin} infinite 5s linear;
	height: 10vmin;
`
