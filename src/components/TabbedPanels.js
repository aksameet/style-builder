import React from 'react';

class TabbedPanels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: this.props.activeIndex
    };

    this.handleActivateTab = (i) => {
      this.setState({activeIndex: i});
    };
  }

  render() {
    const { name, tabs=[] } = this.props;

    return (
      <div className={name}>
        <ul className="sb-tabs">
          {
            tabs.map((tab, i) => {
              return (
                <li
                  key={i}
                  className={(tab.name || 'sb-tab') + (tab.disabled ? ' sb-disabled' : '') + (!tab.disabled && this.state.activeIndex === i ? ' sb-active' : '')}
                  onClick={() => !tab.disabled && this.handleActivateTab(i)}
                >{tab.content}</li>
              );
            })
          }
        </ul>
        <div className="sb-contents">{ this.props.children[this.state.activeIndex] }</div>
      </div>
    );
  }
}

TabbedPanels.propTypes = {
  activeIndex: React.PropTypes.number,
  name: React.PropTypes.string,
  tabs: React.PropTypes.array,
  children: React.PropTypes.array
};

export default TabbedPanels;
