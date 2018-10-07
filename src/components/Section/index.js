import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import './_Section.scss';
import Url from '../Url/index';

class Section extends React.Component  {
  render() {
    const { className, link, title, id } = this.props;

    var header;
    if (link) {
      header = <div className="section--header"><h2 className="section--title">{ title }</h2><Url url="/page-2" title={ link }/></div>
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
