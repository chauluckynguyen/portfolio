import React from 'react';
import classNames from 'classnames';
import './_Section.scss';
import Url from '../Url/index';

class Section extends React.Component  {
  render() {
    const { className, link, title, id, headerClass } = this.props;

    var header;
    if (link) {
      header = <div className="ln-section__header"><h2 className={classNames('ln-section__heading', headerClass)}>{ title }</h2><Url url="/page-2" title={ link }/></div>
    } else if (title) {
      header = <h2 className={classNames('ln-section__heading', headerClass)}>{ title }</h2>
    } else {
      header = null;
    }

    return (
      <section className={classNames('ln-section', className)} id={ id }>
        { header }
        { this.props.children }
      </section>
    )
  }
}

export default Section;
