import React from 'react';
import Dropdown from './form/Dropdown';
import Spinner from './form/Spinner';
import config from "../config";

const EditFlexbox = ({cssProps, onChange, onClear}) => {
  return (
    <div className="sb-editFlexbox">
      <Spinner
        name="sb-grow"
        label="grow"
        value={cssProps.flexGrow}
        handleChange={(value) => onChange('flexGrow', value)}
        onClear={() => onClear('flexGrow')}
      />
      <Spinner
        name="sb-shrink"
        label="shrink"
        value={cssProps.flexShrink}
        handleChange={(value) => onChange('flexShrink', value)}
        onClear={() => onClear('flexShrink')}
      />
      <Spinner
        name="sb-basis"
        label="basis"
        value={cssProps.flexBasis}
        availableUnits={config.availableUnits}
        availableModes={['value', 'auto', 'calc']}
        handleChange={(value) => onChange('flexBasis', value)}
        onClear={() => onClear('flexBasis')}
      />
      <Spinner
        name="sb-order"
        label="order"
        value={cssProps.order}
        handleChange={(value) => onChange('order', value)}
        onClear={() => onClear('order')}
      />
      <Dropdown
        name="sb-direction"
        label="direction"
        selected={cssProps.flexDirection}
        onChange={(value) => onChange('flexDirection', value)}
      >
        <span key="row" value="row">row</span>
        <span key="row-reverse" value="row-reverse">row-reverse</span>
        <span key="column" value="column">column</span>
        <span key="column-reverse" value="column-reverse">column-reverse</span>
      </Dropdown>
      <Dropdown
        name="sb-wrap"
        label="wrap"
        selected={cssProps.flexWrap}
        onChange={(value) => onChange('flexWrap', value)}
      >
        <span key="nowrap" value="nowrap">nowrap</span>
        <span key="wrap" value="wrap">wrap</span>
        <span key="wrap-reverse" value="wrap-reverse">wrap-reverse</span>
      </Dropdown>
      <Dropdown
        name="sb-justifyContent"
        label="justify content"
        selected={cssProps.justifyContent}
        onChange={(value) => onChange('justifyContent', value)}
      >
        <span key="normal" value="normal">normal</span>
        <span key="flex-start" value="flex-start">flex-start</span>
        <span key="flex-end" value="flex-end">flex-end</span>
        <span key="center" value="center">center</span>
        <span key="space-between" value="space-between">space-between</span>
        <span key="space-around" value="space-around">space-around</span>
      </Dropdown>
      <Dropdown
        name="sb-alignItems"
        label="align items"
        selected={cssProps.alignItems}
        onChange={(value) => onChange('alignItems', value)}
      >
        <span key="normal" value="normal">normal</span>
        <span key="stretch" value="stretch">stretch</span>
        <span key="flex-start" value="flex-start">flex-start</span>
        <span key="flex-end" value="flex-end">flex-end</span>
        <span key="center" value="center">center</span>
        <span key="baseline" value="baseline">baseline</span>
      </Dropdown>
      <Dropdown
        name="sb-alignContent"
        label="align content"
        selected={cssProps.alignContent}
        onChange={(value) => onChange('alignContent', value)}
      >
        <span key="normal" value="normal">normal</span>
        <span key="stretch" value="stretch">stretch</span>
        <span key="flex-start" value="flex-start">flex-start</span>
        <span key="flex-end" value="flex-end">flex-end</span>
        <span key="center" value="center">center</span>
        <span key="space-between" value="space-between">space-between</span>
        <span key="space-around" value="space-around">space-around</span>
      </Dropdown>
      <Dropdown
        name="sb-alignSelf"
        label="align self"
        selected={cssProps.alignSelf}
        onChange={(value) => onChange('alignSelf', value)}
      >
        <span key="center" value="center">center</span>
        <span key="flex-start" value="flex-start">flex-start</span>
        <span key="flex-end" value="flex-end">flex-end</span>
        <span key="baseline" value="baseline">baseline</span>
        <span key="stretch" value="stretch">stretch</span>
      </Dropdown>
    </div>
  );
};

EditFlexbox.propTypes = {
  cssProps: React.PropTypes.object,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func
};

export default EditFlexbox;
