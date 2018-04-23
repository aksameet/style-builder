import React from 'react';
import config from '../config.js';
import Spinner from './form/Spinner';

const EditDimensions = ({width, minWidth, maxWidth, height, minHeight, maxHeight,
onChangeWidth, onChangeMinWidth, onChangeMaxWidth, onChangeHeight, onChangeMinHeight, onChangeMaxHeight, onClear}) => {
  return (
    <div className="sb-editDimensions">
      <Spinner
        name="sb-width"
        label="width"
        value={width}
        availableModes={['value', 'auto', 'initial', 'inherit', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={onChangeWidth}
        onClear={() => onClear('width')}
      />
      <Spinner
        name="sb-minWidth"
        label="min width"
        value={minWidth}
        availableModes={['value', 'auto', 'initial', 'inherit', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={onChangeMinWidth}
        onClear={() => onClear('minWidth')}
      />
      <Spinner
        name="sb-maxWidth"
        label="max width"
        value={maxWidth}
        availableModes={['value', 'none', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={onChangeMaxWidth}
        onClear={() => onClear('maxWidth')}
      />
      <Spinner
        name="sb-height"
        label="height"
        value={height}
        availableModes={['value', 'auto', 'initial', 'inherit', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={onChangeHeight}
        onClear={() => onClear('height')}
      />
      <Spinner
        name="sb-minHeight"
        label="min height"
        value={minHeight}
        availableModes={['value', 'auto', 'initial', 'inherit', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={onChangeMinHeight}
        onClear={() => onClear('minHeight')}
      />
      <Spinner
        name="sb-maxHeight"
        label="max height"
        value={maxHeight}
        availableModes={['value', 'none', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={onChangeMaxHeight}
        onClear={() => onClear('maxHeight')}
      />
    </div>
  );
};

EditDimensions.propTypes = {
  width: React.PropTypes.string,
  minWidth: React.PropTypes.string,
  maxWidth: React.PropTypes.string,
  height: React.PropTypes.string,
  minHeight: React.PropTypes.string,
  maxHeight: React.PropTypes.string,
  onChangeWidth: React.PropTypes.func,
  onChangeMinWidth: React.PropTypes.func,
  onChangeMaxWidth: React.PropTypes.func,
  onChangeHeight: React.PropTypes.func,
  onChangeMinHeight: React.PropTypes.func,
  onChangeMaxHeight: React.PropTypes.func,
  onClear: React.PropTypes.func
};

export default EditDimensions;
