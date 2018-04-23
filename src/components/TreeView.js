import React from 'react';

class TreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active || null
    };

    this.handleActivate = this.handleActivate.bind(this);
  }

  handleActivate(e, i) {
    e.stopPropagation();
    this.setState({active: i});
  }

  handleClickNode(e, selector) {
    e.stopPropagation();
    if(selector) {
      this.props.onNodeClick(selector);
    }
  }

  render() {
    const breadcrumbs = [...(this.props.breadcrumbs || [])];
    const key = breadcrumbs.shift() || null;

    return (
      <ul className="sb-branch">
        {
          this.props.source.map((item, i) => {
            const active = (key === item.key && breadcrumbs.length !== 0) || this.state.active === i;
            const selector = this.props.parentSelector ? `${this.props.parentSelector} ${item.selector}` : item.selector;
            const selected =  this.props.selection && this.props.selection === selector;
            let className = 'sb-node' + (item.children ? ' hasChildren' : '');
            className += active ? ' sb-active' : '';

            return (
              <li
                key={item.label}
                className={className}
              >
                {item.children &&
                  <span className="sb-trigger" onClick={(e) => this.handleActivate(e, i)}/>
                }
                <span
                  className={'sb-name' + (selected ? ' sb-selected' : '')}
                  onClick={(e) => this.handleClickNode(e, selector)}
                >{item.label}</span>
                {item.count &&
                <span className="sb-count">({item.count})</span>
                }
                {item.children && active &&
                <TreeView
                  source={item.children}
                  parentSelector={selector}
                  selection={this.props.selection}
                  breadcrumbs={breadcrumbs}
                  onNodeClick={this.props.onNodeClick} />
                }
              </li>
            );
          })
        }
      </ul>
    );
  }
}

TreeView.propTypes = {
  source: React.PropTypes.array,
  parentSelector: React.PropTypes.string,
  selection: React.PropTypes.string,
  active: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array
  ]),
  breadcrumbs: React.PropTypes.array,
  handleActivate: React.PropTypes.func,
  onNodeClick: React.PropTypes.func
};

export default TreeView;
