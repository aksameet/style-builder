import React from 'react';
import config from '../config.js';
import Textfield from './form/Textfield';
import Dropdown from './form/Dropdown';
import Spinner from './form/Spinner';
import Colorpicker from './Colorpicker';
import Collection from './form/Collection';
import PropTypes from 'prop-types';
class EditBackground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.processPosition(props.cssProps.backgroundPosition),
      ...this.processSize(props.cssProps.backgroundSize),
      mode: 'values'
    };

    this.handleChangePositionState = (props) => {
      this.setState(props, this.getPosition);
    };

    this.handleChangeSizeState = (props) => {
      this.setState(props, this.getSize);
    };

    this.getPosition = () => {
      const horizontalPosition = this.state.horizontal.edge ?
        `${this.state.horizontal.edge} ${this.state.horizontal.distance}` : this.state.horizontal.distance;
      const verticalPosition = this.state.vertical.edge ?
        `${this.state.vertical.edge} ${this.state.vertical.distance}` : this.state.vertical.distance;
      const position = horizontalPosition + (horizontalPosition && verticalPosition && ' ') + verticalPosition;
      this.props.onChange('backgroundPosition', position);
    };

    this.getSize = () => {
      const size = `${this.state.width} ${this.state.height}`;
      this.props.onChange('backgroundSize', size);
    };

    this.handleChangeSizeMode = (mode) => {
      let size = mode;
      if(mode === 'values') {
        size = this.state.height ? `${this.state.width} ${this.state.height}` : this.state.width;
      }
      if(mode !== 'values' || this.state.width) {
        this.props.onChange('backgroundSize', size);
      }
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...this.processPosition(props.cssProps.backgroundPosition),
      ...this.processSize(props.cssProps.backgroundSize)
    });
  }

  componentDidUpdate() {
    if(!this.state.width && !this.state.height) {
      this.props.onClear('backgroundSize');
    }
  }

  processPosition(position='') {
    const positionChunks = position.split(' ');
    const positionObj = {horizontal: {}, vertical: {}};

    if(positionChunks.length === 1) {
      positionObj.horizontal.distance = positionChunks[0];
      positionObj.vertical.distance = '0%';
    }

    if(positionChunks.length === 2) {
      positionObj.horizontal.distance = positionChunks[0];
      positionObj.vertical.distance = positionChunks[1];
    }
    if(positionChunks.length === 4) {
      positionObj.horizontal.edge = positionChunks[0];
      positionObj.horizontal.distance = positionChunks[1];
      positionObj.vertical.edge = positionChunks[2];
      positionObj.vertical.distance = positionChunks[3];
    }

    return positionObj;
  }

  processSize(size='') {
    const sizeChunks = size.split(' ');
    const sizeObj = {};

    if(sizeChunks.length === 1) {
      if(sizeChunks[0] === 'auto') {
        sizeObj.width = 'auto';
        sizeObj.height = 'auto';
        sizeObj.mode = 'values';
      } else {
        sizeObj.width = '0%';
        sizeObj.height = '0%';
        sizeObj.mode = sizeChunks[0];
      }
    }
    if(sizeChunks.length === 2) {
      sizeObj.width = sizeChunks[0];
      sizeObj.height = sizeChunks[1];
      sizeObj.mode = 'values';
    }

    return sizeObj;
  }

  render() {
    const {
      cssProps,
      onChange,
      onClear,
    } = this.props;

    return (
      <div className="sb-editBackground">
        <Textfield
          label="image"
          name="sb-image"
          value={(cssProps.backgroundImage || '').slice(5, -2)}
          onChange={(value) => {onChange('backgroundImage', `url("${value}")`);}}
          onClear={() => onClear('backgroundImage')}
        />
        <Colorpicker
          color={cssProps.color}
          onSelectColor={(value) => onChange('backgroundColor', value)}
        />
        <Dropdown
          name="sb-edge-h"
          label="h-edge"
          selected={this.state.horizontal.edge}
          onChange={(value) => this.handleChangePositionState({horizontal: {...this.state.horizontal, edge: value}})}
        >
          <span key="left" value="left">left</span>
          <span key="right" value="right">right</span>
        </Dropdown>
        <Dropdown
          name="sb-edge-v"
          label="v-edge"
          selected={this.state.vertical.edge}
          onChange={(value) => this.handleChangePositionState({vertical: {...this.state.vertical, edge: value}})}
        >
          <span key="top" value="top">top</span>
          <span key="bottom" value="bottom">bottom</span>
        </Dropdown>
        <Spinner
          name="sb-distance-h"
          label="h-distance"
          value={this.state.horizontal.distance}
          availableUnits={config.availableUnits}
          availableModes={['value', 'calc']}
          handleChange={(value) => this.handleChangePositionState({horizontal: {...this.state.horizontal, distance: value}})}
          onClear={() => this.handleChangePositionState({horizontal: {edge: undefined, distance: undefined}})}
        />
        <Spinner
          name="sb-distance-v"
          label="v-distance"
          value={this.state.vertical.distance}
          disabled={!this.state.horizontal.distance}
          availableUnits={config.availableUnits}
          availableModes={['value', 'calc']}
          handleChange={(value) => this.handleChangePositionState({vertical: {...this.state.vertical, distance: value}})}
          onClear={() => this.handleChangePositionState({vertical: {edge: undefined, distance: undefined}})}
        />
        <Spinner
          name="sb-width"
          label="width"
          value={this.state.width}
          disabled={!!this.state.mode && this.state.mode !== 'values'}
          availableModes={['value', 'auto', 'calc']}
          availableUnits={config.availableUnits}
          handleChange={(value) => this.handleChangeSizeState({width: value})}
          onClear={() => this.handleChangeSizeState({width: undefined})}
        />
        <Spinner
          name="sb-height"
          label="height"
          value={this.state.height}
          disabled={!!this.state.mode && this.state.mode !== 'values'}
          availableModes={['value', 'auto', 'calc']}
          availableUnits={config.availableUnits}
          handleChange={(value) => this.handleChangeSizeState({height: value})}
          onClear={() => this.handleChangeSizeState({height: undefined})}
        />
        <Dropdown
          name="sb-repeat"
          label="repeat"
          selected={cssProps.backgroundRepeat}
          onChange={(value) => onChange('backgroundRepeat', value)}
        >
          <span key="no-repeat" value="no-repeat">no-repeat</span>
          <span key="repeat" value="repeat">repeat</span>
          <span key="repeat-x" value="repeat-x">repeat-x</span>
          <span key="repeat-y" value="repeat-y">repeat-y</span>
        </Dropdown>
        <Dropdown
          name="sb-attachment"
          label="attachment"
          selected={cssProps.backgroundAttachment}
          onChange={(value) => onChange('backgroundAttachment', value)}
        >
          <span key="scroll" value="scroll">scroll</span>
          <span key="fixed" value="fixed">fixed</span>
          <span key="inherit" value="inherit">inherit</span>
        </Dropdown>
        <Collection
          name="sb-mode"
          label="mode"
          className="sb-mode"
          value={this.state.mode}
          onItemClick={this.handleChangeSizeMode}
        >
          <button className="sb-button" name="values" type="button" value="values">values</button>
          <button className="sb-button" name="auto" type="button" value="auto">auto</button>
          <button className="sb-button" name="cover" type="button" value="cover">cover</button>
          <button className="sb-button" name="contain" type="button" value="contain">contain</button>
        </Collection>
        <Dropdown
          name="sb-clip"
          label="clip"
          selected={cssProps.backgroundClip}
          onChange={(value) => onChange('backgroundClip', value)}
        >
          <span key="border-box" value="border-box">border-box</span>
          <span key="padding-box" value="padding-box">padding-box</span>
          <span key="content-box" value="content-box">content-box</span>
          <span key="inherit" value="inherit">inherit</span>
        </Dropdown>
      </div>
    );
  }
}

EditBackground.propTypes = {
  cssProps: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default EditBackground;
