import React from 'react';
import Collection from './form/Collection';
import Textfield from './form/Textfield';

const EditPseudoelement = ({type, content='', onChangeType, onChangeContent, onClearContent}) => {
  return (
    <div className="sb-editPseudoelement">
      <Collection
        name="options"
        label="pseudoelement"
        className="sb-options"
        value={type}
        onItemClick={onChangeType}
      >
        <button className="sb-button" name="none" type="button" value="">none</button>
        <button className="sb-button" name="before" type="button" value="::before">before</button>
        <button className="sb-button" name="after" type="button" value="::after">after</button>
        <button className="sb-button" name="first-letter" type="button" value="::first-letter">first-letter</button>
      </Collection>
      <Textfield
        name="sb-content"
        label="content"
        value={content.slice(1, -1)}
        onChange={onChangeContent}
        onClear={onClearContent}
      />
    </div>
  );
};

EditPseudoelement.propTypes = {
  type: React.PropTypes.string,
  content: React.PropTypes.string,
  onChangeType: React.PropTypes.func,
  onChangeContent: React.PropTypes.func,
  onClearContent: React.PropTypes.func
};

export default EditPseudoelement;
