import React from 'react';
import config from '../config.js';
import Spinner from './form/Spinner';
import PropTypes from 'prop-types';

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
  width: PropTypes.string.isRequired,
  minWidth: PropTypes.string.isRequired,
  maxWidth: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  minHeight: PropTypes.string.isRequired,
  maxHeight: PropTypes.string.isRequired,
  onChangeWidth: PropTypes.func.isRequired,
  onChangeMinWidth: PropTypes.func.isRequired,
  onChangeMaxWidth: PropTypes.func.isRequired,
  onChangeHeight: PropTypes.func.isRequired,
  onChangeMinHeight: PropTypes.func.isRequired,
  onChangeMaxHeight: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default EditDimensions;
