import React from 'react';
import PropTypes from 'prop-types';

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
  transport: PropTypes.string.isRequired,
  handleModelTransport: PropTypes.func.isRequired,
  handleModelExport: PropTypes.func.isRequired,
  handleModelImport: PropTypes.func.isRequired
};

export default Transport;
