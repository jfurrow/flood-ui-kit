import React from 'react';
const slugify = string => string.toLowerCase();

const Section = props => (
  <section className={`section ${slugify(props.title)}`}>
    <h2 className="section__heading">{props.title}</h2>
    <div className="section__content">
      {props.children}
    </div>
  </section>
);

export default Section;
