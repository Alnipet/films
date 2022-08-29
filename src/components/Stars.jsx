import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function Stars(props) {
  const count = props.count;

  if (!count || count < 1 || count > 5) {
    return;
  }

  const starsArr = [];

  for (let i = 1; i <= count; i++) {
    starsArr.push(<Star key={i} />);
  }

  return <ul className="card-body-stars u-clearfix">{starsArr}</ul>;
}

Stars.defaultProps = { count: 0 };

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
