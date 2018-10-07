import React from 'react';
import classNames from 'classnames';
import './_Url.scss';

class Url extends React.Component  {
	handleMouseOver(e) {
		e.currentTarget.classList.add("is-hover");
	}

	handleMouseLeave(e) {
		e.currentTarget.classList.remove("is-hover");
	}

	render() {
		const { url, title, className } = this.props;

		return (
			<a
				className={classNames('ln-url', className)}
				href={ url } onMouseOver={(e) => {this.handleMouseOver(e)}}
				onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
				{ title }
				{ this.props.children }
			</a>
		)
	}
}

export default Url;
