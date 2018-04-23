import React from 'react';
import {connect} from 'react-redux';
import Draggable from 'react-draggable';
import config from '../config';

import Collection from './form/Collection';
import Dropdown from './form/Dropdown';
import EditPseudoelement from './EditPseudoelement';
import EditBlockDimensions from './EditBlockDimensions';
import EditDimensions from './EditDimensions';
import EditFlexbox from './EditFlexbox';
import EditPosition from './EditPosition';
import EditFont from './EditFont';
import EditList from './EditList';
import EditBackground from './EditBackground';
import EditBorder from './EditBorder';
import EditBoxShadow from './EditBoxShadow';
import EditTextShadow from './EditTextShadow';
import EditMiscellaneous from './EditMiscellaneous';
import TabbedPanels from './TabbedPanels';
import Transport from './Transport';
import Navigation from './Navigation';
import * as AppActions from '../actions/app.actions';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: true,
      selection: null
    };
  }

  componentWillMount() {
    const localStorageCssModel = JSON.parse(localStorage.getItem('cssRules') || '{}');
    const styleNode = document.createElement('style');

    styleNode.type = 'text/css';
    styleNode.appendChild(document.createTextNode(''));
    document.head.appendChild(styleNode);
    this.stylesheet = styleNode.sheet;

    config.availableDevices.forEach((family, i) => {
      const mediaRule = `@media ${family.media} {}`;
      this.stylesheet.insertRule(mediaRule, i);
    });

    this.props.fetchRoleNames();
    this.props.getCssModel(localStorageCssModel);

    document.body.addEventListener('click', this.handleBodyClick.bind(this));
  }

  componentWillUpdate(props) {
    localStorage.setItem('cssRules', JSON.stringify(props.cssRules));

    config.availableDevices.forEach((family, i) => {
      Object.keys(props.cssRules[family.name]).forEach((elementSelector) => {
        const elementRule = props.cssRules[family.name][elementSelector];
        this.updateCssRule(i, elementRule.cssRuleIndex, elementSelector, elementRule.props);
      });
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick.bind(this));
  }

  updateCssRule(cssMediaRuleIndex, cssElementRuleIndex, elementSelector, cssProps) {
    let cssRule = this.getCssRule(cssMediaRuleIndex, cssElementRuleIndex, elementSelector);

    Object.keys(cssProps).forEach((cssProp) => {
      cssRule.style[cssProp] = cssProps[cssProp];
    });
  }

  getCssRule(cssMediaRuleIndex, cssElementRuleIndex, elementSelector) {
    const deviceMediaQueryRule = this.stylesheet.cssRules[cssMediaRuleIndex];
    let cssRule = deviceMediaQueryRule.cssRules[cssElementRuleIndex];

    if(!cssRule) {
      deviceMediaQueryRule.insertRule(`${elementSelector} {}`, cssElementRuleIndex);
      cssRule = deviceMediaQueryRule.cssRules[cssElementRuleIndex];
    }
    return cssRule;
  }

  editStyle(cssProps) {
    const descriptor = this.props.descriptor;
    const deviceRule = this.props.cssRules[descriptor.device.family];
    const elementRule = deviceRule[descriptor.fullSelector];
    let cssElementRuleIndex = elementRule ? elementRule.cssRuleIndex : Object.keys(deviceRule).length;

    this.props.onEditStyle(cssProps, cssElementRuleIndex);
    this.updateCssRule(descriptor.device.cssMediaIndex, cssElementRuleIndex, descriptor.fullSelector, cssProps);
  }

  removeStyle(propName) {
    const descriptor = this.props.descriptor;
    const elementRule = this.props.cssRules[descriptor.device.family][descriptor.fullSelector];
    let cssRule = this.getCssRule(descriptor.device.cssMediaIndex, elementRule.cssRuleIndex, descriptor.fullSelector);

    this.props.handleRemoveStyle(propName);
    cssRule.style[propName] = '';
  }

  displaySelection(element, elementIsValid) {
    if(this.state.selection) {
      this.state.selection.removeAttribute('style');
    }
    element.style.outline = '2px dashed' + (elementIsValid ? '#34af23' : '#ff0033');
    this.setState({selection: element});
  }

  selectElement(element) {
    const elementProps = window.elements.get(element) || false;
    const elementStyling = this.props.cssRules[this.props.descriptor.device.family][elementProps.selector];

    this.props.updateDescriptor({selector: elementProps.selector, breadcrumbs: elementProps.descriptor});
    this.displaySelection(element, elementProps.selector);
    this.props.onSelectElement(elementStyling);
  }

  handleBodyClick(e) {
    e.preventDefault();
    const canEdit = !e.path.includes(document.getElementById('app'));
    if(canEdit) {
      this.selectElement(e.target);
    }
  }

  saveCss(props) {
    let css = '';
    const modelCssRules = JSON.stringify(props.cssRules);
    const styleCssRules = this.stylesheet.rules;

    for(let i=0; i < styleCssRules.length; i++) {
      const cssRule = styleCssRules[i];
      const currentMediaText = cssRule.media.mediaText;

      cssRule.media.mediaText = config.availableDevices[i].media;
      css += cssRule.cssText + '\n';
      cssRule.media.mediaText = currentMediaText;
    }

    this.props.onSave(css, modelCssRules);
  }

  clearCss() {
    config.availableDevices.forEach((device, d) => {
      const deviceCssRules = this.stylesheet.cssRules[d];
      const deviceCssRulesLength = deviceCssRules.cssRules.length;
      for(let r=0; r < deviceCssRulesLength; r++) {
        deviceCssRules.deleteRule(0);
      }
    });
  }

  clearStyling() {
    localStorage.clear();
    this.props.resetCssRules();
    this.clearCss();
  }

  toggleVisibility() {
    this.setState({active: !this.state.active});
  }

  setDeviceViewport(device, mediaIndex) {
    for(let i=1; i <= 3; i++ ) {
      this.stylesheet.cssRules[i].media.mediaText = config.availableDevices[i].media;
    }
    if(mediaIndex !== 0) {
      this.stylesheet.cssRules[mediaIndex].media.mediaText = '(min-width: 0)';
    }
    document.body.parentNode.dataset.device = device;
  }

  render() {
    const deviceRules = this.props.cssRules[this.props.descriptor.device.family];
    const elementRules = deviceRules[this.props.descriptor.fullSelector];
    const cssProps = (elementRules && elementRules.props) || {};

    return (
      <div>
        <div className="sb-infobox">
          <div className="sb-selector">
            <Dropdown
              name="sb-bodySwitch"
              label="body switch"
              selected={this.props.descriptor.document}
              onChange={(value) => this.props.updateDescriptor({document: value})}
            >
              {
                this.props.bodySwitches.map((bodySwitch) =>
                  <span key={bodySwitch.name} value={bodySwitch.value}>{bodySwitch.name}</span>)
              }
            </Dropdown>
            <h1 className="sb-role">{this.props.descriptor.fullSelector || '[select proper element]'}</h1>
          </div>
          <div className={`sb-status sb-${this.props.status.code}`}>{this.props.status.text}</div>
        </div>
      <Draggable bounds="body" handle=".sb-header">
      <section className={'sb-editComponent' + (this.state.active ? ' sb-active' : '')}>
        <header className="sb-header">
          <div className="sb-controls">
            <button
              className="sb-clear"
              type="button"
              onClick={() => window.confirm('Do you really want to clear whole styling?') && this.clearStyling()}
            >CLEAR</button>
            <button className="sb-rescan" type="button" onClick={this.props.fetchRoleNames}>RESCAN</button>
            <button className="sb-save" type="button" title="save styling" onClick={()=>this.saveCss(this.props)}>SAVE</button>
            <button className="sb-visibility" type="button" onClick={() => this.toggleVisibility()}/>
          </div>
        </header>
        <div className="sb-content">
            <TabbedPanels
              name="sb-actions"
              tabs={[
                {content: 'style', name: 'sb-style', disabled: !this.state.selection},
                {content: 'navigate', name: 'sb-navigate'},
                {content: 'transport', name: 'sb-transport'}
              ]}
              activeIndex={1}
            >
              <div>
                <div className="sb-common">
                  <div className="sb-editDevice">
                    <Dropdown
                      name="sb-device"
                      label="device"
                      selected={this.props.descriptor.device.cssMediaIndex}
                      onChange={
                        (value) => {
                          this.props.deviceChange(config.availableDevices[value].name, value);
                          this.setDeviceViewport(config.availableDevices[value].name, value);
                        }
                      }
                    >
                      {
                        config.availableDevices.map((family, i) => {
                          return (<span key={family.name} value={i}>{family.name}</span>);
                        })
                      }
                    </Dropdown>
                    <Dropdown
                      name="sb-state"
                      label="state"
                      selected={this.props.descriptor.state}
                      onChange={(value) => this.props.updateDescriptor({state: value})}
                    >
                      <span key="default" value="">default</span>
                      <span key=":hover" value=":hover">:hover</span>
                      <span key=":focus" value=":focus">:focus</span>
                      <span key=":visited" value=":visited">:visited</span>
                      <span key=":active" value=":active">:active</span>
                      <span key=".active" value=".active">.active</span>
                      <span key=".asc" value=".asc">.asc</span>
                      <span key=".desc" value=".desc">.desc</span>
                      <span key=".arrow-up" value=".arrow-up">.arrow-up</span>
                      <span key=".arrow-down" value=".arrow-down">.arrow-down</span>
                    </Dropdown>
                  </div>
                  <Collection
                    name="pseudoclass"
                    label="pseudoclass"
                    className="sb-pseudoclass"
                    value={this.props.descriptor.pseudoclass}
                    onItemClick={(value) => this.props.updateDescriptor({pseudoclass: value})}
                  >
                    <button className="sb-button" name="none" type="button" value="">none</button>
                    <button className="sb-button" name="first-child" type="button" value=":first-child">first-child</button>
                    <button className="sb-button" name="last-child" type="button" value=":last-child">last-child</button>
                  </Collection>
                  <EditPseudoelement
                    type={this.props.descriptor.pseudoelement}
                    content={cssProps['content']}
                    onChangeType={(value) => this.props.updateDescriptor({pseudoelement: value})}
                    onChangeContent={(value) => this.editStyle({content: `'${value}'`})}
                    onClearContent={() => this.removeStyle('content')}
                  />
                </div>
                <TabbedPanels
                  name="sb-editables"
                  tabs={[
                    {content: 'layout', name: 'sb-layout'},
                    {content: 'miscellaneous', name: 'sb-miscellaneous'},
                    {content: 'flexbox', name: 'sb-flexbox'},
                    {content: 'position', name: 'sb-position'},
                    {content: 'font', name: 'sb-font'},
                    {content: 'list', name: 'sb-list'},
                    {content: 'border', name: 'sb-border'},
                    {content: 'background', name: 'sb-background'},
                    {content: 'box shadow', name: 'sb-boxshadow'},
                    {content: 'text shadow', name: 'sb-textshadow'}
                  ]}
                >
                  <div className="sb-editLayout">
                    <div className="sb-blockDimensions">
                      <EditBlockDimensions
                        name="sb-margin"
                        top={{name: 'marginTop', value: cssProps['marginTop'], modes: ['auto', 'value', 'initial', 'inherit', 'calc']}}
                        left={{name: 'marginLeft', value: cssProps['marginLeft'], modes: ['auto', 'value', 'initial', 'inherit', 'calc']}}
                        right={{name: 'marginRight', value: cssProps['marginRight'], modes: ['auto', 'value', 'initial', 'inherit', 'calc']}}
                        bottom={{name: 'marginBottom', value: cssProps['marginBottom'], modes: ['auto', 'value', 'initial', 'inherit', 'calc']}}
                        onChange={(props) => this.editStyle(props)}
                        onClear={(prop) => this.removeStyle(prop)}
                      />
                      <EditBlockDimensions
                        name="sb-padding"
                        top={{name: 'paddingTop', value: cssProps['paddingTop'], modes: ['value', 'initial', 'inherit', 'calc']}}
                        left={{name: 'paddingLeft', value: cssProps['paddingLeft'], modes: ['value', 'initial', 'inherit', 'calc']}}
                        right={{name: 'paddingRight', value: cssProps['paddingRight'], modes: ['value', 'initial', 'inherit', 'calc']}}
                        bottom={{name: 'paddingBottom', value: cssProps['paddingBottom'], modes: ['value', 'initial', 'inherit', 'calc']}}
                        onChange={(props) => this.editStyle(props)}
                        onClear={(prop) => this.removeStyle(prop)}
                      />
                    </div>
                    <EditDimensions
                      width={cssProps['width']}
                      minWidth={cssProps['minWidth']}
                      maxWidth={cssProps['maxWidth']}
                      height={cssProps['height']}
                      minHeight={cssProps['minHeight']}
                      maxHeight={cssProps['maxHeight']}
                      onChangeWidth={(value) => this.editStyle({width: value})}
                      onChangeMinWidth={(value) => this.editStyle({minWidth: value})}
                      onChangeMaxWidth={(value) => this.editStyle({maxWidth: value})}
                      onChangeHeight={(value) => this.editStyle({height: value})}
                      onChangeMinHeight={(value) => this.editStyle({minHeight: value})}
                      onChangeMaxHeight={(value) => this.editStyle({maxHeight: value})}
                      onClear={(prop) => this.removeStyle(prop)}
                    />
                  </div>
                  <EditMiscellaneous
                    cssProps={cssProps}
                    onChange={(propName, value) => this.editStyle({[propName]: value})}
                    onClear={(prop) => this.removeStyle(prop)}
                  />
                  <EditFlexbox
                    cssProps={cssProps}
                    onChange={(propName, value) => this.editStyle({[propName]: value})}
                    onClear={(prop) => this.removeStyle(prop)}
                  />
                  <EditPosition
                    type={cssProps['position']}
                    distance={{top: cssProps['top'], right: cssProps['right'], bottom: cssProps['bottom'], left: cssProps['left']}}
                    zIndex={cssProps['zIndex']}
                    onChangeType={(value) => this.editStyle({'position': value})}
                    onChangeDistance={(value, direction) => this.editStyle({[direction]: value})}
                    onClearDistance={(direction) => this.removeStyle(direction)}
                    onChangeZIndex={(value) => this.editStyle({'zIndex': value})}
                    onClearZIndex={() => this.removeStyle('zIndex')}
                  />
                  <EditFont
                    availableFonts={[...this.props.googleFonts, ...this.props.typekitFonts, ...this.props.defaultFonts]}
                    cssProps={cssProps}
                    onChange={(propName, value) => this.editStyle({[propName]: value})}
                    onClear={(prop) => this.removeStyle(prop)}
                  />
                  <EditList
                    type={cssProps['listStyleType']}
                    image={cssProps['listStyleImage']}
                    position={cssProps['listStylePosition']}
                    onChange={(prop, value) => this.editStyle({[prop]: value})}
                    onClear={(prop) => this.removeStyle(prop)}
                  />
                  <EditBorder
                    cssProps={cssProps}
                    onChange={(prop, value) => this.editStyle({[prop]: value})}
                    onClear={(prop) => this.removeStyle(prop)}
                  />
                  <EditBackground
                    cssProps={cssProps}
                    onChange={(prop, value) => this.editStyle({[prop]: value})}
                    onClear={(prop) => this.removeStyle(prop)}
                  />
                  <EditBoxShadow
                    value={cssProps['boxShadow']}
                    onChange={(value) => this.editStyle({boxShadow: value})}
                    onClear={() => this.removeStyle('boxShadow')}
                  />
                  <EditTextShadow
                    value={cssProps['textShadow']}
                    onChange={(value) => this.editStyle({textShadow: value})}
                    onClear={() => this.removeStyle('textShadow')}
                  />
                </TabbedPanels>
              </div>
              <Navigation
                selection={this.state.selection}
                roles={this.props.roles}
                descriptor={this.props.descriptor}
                onNavigate={this.selectElement.bind(this)}
              />
              <Transport
                transport={this.props.transport}
                handleModelTransport={this.props.handleModelTransport}
                handleModelImport={this.props.handleModelImport}
                handleModelExport={this.props.handleModelExport}
              />
          </TabbedPanels>
          </div>
      </section>
      </Draggable>
      </div>
    );
  }
}

App.propTypes = {
  transport: React.PropTypes.string,
  status: React.PropTypes.object,
  cssRules: React.PropTypes.object,
  descriptor: React.PropTypes.object,
  roles: React.PropTypes.object,
  defaultFonts: React.PropTypes.array,
  googleFonts: React.PropTypes.array,
  typekitFonts: React.PropTypes.array,
  bodySwitches: React.PropTypes.array,
  selectionStyling: React.PropTypes.object,
  deviceChange: React.PropTypes.func,
  onSelectElement: React.PropTypes.func,
  onEditStyle: React.PropTypes.func,
  updateDescriptor: React.PropTypes.func,
  getCssModel: React.PropTypes.func,
  setCssRules: React.PropTypes.func,
  resetCssRules: React.PropTypes.func,
  fetchRoleNames: React.PropTypes.func,
  onSave: React.PropTypes.func,
  handleModelTransport: React.PropTypes.func,
  handleModelImport: React.PropTypes.func,
  handleModelExport: React.PropTypes.func,
  handleRemoveStyle: React.PropTypes.func
};

const mapStateToProps = ({app}) => app;

const mapDispatchToProps = {
  handleModelTransport: (data) => AppActions.modelTransport(data),
  handleModelImport: () => AppActions.modelImport(),
  handleModelExport: () => AppActions.modelExport(),
  updateDescriptor: (props) => AppActions.updateDescriptor(props),
  deviceChange: (type, cssMediaIndex) => AppActions.deviceChange(type, cssMediaIndex),
  fetchRoleNames: () => AppActions.fetchRoleNames(),
  getCssModel: AppActions.getCssModel,
  setCssRules: (rules) => AppActions.setCSSRules(rules),
  resetCssRules: () => AppActions.resetCSSRules(),
  onSelectElement: (props) => AppActions.setSelectedElementStyling(props),
  onEditStyle: AppActions.editCSSRule,
  handleRemoveStyle: (prop) => AppActions.removeStyle(prop),
  onSave: (css, model) => AppActions.save(css, model)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
