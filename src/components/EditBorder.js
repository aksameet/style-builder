import React from 'react';
import config from '../config.js';
import Collection from './form/Collection';
import Spinner from './form/Spinner';
import Dropdown from './form/Dropdown';
import Colorpicker from './Colorpicker';
import EditBorderRadius from './EditBorderRadius';
import PropTypes from 'prop-types';
class EditBorder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      radiusMode: '1'
    };
  }

  handleChangeRadiusMode(value) {
    this.setState({radiusMode: value});
  }

  handleChangeRadius(prop, value) {
    if(this.state.radiusMode === '1') {
      this.props.onChange(prop, value);
    }
    if(this.state.radiusMode === '4') {
      this.props.onChange('borderTopLeftRadius', value);
      this.props.onChange('borderTopRightRadius', value);
      this.props.onChange('borderBottomRightRadius', value);
      this.props.onChange('borderBottomLeftRadius', value);
    }
  }

  render() {
    const {cssProps, onChange, onClear} = this.props;

    return (
      <div className="sb-editBorder">
        <Colorpicker
          color={cssProps.borderTopColor}
          onSelectColor={(value) => onChange('borderTopColor', value)}
        />
        <Colorpicker
          color={cssProps.borderRightColor}
          onSelectColor={(value) => onChange('borderRightColor', value)}
        />
        <Colorpicker
          color={cssProps.borderBottomColor}
          onSelectColor={(value) => onChange('borderBottomColor', value)}
        />
        <Colorpicker
          color={cssProps.borderLeftColor}
          onSelectColor={(value) => onChange('borderLeftColor', value)}
        />

        <Dropdown
          name="sb-style"
          label="style"
          selected={cssProps.borderTopStyle}
          onChange={(value) => onChange('borderTopStyle', value)}
        >
          <span key="none" value="none">none</span>
          <span key="solid" value="solid">solid</span>
          <span key="dashed" value="dashed">dashed</span>
          <span key="dotted" value="dotted">dotted</span>
        </Dropdown>
        <Dropdown
          name="sb-style"
          label="style"
          selected={cssProps.borderRightStyle}
          onChange={(value) => onChange('borderRightStyle', value)}
        >
          <span key="none" value="none">none</span>
          <span key="solid" value="solid">solid</span>
          <span key="dashed" value="dashed">dashed</span>
          <span key="dotted" value="dotted">dotted</span>
        </Dropdown>
        <Dropdown
          name="sb-style"
          label="style"
          selected={cssProps.borderBottomStyle}
          onChange={(value) => onChange('borderBottomStyle', value)}
        >
          <span key="none" value="none">none</span>
          <span key="solid" value="solid">solid</span>
          <span key="dashed" value="dashed">dashed</span>
          <span key="dotted" value="dotted">dotted</span>
        </Dropdown>
        <Dropdown
          name="sb-style"
          label="style"
          selected={cssProps.borderLeftStyle}
          onChange={(value) => onChange('borderLeftStyle', value)}
        >
          <span key="none" value="none">none</span>
          <span key="solid" value="solid">solid</span>
          <span key="dashed" value="dashed">dashed</span>
          <span key="dotted" value="dotted">dotted</span>
        </Dropdown>

        <Spinner
          name="sb-width"
          label="width"
          value={cssProps.borderTopWidth}
          availableUnits={config.availableUnits}
          availableModes={['value', 'initial', 'inherit', 'calc']}
          handleChange={(value) => onChange('borderTopWidth', value)}
          onClear={() => onClear('borderTopWidth')}
        />
        <Spinner
          name="sb-width"
          label="width"
          value={cssProps.borderRightWidth}
          availableUnits={config.availableUnits}
          availableModes={['value', 'initial', 'inherit', 'calc']}
          handleChange={(value) => onChange('borderRightWidth', value)}
          onClear={() => onClear('borderRightWidth')}
        />
        <Spinner
          name="sb-width"
          label="width"
          value={cssProps.borderBottomWidth}
          availableUnits={config.availableUnits}
          availableModes={['value', 'initial', 'inherit', 'calc']}
          handleChange={(value) => onChange('borderBottomWidth', value)}
          onClear={() => onClear('borderBottomWidth')}
        />
        <Spinner
          name="sb-width"
          label="width"
          value={cssProps.borderLeftWidth}
          availableUnits={config.availableUnits}
          availableModes={['value', 'initial', 'inherit', 'calc']}
          handleChange={(value) => onChange('borderLeftWidth', value)}
          onClear={() => onClear('borderLeftWidth')}
        />

        <Collection
          name="radiusMode"
          label="radius mode"
          className="sb-radiusMode"
          value={this.state.radiusMode}
          onItemClick={(value) => this.handleChangeRadiusMode(value)}
        >
          <button className="sb-button" name="one" type="button" value="1">one corner</button>
          <button className="sb-button" name="all" type="button" value="4">all corners</button>
        </Collection>

        <EditBorderRadius
          name={'TopLeft'}
          label="top left"
          cssProps={cssProps}
          onChange={this.handleChangeRadius.bind(this)}
          onClear={onClear}
        />
        <EditBorderRadius
          name={'TopRight'}
          label="top right"
          cssProps={cssProps}
          onChange={this.handleChangeRadius.bind(this)}
          onClear={onClear}
        />
        <EditBorderRadius
          name={'BottomRight'}
          label="bott. right"
          cssProps={cssProps}
          onChange={this.handleChangeRadius.bind(this)}
          onClear={onClear}
        />
        <EditBorderRadius
          name={'BottomLeft'}
          label="bott. left"
          cssProps={cssProps}
          onChange={this.handleChangeRadius.bind(this)}
          onClear={onClear}
        />
      </div>
    );
  }
}

EditBorder.propTypes = {
  cssProps: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default EditBorder;
