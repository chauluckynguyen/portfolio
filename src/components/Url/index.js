import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// Styles
import './_Url.scss';

class Url extends React.Component  {
	handleMouseOver(e) {
		e.currentTarget.classList.add("is-hover")
	}

	handleMouseLeave(e) {
		e.currentTarget.classList.remove("is-hover")
	}

	render() {
		const { url, title, className, size, type, isNewTab } = this.props
		const urlClass = classNames(
			className,
			{
				'ln-url': true,
				[`-${size}`]: size,
				[`-${type}`]: type
			}
		)

		return (
			<a
				className={urlClass}
				href={url} 
				onMouseOver={(e) => {this.handleMouseOver(e)}}
				onMouseLeave={(e) => {this.handleMouseLeave(e)}}
				title={title}
				target={isNewTab ? "_blank" : null}
			>
				{title}
				{this.props.children}
			</a>
		)
	}
}

// PropTypes
Url.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
	type: PropTypes.string,
	isNewTab: PropTypes.bool
}

export default Url
