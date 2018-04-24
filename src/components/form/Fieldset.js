import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = ({ name, legend, className, children }) => {
  return (
    <fieldset name={name} className={className}>
      {legend && <legend className="sb-legend">{legend}</legend>}
      <div className="sb-content">
        {children}
      </div>
    </fieldset>
  );
};

Fieldset.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default Fieldset;
