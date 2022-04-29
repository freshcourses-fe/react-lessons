import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

const ImageWrapper = ({ style, width, height, ...restProps }) => {
  const inlineStyles = {
    ...style,
    width,
    height,
  };

  return <div style={inlineStyles} className={styles.wrapper} {...restProps} />;
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ImageWrapper;
