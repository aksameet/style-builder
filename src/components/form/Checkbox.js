import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChange = (value) => {
      this.setState({value});
      props.onChange(value);
    };
  }

  render() {
    const { name, label, checked } = this.props;

    return (
      <div className={name}>
        <input
          className="sb-checkbox"
          type="checkbox"
          value={this.state.value}
          onChange={(e) => this.handleChange(e.target.checked)}
          checked={checked}
        />
        {label && <label className="sb-label">{label}</label>}
      </div>
    );
  }
}

Checkbox.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

export default Checkbox;
