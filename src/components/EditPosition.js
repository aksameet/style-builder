import React from 'react';
import config from '../config.js';
import Dropdown from './form/Dropdown';
import Spinner from './form/Spinner';

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
  type: React.PropTypes.string,
  distance: React.PropTypes.object,
  zIndex: React.PropTypes.string,
  onChangeType: React.PropTypes.func,
  onChangeDistance: React.PropTypes.func,
  onClearDistance: React.PropTypes.func,
  onChangeZIndex: React.PropTypes.func,
  onClearZIndex: React.PropTypes.func
};

export default EditPosition;
