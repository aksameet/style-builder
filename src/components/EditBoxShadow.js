import React from 'react';
import config from '../config.js';
import {getColor} from '../utils/valueExtractors';
import Spinner from './form/Spinner';
import Colorpicker from './Colorpicker';

class EditBoxShadow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...this.processShadow(this.props.value)
    };
  }

  processShadow = (value='0px 0px 0px 0px') => {
    const valueChunks = value.split(' ');
    return {
      x: valueChunks[0],
      y: valueChunks[1],
      blur: valueChunks[2],
      spread: valueChunks[3],
      color: getColor(value) || 'rgba(0, 0, 0, 1)'
    };
  };

  handleChangeState = (props) => {
    this.setState(props, this.getShadow);
  };

  getShadow = () => {
    if(this.state.x && this.state.y && this.state.blur && this.state.spread && this.state.color) {
      this.props.onChange(`${this.state.x} ${this.state.y} ${this.state.blur} ${this.state.spread} ${this.state.color}`);
    } else {
      this.props.onClear();
    }
  };

  render() {
    return (
      <div className="sb-editBoxShadow">
        <Colorpicker
          color={this.state.color}
          onSelectColor={(value) => this.handleChangeState({color: value})}
        />
        <Spinner
          name="sb-offset-x"
          label="offset-x"
          value={this.state.x}
          availableUnits={config.availableUnits}
          availableModes={['value', 'calc']}
          handleChange={(value) => this.handleChangeState({x: value})}
          onClear={() => this.handleChangeState({x: undefined})}
        />
        <Spinner
          name="sb-offset-y"
          label="offset-y"
          value={this.state.y}
          availableUnits={config.availableUnits}
          availableModes={['value', 'calc']}
          handleChange={(value) => this.handleChangeState({y: value})}
          onClear={() => this.handleChangeState({y: undefined})}
        />
        <Spinner
          name="sb-blur"
          label="blur"
          value={this.state.blur}
          availableUnits={config.availableUnits}
          availableModes={['value', 'calc']}
          handleChange={(value) => this.handleChangeState({blur: value})}
          onClear={() => this.handleChangeState({blur: undefined})}
        />
        <Spinner
          name="sb-spread"
          label="spread"
          value={this.state.spread}
          availableUnits={config.availableUnits}
          availableModes={['value', 'calc']}
          handleChange={(value) => this.handleChangeState({spread: value})}
          onClear={() => this.handleChangeState({spread: undefined})}
        />
      </div>
    );
  }
}

EditBoxShadow.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func
};

export default EditBoxShadow;
