import React from 'react';
import Dropdown from './form/Dropdown';
import Spinner from './form/Spinner';
import config from "../config";

const EditMiscellaneous = ({cssProps, onChange, onClear}) => {
  return (
    <div className="sb-editMiscellaneous">
      <Dropdown
        name="sb-display"
        label="display"
        selected={cssProps.display}
        onChange={(value) => onChange('display', value)}
      >
        <span key="inherit" value="inherit">inherit</span>
        <span key="none" value="none">none</span>
        <span key="inline" value="inline">inline</span>
        <span key="block" value="block">block</span>
        <span key="inline-block" value="inline-block">inline-block</span>
        <span key="flex" value="flex">flex</span>
        <span key="inline-flex" value="inline-flex">inline-flex</span>
        <span key="list-item" value="list-item">list-item</span>
        <span key="compact" value="compact">compact</span>
        <span key="run-in" value="run-in">run-in</span>
        <span key="table-header-group" value="table-header-group">table-header-group</span>
        <span key="table-footer-group" value="table-footer-group">table-footer-group</span>
        <span key="table" value="table">table</span>
        <span key="inline-table" value="inline-table">inline-table</span>
        <span key="table-caption" value="table-caption">table-caption</span>
        <span key="table-cell" value="table-cell">table-cell</span>
        <span key="table-row" value="table-row">table-row</span>
        <span key="table-row-group" value="table-row-group">table-row-group</span>
        <span key="table-column" value="table-column">table-column</span>
        <span key="table-column-group" value="table-column-group">table-column-group</span>
      </Dropdown>
      <Dropdown
        name="sb-boxSizing"
        label="box sizing"
        selected={cssProps.boxSizing}
        onChange={(value) => onChange('boxSizing', value)}
      >
        <span key="content-box" value="content-box">content-box</span>
        <span key="border-box" value="border-box">border-box</span>
        <span key="padding-box" value="padding-box">padding-box</span>
        <span key="inherit" value="inherit">inherit</span>
      </Dropdown>
      <Dropdown
        name="sb-overflow"
        label="overflow"
        selected={cssProps.overflow}
        onChange={(value) => onChange('overflow', value)}
      >
        <span key="visible" value="visible">visible</span>
        <span key="hidden" value="hidden">hidden</span>
        <span key="scroll" value="scroll">scroll</span>
        <span key="auto" value="auto">auto</span>
      </Dropdown>
      <Dropdown
        name="sb-float"
        label="float"
        selected={cssProps.float}
        onChange={(value) => onChange('float', value)}
      >
        <span key="none" value="none">none</span>
        <span key="left" value="left">left</span>
        <span key="right" value="right">right</span>
      </Dropdown>
      <Dropdown
        name="sb-clear"
        label="clear"
        selected={cssProps.clear}
        onChange={(value) => onChange('clear', value)}
      >
        <span key="none" value="none">none</span>
        <span key="left" value="left">left</span>
        <span key="right" value="right">right</span>
        <span key="both" value="both">both</span>
      </Dropdown>
      <Spinner
        name="sb-verticalAlign"
        label="v-align"
        value={cssProps.verticalAlign}
        availableUnits={config.availableUnits}
        availableModes={['baseline', 'sub', 'super', 'text-top', 'text-bottom', 'middle', 'top', 'bottom', 'value', 'calc']}
        handleChange={(value) => onChange('verticalAlign', value)}
        onClear={() => onClear('verticalAlign')}
      />
      <Spinner
        name="sb-opacity"
        label="opacity"
        value={cssProps.opacity}
        step={0.1}
        handleChange={(value) => onChange('opacity', value)}
        onClear={() => onClear('opacity')}
      />
      <Dropdown
        name="sb-cursor"
        label="cursor"
        selected={cssProps.cursor}
        onChange={(value) => onChange('cursor', value)}
      >
        <span key="default" value="default">default</span>
        <span key="auto" value="auto">auto</span>
        <span key="crosshair" value="crosshair">crosshair</span>
        <span key="pointer" value="pointer">pointer</span>
        <span key="move" value="move">move</span>
        <span key="e-resize" value="e-resize">e-resize</span>
        <span key="ne-resize" value="ne-resize">ne-resize</span>
        <span key="nw-resize" value="nw-resize">nw-resize</span>
        <span key="n-resize" value="n-resize">n-resize</span>
        <span key="se-resize" value="se-resize">se-resize</span>
        <span key="sw-resize" value="sw-resize">sw-resize</span>
        <span key="s-resize" value="s-resize">s-resize</span>
        <span key="w-resize" value="w-resize">w-resize</span>
        <span key="text" value="text">text</span>
        <span key="wait" value="wait">wait</span>
        <span key="help" value="help">help</span>
        <span key="progress" value="progress">progress</span>
        <span key="copy" value="copy">copy</span>
        <span key="alias" value="alias">alias</span>
        <span key="context-menu" value="context-menu">context-menu</span>
        <span key="cell" value="cell">cell</span>
        <span key="not-allowed" value="not-allowed">not-allowed</span>
        <span key="col-resize" value="col-resize">col-resize</span>
        <span key="row-resize" value="row-resize">row-resize</span>
        <span key="no-drop" value="no-drop">no-drop</span>
        <span key="vertical-text" value="vertical-text">vertical-text</span>
        <span key="all-scroll" value="all-scroll">all-scroll</span>
        <span key="nesw-resize" value="nesw-resize">nesw-resize</span>
        <span key="nwse-resize" value="nwse-resize">nwse-resize</span>
        <span key="ns-resize" value="none">ns-resize</span>
        <span key="ew-resize" value="ew-resize">ew-resize</span>
      </Dropdown>
    </div>
  );
};

EditMiscellaneous.propTypes = {
  cssProps: React.PropTypes.object,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func
};

export default EditMiscellaneous;
