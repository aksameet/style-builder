import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    this.manageSelection = (selected) => {
      let selectedOption = (<span>--</span>);
      if(selected !== undefined) {
        selectedOption = this.props.children.find((child) => {
          return child.props.value === selected;
        });
        if(!selectedOption) {
          console.warn(`no value "${selected}" for label "${this.props.label}"`);
          return [(<span key="unknown">?</span>)];
        }
      }
      return [
        selectedOption,
        ...this.props.children.filter((child) => {
          return child.props.value !== selected;
        })
      ];
    };

    this.state = {
      active: false,
      selected: this.props.selected,
      items: this.manageSelection(this.props.selected)
    };

    this.handleActivate = (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.deactivate();
    };

    this.handleItemClick = (value) => {
      this.setState({items: this.manageSelection(value)});
      if(this.state.active) {
        this.deactivate();
      } else {
        this.activate();
      }
      this.state.active && props.onChange(value);
    };

    this.handleBlur = () => {
      this.deactivate();
    };

    this.activate = () => {
      this.setState({active: true});
    };

    this.deactivate = () => {
      this.setState({active: false});
    };
  }

  componentWillReceiveProps(props) {
    this.setState({items: this.manageSelection(props.selected)});
  }

  render() {
    const { name, label } = this.props;

    return (
      <div
        className={name + (this.state.active ? ' sb-active' : '')}
        onFocus={this.handleActivate}
        onBlur={this.handleBlur}
        tabIndex="0"
      >
        <span className="sb-label">{label}</span>
        <ul className="sb-options">
          {this.state.items.map((item, i) => {
            return i === 0 || this.state.active ? (
              <li
                key={item.key}
                className="sb-option"
                onClick={() => this.handleItemClick(item.props.value)}
              >
                {item}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  selected: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  children: React.PropTypes.array,
  onChange: React.PropTypes.func
};

export default Dropdown;
