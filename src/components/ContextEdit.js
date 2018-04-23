import React from 'react';
import {Manager, Target, Popper} from 'react-popper';

class ContextEdit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleDeactivateCustom);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDeactivateCustom);
  }

  handleActivateCustom = () => {
    this.setState({active: true});
  };

  handleDeactivateCustom = (e) => {
    if(!e.path.includes(this._wrapper)) {
      this.setState({active: false});
    }
  };

  render() {
    const {header, body, footer, onChange} = this.props;

    return (
      <div
        ref={(el) => this._wrapper = el}
        className="contextEdit"
      >
        <Manager className="manager">
          <Target className="target">
            <button
              type="button"
              className="sb-edit"
              onClick={() => this.handleActivateCustom()}
            >edit</button>
          </Target>
          <Popper placement="top" className="popper">
            {this.state.active &&
            <section className="dialog">
              {header && <header className="header">{header}</header>}
              <input
                autoFocus
                type="text"
                className="body"
                defaultValue={body}
                onChange={(e) => onChange(e.target.value)}
              />
              {footer && <footer>{footer}</footer>}
            </section>
            }
          </Popper>
        </Manager>
      </div>
    );
  }
}

ContextEdit.propTypes = {
  header: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  body: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  footer: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  onChange: React.PropTypes.func
};

export default ContextEdit;
