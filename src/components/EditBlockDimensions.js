import React from 'react';
import config from '../config.js';
import Spinner from './form/Spinner';
import PropTypes from 'prop-types';
class EditBlockDimensions extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeValue = (prop, value) => {
      props.onChange({[prop]: value});
    };
  }

  render() {
    const {name, top, left, right, bottom, onClear} = this.props;

    return (
      <div className={name}>
        <div className="sb-top">
          <Spinner
            name="sb-spinner"
            label="top"
            value={top.value}
            availableUnits={config.availableUnits}
            availableModes={top.modes}
            handleChange={(value) => this.handleChangeValue(top.name, value)}
            onClear={() => onClear(top.name)}
          />
        </div>
        <div className="sb-right">
          <Spinner
            name="sb-spinner"
            label="right"
            value={right.value}
            availableUnits={config.availableUnits}
            availableModes={right.modes}
            handleChange={(value) => this.handleChangeValue(right.name, value)}
            onClear={() => onClear(right.name)}
          />
        </div>
        <div className="sb-bottom">
          <Spinner
            name="sb-spinner"
            label="bottom"
            value={bottom.value}
            availableUnits={config.availableUnits}
            availableModes={bottom.modes}
            handleChange={(value) => this.handleChangeValue(bottom.name, value)}
            onClear={() => onClear(bottom.name)}
          />
        </div>
        <div className="sb-left">
          <Spinner
            name="sb-spinner"
            label="left"
            value={left.value}
            availableUnits={config.availableUnits}
            availableModes={left.modes}
            handleChange={(value) => this.handleChangeValue(left.name, value)}
            onClear={() => onClear(left.name)}
          />
        </div>
      </div>
    );
  }
}

EditBlockDimensions.propTypes = {
  name: PropTypes.string.isRequired,
  top: PropTypes.object.isRequired,
  right: PropTypes.object.isRequired,
  bottom: PropTypes.object.isRequired,
  left: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default EditBlockDimensions;
