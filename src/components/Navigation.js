import React from 'react';
import TreeView from './TreeView';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tree: this.processTree(props.roles)
    };
  }

  componentWillReceiveProps(props) {
    const tree = this.processTree(props.roles);
    this.setState({tree});
  }

  processTree(roles) {
    let tree = [];

    Object.values(roles).map((component) => {
      const entry = {
        key: component.key,
        label: component.name,
        selector: component.selector,
        count: component.count
      };
      if(component.elements) {
        entry.children = this.processTree(component.elements);
      }
      tree.push(entry);
    });

    return tree;
  }

  handleNavigateParent = () => {
    this.props.onNavigate(this.props.selection.parentElement);
  };

  handleNavigateChildren = () => {
    this.props.onNavigate(this.props.selection.children[0]);
  };

  handleNavigateNextSibling = () => {
    this.props.onNavigate(this.props.selection.nextSibling);
  };

  handleNavigatePreviousSibling = () => {
    this.props.onNavigate(this.props.selection.previousSibling);
  };

  handleNodeClick(selector) {
    const elements = document.querySelectorAll(selector);
    elements[0].scrollIntoView(false);
    this.props.onNavigate(elements[0]);
  }

  manageAvailability(dir) {
    if(this.props.selection) {
      switch(dir) {
        case 'parent':
          return !this.props.selection.parentElement;
        case 'children':
          return !this.props.selection.children[0];
        case 'previous':
          return !this.props.selection.previousSibling;
        case 'next':
          return !this.props.selection.nextSibling;
      }
    }
    return true;
  }

  render() {
    return (
      <div className="sb-navigation">
        <div className="sb-traversing">
          <button className="sb-parent" type="button" onClick={this.handleNavigateParent} disabled={this.manageAvailability('parent')}>parent</button>
          <button className="sb-children" type="button" onClick={this.handleNavigateChildren} disabled={this.manageAvailability('children')}>children</button>
          <button className="sb-previous" type="button" onClick={this.handleNavigatePreviousSibling} disabled={this.manageAvailability('previous')}>previous</button>
          <button className="sb-next" type="button" onClick={this.handleNavigateNextSibling} disabled={this.manageAvailability('next')}>next</button>
        </div>
        <div className="sb-map">
          <TreeView
            source={this.state.tree}
            selection={this.props.descriptor.selector}
            breadcrumbs={this.props.descriptor.breadcrumbs}
            onNodeClick={this.handleNodeClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  roles: React.PropTypes.object,
  descriptor: React.PropTypes.object,
  selection: React.PropTypes.object,
  onNavigate: React.PropTypes.func
};

export default Navigation;
