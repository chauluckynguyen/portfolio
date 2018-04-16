import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import './_Section.scss';

class Section extends React.Component  {
  render() {
    const { className, link, title, id } = this.props;

    var header;
    if (link) {
      header = <div className="section--header"><h2 className="section--title">{ title }</h2><a className="section--url" href="/page-2">{ link }</a></div>
    } else if (title) {
      header = <h2 className="section--title">{ title }</h2>
    } else {
      header = null;
    }

    return (
      <section className={classNames('section', className)} id={ id }>
        { header }
        { this.props.children }
      </section>
    )
  }
}

export default Section;
