import React from 'react';
import Fieldset from './Fieldset';
import PropTypes from 'prop-types';

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  handleItemClick = (e, value) => {
    e.stopPropagation();
    this.setState({value: e.target.value});
    this.props.onItemClick(value);
  };

  render() {
    const {name, label, className, children} = this.props;

    return (
      <Fieldset name={name} legend={label} className={className}>
        {
          children.map((child) => {
            return (
              <div
                key={child.props.name}
                className={child.props.name + (this.state.value === child.props.value ? ' active' : '')}
                onClick={(e) => this.handleItemClick(e, child.props.value)}>
                {child}
              </div>
            );
          })
        }
      </Fieldset>
    );
  }
}

Collection.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default Collection;
