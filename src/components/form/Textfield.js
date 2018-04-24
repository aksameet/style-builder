import React from 'react';
import PropTypes from 'prop-types';

const Textfield = ({name, label, value, disabled, onChange, onMouseEnter, onMouseLeave, onBlur, onClear}) => {

  return (
    <div className={name}>
      <label className="sb-label">{label}</label>
      <div className="sb-controls">
        <input
          className="sb-input"
          type="text"
          title={value}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onBlur={onBlur}
        />
        {!disabled &&
          <button className="sb-clear" onClick={onClear}>clear</button>
        }
      </div>
    </div>
  );
};

Textfield.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default Textfield;
