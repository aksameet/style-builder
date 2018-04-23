import React from 'react';
import config from '../config.js';
import Dropdown from './form/Dropdown';
import Spinner from './form/Spinner';
import Colorpicker from './Colorpicker';

const EditFont = ({availableFonts, cssProps, onChange, onClear}) => {

  return (
    <div className="sb-editFont">
      <Colorpicker
        color={cssProps.color}
        onSelectColor={(value) => onChange('color', value)}
      />
      <Spinner
        name="sb-indent"
        label="indent"
        value={cssProps.textIndent}
        availableUnits={config.availableUnits}
        availableModes={['value', 'calc']}
        handleChange={(value) => onChange('textIndent', value)}
        onClear={() => onClear('textIndent')}
      />
      <Spinner
        name="sb-size"
        label="size"
        value={cssProps.fontSize}
        availableUnits={config.availableUnits}
        availableModes={['value', 'calc']}
        handleChange={(value) => onChange('fontSize', value)}
        onClear={() => onClear('fontSize')}
      />
      <Spinner
        name="sb-line"
        label="line height"
        value={cssProps.lineHeight}
        availableUnits={config.availableUnits}
        availableModes={['value', 'calc']}
        handleChange={(value) => onChange('lineHeight', value)}
        onClear={() => onClear('lineHeight')}
      />
      <Dropdown
        name="sb-align"
        label="align"
        selected={cssProps.textAlign}
        onChange={(value) => onChange('textAlign', value)}
      >
        <span key="left" value="left">left</span>
        <span key="center" value="center">center</span>
        <span key="right" value="right">right</span>
        <span key="justify" value="justify">justify</span>
        <span key="start" value="start">start</span>
      </Dropdown>
      <Dropdown
        name="sb-family"
        label="family"
        selected={cssProps.fontFamily}
        onChange={(value) => onChange('fontFamily', value)}
      >
        {
          availableFonts.map((font) => {
            return (<span key={font.name} value={`"${font.value}"`}>{font.value}</span>);
          })
        }
      </Dropdown>
      <Dropdown
        name="sb-style"
        label="style"
        selected={cssProps.fontStyle}
        onChange={(value) => onChange('fontStyle', value)}
      >
        <span key="normal" value="normal">normal</span>
        <span key="italic" value="italic">italic</span>
        <span key="inherit" value="inherit">inherit</span>
        <span key="initial" value="initial">initial</span>
      </Dropdown>
      <Dropdown
        name="sb-weight"
        label="weight"
        selected={cssProps.weight}
        onChange={(value) => onChange('fontWeight', value)}
      >
        <span key="normal" value="normal">normal</span>
        <span key="bold" value="bold">bold</span>
        <span key="inherit" value="inherit">inherit</span>
        <span key="initial" value="initial">initial</span>
      </Dropdown>
      <Dropdown
        name="sb-decoration"
        label="decoration"
        selected={cssProps.textDecoration}
        onChange={(value) => onChange('textDecoration', value)}
      >
        <span key="none" value="none">none</span>
        <span key="underline" value="underline">underline</span>
        <span key="overline" value="overline">overline</span>
        <span key="line-through" value="line-through">line-through</span>
        <span key="inherit" value="inherit">inherit</span>
        <span key="initial" value="initial">initial</span>
      </Dropdown>
    </div>
  );
};

EditFont.propTypes = {
  availableFonts: React.PropTypes.array,
  cssProps: React.PropTypes.object,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func
};

export default EditFont;
