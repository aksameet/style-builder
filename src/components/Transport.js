import React from 'react';

const Transport = ({transport, handleModelTransport, handleModelExport, handleModelImport}) => {
  return (
    <div className="sb-transport">
      <div className="sb-controls">
        <button
          className="sb-export"
          type="button"
          onClick={handleModelExport}
        >
          EXPORT
        </button>
        <button
          className="sb-import"
          type="button"
          onClick={handleModelImport}
        >
          IMPORT
        </button>
      </div>
      <textarea
        className="sb-data"
        value={transport}
        onChange={(e) => handleModelTransport(e.target.value)}
      />
    </div>
  );
};

Transport.propTypes = {
  transport: React.PropTypes.string,
  handleModelTransport: React.PropTypes.func,
  handleModelExport: React.PropTypes.func,
  handleModelImport: React.PropTypes.func
};

export default Transport;
