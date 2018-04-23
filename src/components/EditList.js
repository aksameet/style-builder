import React from 'react';
import Textfield from './form/Textfield';
import Dropdown from './form/Dropdown';

const EditList = ({type, image='', position, onChange, onClear}) => {
  return (
    <div className="sb-editList">
      <Textfield
        label="image"
        name="sb-image"
        value={image.slice(5, -2)}
        onChange={(value) => {onChange('listStyleImage', `url("${value}")`);}}
        onClear={() => onClear('listStyleImage')}
      />
      <Dropdown
        name="sb-type"
        label="type"
        selected={type}
        onChange={(value) => onChange('listStyleType', value)}
      >
        <span key="disc" value="disc">disc</span>
        <span key="circle" value="circle">circle</span>
        <span key="square" value="square">square</span>
        <span key="decimal" value="decimal">decimal</span>
        <span key="lower-roman" value="lower-roman">lower-roman</span>
        <span key="upper-roman" value="upper-roman">upper-roman</span>
        <span key="lower-alpha" value="lower-alpha">lower-alpha</span>
        <span key="upper-alpha" value="upper-alpha">upper-alpha</span>
        <span key="none" value="none">none</span>
        <span key="inherit" value="inherit">inherit</span>
        <span key="initial" value="initial">initial</span>
      </Dropdown>
      <Dropdown
        name="sb-position"
        label="position"
        selected={position}
        onChange={(value) => onChange('listStylePosition', value)}
      >
        <span key="inside" value="inside">inside</span>
        <span key="outside" value="outside">outside</span>
        <span key="inherit" value="inherit">inherit</span>
        <span key="initial" value="initial">initial</span>
      </Dropdown>
    </div>
  );
};

EditList.propTypes = {
  type: React.PropTypes.string,
  image: React.PropTypes.string,
  position: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func
};

export default EditList;
