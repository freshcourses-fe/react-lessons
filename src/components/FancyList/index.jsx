import React from 'react';
import PropTypes from 'prop-types';

const FancyList = (props) => {
  return (
    <article
      style={{ border: '2px solid red', maxWidth: '500px', margin: '0 auto' }}
    >
      <h1>{props.title}</h1>
      <ul>{props.children}</ul>
    </article>
  );
};

FancyList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default FancyList;
