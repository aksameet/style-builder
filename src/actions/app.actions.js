import config from '../config';

export const APP_STATUS_SCANNING = 'APP_STATUS_SCANNING';
export const APP_STATUS_SCANNED = 'APP_STATUS_SCANNED';
export const APP_STATUS_SAVING = 'APP_STATUS_SAVING';
export const APP_STATUS_SAVED = 'APP_STATUS_SAVED';

export const APP_CSS_MODEL_FETCHED = 'APP_CSS_MODEL_FETCHED';
export const APP_CSS_MODEL_TRANSPORT = 'APP_CSS_MODEL_TRANSPORT';
export const APP_CSS_MODEL_IMPORT = 'APP_CSS_MODEL_IMPORT';
export const APP_CSS_MODEL_EXPORT = 'APP_CSS_MODEL_EXPORT';

export const APP_ROLE_NAMES_FETCHED = 'APP_ROLE_NAMES_FETCHED';
export const APP_BODY_SWITCHES_FETCHED = 'APP_BODY_SWITCHES_FETCHED';
export const APP_DEFAULT_FONTS_FETCHED = 'APP_DEFAULT_FONTS_FETCHED';
export const APP_GOOGLE_FONTS_FETCHED = 'APP_GOOGLE_FONTS_FETCHED';
export const APP_TYPEKIT_FONTS_FETCHED = 'APP_TYPEKIT_FONTS_FETCHED';
export const CSS_RULE_EDIT = 'CSS_RULE_EDIT';
export const CSS_RULE_REMOVE_PROP = 'CSS_RULE_REMOVE_PROP';

export const CSS_RULES_SET = 'CSS_RULES_SET';
export const CSS_RULES_RESET = 'CSS_RULES_RESET';

export const DOM_COMPONENT_TYPE_ADD = 'DOM_COMPONENT_TYPE_ADD';
export const DOM_COMPONENT_ROLE_ADD = 'DOM_COMPONENT_ROLE_ADD';

export const DESCRIPTOR_UPDATE = 'DESCRIPTOR_UPDATE';
export const DESCRIPTOR_FULL_SELECTOR_UPDATE = 'DESCRIPTOR_FULL_SELECTOR_UPDATE';

export const SET_SELECTED_ELEMENT_STYLING = 'SET_SELECTED_ELEMENT_STYLING';

export const DEVICE_CHANGE = 'DEVICE_CHANGE';

export const modelTransport = (data) =>
  (dispatch) => {
    dispatch({type: APP_CSS_MODEL_TRANSPORT, data});
  };

export const modelImport = () =>
  (dispatch) => {
    dispatch({type: APP_CSS_MODEL_IMPORT});
  };

export const modelExport = () =>
  (dispatch) => {
    dispatch({type: APP_CSS_MODEL_EXPORT});
  };

export const save = (css, model) =>
  (dispatch) => {
    dispatch({type: APP_STATUS_SAVING});
    if(window.ROCHE && window.ROCHE.utils) {
      window.ROCHE.utils.stylebuilderIntegration.save(css, model, () => {
        dispatch({type: APP_STATUS_SAVED});
      });
    } else {
      // simulates server lag
      setTimeout(() => dispatch({type: APP_STATUS_SAVED}), 1000);
    }
  };

export const setSelectedElementStyling = (props) =>
  (dispatch) => {
    dispatch({type: SET_SELECTED_ELEMENT_STYLING, props});
  };

export const setCSSRules = (rules) =>
  (dispatch) => {
    dispatch({type: CSS_RULES_SET, rules});
  };

export const resetCSSRules = () =>
  (dispatch) => {
    dispatch({type: CSS_RULES_RESET});
  };

export const editCSSRule = (props, cssRuleIndex) =>
  (dispatch) => {
    dispatch({type: CSS_RULE_EDIT, props, cssRuleIndex});
    dispatch({type: SET_SELECTED_ELEMENT_STYLING, props});
  };

export const removeStyle = (prop) =>
  (dispatch) => {
    dispatch({type: CSS_RULE_REMOVE_PROP, prop});
  };

export const deviceChange = (family, cssMediaIndex) =>
  (dispatch) => {
    dispatch({type: DEVICE_CHANGE, family, cssMediaIndex});
  };

export const updateDescriptor = (props) =>
  (dispatch) => {
    dispatch({type: DESCRIPTOR_UPDATE, props});
    dispatch({type: DESCRIPTOR_FULL_SELECTOR_UPDATE});
  };

export const getCssModel = (localStorageCssModel) =>
  (dispatch) => {
    let cssModel = {};
    if(window.ROCHE && window.ROCHE.utils && window.ROCHE.utils.stylebuilderIntegration) {
      window.ROCHE.utils.stylebuilderIntegration.getCssModel((model) => {
        cssModel = {
          all: {
            ...model.all,
            ...localStorageCssModel.all
          },
          phone: {
            ...model.phone,
            ...localStorageCssModel.phone
          },
          tablet: {
            ...model.tablet,
            ...localStorageCssModel.tablet
          },
          desktop: {
            ...model.desktop,
            ...localStorageCssModel.desktop
          }
        };
        dispatch({type: APP_CSS_MODEL_FETCHED, cssModel});
      });
    } else {
      fetch('./mocks/cssModel.json')
        .then((response) => response.json())
        .then((model) => {
          cssModel = {
            all: {
              ...model.all,
              ...localStorageCssModel.all
            },
            phone: {
              ...model.phone,
              ...localStorageCssModel.phone
            },
            tablet: {
              ...model.tablet,
              ...localStorageCssModel.tablet
            },
            desktop: {
              ...model.desktop,
              ...localStorageCssModel.desktop
            }
          };
          dispatch({type: APP_CSS_MODEL_FETCHED, cssModel});
        });
    }
  };

export const fetchRoleNames = () =>
  (dispatch) => {
    window.elements = new WeakMap();
    dispatch({type: APP_STATUS_SCANNING});

    if(typeof window.ROCHE === 'object' && typeof window.ROCHE.utils === 'object' && typeof window.ROCHE.utils.stylebuilderIntegration === 'object') {
      window.ROCHE.utils.stylebuilderIntegration.getRoles((json) => {
        processCloudServiceConfig(json, dispatch);
      });
    } else {
      setTimeout(() =>
        fetch('./mocks/roles.json')
          .then((response) => response.json())
          .then((json) => {
            processCloudServiceConfig(json, dispatch);
          }), 1000
      );
    }
    dispatch({type: APP_STATUS_SCANNED});
  };

const getRoleNames = (source) => {
  const roleNames = {};

  Object.keys(source).map((nodeName) => {
    const isRoleNamesNode = /StyleNames/g.test(nodeName);

    if(isRoleNamesNode) {
      const componentRoleNamesObj = source[nodeName];
      const componentType = nodeName.replace('StyleNames', '');

      roleNames[componentType] = [];

      Object.keys(componentRoleNamesObj).map((key) => {
        const componentRoleNamesNode = componentRoleNamesObj[key];
        if(componentRoleNamesNode.name) {
          roleNames[componentType].push(componentRoleNamesNode.name);
        }
      });
    }
  });
  return roleNames;
};

const processCloudServiceConfig = (json, dispatch) => {
  const jsonRoot = json['jcr:content'];
  const roleNames = getRoleNames(jsonRoot);
  const getValues = (node) => {
    return Object.values(node)
      .filter((item) => typeof item === 'object')
      .map((item) => item.name);
  };

  dispatch({type: APP_DEFAULT_FONTS_FETCHED, defaultFonts: getValues(jsonRoot.defaultFonts)});
  dispatch({type: APP_GOOGLE_FONTS_FETCHED, googleFonts: getValues(jsonRoot.googleFonts)});
  dispatch({type: APP_TYPEKIT_FONTS_FETCHED, typekitFonts: jsonRoot.typekitFonts});
  dispatch(processRoles(roleNames));
};

const processElements = (elements={}, parentSelector, parentDescriptor) => {
  let existingElements = {};

  Object.keys(elements).map((key) => {
    const descriptor = [...parentDescriptor, key];

    const element = elements[key];
    const elementSelector = `${parentSelector} ${element.selector}`;
    const elementsFound = document.querySelectorAll(elementSelector);

    if(elementsFound.length > 0) {
      elementsFound.forEach((element) => window.elements.set(element, {selector: elementSelector, descriptor}));

      existingElements[key] = {
        key,
        name: element.name,
        selector: element.selector,
        ...processElements(element.elements, elementSelector, descriptor)
      };
    }
  });

  if(Object.keys(existingElements).length > 0) {
    return {elements: existingElements};
  }
};

export const processRoles = (allRoles) =>
  (dispatch) => {
    Object.keys(allRoles).forEach((componentType) => {
      if(config.elementsMap[componentType]) {
        const componentName = config.elementsMap[componentType].name;

        dispatch({type: DOM_COMPONENT_TYPE_ADD, componentType, componentName});

        Object.values(allRoles[componentType]).forEach((componentRole) => {
          const componentSelector = `.${componentRole}`;
          const existingComponents = document.querySelectorAll(componentSelector);
          const componentElements = config.elementsMap[componentType].elements || {};

          existingComponents.forEach((component) =>
            window.elements.set(component, {selector: componentSelector, descriptor: [componentType, componentRole]}));

          dispatch({
            type: DOM_COMPONENT_ROLE_ADD,
            componentType,
            componentRole,
            componentSelector,
            count: existingComponents.length,
            ...processElements(componentElements, componentSelector, [componentType, componentRole])
          });
        });
      }
    });
  };
