import React from 'react';
import config from '../config.js';
import Spinner from './form/Spinner';
import PropTypes from 'prop-types';
class EditBorderRadius extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.processValue(props.cssProps[`border${props.name}Radius`])
    };
  }

  componentWillReceiveProps(props) {
    const state = this.processValue(props.cssProps[`border${props.name}Radius`]);
    this.setState(state);
  }

  processValue(value='') {
    const valueChunks = value.split(' ');

    return {
      horizontal: valueChunks[0],
      vertical: valueChunks[1]
    };
  }

  handleChange(prop, value) {
    this.setState({[prop]: value}, this.handleSetState);
  }

  handleClear(prop) {
    this.setState({[prop]: undefined}, this.handleSetState);
  }

  handleSetState() {
    const value = this.state.horizontal && this.state.vertical
                  ? `${this.state.horizontal} ${this.state.vertical}`
                  : this.state.horizontal || this.state.vertical;
    if(this.state.horizontal || this.state.vertical) {
      this.props.onChange(`border${this.props.name}Radius`, value);
    } else {
      this.props.onClear(`border${this.props.name}Radius`);
    }
  }

  render() {
    return (
      <div className={`sb-border${this.props.name}Radius`}>
        <Spinner
          name="sb-horizontal"
          label={`${this.props.label} x`}
          value={this.state.horizontal}
          availableUnits={config.availableUnits}
          availableModes={['value', 'initial', 'inherit', 'calc']}
          handleChange={(value) => this.handleChange(`horizontal`, value)}
          onClear={() => this.handleClear('horizontal')}
        />
        <Spinner
          name="sb-vertical"
          label={`${this.props.label} y`}
          value={this.state.vertical}
          availableUnits={config.availableUnits}
          availableModes={['value', 'initial', 'inherit', 'calc']}
          handleChange={(value) => this.handleChange(`vertical`, value)}
          onClear={() => this.handleClear('vertical')}
        />
      </div>
    );
  }
}

EditBorderRadius.propTypes = {
  cssProps: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default EditBorderRadius;
