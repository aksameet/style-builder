import React from 'react';
import {SketchPicker} from 'react-color';
import {Manager, Target, Popper} from 'react-popper';

class Colorpicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.parseColor(this.props.color),
      active: false
    };

    this.handleActivatePicker = () => {
      this.setState({active: true});
    };

    this.handleDeactivatePicker = (e) => {
      if(!e.path.includes(this._wrapper)) {
        this.setState({active: false});
      }
    };

    this.handleChangeColorComplete = (color) => {
      const newColor = {
        r: color.rgb.r,
        g: color.rgb.g,
        b: color.rgb.b,
        a: color.rgb.a > 0 ? color.rgb.a : 1
      };
      this.setState({color: newColor});
      props.onSelectColor(this.getCssColor());
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleDeactivatePicker);
  }

  componentWillReceiveProps(props) {
    this.setState({color: this.parseColor(props.color)});
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDeactivatePicker);
  }

  parseColor(color = 'rgb(0, 0, 0, 0)') {
    const colorChunks = color.split('(')[1].split(')')[0].split(',');
    const parsedColor = {
      r: parseInt(colorChunks[0], 10),
      g: parseInt(colorChunks[1], 10),
      b: parseInt(colorChunks[2], 10),
      a: parseFloat(colorChunks[3])
    };

    return parsedColor;
  }

  getCssColor() {
    return `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
  }

  render() {
    return (
      <div ref={(el) => this._wrapper = el} className="sb-colorpicker">
        <Manager className="sb-manager">
          <label className="sb-label" htmlFor="background.color.trigger">color</label>
          <Target
            id="background.color.trigger"
            className="sb-trigger"
          >
            <div
              className="sb-swatch"
              style={{backgroundColor: this.getCssColor()}}
              onClick={this.handleActivatePicker}
            >color
            </div>
          </Target>
          <Popper placement="bottom" className="sb-picker">
            {this.state.active &&
            <SketchPicker color={this.state.color} onChangeComplete={this.handleChangeColorComplete}/>
            }
          </Popper>
        </Manager>
      </div>
    );
  }
}

Colorpicker.propTypes = {
  color: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  onSelectColor: React.PropTypes.func
};

export default Colorpicker;
