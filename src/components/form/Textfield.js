import React from 'react';

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
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onClear: React.PropTypes.func
};

export default Textfield;
