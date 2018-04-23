import * as AppActions from '../actions/app.actions.js';
import config from '../config';

const initialCssRules = {
  all: {},
  phone: {},
  tablet: {},
  desktop: {}
};
const initialState = {
  status: {code: 'pristine', text: 'style is pristine'},
  transport: '',
  descriptor: {
    document: '',
    selector: '',
    breadcrumbs: [],
    device: {
      family: 'all',
      cssMediaIndex: 0
    },
    state: '',
    pseudoclass: '',
    pseudoelement: ''
  },
  roles: {},
  bodySwitches: [...config.defaultBodySwitches],
  defaultFonts: [...config.defaultFonts],
  googleFonts: [...config.googleFonts],
  typekitFonts: [...config.typekitFonts],
  selectionStyling: {},
  cssRules: initialCssRules
};

export default (state = initialState, action) => {
  const newRules = {};
  let transport = "";

  switch(action.type) {

    case AppActions.APP_CSS_MODEL_TRANSPORT:
      return {
        ...state,
        transport: action.data
      };

    case AppActions.APP_CSS_MODEL_EXPORT:
      return {
        ...state,
        transport: JSON.stringify(state.cssRules)
      };

    case AppActions.APP_CSS_MODEL_IMPORT:
      transport = JSON.parse(state.transport);
      for(let selector in transport.all) {
        if(state.cssRules.all[selector]) {
          newRules[selector] = {
            cssRuleIndex: state.cssRules.all[selector].cssRuleIndex,
            props: transport.all[selector].props
          };
        } else {
          newRules[selector] = {
            cssRuleIndex: Object.keys(state.cssRules.all).length,
            props: transport.all[selector].props
          };
        }
      }
      return {
        ...state,
        cssRules: {
          ...state.cssRules,
          all: {
            ...state.cssRules.all,
            ...newRules
          }
        }
      };

    case AppActions.APP_STATUS_SCANNING:
      return {
        ...state,
        status: {code: 'scanning', text: 'scanning sources'}
      };

    case AppActions.APP_STATUS_SCANNED:
      return {
        ...state,
        status: {code: 'scanned', text: 'sources scanned'}
      };

    case AppActions.APP_STATUS_SAVING:
      return {
        ...state,
        status: {code: 'saving', text: 'saving data'}
      };

    case AppActions.APP_STATUS_SAVED:
      return {
        ...state,
        status: {code: 'saved', text: 'data saved'}
      };

    case AppActions.APP_CSS_MODEL_FETCHED:
      return {
        ...state,
        cssRules: action.cssModel
      };

    case AppActions.APP_ROLE_NAMES_FETCHED:
      return {
        ...state,
        roles: action.roles
      };

    case AppActions.APP_BODY_SWITCHES_FETCHED:
      return {
        ...state,
        bodySwitches: [
          ...config.defaultBodySwitches,
          ...action.bodySwitches.map((name) => {return {name, value: `.${name}`};})
        ]
      };

    case AppActions.APP_DEFAULT_FONTS_FETCHED:
      return {
        ...state,
        defaultFonts: [
          ...config.defaultFonts,
          ...(action.defaultFonts || []).map((name) => {return {name, value: name};})
        ]
      };

    case AppActions.APP_GOOGLE_FONTS_FETCHED:
      return {
        ...state,
        googleFonts: [
          ...config.googleFonts,
          ...action.googleFonts.map((name) => {return {name, value: name};})
        ]
      };

    case AppActions.APP_TYPEKIT_FONTS_FETCHED:
      return {
        ...state,
        typekitFonts: [
          ...config.typekitFonts,
          ...action.typekitFonts.map((name) => {return {name, value: name};})
        ]
      };

    case AppActions.CSS_RULES_SET:
      return {
        ...state,
        cssRules: {
          ...state.cssRules,
          ...action.rules
        }
      };

    case AppActions.CSS_RULES_RESET:
      return {
        ...state,
        cssRules: {
          ...initialCssRules
        }
      };

    case AppActions.SET_SELECTED_ELEMENT_STYLING:
      return {
        ...state,
        selectionStyling: {
          ...state.selectionStyling,
          ...action.props
        }
      };

    case AppActions.CSS_RULE_EDIT:
      return {
        ...state,
        status: {code: 'changed', text: 'style has changed'},
        cssRules: {
          ...state.cssRules,
          [state.descriptor.device.family]: {
            ...state.cssRules[state.descriptor.device.family],
            [state.descriptor.fullSelector]: {
              ...state.cssRules[state.descriptor.device.family][state.descriptor.fullSelector],
              cssRuleIndex: action.cssRuleIndex,
              props: {
                ...(state.cssRules[state.descriptor.device.family][state.descriptor.fullSelector]
                    ? state.cssRules[state.descriptor.device.family][state.descriptor.fullSelector].props
                    : {}),
                ...action.props
              }
            }
          }
        }
      };

    case AppActions.CSS_RULE_REMOVE_PROP: {
      let newProps = {
        ...state.cssRules[state.descriptor.device.family][state.descriptor.fullSelector].props
      };
      delete newProps[action.prop];

      return {
        ...state,
        cssRules: {
          ...state.cssRules,
          [state.descriptor.device.family]: {
            ...state.cssRules[state.descriptor.device.family],
            [state.descriptor.fullSelector]: {
              ...state.cssRules[state.descriptor.device.family][state.descriptor.fullSelector],
              props: newProps
            }
          }
        }
      };
    }

    case AppActions.DESCRIPTOR_UPDATE:
      return {
        ...state,
        descriptor: {
          ...state.descriptor,
          ...action.props
        }
      };

    case AppActions.DEVICE_CHANGE:
      return {
        ...state,
        descriptor: {
          ...state.descriptor,
          device: {
            family: action.family,
            cssMediaIndex: action.cssMediaIndex
          }
        }
      };

    case AppActions.DESCRIPTOR_FULL_SELECTOR_UPDATE:
      return {
        ...state,
        descriptor: {
          ...state.descriptor,
          fullSelector: (state.descriptor.document ? state.descriptor.document + ' ' : '')
                        + state.descriptor.selector
                        + state.descriptor.state
                        + state.descriptor.pseudoclass
                        + state.descriptor.pseudoelement
        }
      };

    case AppActions.DOM_COMPONENT_TYPE_ADD:
      return {
        ...state,
        roles: {
          ...state.roles,
          [action.componentType]: {
            ...state.roles[action.componentType],
            key: action.componentType,
            name: action.componentName
          }
        }
      };

    case AppActions.DOM_COMPONENT_ROLE_ADD: {
      return {
        ...state,
        roles: {
          ...state.roles,
          [action.componentType]: {
            ...state.roles[action.componentType],
            elements: {
              ...state.roles[action.componentType].elements,
              [action.componentRole]: {
                key: action.componentRole,
                selector: action.componentSelector,
                name: action.componentRole,
                count: action.count,
                elements: action.elements
              }
            }
          }
        }
      };
    }

    default:
      return state;
  }
};
