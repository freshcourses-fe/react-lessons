import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = (props) => {
  const { jc, ai, fd, wrap, children } = props;

  const styles = {
    display: 'flex',
    justifyContent: jc,
    alignItems: ai,
    flexDirection: fd,
    flexWrap: wrap,
  };
  return <div style={styles}>{children}</div>;
};

FlexContainer.defaultProps = {
  jc: 'flex-start',
  ai: 'stretch',
  fd: 'row',
  wrap: 'nowrap'
};

FlexContainer.propTypes = {
  jc: PropTypes.string,
  ai: PropTypes.string,
  fd: PropTypes.string,
  wrap: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export default FlexContainer;
