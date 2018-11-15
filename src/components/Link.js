import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const className = css`
	color: #61dafb;
`
const Link = ({ children, href, target, rel }) => {
	return (
		<a className={className} href={href} target={target} rel={rel}>
			{children}
		</a>
	)
}

Link.defaultProps = {
	target: '_blank',
	rel: 'noopener noreferrer'
}

Link.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string.isRequired,
	target: PropTypes.string,
	rel: PropTypes.string
}

export default Link
