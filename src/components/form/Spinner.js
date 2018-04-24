import React from 'react';
import {getFloat} from '../../utils/valueExtractors';
import ContextEdit from '../ContextEdit';
import Textfield from './Textfield';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';
class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMode: false
    };
  }

  componentWillMount() {
    this.setState(this.processCssValue(this.props.value));
  }

  componentWillReceiveProps(props) {
    this.setState(this.processCssValue(props.value));
  }

  handleChangeValue = (inputValue) => {
    const newState = this.processNumericValue(inputValue);

    if(newState.valid) {
      this.setState(newState, this.handleSetState);
    }
  };

  handleClearValue() {
    this.setState({inputValue: '', value: undefined});
    this.props.onClear();
  }

  handleChangeUnit = (unit) => {
    this.setState({unit}, this.handleSetState);
  };

  handleChangeMode = (mode) => {
    const newState = {mode};

    if(mode !== 'value' || (mode === 'value' && this.state.mode === 'calc')) {
      newState.inputValue = '';
      newState.value = undefined;
    }

    this.setState(newState, this.handleSetState);
  };

  handleDecrementClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newValue = Number.parseFloat(((this.state.value || 0) - (this.props.step || 1)).toFixed(1));
    this.setState({inputValue: newValue, value: newValue}, this.handleSetState);
  };

  handleIncrementClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newValue = Number.parseFloat(((this.state.value || 0) + (this.props.step || 1)).toFixed(1));
    this.setState({inputValue: newValue, value: newValue}, this.handleSetState);
  };

  handleMouseEnter = () => {
    if(!this.props.disabled) {
      this.setState({showMode: true});
    }
  };

  handleMouseLeave = () => {
    this.setState({showMode: false});
  };

  processNumericValue(value='') {
    const allowedValue = getFloat(value);
    const parsedValue = Number.parseFloat(allowedValue);
    const isValidValue = !Number.isNaN(parsedValue) || value === '';

    return {inputValue: allowedValue, value: parsedValue, valid: isValidValue};
  }

  processCssValue(cssValue='') {
    const newState = this.processNumericValue(cssValue);

    newState.mode = (cssValue.match(new RegExp((this.props.availableModes || []).join('\|'))) || [''])[0] || 'value';

    if(newState.mode === 'calc') {
      newState.inputValue = cssValue.match(/calc\((.*)\)/)[1];
      newState.value = cssValue;
      newState.valid = true;
    } else {
      newState.unit = (cssValue.match(new RegExp((this.props.availableUnits || []).join('\|'))) || [''])[0] || 'px';
    }

    return newState;
  }

  handleSetState = () => {
    let cssValue = this.state.mode;
    const canTriggerChange = (this.state.mode === 'value' && this.state.value) || this.state.mode !== 'value';

    if(this.state.mode === 'value') {
      cssValue = this.state.value + (this.props.availableUnits ? this.state.unit : '');
    }
    if(this.state.mode === 'calc') {
      cssValue = `calc(${this.state.inputValue})`;
    }
    if(canTriggerChange) {
      this.props.handleChange(cssValue);
    }
  };

  handleChangeCustomValue = (value) => {
    const newState = {inputValue: value, value};
    this.setState(newState, this.handleSetState);
  };

  render() {
    const {name, label, availableModes, availableUnits} = this.props;
    const valueDisabled = this.props.disabled || this.state.mode !== 'value';
    // const showMode = true;
    const showMode = (!!availableModes && availableModes.length > 1 && this.state.showMode) || this.state.mode !== 'value';

    return (
      <div
        className={name + (this.state.showMode ? ' sb-active' : '')}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.mode === 'calc' &&
        <ContextEdit
          header="expression"
          body={this.state.inputValue}
          onChange={this.handleChangeCustomValue}
        />
        }
        <span className="sb-label">{label}</span>
        {this.state.mode !== 'calc' &&
        <Textfield
          name="sb-value"
          label="value"
          value={valueDisabled ? '' : this.state.inputValue}
          disabled={valueDisabled}
          onChange={this.handleChangeValue}
          onMouseEnter={this.handleMouseEnter}
          onClear={() => this.handleClearValue()}
        />
        }
        {showMode &&
        <Dropdown
          name="sb-mode"
          label="mode"
          selected={this.state.mode}
          onChange={this.handleChangeMode}
        >
          {
            availableModes.map((mode) => {
              return (
                <span key={mode} value={mode}>{mode}</span>
              );
            })
          }
        </Dropdown>
        }
        {availableUnits && availableUnits.length > 0 && showMode === false &&
        <Dropdown
          name="sb-unit"
          label="unit"
          selected={this.state.unit}
          onChange={this.handleChangeUnit}
        >
          {
            availableUnits.map((unit) => {
              return (
                <span key={unit} value={unit}>{unit}</span>
              );
            })
          }
        </Dropdown>
        }
        {showMode === false &&
        <button className="sb-decrement" type="button" onClick={this.handleDecrementClick} />
        }
        {showMode === false &&
        <button className="sb-increment" type="button" onClick={this.handleIncrementClick} />
        }
      </div>
    );
  }
}

Spinner.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  step: PropTypes.number.isRequired,
  availableModes: PropTypes.array.isRequired,
  availableUnits: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default Spinner;
