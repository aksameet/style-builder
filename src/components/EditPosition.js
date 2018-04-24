import React from 'react';
import config from '../config.js';
import Dropdown from './form/Dropdown';
import Spinner from './form/Spinner';
import PropTypes from 'prop-types';

const EditPosition = ({type, distance, zIndex, onChangeType, onChangeDistance,
                        onClearDistance, onChangeZIndex, onClearZIndex}) => {

  return (
    <div className="sb-editPosition">
      <Dropdown
        name="sb-position"
        label="position"
        selected={type}
        onChange={onChangeType}
      >
        <span key="static" value="static">static</span>
        <span key="relative" value="relative">relative</span>
        <span key="absolute" value="absolute">absolute</span>
        <span key="fixed" value="fixed">fixed</span>
      </Dropdown>
      <Spinner
        name="sb-z-index"
        label="z-index"
        value={zIndex}
        availableModes={['value', 'auto', 'initial', 'inherit']}
        handleChange={onChangeZIndex}
        onClear={onClearZIndex}
      />
      <Spinner
        name="sb-top"
        label="top"
        value={distance.top}
        availableModes={['value', 'auto', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={(value) => onChangeDistance(value, 'top')}
        onClear={() => onClearDistance('top')}
      />
      <Spinner
        name="sb-right"
        label="right"
        value={distance.right}
        availableModes={['value', 'auto', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={(value) => onChangeDistance(value, 'right')}
        onClear={() => onClearDistance('right')}
      />
      <Spinner
        name="sb-bottom"
        label="bottom"
        value={distance.bottom}
        availableModes={['value', 'auto', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={(value) => onChangeDistance(value, 'bottom')}
        onClear={() => onClearDistance('bottom')}
      />
      <Spinner
        name="sb-left"
        label="left"
        value={distance.left}
        availableModes={['value', 'auto', 'calc']}
        availableUnits={config.availableUnits}
        handleChange={(value) => onChangeDistance(value, 'left')}
        onClear={() => onClearDistance('left')}
      />
    </div>
  );
};

EditPosition.propTypes = {
  type: PropTypes.string.isRequired,
  distance: PropTypes.object.isRequired,
  zIndex: PropTypes.string.isRequired,
  onChangeType: PropTypes.func.isRequired,
  onChangeDistance: PropTypes.func.isRequired,
  onClearDistance: PropTypes.func.isRequired,
  onChangeZIndex: PropTypes.func.isRequired,
  onClearZIndex: PropTypes.func.isRequired
};

export default EditPosition;
