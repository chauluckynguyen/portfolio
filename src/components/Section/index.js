import React from 'react';
import classNames from 'classnames';

// Components
import Url from '../Url/index';

// Styles
import './_Section.scss';

class Section extends React.Component  {
  render() {
    const { className, link, title, id, headerClass } = this.props;

    var header;
    if (link) {
      header = <div className="ln-section-heading"><h2 className={classNames('ln-section-heading', headerClass)}>{title}</h2><Url url="/page-2" title={ link }/></div>
    } else if (title) {
      header = <h2 className={classNames('ln-section-heading', headerClass)}>{ title }</h2>
    } else {
      header = null;
    }

    return (
      <section className={classNames('ln-section', className)} id={ id }>
        {header}
        {this.props.children}
      </section>
    )
  }
}

export default Section;
