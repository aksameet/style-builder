import React from 'react';

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
  name: React.PropTypes.string,
  className: React.PropTypes.string,
  legend: React.PropTypes.string,
  children: React.PropTypes.array
};

export default Fieldset;
