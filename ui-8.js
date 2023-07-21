LavaPack.loadBundle([
["F:\\metamask-extension\\ui\\components\\ui\\box\\box.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cbox%5Cbox.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ValidTextColors = exports.ValidIconColors = exports.ValidBorderColors = exports.ValidBackgroundColor = exports.MultipleTextColors = exports.MultipleSizesAndAuto = exports.MultipleSizes = exports.MultipleJustifyContents = exports.MultipleBorderColors = exports.MultipleBlockSizes = exports.MultipleBackgroundColor = exports.MultipleAlignItems = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BASE_CLASS_NAME = 'box';
const Sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ValidSize = _propTypes.default.oneOf(Sizes);
const ValidBlockSize = _propTypes.default.oneOf(Object.values(_designSystem.BlockSize));
const ValidSizeAndAuto = _propTypes.default.oneOf([...Sizes, 'auto']);
const ValidBackgroundColor = _propTypes.default.oneOf(Object.values(_designSystem.BackgroundColor));
exports.ValidBackgroundColor = ValidBackgroundColor;
const ValidBorderColors = _propTypes.default.oneOf(Object.values(_designSystem.BorderColor));
exports.ValidBorderColors = ValidBorderColors;
const ValidTextColors = _propTypes.default.oneOf(Object.values(_designSystem.TextColor));
exports.ValidTextColors = ValidTextColors;
const ValidIconColors = _propTypes.default.oneOf(Object.values(_designSystem.IconColor));
exports.ValidIconColors = ValidIconColors;
const ValidAlignItem = _propTypes.default.oneOf(Object.values(_designSystem.AlignItems));
const ValidJustifyContent = _propTypes.default.oneOf(Object.values(_designSystem.JustifyContent));
const ArrayOfValidSizes = _propTypes.default.arrayOf(ValidSize);
const MultipleSizes = _propTypes.default.oneOfType([ValidSize, ArrayOfValidSizes]);
exports.MultipleSizes = MultipleSizes;
const ArrayOfValidBlockSizes = _propTypes.default.arrayOf(ValidBlockSize);
const MultipleBlockSizes = _propTypes.default.oneOfType([ValidBlockSize, ArrayOfValidBlockSizes]);
exports.MultipleBlockSizes = MultipleBlockSizes;
const ArrayOfValidSizesAndAuto = _propTypes.default.arrayOf(ValidSizeAndAuto);
const MultipleSizesAndAuto = _propTypes.default.oneOfType([ValidSizeAndAuto, ArrayOfValidSizesAndAuto]);
exports.MultipleSizesAndAuto = MultipleSizesAndAuto;
const ArrayOfValidBorderColors = _propTypes.default.arrayOf(ValidBorderColors);
const MultipleBorderColors = _propTypes.default.oneOfType([ValidBorderColors, ArrayOfValidBorderColors]);
exports.MultipleBorderColors = MultipleBorderColors;
const ArrayOfValidBackgroundColor = _propTypes.default.arrayOf(ValidBackgroundColor);
const MultipleBackgroundColor = _propTypes.default.oneOfType([ValidBackgroundColor, ArrayOfValidBackgroundColor]);
exports.MultipleBackgroundColor = MultipleBackgroundColor;
const ArrayOfValidTextColors = _propTypes.default.arrayOf(ValidTextColors);
const ArrayOfValidIconColors = _propTypes.default.arrayOf(ValidIconColors);
const MultipleTextColors = _propTypes.default.oneOfType([ValidTextColors, ArrayOfValidTextColors, ValidIconColors, ArrayOfValidIconColors]);
exports.MultipleTextColors = MultipleTextColors;
const ArrayOfValidAlignItems = _propTypes.default.arrayOf(ValidAlignItem);
const MultipleAlignItems = _propTypes.default.oneOfType([ValidAlignItem, ArrayOfValidAlignItems]);
exports.MultipleAlignItems = MultipleAlignItems;
const ArrayOfValidJustifyContents = _propTypes.default.arrayOf(ValidJustifyContent);
const MultipleJustifyContents = _propTypes.default.oneOfType([ValidJustifyContent, ArrayOfValidJustifyContents]);
exports.MultipleJustifyContents = MultipleJustifyContents;
function isValidSize(type, value) {
  // Only margin types allow 'auto'
  return typeof value === 'number' || (type === 'margin' || type === 'margin-top' || type === 'margin-right' || type === 'margin-bottom' || type === 'margin-left' || type === 'margin-inline' || type === 'margin-inline-start' || type === 'margin-inline-end') && value === 'auto';
}
function isValidString(type, value) {
  return typeof type === 'string' && typeof value === 'string';
}

/**
 * Generate classnames
 * Generates classnames for different utility styles
 * Also accepts responsive props in the form of an array
 * Maps responsive props to mobile first breakpoints
 *
 * @param {string} type - The style declaration type "margin", "margin-top", "padding", "display" etc
 * @param {array || number || string} value - prop value being passed in array props are responsive props
 * @param {*} validatorFn - The validation function for each type of value
 * @returns
 */

const generateClassNames = (0, _lodash.memoize)((type, value, validatorFn) => {
  // if value does not exist return null
  if (!value) {
    return null;
  }
  const classesObject = {};
  // if value is an array with single item e.g. marginTop={[1]}
  const singleArrayItemProp = Array.isArray(value) && value.length === 1 ? value[0] : undefined;
  // if value single value e.g. marginTop={1}
  const singleValueProp = !Array.isArray(value) && typeof value === 'string' || typeof value === 'number' ? value : undefined;
  // single digit equals single value or single array item
  const singleValue = singleValueProp || singleArrayItemProp;
  // 0 is an acceptable value but is falsy in js
  if (singleValue || singleValue === 0) {
    // add base style without any breakpoint prefixes to classObject
    classesObject[`${BASE_CLASS_NAME}--${type}-${singleValue}`] = validatorFn(type, singleValue);
  } else {
    // If array with more than one item
    switch (value.length) {
      case 4:
        // add base/sm/md/lg
        classesObject[`${BASE_CLASS_NAME}--${type}-${value[0]}`] = value[0] && validatorFn(type, value[0]);
        classesObject[`${BASE_CLASS_NAME}--${_designSystem.BREAKPOINTS[1]}:${type}-${value[1]}`] = value[1] && validatorFn(type, value[1]);
        classesObject[`${BASE_CLASS_NAME}--${_designSystem.BREAKPOINTS[2]}:${type}-${value[2]}`] = value[2] && validatorFn(type, value[2]);
        classesObject[`${BASE_CLASS_NAME}--${_designSystem.BREAKPOINTS[3]}:${type}-${value[3]}`] = value[3] && validatorFn(type, value[3]);
        break;
      case 3:
        // add base/sm/md
        classesObject[`${BASE_CLASS_NAME}--${type}-${value[0]}`] = value[0] && validatorFn(type, value[0]);
        classesObject[`${BASE_CLASS_NAME}--${_designSystem.BREAKPOINTS[1]}:${type}-${value[1]}`] = value[1] && validatorFn(type, value[1]);
        classesObject[`${BASE_CLASS_NAME}--${_designSystem.BREAKPOINTS[2]}:${type}-${value[2]}`] = value[2] && validatorFn(type, value[2]);
        break;
      case 2:
        // add base/sm
        classesObject[`${BASE_CLASS_NAME}--${type}-${value[0]}`] = value[0] && validatorFn(type, value[0]);
        classesObject[`${BASE_CLASS_NAME}--${_designSystem.BREAKPOINTS[1]}:${type}-${value[1]}`] = value[1] && validatorFn(type, value[1]);
        break;
      default:
        console.log(`Invalid array prop length: ${value.length}`);
    }
  }
  return classesObject;
}, (type, value) => [type, value]);

/**
 * @deprecated The JS version of the <Box /> component has been deprecated in favor of the new TS version from the component-library.
 * Please update your code to use the new <Box> component instead
 * import { Box } from '../../component-library';
 * The component API is the same so you should only have to update the import statement but you can find documentation for the new Box component in the MetaMask Storybook:
 * {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-box--docs}
 * If you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:
 * {@link https://github.com/MetaMask/metamask-extension/issues/19526}
 */
const Box = /*#__PURE__*/_react.default.forwardRef(function Box({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginInline,
  marginInlineStart,
  marginInlineEnd,
  borderColor,
  borderWidth,
  borderRadius,
  borderStyle,
  alignItems,
  justifyContent,
  textAlign,
  flexDirection = _designSystem.FlexDirection.Row,
  flexWrap,
  gap,
  display,
  width,
  height,
  children,
  className,
  backgroundColor,
  color,
  ariaLabel,
  as = 'div',
  ...props
}, ref) {
  const boxClassName = (0, _classnames.default)(BASE_CLASS_NAME, className,
  // Margin
  margin && generateClassNames('margin', margin, isValidSize), marginTop && generateClassNames('margin-top', marginTop, isValidSize), marginRight && generateClassNames('margin-right', marginRight, isValidSize), marginBottom && generateClassNames('margin-bottom', marginBottom, isValidSize), marginLeft && generateClassNames('margin-left', marginLeft, isValidSize), marginInline && generateClassNames('margin-inline', marginInline, isValidSize), marginInlineStart && generateClassNames('margin-inline-start', marginInlineStart, isValidSize), marginInlineEnd && generateClassNames('margin-inline-end', marginInlineEnd, isValidSize),
  // Padding
  padding && generateClassNames('padding', padding, isValidSize), paddingTop && generateClassNames('padding-top', paddingTop, isValidSize), paddingRight && generateClassNames('padding-right', paddingRight, isValidSize), paddingBottom && generateClassNames('padding-bottom', paddingBottom, isValidSize), paddingLeft && generateClassNames('padding-left', paddingLeft, isValidSize), paddingInline && generateClassNames('padding-inline', paddingInline, isValidSize), paddingInlineStart && generateClassNames('padding-inline-start', paddingInlineStart, isValidSize), paddingInlineEnd && generateClassNames('padding-inline-end', paddingInlineEnd, isValidSize), display && generateClassNames('display', display, isValidString), gap && generateClassNames('gap', gap, isValidSize), flexDirection && generateClassNames('flex-direction', flexDirection, isValidString), flexWrap && generateClassNames('flex-wrap', flexWrap, isValidString), justifyContent && generateClassNames('justify-content', justifyContent, isValidString), alignItems && generateClassNames('align-items', alignItems, isValidString), textAlign && generateClassNames('text-align', textAlign, isValidString), width && generateClassNames('width', width, isValidString), height && generateClassNames('height', height, isValidString), color && generateClassNames('color', color, isValidString), backgroundColor && generateClassNames('background-color', backgroundColor, isValidString), borderRadius && generateClassNames('rounded', borderRadius, isValidString), borderStyle && generateClassNames('border-style', borderStyle, isValidString), borderColor && generateClassNames('border-color', borderColor, isValidString), borderWidth && generateClassNames('border-width', borderWidth, isValidSize), {
    // Auto applied classes
    // ---Borders---
    // if borderWidth or borderColor is supplied w/o style, default to solid
    'box--border-style-solid': !borderStyle && (Boolean(borderWidth) || Boolean(borderColor)),
    // if borderColor supplied w/o width, default to 1
    'box--border-width-1': !borderWidth && Boolean(borderColor),
    // ---Flex/Grid alignment---
    // if justifyContent or alignItems supplied w/o display, default to flex
    'box--display-flex': !display && (Boolean(justifyContent) || Boolean(alignItems))
  });
  // Apply Box styles to any other component using function pattern
  if (typeof children === 'function') {
    return children(boxClassName);
  }
  const Component = as;
  const ariaLabelProp = {};
  if (isCustomComponent(Component)) {
    ariaLabelProp.ariaLabel = ariaLabel;
  } else {
    ariaLabelProp['aria-label'] = ariaLabel;
  }
  if (props['aria-label']) {
    ariaLabelProp['aria-label'] = props['aria-label'];
  }
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    className: boxClassName,
    ref: ref
  }, props, ariaLabelProp), children);
});

// Both class or functional components have type function.
// Built-in HTML elements (div, span, etc.) have type string.
function isCustomComponent(element) {
  return typeof element.type === 'function';
}
Box.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  flexDirection: _propTypes.default.oneOfType([_propTypes.default.oneOf(Object.values(_designSystem.FlexDirection)), _propTypes.default.arrayOf(_propTypes.default.oneOf(Object.values(_designSystem.FlexDirection)))]),
  flexWrap: _propTypes.default.oneOfType([_propTypes.default.oneOf(Object.values(_designSystem.FlexWrap)), _propTypes.default.arrayOf(_propTypes.default.oneOf(Object.values(_designSystem.FlexWrap)))]),
  gap: MultipleSizes,
  margin: MultipleSizesAndAuto,
  marginTop: MultipleSizesAndAuto,
  marginBottom: MultipleSizesAndAuto,
  marginRight: MultipleSizesAndAuto,
  marginLeft: MultipleSizesAndAuto,
  marginInline: MultipleSizesAndAuto,
  marginInlineStart: MultipleSizesAndAuto,
  marginInlineEnd: MultipleSizesAndAuto,
  padding: MultipleSizes,
  paddingTop: MultipleSizes,
  paddingBottom: MultipleSizes,
  paddingRight: MultipleSizes,
  paddingLeft: MultipleSizes,
  paddingInline: MultipleSizes,
  paddingInlineStart: MultipleSizes,
  paddingInlineEnd: MultipleSizes,
  borderColor: MultipleBorderColors,
  borderWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.oneOf(Object.values(_designSystem.BorderRadius)), _propTypes.default.arrayOf(_propTypes.default.oneOf(Object.values(_designSystem.BorderRadius)))]),
  borderStyle: _propTypes.default.oneOfType([_propTypes.default.oneOf(Object.values(_designSystem.BorderStyle)), _propTypes.default.arrayOf(_propTypes.default.oneOf(Object.values(_designSystem.BorderStyle)))]),
  alignItems: MultipleAlignItems,
  justifyContent: MultipleJustifyContents,
  textAlign: _propTypes.default.oneOfType([_propTypes.default.oneOf(Object.values(_designSystem.TextAlign)), _propTypes.default.arrayOf(_propTypes.default.oneOf(Object.values(_designSystem.TextAlign)))]),
  display: _propTypes.default.oneOfType([_propTypes.default.oneOf(Object.values(_designSystem.Display)), _propTypes.default.arrayOf(_propTypes.default.oneOf(Object.values(_designSystem.Display)))]),
  width: MultipleBlockSizes,
  height: MultipleBlockSizes,
  backgroundColor: MultipleBackgroundColor,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  /**
   * The polymorphic `as` prop allows you to change the root HTML element of the Box component
   * Defaults to 'div'
   */
  as: _propTypes.default.string,
  /**
   * The color of the Typography component Should use the COLOR object from
   * ./ui/helpers/constants/design-system.js
   */
  color: MultipleTextColors,
  ariaLabel: _propTypes.default.string,
  'aria-label': _propTypes.default.string
};
var _default = Box;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\box\\box.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\box\\index.js", {"./box":"F:\\metamask-extension\\ui\\components\\ui\\box\\box.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cbox%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MultipleSizes", {
  enumerable: true,
  get: function () {
    return _box.MultipleSizes;
  }
});
Object.defineProperty(exports, "MultipleSizesAndAuto", {
  enumerable: true,
  get: function () {
    return _box.MultipleSizesAndAuto;
  }
});
Object.defineProperty(exports, "ValidBackgroundColor", {
  enumerable: true,
  get: function () {
    return _box.ValidBackgroundColor;
  }
});
Object.defineProperty(exports, "ValidBorderColors", {
  enumerable: true,
  get: function () {
    return _box.ValidBorderColors;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _box.default;
  }
});
var _box = _interopRequireWildcard(require("./box"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\box\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\button-group\\button-group.component.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cbutton-group%5Cbutton-group.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class ButtonGroup extends _react.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      activeButtonIndex: this.props.noButtonActiveByDefault ? null : this.props.defaultActiveButtonIndex
    });
  }
  componentDidUpdate(_, prevState) {
    // Provides an API for dynamically updating the activeButtonIndex
    if (typeof this.props.newActiveButtonIndex === 'number' && prevState.activeButtonIndex !== this.props.newActiveButtonIndex) {
      this.setState({
        activeButtonIndex: this.props.newActiveButtonIndex
      });
    }
  }
  handleButtonClick(activeButtonIndex) {
    this.setState({
      activeButtonIndex
    });
  }
  renderButtons() {
    const {
      children,
      disabled,
      variant
    } = this.props;
    return _react.default.Children.map(children, (child, index) => {
      return child && /*#__PURE__*/_react.default.createElement("button", {
        role: variant === 'radiogroup' ? 'radio' : undefined,
        "aria-checked": index === this.state.activeButtonIndex,
        className: (0, _classnames.default)('button-group__button', child.props.className, {
          'radio-button': variant === 'radiogroup',
          'button-group__button--active': index === this.state.activeButtonIndex,
          'radio-button--active': variant === 'radiogroup' && index === this.state.activeButtonIndex
        }),
        "data-testid": `button-group__button${index}`,
        onClick: () => {
          var _child$props$onClick, _child$props;
          this.handleButtonClick(index);
          (_child$props$onClick = (_child$props = child.props).onClick) === null || _child$props$onClick === void 0 ? void 0 : _child$props$onClick.call(_child$props);
        },
        disabled: disabled || child.props.disabled,
        key: index
      }, child.props.children);
    });
  }
  render() {
    const {
      className,
      style,
      variant
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(className, {
        'radio-button-group': variant === 'radiogroup'
      }),
      role: variant === 'radiogroup' ? 'radiogroup' : undefined,
      style: style
    }, this.renderButtons());
  }
}
exports.default = ButtonGroup;
_defineProperty(ButtonGroup, "propTypes", {
  /**
   * change button active order
   */
  defaultActiveButtonIndex: _propTypes.default.number,
  /**
   * no button are active before clicked by the user
   */
  noButtonActiveByDefault: _propTypes.default.bool,
  /**
   * disabling every button inside button group
   */
  disabled: _propTypes.default.bool,
  /**
   * Children must be an array of button components
   */
  children: _propTypes.default.array,
  /**
   * Adds a className to the root div of the of the ButtonGroup component
   */
  className: _propTypes.default.string,
  /**
   * adding style for button group component
   */
  style: _propTypes.default.object,
  /**
   * updating value of active button in button group component
   */
  newActiveButtonIndex: _propTypes.default.number,
  /**
   * options for rendering type of button, consist of 'default' and 'radiogroup'
   */
  variant: _propTypes.default.oneOf(['radiogroup', 'default'])
});
_defineProperty(ButtonGroup, "defaultProps", {
  className: 'button-group',
  defaultActiveButtonIndex: 0,
  variant: 'default'
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\button-group\\button-group.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\button-group\\index.js", {"./button-group.component":"F:\\metamask-extension\\ui\\components\\ui\\button-group\\button-group.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cbutton-group%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _buttonGroup.default;
  }
});
var _buttonGroup = _interopRequireDefault(require("./button-group.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\button-group\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\button\\button.component.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cbutton%5Cbutton.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CLASSNAME_DEFAULT = 'btn-default';
const CLASSNAME_PRIMARY = 'btn-primary';
const CLASSNAME_SECONDARY = 'btn-secondary';
const CLASSNAME_RAISED = 'btn-raised';
const CLASSNAME_LARGE = 'btn--large';
const CLASSNAME_ROUNDED = 'btn--rounded';
const CLASSNAME_INLINE = 'btn--inline';
const typeHash = {
  default: CLASSNAME_DEFAULT,
  primary: CLASSNAME_PRIMARY,
  secondary: CLASSNAME_SECONDARY,
  warning: 'btn-warning',
  danger: 'btn-danger',
  'danger-primary': 'btn-danger-primary',
  link: 'btn-link',
  inline: CLASSNAME_INLINE,
  raised: CLASSNAME_RAISED
};

/**
 * @deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.
 * Please update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.
 * You can find documentation for the new Button component in the MetaMask Storybook:
 * {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}
 * If you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:
 * {@link https://github.com/MetaMask/metamask-extension/issues/18896}
 * @see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}
 */

const Button = ({
  type,
  submit = false,
  large,
  children,
  icon,
  className,
  rounded = true,
  ...buttonProps
}) => {
  const doRounding = rounded && type !== 'link' && type !== 'inline';
  // To support using the Button component to render styled links that are semantic html
  // we swap the html tag we use to render this component and delete any buttonProps that
  // we know to be erroneous attributes for a link. We will likely want to extract Link
  // to its own component in the future.
  let Tag = 'button';
  if (type === 'link') {
    Tag = 'a';
  } else if (submit) {
    buttonProps.type = 'submit';
  }
  if (typeof buttonProps.onClick === 'function') {
    buttonProps.onKeyUp ?? (buttonProps.onKeyUp = event => {
      if (event.key === 'Enter') {
        buttonProps.onClick();
      }
    });
    buttonProps.role ?? (buttonProps.role = 'button');
    buttonProps.tabIndex ?? (buttonProps.tabIndex = 0);
  }
  return /*#__PURE__*/_react.default.createElement(Tag, _extends({
    className: (0, _classnames.default)('button', doRounding && CLASSNAME_ROUNDED, typeHash[type] || CLASSNAME_DEFAULT, large && CLASSNAME_LARGE, className)
  }, buttonProps), icon ? /*#__PURE__*/_react.default.createElement("span", {
    className: "button__icon"
  }, icon) : null, children);
};
Button.propTypes = {
  /**
   * The type of variation a button can be.
   * Can be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'
   */
  type: _propTypes.default.string,
  /**
   * If true sets the html 'type' attribute to type="submit"
   */
  submit: _propTypes.default.bool,
  /**
   * Increase the height of the button to 54px
   */
  large: _propTypes.default.bool,
  /**
   * Additional className to provide on the root element of the button
   */
  className: _propTypes.default.string,
  /**
   * The children of the button component
   */
  children: _propTypes.default.node,
  /**
   * Provide an icon component for an icon to appear on the left side of the button
   */
  icon: _propTypes.default.node,
  /**
   * Buttons are rounded by default.
   */
  rounded: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\button\\button.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\button\\index.js", {"./button.component":"F:\\metamask-extension\\ui\\components\\ui\\button\\button.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cbutton%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _button = _interopRequireDefault(require("./button.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _button.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\button\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\callout\\callout.js", {"../../../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../icon/info-icon-inverted.component":"F:\\metamask-extension\\ui\\components\\ui\\icon\\info-icon-inverted.component.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccallout%5Ccallout.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Callout;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _infoIconInverted = _interopRequireDefault(require("../icon/info-icon-inverted.component"));
var _designSystem = require("../../../helpers/constants/design-system");
var _time = require("../../../../shared/constants/time");
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @deprecated `<Callout />` has been deprecated in favor of the `<BannerAlert />`
 * component in ./ui/components/component-library/banner-alert/banner-alert.js.
 * See storybook documentation for BannerAlert here:
 * {@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-banneralert--default-story#banneralert}}
 *
 * Help to replace `Callout` with `BannerAlert` by submitting a PR
 */

function Callout({
  severity,
  children,
  dismiss,
  isFirst,
  isLast,
  isMultiple
}) {
  const [removed, setRemoved] = (0, _react.useState)(false);
  const calloutClassName = (0, _classnames.default)('callout', `callout--${severity}`, {
    'callout--dismissed': removed === true,
    'callout--multiple': isMultiple === true,
    'callout--dismissible': Boolean(dismiss),
    'callout--first': isFirst === true || isMultiple !== true,
    'callout--last': isLast === true || isMultiple !== true
  });
  // Clicking the close button will set removed state, which will trigger this
  // effect to refire due to changing dependencies. When that happens, after a
  // half of a second we fire the dismiss method from the parent. The
  // consuming component is responsible for modifying state and then removing
  // the element from the DOM.
  (0, _react.useEffect)(() => {
    if (removed) {
      setTimeout(() => {
        dismiss();
      }, _time.MILLISECOND * 500);
    }
  }, [removed, dismiss]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: calloutClassName
  }, /*#__PURE__*/_react.default.createElement(_infoIconInverted.default, {
    severity: severity
  }), /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    color: _designSystem.TextColor.textDefault,
    className: "callout__content"
  }, children), dismiss && /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
    iconName: _componentLibrary.IconName.Close,
    size: _componentLibrary.IconSize.Sm,
    className: "callout__close-button",
    onClick: () => {
      setRemoved(true);
    },
    onKeyUp: event => {
      if (event.key === 'Enter') {
        setRemoved(true);
      }
    }
  }));
}
Callout.propTypes = {
  severity: _propTypes.default.oneOf(Object.values(_designSystem.Severity)).isRequired,
  children: _propTypes.default.node.isRequired,
  dismiss: _propTypes.default.func,
  isFirst: _propTypes.default.bool,
  isLast: _propTypes.default.bool,
  isMultiple: _propTypes.default.bool
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\callout\\callout.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\callout\\index.js", {"./callout":"F:\\metamask-extension\\ui\\components\\ui\\callout\\callout.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccallout%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _callout.default;
  }
});
var _callout = _interopRequireDefault(require("./callout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\callout\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\check-box\\check-box.component.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccheck-box%5Ccheck-box.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UNCHECKED = exports.INDETERMINATE = exports.CHECKED = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CHECKBOX_STATE = {
  CHECKED: 'CHECKED',
  INDETERMINATE: 'INDETERMINATE',
  UNCHECKED: 'UNCHECKED'
};
const {
  CHECKED,
  INDETERMINATE,
  UNCHECKED
} = CHECKBOX_STATE;
exports.UNCHECKED = UNCHECKED;
exports.INDETERMINATE = INDETERMINATE;
exports.CHECKED = CHECKED;
const CheckBox = ({
  className,
  disabled,
  id,
  onClick,
  checked,
  title,
  dataTestId
}) => {
  if (typeof checked === 'boolean') {
    // eslint-disable-next-line no-param-reassign
    checked = checked ? CHECKBOX_STATE.CHECKED : CHECKBOX_STATE.UNCHECKED;
  }
  const ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(() => {
    ref.current.indeterminate = checked === CHECKBOX_STATE.INDETERMINATE;
  }, [checked]);
  return /*#__PURE__*/_react.default.createElement("input", {
    checked: checked === CHECKBOX_STATE.CHECKED,
    className: (0, _classnames.default)('check-box', className, {
      'far fa-square': checked === CHECKBOX_STATE.UNCHECKED,
      'fa fa-check-square check-box__checked': checked === CHECKBOX_STATE.CHECKED,
      'fa fa-minus-square check-box__indeterminate': checked === CHECKBOX_STATE.INDETERMINATE
    }),
    disabled: disabled,
    id: id,
    onClick: onClick ? event => {
      event.preventDefault();
      onClick();
    } : null,
    readOnly: true,
    ref: ref,
    title: title,
    "data-testid": dataTestId,
    type: "checkbox"
  });
};
CheckBox.propTypes = {
  /**
   * Add custom classname css
   */
  className: _propTypes.default.string,
  /**
   * Check if checkbox disabled or not
   */
  disabled: _propTypes.default.bool,
  /**
   * Checkbox ID
   */
  id: _propTypes.default.string,
  /**
   * Click handler
   */
  onClick: _propTypes.default.func,
  /**
   * Check if the checkbox are checked or not
   */
  checked: _propTypes.default.oneOf([...Object.keys(CHECKBOX_STATE), true, false]).isRequired,
  /**
   * Show title
   */
  title: _propTypes.default.string,
  /**
   * Data test ID for checkbox Component
   */
  dataTestId: _propTypes.default.string
};
CheckBox.defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined
};
var _default = CheckBox;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\check-box\\check-box.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\check-box\\index.js", {"./check-box.component":"F:\\metamask-extension\\ui\\components\\ui\\check-box\\check-box.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccheck-box%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CHECKED", {
  enumerable: true,
  get: function () {
    return _checkBox.CHECKED;
  }
});
Object.defineProperty(exports, "INDETERMINATE", {
  enumerable: true,
  get: function () {
    return _checkBox.INDETERMINATE;
  }
});
Object.defineProperty(exports, "UNCHECKED", {
  enumerable: true,
  get: function () {
    return _checkBox.UNCHECKED;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _checkBox.default;
  }
});
var _checkBox = _interopRequireWildcard(require("./check-box.component"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\check-box\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\chip\\chip-with-input.js", {".":"F:\\metamask-extension\\ui\\components\\ui\\chip\\index.js","../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cchip%5Cchip-with-input.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipWithInput = ChipWithInput;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _designSystem = require("../../../helpers/constants/design-system");
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ChipWithInput({
  dataTestId,
  className,
  borderColor = _designSystem.BorderColor.borderDefault,
  inputValue,
  setInputValue
}) {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    className: (0, _classnames.default)(className, 'chip--with-input'),
    borderColor: borderColor
  }, setInputValue && /*#__PURE__*/_react.default.createElement("input", {
    "data-testid": dataTestId,
    type: "text",
    className: "chip__input",
    onChange: e => {
      setInputValue(e.target.value);
    },
    value: inputValue
  }));
}
ChipWithInput.propTypes = {
  dataTestId: _propTypes.default.string,
  borderColor: _propTypes.default.oneOf(Object.values(_designSystem.BorderColor)),
  className: _propTypes.default.string,
  inputValue: _propTypes.default.string,
  setInputValue: _propTypes.default.func
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\chip\\chip-with-input.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\chip\\chip.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../typography":"F:\\metamask-extension\\ui\\components\\ui\\typography\\index.js","../url-icon":"F:\\metamask-extension\\ui\\components\\ui\\url-icon\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cchip%5Cchip.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chip;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _typography = _interopRequireDefault(require("../typography"));
var _urlIcon = _interopRequireDefault(require("../url-icon"));
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Chip({
  dataTestId,
  className,
  children,
  borderColor = _designSystem.BorderColor.borderDefault,
  backgroundColor,
  label,
  labelProps = {},
  leftIcon,
  leftIconUrl = '',
  rightIcon,
  onClick,
  maxContent = true,
  displayInlineBlock = false
}) {
  const onKeyPress = event => {
    if (event.key === 'Enter' && onClick) {
      onClick(event);
    }
  };
  const isInteractive = typeof onClick === 'function';
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": dataTestId,
    onClick: onClick,
    onKeyPress: onKeyPress,
    className: (0, _classnames.default)(className, 'chip', {
      'chip--with-left-icon': Boolean(leftIcon),
      'chip--with-right-icon': Boolean(rightIcon),
      [`chip--border-color-${borderColor}`]: true,
      [`chip--background-color-${backgroundColor}`]: true,
      'chip--max-content': maxContent,
      'chip--display-inline-block': displayInlineBlock
    }),
    role: isInteractive ? 'button' : undefined,
    tabIndex: isInteractive ? 0 : undefined
  }, leftIcon && !leftIconUrl ? /*#__PURE__*/_react.default.createElement("div", {
    className: "chip__left-icon"
  }, leftIcon) : null, leftIconUrl ? /*#__PURE__*/_react.default.createElement(_urlIcon.default, {
    className: "chip__left-url-icon",
    url: leftIconUrl
  }) : null, children ?? /*#__PURE__*/_react.default.createElement(_typography.default, _extends({
    className: "chip__label",
    variant: _designSystem.TypographyVariant.H6,
    as: "span",
    color: _designSystem.TextColor.textAlternative
  }, labelProps), label), rightIcon ? /*#__PURE__*/_react.default.createElement("div", {
    className: "chip__right-icon"
  }, rightIcon) : null);
}
Chip.propTypes = {
  /**
   * Data test id used for testing of the Chip component
   */
  dataTestId: _propTypes.default.string,
  /**
   * The border color of the Chip
   */
  borderColor: _propTypes.default.oneOf(Object.values(_designSystem.BorderColor)),
  /**
   * The background color of the Chip component
   */
  backgroundColor: _propTypes.default.oneOf(Object.values(_designSystem.BackgroundColor)),
  /**
   * The label of the Chip component has a default typography variant of h6 and is a span html element
   */
  label: _propTypes.default.string,
  /**
   * The label props of the component. Most Typography props can be used
   */
  labelProps: _propTypes.default.shape({
    ...(0, _lodash.omit)(_designSystem.TypographyVariant.propTypes, ['children', 'className'])
  }),
  /**
   * Children will replace the label of the Chip component.
   */
  children: _propTypes.default.node,
  /**
   * An icon component that can be passed to appear on the left of the label
   */
  leftIcon: _propTypes.default.node,
  /**
   * An icon component that can be passed to appear on the right of the label
   */
  rightIcon: _propTypes.default.node,
  /**
   * The className of the Chip
   */
  className: _propTypes.default.string,
  /**
   * The onClick handler to be passed to the Chip component
   */
  onClick: _propTypes.default.func,
  /**
   * If the width: max-content; is used in css.
   * max-content can overflow the parent's width and break designs
   */
  maxContent: _propTypes.default.bool,
  /**
   * Icon location
   */
  leftIconUrl: _propTypes.default.string,
  /**
   * Display or not the inline block
   */
  displayInlineBlock: _propTypes.default.bool
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\chip\\chip.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\chip\\index.js", {"./chip":"F:\\metamask-extension\\ui\\components\\ui\\chip\\chip.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cchip%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _chip.default;
  }
});
var _chip = _interopRequireDefault(require("./chip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\chip\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\color-indicator\\color-indicator.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccolor-indicator%5Ccolor-indicator.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColorIndicator;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ColorIndicator({
  size = _designSystem.Size.SM,
  type = 'outlined',
  color = _designSystem.Color.iconMuted,
  borderColor,
  iconClassName
}) {
  const colorIndicatorClassName = (0, _classnames.default)('color-indicator', {
    'color-indicator--filled': type === 'filled' || Boolean(iconClassName),
    'color-indicator--partial-filled': type === 'partial-filled',
    [`color-indicator--border-color-${borderColor}`]: Boolean(borderColor),
    [`color-indicator--color-${color}`]: true,
    [`color-indicator--size-${size}`]: true
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: colorIndicatorClassName,
    "data-testid": `color-icon-${color}`
  }, iconClassName ? /*#__PURE__*/_react.default.createElement("i", {
    className: (0, _classnames.default)('color-indicator__icon', iconClassName)
  }) : /*#__PURE__*/_react.default.createElement("span", {
    className: "color-indicator__inner-circle"
  }));
}
ColorIndicator.TYPES = {
  FILLED: 'filled',
  PARTIAL: 'partial-filled',
  OUTLINE: 'outline'
};
ColorIndicator.propTypes = {
  color: _propTypes.default.oneOf(Object.values(_designSystem.Color)),
  borderColor: _propTypes.default.oneOf(Object.values(_designSystem.BorderColor)),
  size: _propTypes.default.oneOf(Object.values(_designSystem.Size)),
  iconClassName: _propTypes.default.string,
  type: _propTypes.default.oneOf(Object.values(ColorIndicator.TYPES))
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\color-indicator\\color-indicator.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\color-indicator\\index.js", {"./color-indicator":"F:\\metamask-extension\\ui\\components\\ui\\color-indicator\\color-indicator.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccolor-indicator%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _colorIndicator.default;
  }
});
var _colorIndicator = _interopRequireDefault(require("./color-indicator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\color-indicator\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\confusable\\confusable.component.js", {"../../../hooks/useI18nContext":"F:\\metamask-extension\\ui\\hooks\\useI18nContext.js","../tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","unicode-confusables":"F:\\metamask-extension\\node_modules\\unicode-confusables\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cconfusable%5Cconfusable.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _unicodeConfusables = require("unicode-confusables");
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _useI18nContext = require("../../../hooks/useI18nContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Confusable = ({
  input
}) => {
  const t = (0, _useI18nContext.useI18nContext)();
  const confusableData = (0, _react.useMemo)(() => {
    return (0, _unicodeConfusables.confusables)(input);
  }, [input]);
  return confusableData.map(({
    point,
    similarTo
  }, index) => {
    const zeroWidth = similarTo === '';
    if (similarTo === undefined) {
      return point;
    }
    return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      key: index.toString(),
      tag: "span",
      position: "top",
      title: zeroWidth ? t('confusableZeroWidthUnicode') : t('confusableUnicode', [point, similarTo])
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "confusable__point"
    }, zeroWidth ? '?' : point));
  });
};
Confusable.propTypes = {
  input: _propTypes.default.string.isRequired
};
var _default = Confusable;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\confusable\\confusable.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\confusable\\index.js", {"./confusable.component":"F:\\metamask-extension\\ui\\components\\ui\\confusable\\confusable.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cconfusable%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _confusable.default;
  }
});
var _confusable = _interopRequireDefault(require("./confusable.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\confusable\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\contract-token-values\\contract-token-values.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../hooks/useCopyToClipboard":"F:\\metamask-extension\\ui\\hooks\\useCopyToClipboard.js","../../../hooks/useI18nContext":"F:\\metamask-extension\\ui\\hooks\\useI18nContext.js","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../box/box":"F:\\metamask-extension\\ui\\components\\ui\\box\\box.js","../identicon":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\index.js","../tooltip/tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\tooltip.js","../typography/typography":"F:\\metamask-extension\\ui\\components\\ui\\typography\\typography.js","@metamask/etherscan-link":"F:\\metamask-extension\\node_modules\\@metamask\\etherscan-link\\dist\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccontract-token-values%5Ccontract-token-values.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContractTokenValues;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _etherscanLink = require("@metamask/etherscan-link");
var _box = _interopRequireDefault(require("../box/box"));
var _tooltip = _interopRequireDefault(require("../tooltip/tooltip"));
var _useI18nContext = require("../../../hooks/useI18nContext");
var _identicon = _interopRequireDefault(require("../identicon"));
var _typography = _interopRequireDefault(require("../typography/typography"));
var _designSystem = require("../../../helpers/constants/design-system");
var _useCopyToClipboard = require("../../../hooks/useCopyToClipboard");
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ContractTokenValues({
  address,
  tokenName,
  chainId,
  rpcPrefs
}) {
  const t = (0, _useI18nContext.useI18nContext)();
  const [copied, handleCopy] = (0, _useCopyToClipboard.useCopyToClipboard)();
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "contract-token-values",
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.center,
    justifyContent: _designSystem.JustifyContent.center,
    gap: 2
  }, /*#__PURE__*/_react.default.createElement(_identicon.default, {
    address: address,
    diameter: 24
  }), /*#__PURE__*/_react.default.createElement(_typography.default, {
    variant: _designSystem.TypographyVariant.H2,
    fontWeight: _designSystem.FONT_WEIGHT.BOLD,
    color: _designSystem.TextColor.textAlternative,
    marginTop: 0,
    marginBottom: 0
  }, tokenName), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    position: "top",
    title: copied ? t('copiedExclamation') : t('copyToClipboard')
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
    iconName: copied ? _componentLibrary.IconName.CopySuccess : _componentLibrary.IconName.Copy,
    color: _designSystem.Color.iconMuted,
    onClick: () => handleCopy(address),
    ariaLabel: copied ? t('copiedExclamation') : t('copyToClipboard')
  })), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    position: "top",
    title: t('openInBlockExplorer')
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
    display: _designSystem.DISPLAY.FLEX,
    iconName: _componentLibrary.IconName.Export,
    color: _designSystem.Color.iconMuted,
    onClick: () => {
      const blockExplorerTokenLink = (0, _etherscanLink.getAccountLink)(address, chainId, {
        blockExplorerUrl: (rpcPrefs === null || rpcPrefs === void 0 ? void 0 : rpcPrefs.blockExplorerUrl) ?? null
      }, null);
      global.platform.openTab({
        url: blockExplorerTokenLink
      });
    },
    ariaLabel: t('openInBlockExplorer')
  })));
}
ContractTokenValues.propTypes = {
  /**
   * Address used for generating token image
   */
  address: _propTypes.default.string,
  /**
   * Displayed the token name currently tracked in state
   */
  tokenName: _propTypes.default.string,
  /**
   * Current network chainId
   */
  chainId: _propTypes.default.string,
  /**
   * RPC prefs
   */
  rpcPrefs: _propTypes.default.object
};


      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\contract-token-values\\contract-token-values.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\currency-display\\currency-display.component.js", {"../../../../shared/constants/common":"F:\\metamask-extension\\shared\\constants\\common.ts","../../../hooks/useCurrencyDisplay":"F:\\metamask-extension\\ui\\hooks\\useCurrencyDisplay.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccurrency-display%5Ccurrency-display.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CurrencyDisplay;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useCurrencyDisplay = require("../../../hooks/useCurrencyDisplay");
var _common = require("../../../../shared/constants/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CurrencyDisplay({
  value,
  displayValue,
  'data-testid': dataTestId,
  style,
  className,
  prefix,
  prefixComponent,
  hideLabel,
  hideTitle,
  numberOfDecimals,
  denomination,
  currency,
  suffix
}) {
  const [title, parts] = (0, _useCurrencyDisplay.useCurrencyDisplay)(value, {
    displayValue,
    prefix,
    numberOfDecimals,
    hideLabel,
    denomination,
    currency,
    suffix
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('currency-display-component', className),
    "data-testid": dataTestId,
    style: style,
    title: !hideTitle && title || null
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "currency-display-component__prefix"
  }, prefixComponent), /*#__PURE__*/_react.default.createElement("span", {
    className: "currency-display-component__text"
  }, parts.prefix, parts.value), parts.suffix && /*#__PURE__*/_react.default.createElement("span", {
    className: "currency-display-component__suffix"
  }, parts.suffix));
}
CurrencyDisplay.propTypes = {
  className: _propTypes.default.string,
  currency: _propTypes.default.string,
  'data-testid': _propTypes.default.string,
  denomination: _propTypes.default.oneOf([_common.EtherDenomination.GWEI, _common.EtherDenomination.ETH]),
  displayValue: _propTypes.default.string,
  hideLabel: _propTypes.default.bool,
  hideTitle: _propTypes.default.bool,
  numberOfDecimals: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  prefix: _propTypes.default.string,
  prefixComponent: _propTypes.default.node,
  style: _propTypes.default.object,
  suffix: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  value: _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\currency-display\\currency-display.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\currency-display\\index.js", {"./currency-display.component":"F:\\metamask-extension\\ui\\components\\ui\\currency-display\\currency-display.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ccurrency-display%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _currencyDisplay.default;
  }
});
var _currencyDisplay = _interopRequireDefault(require("./currency-display.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\currency-display\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\definition-list\\definition-list.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\index.js","../typography":"F:\\metamask-extension\\ui\\components\\ui\\typography\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdefinition-list%5Cdefinition-list.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DefinitionList;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = require("lodash");
var _typography = _interopRequireDefault(require("../typography"));
var _designSystem = require("../../../helpers/constants/design-system");
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MARGIN_MAP = {
  [_designSystem.Size.XS]: 0,
  [_designSystem.Size.SM]: 2,
  [_designSystem.Size.MD]: 4,
  [_designSystem.Size.LG]: 6,
  [_designSystem.Size.XL]: 8
};
function DefinitionList({
  dictionary,
  termTypography = {},
  definitionTypography = {},
  tooltips = {},
  gapSize = _designSystem.Size.SM
}) {
  return /*#__PURE__*/_react.default.createElement("dl", {
    className: "definition-list"
  }, Object.entries(dictionary).map(([term, definition]) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: `definition-for-${term}`
  }, /*#__PURE__*/_react.default.createElement(_typography.default, _extends({
    variant: _designSystem.TypographyVariant.H6,
    fontWeight: _designSystem.FONT_WEIGHT.BOLD
  }, termTypography, {
    boxProps: {
      marginTop: 0,
      marginBottom: 1
    },
    className: "definition-list__term",
    as: "dt"
  }), term, tooltips[term] && /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: tooltips[term],
    position: "top",
    containerClassName: "definition-list__tooltip-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    name: _componentLibrary.IconName.Info,
    size: _componentLibrary.IconSize.Sm,
    marginLeft: 1,
    color: _designSystem.IconColor.iconDefault
  }))), /*#__PURE__*/_react.default.createElement(_typography.default, _extends({
    variant: _designSystem.TypographyVariant.H6,
    color: _designSystem.TextColor.textAlternative
  }, definitionTypography, {
    boxProps: {
      marginTop: 0,
      marginBottom: MARGIN_MAP[gapSize]
    },
    className: "definition-list__definition",
    overflowWrap: _designSystem.OVERFLOW_WRAP.BREAK_WORD,
    as: "dd"
  }), definition))));
}
DefinitionList.propTypes = {
  gapSize: _propTypes.default.oneOf(Object.values(_designSystem.Size)),
  dictionary: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  tooltips: _propTypes.default.objectOf(_propTypes.default.string),
  termTypography: _propTypes.default.shape({
    ...(0, _lodash.omit)(_designSystem.TypographyVariant.propTypes, ['tag', 'className', 'boxProps'])
  }),
  definitionTypography: _propTypes.default.shape({
    ...(0, _lodash.omit)(_designSystem.TypographyVariant.propTypes, ['tag', 'className', 'boxProps'])
  })
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\definition-list\\definition-list.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\definition-list\\index.js", {"./definition-list":"F:\\metamask-extension\\ui\\components\\ui\\definition-list\\definition-list.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdefinition-list%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _definitionList.default;
  }
});
var _definitionList = _interopRequireDefault(require("./definition-list"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\definition-list\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\deprecated-test-networks\\deprecated-test-networks.js", {"../../../ducks/metamask/metamask":"F:\\metamask-extension\\ui\\ducks\\metamask\\metamask.js","../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../hooks/useI18nContext":"F:\\metamask-extension\\ui\\hooks\\useI18nContext.js","../../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../actionable-message/actionable-message":"F:\\metamask-extension\\ui\\components\\ui\\actionable-message\\actionable-message.js","../box/box":"F:\\metamask-extension\\ui\\components\\ui\\box\\box.js","../button":"F:\\metamask-extension\\ui\\components\\ui\\button\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdeprecated-test-networks%5Cdeprecated-test-networks.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DeprecatedTestNetworks;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _button = _interopRequireDefault(require("../button"));
var _useI18nContext = require("../../../hooks/useI18nContext");
var _designSystem = require("../../../helpers/constants/design-system");
var _box = _interopRequireDefault(require("../box/box"));
var _actionableMessage = _interopRequireDefault(require("../actionable-message/actionable-message"));
var _selectors = require("../../../selectors");
var _metamask = require("../../../ducks/metamask/metamask");
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function DeprecatedTestNetworks() {
  const currentChainID = (0, _reactRedux.useSelector)(_selectors.getCurrentChainId);
  const [isShowingWarning, setIsShowingWarning] = (0, _react.useState)(false);
  const completedOnboarding = (0, _reactRedux.useSelector)(_metamask.getCompletedOnboarding);
  const t = (0, _useI18nContext.useI18nContext)();
  (0, _react.useEffect)(() => {
    if (completedOnboarding && (currentChainID === '0x3' || currentChainID === '0x2a' || currentChainID === '0x4')) {
      setIsShowingWarning(true);
    } else {
      setIsShowingWarning(false);
    }
  }, [currentChainID, completedOnboarding]);
  return isShowingWarning && /*#__PURE__*/_react.default.createElement(_actionableMessage.default, {
    type: "warning",
    className: "deprecated-test-networks",
    withRightButton: true,
    message: /*#__PURE__*/_react.default.createElement(_box.default, {
      display: _designSystem.DISPLAY.FLEX,
      className: "deprecated-test-networks__content"
    }, /*#__PURE__*/_react.default.createElement(_box.default, {
      marginRight: 2,
      color: _designSystem.Color.warningDefault
    }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
      name: _componentLibrary.IconName.Info,
      size: _componentLibrary.IconSize.Sm
    })), /*#__PURE__*/_react.default.createElement(_box.default, {
      justifyContent: _designSystem.JustifyContent.spaceBetween
    }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
      variant: _designSystem.TextVariant.bodySm,
      as: "h6",
      marginTop: 0,
      marginBottom: 0
    }, t('deprecatedTestNetworksMsg'), /*#__PURE__*/_react.default.createElement(_button.default, {
      className: "deprecated-test-networks__content__inline-link",
      type: "link",
      target: "_blank",
      href: "https://blog.ethereum.org/2022/06/21/testnet-deprecation/"
    }, ' ', t('deprecatedTestNetworksLink'))), /*#__PURE__*/_react.default.createElement(_box.default, {
      className: "deprecated-test-networks__content__close",
      marginLeft: 2,
      marginTop: 0,
      color: _designSystem.Color.iconAlternative,
      onClick: () => setIsShowingWarning(false)
    })))
  });
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\deprecated-test-networks\\deprecated-test-networks.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\dialog\\index.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdialog%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dialog;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Dialog(props) {
  const {
    children,
    type,
    className,
    onClick
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('dialog', className, {
      'dialog--message': type === 'message',
      'dialog--error': type === 'error',
      'dialog--warning': type === 'warning'
    }),
    "data-testid": "dialog-message",
    onClick: onClick
  }, children);
}
Dialog.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  type: _propTypes.default.oneOf(['message', 'error', 'warning']),
  onClick: _propTypes.default.func
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\dialog\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\disclosure\\disclosure.js", {"../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdisclosure%5Cdisclosure.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Disclosure = ({
  children,
  title,
  size
}) => {
  const disclosureFooterEl = (0, _react.useRef)(null);
  const [open, setOpen] = (0, _react.useState)(false);
  const scrollToBottom = () => {
    disclosureFooterEl && disclosureFooterEl.current && disclosureFooterEl.current.scrollIntoView({
      behavior: 'smooth'
    });
  };
  (0, _react.useEffect)(() => {
    if (open) {
      scrollToBottom();
    }
  }, [open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "disclosure",
    onClick: () => setOpen(state => !state)
  }, title ? /*#__PURE__*/_react.default.createElement("details", null, /*#__PURE__*/_react.default.createElement("summary", {
    className: "disclosure__summary"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    className: "disclosure__summary--icon",
    name: _componentLibrary.IconName.Add,
    size: _componentLibrary.IconSize.Sm,
    marginInlineEnd: 2
  }), title), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('disclosure__content', size)
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    ref: disclosureFooterEl,
    className: "disclosure__footer"
  })) : children);
};
Disclosure.propTypes = {
  children: _propTypes.default.node.isRequired,
  title: _propTypes.default.string,
  size: _propTypes.default.string
};
Disclosure.defaultProps = {
  size: 'normal',
  title: null
};
var _default = Disclosure;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\disclosure\\disclosure.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\disclosure\\index.js", {"./disclosure":"F:\\metamask-extension\\ui\\components\\ui\\disclosure\\disclosure.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdisclosure%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _disclosure.default;
  }
});
var _disclosure = _interopRequireDefault(require("./disclosure"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\disclosure\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\dropdown\\dropdown.js", {"../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdropdown%5Cdropdown.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Dropdown = ({
  className,
  disabled = false,
  onChange,
  options,
  selectedOption = '',
  style,
  title,
  'data-testid': dataTestId
}) => {
  const _onChange = (0, _react.useCallback)(event => {
    event.preventDefault();
    event.stopPropagation();
    onChange(event.target.value);
  }, [onChange]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('dropdown', className)
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "dropdown__select",
    "data-testid": dataTestId,
    disabled: disabled,
    title: title,
    onChange: _onChange,
    style: style,
    value: selectedOption
  }, options.map(option => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: option.value,
      value: option.value
    }, option.name || option.value);
  })), /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    name: _componentLibrary.IconName.ArrowDown,
    size: _componentLibrary.IconSize.Sm,
    className: "dropdown__icon-caret-down"
  }));
};
Dropdown.propTypes = {
  /**
   * Additional css className to add to root of Dropdown component
   */
  className: _propTypes.default.string,
  /**
   * Disable dropdown by setting to true
   */
  disabled: _propTypes.default.bool,
  /**
   * Title of the dropdown
   */
  title: _propTypes.default.string,
  /**
   * On options change handler
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * Predefined options for component
   */
  options: _propTypes.default.arrayOf(_propTypes.default.exact({
    name: _propTypes.default.string,
    value: _propTypes.default.string.isRequired
  })).isRequired,
  /**
   * Selected options of dropdown
   */
  selectedOption: _propTypes.default.string,
  /**
   * Add inline style for the component
   */
  style: _propTypes.default.object,
  /**
   * Unit testing test id
   */
  'data-testid': _propTypes.default.string
};
var _default = Dropdown;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\dropdown\\dropdown.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\dropdown\\index.js", {"./dropdown":"F:\\metamask-extension\\ui\\components\\ui\\dropdown\\dropdown.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cdropdown%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _dropdown.default;
  }
});
var _dropdown = _interopRequireDefault(require("./dropdown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\dropdown\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\editable-label\\editable-label.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../helpers/utils/accounts":"F:\\metamask-extension\\ui\\helpers\\utils\\accounts.js","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../box/box":"F:\\metamask-extension\\ui\\components\\ui\\box\\box.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ceditable-label%5Ceditable-label.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("../../../helpers/constants/design-system");
var _accounts = require("../../../helpers/utils/accounts");
var _componentLibrary = require("../../component-library");
var _box = _interopRequireDefault(require("../box/box"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class EditableLabel extends _react.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      isEditing: false,
      value: this.props.defaultValue || ''
    });
  }
  async handleSubmit(isValidAccountName) {
    if (!isValidAccountName) {
      return;
    }
    await this.props.onSubmit(this.state.value);
    this.setState({
      isEditing: false
    });
  }
  renderEditing() {
    const {
      isValidAccountName,
      errorMessage
    } = (0, _accounts.getAccountNameErrorMessage)(this.props.accounts, this.context, this.state.value, this.props.defaultValue);
    return /*#__PURE__*/_react.default.createElement(_box.default, {
      className: (0, _classnames.default)('editable-label', this.props.className),
      display: _designSystem.DISPLAY.FLEX,
      gap: 3
    }, /*#__PURE__*/_react.default.createElement(_componentLibrary.FormTextField, {
      required: true,
      value: this.state.value,
      onKeyPress: event => {
        if (event.key === 'Enter') {
          this.handleSubmit(isValidAccountName);
        }
      },
      onChange: event => {
        this.setState({
          value: event.target.value
        });
      },
      "data-testid": "editable-input",
      error: !isValidAccountName,
      helpText: errorMessage,
      autoFocus: true,
      placeholder: this.context.t('accountName')
    }), /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
      iconName: _componentLibrary.IconName.Check,
      onClick: () => this.handleSubmit(isValidAccountName)
    }));
  }
  renderReadonly() {
    return /*#__PURE__*/_react.default.createElement(_box.default, {
      display: _designSystem.DISPLAY.FLEX,
      alignItems: _designSystem.AlignItems.center,
      gap: 3
    }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
      variant: _designSystem.TextVariant.bodyLgMedium
    }, this.state.value), /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
      iconName: _componentLibrary.IconName.Edit,
      ariaLabel: this.context.t('edit'),
      "data-testid": "editable-label-button",
      onClick: () => this.setState({
        isEditing: true
      }),
      color: _designSystem.Color.iconDefault
    }));
  }
  render() {
    return this.state.isEditing ? this.renderEditing() : this.renderReadonly();
  }
}
exports.default = EditableLabel;
_defineProperty(EditableLabel, "propTypes", {
  onSubmit: _propTypes.default.func.isRequired,
  defaultValue: _propTypes.default.string,
  className: _propTypes.default.string,
  accounts: _propTypes.default.array
});
_defineProperty(EditableLabel, "contextTypes", {
  t: _propTypes.default.func
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\editable-label\\editable-label.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\editable-label\\index.js", {"./editable-label":"F:\\metamask-extension\\ui\\components\\ui\\editable-label\\editable-label.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ceditable-label%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _editableLabel.default;
  }
});
var _editableLabel = _interopRequireDefault(require("./editable-label"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\editable-label\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\error-message\\error-message.component.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cerror-message%5Cerror-message.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _componentLibrary = require("../../component-library");
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated - Please use ActionableMessage type danger
 * @see ActionableMessage
 * @param {object} props
 * @param {string} props.errorMessage
 * @param {string} props.errorKey
 * @param {object} context
 */
const ErrorMessage = (props, context) => {
  const {
    errorMessage,
    errorKey
  } = props;
  const error = errorKey ? context.t(errorKey) : errorMessage;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "error-message"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    className: "error-message__icon",
    name: _componentLibrary.IconName.Warning,
    size: _componentLibrary.IconSize.Sm,
    color: _designSystem.IconColor.errorDefault,
    marginRight: 2
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "error-message__text"
  }, error));
};
ErrorMessage.propTypes = {
  /**
   * The text content for the error message
   */
  errorMessage: _propTypes.default.string,
  /**
   * The translate key for localization. Uses context.t(). Will override the error message
   */
  errorKey: _propTypes.default.string
};
ErrorMessage.contextTypes = {
  t: _propTypes.default.func
};
var _default = ErrorMessage;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\error-message\\error-message.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\error-message\\index.js", {"./error-message.component":"F:\\metamask-extension\\ui\\components\\ui\\error-message\\error-message.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cerror-message%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _errorMessage.default;
  }
});
var _errorMessage = _interopRequireDefault(require("./error-message.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\error-message\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\export-text-container\\export-text-container.component.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../hooks/useCopyToClipboard":"F:\\metamask-extension\\ui\\hooks\\useCopyToClipboard.js","../../../hooks/useI18nContext":"F:\\metamask-extension\\ui\\hooks\\useI18nContext.js","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../box/box":"F:\\metamask-extension\\ui\\components\\ui\\box\\box.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cexport-text-container%5Cexport-text-container.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useI18nContext = require("../../../hooks/useI18nContext");
var _useCopyToClipboard = require("../../../hooks/useCopyToClipboard");
var _designSystem = require("../../../helpers/constants/design-system");
var _box = _interopRequireDefault(require("../box/box"));
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ExportTextContainer({
  text = '',
  onClickCopy = null
}) {
  const ONE_MINUTE = 1000 * 60;
  const t = (0, _useI18nContext.useI18nContext)();
  const [copied, handleCopy] = (0, _useCopyToClipboard.useCopyToClipboard)(ONE_MINUTE);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    display: _designSystem.DISPLAY.FLEX,
    justifyContent: _designSystem.JustifyContent.center,
    flexDirection: _designSystem.FLEX_DIRECTION.COLUMN,
    alignItems: _designSystem.AlignItems.center,
    borderColor: _designSystem.BorderColor.borderDefault,
    borderRadius: _designSystem.BorderRadius.MD,
    padding: 4,
    gap: 4
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    display: _designSystem.DISPLAY.FLEX,
    justifyContent: _designSystem.JustifyContent.CENTER,
    className: "notranslate",
    variant: _designSystem.TextVariant.bodyLgMedium,
    "data-testid": "srp_text"
  }, text), /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonSecondary, {
    className: "export-text-container__button",
    block: true,
    onClick: () => {
      if (onClickCopy) {
        onClickCopy();
      }
      handleCopy(text);
    }
  }, copied ? t('copiedExclamation') : t('copyToClipboard')));
}
ExportTextContainer.propTypes = {
  text: _propTypes.default.string,
  onClickCopy: _propTypes.default.func
};
var _default = /*#__PURE__*/_react.default.memo(ExportTextContainer);
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\export-text-container\\export-text-container.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\export-text-container\\index.js", {"./export-text-container.component":"F:\\metamask-extension\\ui\\components\\ui\\export-text-container\\export-text-container.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cexport-text-container%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _exportTextContainer = _interopRequireDefault(require("./export-text-container.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _exportTextContainer.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\export-text-container\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\form-field\\form-field.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../info-tooltip/info-tooltip":"F:\\metamask-extension\\ui\\components\\ui\\info-tooltip\\info-tooltip.js","../numeric-input/numeric-input.component":"F:\\metamask-extension\\ui\\components\\ui\\numeric-input\\numeric-input.component.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cform-field%5Cform-field.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormField;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _designSystem = require("../../../helpers/constants/design-system");
var _numericInput = _interopRequireDefault(require("../numeric-input/numeric-input.component"));
var _infoTooltip = _interopRequireDefault(require("../info-tooltip/info-tooltip"));
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * @deprecated The `<FormField />` component has been deprecated in favor of the new `<FormTextField>` component from the component-library.
 * Please update your code to use the new `<FormTextField>` component instead, which can be found at ui/components/component-library/form-text-field/form-text-field.js.
 * You can find documentation for the new FormTextField component in the MetaMask Storybook:
 * {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-formtextfield--docs}
 * If you would like to help with the replacement of the old FormField component, please submit a pull request against this GitHub issue:
 * {@link https://github.com/MetaMask/metamask-extension/issues/19737}
 */

function FormField({
  dataTestId,
  titleText = '',
  TitleTextCustomComponent,
  titleUnit = '',
  TitleUnitCustomComponent,
  tooltipText = '',
  TooltipCustomComponent,
  titleDetail = '',
  titleDetailWrapperProps,
  titleHeadingWrapperProps,
  error,
  onChange = undefined,
  value = 0,
  numeric,
  detailText = '',
  autoFocus = false,
  password = false,
  allowDecimals = false,
  disabled = false,
  placeholder,
  warning,
  passwordStrength,
  passwordStrengthText,
  id,
  inputProps,
  wrappingLabelProps,
  inputRef
}) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('form-field', {
      'form-field__row--error': error
    })
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Box, _extends({
    as: "label"
  }, wrappingLabelProps), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field__heading"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Box, _extends({
    className: "form-field__heading-title",
    display: _designSystem.Display.Flex,
    alignItems: _designSystem.AlignItems.baseline
  }, titleHeadingWrapperProps), TitleTextCustomComponent || titleText && /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    tag: "label",
    htmlFor: id,
    variant: _designSystem.TextVariant.bodySmBold,
    as: "h6",
    display: _designSystem.Display.InlineBlock
  }, titleText), TitleUnitCustomComponent || titleUnit && /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    tag: _designSystem.TextVariant.bodySm,
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    color: _designSystem.TextColor.textAlternative,
    display: _designSystem.Display.InlineBlock
  }, titleUnit), TooltipCustomComponent || tooltipText && /*#__PURE__*/_react.default.createElement(_infoTooltip.default, {
    position: "top",
    contentText: tooltipText
  })), titleDetail && /*#__PURE__*/_react.default.createElement(_componentLibrary.Box, _extends({
    className: "form-field__heading-detail",
    textAlign: _designSystem.TextAlign.End,
    marginRight: 2
  }, titleDetailWrapperProps), titleDetail)), numeric ? /*#__PURE__*/_react.default.createElement(_numericInput.default, {
    error: error,
    onChange: onChange,
    value: value,
    detailText: detailText,
    autoFocus: autoFocus,
    allowDecimals: allowDecimals,
    disabled: disabled,
    dataTestId: dataTestId,
    placeholder: placeholder,
    id: id,
    inputRef: inputRef
  }) : /*#__PURE__*/_react.default.createElement("input", _extends({
    className: (0, _classnames.default)('form-field__input', {
      'form-field__input--error': error,
      'form-field__input--warning': warning
    }),
    onChange: e => onChange(e.target.value),
    value: value,
    type: password ? 'password' : 'text',
    autoFocus: autoFocus,
    disabled: disabled,
    "data-testid": dataTestId,
    placeholder: placeholder,
    id: id,
    ref: inputRef
  }, inputProps)), error && /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    color: _designSystem.TextColor.errorDefault,
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    className: "form-field__error"
  }, error), warning && /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    color: _designSystem.TextColor.textAlternative,
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    className: "form-field__warning"
  }, warning), passwordStrength && /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    color: _designSystem.TextColor.textDefault,
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    className: "form-field__password-strength"
  }, passwordStrength), passwordStrengthText && /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    color: _designSystem.TextColor.textAlternative,
    variant: _designSystem.TextVariant.bodyXs,
    as: "h6",
    className: "form-field__password-strength-text"
  }, passwordStrengthText)));
}
FormField.propTypes = {
  /**
   * Identifier for testing purpose
   */
  dataTestId: _propTypes.default.string,
  /**
   * Form Fields Title
   */
  titleText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  /**
   * A custom component to replace the title text Typography component
   * titleText will be ignored if this is provided
   */
  TitleTextCustomComponent: _propTypes.default.node,
  /**
   * Show unit (eg. ETH)
   */
  titleUnit: _propTypes.default.string,
  /**
   * A custom component to replace the title unit Typography component
   * titleUnit will be ignored if this is provided
   */
  TitleUnitCustomComponent: _propTypes.default.node,
  /**
   * Add Tooltip and text content
   */
  tooltipText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  /**
   * A custom component to replace the tooltip component
   * tooltipText will be ignored if this is provided
   */
  TooltipCustomComponent: _propTypes.default.node,
  /**
   * Show content (text, image, component) in title
   */
  titleDetail: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  /**
   * Props to pass to wrapping Box component of the titleDetail component
   * Accepts all props of the Box component
   */
  titleDetailWrapperProps: _propTypes.default.shape({
    ..._componentLibrary.Box.propTypes
  }),
  /**
   * Props to pass to wrapping Box component of the titleHeading component
   * Accepts all props of the Box component
   */
  titleHeadingWrapperProps: _propTypes.default.shape({
    ..._componentLibrary.Box.propTypes
  }),
  /**
   * Show error message
   */
  error: _propTypes.default.string,
  /**
   * Show warning message
   */
  warning: _propTypes.default.string,
  /**
   * Handler when fields change
   */
  onChange: _propTypes.default.func,
  /**
   * Field value
   */
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Show detail text if field mode is numeric
   */
  detailText: _propTypes.default.string,
  /**
   * Set autofocus on render
   */
  autoFocus: _propTypes.default.bool,
  /**
   * Set numeric mode, the default is text
   */
  numeric: _propTypes.default.bool,
  /**
   * Set password mode
   */
  password: _propTypes.default.bool,
  /**
   * Allow decimals on the field
   */
  allowDecimals: _propTypes.default.bool,
  /**
   * Check if the form disabled
   */
  disabled: _propTypes.default.bool,
  /**
   * Set the placeholder text for the input field
   */
  placeholder: _propTypes.default.string,
  /**
   * Show password strength according to the score
   */
  passwordStrength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  /**
   * Show password strength description
   */
  passwordStrengthText: _propTypes.default.string,
  /**
   * The id of the input element. Should be used when the wrapping label is changed to a div to ensure accessibility.
   */
  id: _propTypes.default.string,
  /**
   * Any additional input attributes or overrides not provided by exposed props
   */
  inputProps: _propTypes.default.object,
  /**
   * The FormField is wrapped in a Box component that is rendered as a <label/> using the polymorphic "as" prop.
   * This object allows you to override the rendering of the label by using the wrapperProps={{ as: 'div' }} prop.
   * If used ensure the id prop is set on the input and a label element is present using htmlFor with the same id to ensure accessibility.
   */
  wrappingLabelProps: _propTypes.default.object,
  /**
   * ref for input component
   */
  inputRef: _propTypes.default.object
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\form-field\\form-field.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\form-field\\index.js", {"./form-field":"F:\\metamask-extension\\ui\\components\\ui\\form-field\\form-field.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cform-field%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _formField.default;
  }
});
var _formField = _interopRequireDefault(require("./form-field"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\form-field\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\hex-to-decimal\\hex-to-decimal.component.js", {"../../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Chex-to-decimal%5Chex-to-decimal.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _conversion = require("../../../../shared/modules/conversion.utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class HexToDecimal extends _react.PureComponent {
  render() {
    const {
      className,
      value
    } = this.props;
    const decimalValue = (0, _conversion.hexToDecimal)(value);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, decimalValue);
  }
}
exports.default = HexToDecimal;
_defineProperty(HexToDecimal, "propTypes", {
  className: _propTypes.default.string,
  value: _propTypes.default.string
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\hex-to-decimal\\hex-to-decimal.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\hex-to-decimal\\index.js", {"./hex-to-decimal.component":"F:\\metamask-extension\\ui\\components\\ui\\hex-to-decimal\\hex-to-decimal.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Chex-to-decimal%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _hexToDecimal.default;
  }
});
var _hexToDecimal = _interopRequireDefault(require("./hex-to-decimal.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\hex-to-decimal\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon-border\\icon-border.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon-border%5Cicon-border.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconBorder;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated The `<IconBorder />` component has been deprecated in favor of the `<AvatarBase />` component from the component-library.
 * Please update your code to use the new `<AvatarBase>` component instead, which can be found at ./ui/components/component-library/avatar-base/avatar-base.js.
 * You can find documentation for the new AvatarBase component in the MetaMask Storybook:
 * {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-avatarbase--docs}
 * If you would like to help with the replacement of the old IconBorder component, please submit a pull request
 */

function IconBorder({
  children,
  size,
  className
}) {
  const borderStyle = {
    height: `${size}px`,
    width: `${size}px`
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('icon-border', className),
    style: borderStyle
  }, children);
}
IconBorder.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  size: _propTypes.default.number.isRequired
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon-border\\icon-border.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon-border\\index.js", {"./icon-border":"F:\\metamask-extension\\ui\\components\\ui\\icon-border\\icon-border.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon-border%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _iconBorder.default;
  }
});
var _iconBorder = _interopRequireDefault(require("./icon-border"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon-border\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon-button\\icon-button.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../tooltip/tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\tooltip.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon-button%5Cicon-button.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _componentLibrary = require("../../component-library");
var _designSystem = require("../../../helpers/constants/design-system");
var _tooltip = _interopRequireDefault(require("../tooltip/tooltip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const defaultRender = inner => inner;
function IconButton({
  onClick,
  Icon,
  disabled,
  label,
  tooltipRender,
  className,
  ...props
}) {
  const renderWrapper = tooltipRender ?? defaultRender;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _classnames.default)('icon-button', className, {
      'icon-button--disabled': disabled
    }),
    "data-testid": props['data-testid'] ?? undefined,
    onClick: onClick,
    disabled: disabled
  }, renderWrapper( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-button__circle"
  }, Icon), /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    ellipsis: true,
    variant: _designSystem.TextVariant.bodySm
  }, label.length > 12 ? /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: label
  }, label) : label))));
}
IconButton.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  Icon: _propTypes.default.object.isRequired,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  tooltipRender: _propTypes.default.func,
  className: _propTypes.default.string,
  'data-testid': _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon-button\\icon-button.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon-button\\index.js", {"./icon-button":"F:\\metamask-extension\\ui\\components\\ui\\icon-button\\icon-button.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon-button%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _iconButton.default;
  }
});
var _iconButton = _interopRequireDefault(require("./icon-button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon-button\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon-with-fallback\\icon-with-fallback.component.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon-with-fallback%5Cicon-with-fallback.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const IconWithFallback = ({
  name = '',
  icon = null,
  size,
  className,
  fallbackClassName,
  wrapperClassName,
  ...props
}) => {
  const [iconError, setIconError] = (0, _react.useState)(false);
  const style = size ? {
    height: `${size}px`,
    width: `${size}px`
  } : {};
  const handleOnError = () => {
    setIconError(true);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(wrapperClassName)
  }, !iconError && icon ? /*#__PURE__*/_react.default.createElement("img", _extends({
    onError: handleOnError,
    src: icon,
    style: style,
    className: className,
    alt: name || 'icon'
  }, props)) : /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('icon-with-fallback__fallback', fallbackClassName)
  }, (name === null || name === void 0 ? void 0 : name.charAt(0).toUpperCase()) || ''));
};
IconWithFallback.propTypes = {
  /**
   * The img src of the icon
   */
  icon: _propTypes.default.string,
  /**
   * The name of the icon also used for the alt attribute of the image
   */
  name: _propTypes.default.string,
  /**
   * The size of the icon. Recommended sizes adhere to 8px grid: 16, 24, 32, 40
   */
  size: _propTypes.default.number,
  /**
   * className to apply to the image tag
   */
  className: _propTypes.default.string,
  /**
   * className to apply to the div that wraps the icon
   */
  wrapperClassName: _propTypes.default.string,
  /**
   * Additional className to apply to the fallback span tag
   */
  fallbackClassName: _propTypes.default.string
};
var _default = IconWithFallback;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon-with-fallback\\icon-with-fallback.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon-with-fallback\\index.js", {"./icon-with-fallback.component":"F:\\metamask-extension\\ui\\components\\ui\\icon-with-fallback\\icon-with-fallback.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon-with-fallback%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _iconWithFallback.default;
  }
});
var _iconWithFallback = _interopRequireDefault(require("./icon-with-fallback.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon-with-fallback\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\approve-icon.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Capprove-icon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const Approve = ({
  className,
  size,
  color
}) => /*#__PURE__*/_react.default.createElement("svg", {
  className: className,
  width: size,
  height: size,
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z",
  stroke: color
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M5.34426 16.0923C5.15708 16.2694 5.15656 16.5672 5.34311 16.745L9.49708 20.7032C9.67134 20.8692 9.94541 20.8687 10.1191 20.7021L10.682 20.1619C10.867 19.9844 10.8665 19.6883 10.6808 19.5114L6.53084 15.557C6.35747 15.3918 6.08509 15.3914 5.91113 15.556L5.34426 16.0923ZM24.0891 10.2959C23.9152 10.1303 23.6419 10.1303 23.4681 10.2961L14.9882 18.3839C14.8143 18.5498 14.5407 18.5497 14.3668 18.3837L11.4072 15.5567C11.2343 15.3916 10.9625 15.3905 10.7882 15.5542L10.2154 16.0924C10.0272 16.2692 10.0261 16.5679 10.2131 16.7461L14.367 20.7042C14.5408 20.8698 14.814 20.8698 14.9878 20.7042L24.6581 11.4897C24.8442 11.3124 24.8442 11.0155 24.6581 10.8382L24.0891 10.2959ZM19.7905 11.4886C19.9761 11.3117 19.9767 11.0156 19.7916 10.8381L19.2288 10.2979C19.0551 10.1313 18.781 10.1308 18.6068 10.2968L13.799 14.878C13.6125 15.0557 13.613 15.3535 13.8002 15.5306L14.367 16.067C14.541 16.2316 14.8134 16.2311 14.9868 16.0659L19.7905 11.4886Z",
  fill: color
}));
Approve.defaultProps = {
  className: undefined
};
Approve.propTypes = {
  /**
   * Additional className
   */
  className: _propTypes.default.string,
  /**
   * Size of the icon should adhere to 8px grid. e.g: 8, 16, 24, 32, 40
   */
  size: _propTypes.default.number.isRequired,
  /**
   * Color of the icon should be a valid design system color and is required
   */
  color: _propTypes.default.string.isRequired
};
var _default = Approve;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\approve-icon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\icon-eye-slash.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Cicon-eye-slash.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const IconEyeSlash = ({
  size = 24,
  color = 'currentColor',
  ariaLabel,
  className
}) =>
/*#__PURE__*/
// This SVG is copied from `@fortawesome/fontawesome-free@5.13.0/regular/eye-slash.svg`.
_react.default.createElement("svg", {
  width: size,
  height: size,
  fill: color,
  className: className,
  "aria-label": ariaLabel,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"
}));
IconEyeSlash.propTypes = {
  /**
   * The size of the Icon follows an 8px grid 2 = 16px, 3 = 24px etc
   */
  size: _propTypes.default.number,
  /**
   * The color of the icon accepts design token css variables
   */
  color: _propTypes.default.string,
  /**
   * An additional className to assign the Icon
   */
  className: _propTypes.default.string,
  /**
   * The aria-label of the icon for accessibility purposes
   */
  ariaLabel: _propTypes.default.string
};
var _default = IconEyeSlash;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\icon-eye-slash.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\icon-eye.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Cicon-eye.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const IconEye = ({
  size = 24,
  color = 'currentColor',
  ariaLabel,
  className
}) =>
/*#__PURE__*/
// This SVG copied from `@fortawesome/fontawesome-free@5.13.0/regular/eye.svg`.
_react.default.createElement("svg", {
  width: size,
  height: size,
  fill: color,
  className: className,
  "aria-label": ariaLabel,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
}));
IconEye.propTypes = {
  /**
   * The size of the Icon follows an 8px grid 2 = 16px, 3 = 24px etc
   */
  size: _propTypes.default.number,
  /**
   * The color of the icon accepts design token css variables
   */
  color: _propTypes.default.string,
  /**
   * An additional className to assign the Icon
   */
  className: _propTypes.default.string,
  /**
   * The aria-label of the icon for accessibility purposes
   */
  ariaLabel: _propTypes.default.string
};
var _default = IconEye;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\icon-eye.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\icon-token-search.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Cicon-token-search.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const IconTokenSearch = ({
  size = 24,
  color = 'currentColor',
  ariaLabel,
  className
}) => /*#__PURE__*/_react.default.createElement("svg", {
  width: size,
  height: size,
  fill: color,
  className: className,
  "aria-label": ariaLabel,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "m233 103c82 0 151 40 152 88-1 47-70 87-152 87-83 0-152-40-152-87 0-48 69-88 152-88z m0 212c-76 0-141-34-151-76 28 34 84 57 151 57 66 0 123-23 150-57-10 42-75 76-150 76z m0 110c-76 0-141-34-151-77 28 35 84 58 151 58 27 0 53-4 76-12 4-1 6-5 6-9 0 0-1-1-1-1 0-5-5-8-10-7-21 7-46 11-71 11-76 0-141-34-151-76 28 34 84 57 151 57 28 0 55-4 78-12 3-1 5-3 6-6l0 0c1-7-4-13-11-11-22 7-47 12-73 12-76 0-141-34-151-77 28 34 84 58 151 58 66 0 123-24 150-58l0 20c0 5 4 10 9 10 5 0 9-5 9-10 0-44 0-104 0-104 0 0 0 0 0 0 0 0 0-1 0-1l0 0c-1-59-74-105-168-105-95 0-168 46-169 105l0 0c0 0 0 1 0 1 0 0 0 0 0 0l0 36 0 0c0 0 0 1 0 1 0 11 0 23 0 35l0 0c0 1 0 3 0 4 0 11 0 23 0 33l0 0c0 2 0 3 0 5l0 32 0 0c0 2 0 4 0 5l0 1c0 1 1 2 1 3 0 1 0 1 0 2 0 1 0 2 1 3 0 1 0 1 0 2 0 1 0 1 0 2 10 35 46 64 96 78l0 0c2 0 4 1 5 1 21 6 43 9 66 9 23 0 45-3 65-9 2 0 3-1 5-1 7-2 13-4 19-6 5-2 6-9 4-13l-1-1c-1-1-2-3-4-3-2-1-4-1-6 0-24 9-52 15-82 15m211 0l-23-24c6-8 9-18 9-29 1-33-30-59-62-48-17 6-29 22-32 41-1 7 0 15 1 22 2 7 6 13 10 19 5 5 10 10 17 13 6 3 13 4 20 4 8 0 17-3 24-8l23 25c1 0 2 1 3 2 1 0 2 0 3 0 2 0 3 0 4 0 1-1 2-2 3-2 1-1 2-2 2-4 1-1 1-2 1-3 0-2 0-3-1-4 0-1-1-3-2-4z m-94-53c0-19 15-35 34-35 18 0 33 15 33 35 0 5-1 10-3 14-1 4-4 8-7 11-3 4-7 6-11 8-4 2-8 3-12 3-20 0-34-16-34-36z"
}));
IconTokenSearch.propTypes = {
  /**
   * The size of the Icon follows an 8px grid 2 = 16px, 3 = 24px etc
   */
  size: _propTypes.default.number,
  /**
   * The color of the icon accepts design token css variables
   */
  color: _propTypes.default.string,
  /**
   * An additional className to assign the Icon
   */
  className: _propTypes.default.string,
  /**
   * The aria-label of the icon for accessibility purposes
   */
  ariaLabel: _propTypes.default.string
};
var _default = IconTokenSearch;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\icon-token-search.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\info-icon-inverted.component.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Cinfo-icon-inverted.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoIconInverted;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

function InfoIconInverted({
  severity
}) {
  const className = (0, _classnames.default)('info-icon', {
    'info-icon--success': severity === _designSystem.SEVERITIES.SUCCESS,
    'info-icon--warning': severity === _designSystem.SEVERITIES.WARNING,
    'info-icon--danger': severity === _designSystem.SEVERITIES.DANGER,
    'info-icon--info': severity === _designSystem.SEVERITIES.INFO
  });
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: className,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.75 8C15.75 3.75 12.25 0.25 8 0.25C3.71875 0.25 0.25 3.75 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.25 15.75 15.75 12.2812 15.75 8ZM8 9.5625C8.78125 9.5625 9.4375 10.2188 9.4375 11C9.4375 11.8125 8.78125 12.4375 8 12.4375C7.1875 12.4375 6.5625 11.8125 6.5625 11C6.5625 10.2188 7.1875 9.5625 8 9.5625ZM6.625 4.40625C6.59375 4.1875 6.78125 4 7 4H8.96875C9.1875 4 9.375 4.1875 9.34375 4.40625L9.125 8.65625C9.09375 8.875 8.9375 9 8.75 9H7.21875C7.03125 9 6.875 8.875 6.84375 8.65625L6.625 4.40625Z"
  }));
}
InfoIconInverted.propTypes = {
  /**
   * Severity can be 1 of 4 states:'danger', 'warning', 'info' or 'success'
   */
  severity: _propTypes.default.oneOf(Object.values(_designSystem.SEVERITIES))
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\info-icon-inverted.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\info-icon.component.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Cinfo-icon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoIcon;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

function InfoIcon({
  severity
}) {
  const className = (0, _classnames.default)('info-icon', {
    'info-icon--success': severity === _designSystem.SEVERITIES.SUCCESS,
    'info-icon--warning': severity === _designSystem.SEVERITIES.WARNING,
    'info-icon--danger': severity === _designSystem.SEVERITIES.DANGER,
    'info-icon--info': severity === _designSystem.SEVERITIES.INFO
  });
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: className,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.2 5.6H8.8V4H7.2V5.6ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM7.2 12H8.8V7.2H7.2V12Z"
  }));
}
InfoIcon.propTypes = {
  /**
   * Severity can be 1 of 4 states:'danger', 'warning', 'info' or 'success'
   */
  severity: _propTypes.default.oneOf(Object.values(_designSystem.SEVERITIES))
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\info-icon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\interaction-icon.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Cinteraction-icon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const Interaction = ({
  className,
  size,
  color
}) => /*#__PURE__*/_react.default.createElement("svg", {
  className: className,
  width: size,
  height: size,
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z",
  stroke: color
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M18.8889 18.65C18.8889 18.8433 18.7322 19 18.5389 19H11.4611C11.2678 19 11.1111 18.8433 11.1111 18.65V17.4621C11.1111 17.1479 10.7292 16.9928 10.5102 17.2181L8.2372 19.556C8.10513 19.6919 8.10513 19.9081 8.2372 20.044L10.5102 22.3819C10.7292 22.6072 11.1111 22.4521 11.1111 22.1379V20.95C11.1111 20.7567 11.2678 20.6 11.4611 20.6H20.0944C20.2877 20.6 20.4444 20.4433 20.4444 20.25V16.15C20.4444 15.9567 20.2877 15.8 20.0944 15.8H19.2389C19.0456 15.8 18.8889 15.9567 18.8889 16.15V18.65ZM11.1111 12.35C11.1111 12.1567 11.2678 12 11.4611 12H18.5389C18.7322 12 18.8889 12.1567 18.8889 12.35V13.5379C18.8889 13.8521 19.2708 14.0072 19.4898 13.7819L21.7628 11.444C21.8949 11.3081 21.8949 11.0919 21.7628 10.956L19.4898 8.61812C19.2708 8.39284 18.8889 8.5479 18.8889 8.8621V10.05C18.8889 10.2433 18.7322 10.4 18.5389 10.4H9.90556C9.71226 10.4 9.55556 10.5567 9.55556 10.75V14.85C9.55556 15.0433 9.71226 15.2 9.90556 15.2H10.7611C10.9544 15.2 11.1111 15.0433 11.1111 14.85V12.35Z",
  fill: color
}));
Interaction.defaultProps = {
  className: undefined
};
Interaction.propTypes = {
  /**
   * Additional className
   */
  className: _propTypes.default.string,
  /**
   * Size of the icon should adhere to 8px grid. e.g: 8, 16, 24, 32, 40
   */
  size: _propTypes.default.number.isRequired,
  /**
   * Color of the icon should be a valid design system color and is required
   */
  color: _propTypes.default.string.isRequired
};
var _default = Interaction;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\interaction-icon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\receive-icon.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Creceive-icon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const Receive = ({
  className,
  size,
  color
}) => /*#__PURE__*/_react.default.createElement("svg", {
  className: className,
  width: size,
  height: size,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/_react.default.createElement("rect", {
  x: "0.5",
  y: "0.5",
  width: "27",
  height: "27",
  rx: "13.5",
  stroke: color
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M14.3465 17.3611C14.3661 17.3402 14.3846 17.3181 14.4018 17.2952L17.597 14.0999C17.7961 13.9063 17.8756 13.6206 17.805 13.352C17.7344 13.0834 17.5246 12.8737 17.2561 12.8031C16.9875 12.7325 16.7017 12.812 16.5082 13.0111L14.5559 14.9633L14.5559 7.25598C14.5616 6.97721 14.4161 6.71715 14.1756 6.5761C13.9351 6.43505 13.6371 6.43505 13.3966 6.5761C13.1561 6.71715 13.0106 6.97721 13.0163 7.25598L13.0163 14.9633L11.064 13.0111C10.8705 12.812 10.5847 12.7325 10.3161 12.8031C10.0476 12.8737 9.83782 13.0834 9.76721 13.352C9.69661 13.6206 9.77608 13.9063 9.97519 14.0999L13.1726 17.2973C13.3093 17.4779 13.5186 17.5891 13.7447 17.6014C13.9709 17.6137 14.191 17.5258 14.3465 17.3611Z",
  fill: color
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "7.875",
  y: "19.25",
  width: "12.25",
  height: "1.75",
  rx: "0.875",
  fill: color
}));
Receive.defaultProps = {
  className: undefined
};
Receive.propTypes = {
  /**
   * Additional className
   */
  className: _propTypes.default.string,
  /**
   * Size of the icon should adhere to 8px grid. e.g: 8, 16, 24, 32, 40 and is required
   */
  size: _propTypes.default.number.isRequired,
  /**
   * Color of the icon should be a valid design system color and is required
   */
  color: _propTypes.default.string.isRequired
};
var _default = Receive;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\receive-icon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\search-icon.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Csearch-icon.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const SearchIcon = ({
  size = 24,
  color = 'currentColor',
  ariaLabel,
  className
}) => /*#__PURE__*/_react.default.createElement("svg", {
  width: size,
  height: size,
  fill: color,
  className: className,
  "aria-label": ariaLabel,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "m235 427c-51 0-100-21-136-57-36-36-56-84-56-135 0-26 5-51 14-74 10-23 24-44 42-62 18-18 39-32 62-42 23-9 48-14 74-14 25 0 50 5 73 14 23 10 45 24 62 42 18 18 32 39 42 62 10 23 15 48 15 74 0 43-15 86-42 119l78 79c2 2 4 4 5 7 1 2 1 5 1 8 0 3 0 6-1 8-1 3-3 5-5 7-2 2-4 4-7 5-2 1-5 1-8 1-3 0-6 0-8-1-3-1-5-3-7-5l-79-78c-33 27-76 42-119 42z m0-43c82 0 149-67 149-149 0-83-67-150-149-150-83 0-150 67-150 150 0 82 67 149 150 149z"
}));
SearchIcon.propTypes = {
  /**
   * The size of the Icon follows an 8px grid 2 = 16px, 3 = 24px etc
   */
  size: _propTypes.default.number,
  /**
   * The color of the icon accepts design token css variables
   */
  color: _propTypes.default.string,
  /**
   * An additional className to assign the Icon
   */
  className: _propTypes.default.string,
  /**
   * The aria-label of the icon for accessibility purposes
   */
  ariaLabel: _propTypes.default.string
};
var _default = SearchIcon;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\search-icon.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\send-icon.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Csend-icon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const Send = ({
  className,
  size,
  color
}) => /*#__PURE__*/_react.default.createElement("svg", {
  className: className,
  width: size,
  height: size,
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/_react.default.createElement("rect", {
  x: "0.5",
  y: "0.5",
  width: "29",
  height: "29",
  rx: "14.5",
  stroke: color
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M18.5851 9.88921C18.5586 9.89005 18.5321 9.89238 18.5057 9.89618H14.3207C14.0635 9.89254 13.8243 10.0276 13.6947 10.2497C13.565 10.4719 13.565 10.7466 13.6947 10.9687C13.8243 11.1908 14.0635 11.3259 14.3207 11.3222H16.8777L9.53811 18.6614C9.35182 18.8402 9.27679 19.1058 9.34193 19.3557C9.40707 19.6056 9.60222 19.8007 9.85211 19.8658C10.102 19.931 10.3676 19.8559 10.5464 19.6697L17.886 12.3305V14.8874C17.8823 15.1445 18.0175 15.3837 18.2396 15.5133C18.4617 15.643 18.7364 15.643 18.9585 15.5133C19.1806 15.3837 19.3158 15.1445 19.3121 14.8874V10.6997C19.3409 10.4919 19.2767 10.282 19.1366 10.1259C18.9965 9.96973 18.7948 9.88316 18.5851 9.88921Z",
  fill: color
}));
Send.defaultProps = {
  className: undefined
};
Send.propTypes = {
  /**
   * Additional className
   */
  className: _propTypes.default.string,
  /**
   * Size of the icon should adhere to 8px grid. e.g: 8, 16, 24, 32, 40 and is required
   */
  size: _propTypes.default.number.isRequired,
  /**
   * Color of the icon should be a valid design system color and is required
   */
  color: _propTypes.default.string.isRequired
};
var _default = Send;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\send-icon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\sign-icon.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Csign-icon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sign;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

function Sign({
  className,
  size,
  color
}) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 34 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z",
    stroke: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.2073 9.65858C21.2854 9.58047 21.4121 9.58047 21.4902 9.65858L23.8722 12.0406C23.9503 12.1187 23.9503 12.2453 23.8722 12.3234L22.3941 13.8015L19.7293 11.1367L21.2073 9.65858ZM18.5979 12.268L10.7361 20.1299C10.7086 20.1573 10.6898 20.1921 10.6818 20.2301L10.0466 23.2473C10.0168 23.3886 10.1421 23.5139 10.2835 23.4842L13.3007 22.849C13.3386 22.841 13.3734 22.8221 13.4009 22.7947L21.2627 14.9328L18.5979 12.268ZM22.6215 8.52721C21.9186 7.82426 20.7789 7.82427 20.076 8.52721L9.60469 18.9985C9.35778 19.2454 9.18802 19.5588 9.11609 19.9005L8.48089 22.9176C8.21306 24.1898 9.34091 25.3177 10.6131 25.0498L13.6303 24.4146C13.972 24.3427 14.2853 24.173 14.5323 23.9261L25.0035 13.4548C25.7065 12.7518 25.7065 11.6121 25.0035 10.9092L22.6215 8.52721Z",
    fill: color
  }));
}
Sign.propTypes = {
  /**
   * Additional className
   */
  className: _propTypes.default.string,
  /**
   * Size of the icon should adhere to 8px grid. e.g: 8, 16, 24, 32, 40 and is required
   */
  size: _propTypes.default.number.isRequired,
  /**
   * Color of the icon should be a valid design system color and is required
   */
  color: _propTypes.default.string.isRequired
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\sign-icon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\sun-check-icon.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Csun-check-icon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SunCheck;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

function SunCheck({
  reverseColors
}) {
  const sunColor = reverseColors ? 'var(--color-primary-default)' : 'var(--color-primary-inverse)';
  const checkColor = reverseColors ? 'var(--color-primary-inverse)' : 'var(--color-primary-default)';
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.2148 9.05384C13.432 8.40203 14.8878 7.92403 14.8878 7.20703C14.8878 6.49003 13.432 6.01204 13.2148 5.36022C12.9975 4.68668 13.8883 3.44823 13.4755 2.88332C13.0627 2.31842 11.607 2.77469 11.0421 2.3836C10.4771 1.97078 10.4771 0.449879 9.80361 0.232608C9.15179 0.0153358 8.26098 1.25378 7.54398 1.25378C6.82698 1.25378 5.91444 0.0153358 5.28435 0.232608C4.61081 0.449879 4.61081 1.99251 4.04591 2.3836C3.481 2.79641 2.02528 2.31842 1.61246 2.88332C1.19965 3.44823 2.09046 4.68668 1.87319 5.36022C1.65592 6.01204 0.200195 6.49003 0.200195 7.20703C0.200195 7.92403 1.65592 8.40203 1.87319 9.05384C2.09046 9.72738 1.19965 10.9658 1.61246 11.5307C2.02528 12.0956 3.481 11.6394 4.04591 12.0305C4.61081 12.4433 4.61081 13.9642 5.28435 14.1815C5.93617 14.3987 6.82698 13.1603 7.54398 13.1603C8.26098 13.1603 9.17352 14.3987 9.80361 14.1815C10.4771 13.9642 10.4771 12.4216 11.0421 12.0305C11.607 11.6176 13.0627 12.0956 13.4755 11.5307C13.8883 10.9658 12.9975 9.70566 13.2148 9.05384Z",
    fill: sunColor
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.42285 10.084L4.13965 7.81445C4.07585 7.75065 4.04395 7.66862 4.04395 7.56836C4.04395 7.4681 4.07585 7.38607 4.13965 7.32227L4.64551 6.83008C4.70931 6.75716 4.78678 6.7207 4.87793 6.7207C4.97819 6.7207 5.06478 6.75716 5.1377 6.83008L6.66895 8.36133L9.9502 5.08008C10.0231 5.00716 10.1051 4.9707 10.1963 4.9707C10.2965 4.9707 10.3786 5.00716 10.4424 5.08008L10.9482 5.57227C11.012 5.63607 11.0439 5.7181 11.0439 5.81836C11.0439 5.91862 11.012 6.00065 10.9482 6.06445L6.91504 10.084C6.85124 10.1569 6.76921 10.1934 6.66895 10.1934C6.56868 10.1934 6.48665 10.1569 6.42285 10.084Z",
    fill: checkColor
  }));
}
SunCheck.propTypes = {
  /**
   * If true reverses the colors of the SunCheck icon
   */
  reverseColors: _propTypes.default.bool
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\sun-check-icon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\icon\\swap-icon-for-list.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cicon%5Cswap-icon-for-list.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated This has been deprecated in favor of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const Swap = ({
  className,
  size,
  color
}) => /*#__PURE__*/_react.default.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 34 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: className
}, /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z",
  stroke: color
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M21.4444 21.2214C21.4444 21.4147 21.2877 21.5714 21.0944 21.5714H12.9056C12.7123 21.5714 12.5556 21.4147 12.5556 21.2214V19.6907C12.5556 19.3765 12.1736 19.2214 11.9546 19.4467L9.2372 22.2417C9.10513 22.3776 9.10513 22.5938 9.2372 22.7297L11.9546 25.5247C12.1736 25.75 12.5556 25.595 12.5556 25.2808V23.75C12.5556 23.5567 12.7123 23.4 12.9056 23.4H22.8722C23.0655 23.4 23.2222 23.2433 23.2222 23.05V18.2643C23.2222 18.071 23.0655 17.9143 22.8722 17.9143H21.7944C21.6011 17.9143 21.4444 18.071 21.4444 18.2643V21.2214ZM12.5556 13.9214C12.5556 13.7281 12.7123 13.5714 12.9056 13.5714H21.0944C21.2877 13.5714 21.4444 13.7281 21.4444 13.9214V15.4522C21.4444 15.7664 21.8264 15.9214 22.0454 15.6962L24.7628 12.9011C24.8949 12.7653 24.8949 12.549 24.7628 12.4132L22.0454 9.61812C21.8264 9.39284 21.4444 9.5479 21.4444 9.8621V11.3929C21.4444 11.5862 21.2877 11.7429 21.0944 11.7429H11.1278C10.9345 11.7429 10.7778 11.8996 10.7778 12.0929V16.8786C10.7778 17.0719 10.9345 17.2286 11.1278 17.2286H12.2056C12.3989 17.2286 12.5556 17.0719 12.5556 16.8786V13.9214Z",
  fill: color
}));
Swap.defaultProps = {
  className: undefined
};
Swap.propTypes = {
  /**
   * Additional className
   */
  className: _propTypes.default.string,
  /**
   * Size of the icon should adhere to 8px grid. e.g: 8, 16, 24, 32, 40 and is required
   */
  size: _propTypes.default.number.isRequired,
  /**
   * Color of the icon should be a valid design system color and is required
   */
  color: _propTypes.default.string.isRequired
};
var _default = Swap;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\icon\\swap-icon-for-list.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\identicon\\blockieIdenticon\\blockieIdenticon.component.js", {"@download/blockies":"F:\\metamask-extension\\node_modules\\@download\\blockies\\dist\\blockies.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cidenticon%5CblockieIdenticon%5CblockieIdenticon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _blockies = require("@download/blockies");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const BlockieIdenticon = ({
  address,
  diameter,
  alt = '',
  borderRadius
}) => {
  const [dataUrl, setDataUrl] = (0, _react.useState)(null);
  const canvasRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    (0, _blockies.renderIcon)({
      seed: address.toLowerCase()
    }, canvas);
    const updatedDataUrl = canvas.toDataURL();
    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl);
    }
  }, [dataUrl, address]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasRef,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: dataUrl,
    height: diameter,
    width: diameter,
    style: {
      borderRadius
    },
    alt: alt
  }));
};
BlockieIdenticon.propTypes = {
  address: _propTypes.default.string.isRequired,
  diameter: _propTypes.default.number.isRequired,
  alt: _propTypes.default.string,
  borderRadius: _propTypes.default.string
};
var _default = BlockieIdenticon;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\identicon\\blockieIdenticon\\blockieIdenticon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\identicon\\blockieIdenticon\\index.js", {"./blockieIdenticon.component":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\blockieIdenticon\\blockieIdenticon.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cidenticon%5CblockieIdenticon%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _blockieIdenticon.default;
  }
});
var _blockieIdenticon = _interopRequireDefault(require("./blockieIdenticon.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\identicon\\blockieIdenticon\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\identicon\\identicon.component.js", {"../../../helpers/utils/util":"F:\\metamask-extension\\ui\\helpers\\utils\\util.js","../jazzicon":"F:\\metamask-extension\\ui\\components\\ui\\jazzicon\\index.js","./blockieIdenticon":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\blockieIdenticon\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cidenticon%5Cidenticon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _jazzicon = _interopRequireDefault(require("../jazzicon"));
var _util = require("../../../helpers/utils/util");
var _blockieIdenticon = _interopRequireDefault(require("./blockieIdenticon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const getStyles = diameter => ({
  height: diameter,
  width: diameter,
  borderRadius: diameter / 2
});
class Identicon extends _react.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      imageLoadingError: false
    });
  }
  renderImage() {
    const {
      className,
      diameter,
      alt,
      imageBorder,
      ipfsGateway
    } = this.props;
    let {
      image
    } = this.props;
    if (Array.isArray(image) && image.length) {
      image = image[0];
    }
    if (typeof image === 'string' && image.toLowerCase().startsWith('ipfs://')) {
      image = (0, _util.getAssetImageURL)(image, ipfsGateway);
    }
    return /*#__PURE__*/_react.default.createElement("img", {
      className: (0, _classnames.default)('identicon', className, {
        'identicon__image-border': imageBorder
      }),
      src: image,
      style: getStyles(diameter),
      alt: alt,
      onError: () => {
        this.setState({
          imageLoadingError: true
        });
      }
    });
  }
  renderJazzicon() {
    const {
      address,
      className,
      diameter,
      alt,
      tokenList
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_jazzicon.default, {
      address: address,
      diameter: diameter,
      className: (0, _classnames.default)('identicon', className),
      style: getStyles(diameter),
      alt: alt,
      tokenList: tokenList
    });
  }
  renderBlockie() {
    const {
      address,
      className,
      diameter,
      alt
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('identicon', className),
      style: getStyles(diameter)
    }, /*#__PURE__*/_react.default.createElement(_blockieIdenticon.default, {
      address: address,
      diameter: diameter,
      alt: alt
    }));
  }
  renderBlockieOrJazzIcon() {
    const {
      useBlockie
    } = this.props;
    return useBlockie ? this.renderBlockie() : this.renderJazzicon();
  }
  shouldComponentUpdate(nextProps, nextState) {
    // We only want to re-render if props are different.
    return !(0, _lodash.isEqual)(nextProps, this.props) || !(0, _lodash.isEqual)(nextState, this.state);
  }
  render() {
    const {
      address,
      image,
      addBorder,
      diameter,
      tokenList
    } = this.props;
    const {
      imageLoadingError
    } = this.state;
    const size = diameter + 8;
    if (imageLoadingError) {
      return this.renderBlockieOrJazzIcon();
    }
    if (image) {
      return this.renderImage();
    }
    if (address) {
      var _tokenList$address$to;
      if ((_tokenList$address$to = tokenList[address.toLowerCase()]) !== null && _tokenList$address$to !== void 0 && _tokenList$address$to.iconUrl) {
        return this.renderJazzicon();
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)({
          'identicon__address-wrapper': addBorder
        }),
        style: addBorder ? getStyles(size) : null
      }, this.renderBlockieOrJazzIcon());
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      style: getStyles(diameter),
      className: "identicon__image-border"
    });
  }
}
exports.default = Identicon;
_defineProperty(Identicon, "propTypes", {
  /**
   * Adds blue border around the Identicon used for selected account.
   * Increases the width and height of the Identicon by 8px
   */
  addBorder: _propTypes.default.bool,
  /**
   * Address used for generating random image
   */
  address: _propTypes.default.string,
  /**
   * Add custom css class
   */
  className: _propTypes.default.string,
  /**
   * Sets the width and height of the inner img element
   * If addBorder is true will increase components height and width by 8px
   */
  diameter: _propTypes.default.number,
  /**
   * Used as the image source of the Identicon
   */
  image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  /**
   * Use the blockie type random image generator
   */
  useBlockie: _propTypes.default.bool,
  /**
   * The alt text of the image
   */
  alt: _propTypes.default.string,
  /**
   * Check if show image border
   */
  imageBorder: _propTypes.default.bool,
  /**
   * Add list of token in object
   */
  tokenList: _propTypes.default.object,
  /**
   * User preferred IPFS gateway
   */
  ipfsGateway: _propTypes.default.string
});
_defineProperty(Identicon, "defaultProps", {
  addBorder: false,
  address: undefined,
  className: undefined,
  diameter: 46,
  image: undefined,
  useBlockie: false,
  alt: '',
  tokenList: {}
});


      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\identicon\\identicon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\identicon\\identicon.container.js", {"../../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","./identicon.component":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\identicon.component.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cidenticon%5Cidenticon.container.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _selectors = require("../../../selectors");
var _identicon = _interopRequireDefault(require("./identicon.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const mapStateToProps = state => {
  const {
    metamask: {
      useBlockie,
      ipfsGateway
    }
  } = state;
  return {
    useBlockie,
    tokenList: (0, _selectors.getTokenList)(state),
    ipfsGateway
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps)(_identicon.default);
exports.default = _default;


      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\identicon\\identicon.container.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\identicon\\index.js", {"./identicon.container":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\identicon.container.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cidenticon%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _identicon.default;
  }
});
var _identicon = _interopRequireDefault(require("./identicon.container"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\identicon\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\info-tooltip\\index.js", {"./info-tooltip":"F:\\metamask-extension\\ui\\components\\ui\\info-tooltip\\info-tooltip.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cinfo-tooltip%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _infoTooltip.default;
  }
});
var _infoTooltip = _interopRequireDefault(require("./info-tooltip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\info-tooltip\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\info-tooltip\\info-tooltip-icon.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cinfo-tooltip%5Cinfo-tooltip-icon.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoTooltipIcon;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function InfoTooltipIcon({
  fillColor = 'var(--color-icon-default)'
}) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z",
    fill: fillColor
  }));
}
InfoTooltipIcon.propTypes = {
  fillColor: _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\info-tooltip\\info-tooltip-icon.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\info-tooltip\\info-tooltip.js", {"../tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\index.js","./info-tooltip-icon":"F:\\metamask-extension\\ui\\components\\ui\\info-tooltip\\info-tooltip-icon.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cinfo-tooltip%5Cinfo-tooltip.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoTooltip;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _infoTooltipIcon = _interopRequireDefault(require("./info-tooltip-icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const positionArrowClassMap = {
  top: 'info-tooltip__top-tooltip-arrow',
  bottom: 'info-tooltip__bottom-tooltip-arrow',
  left: 'info-tooltip__left-tooltip-arrow',
  right: 'info-tooltip__right-tooltip-arrow'
};
function InfoTooltip({
  contentText = '',
  position = '',
  containerClassName,
  wrapperClassName,
  iconFillColor = 'var(--color-icon-alternative)'
}) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "info-tooltip",
    "data-testid": "info-tooltip"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    interactive: true,
    position: position,
    containerClassName: (0, _classnames.default)('info-tooltip__tooltip-container', containerClassName),
    wrapperClassName: wrapperClassName,
    tooltipInnerClassName: "info-tooltip__tooltip-content",
    tooltipArrowClassName: positionArrowClassMap[position],
    html: contentText,
    theme: "tippy-tooltip-info"
  }, /*#__PURE__*/_react.default.createElement(_infoTooltipIcon.default, {
    fillColor: iconFillColor
  })));
}
InfoTooltip.propTypes = {
  /**
   * Text label that shows up after hover
   */
  contentText: _propTypes.default.node,
  /**
   * Shows position of the tooltip
   */
  position: _propTypes.default.oneOf(['top', 'left', 'bottom', 'right']),
  /**
   * Add custom CSS class for container
   */
  containerClassName: _propTypes.default.string,
  /**
   * Add custom CSS class for the wrapper
   */
  wrapperClassName: _propTypes.default.string,
  /**
   * Add color for the icon
   */
  iconFillColor: _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\info-tooltip\\info-tooltip.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\jazzicon\\index.js", {"./jazzicon.component":"F:\\metamask-extension\\ui\\components\\ui\\jazzicon\\jazzicon.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cjazzicon%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _jazzicon.default;
  }
});
var _jazzicon = _interopRequireDefault(require("./jazzicon.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\jazzicon\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\jazzicon\\jazzicon.component.js", {"../../../helpers/utils/icon-factory":"F:\\metamask-extension\\ui\\helpers\\utils\\icon-factory.js","@metamask/jazzicon":"F:\\metamask-extension\\node_modules\\@metamask\\jazzicon\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cjazzicon%5Cjazzicon.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jazzicon = _interopRequireDefault(require("@metamask/jazzicon"));
var _iconFactory = _interopRequireDefault(require("../../../helpers/utils/icon-factory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const iconFactory = (0, _iconFactory.default)(_jazzicon.default);

/**
 * Wrapper around the jazzicon library to return a React component, as the library returns an
 * HTMLDivElement which needs to be appended.
 */

function Jazzicon({
  address,
  className,
  diameter = 46,
  style,
  tokenList = {}
}) {
  const container = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    const _container = container.current;

    // add icon
    const imageNode = iconFactory.iconForAddress(address, diameter, tokenList[address === null || address === void 0 ? void 0 : address.toLowerCase()]);
    _container === null || _container === void 0 ? void 0 : _container.appendChild(imageNode);

    // remove icon
    return () => {
      while (_container.firstChild) {
        _container.firstChild.remove();
      }
    };
  }, [address, diameter, tokenList]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: container,
    className: className,
    style: style
  });
}
Jazzicon.propTypes = {
  /**
   * Address used for generating random image
   */
  address: _propTypes.default.string.isRequired,
  /**
   * Add custom css class
   */
  className: _propTypes.default.string,
  /**
   * Sets the width and height of the inner img element
   * Jazzicon accepts a pixel diameter
   */
  diameter: _propTypes.default.number,
  /**
   * Add inline style for the component
   */
  style: _propTypes.default.object,
  /**
   * Add list of token in object
   */
  tokenList: _propTypes.default.object
};
var _default = Jazzicon;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\jazzicon\\jazzicon.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\list-item\\index.js", {"./list-item.component":"F:\\metamask-extension\\ui\\components\\ui\\list-item\\list-item.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Clist-item%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _listItem.default;
  }
});
var _listItem = _interopRequireDefault(require("./list-item.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\list-item\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\list-item\\list-item.component.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Clist-item%5Clist-item.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListItem;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ListItem({
  title,
  subtitle,
  onClick,
  children,
  titleIcon,
  icon,
  rightContent,
  midContent,
  className,
  'data-testid': dataTestId
}) {
  const primaryClassName = (0, _classnames.default)('list-item', className, subtitle || children ? '' : 'list-item--single-content-row');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: primaryClassName,
    onClick: onClick,
    "data-testid": dataTestId,
    role: "button",
    tabIndex: 0,
    onKeyPress: event => {
      if (event.key === 'Enter') {
        onClick();
      }
    }
  }, icon ? /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item__icon"
  }, icon) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item__heading"
  }, /*#__PURE__*/_react.default.isValidElement(title) ? title : /*#__PURE__*/_react.default.createElement("h2", {
    className: "list-item__title",
    "data-testid": "list-item-title"
  }, title), titleIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item__heading-wrap"
  }, titleIcon)), subtitle ? /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item__subheading"
  }, subtitle) : null, children ? /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item__actions"
  }, children) : null, midContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item__mid-content"
  }, midContent) : null, rightContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item__right-content",
    "data-testid": "list-item-right-content"
  }, rightContent) : null);
}
ListItem.propTypes = {
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  titleIcon: _propTypes.default.node,
  subtitle: _propTypes.default.node,
  children: _propTypes.default.node,
  icon: _propTypes.default.node,
  rightContent: _propTypes.default.node,
  midContent: _propTypes.default.node,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  'data-testid': _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\list-item\\list-item.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\loading-heartbeat\\index.js", {"../../../ducks/app/app":"F:\\metamask-extension\\ui\\ducks\\app\\app.ts","../../../helpers/utils/gas":"F:\\metamask-extension\\ui\\helpers\\utils\\gas.js","../../../hooks/useShouldAnimateGasEstimations":"F:\\metamask-extension\\ui\\hooks\\useShouldAnimateGasEstimations.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cloading-heartbeat%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingHeartBeat;
var _reactRedux = require("react-redux");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _gas = require("../../../helpers/utils/gas");
var _app = require("../../../ducks/app/app");
var _useShouldAnimateGasEstimations = require("../../../hooks/useShouldAnimateGasEstimations");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BASE_CLASS = 'loading-heartbeat';
const LOADING_CLASS = `${BASE_CLASS}--active`;
function LoadingHeartBeat({
  estimateUsed,
  backgroundColor = 'var(--color-background-default)'
}) {
  (0, _useShouldAnimateGasEstimations.useShouldAnimateGasEstimations)();
  const active = (0, _reactRedux.useSelector)(_app.getGasLoadingAnimationIsShowing);
  if (false || estimateUsed && !(0, _gas.isMetamaskSuggestedGasEstimate)(estimateUsed)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('loading-heartbeat', {
      [LOADING_CLASS]: active
    }),
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    style: {
      backgroundColor
    }
  });
}
LoadingHeartBeat.propTypes = {
  backgroundColor: _propTypes.default.string,
  estimateUsed: _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\loading-heartbeat\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\loading-indicator\\index.js", {"./loading-indicator":"F:\\metamask-extension\\ui\\components\\ui\\loading-indicator\\loading-indicator.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cloading-indicator%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _loadingIndicator.default;
  }
});
var _loadingIndicator = _interopRequireDefault(require("./loading-indicator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\loading-indicator\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\loading-indicator\\loading-indicator.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cloading-indicator%5Cloading-indicator.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingIndicator;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function LoadingIndicator({
  alt,
  title,
  isLoading,
  children = null
}) {
  return isLoading ? /*#__PURE__*/_react.default.createElement("span", {
    className: "loading-indicator"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "loading-indicator__spinner",
    alt: alt,
    title: title,
    src: "images/loading.svg"
  })) : children;
}
LoadingIndicator.propTypes = {
  isLoading: _propTypes.default.bool.isRequired,
  alt: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  children: _propTypes.default.node
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\loading-indicator\\loading-indicator.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\loading-screen\\index.js", {"./loading-screen.component":"F:\\metamask-extension\\ui\\components\\ui\\loading-screen\\loading-screen.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cloading-screen%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loadingScreen = _interopRequireDefault(require("./loading-screen.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _loadingScreen.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\loading-screen\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\loading-screen\\loading-screen.component.js", {"../spinner":"F:\\metamask-extension\\ui\\components\\ui\\spinner\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cloading-screen%5Cloading-screen.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _spinner = _interopRequireDefault(require("../spinner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const LoadingScreen = ({
  header,
  loadingMessage,
  showLoadingSpinner = true
}) => {
  const renderMessage = () => {
    if (!loadingMessage) {
      return null;
    }
    return /*#__PURE__*/(0, _react.isValidElement)(loadingMessage) ? loadingMessage : /*#__PURE__*/_react.default.createElement("span", null, loadingMessage);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-overlay"
  }, header, /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-overlay__container"
  }, showLoadingSpinner && /*#__PURE__*/_react.default.createElement(_spinner.default, {
    color: "var(--color-warning-default)",
    className: "loading-overlay__spinner"
  }), renderMessage()));
};
LoadingScreen.propTypes = {
  header: _propTypes.default.element,
  loadingMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  showLoadingSpinner: _propTypes.default.bool
};
var _default = /*#__PURE__*/_react.default.memo(LoadingScreen);
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\loading-screen\\loading-screen.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\logo\\logo-lattice.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Clogo%5Clogo-lattice.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LogoLattice = ({
  width = '100%',
  color = 'var(--color-text-default)',
  className,
  ariaLabel
}) => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    fill: color,
    className: className,
    "aria-label": ariaLabel,
    viewBox: "0 0 2546 491",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2460 15V30H2488H2516V140V250H2531H2546V125V0H2503H2460V15ZM1861 116.038C1796.99 123.881 1741.39 163.865 1712.97 222.5C1680.8 288.855 1690.83 365.835 1739.17 423.5C1778.97 470.987 1839.99 496.383 1898.79 489.935C1937.49 485.692 1976.26 467.949 2005.03 441.315L2010.98 435.803L1997.36 421.444L1983.74 407.085L1974.62 415.109C1953.06 434.078 1931.7 444.965 1904.88 450.669C1893.48 453.093 1867.95 453.103 1855.82 450.689C1837.26 446.995 1819.5 439.522 1802.54 428.264C1790.63 420.354 1773.3 403.429 1764.69 391.295C1752.74 374.459 1743.39 352.909 1738.81 331.648C1735.63 316.902 1735.66 289.005 1738.87 274C1751.85 213.28 1797.55 166.907 1855.82 155.311C1867.95 152.897 1893.48 152.907 1904.88 155.331C1931.7 161.035 1953.06 171.922 1974.62 190.891L1983.74 198.915L1997.38 184.534L2011.02 170.153L2003.26 163.053C1977.39 139.393 1945.42 123.844 1909.5 117.465C1898.75 115.555 1871.49 114.753 1861 116.038ZM0 303V485H120H240V465.5V446H140.5H41V283.5V121H20.5H0V303ZM407.496 297.75C364.676 394.963 328.599 476.871 327.325 479.769L325.009 485.038L347.632 484.769L370.256 484.5L386.106 448.5C394.823 428.7 403.087 410.135 404.469 407.245L406.983 401.99L508.152 402.245L609.321 402.5L627.41 443.719L645.5 484.938L668.135 484.969L690.769 485L655.85 405.75C636.645 362.163 600.584 280.269 575.716 223.763L530.5 121.027L507.925 121.013L485.35 121L407.496 297.75ZM749 140.5V160H810H871V322.5V485H891.5H912V322.5V160H973H1034V140.5V121H891.5H749V140.5ZM1133 140.5V160H1194H1255V322.5V485H1275.5H1296V322.5V160H1357H1418V140.5V121H1275.5H1133V140.5ZM1534 303V485H1554.5H1575V303V121H1554.5H1534V303ZM2120 303V485H2250.5H2381V465.5V446H2271.5H2162V382.5V319H2260.5H2359V299.5V280H2260.5H2162V220V160H2271.5H2381V140.5V121H2250.5H2120V303ZM550.073 267.125C572.858 318.894 591.65 361.644 591.833 362.125C592.022 362.621 555.677 363 507.976 363C428.21 363 423.821 362.908 424.447 361.25C426.983 354.537 507.62 173.036 508.073 173.02C508.388 173.009 527.288 215.356 550.073 267.125Z"
  }));
};
LogoLattice.propTypes = {
  /**
   * The width of the logo. Defaults to 100%
   */
  width: _propTypes.default.string,
  /**
   * The color of the logo defaults to var(--color-text-default)
   */
  color: _propTypes.default.string,
  /**
   * Additional className to add to the root svg
   */
  className: _propTypes.default.string,
  /**
   * Aria label to add to the logo component
   */
  ariaLabel: _propTypes.default.string
};
var _default = LogoLattice;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\logo\\logo-lattice.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\logo\\logo-ledger.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Clogo%5Clogo-ledger.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LogoLedger = ({
  width = '100%',
  color = 'var(--color-text-default)',
  className,
  ariaLabel
}) => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    fill: color,
    className: className,
    "aria-label": ariaLabel,
    viewBox: "0 0 2000.58 669.35",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m1711.35 627.2v42.14h289.22v-190.05h-42.14v147.91zm0-627.2v42.14h247.08v147.92h42.14v-190.06zm-149.15 326v-97.92h66.11c32.23 0 43.8 10.74 43.8 40.08v17.35c0 30.16-11.16 40.49-43.8 40.49zm104.94 17.35c30.16-7.85 51.23-35.95 51.23-69.41 0-21.07-8.26-40.08-23.96-55.37-19.83-19.01-46.28-28.51-80.57-28.51h-92.96v289.22h41.32v-115.27h61.98c31.81 0 44.62 13.22 44.62 46.28v69h42.14v-62.39c0-45.45-10.74-62.8-43.8-67.76zm-347.88 9.5h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-138.42 15.29v19.83c0 41.73-15.29 55.37-53.71 55.37h-9.09c-38.43 0-57.02-12.4-57.02-69.83v-77.68c0-57.84 19.42-69.83 57.84-69.83h8.26c37.6 0 49.58 14.05 49.99 52.89h45.45c-4.13-57.02-42.14-92.96-99.16-92.96-27.68 0-50.82 8.68-68.17 25.2-26.03 24.38-40.49 65.7-40.49 123.54 0 55.78 12.4 97.1 38.01 122.71 17.35 16.94 41.32 26.03 64.87 26.03 24.79 0 47.52-9.92 59.08-31.4h5.78v27.27h38.01v-149.15h-111.97v38.01zm-364.41-140.07h45.04c42.56 0 65.7 10.74 65.7 68.59v76.02c0 57.84-23.14 68.59-65.7 68.59h-45.04zm48.75 251.22c78.92 0 108.25-59.91 108.25-144.61 0-85.94-31.4-144.61-109.08-144.61h-89.25v289.22zm-289.63-126.44h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-243.77-162.79h-42.14v289.22h190.06v-38.01h-147.92zm-331.78 289.23v190.06h289.22v-42.15h-247.08v-147.91zm0-479.29v190.06h42.14v-147.92h247.08v-42.14z"
  }));
};
LogoLedger.propTypes = {
  /**
   * The width of the logo. Defaults to 100%
   */
  width: _propTypes.default.string,
  /**
   * The color of the logo defaults to var(--color-text-default)
   */
  color: _propTypes.default.string,
  /**
   * Additional className to add to the root svg
   */
  className: _propTypes.default.string,
  /**
   * Aria label to add to the logo component
   */
  ariaLabel: _propTypes.default.string
};
var _default = LogoLedger;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\logo\\logo-ledger.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\logo\\logo-qr-based.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Clogo%5Clogo-qr-based.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LogoQRBased = ({
  width = '100%',
  color = 'var(--color-text-default)',
  className,
  ariaLabel
}) => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    fill: color,
    className: className,
    "aria-label": ariaLabel,
    viewBox: "0 0 107 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.3333 8H6.6667C7.403 8 8 7.403 8 6.6667V1.3333C8 0.597002 7.403 0 6.6667 0H1.3333C0.597 0 0 0.597002 0 1.3333V6.6667C0 7.403 0.597 8 1.3333 8ZM2.6667 2.6667H5.3333V5.3333H2.6667V2.6667ZM0.6667 13.3333H2C2.3682 13.3333 2.6667 13.0349 2.6667 12.6667V11.3333C2.6667 10.9651 2.3682 10.6667 2 10.6667H0.6667C0.2985 10.6667 0 10.9651 0 11.3333V12.6667C0 13.0349 0.2985 13.3333 0.6667 13.3333ZM6.6667 16H1.3333C0.597 16 0 16.597 0 17.3333V22.6667C0 23.403 0.597 24 1.3333 24H6.6667C7.403 24 8 23.403 8 22.6667V17.3333C8 16.597 7.403 16 6.6667 16ZM5.3333 21.3333H2.6667V18.6667H5.3333V21.3333ZM19.3333 24H23.3333C23.7015 24 24 23.7015 24 23.3333V19.3333C24 18.9651 23.7015 18.6667 23.3333 18.6667H22C21.6318 18.6667 21.3333 18.9651 21.3333 19.3333V21.3333H18.6667V23.3333C18.6667 23.7015 18.9651 24 19.3333 24ZM22.6667 0H17.3333C16.597 0 16 0.597002 16 1.3333V6.6667C16 7.403 16.597 8 17.3333 8H22.6667C23.403 8 24 7.403 24 6.6667V1.3333C24 0.597002 23.403 0 22.6667 0ZM21.3333 5.3333H18.6667V2.6667H21.3333V5.3333ZM6 10.6667C5.6318 10.6667 5.3333 10.9651 5.3333 11.3333V12.6667C5.3333 13.0349 5.6318 13.3333 6 13.3333H10.6667V10.6667H6ZM10.6667 15.3333C10.6667 15.7015 10.9651 16 11.3333 16H13.3333V18C13.3333 18.3682 13.6318 18.6667 14 18.6667H16V13.3333H10.6667V15.3333ZM10.6667 22V23.3333C10.6667 23.7015 10.9651 24 11.3333 24H15.3333C15.7015 24 16 23.7015 16 23.3333V21.3333H11.3333C10.9651 21.3333 10.6667 21.6318 10.6667 22ZM23.3333 10.6667H16.6667C16.2985 10.6667 16 10.9651 16 11.3333V13.3333H18.6667V15.3333C18.6667 15.7015 18.9651 16 19.3333 16H20.6667C21.0349 16 21.3333 15.7015 21.3333 15.3333V13.3333H23.3333C23.7015 13.3333 24 13.0349 24 12.6667V11.3333C24 10.9651 23.7015 10.6667 23.3333 10.6667ZM18.6667 21.3333V18.6667H16V21.3333H18.6667ZM11.3333 5.3333H12.6667C13.0349 5.3333 13.3333 5.0349 13.3333 4.6667V0.666698C13.3333 0.298498 13.0349 0 12.6667 0H11.3333C10.9651 0 10.6667 0.298498 10.6667 0.666698V4.6667C10.6667 5.0349 10.9651 5.3333 11.3333 5.3333ZM13.3333 10V8.6667C13.3333 8.2985 13.0349 8 12.6667 8H11.3333C10.9651 8 10.6667 8.2985 10.6667 8.6667V10.6667H12.6667C13.0349 10.6667 13.3333 10.3682 13.3333 10Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M38.592 18.192C37.7707 18.192 37.0027 18.0427 36.288 17.744C35.584 17.4347 34.9653 17.0187 34.432 16.496C33.8987 15.9627 33.4773 15.3387 33.168 14.624C32.8693 13.9093 32.72 13.1413 32.72 12.32C32.72 11.4987 32.8693 10.7307 33.168 10.016C33.4773 9.3013 33.8987 8.6827 34.432 8.16C34.9653 7.6267 35.584 7.2107 36.288 6.912C37.0027 6.6027 37.7707 6.448 38.592 6.448C39.4133 6.448 40.1813 6.6027 40.896 6.912C41.6107 7.2107 42.2293 7.6267 42.752 8.16C43.2853 8.6827 43.7013 9.3013 44 10.016C44.3093 10.7307 44.464 11.4987 44.464 12.32C44.464 13.0347 44.3467 13.7067 44.112 14.336C43.888 14.9653 43.5733 15.536 43.168 16.048L45.28 18H43.248L42.16 17.008C41.6693 17.3813 41.12 17.6747 40.512 17.888C39.904 18.0907 39.264 18.192 38.592 18.192ZM38.592 16.784C39.5413 16.784 40.3787 16.528 41.104 16.016L39.296 14.336L40.208 13.312L42.08 15.056C42.3573 14.6827 42.576 14.2667 42.736 13.808C42.896 13.3387 42.976 12.8427 42.976 12.32C42.976 11.7013 42.864 11.12 42.64 10.576C42.416 10.032 42.1067 9.5573 41.712 9.152C41.328 8.7467 40.864 8.432 40.32 8.208C39.7867 7.9733 39.2107 7.856 38.592 7.856C37.9733 7.856 37.3973 7.9733 36.864 8.208C36.3307 8.432 35.8667 8.7467 35.472 9.152C35.088 9.5573 34.784 10.032 34.56 10.576C34.336 11.12 34.224 11.7013 34.224 12.32C34.224 12.9493 34.336 13.536 34.56 14.08C34.784 14.6133 35.088 15.0827 35.472 15.488C35.8667 15.8933 36.3307 16.2133 36.864 16.448C37.3973 16.672 37.9733 16.784 38.592 16.784ZM46.9259 6.64H50.7979C51.3205 6.64 51.7899 6.7147 52.2059 6.864C52.6325 7.0133 52.9899 7.2267 53.2779 7.504C53.5765 7.7813 53.8005 8.112 53.9499 8.496C54.1099 8.88 54.1899 9.3067 54.1899 9.776C54.1899 10.608 53.9392 11.2907 53.4379 11.824C52.9472 12.3573 52.2592 12.688 51.3739 12.816L55.7579 18H53.8859L49.5179 12.832H48.4139V18H46.9259V6.64ZM50.6219 11.504C51.2725 11.504 51.7792 11.36 52.1419 11.072C52.5152 10.784 52.7019 10.352 52.7019 9.776C52.7019 9.2 52.5152 8.7627 52.1419 8.464C51.7792 8.1653 51.2725 8.016 50.6219 8.016H48.4139V11.504H50.6219ZM55.8681 12.832H59.948V14.208H55.8681V12.832ZM66.488 18.16C65.88 18.16 65.325 18.0267 64.824 17.76C64.323 17.4827 63.939 17.152 63.672 16.768V18H62.296V6H63.672V11.232C63.939 10.848 64.323 10.5227 64.824 10.256C65.325 9.9787 65.88 9.84 66.488 9.84C67.043 9.84 67.56 9.952 68.04 10.176C68.52 10.3893 68.936 10.688 69.288 11.072C69.64 11.4453 69.912 11.8827 70.104 12.384C70.307 12.8853 70.408 13.424 70.408 14C70.408 14.576 70.307 15.1147 70.104 15.616C69.912 16.1173 69.64 16.56 69.288 16.944C68.936 17.3173 68.52 17.616 68.04 17.84C67.56 18.0533 67.043 18.16 66.488 18.16ZM66.28 16.896C66.685 16.896 67.053 16.8213 67.384 16.672C67.715 16.5227 67.997 16.32 68.232 16.064C68.477 15.7973 68.664 15.488 68.792 15.136C68.931 14.784 69 14.4053 69 14C69 13.5947 68.931 13.216 68.792 12.864C68.664 12.512 68.477 12.208 68.232 11.952C67.997 11.6853 67.715 11.4773 67.384 11.328C67.053 11.1787 66.685 11.104 66.28 11.104C65.875 11.104 65.507 11.1787 65.176 11.328C64.845 11.4773 64.557 11.6853 64.312 11.952C64.077 12.208 63.891 12.512 63.752 12.864C63.624 13.216 63.56 13.5947 63.56 14C63.56 14.4053 63.624 14.784 63.752 15.136C63.891 15.488 64.077 15.7973 64.312 16.064C64.557 16.32 64.845 16.5227 65.176 16.672C65.507 16.8213 65.875 16.896 66.28 16.896ZM75.67 18.16C75.105 18.16 74.582 18.0533 74.102 17.84C73.633 17.616 73.222 17.3173 72.87 16.944C72.518 16.56 72.241 16.1173 72.038 15.616C71.846 15.1147 71.75 14.576 71.75 14C71.75 13.424 71.846 12.8853 72.038 12.384C72.241 11.8827 72.518 11.4453 72.87 11.072C73.222 10.688 73.633 10.3893 74.102 10.176C74.582 9.952 75.105 9.84 75.67 9.84C76.278 9.84 76.833 9.9787 77.334 10.256C77.835 10.5227 78.219 10.848 78.486 11.232V10H79.862V18H78.486V16.768C78.219 17.152 77.835 17.4827 77.334 17.76C76.833 18.0267 76.278 18.16 75.67 18.16ZM75.878 16.896C76.283 16.896 76.651 16.8213 76.982 16.672C77.313 16.5227 77.595 16.32 77.83 16.064C78.075 15.7973 78.262 15.488 78.39 15.136C78.529 14.784 78.598 14.4053 78.598 14C78.598 13.5947 78.529 13.216 78.39 12.864C78.262 12.512 78.075 12.208 77.83 11.952C77.595 11.6853 77.313 11.4773 76.982 11.328C76.651 11.1787 76.283 11.104 75.878 11.104C75.473 11.104 75.099 11.1787 74.758 11.328C74.427 11.4773 74.139 11.6853 73.894 11.952C73.659 12.208 73.473 12.512 73.334 12.864C73.206 13.216 73.142 13.5947 73.142 14C73.142 14.4053 73.206 14.784 73.334 15.136C73.473 15.488 73.659 15.7973 73.894 16.064C74.139 16.32 74.427 16.5227 74.758 16.672C75.099 16.8213 75.473 16.896 75.878 16.896ZM85.028 18.16C84.602 18.16 84.196 18.1067 83.812 18C83.428 17.8933 83.092 17.7387 82.804 17.536C82.516 17.3227 82.282 17.0613 82.1 16.752C81.919 16.4427 81.812 16.0853 81.78 15.68H83.188C83.231 15.9253 83.311 16.1333 83.428 16.304C83.556 16.464 83.706 16.5973 83.876 16.704C84.047 16.8107 84.228 16.8853 84.42 16.928C84.623 16.9707 84.831 16.992 85.044 16.992C85.482 16.992 85.844 16.9067 86.132 16.736C86.431 16.5547 86.58 16.288 86.58 15.936C86.58 15.616 86.479 15.3547 86.276 15.152C86.074 14.9493 85.732 14.784 85.252 14.656L84.1 14.352C83.407 14.1707 82.89 13.8773 82.548 13.472C82.207 13.0667 82.036 12.576 82.036 12C82.036 11.6693 82.106 11.3707 82.244 11.104C82.383 10.8373 82.575 10.6133 82.82 10.432C83.066 10.24 83.354 10.096 83.684 10C84.026 9.8933 84.399 9.84 84.804 9.84C85.231 9.84 85.615 9.8987 85.956 10.016C86.298 10.1333 86.591 10.2987 86.836 10.512C87.092 10.7147 87.295 10.9547 87.444 11.232C87.594 11.5093 87.684 11.808 87.716 12.128H86.34C86.234 11.776 86.042 11.4987 85.764 11.296C85.498 11.0933 85.178 10.992 84.804 10.992C84.42 10.992 84.095 11.0827 83.828 11.264C83.562 11.4347 83.428 11.6747 83.428 11.984C83.428 12.2827 83.524 12.5227 83.716 12.704C83.908 12.8747 84.218 13.0187 84.644 13.136L85.924 13.472C86.596 13.6427 87.103 13.9307 87.444 14.336C87.796 14.7307 87.972 15.232 87.972 15.84C87.972 16.2347 87.898 16.5813 87.748 16.88C87.599 17.168 87.391 17.408 87.124 17.6C86.858 17.792 86.543 17.9307 86.18 18.016C85.828 18.112 85.444 18.16 85.028 18.16ZM93.329 18.16C92.742 18.16 92.204 18.0587 91.713 17.856C91.222 17.6427 90.796 17.3493 90.433 16.976C90.081 16.6027 89.804 16.1653 89.601 15.664C89.398 15.152 89.297 14.5973 89.297 14C89.297 13.4133 89.388 12.8693 89.569 12.368C89.761 11.856 90.033 11.4133 90.385 11.04C90.737 10.6667 91.164 10.3733 91.665 10.16C92.166 9.9467 92.732 9.84 93.361 9.84C93.99 9.84 94.55 9.9627 95.041 10.208C95.542 10.4427 95.958 10.768 96.289 11.184C96.63 11.5893 96.876 12.0693 97.025 12.624C97.185 13.168 97.244 13.7493 97.201 14.368H90.689C90.7 14.7307 90.774 15.0667 90.913 15.376C91.062 15.6853 91.254 15.9573 91.489 16.192C91.724 16.416 92.001 16.592 92.321 16.72C92.641 16.848 92.982 16.912 93.345 16.912C93.846 16.912 94.294 16.8107 94.689 16.608C95.094 16.3947 95.42 16.048 95.665 15.568H97.073C96.977 15.92 96.822 16.256 96.609 16.576C96.396 16.8853 96.129 17.1573 95.809 17.392C95.5 17.6267 95.137 17.8133 94.721 17.952C94.305 18.0907 93.841 18.16 93.329 18.16ZM93.313 11.056C93.025 11.056 92.742 11.0987 92.465 11.184C92.188 11.2693 91.932 11.4027 91.697 11.584C91.473 11.7653 91.276 11.9947 91.105 12.272C90.934 12.5493 90.817 12.8853 90.753 13.28H95.745C95.617 12.5333 95.329 11.9787 94.881 11.616C94.433 11.2427 93.91 11.056 93.313 11.056ZM102.483 18.16C101.917 18.16 101.395 18.0533 100.915 17.84C100.445 17.616 100.035 17.3173 99.683 16.944C99.331 16.56 99.053 16.1173 98.851 15.616C98.659 15.1147 98.563 14.576 98.563 14C98.563 13.424 98.659 12.8853 98.851 12.384C99.053 11.8827 99.331 11.4453 99.683 11.072C100.035 10.688 100.445 10.3893 100.915 10.176C101.395 9.952 101.917 9.84 102.483 9.84C103.091 9.84 103.645 9.9787 104.147 10.256C104.648 10.5227 105.032 10.848 105.299 11.232V6H106.675V18H105.299V16.768C105.032 17.152 104.648 17.4827 104.147 17.76C103.645 18.0267 103.091 18.16 102.483 18.16ZM102.691 16.896C103.096 16.896 103.464 16.8213 103.795 16.672C104.125 16.5227 104.408 16.32 104.643 16.064C104.888 15.7973 105.075 15.488 105.203 15.136C105.341 14.784 105.411 14.4053 105.411 14C105.411 13.5947 105.341 13.216 105.203 12.864C105.075 12.512 104.888 12.208 104.643 11.952C104.408 11.6853 104.125 11.4773 103.795 11.328C103.464 11.1787 103.096 11.104 102.691 11.104C102.285 11.104 101.912 11.1787 101.571 11.328C101.24 11.4773 100.952 11.6853 100.707 11.952C100.472 12.208 100.285 12.512 100.147 12.864C100.019 13.216 99.955 13.5947 99.955 14C99.955 14.4053 100.019 14.784 100.147 15.136C100.285 15.488 100.472 15.7973 100.707 16.064C100.952 16.32 101.24 16.5227 101.571 16.672C101.912 16.8213 102.285 16.896 102.691 16.896Z"
  }));
};
LogoQRBased.propTypes = {
  /**
   * The width of the logo. Defaults to 100%
   */
  width: _propTypes.default.string,
  /**
   * The color of the logo defaults to var(--color-text-default)
   */
  color: _propTypes.default.string,
  /**
   * Additional className to add to the root svg
   */
  className: _propTypes.default.string,
  /**
   * Aria label to add to the logo component
   */
  ariaLabel: _propTypes.default.string
};
var _default = LogoQRBased;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\logo\\logo-qr-based.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\logo\\logo-trezor.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Clogo%5Clogo-trezor.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LogoTrezor = ({
  width = '100%',
  color = 'var(--color-text-default)',
  className,
  ariaLabel
}) => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    fill: color,
    className: className,
    "aria-label": ariaLabel,
    viewBox: "0 0 2568 723",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M249 0C149.9 0 69.7 80.2 69.7 179.3V246.5C34.9 252.8 0 261.2 0 272.1V622.8C0 622.8 0 632.5 10.9 637.1C50.4 653.1 205.8 708.1 241.5 720.7C246.1 722.4 247.4 722.4 248.6 722.4C250.3 722.4 251.1 722.4 255.7 720.7C291.4 708.1 447.2 653.1 486.7 637.1C496.8 632.9 497.2 623.2 497.2 623.2V272.1C497.2 261.2 462.8 252.4 427.9 246.5V179.3C428.4 80.2 347.7 0 249 0ZM249 85.7C307.4 85.7 342.7 121 342.7 179.4V237.8C277.2 233.2 221.3 233.2 155.4 237.8V179.4C155.4 120.9 190.7 85.7 249 85.7V85.7ZM248.6 323.8C330.1 323.8 398.5 330.1 398.5 341.4V560.2C398.5 563.6 398.1 564 395.1 565.2C392.2 566.5 256.1 615.6 256.1 615.6C256.1 615.6 250.6 617.3 249 617.3C247.3 617.3 241.9 615.2 241.9 615.2C241.9 615.2 105.8 566.1 102.9 564.8C100 563.5 99.5 563.1 99.5 559.8V341C98.7 329.7 167.1 323.8 248.6 323.8V323.8ZM728.466 563.183V323.577H640.919V237.655H913.881V323.577H827.195V563.183H728.466ZM1135.04 563.183L1090.12 460.823H1054.38V563.183H955.647V237.655H1129.4C1205.67 237.655 1246.58 288.215 1246.58 349.191C1246.58 405.389 1214.08 435.113 1187.99 447.92L1246.96 563.088H1135.04V563.183ZM1146.7 349.191C1146.7 331.51 1131.03 323.864 1114.59 323.864H1054.38V375.283H1114.59C1131.03 374.901 1146.7 367.255 1146.7 349.191ZM1298.38 563.183V237.655H1545.25V323.577H1396.73V355.69H1541.62V441.612H1396.73V477.357H1545.25V563.183H1298.38ZM1596.57 563.566V485.29L1720.63 323.96H1596.57V238.037H1850.61V315.549L1726.17 477.739H1854.24V563.661L1596.57 563.566ZM1878.33 400.993C1878.33 301.021 1955.84 232.398 2056.58 232.398C2156.93 232.398 2234.82 300.639 2234.82 400.993C2234.82 500.964 2157.31 569.205 2056.58 569.205C1955.84 569.205 1878.33 500.965 1878.33 400.993V400.993ZM2134.47 400.993C2134.47 355.595 2103.6 319.467 2056.19 319.467C2008.79 319.467 1977.92 355.595 1977.92 400.993C1977.92 446.391 2008.79 482.518 2056.19 482.518C2103.98 482.518 2134.47 446.391 2134.47 400.993H2134.47ZM2455.51 563.566L2410.59 461.205H2374.84V563.565H2276.11V238.038H2449.87C2526.14 238.038 2567.04 288.598 2567.04 349.574C2567.04 405.772 2534.55 435.496 2508.46 448.304L2567.43 563.471H2455.51V563.566ZM2467.55 349.191C2467.55 331.51 2451.87 323.864 2435.44 323.864H2375.22V375.283H2435.44C2451.97 374.901 2467.55 367.255 2467.55 349.191Z"
  }));
};
LogoTrezor.propTypes = {
  /**
   * The width of the logo. Defaults to 100%
   */
  width: _propTypes.default.string,
  /**
   * The color of the logo defaults to var(--color-text-default)
   */
  color: _propTypes.default.string,
  /**
   * Additional className to add to the root svg
   */
  className: _propTypes.default.string,
  /**
   * Aria label to add to the logo component
   */
  ariaLabel: _propTypes.default.string
};
var _default = LogoTrezor;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\logo\\logo-trezor.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\mascot\\index.js", {"./mascot.component":"F:\\metamask-extension\\ui\\components\\ui\\mascot\\mascot.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmascot%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _mascot.default;
  }
});
var _mascot = _interopRequireDefault(require("./mascot.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\mascot\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\mascot\\mascot.component.js", {"../../../helpers/utils/build-types":"F:\\metamask-extension\\ui\\helpers\\utils\\build-types.js","@metamask/logo":"F:\\metamask-extension\\node_modules\\@metamask\\logo\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmascot%5Cmascot.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _logo = _interopRequireDefault(require("@metamask/logo"));
var _lodash = require("lodash");
var _buildTypes = require("../../../helpers/utils/build-types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const directionTargetGenerator = ({
  top,
  left,
  height,
  width
}) => {
  const horizontalMiddle = left + width / 2;
  const verticalMiddle = top + height / 2;
  return {
    up: {
      x: horizontalMiddle,
      y: top - height
    },
    down: {
      x: horizontalMiddle,
      y: top + height * 2
    },
    left: {
      x: left - width,
      y: verticalMiddle
    },
    right: {
      x: left + width * 2,
      y: verticalMiddle
    },
    middle: {
      x: horizontalMiddle,
      y: verticalMiddle
    }
  };
};
class Mascot extends _react.Component {
  constructor(props) {
    super(props);
    const {
      width,
      height,
      followMouse
    } = props;
    this.logo = (0, _logo.default)({
      followMouse,
      pxNotRatio: true,
      width,
      height,
      meshJson: (0, _buildTypes.getBuildSpecificAsset)('foxMeshJson')
    });
    this.mascotContainer = /*#__PURE__*/(0, _react.createRef)();
    this.refollowMouse = (0, _lodash.debounce)(this.logo.setFollowMouse.bind(this.logo, true), 1000);
    this.unfollowMouse = this.logo.setFollowMouse.bind(this.logo, false);
  }
  handleAnimationEvents() {
    // only setup listeners once
    if (this.animations) {
      return;
    }
    this.animations = this.props.animationEventEmitter;
    this.animations.on('point', this.lookAt.bind(this));
    this.animations.on('setFollowMouse', this.logo.setFollowMouse.bind(this.logo));
  }
  lookAt(target) {
    this.unfollowMouse();
    this.logo.lookAtAndRender(target);
    this.refollowMouse();
  }
  componentDidMount() {
    this.mascotContainer.current.appendChild(this.logo.container);
    this.directionTargetMap = directionTargetGenerator(this.mascotContainer.current.getBoundingClientRect());
    const {
      lookAtTarget,
      lookAtDirection
    } = this.props;
    if (lookAtTarget !== null && lookAtTarget !== void 0 && lookAtTarget.x && lookAtTarget !== null && lookAtTarget !== void 0 && lookAtTarget.y) {
      this.logo.lookAtAndRender(lookAtTarget);
    } else if (lookAtDirection) {
      this.logo.lookAtAndRender(this.directionTargetMap[lookAtDirection]);
    }
  }
  componentDidUpdate(prevProps) {
    const {
      lookAtTarget: prevTarget = {},
      lookAtDirection: prevDirection = null,
      followMouse: prevFollowMouse
    } = prevProps;
    const {
      lookAtTarget = {},
      followMouse,
      lookAtDirection
    } = this.props;
    if (lookAtDirection && prevDirection !== lookAtDirection) {
      this.logo.lookAtAndRender(this.directionTargetMap[lookAtDirection]);
    } else if ((lookAtTarget === null || lookAtTarget === void 0 ? void 0 : lookAtTarget.x) !== (prevTarget === null || prevTarget === void 0 ? void 0 : prevTarget.x) || (lookAtTarget === null || lookAtTarget === void 0 ? void 0 : lookAtTarget.y) !== (prevTarget === null || prevTarget === void 0 ? void 0 : prevTarget.y)) {
      this.logo.lookAtAndRender(lookAtTarget);
    }
    if (prevFollowMouse !== followMouse) {
      this.unfollowMouse();
      followMouse && this.refollowMouse();
    }
  }
  componentWillUnmount() {
    this.animations = this.props.animationEventEmitter;
    this.animations.removeAllListeners();
    this.logo.container.remove();
    this.logo.stopAnimation();
  }
  render() {
    // this is a bit hacky
    // the event emitter is on `this.props`
    // and we dont get that until render
    this.handleAnimationEvents();
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: this.mascotContainer,
      style: {
        zIndex: 0
      }
    });
  }
}
exports.default = Mascot;
_defineProperty(Mascot, "propTypes", {
  animationEventEmitter: _propTypes.default.object.isRequired,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  followMouse: _propTypes.default.bool,
  lookAtTarget: _propTypes.default.object,
  lookAtDirection: _propTypes.default.oneOf(['up', 'down', 'left', 'right', 'middle'])
});
_defineProperty(Mascot, "defaultProps", {
  width: '200',
  height: '200',
  followMouse: true,
  lookAtTarget: {},
  lookAtDirection: null
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\mascot\\mascot.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\menu\\index.js", {"./menu":"F:\\metamask-extension\\ui\\components\\ui\\menu\\menu.js","./menu-item":"F:\\metamask-extension\\ui\\components\\ui\\menu\\menu-item.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmenu%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Menu", {
  enumerable: true,
  get: function () {
    return _menu.default;
  }
});
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: function () {
    return _menuItem.default;
  }
});
var _menu = _interopRequireDefault(require("./menu"));
var _menuItem = _interopRequireDefault(require("./menu-item"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\menu\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\menu\\menu-item.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmenu%5Cmenu-item.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _componentLibrary = require("../../component-library");
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MenuItem = /*#__PURE__*/_react.default.forwardRef(({
  children,
  className,
  'data-testid': dataTestId,
  iconName,
  onClick,
  subtitle,
  disabled = false
}, ref) => /*#__PURE__*/_react.default.createElement("button", {
  className: (0, _classnames.default)('menu-item', className),
  "data-testid": dataTestId,
  onClick: onClick,
  ref: ref,
  disabled: disabled
}, iconName ? /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
  name: iconName,
  size: _componentLibrary.IconSize.Sm,
  marginRight: 2
}) : null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, children), subtitle ? /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
  variant: _designSystem.TextVariant.bodyXs
}, subtitle) : null)));
MenuItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  'data-testid': _propTypes.default.string,
  iconName: _propTypes.default.string,
  onClick: _propTypes.default.func,
  subtitle: _propTypes.default.node,
  disabled: _propTypes.default.bool
};
MenuItem.displayName = 'MenuItem';
var _default = MenuItem;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\menu\\menu-item.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\menu\\menu.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-dom":"F:\\metamask-extension\\node_modules\\react-dom\\index.js","react-popper":"F:\\metamask-extension\\node_modules\\react-popper\\lib\\cjs\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmenu%5Cmenu.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _reactPopper = require("react-popper");
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Menu = ({
  anchorElement,
  children,
  className,
  'data-testid': dataTestId,
  onHide,
  popperOptions
}) => {
  const [popperElement, setPopperElement] = (0, _react.useState)(null);
  const popoverContainerElement = (0, _react.useRef)(document.getElementById('popover-content'));
  const {
    attributes,
    styles
  } = (0, _reactPopper.usePopper)(anchorElement, popperElement, popperOptions);
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "menu__background",
    "data-testid": dataTestId,
    onClick: onHide
  }), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)('menu__container', className),
    "data-testid": className,
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper), children)), popoverContainerElement.current);
};
Menu.propTypes = {
  anchorElement: _propTypes.default.instanceOf(window.Element),
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  onHide: _propTypes.default.func.isRequired,
  popperOptions: _propTypes.default.object,
  dataTestId: _propTypes.default.string
};
Menu.defaultProps = {
  anchorElement: undefined,
  className: undefined,
  popperOptions: undefined
};
var _default = Menu;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\menu\\menu.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\metafox-logo\\horizontal-logo.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmetafox-logo%5Chorizontal-logo.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MetaFoxHorizontalLogo;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LOGO_WIDTH = 162;
const LOGO_HEIGHT = 30;
const TEXT_COLOR = 'var(--color-text-default)';
const FLASK_PILL_BACKGROUND = 'var(--color-overlay-alternative)';
const FLASK_PILL_TEXT = 'var(--color-overlay-inverse)';
const BETA_PILL_BACKGROUND = 'var(--color-primary-default)';
const BETA_PIL_TEXT = 'var(--color-primary-inverse)';
function MetaFoxHorizontalLogo({
  className
}) {
  switch ("main") {
    case 'beta':
      return /*#__PURE__*/_react.default.createElement("svg", {
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
        viewBox: "0 0 723 115",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className
      }, /*#__PURE__*/_react.default.createElement("g", {
        clipPath: "url(#clip0_3375_9161)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M546.118 57.394C542.911 55.2721 539.373 53.7633 536.024 51.8772C533.854 50.6512 531.542 49.5668 529.655 48.0107C526.447 45.3702 527.108 40.1835 530.457 37.9202C535.269 34.7139 543.241 36.5057 544.09 43.0598C544.09 43.2012 544.232 43.2955 544.373 43.2955H551.638C551.826 43.2955 551.968 43.1541 551.921 42.9655C551.543 38.4389 549.798 34.6667 546.59 32.262C543.524 29.9515 540.033 28.7256 536.307 28.7256C517.107 28.7256 515.362 49.0481 525.693 55.4607C526.872 56.2152 537.014 61.3076 540.599 63.5237C544.184 65.7399 545.317 69.7949 543.76 73.0013C542.345 75.9247 538.665 77.9522 534.986 77.7165C530.976 77.4807 527.863 75.3117 526.778 71.9168C526.589 71.3038 526.495 70.125 526.495 69.6063C526.495 69.4649 526.353 69.3234 526.212 69.3234H518.334C518.192 69.3234 518.051 69.4649 518.051 69.6063C518.051 75.3117 519.466 78.4709 523.334 81.3472C526.966 84.082 530.929 85.2136 535.033 85.2136C545.788 85.2136 551.355 79.131 552.487 72.8127C553.477 66.6358 551.638 61.0718 546.118 57.394Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M204.069 29.7638H200.578H196.757C196.616 29.7638 196.521 29.8581 196.474 29.9524L190.011 51.2648C189.917 51.5477 189.54 51.5477 189.445 51.2648L182.983 29.9524C182.935 29.8109 182.841 29.7638 182.7 29.7638H178.879H175.388H170.671C170.529 29.7638 170.388 29.9052 170.388 30.0467V84.4594C170.388 84.6008 170.529 84.7423 170.671 84.7423H178.548C178.69 84.7423 178.831 84.6008 178.831 84.4594V43.1076C178.831 42.7776 179.303 42.7304 179.398 43.0133L185.907 64.4672L186.379 65.9761C186.426 66.1175 186.521 66.1647 186.662 66.1647H192.7C192.842 66.1647 192.936 66.0704 192.983 65.9761L193.455 64.4672L199.965 43.0133C200.059 42.6833 200.531 42.7776 200.531 43.1076V84.4594C200.531 84.6008 200.672 84.7423 200.814 84.7423H208.692C208.833 84.7423 208.975 84.6008 208.975 84.4594V30.0467C208.975 29.9052 208.833 29.7638 208.692 29.7638H204.069Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M425.498 29.7638C425.356 29.7638 425.262 29.8581 425.215 29.9524L418.752 51.2648C418.658 51.5477 418.28 51.5477 418.186 51.2648L411.723 29.9524C411.676 29.8109 411.582 29.7638 411.44 29.7638H399.458C399.317 29.7638 399.175 29.9052 399.175 30.0467V84.4594C399.175 84.6008 399.317 84.7423 399.458 84.7423H407.336C407.478 84.7423 407.619 84.6008 407.619 84.4594V43.1076C407.619 42.7776 408.091 42.7304 408.185 43.0133L414.695 64.4672L415.167 65.9761C415.214 66.1175 415.308 66.1647 415.45 66.1647H421.488C421.629 66.1647 421.724 66.0704 421.771 65.9761L422.243 64.4672L428.753 43.0133C428.847 42.6833 429.319 42.7776 429.319 43.1076V84.4594C429.319 84.6008 429.46 84.7423 429.602 84.7423H437.479C437.621 84.7423 437.763 84.6008 437.763 84.4594V30.0467C437.763 29.9052 437.621 29.7638 437.479 29.7638H425.498Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M323.887 29.7638H309.216H301.339H286.668C286.526 29.7638 286.385 29.9052 286.385 30.0467V36.8365C286.385 36.978 286.526 37.1194 286.668 37.1194H301.056V84.4594C301.056 84.6008 301.197 84.7423 301.339 84.7423H309.216C309.358 84.7423 309.499 84.6008 309.499 84.4594V37.1194H323.887C324.029 37.1194 324.17 36.978 324.17 36.8365V30.0467C324.17 29.9052 324.076 29.7638 323.887 29.7638Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M370.353 84.7419H377.523C377.712 84.7419 377.853 84.5533 377.806 84.3647L362.994 29.7633C362.947 29.6219 362.852 29.5747 362.711 29.5747H359.975H355.163H352.427C352.286 29.5747 352.191 29.669 352.144 29.7633L337.332 84.3647C337.285 84.5533 337.426 84.7419 337.615 84.7419H344.785C344.927 84.7419 345.021 84.6476 345.068 84.5533L349.361 68.6633C349.408 68.5218 349.503 68.4747 349.644 68.4747H365.494C365.636 68.4747 365.73 68.569 365.777 68.6633L370.07 84.5533C370.117 84.6476 370.259 84.7419 370.353 84.7419ZM351.531 60.6947L357.286 39.4294C357.38 39.1465 357.758 39.1465 357.852 39.4294L363.607 60.6947C363.654 60.8833 363.513 61.0719 363.324 61.0719H351.814C351.625 61.0719 351.484 60.8833 351.531 60.6947Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M492.625 84.7419H499.795C499.984 84.7419 500.126 84.5533 500.078 84.3647L485.266 29.7633C485.219 29.6219 485.125 29.5747 484.983 29.5747H482.247H477.436H474.699C474.558 29.5747 474.464 29.669 474.416 29.7633L459.604 84.3647C459.557 84.5533 459.699 84.7419 459.887 84.7419H467.057C467.199 84.7419 467.293 84.6476 467.341 84.5533L471.633 68.6633C471.68 68.5218 471.775 68.4747 471.916 68.4747H487.766C487.908 68.4747 488.002 68.569 488.049 68.6633L492.342 84.5533C492.389 84.6476 492.484 84.7419 492.625 84.7419ZM473.803 60.6947L479.558 39.4294C479.653 39.1465 480.03 39.1465 480.124 39.4294L485.879 60.6947C485.927 60.8833 485.785 61.0719 485.596 61.0719H474.086C473.898 61.0719 473.756 60.8833 473.803 60.6947Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M240.957 76.6786V59.7985C240.957 59.657 241.098 59.5155 241.24 59.5155H262.232C262.373 59.5155 262.515 59.3741 262.515 59.2326V52.4428C262.515 52.3014 262.373 52.1599 262.232 52.1599H241.24C241.098 52.1599 240.957 52.0185 240.957 51.877V37.4487C240.957 37.3073 241.098 37.1658 241.24 37.1658H265.109C265.251 37.1658 265.392 37.0243 265.392 36.8829V30.0931C265.392 29.9516 265.251 29.8102 265.109 29.8102H240.957H232.796C232.654 29.8102 232.513 29.9516 232.513 30.0931V37.1658V52.2071V59.5627V77.0087V84.4586C232.513 84.6001 232.654 84.7415 232.796 84.7415H240.957H266.1C266.242 84.7415 266.383 84.6001 266.383 84.4586V77.2916C266.383 77.1502 266.242 77.0087 266.1 77.0087H241.193C241.051 76.9616 240.957 76.8673 240.957 76.6786Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M618.103 84.2701L590.837 56.1207C590.742 56.0264 590.742 55.8378 590.837 55.7435L615.367 30.2817C615.555 30.0931 615.414 29.8102 615.178 29.8102H605.13C605.036 29.8102 604.989 29.8573 604.941 29.9045L584.138 51.4998C583.95 51.6884 583.667 51.547 583.667 51.3112V30.0931C583.667 29.9516 583.525 29.8102 583.384 29.8102H575.506C575.364 29.8102 575.223 29.9516 575.223 30.0931V84.5058C575.223 84.6473 575.364 84.7887 575.506 84.7887H583.384C583.525 84.7887 583.667 84.6473 583.667 84.5058V60.5529C583.667 60.3172 583.997 60.1757 584.138 60.3643L607.725 84.6944C607.772 84.7416 607.866 84.7887 607.913 84.7887H617.961C618.15 84.7416 618.291 84.4115 618.103 84.2701Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M713.276 103.602H641.398C636.03 103.602 631.674 99.2489 631.674 93.8841V72.7183C631.674 67.3536 636.03 63 641.398 63H713.276C718.644 63 723 67.3536 723 72.7183V93.8841C723 99.2566 718.644 103.602 713.276 103.602Z",
        fill: BETA_PILL_BACKGROUND
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M646.82 74.3317H653.895C654.652 74.3317 655.378 74.4782 656.058 74.7713C656.737 75.0645 657.332 75.4579 657.85 75.9592C658.359 76.4606 658.761 77.0546 659.055 77.7334C659.348 78.4122 659.495 79.1373 659.495 79.9163C659.495 80.5874 659.371 81.1891 659.124 81.729C658.877 82.269 658.553 82.7395 658.143 83.1483C658.939 83.5572 659.58 84.1434 660.082 84.9225C660.576 85.7015 660.823 86.5886 660.823 87.5991C660.823 88.3782 660.677 89.0955 660.383 89.7666C660.09 90.4377 659.688 91.024 659.178 91.5253C658.668 92.0267 658.058 92.4201 657.363 92.7055C656.668 92.9909 655.911 93.1298 655.1 93.1298H646.828V74.3317H646.82ZM653.416 81.9296C653.98 81.9296 654.451 81.7522 654.822 81.3896C655.193 81.0271 655.378 80.5951 655.378 80.0783C655.378 79.5692 655.193 79.1218 654.822 78.7439C654.451 78.3659 653.98 78.1731 653.416 78.1731H651.03V81.9296H653.416V81.9296ZM654.745 89.2575C655.309 89.2575 655.78 89.0801 656.15 88.7176C656.521 88.355 656.707 87.9076 656.707 87.3831C656.707 86.874 656.513 86.4266 656.135 86.0564C655.757 85.6861 655.285 85.501 654.714 85.501H651.03V89.2575H654.745Z",
        fill: BETA_PIL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M663.65 74.3242H675.576V78.3507H667.86V81.7139H673.985V85.7404H667.86V89.1035H675.576V93.13H663.65V74.3242Z",
        fill: BETA_PIL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M682.172 78.3424H677.376V74.3159H691.263V78.3424H686.412V93.114H682.172V78.3424Z",
        fill: BETA_PIL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M697.966 74.3242H701.782L709.838 93.1146H705.435L703.767 89.1421H695.973L694.305 93.1146H689.902L697.966 74.3242ZM697.495 85.4935H702.237L699.882 79.8549L697.495 85.4935Z",
        fill: BETA_PIL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M116.318 0L68.514 35.3718L77.4034 14.526L116.318 0Z",
        fill: "#E17726",
        stroke: "#E17726",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M6.05249 0L53.4311 35.702L44.9672 14.526L6.05249 0Z",
        fill: "#E27625",
        stroke: "#E27625",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M99.1075 82.0154L86.3881 101.446L113.624 108.945L121.426 82.4398L99.1075 82.0154Z",
        fill: "#E27625",
        stroke: "#E27625",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M0.99292 82.4398L8.7475 108.945L35.9358 101.446L23.2637 82.0154L0.99292 82.4398Z",
        fill: "#E27625",
        stroke: "#E27625",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M34.4699 49.1904L26.9044 60.6037L53.8563 61.83L52.9579 32.8251L34.4699 49.1904Z",
        fill: "#E27625",
        stroke: "#E27625",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M87.9012 49.1902L69.1295 32.4948L68.5148 61.8298L95.4667 60.6035L87.9012 49.1902Z",
        fill: "#E27625",
        stroke: "#E27625",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M35.9357 101.446L52.2487 93.5703L38.2053 82.6287L35.9357 101.446Z",
        fill: "#E27625",
        stroke: "#E27625",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M70.1218 93.5703L86.3875 101.446L84.1652 82.6287L70.1218 93.5703Z",
        fill: "#E27625",
        stroke: "#E27625",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M86.3879 101.446L70.1222 93.5702L71.4461 104.135L71.3043 108.615L86.3879 101.446Z",
        fill: "#D5BFB2",
        stroke: "#D5BFB2",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M35.9359 101.446L51.0668 108.615L50.9722 104.135L52.2489 93.5703L35.9359 101.446Z",
        fill: "#D5BFB2",
        stroke: "#D5BFB2",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M51.3504 75.6485L37.8271 71.6869L47.3785 67.3008L51.3504 75.6485Z",
        fill: "#233447",
        stroke: "#233447",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M71.0199 75.6485L74.9918 67.3008L84.5904 71.6869L71.0199 75.6485Z",
        fill: "#233447",
        stroke: "#233447",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M35.9357 101.446L38.2999 82.0154L23.2635 82.4398L35.9357 101.446Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M84.0706 82.0154L86.3875 101.446L99.1069 82.4398L84.0706 82.0154Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M95.4661 60.6036L68.5142 61.8299L71.0202 75.6484L74.9921 67.3007L84.5907 71.6868L95.4661 60.6036Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M37.827 71.6868L47.3784 67.3007L51.3503 75.6484L53.8563 61.8299L26.9044 60.6036L37.827 71.6868Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M26.9044 60.6038L38.2053 82.6286L37.827 71.6869L26.9044 60.6038Z",
        fill: "#E27525",
        stroke: "#E27525",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M84.5912 71.6868L84.1656 82.6285L95.4665 60.6036L84.5912 71.6868Z",
        fill: "#E27525",
        stroke: "#E27525",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M53.8565 61.83L51.3505 75.6485L54.5185 91.9667L55.2278 70.4607L53.8565 61.83Z",
        fill: "#E27525",
        stroke: "#E27525",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M68.5146 61.83L67.1907 70.4135L67.8526 91.9667L71.0207 75.6485L68.5146 61.83Z",
        fill: "#E27525",
        stroke: "#E27525",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M71.0207 75.6484L67.8527 91.9666L70.1223 93.5701L84.1656 82.6284L84.5912 71.6868L71.0207 75.6484Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M37.8271 71.6868L38.2054 82.6284L52.2488 93.5701L54.5184 91.9666L51.3504 75.6484L37.8271 71.6868Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M71.3044 108.615L71.4462 104.135L70.2168 103.097H52.1543L50.9722 104.135L51.0668 108.615L35.9359 101.446L41.2317 105.785L51.9652 113.19H70.3587L81.1394 105.785L86.388 101.446L71.3044 108.615Z",
        fill: "#C0AC9D",
        stroke: "#C0AC9D",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M70.122 93.5702L67.8523 91.9667H54.5182L52.2486 93.5702L50.9719 104.135L52.154 103.097H70.2165L71.4459 104.135L70.122 93.5702Z",
        fill: "#161616",
        stroke: "#161616",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M118.352 37.6828L122.371 18.1575L116.319 0L70.1222 34.1928L87.901 49.1904L113.009 56.5006L118.541 50.0393L116.13 48.2943L119.96 44.8043L117.028 42.5405L120.858 39.6164L118.352 37.6828Z",
        fill: "#763E1A",
        stroke: "#763E1A",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M0 18.1575L4.06643 37.6828L1.4658 39.6164L5.34309 42.5405L2.41149 44.8043L6.24149 48.2943L3.83001 50.0393L9.36224 56.5006L34.4701 49.1904L52.2488 34.1928L6.05236 0L0 18.1575Z",
        fill: "#763E1A",
        stroke: "#763E1A",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M113.009 56.5005L87.9011 49.1903L95.4665 60.6036L84.1656 82.6285L99.1074 82.4398H121.425L113.009 56.5005Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M34.47 49.1903L9.36219 56.5005L0.99292 82.4398H23.2637L38.2054 82.6285L26.9046 60.6036L34.47 49.1903Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M68.5148 61.83L70.1225 34.1929L77.4042 14.5261H44.9674L52.2491 34.1929L53.8568 61.83L54.4715 70.5079L54.5188 91.9668H67.8529L67.9002 70.5079L68.5148 61.83Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        strokeWidth: "0.353718",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
        id: "clip0_3375_9161"
      }, /*#__PURE__*/_react.default.createElement("rect", {
        width: "723",
        height: "114.133",
        fill: "var(--color-text-default)"
      }))));
    case 'flask':
      return /*#__PURE__*/_react.default.createElement("svg", {
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
        viewBox: "0 0 1532 247",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className
      }, /*#__PURE__*/_react.default.createElement("g", {
        clipPath: "url(#clip0)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M148.354 134.603L152.72 74.4431L170.498 31.5908H94.5015L112.279 74.4431L116.645 134.603L117.997 153.579L118.101 200.289H146.898L147.002 153.579L148.354 134.603Z",
        fill: "url(#paint0_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M244.727 123.029L190.355 107.077L206.781 131.996L182.246 179.957L214.682 179.54H262.92L244.727 123.029Z",
        fill: "url(#paint1_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M74.6449 107.077L20.2726 123.029L2.18311 179.54H50.4216L82.7539 179.957L58.2188 131.996L74.6449 107.077Z",
        fill: "url(#paint2_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M153.76 164.735L146.899 200.289L151.889 203.729L182.246 179.957L183.182 156.081L153.76 164.735Z",
        fill: "#ACACAC"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M81.9224 156.081L82.7541 179.957L113.111 203.729L118.101 200.289L111.24 164.735L81.9224 156.081Z",
        fill: "#ACACAC"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M256.267 82.0553L265 39.5158L251.9 0L151.889 74.4441L189.211 108.017L244.727 123.031L256.683 108.955L251.485 105.202L259.802 97.5906L253.46 92.5859L261.777 86.2258L256.267 82.0553Z",
        fill: "url(#paint3_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M8.73266 82.0553L-0.000171178 39.5158L13.0991 0L113.111 74.4441L75.7884 108.017L20.2725 123.031L8.31682 108.955L13.5149 105.202L5.19795 97.5906L11.5396 92.5859L3.22265 86.2258L8.73266 82.0553Z",
        fill: "url(#paint4_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M58.2188 131.997L81.9222 156.082L82.7539 179.958L58.2188 131.997Z",
        fill: "#8D8D8D"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M206.781 131.997L182.246 179.958L183.181 156.082L206.781 131.997Z",
        fill: "#8D8D8D"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M187.132 220.935L151.889 203.731L154.696 226.774L154.384 236.47L187.132 220.935Z",
        fill: "#FF9F5A"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M77.8677 220.934L110.616 236.469L110.408 226.773L113.111 203.73L77.8677 220.934Z",
        fill: "#FF9F5A"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M214.682 179.542L187.132 220.935L246.079 237.2L262.921 179.542H214.682Z",
        fill: "url(#paint5_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M2.18311 179.542L18.921 237.2L77.8677 220.935L50.4216 179.542H2.18311Z",
        fill: "url(#paint6_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M13.0991 0L113.111 74.4441L97.4126 31.5918L13.0991 0Z",
        fill: "#757575"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M167.587 31.5918L151.889 74.4441L251.9 0L167.587 31.5918Z",
        fill: "#757575"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M74.6448 107.079L58.2188 131.998L116.646 134.604L113.111 74.4443L74.6448 107.079Z",
        fill: "url(#paint7_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M190.355 107.079L151.889 74.4443L148.354 134.604L206.781 131.998L190.355 107.079Z",
        fill: "url(#paint8_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M77.8677 220.934L113.111 203.731L82.7539 179.959L77.8677 220.934Z",
        fill: "url(#paint9_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M151.889 203.731L187.132 220.934L182.246 179.959L151.889 203.731Z",
        fill: "url(#paint10_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M182.246 179.958L187.132 220.934L214.682 179.541L182.246 179.958Z",
        fill: "url(#paint11_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M82.7539 179.958L77.8677 220.934L50.3177 179.541L82.7539 179.958Z",
        fill: "url(#paint12_linear)"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M206.781 131.997L148.354 134.604L153.761 164.736L162.389 146.594L183.182 156.082L206.781 131.997Z",
        fill: "#666666"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M81.9222 156.082L102.611 146.594L111.24 164.736L116.646 134.604L58.2188 131.997L81.9222 156.082Z",
        fill: "#666666"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M153.76 164.736L147.002 153.579L148.354 134.604L153.76 164.736Z",
        fill: "#8D8D8D"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M111.24 164.736L116.646 134.604L117.997 153.579L111.24 164.736Z",
        fill: "#8D8D8D"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M147.003 153.58L153.76 164.736L146.899 200.29L147.003 153.58Z",
        fill: "#8D8D8D"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M117.997 153.58L118.101 200.29L111.24 164.736L117.997 153.58Z",
        fill: "#8D8D8D"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M154.571 236.345L154.696 226.773L152.097 224.48H112.903L110.408 226.773L110.616 236.47L77.8677 220.935L89.3035 230.318L112.591 246.479H152.409L175.696 230.318L187.132 220.935L154.571 236.345Z",
        fill: "#DF7554"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M151.889 203.731L146.899 200.29H118.101L113.111 203.731L110.408 226.773L112.903 224.479H152.097L154.696 226.773L151.889 203.731Z",
        fill: "#161616",
        stroke: "#161616",
        strokeWidth: "0.0657594",
        strokeMiterlimit: "10",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M162.389 146.594L153.76 164.736L183.182 156.082L162.389 146.594Z",
        fill: "#161616"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M102.611 146.594L111.24 164.736L81.9224 156.082L102.611 146.594Z",
        fill: "#161616"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M256.683 108.955L251.485 105.202L259.802 97.5905L253.46 92.5859L261.777 86.2258L256.267 82.0553L265 39.5158L251.901 0L167.587 31.5918H97.4127L13.0993 0L0 39.5158L8.8368 82.0553L3.22283 86.2258L11.5398 92.5859L5.19812 97.5905L13.5151 105.202L8.31699 108.955L20.2727 123.031L2.18321 179.542L18.9211 237.199L77.8678 220.934L113.111 203.731L110.231 227.044L112.903 224.583L152.097 224.479L154.696 226.773L151.889 203.731L187.132 220.934L246.079 237.199L262.921 179.542L244.727 123.031L256.683 108.955Z",
        fill: "url(#paint13_linear)",
        fillOpacity: "0.1",
        style: {
          'mix-blend-mode': 'color-dodge'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M256.683 108.955L251.485 105.202L259.802 97.5905L253.46 92.5859L261.777 86.2258L256.267 82.0553L265 39.5158L251.901 0L167.587 31.5918H97.4127L13.0993 0L0 39.5158L8.8368 82.0553L3.22283 86.2258L11.5398 92.5859L5.19812 97.5905L13.5151 105.202L8.31699 108.955L20.2727 123.031L2.18321 179.542L18.9211 237.199L77.8678 220.934L113.111 203.731L117.997 200.186H125.275H139.829H147.107L151.889 203.731L187.132 220.934L246.079 237.199L262.921 179.542L244.727 123.031L256.683 108.955Z",
        fill: "url(#paint14_radial)",
        style: {
          'mix-blend-mode': 'overlay'
        }
      })), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1166.17 120.732C1159.42 116.127 1151.72 112.742 1144.35 108.759C1139.75 106.295 1134.84 103.855 1130.83 100.47C1124.08 94.944 1125.3 83.5933 1132.67 78.6647C1143.11 71.9189 1160.02 75.603 1161.86 89.7167C1161.86 90.0154 1162.16 90.339 1162.48 90.339H1178.15C1178.44 90.339 1178.77 90.0403 1178.77 89.7167C1177.85 79.8844 1174.16 71.9189 1167.41 66.6916C1160.94 61.763 1153.27 59 1145.27 59C1104.11 59 1100.42 102.611 1122.54 116.426C1125 117.969 1146.82 129.021 1154.49 133.626C1162.16 138.53 1164.62 147.143 1161.24 153.888C1158.17 160.335 1150.18 164.318 1142.48 164.019C1133.89 163.721 1127.12 158.792 1124.98 151.424C1124.68 150.204 1124.36 147.74 1124.36 146.52C1124.36 146.222 1124.06 145.898 1123.73 145.898H1106.85C1106.55 145.898 1106.23 146.197 1106.23 146.52C1106.23 158.792 1109.29 165.563 1117.58 171.711C1125.25 177.536 1133.87 180 1142.78 180C1165.82 180 1177.8 166.807 1180.26 153.291C1182.13 140.372 1178.14 128.399 1166.17 120.732Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M433.192 61.4634H425.522H417.229C416.931 61.4634 416.607 61.7621 416.607 61.7621L402.786 107.514C402.487 108.136 401.865 108.136 401.566 107.514L388.044 61.7621C388.044 61.4634 387.745 61.4634 387.421 61.4634H379.129H371.758H361.623C361.299 61.4634 361 61.7621 361 62.0608V178.754C361 179.053 361.299 179.377 361.623 179.377H378.506C378.805 179.377 379.129 179.078 379.129 178.754V90.0145C379.129 89.3922 380.05 89.0935 380.349 89.7158L394.469 135.766L395.39 138.828C395.39 139.126 395.689 139.126 396.013 139.126H408.912C409.211 139.126 409.535 138.828 409.535 138.828L410.456 135.766L424.576 89.7158C424.576 89.0935 425.497 89.4171 425.497 90.0145V178.754C425.497 179.053 425.796 179.377 426.12 179.377H443.003C443.302 179.377 443.626 179.078 443.626 178.754V62.0608C443.626 61.7621 443.327 61.4385 443.003 61.4385L433.192 61.4634Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M907.506 61.4634C907.207 61.4634 906.883 61.7621 906.883 61.7621L893.063 107.514C892.764 108.136 892.141 108.136 891.842 107.514L878.022 61.7621C878.022 61.4634 877.723 61.4634 877.399 61.4634H851.6C851.301 61.4634 850.978 61.7621 850.978 62.0857V178.779C850.978 179.078 851.276 179.402 851.6 179.402H868.484C868.783 179.402 869.106 179.103 869.106 178.779V90.0145C869.106 89.3922 870.028 89.0935 870.327 89.7158L884.446 135.766L885.368 138.828C885.368 139.126 885.667 139.126 885.99 139.126H898.89C899.189 139.126 899.512 138.828 899.512 138.828L900.434 135.766L914.553 89.7158C914.852 89.0935 915.773 89.0935 915.773 90.0145V178.754C915.773 179.053 916.072 179.377 916.396 179.377H933.28C933.579 179.377 933.902 179.078 933.902 178.754V62.0608C933.902 61.7621 933.604 61.4385 933.28 61.4385L907.506 61.4634Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M690.01 61.4648H658.359H641.475H610.148C609.849 61.4648 609.525 61.7635 609.525 62.0871V76.5245C609.525 76.8232 609.824 77.1468 610.148 77.1468H640.877V178.482C640.877 178.781 641.176 179.104 641.5 179.104H658.384C658.683 179.104 659.006 178.806 659.006 178.482V77.1219H689.711C690.01 77.1219 690.333 76.8232 690.333 76.4996V62.0623C690.632 61.7635 690.309 61.4648 690.01 61.4648Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M789.545 179.377H804.91C805.208 179.377 805.532 179.078 805.532 178.456L773.582 61.4637C773.582 61.165 773.284 61.165 772.96 61.165H767.133H756.699H751.17C750.872 61.165 750.548 61.4637 750.548 61.4637L718.897 178.456C718.897 178.755 719.196 179.377 719.52 179.377H734.884C735.183 179.377 735.507 179.078 735.507 179.078L744.721 145.001C744.721 144.703 745.02 144.703 745.343 144.703H779.435C779.733 144.703 780.057 145.001 780.057 145.001L789.271 179.078C788.922 179.054 789.246 179.377 789.545 179.377ZM749.004 127.776L761.281 82.3232C761.58 81.7009 762.202 81.7009 762.501 82.3232L774.778 127.776C774.778 128.075 774.479 128.697 774.155 128.697H749.577C749.303 128.398 749.004 128.1 749.004 127.776Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1051.59 179.377H1066.96C1067.26 179.377 1067.58 179.078 1067.58 178.456L1035.63 61.4637C1035.63 61.165 1035.33 61.165 1035.01 61.165H1029.18H1018.75H1012.92C1012.62 61.165 1012.3 61.4637 1012.3 61.4637L980.646 178.456C980.646 178.755 980.944 179.377 981.268 179.377H996.633C996.932 179.377 997.255 179.078 997.255 179.078L1006.47 145.001C1006.47 144.703 1006.77 144.703 1007.09 144.703H1041.18C1041.48 144.703 1041.81 145.001 1041.81 145.001L1051.02 179.078C1050.97 179.054 1051.27 179.377 1051.59 179.377ZM1011.03 127.776L1023.3 82.3232C1023.6 81.7009 1024.22 81.7009 1024.52 82.3232L1036.8 127.776C1036.8 128.075 1036.5 128.697 1036.18 128.697H1011.6C1011.35 128.398 1011.03 128.1 1011.03 127.776Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M512.132 162.176V125.934C512.132 125.635 512.431 125.311 512.755 125.311H557.604C557.903 125.311 558.227 125.013 558.227 124.689V110.252C558.227 109.953 557.928 109.629 557.604 109.629H512.755C512.456 109.629 512.132 109.331 512.132 109.007V77.7427C512.132 77.444 512.431 77.1204 512.755 77.1204H563.755C564.054 77.1204 564.377 76.8217 564.377 76.4981V62.0608C564.377 61.7621 564.079 61.4385 563.755 61.4385H512.132H494.626C494.327 61.4385 494.003 61.7372 494.003 62.0608V77.0955V109.331V124.988V162.45V178.406C494.003 178.705 494.302 179.028 494.626 179.028H512.132H566.195C566.494 179.028 566.818 178.73 566.818 178.406V163.048C566.818 162.749 566.519 162.425 566.195 162.425H512.755C512.456 162.799 512.132 162.475 512.132 162.176Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1320.39 178.132L1262.02 117.645C1261.72 117.346 1261.72 117.022 1262.02 116.724L1314.54 62.3844C1314.83 62.0857 1314.54 61.4634 1314.24 61.4634H1292.72C1292.42 61.4634 1292.42 61.4634 1292.42 61.7621L1247.87 108.136C1247.57 108.435 1246.95 108.136 1246.95 107.837V62.0608C1246.95 61.7621 1246.65 61.4385 1246.33 61.4385H1229.44C1229.15 61.4385 1228.82 61.7372 1228.82 62.0608V178.754C1228.82 179.053 1229.12 179.377 1229.44 179.377H1246.33C1246.63 179.377 1246.95 179.078 1246.95 178.754V127.178C1246.95 126.556 1247.57 126.257 1247.87 126.88L1298.25 179.078L1298.55 179.377H1320.06C1320.69 179.377 1320.99 178.754 1320.39 178.132Z",
        fill: TEXT_COLOR
      }), /*#__PURE__*/_react.default.createElement("rect", {
        x: "1338",
        y: "27",
        width: "194",
        height: "84",
        rx: "12",
        fill: FLASK_PILL_BACKGROUND
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1358 50.6376H1380.89V58.7139H1366.33V65.515H1377.7V73.5913H1366.33V88.3624H1358V50.6376Z",
        fill: FLASK_PILL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1386.55 50.6376H1394.87V80.2861H1410.28V88.3624H1386.55V50.6376Z",
        fill: FLASK_PILL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1427.39 50.6376H1434.94L1450.86 88.3624H1442.17L1438.87 80.3924H1423.46L1420.16 88.3624H1411.47L1427.39 50.6376ZM1426.45 73.0599H1435.83L1431.16 61.7425L1426.45 73.0599Z",
        fill: FLASK_PILL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1464.82 89C1461.85 89 1459.18 88.4155 1456.81 87.2466C1454.43 86.0422 1452.51 84.3774 1451.04 82.252L1457.43 76.7793C1458.34 78.1253 1459.51 79.188 1460.94 79.9673C1462.38 80.7112 1463.77 81.0831 1465.13 81.0831C1466.53 81.0831 1467.63 80.7997 1468.43 80.233C1469.24 79.6308 1469.64 78.8692 1469.64 77.9482C1469.64 76.9918 1469.24 76.1594 1468.43 75.451C1467.67 74.7425 1466.34 74.0695 1464.45 73.4319L1461.83 72.5286C1458.8 71.5014 1456.47 70.0845 1454.87 68.2779C1453.26 66.436 1452.46 64.2221 1452.46 61.6362C1452.46 59.7943 1452.77 58.1649 1453.4 56.748C1454.06 55.2956 1454.95 54.0736 1456.07 53.0817C1457.22 52.0899 1458.59 51.3283 1460.16 50.797C1461.73 50.2657 1463.44 50 1465.29 50C1467.56 50 1469.69 50.3896 1471.68 51.1689C1473.67 51.9482 1475.54 53.2943 1477.29 55.2071L1471.84 61.0518C1470.97 59.9891 1469.97 59.2098 1468.85 58.7139C1467.74 58.1826 1466.58 57.9169 1465.4 57.9169C1464.84 57.9169 1464.28 57.97 1463.72 58.0763C1463.2 58.1826 1462.73 58.3597 1462.31 58.6076C1461.89 58.8556 1461.54 59.1567 1461.26 59.5109C1461.01 59.8651 1460.89 60.2902 1460.89 60.7861C1460.89 61.8134 1461.35 62.6281 1462.25 63.2302C1463.2 63.797 1464.66 64.4346 1466.65 65.1431L1469.27 66.0995C1471.96 67.0913 1474.11 68.5082 1475.72 70.3501C1477.36 72.1921 1478.16 74.53 1478.13 77.3638C1478.13 79.064 1477.79 80.6403 1477.13 82.0926C1476.47 83.5095 1475.54 84.7316 1474.35 85.7589C1473.2 86.7861 1471.81 87.5831 1470.16 88.1499C1468.56 88.7166 1466.78 89 1464.82 89Z",
        fill: FLASK_PILL_TEXT
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1492.17 71.4659V88.3624H1483.9V50.6376H1492.17V66.4183L1504.8 50.6376H1515.01L1500.35 68.7561L1518 88.3624H1507.31L1492.17 71.4659Z",
        fill: FLASK_PILL_TEXT
      }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint0_linear",
        x1: "132.5",
        y1: "31.5908",
        x2: "132.5",
        y2: "200.289",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#8F8F8F"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#AEAEAE"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint1_linear",
        x1: "222.583",
        y1: "107.077",
        x2: "222.583",
        y2: "179.957",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#696969"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#A6A6A6"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint2_linear",
        x1: "42.4685",
        y1: "107.077",
        x2: "42.4685",
        y2: "179.957",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#696969"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#A6A6A6"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint3_linear",
        x1: "184.533",
        y1: "102.178",
        x2: "279.867",
        y2: "27.8973",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#1B1B1B"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#565656"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint4_linear",
        x1: "80.4668",
        y1: "102.178",
        x2: "-14.8672",
        y2: "27.8973",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#1B1B1B"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#565656"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint5_linear",
        x1: "225.027",
        y1: "179.542",
        x2: "225.027",
        y2: "237.2",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#787878"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#5E5E5E"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint6_linear",
        x1: "40.0254",
        y1: "179.542",
        x2: "40.0254",
        y2: "237.2",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#787878"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#5E5E5E"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint7_linear",
        x1: "87.4322",
        y1: "74.4443",
        x2: "87.4322",
        y2: "134.604",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#7A7A7A"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#949494"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint8_linear",
        x1: "177.568",
        y1: "74.4443",
        x2: "177.568",
        y2: "134.604",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#7A7A7A"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#949494"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint9_linear",
        x1: "95.4893",
        y1: "245.645",
        x2: "95.4893",
        y2: "-25.2885",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#7A7C7D"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#CECECF"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint10_linear",
        x1: "169.51",
        y1: "245.645",
        x2: "169.51",
        y2: "-25.2885",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#7A7C7D"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#CECECF"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint11_linear",
        x1: "198.464",
        y1: "126.784",
        x2: "198.464",
        y2: "234.065",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#3E3E3E"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#616161"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint12_linear",
        x1: "66.5358",
        y1: "126.784",
        x2: "66.5358",
        y2: "234.065",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#3E3E3E"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#616161"
      })), /*#__PURE__*/_react.default.createElement("linearGradient", {
        id: "paint13_linear",
        x1: "132.032",
        y1: "31.279",
        x2: "132.032",
        y2: "258.573",
        gradientUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#FF60DC"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#6B71FF"
      })), /*#__PURE__*/_react.default.createElement("radialGradient", {
        id: "paint14_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(132.032 26.5872) rotate(90) scale(218.953 244.615)"
      }, /*#__PURE__*/_react.default.createElement("stop", {
        stopColor: "#FF60DC"
      }), /*#__PURE__*/_react.default.createElement("stop", {
        offset: "1",
        stopColor: "#6B71FF"
      })), /*#__PURE__*/_react.default.createElement("clipPath", {
        id: "clip0"
      }, /*#__PURE__*/_react.default.createElement("rect", {
        width: "265",
        height: "247",
        fill: "white"
      }))));
    case 'mmi':
      return /*#__PURE__*/_react.default.createElement("svg", {
        height: 45,
        viewBox: "0 0 723 115",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className
      }, /*#__PURE__*/_react.default.createElement("g", {
        transform: "matrix(0.998558,0,0,1,0.000632449,0)"
      }, /*#__PURE__*/_react.default.createElement("rect", {
        x: "411.318",
        y: "4.847",
        width: "2.481",
        height: "61.306",
        style: {
          fill: 'rgb(22,22,22)'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M437.965,19.099L441.766,19.099L441.766,48.117L437.965,48.117L437.965,19.099ZM448.849,27.682L452.364,27.682L452.364,30.829C453.073,29.603 453.999,28.704 455.143,28.132C456.288,27.559 457.527,27.273 458.863,27.273C460.007,27.273 461.056,27.464 462.01,27.845C462.963,28.227 463.767,28.785 464.421,29.521C465.102,30.23 465.634,31.101 466.015,32.137C466.396,33.145 466.587,34.276 466.587,35.529L466.587,48.117L463.113,48.117L463.113,36.06C463.113,34.344 462.664,32.995 461.764,32.014C460.893,31.006 459.734,30.502 458.29,30.502C457.473,30.502 456.696,30.666 455.961,30.992C455.252,31.319 454.626,31.81 454.081,32.464C453.563,33.091 453.141,33.867 452.814,34.793C452.514,35.72 452.364,36.783 452.364,37.981L452.364,48.117L448.849,48.117L448.849,27.682ZM479.088,48.526C477.263,48.526 475.628,48.145 474.184,47.382C472.74,46.592 471.704,45.393 471.078,43.785L473.938,42.191C474.32,43.226 474.988,44.03 475.941,44.602C476.922,45.147 477.985,45.42 479.129,45.42C480.11,45.42 480.941,45.188 481.622,44.725C482.331,44.235 482.685,43.553 482.685,42.682C482.685,41.946 482.426,41.333 481.908,40.842C481.391,40.352 480.464,39.902 479.129,39.494L477.086,38.84C475.396,38.349 474.116,37.6 473.244,36.592C472.399,35.556 471.977,34.317 471.977,32.873C471.977,32.001 472.154,31.224 472.508,30.543C472.889,29.834 473.394,29.249 474.02,28.785C474.674,28.295 475.423,27.927 476.268,27.682C477.113,27.409 478.026,27.273 479.006,27.273C480.532,27.273 481.867,27.587 483.012,28.213C484.156,28.813 485.069,29.685 485.75,30.829L483.134,32.627C482.671,31.973 482.085,31.428 481.377,30.992C480.696,30.529 479.865,30.298 478.884,30.298C478.012,30.298 477.222,30.516 476.513,30.952C475.832,31.388 475.492,31.987 475.492,32.75C475.492,33.377 475.682,33.935 476.064,34.426C476.472,34.916 477.249,35.338 478.393,35.693L480.641,36.387C482.412,36.932 483.775,37.682 484.728,38.635C485.709,39.589 486.2,40.842 486.2,42.395C486.2,43.376 486.023,44.248 485.668,45.011C485.314,45.774 484.81,46.414 484.156,46.932C483.53,47.45 482.78,47.845 481.908,48.117C481.036,48.39 480.096,48.526 479.088,48.526ZM499.046,48.322C498.147,48.322 497.316,48.199 496.553,47.954C495.79,47.681 495.122,47.3 494.55,46.809C494.005,46.292 493.569,45.638 493.242,44.848C492.943,44.058 492.793,43.131 492.793,42.068L492.793,30.911L488.46,30.911L488.46,27.682L492.793,27.682L492.793,22.001L496.308,22.001L496.308,27.682L502.193,27.682L502.193,30.911L496.308,30.911L496.308,41.619C496.308,42.927 496.594,43.84 497.166,44.357C497.738,44.848 498.583,45.093 499.7,45.093C500.136,45.093 500.572,45.066 501.008,45.011C501.471,44.929 501.866,44.82 502.193,44.684L502.193,47.831C501.757,47.967 501.28,48.076 500.763,48.158C500.245,48.267 499.673,48.322 499.046,48.322ZM508.481,22.205C507.773,22.205 507.174,21.974 506.683,21.51C506.193,21.02 505.947,20.421 505.947,19.712C505.947,19.031 506.193,18.445 506.683,17.955C507.174,17.464 507.773,17.219 508.481,17.219C509.19,17.219 509.776,17.464 510.239,17.955C510.702,18.445 510.934,19.031 510.934,19.712C510.934,20.421 510.702,21.02 510.239,21.51C509.776,21.974 509.19,22.205 508.481,22.205ZM506.683,27.682L510.198,27.682L510.198,48.117L506.683,48.117L506.683,27.682ZM524.79,48.322C523.891,48.322 523.06,48.199 522.297,47.954C521.534,47.681 520.866,47.3 520.294,46.809C519.749,46.292 519.313,45.638 518.986,44.848C518.686,44.058 518.537,43.131 518.537,42.068L518.537,30.911L514.204,30.911L514.204,27.682L518.537,27.682L518.537,22.001L522.051,22.001L522.051,27.682L527.937,27.682L527.937,30.911L522.051,30.911L522.051,41.619C522.051,42.927 522.338,43.84 522.91,44.357C523.482,44.848 524.327,45.093 525.444,45.093C525.88,45.093 526.316,45.066 526.752,45.011C527.215,44.929 527.61,44.82 527.937,44.684L527.937,47.831C527.501,47.967 527.024,48.076 526.506,48.158C525.989,48.267 525.416,48.322 524.79,48.322ZM539.661,48.526C538.544,48.526 537.522,48.335 536.596,47.954C535.669,47.545 534.879,46.987 534.225,46.278C533.571,45.57 533.054,44.711 532.672,43.703C532.318,42.668 532.141,41.51 532.141,40.229L532.141,27.682L535.656,27.682L535.656,39.698C535.656,41.414 536.064,42.777 536.882,43.785C537.726,44.793 538.857,45.297 540.274,45.297C541.064,45.297 541.8,45.134 542.481,44.807C543.19,44.453 543.789,43.962 544.279,43.335C544.797,42.682 545.206,41.891 545.506,40.965C545.805,40.039 545.955,38.99 545.955,37.818L545.955,27.682L549.47,27.682L549.47,48.117L545.955,48.117L545.955,44.97C545.274,46.169 544.375,47.068 543.258,47.668C542.168,48.24 540.969,48.526 539.661,48.526ZM564.024,48.322C563.125,48.322 562.294,48.199 561.531,47.954C560.768,47.681 560.101,47.3 559.528,46.809C558.983,46.292 558.548,45.638 558.221,44.848C557.921,44.058 557.771,43.131 557.771,42.068L557.771,30.911L553.439,30.911L553.439,27.682L557.771,27.682L557.771,22.001L561.286,22.001L561.286,27.682L567.171,27.682L567.171,30.911L561.286,30.911L561.286,41.619C561.286,42.927 561.572,43.84 562.144,44.357C562.716,44.848 563.561,45.093 564.678,45.093C565.114,45.093 565.55,45.066 565.986,45.011C566.449,44.929 566.844,44.82 567.171,44.684L567.171,47.831C566.735,47.967 566.258,48.076 565.741,48.158C565.223,48.267 564.651,48.322 564.024,48.322ZM573.46,22.205C572.751,22.205 572.152,21.974 571.661,21.51C571.171,21.02 570.926,20.421 570.926,19.712C570.926,19.031 571.171,18.445 571.661,17.955C572.152,17.464 572.751,17.219 573.46,17.219C574.168,17.219 574.754,17.464 575.217,17.955C575.68,18.445 575.912,19.031 575.912,19.712C575.912,20.421 575.68,21.02 575.217,21.51C574.754,21.974 574.168,22.205 573.46,22.205ZM571.661,27.682L575.176,27.682L575.176,48.117L571.661,48.117L571.661,27.682ZM590.912,48.526C589.359,48.526 587.929,48.254 586.621,47.709C585.313,47.136 584.182,46.374 583.229,45.42C582.275,44.466 581.526,43.349 580.981,42.068C580.463,40.761 580.204,39.371 580.204,37.9C580.204,36.428 580.463,35.052 580.981,33.772C581.526,32.464 582.275,31.333 583.229,30.379C584.182,29.426 585.313,28.676 586.621,28.132C587.929,27.559 589.359,27.273 590.912,27.273C592.438,27.273 593.855,27.559 595.163,28.132C596.471,28.676 597.602,29.426 598.555,30.379C599.509,31.333 600.245,32.464 600.762,33.772C601.307,35.052 601.58,36.428 601.58,37.9C601.58,39.371 601.307,40.761 600.762,42.068C600.245,43.349 599.509,44.466 598.555,45.42C597.602,46.374 596.471,47.136 595.163,47.709C593.855,48.254 592.438,48.526 590.912,48.526ZM590.912,45.256C591.975,45.256 592.942,45.066 593.814,44.684C594.686,44.303 595.422,43.785 596.021,43.131C596.648,42.45 597.125,41.673 597.452,40.801C597.806,39.902 597.983,38.935 597.983,37.9C597.983,36.892 597.806,35.938 597.452,35.039C597.125,34.14 596.648,33.363 596.021,32.709C595.422,32.028 594.686,31.497 593.814,31.115C592.942,30.734 591.975,30.543 590.912,30.543C589.85,30.543 588.883,30.734 588.011,31.115C587.139,31.497 586.389,32.028 585.763,32.709C585.136,33.363 584.646,34.14 584.291,35.039C583.964,35.938 583.801,36.892 583.801,37.9C583.801,38.935 583.964,39.902 584.291,40.801C584.646,41.673 585.136,42.45 585.763,43.131C586.389,43.785 587.139,44.303 588.011,44.684C588.883,45.066 589.85,45.256 590.912,45.256ZM606.625,27.682L610.14,27.682L610.14,30.829C610.848,29.603 611.775,28.704 612.919,28.132C614.064,27.559 615.303,27.273 616.638,27.273C617.783,27.273 618.832,27.464 619.785,27.845C620.739,28.227 621.543,28.785 622.197,29.521C622.878,30.23 623.409,31.101 623.791,32.137C624.172,33.145 624.363,34.276 624.363,35.529L624.363,48.117L620.889,48.117L620.889,36.06C620.889,34.344 620.439,32.995 619.54,32.014C618.668,31.006 617.51,30.502 616.066,30.502C615.249,30.502 614.472,30.666 613.737,30.992C613.028,31.319 612.401,31.81 611.857,32.464C611.339,33.091 610.916,33.867 610.59,34.793C610.29,35.72 610.14,36.783 610.14,37.981L610.14,48.117L606.625,48.117L606.625,27.682ZM639.112,48.526C637.668,48.526 636.333,48.254 635.107,47.709C633.908,47.136 632.859,46.374 631.96,45.42C631.06,44.439 630.352,43.308 629.834,42.028C629.344,40.747 629.099,39.371 629.099,37.9C629.099,36.428 629.344,35.052 629.834,33.772C630.352,32.491 631.06,31.374 631.96,30.42C632.859,29.439 633.908,28.676 635.107,28.132C636.333,27.559 637.668,27.273 639.112,27.273C640.665,27.273 642.082,27.627 643.362,28.336C644.643,29.017 645.624,29.848 646.305,30.829L646.305,27.682L649.82,27.682L649.82,48.117L646.305,48.117L646.305,44.97C645.624,45.951 644.643,46.796 643.362,47.504C642.082,48.185 640.665,48.526 639.112,48.526ZM639.643,45.297C640.679,45.297 641.619,45.106 642.463,44.725C643.308,44.344 644.03,43.826 644.629,43.172C645.256,42.491 645.733,41.701 646.06,40.801C646.414,39.902 646.591,38.935 646.591,37.9C646.591,36.864 646.414,35.897 646.06,34.998C645.733,34.099 645.256,33.322 644.629,32.668C644.03,31.987 643.308,31.456 642.463,31.074C641.619,30.693 640.679,30.502 639.643,30.502C638.608,30.502 637.654,30.693 636.782,31.074C635.938,31.456 635.202,31.987 634.575,32.668C633.976,33.322 633.499,34.099 633.145,34.998C632.818,35.897 632.654,36.864 632.654,37.9C632.654,38.935 632.818,39.902 633.145,40.801C633.499,41.701 633.976,42.491 634.575,43.172C635.202,43.826 635.938,44.344 636.782,44.725C637.654,45.106 638.608,45.297 639.643,45.297ZM656.436,17.464L659.951,17.464L659.951,48.117L656.436,48.117L656.436,17.464Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
        d: "M341.696,35.934C339.688,34.605 337.473,33.66 335.377,32.479C334.018,31.711 332.571,31.032 331.39,30.058C329.382,28.404 329.796,25.156 331.892,23.738C334.904,21.73 339.895,22.853 340.426,26.957C340.426,27.046 340.515,27.105 340.603,27.105L345.151,27.105C345.269,27.105 345.358,27.016 345.328,26.898C345.092,24.063 343.999,21.701 341.991,20.195C340.072,18.748 337.887,17.98 335.554,17.98C323.535,17.98 322.443,30.707 328.91,34.723C329.648,35.196 335.997,38.385 338.241,39.773C340.485,41.161 341.194,43.7 340.22,45.708C339.334,47.539 337.03,48.809 334.727,48.661C332.217,48.514 330.268,47.155 329.589,45.029C329.471,44.645 329.412,43.907 329.412,43.582C329.412,43.494 329.323,43.405 329.235,43.405L324.303,43.405C324.215,43.405 324.126,43.494 324.126,43.582C324.126,47.155 325.012,49.134 327.433,50.935C329.707,52.648 332.188,53.356 334.757,53.356C341.489,53.356 344.974,49.547 345.683,45.59C346.303,41.722 345.151,38.237 341.696,35.934Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M130.465,18.618L122.994,18.618C122.905,18.618 122.846,18.677 122.816,18.736L118.771,32.084C118.712,32.261 118.476,32.261 118.417,32.084L114.371,18.736C114.342,18.648 114.282,18.618 114.194,18.618L106.664,18.618C106.575,18.618 106.487,18.707 106.487,18.795L106.487,52.872C106.487,52.961 106.575,53.05 106.664,53.05L111.595,53.05C111.684,53.05 111.772,52.961 111.772,52.872L111.772,26.975C111.772,26.768 112.068,26.739 112.127,26.916L116.202,40.352L116.497,41.297C116.527,41.385 116.586,41.415 116.674,41.415L120.454,41.415C120.543,41.415 120.602,41.356 120.631,41.297L120.927,40.352L125.002,26.916C125.061,26.709 125.356,26.768 125.356,26.975L125.356,52.872C125.356,52.961 125.445,53.05 125.533,53.05L130.465,53.05C130.553,53.05 130.642,52.961 130.642,52.872L130.642,18.795C130.642,18.707 130.553,18.618 130.465,18.618Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M266.19,18.618C266.102,18.618 266.043,18.677 266.013,18.736L261.968,32.084C261.908,32.261 261.672,32.261 261.613,32.084L257.568,18.736C257.538,18.648 257.479,18.618 257.39,18.618L249.89,18.618C249.801,18.618 249.713,18.707 249.713,18.795L249.713,52.872C249.713,52.961 249.801,53.05 249.89,53.05L254.821,53.05C254.91,53.05 254.999,52.961 254.999,52.872L254.999,26.975C254.999,26.768 255.294,26.739 255.353,26.916L259.428,40.352L259.723,41.297C259.753,41.385 259.812,41.415 259.9,41.415L263.68,41.415C263.769,41.415 263.828,41.356 263.857,41.297L264.153,40.352L268.228,26.916C268.287,26.709 268.582,26.768 268.582,26.975L268.582,52.872C268.582,52.961 268.671,53.05 268.759,53.05L273.691,53.05C273.779,53.05 273.868,52.961 273.868,52.872L273.868,18.795C273.868,18.707 273.779,18.618 273.691,18.618L266.19,18.618Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M202.58,18.618L179.281,18.618C179.193,18.618 179.104,18.707 179.104,18.795L179.104,23.048C179.104,23.136 179.193,23.225 179.281,23.225L188.288,23.225L188.288,52.872C188.288,52.961 188.376,53.05 188.465,53.05L193.396,53.05C193.485,53.05 193.574,52.961 193.574,52.872L193.574,23.225L202.58,23.225C202.669,23.225 202.757,23.136 202.757,23.048L202.757,18.795C202.757,18.707 202.698,18.618 202.58,18.618Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M231.658,53.049L236.147,53.049C236.265,53.049 236.353,52.931 236.324,52.813L227.052,18.618C227.022,18.53 226.963,18.5 226.875,18.5L220.437,18.5C220.349,18.5 220.289,18.559 220.26,18.618L210.988,52.813C210.958,52.931 211.047,53.049 211.165,53.049L215.653,53.049C215.742,53.049 215.801,52.99 215.831,52.931L218.518,42.98C218.547,42.891 218.606,42.862 218.695,42.862L228.617,42.862C228.705,42.862 228.764,42.921 228.794,42.98L231.481,52.931C231.511,52.99 231.599,53.049 231.658,53.049ZM219.876,37.989L223.479,24.672C223.538,24.494 223.774,24.494 223.833,24.672L227.436,37.989C227.465,38.108 227.376,38.226 227.258,38.226L220.053,38.226C219.935,38.226 219.846,38.108 219.876,37.989Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M308.198,53.049L312.687,53.049C312.805,53.049 312.893,52.931 312.864,52.813L303.592,18.618C303.562,18.53 303.503,18.5 303.415,18.5L296.977,18.5C296.889,18.5 296.829,18.559 296.8,18.618L287.528,52.813C287.498,52.931 287.587,53.049 287.705,53.049L292.193,53.049C292.282,53.049 292.341,52.99 292.371,52.931L295.058,42.98C295.087,42.891 295.146,42.862 295.235,42.862L305.157,42.862C305.245,42.862 305.304,42.921 305.334,42.98L308.021,52.931C308.051,52.99 308.11,53.049 308.198,53.049ZM296.416,37.989L300.019,24.672C300.078,24.494 300.314,24.494 300.373,24.672L303.976,37.989C304.005,38.108 303.917,38.226 303.798,38.226L296.593,38.226C296.475,38.226 296.387,38.108 296.416,37.989Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M150.669,48.018L150.669,37.446C150.669,37.358 150.757,37.269 150.846,37.269L163.986,37.269C164.075,37.269 164.164,37.18 164.164,37.092L164.164,32.84C164.164,32.751 164.075,32.662 163.986,32.662L150.846,32.662C150.757,32.662 150.669,32.574 150.669,32.485L150.669,23.449C150.669,23.361 150.757,23.272 150.846,23.272L165.788,23.272C165.876,23.272 165.965,23.183 165.965,23.095L165.965,18.843C165.965,18.754 165.876,18.665 165.788,18.665L145.56,18.665C145.472,18.665 145.383,18.754 145.383,18.843L145.383,52.89C145.383,52.979 145.472,53.067 145.56,53.067L166.408,53.067C166.497,53.067 166.585,52.979 166.585,52.89L166.585,48.402C166.585,48.313 166.497,48.224 166.408,48.224L150.816,48.224C150.728,48.195 150.669,48.136 150.669,48.018Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M386.745,52.772L369.677,35.143C369.618,35.084 369.618,34.966 369.677,34.907L385.033,18.961C385.151,18.843 385.062,18.665 384.914,18.665L378.625,18.665C378.566,18.665 378.536,18.695 378.506,18.724L365.484,32.249C365.366,32.367 365.189,32.279 365.189,32.131L365.189,18.843C365.189,18.754 365.1,18.665 365.012,18.665L360.08,18.665C359.992,18.665 359.903,18.754 359.903,18.843L359.903,52.92C359.903,53.008 359.992,53.097 360.08,53.097L365.012,53.097C365.1,53.097 365.189,53.008 365.189,52.92L365.189,37.919C365.189,37.771 365.395,37.682 365.484,37.801L380.249,53.038C380.278,53.067 380.337,53.097 380.367,53.097L386.657,53.097C386.775,53.067 386.863,52.861 386.745,52.772Z",
        style: {
          fill: 'rgb(22,22,22)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M72.896,0.305L43.118,22.493L48.655,9.417L72.896,0.305Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M4.209,0.306L33.722,22.7L28.45,9.417L4.209,0.306Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M62.175,51.752L54.252,63.94L71.217,68.644L76.077,52.018L62.175,51.752Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M1.057,52.018L5.888,68.644L22.824,63.94L14.93,51.752L1.057,52.018Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M21.911,31.161L17.198,38.32L33.987,39.089L33.428,20.895L21.911,31.161Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M55.194,31.161L43.501,20.688L43.118,39.089L59.907,38.32L55.194,31.161Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M22.824,63.939L32.986,58.999L24.238,52.136L22.824,63.939Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M44.12,58.999L54.252,63.939L52.867,52.136L44.12,58.999Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M54.252,63.939L44.12,58.999L44.944,65.626L44.856,68.436L54.252,63.939Z",
        style: {
          fill: 'rgb(215,193,179)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M22.824,63.941L32.249,68.437L32.19,65.627L32.986,59L22.824,63.941Z",
        style: {
          fill: 'rgb(215,193,179)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M32.426,47.757L24.002,45.272L29.952,42.521L32.426,47.757Z",
        style: {
          fill: 'rgb(47,52,59)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M44.679,47.757L47.153,42.521L53.132,45.272L44.679,47.757Z",
        style: {
          fill: 'rgb(47,52,59)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M22.824,63.94L24.297,51.751L14.93,52.018L22.824,63.94Z",
        style: {
          fill: 'rgb(73,123,248)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M52.808,51.751L54.252,63.94L62.175,52.018L52.808,51.751Z",
        style: {
          fill: 'rgb(73,123,248)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M59.907,38.32L43.118,39.089L44.679,47.757L47.153,42.521L53.132,45.272L59.907,38.32Z",
        style: {
          fill: 'rgb(73,123,248)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M24.002,45.272L29.952,42.521L32.426,47.757L33.987,39.089L17.198,38.32L24.002,45.272Z",
        style: {
          fill: 'rgb(73,123,248)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M17.198,38.322L24.238,52.137L24.002,45.274L17.198,38.322Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M53.133,45.272L52.867,52.135L59.907,38.32L53.133,45.272Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M33.987,39.089L32.426,47.757L34.4,57.993L34.841,44.503L33.987,39.089Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M43.118,39.089L42.293,44.473L42.706,57.993L44.679,47.757L43.118,39.089Z",
        style: {
          fill: 'rgb(109,149,249)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M44.679,47.758L42.706,57.994L44.12,59L52.867,52.136L53.133,45.273L44.679,47.758Z",
        style: {
          fill: 'rgb(182,202,252)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M24.002,45.273L24.238,52.136L32.986,59L34.399,57.994L32.426,47.758L24.002,45.273Z",
        style: {
          fill: 'rgb(182,202,252)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M44.856,68.436L44.944,65.625L44.178,64.975L32.927,64.975L32.19,65.625L32.249,68.436L22.824,63.939L26.123,66.661L32.809,71.305L44.267,71.305L50.982,66.661L54.252,63.939L44.856,68.436Z",
        style: {
          fill: 'rgb(192,173,158)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M44.119,58.999L42.706,57.993L34.4,57.993L32.986,58.999L32.19,65.625L32.927,64.975L44.178,64.975L44.944,65.625L44.119,58.999Z",
        style: {
          fill: 'rgb(47,52,59)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M74.163,23.943L76.667,11.695L72.896,0.305L44.12,21.753L55.194,31.161L70.835,35.746L74.281,31.693L72.778,30.599L75.164,28.41L73.338,26.99L75.724,25.156L74.163,23.943Z",
        style: {
          fill: 'rgb(44,86,221)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M0.439,11.697L2.972,23.945L1.352,25.158L3.767,26.992L1.941,28.412L4.327,30.601L2.824,31.695L6.271,35.748L21.911,31.163L32.986,21.755L4.209,0.307L0.439,11.697Z",
        style: {
          fill: 'rgb(44,86,221)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M70.834,35.747L55.194,31.161L59.907,38.32L52.867,52.136L62.175,52.018L76.077,52.018L70.834,35.747Z",
        style: {
          fill: 'rgb(182,202,252)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M21.911,31.161L6.271,35.747L1.057,52.018L14.93,52.018L24.238,52.136L17.198,38.32L21.911,31.161Z",
        style: {
          fill: 'rgb(182,202,252)',
          fillRule: 'nonzero'
        }
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M43.118,39.089L44.119,21.753L48.655,9.417L28.45,9.417L32.985,21.753L33.987,39.089L34.37,44.532L34.399,57.993L42.705,57.993L42.735,44.532L43.118,39.089Z",
        style: {
          fill: 'rgb(182,202,252)',
          fillRule: 'nonzero'
        }
      }))));
    default:
      return /*#__PURE__*/_react.default.createElement("svg", {
        height: LOGO_HEIGHT,
        viewBox: "0 0 1311 242",
        width: LOGO_WIDTH,
        xmlns: "http://www.w3.org/2000/svg",
        className: className
      }, /*#__PURE__*/_react.default.createElement("g", {
        fill: "none"
      }, /*#__PURE__*/_react.default.createElement("g", {
        fill: TEXT_COLOR,
        transform: "translate(361 61)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z"
      })), /*#__PURE__*/_react.default.createElement("g", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transform: "translate(1 1)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m246.1.2-101.1 75 18.8-44.2z",
        fill: "#e17726",
        stroke: "#e17726"
      }), /*#__PURE__*/_react.default.createElement("g", {
        fill: "#e27625",
        stroke: "#e27625",
        transform: "translate(2)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m10.9.2 100.2 75.7-17.9-44.9z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m71 104.5-16 24.2 57 2.6-1.9-61.5z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m184 104.5-39.7-35.4-1.3 62.2 57-2.6z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m74.1 215.3 34.5-16.7-29.7-23.2z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m146.4 198.6 34.4 16.7-4.7-39.9z"
      })), /*#__PURE__*/_react.default.createElement("g", {
        fill: "#d5bfb2",
        stroke: "#d5bfb2",
        transform: "translate(76 198)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m.1 17.3 32 15.2-.2-9.5 2.7-22.4z"
      })), /*#__PURE__*/_react.default.createElement("path", {
        d: "m108.7 160.6-28.6-8.4 20.2-9.3z",
        fill: "#233447",
        stroke: "#233447"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m150.3 160.6 8.4-17.7 20.3 9.3z",
        fill: "#233447",
        stroke: "#233447"
      }), /*#__PURE__*/_react.default.createElement("g", {
        fill: "#cc6228",
        stroke: "#cc6228",
        transform: "translate(49 128)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m27.1 87.3 5-41.2-31.8.9z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m128.9 46.1 4.9 41.2 26.9-40.3z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z"
      })), /*#__PURE__*/_react.default.createElement("g", {
        fill: "#e27525",
        stroke: "#e27525",
        transform: "translate(57 128)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m0 .7 23.9 46.7-.8-23.2z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m122 24.2-.9 23.2 23.9-46.7z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z"
      })), /*#__PURE__*/_react.default.createElement("path", {
        d: "m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z",
        fill: "#f5841f",
        stroke: "#f5841f"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z",
        fill: "#f5841f",
        stroke: "#f5841f"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z",
        fill: "#c0ac9d",
        stroke: "#c0ac9d"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z",
        fill: "#161616",
        stroke: "#161616"
      }), /*#__PURE__*/_react.default.createElement("g", {
        fill: "#763e1a",
        stroke: "#763e1a"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z"
      })), /*#__PURE__*/_react.default.createElement("g", {
        fill: "#f5841f",
        stroke: "#f5841f"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "m145 131.3 3.4-58.6 15.4-41.7h-68.6l15.4 41.7 3.4 58.6 1.3 18.4.1 45.5h28.2l.1-45.5z"
      })))));
  }
}
MetaFoxHorizontalLogo.propTypes = {
  className: _propTypes.default.string
};


      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\metafox-logo\\horizontal-logo.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\metafox-logo\\index.js", {"./metafox-logo.component":"F:\\metamask-extension\\ui\\components\\ui\\metafox-logo\\metafox-logo.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmetafox-logo%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _metafoxLogo.default;
  }
});
var _metafoxLogo = _interopRequireDefault(require("./metafox-logo.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\metafox-logo\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\metafox-logo\\metafox-logo.component.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../box/box":"F:\\metamask-extension\\ui\\components\\ui\\box\\box.js","./horizontal-logo":"F:\\metamask-extension\\ui\\components\\ui\\metafox-logo\\horizontal-logo.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cmetafox-logo%5Cmetafox-logo.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _box = _interopRequireDefault(require("../box/box"));
var _designSystem = require("../../../helpers/constants/design-system");
var _horizontalLogo = _interopRequireDefault(require("./horizontal-logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class MetaFoxLogo extends _react.PureComponent {
  render() {
    const {
      onClick,
      unsetIconHeight,
      isOnboarding
    } = this.props;
    const iconProps = unsetIconHeight ? {} : {
      height: 42,
      width: 42
    };
    iconProps.src = './images/logo/metamask-fox.svg';
    let renderHorizontalLogo = () => /*#__PURE__*/_react.default.createElement(_horizontalLogo.default, {
      className: (0, _classnames.default)({
        'app-header__metafox-logo--horizontal': !isOnboarding,
        'onboarding-app-header__metafox-logo--horizontal': isOnboarding
      })
    });
    let imageSrc = './images/logo/metamask-fox.svg';
    return /*#__PURE__*/_react.default.createElement(_box.default, {
      as: "button",
      onClick: onClick,
      className: (0, _classnames.default)({
        'app-header__logo-container': !isOnboarding,
        'onboarding-app-header__logo-container': isOnboarding,
        'app-header__logo-container--clickable': Boolean(onClick)
      }),
      backgroundColor: _designSystem.BackgroundColor.transparent,
      "data-testid": "app-header-logo"
    }, renderHorizontalLogo(), /*#__PURE__*/_react.default.createElement("img", _extends({}, iconProps, {
      src: imageSrc,
      className: (0, _classnames.default)({
        'app-header__metafox-logo--icon': !isOnboarding,
        'onboarding-app-header__metafox-logo--icon': isOnboarding
      }),
      alt: ""
    })));
  }
}
exports.default = MetaFoxLogo;
_defineProperty(MetaFoxLogo, "propTypes", {
  onClick: _propTypes.default.func,
  unsetIconHeight: _propTypes.default.bool,
  isOnboarding: _propTypes.default.bool
});
_defineProperty(MetaFoxLogo, "defaultProps", {
  onClick: undefined
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\metafox-logo\\metafox-logo.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\new-network-info\\new-network-info.js", {"../../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../../shared/constants/tokens":"F:\\metamask-extension\\shared\\constants\\tokens.js","../../../../shared/lib/fetch-with-cache":"F:\\metamask-extension\\shared\\lib\\fetch-with-cache.js","../../../contexts/i18n":"F:\\metamask-extension\\ui\\contexts\\i18n.js","../../../ducks/metamask/metamask":"F:\\metamask-extension\\ui\\ducks\\metamask\\metamask.js","../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../helpers/constants/routes":"F:\\metamask-extension\\ui\\helpers\\constants\\routes.ts","../../../helpers/utils/i18n-helper":"F:\\metamask-extension\\ui\\helpers\\utils\\i18n-helper.tsx","../../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../../store/actions":"F:\\metamask-extension\\ui\\store\\actions.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","../button":"F:\\metamask-extension\\ui\\components\\ui\\button\\index.js","../chip/chip":"F:\\metamask-extension\\ui\\components\\ui\\chip\\chip.js","../identicon":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\index.js","../popover":"F:\\metamask-extension\\ui\\components\\ui\\popover\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js","react-router-dom":"F:\\metamask-extension\\node_modules\\react-router-dom\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cnew-network-info%5Cnew-network-info.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _i18n = require("../../../contexts/i18n");
var _popover = _interopRequireDefault(require("../popover"));
var _button = _interopRequireDefault(require("../button"));
var _identicon = _interopRequireDefault(require("../identicon"));
var _box = _interopRequireDefault(require("../box"));
var _designSystem = require("../../../helpers/constants/design-system");
var _tokens = require("../../../../shared/constants/tokens");
var _fetchWithCache = _interopRequireDefault(require("../../../../shared/lib/fetch-with-cache"));
var _selectors = require("../../../selectors");
var _metamask = require("../../../ducks/metamask/metamask");
var _routes = require("../../../helpers/constants/routes");
var _chip = _interopRequireDefault(require("../chip/chip"));
var _actions = require("../../../store/actions");
var _network = require("../../../../shared/constants/network");
var _componentLibrary = require("../../component-library");
var _i18nHelper = require("../../../helpers/utils/i18n-helper");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const NewNetworkInfo = () => {
  const t = (0, _react.useContext)(_i18n.I18nContext);
  const history = (0, _reactRouterDom.useHistory)();
  const [tokenDetectionSupported, setTokenDetectionSupported] = (0, _react.useState)(false);
  const [showPopup, setShowPopup] = (0, _react.useState)(true);
  const autoDetectToken = (0, _reactRedux.useSelector)(_selectors.getUseTokenDetection);
  const primaryTokenImage = (0, _reactRedux.useSelector)(_selectors.getNativeCurrencyImage);
  const providerConfig = (0, _reactRedux.useSelector)(_metamask.getProviderConfig);
  const onCloseClick = () => {
    setShowPopup(false);
    (0, _actions.setFirstTimeUsedNetwork)(providerConfig.chainId);
  };
  const addTokenManually = () => {
    history.push(_routes.IMPORT_TOKEN_ROUTE);
    setShowPopup(false);
    (0, _actions.setFirstTimeUsedNetwork)(providerConfig.chainId);
  };
  const getIsTokenDetectionSupported = async () => {
    const fetchedTokenData = await (0, _fetchWithCache.default)(`${_tokens.TOKEN_API_METASWAP_CODEFI_URL}${providerConfig.chainId}`);
    return !fetchedTokenData.error;
  };
  const checkTokenDetection = async () => {
    const fetchedData = await getIsTokenDetectionSupported();
    setTokenDetectionSupported(fetchedData);
  };
  (0, _react.useEffect)(() => {
    checkTokenDetection();
  });
  if (!showPopup) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_popover.default, {
    onClose: onCloseClick,
    className: "new-network-info__wrapper",
    footer: /*#__PURE__*/_react.default.createElement(_button.default, {
      type: "primary",
      onClick: onCloseClick
    }, t('recoveryPhraseReminderConfirm'))
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.headingSm,
    as: "h4",
    color: _designSystem.Color.textDefault,
    fontWeight: _designSystem.FontWeight.Bold,
    align: _designSystem.TextAlign.Center
  }, t('switchedTo')), /*#__PURE__*/_react.default.createElement(_chip.default, {
    className: "new-network-info__token-box",
    backgroundColor: _designSystem.Color.backgroundAlternative,
    maxContent: false,
    label: providerConfig.type === _network.NETWORK_TYPES.RPC ? providerConfig.nickname ?? t('privateNetwork') : t((0, _i18nHelper.getNetworkLabelKey)(providerConfig.type)),
    labelProps: {
      color: _designSystem.Color.textDefault
    },
    leftIcon: primaryTokenImage ? /*#__PURE__*/_react.default.createElement(_identicon.default, {
      image: primaryTokenImage,
      diameter: 14
    }) : /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
      className: "question",
      name: _componentLibrary.IconName.Question,
      color: _designSystem.Color.iconDefault
    })
  }), /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySmBold,
    as: "h6",
    color: _designSystem.Color.textDefault,
    align: _designSystem.TextAlign.Center,
    margin: [8, 0, 0, 0]
  }, t('thingsToKeep')), /*#__PURE__*/_react.default.createElement(_box.default, {
    marginRight: 4,
    marginLeft: 5,
    marginTop: 6
  }, providerConfig.ticker ? /*#__PURE__*/_react.default.createElement(_box.default, {
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.center,
    marginBottom: 2,
    paddingBottom: 2,
    className: "new-network-info__bullet-paragraph"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    marginRight: 4,
    color: _designSystem.Color.textDefault
  }, "\u2022"), /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    color: _designSystem.Color.textDefault,
    display: _designSystem.DISPLAY.INLINE_BLOCK,
    key: "nativeTokenInfo"
  }, t('nativeToken', [/*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySmBold,
    as: "h6",
    display: _designSystem.DISPLAY.INLINE_BLOCK,
    key: "ticker"
  }, providerConfig.ticker)]))) : null, /*#__PURE__*/_react.default.createElement(_box.default, {
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.center,
    marginBottom: 2,
    paddingBottom: 2,
    className: !autoDetectToken || !tokenDetectionSupported ? 'new-network-info__bullet-paragraph' : null
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    marginRight: 4,
    color: _designSystem.Color.textDefault
  }, "\u2022"), /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    color: _designSystem.Color.textDefault,
    display: _designSystem.DISPLAY.INLINE_BLOCK,
    className: "new-network-info__bullet-paragraph__text"
  }, t('attemptSendingAssets'), ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://metamask.zendesk.com/hc/en-us/articles/4404424659995",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    color: _designSystem.Color.infoDefault,
    display: _designSystem.DISPLAY.INLINE_BLOCK
  }, t('learnMoreUpperCase'))))), !autoDetectToken || !tokenDetectionSupported ? /*#__PURE__*/_react.default.createElement(_box.default, {
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.center,
    marginBottom: 2,
    paddingBottom: 2
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    marginRight: 4,
    color: _designSystem.Color.textDefault
  }, "\u2022"), /*#__PURE__*/_react.default.createElement(_box.default, null, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    color: _designSystem.Color.textDefault,
    className: "new-network-info__token-show-up"
  }, t('tokenShowUp'), ' ', /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    onClick: addTokenManually,
    className: "new-network-info__button"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySm,
    as: "h6",
    color: _designSystem.Color.infoDefault,
    className: "new-network-info__manually-add-tokens"
  }, t('clickToManuallyAdd')))))) : null));
};
var _default = NewNetworkInfo;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\new-network-info\\new-network-info.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\nft-collection-image\\nft-collection-image.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../hooks/useNftsCollections":"F:\\metamask-extension\\ui\\hooks\\useNftsCollections.js","../../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","../identicon":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cnft-collection-image%5Cnft-collection-image.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NftCollectionImage;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _box = _interopRequireDefault(require("../box"));
var _designSystem = require("../../../helpers/constants/design-system");
var _identicon = _interopRequireDefault(require("../identicon"));
var _selectors = require("../../../selectors");
var _useNftsCollections = require("../../../hooks/useNftsCollections");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NftCollectionImage({
  assetName,
  tokenAddress
}) {
  var _tokenList$tokenAddre;
  const {
    collections
  } = (0, _useNftsCollections.useNftsCollections)();
  const tokenList = (0, _reactRedux.useSelector)(_selectors.getTokenList);
  const nftTokenListImage = (_tokenList$tokenAddre = tokenList[tokenAddress.toLowerCase()]) === null || _tokenList$tokenAddre === void 0 ? void 0 : _tokenList$tokenAddre.iconUrl;
  const renderCollectionImageOrName = () => {
    var _assetName$;
    const collection = Object.values(collections).find(({
      collectionName
    }) => collectionName === assetName);
    if (collection !== null && collection !== void 0 && collection.collectionImage || nftTokenListImage) {
      return /*#__PURE__*/_react.default.createElement(_identicon.default, {
        diameter: 24,
        image: (collection === null || collection === void 0 ? void 0 : collection.collectionImage) || nftTokenListImage
      });
    }
    return /*#__PURE__*/_react.default.createElement(_box.default, {
      color: _designSystem.Color.overlayInverse,
      textAlign: _designSystem.TextAlign.Center,
      className: "collection-image-alt"
    }, (assetName === null || assetName === void 0 ? void 0 : (_assetName$ = assetName[0]) === null || _assetName$ === void 0 ? void 0 : _assetName$.toUpperCase()) ?? null);
  };
  return /*#__PURE__*/_react.default.createElement(_box.default, null, renderCollectionImageOrName());
}
NftCollectionImage.propTypes = {
  assetName: _propTypes.default.string,
  tokenAddress: _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\nft-collection-image\\nft-collection-image.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\nickname-popover\\index.js", {"./nickname-popover.component":"F:\\metamask-extension\\ui\\components\\ui\\nickname-popover\\nickname-popover.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cnickname-popover%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _nicknamePopover.default;
  }
});
var _nicknamePopover = _interopRequireDefault(require("./nickname-popover.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\nickname-popover\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\nickname-popover\\nickname-popover.component.js", {"../../../contexts/i18n":"F:\\metamask-extension\\ui\\contexts\\i18n.js","../../../helpers/constants/routes":"F:\\metamask-extension\\ui\\helpers\\constants\\routes.ts","../../../helpers/utils/util":"F:\\metamask-extension\\ui\\helpers\\utils\\util.js","../../../hooks/useCopyToClipboard":"F:\\metamask-extension\\ui\\hooks\\useCopyToClipboard.js","../../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../button":"F:\\metamask-extension\\ui\\components\\ui\\button\\index.js","../identicon":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\index.js","../popover":"F:\\metamask-extension\\ui\\components\\ui\\popover\\index.js","../tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js","react-router-dom":"F:\\metamask-extension\\node_modules\\react-router-dom\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cnickname-popover%5Cnickname-popover.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _i18n = require("../../../contexts/i18n");
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _popover = _interopRequireDefault(require("../popover"));
var _button = _interopRequireDefault(require("../button"));
var _identicon = _interopRequireDefault(require("../identicon"));
var _util = require("../../../helpers/utils/util");
var _useCopyToClipboard = require("../../../hooks/useCopyToClipboard");
var _selectors = require("../../../selectors");
var _routes = require("../../../helpers/constants/routes");
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const NicknamePopover = ({
  address,
  nickname,
  onClose = null,
  onAdd = null,
  explorerLink
}) => {
  var _tokenList$address$to;
  const t = (0, _react.useContext)(_i18n.I18nContext);
  const history = (0, _reactRouterDom.useHistory)();
  const onAddClick = (0, _react.useCallback)(() => {
    onAdd();
  }, [onAdd]);
  const [copied, handleCopy] = (0, _useCopyToClipboard.useCopyToClipboard)();
  const tokenList = (0, _reactRedux.useSelector)(_selectors.getTokenList);
  const blockExplorerLinkText = (0, _reactRedux.useSelector)(_selectors.getBlockExplorerLinkText);
  const routeToAddBlockExplorerUrl = () => {
    history.push(`${_routes.NETWORKS_ROUTE}#blockExplorerUrl`);
  };
  const openBlockExplorer = () => {
    global.platform.openTab({
      url: explorerLink
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nickname-popover"
  }, /*#__PURE__*/_react.default.createElement(_popover.default, {
    onClose: onClose,
    className: "nickname-popover__popover-wrap"
  }, /*#__PURE__*/_react.default.createElement(_identicon.default, {
    address: address,
    diameter: 36,
    className: "nickname-popover__identicon",
    image: (_tokenList$address$to = tokenList[address.toLowerCase()]) === null || _tokenList$address$to === void 0 ? void 0 : _tokenList$address$to.iconUrl
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "nickname-popover__address"
  }, nickname || (0, _util.shortenAddress)(address)), /*#__PURE__*/_react.default.createElement("div", {
    className: "nickname-popover__public-address"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nickname-popover__public-address__constant"
  }, address), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    position: "bottom",
    title: copied ? t('copiedExclamation') : t('copyToClipboard')
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
    iconName: copied ? _componentLibrary.IconName.CopySuccess : _componentLibrary.IconName.Copy,
    size: _componentLibrary.IconSize.Sm,
    onClick: () => handleCopy(address)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "nickname-popover__view-on-block-explorer"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    className: "nickname-popover__etherscan-link",
    onClick: blockExplorerLinkText.firstPart === 'addBlockExplorer' ? routeToAddBlockExplorerUrl : openBlockExplorer,
    target: "_blank",
    rel: "noopener noreferrer",
    title: blockExplorerLinkText.firstPart === 'addBlockExplorer' ? t('addBlockExplorer') : t('etherscanView')
  }, blockExplorerLinkText.firstPart === 'addBlockExplorer' ? t('addBlockExplorer') : t('viewOnBlockExplorer'))), /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    className: "nickname-popover__footer-button",
    onClick: onAddClick
  }, nickname ? t('editANickname') : t('addANickname'))));
};
NicknamePopover.propTypes = {
  address: _propTypes.default.string,
  nickname: _propTypes.default.string,
  onClose: _propTypes.default.func,
  onAdd: _propTypes.default.func,
  explorerLink: _propTypes.default.string
};
var _default = NicknamePopover;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\nickname-popover\\nickname-popover.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\numeric-input\\numeric-input.component.js", {"../../../../shared/constants/tokens":"F:\\metamask-extension\\shared\\constants\\tokens.js","../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cnumeric-input%5Cnumeric-input.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NumericInput;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("../../../helpers/constants/design-system");
var _tokens = require("../../../../shared/constants/tokens");
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NumericInput({
  detailText = '',
  value = 0,
  onChange,
  error = '',
  autoFocus = false,
  allowDecimals = true,
  disabled = false,
  dataTestId,
  placeholder,
  id,
  name,
  inputRef
}) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('numeric-input', {
      'numeric-input--error': error
    })
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    value: value,
    onKeyDown: e => {
      if (!allowDecimals && e.key === '.') {
        e.preventDefault();
      }
    },
    onChange: e => {
      var _match$;
      const newValue = e.target.value;
      const match = _tokens.DECIMAL_REGEX.exec(newValue);
      if ((match === null || match === void 0 ? void 0 : (_match$ = match[1]) === null || _match$ === void 0 ? void 0 : _match$.length) >= 15) {
        return;
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(parseFloat(newValue || 0, 10));
    },
    min: "0",
    autoFocus: autoFocus,
    disabled: disabled,
    "data-testid": dataTestId,
    placeholder: placeholder,
    id: id,
    name: name,
    ref: inputRef
  }), detailText && /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    color: _designSystem.TextColor.textAlternative,
    variant: _designSystem.TextVariant.bodySm,
    as: "span"
  }, detailText));
}
NumericInput.propTypes = {
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  detailText: _propTypes.default.string,
  onChange: _propTypes.default.func,
  error: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  allowDecimals: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  dataTestId: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  /**
   * The name of the input
   */
  name: _propTypes.default.string,
  /**
   * The id of the input element. Should be used with htmlFor with a label element.
   */
  id: _propTypes.default.string,
  inputRef: _propTypes.default.object
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\numeric-input\\numeric-input.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\page-container\\index.js", {"./page-container-footer":"F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-footer\\index.js","./page-container-header":"F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-header\\index.js","./page-container.component":"F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpage-container%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PageContainerFooter", {
  enumerable: true,
  get: function () {
    return _pageContainerFooter.default;
  }
});
Object.defineProperty(exports, "PageContainerHeader", {
  enumerable: true,
  get: function () {
    return _pageContainerHeader.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _pageContainer.default;
  }
});
var _pageContainerHeader = _interopRequireDefault(require("./page-container-header"));
var _pageContainerFooter = _interopRequireDefault(require("./page-container-footer"));
var _pageContainer = _interopRequireDefault(require("./page-container.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\page-container\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-content.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpage-container%5Cpage-container-content.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class PageContainerContent extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "page-container__content"
    }, this.props.children);
  }
}
exports.default = PageContainerContent;
_defineProperty(PageContainerContent, "propTypes", {
  children: _propTypes.default.node.isRequired
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\page-container\\page-container-content.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-footer\\index.js", {"./page-container-footer.component":"F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-footer\\page-container-footer.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpage-container%5Cpage-container-footer%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _pageContainerFooter.default;
  }
});
var _pageContainerFooter = _interopRequireDefault(require("./page-container-footer.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\page-container\\page-container-footer\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-footer\\page-container-footer.component.js", {"../../button":"F:\\metamask-extension\\ui\\components\\ui\\button\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpage-container%5Cpage-container-footer%5Cpage-container-footer.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _button = _interopRequireDefault(require("../../button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class PageContainerFooter extends _react.Component {
  render() {
    const {
      children,
      onCancel,
      cancelText,
      onSubmit,
      submitText,
      disabled,
      submitButtonType,
      hideCancel,
      cancelButtonType,
      buttonSizeLarge = false,
      footerClassName,
      footerButtonClassName
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('page-container__footer', footerClassName)
    }, /*#__PURE__*/_react.default.createElement("footer", null, !hideCancel && /*#__PURE__*/_react.default.createElement(_button.default, {
      type: cancelButtonType || 'secondary',
      large: buttonSizeLarge,
      className: (0, _classnames.default)('page-container__footer-button', 'page-container__footer-button__cancel', footerButtonClassName),
      onClick: e => onCancel(e),
      "data-testid": "page-container-footer-cancel"
    }, cancelText || this.context.t('cancel')), /*#__PURE__*/_react.default.createElement(_button.default, {
      type: submitButtonType || 'primary',
      large: buttonSizeLarge,
      className: (0, _classnames.default)('page-container__footer-button', footerButtonClassName),
      disabled: disabled,
      onClick: e => onSubmit(e),
      "data-testid": "page-container-footer-next"
    }, submitText || this.context.t('next'))), children && /*#__PURE__*/_react.default.createElement("div", {
      className: "page-container__footer-secondary"
    }, children));
  }
}
exports.default = PageContainerFooter;
_defineProperty(PageContainerFooter, "propTypes", {
  children: _propTypes.default.node,
  onCancel: _propTypes.default.func,
  cancelText: _propTypes.default.string,
  cancelButtonType: _propTypes.default.string,
  onSubmit: _propTypes.default.func,
  submitText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  submitButtonType: _propTypes.default.string,
  hideCancel: _propTypes.default.bool,
  buttonSizeLarge: _propTypes.default.bool,
  footerClassName: _propTypes.default.string,
  footerButtonClassName: _propTypes.default.string
});
_defineProperty(PageContainerFooter, "contextTypes", {
  t: _propTypes.default.func
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\page-container\\page-container-footer\\page-container-footer.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-header\\index.js", {"./page-container-header.component":"F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-header\\page-container-header.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpage-container%5Cpage-container-header%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _pageContainerHeader.default;
  }
});
var _pageContainerHeader = _interopRequireDefault(require("./page-container-header.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\page-container\\page-container-header\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-header\\page-container-header.component.js", {"../../button":"F:\\metamask-extension\\ui\\components\\ui\\button\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpage-container%5Cpage-container-header%5Cpage-container-header.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _button = _interopRequireDefault(require("../../button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class PageContainerHeader extends _react.Component {
  renderTabs() {
    const {
      tabs
    } = this.props;
    return tabs ? /*#__PURE__*/_react.default.createElement("ul", {
      className: "page-container__tabs"
    }, tabs) : null;
  }
  renderCloseAction() {
    const {
      hideClose,
      onClose,
      headerCloseText
    } = this.props;
    if (hideClose) {
      return null;
    }
    if (headerCloseText) {
      return onClose && /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "link",
        className: "page-container__header-close-text",
        onClick: () => onClose()
      }, headerCloseText);
    }
    return onClose && /*#__PURE__*/_react.default.createElement("button", {
      className: "page-container__header-close",
      onClick: () => onClose(),
      "aria-label": "close"
    });
  }
  renderHeaderRow() {
    const {
      showBackButton,
      onBackButtonClick,
      backButtonStyles,
      backButtonString
    } = this.props;
    return showBackButton && /*#__PURE__*/_react.default.createElement("div", {
      className: "page-container__header-row"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "page-container__back-button",
      onClick: onBackButtonClick,
      style: backButtonStyles
    }, backButtonString || 'Back'));
  }
  render() {
    const {
      title,
      subtitle,
      tabs,
      className,
      hideClose
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('page-container__header', className, {
        'page-container__header--no-padding-bottom': Boolean(tabs)
      }),
      "data-testid": "page-container__header"
    }, this.renderHeaderRow(), title && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('page-container__title', {
        'page-container__title--no-margin-right': hideClose
      })
    }, title), subtitle ? /*#__PURE__*/_react.default.createElement("div", {
      className: "page-container__subtitle"
    }, subtitle) : null, this.renderCloseAction(), this.renderTabs());
  }
}
exports.default = PageContainerHeader;
_defineProperty(PageContainerHeader, "propTypes", {
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  onClose: _propTypes.default.func,
  showBackButton: _propTypes.default.bool,
  onBackButtonClick: _propTypes.default.func,
  backButtonStyles: _propTypes.default.object,
  backButtonString: _propTypes.default.string,
  tabs: _propTypes.default.node,
  headerCloseText: _propTypes.default.string,
  className: _propTypes.default.string,
  hideClose: _propTypes.default.bool
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\page-container\\page-container-header\\page-container-header.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container.component.js", {"./page-container-footer":"F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-footer\\index.js","./page-container-header":"F:\\metamask-extension\\ui\\components\\ui\\page-container\\page-container-header\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpage-container%5Cpage-container.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _pageContainerHeader = _interopRequireDefault(require("./page-container-header"));
var _pageContainerFooter = _interopRequireDefault(require("./page-container-footer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class PageContainer extends _react.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      activeTabIndex: this.props.defaultActiveTabIndex || 0
    });
  }
  handleTabClick(activeTabIndex) {
    this.setState({
      activeTabIndex
    });
  }
  renderTabs() {
    const {
      tabsComponent
    } = this.props;
    if (!tabsComponent) {
      return null;
    }
    const numberOfTabs = _react.default.Children.count(tabsComponent.props.children);
    return _react.default.Children.map(tabsComponent.props.children, (child, tabIndex) => {
      return child && /*#__PURE__*/_react.default.cloneElement(child, {
        onClick: index => this.handleTabClick(index),
        tabIndex,
        isActive: numberOfTabs > 1 && tabIndex === this.state.activeTabIndex,
        key: tabIndex,
        className: 'page-container__tab'
      });
    });
  }
  renderActiveTabContent() {
    const {
      tabsComponent
    } = this.props;
    let {
      children
    } = tabsComponent.props;
    children = children.filter(Boolean);
    const {
      activeTabIndex
    } = this.state;
    return (children[activeTabIndex] || children[0]).props.children;
  }
  renderContent() {
    const {
      contentComponent,
      tabsComponent
    } = this.props;
    if (contentComponent) {
      return contentComponent;
    } else if (tabsComponent) {
      return this.renderActiveTabContent();
    }
    return null;
  }
  getTabSubmitText() {
    const {
      tabsComponent
    } = this.props;
    const {
      activeTabIndex
    } = this.state;
    if (tabsComponent) {
      var _children$activeTabIn;
      let {
        children
      } = tabsComponent.props;
      children = children.filter(Boolean);
      if (((_children$activeTabIn = children[activeTabIndex]) === null || _children$activeTabIn === void 0 ? void 0 : _children$activeTabIn.key) === 'custom-tab') {
        return this.context.t('addCustomToken');
      }
    }
    return null;
  }
  render() {
    const {
      title,
      subtitle,
      onClose,
      showBackButton,
      onBackButtonClick,
      backButtonStyles,
      backButtonString,
      onCancel,
      cancelText,
      onSubmit,
      submitText,
      disabled,
      headerCloseText,
      hideCancel
    } = this.props;
    const tabSubmitText = this.getTabSubmitText();
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "page-container"
    }, /*#__PURE__*/_react.default.createElement(_pageContainerHeader.default, {
      title: title,
      subtitle: subtitle,
      onClose: onClose,
      showBackButton: showBackButton,
      onBackButtonClick: onBackButtonClick,
      backButtonStyles: backButtonStyles,
      backButtonString: backButtonString,
      tabs: this.renderTabs(),
      headerCloseText: headerCloseText
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "page-container__bottom"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "page-container__content"
    }, this.renderContent()), /*#__PURE__*/_react.default.createElement(_pageContainerFooter.default, {
      onCancel: onCancel,
      cancelText: cancelText,
      hideCancel: hideCancel,
      onSubmit: onSubmit,
      submitText: tabSubmitText || submitText,
      disabled: disabled
    })));
  }
}
exports.default = PageContainer;
_defineProperty(PageContainer, "contextTypes", {
  t: _propTypes.default.func
});
_defineProperty(PageContainer, "propTypes", {
  // PageContainerHeader props
  backButtonString: _propTypes.default.string,
  backButtonStyles: _propTypes.default.object,
  headerCloseText: _propTypes.default.string,
  onBackButtonClick: _propTypes.default.func,
  onClose: _propTypes.default.func,
  showBackButton: _propTypes.default.bool,
  subtitle: _propTypes.default.string,
  title: _propTypes.default.string.isRequired,
  // Tabs-related props
  defaultActiveTabIndex: _propTypes.default.number,
  tabsComponent: _propTypes.default.node,
  // Content props
  contentComponent: _propTypes.default.node,
  // PageContainerFooter props
  cancelText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  hideCancel: _propTypes.default.bool,
  onCancel: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  submitText: _propTypes.default.string
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\page-container\\page-container.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\popover\\index.js", {"./popover.component":"F:\\metamask-extension\\ui\\components\\ui\\popover\\popover.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpopover%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _popover = _interopRequireDefault(require("./popover.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _popover.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\popover\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\popover\\popover.component.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../hooks/useI18nContext":"F:\\metamask-extension\\ui\\hooks\\useI18nContext.js","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-dom":"F:\\metamask-extension\\node_modules\\react-dom\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpopover%5Cpopover.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useI18nContext = require("../../../hooks/useI18nContext");
var _box = _interopRequireDefault(require("../box"));
var _designSystem = require("../../../helpers/constants/design-system");
var _componentLibrary = require("../../component-library");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const defaultHeaderProps = {
  padding: [6, 4, 4],
  display: 'flex',
  flexDirection: _designSystem.FLEX_DIRECTION.COLUMN,
  backgroundColor: _designSystem.BackgroundColor.backgroundDefault,
  borderRadius: 'xl'
};
const defaultContentProps = {
  display: 'flex',
  flexDirection: _designSystem.FLEX_DIRECTION.COLUMN,
  justifyContent: _designSystem.JustifyContent.flexStart,
  alignItems: _designSystem.AlignItems.stretch,
  borderRadius: 'xl'
};
const defaultFooterProps = {
  display: 'flex',
  justifyContent: _designSystem.JustifyContent.spaceBetween,
  padding: [4, 6, 6]
};

/**
 * @deprecated The `<Popover>` component has been deprecated in favor of the new `<Modal>` component from the component-library.
 * Please update your code to use the new `<Modal>` component instead, which can be found at ui/components/component-library/modal/modal.tsx.
 * You can find documentation for the new Modal component in the MetaMask Storybook:
 * {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-modal--docs}
 * If you would like to help with the replacement of the old Modal component, please submit a pull request against this GitHub issue:
 * {@link https://github.com/MetaMask/metamask-extension/issues/19555}
 */

const Popover = ({
  title,
  subtitle = '',
  children,
  footer,
  footerClassName,
  onBack,
  onClose,
  onScroll,
  className,
  contentClassName,
  showArrow,
  CustomBackground,
  popoverRef,
  showScrollDown,
  onScrollDownButtonClick,
  centerTitle,
  headerProps = defaultHeaderProps,
  contentProps = defaultContentProps,
  footerProps = defaultFooterProps
}) => {
  const t = (0, _useI18nContext.useI18nContext)();
  const showHeader = title || onBack || subtitle || onClose;
  const Header = () => /*#__PURE__*/_react.default.createElement(_box.default, _extends({}, defaultHeaderProps, headerProps, {
    className: "popover-header"
  }), /*#__PURE__*/_react.default.createElement(_box.default, {
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.center,
    justifyContent: centerTitle ? null : _designSystem.JustifyContent.spaceBetween,
    className: (0, _classnames.default)('popover-header__title', {
      'popover-header__title--center': centerTitle
    }),
    marginBottom: 2
  }, onBack ? /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
    iconName: _componentLibrary.IconName.ArrowLeft,
    ariaLabel: t('back'),
    onClick: onBack,
    color: _designSystem.Color.iconDefault,
    size: _designSystem.Size.SM
  }) : null, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    textAlign: centerTitle ? _designSystem.TextAlign.Center : _designSystem.TextAlign.Start,
    ellipsis: true,
    variant: _designSystem.TextVariant.headingSm,
    as: "h2",
    width: _designSystem.BLOCK_SIZES.FULL
  }, title), onClose ? /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonIcon, {
    iconName: _componentLibrary.IconName.Close,
    ariaLabel: t('close'),
    "data-testid": "popover-close",
    onClick: onClose,
    size: _designSystem.Size.SM
  }) : null), subtitle ? /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySm
  }, subtitle) : null);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "popover-container"
  }, CustomBackground ? /*#__PURE__*/_react.default.createElement(CustomBackground, {
    onClose: onClose
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "popover-bg",
    onClick: onClose
  }), /*#__PURE__*/_react.default.createElement("section", {
    className: (0, _classnames.default)('popover-wrap', className),
    ref: popoverRef
  }, showArrow ? /*#__PURE__*/_react.default.createElement("div", {
    className: "popover-arrow"
  }) : null, showHeader && /*#__PURE__*/_react.default.createElement(Header, null), children ? /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: (0, _classnames.default)('popover-content', contentClassName),
    onScroll: onScroll
  }, defaultContentProps, contentProps), children) : null, showScrollDown ? /*#__PURE__*/_react.default.createElement(_box.default, {
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.center,
    justifyContent: _designSystem.JustifyContent.center,
    borderColor: _designSystem.BorderColor.borderDefault,
    backgroundColor: _designSystem.BackgroundColor.backgroundDefault,
    color: _designSystem.Color.iconDefault,
    onClick: onScrollDownButtonClick,
    className: "popover-scroll-button",
    style: {
      bottom: footer ? '140px' : '12px'
    },
    "data-testid": "popover-scroll-button"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    name: _componentLibrary.IconName.ArrowDown,
    color: _designSystem.IconColor.primaryDefault,
    size: _componentLibrary.IconSize.Md,
    "aria-label": t('scrollDown')
  })) : null, footer ? /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: (0, _classnames.default)('popover-footer', footerClassName)
  }, defaultFooterProps, footerProps), footer) : null));
};
Popover.propTypes = {
  /**
   * Show title of the popover
   */
  title: _propTypes.default.node,
  /**
   * Show subtitle label on popover
   */
  subtitle: _propTypes.default.string,
  /**
   * Show children content could be react child or text
   */
  children: _propTypes.default.node,
  /**
   * Show footer content could be react child or text
   */
  footer: _propTypes.default.node,
  /**
   * Add custom CSS class for footer
   */
  footerClassName: _propTypes.default.string,
  /**
   * onBack handler
   */
  onBack: _propTypes.default.func,
  /**
   * onClose handler
   */
  onClose: _propTypes.default.func,
  /**
   * onScroll handler
   */
  onScroll: _propTypes.default.func,
  CustomBackground: _propTypes.default.func,
  /**
   * Add custom CSS class for content
   */
  contentClassName: _propTypes.default.string,
  /**
   * Add custom CSS class
   */
  className: _propTypes.default.string,
  /**
   * Check if component would show arror
   */
  showArrow: _propTypes.default.bool,
  /**
   * The ref of the popover-wrap element
   */
  popoverRef: _propTypes.default.shape({
    current: _propTypes.default.instanceOf(window.Element)
  }),
  /**
   * Show title of the popover
   */
  showScrollDown: _propTypes.default.bool,
  /**
   * ScrollDown handler
   */
  onScrollDownButtonClick: _propTypes.default.func,
  /**
   * Check if use centered title
   */
  centerTitle: _propTypes.default.bool,
  /**
   * Box props for the header
   */
  headerProps: _propTypes.default.shape({
    ..._box.default.propTypes
  }),
  /**
   * Box props for the content
   */
  contentProps: _propTypes.default.shape({
    ..._box.default.propTypes
  }),
  /**
   * Box props for the footer
   */
  footerProps: _propTypes.default.shape({
    ..._box.default.propTypes
  })
};

/**
 * @deprecated The `<Popover>` component has been deprecated in favor of the new `<Modal>` component from the component-library.
 * Please update your code to use the new `<Modal>` component instead, which can be found at ui/components/component-library/modal/modal.tsx.
 * You can find documentation for the new Modal component in the MetaMask Storybook:
 * {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-modal--docs}
 * If you would like to help with the replacement of the old Modal component, please submit a pull request against this GitHub issue:
 * {@link https://github.com/MetaMask/metamask-extension/issues/19555}
 */
class PopoverPortal extends _react.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "rootNode", document.getElementById('popover-content'));
    _defineProperty(this, "instanceNode", document.createElement('div'));
  }
  componentDidMount() {
    if (!this.rootNode) {
      return;
    }
    this.rootNode.appendChild(this.instanceNode);
  }
  componentWillUnmount() {
    if (!this.rootNode) {
      return;
    }
    this.rootNode.removeChild(this.instanceNode);
  }
  render() {
    const children = /*#__PURE__*/_react.default.createElement(Popover, this.props);
    return this.rootNode ? /*#__PURE__*/_reactDom.default.createPortal(children, this.instanceNode) : children;
  }
}
exports.default = PopoverPortal;
_defineProperty(PopoverPortal, "propTypes", Popover.propTypes);

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\popover\\popover.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\pulse-loader\\index.js", {"./pulse-loader":"F:\\metamask-extension\\ui\\components\\ui\\pulse-loader\\pulse-loader.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpulse-loader%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _pulseLoader.default;
  }
});
var _pulseLoader = _interopRequireDefault(require("./pulse-loader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\pulse-loader\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\pulse-loader\\pulse-loader.js", {"react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cpulse-loader%5Cpulse-loader.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PulseLoader;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PulseLoader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pulse-loader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pulse-loader__loading-dot-one"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pulse-loader__loading-dot-two"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pulse-loader__loading-dot-three"
  }));
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\pulse-loader\\pulse-loader.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\qr-code\\index.js", {"./qr-code":"F:\\metamask-extension\\ui\\components\\ui\\qr-code\\qr-code.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cqr-code%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _qrCode.default;
  }
});
var _qrCode = _interopRequireDefault(require("./qr-code"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\qr-code\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\qr-code\\qr-code.js", {"../../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","../../../contexts/metametrics":"F:\\metamask-extension\\ui\\contexts\\metametrics.js","../../multichain/address-copy-button":"F:\\metamask-extension\\ui\\components\\multichain\\address-copy-button\\index.js","../box/box":"F:\\metamask-extension\\ui\\components\\ui\\box\\box.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","qrcode-generator":"F:\\metamask-extension\\node_modules\\qrcode-generator\\qrcode.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cqr-code%5Cqr-code.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _qrcodeGenerator = _interopRequireDefault(require("qrcode-generator"));
var _reactRedux = require("react-redux");
var _ethereumjsUtil = require("ethereumjs-util");
var _hexstringUtils = require("../../../../shared/modules/hexstring-utils");
var _addressCopyButton = require("../../multichain/address-copy-button");
var _box = _interopRequireDefault(require("../box/box"));
var _metametrics = require("../../../contexts/metametrics");
var _metametrics2 = require("../../../../shared/constants/metametrics");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (0, _reactRedux.connect)(mapStateToProps)(QrCodeView);
exports.default = _default;
function mapStateToProps(state) {
  const {
    buyView,
    warning
  } = state.appState;
  return {
    // Qr code is not fetched from state. 'message' and 'data' props are passed instead.
    buyView,
    warning
  };
}
function QrCodeView({
  Qr,
  warning
}) {
  const trackEvent = (0, _react.useContext)(_metametrics.MetaMetricsContext);
  const {
    message,
    data
  } = Qr;
  const address = `${(0, _ethereumjsUtil.isHexPrefixed)(data) ? 'ethereum:' : ''}${(0, _hexstringUtils.toChecksumHexAddress)(data)}`;
  const qrImage = (0, _qrcodeGenerator.default)(4, 'M');
  qrImage.addData(address);
  qrImage.make();
  const header = message ? /*#__PURE__*/_react.default.createElement("div", {
    className: "qr-code__header"
  }, message) : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "qr-code"
  }, Array.isArray(message) ? /*#__PURE__*/_react.default.createElement("div", {
    className: "qr-code__message-container"
  }, message.map((msg, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "qr_code__message",
    key: index
  }, msg))) : header, warning ? /*#__PURE__*/_react.default.createElement("span", {
    className: "qr-code__error"
  }, warning) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "qr-code__wrapper",
    dangerouslySetInnerHTML: {
      __html: qrImage.createTableTag(5, 24)
    }
  }), /*#__PURE__*/_react.default.createElement(_box.default, {
    marginBottom: 6
  }, /*#__PURE__*/_react.default.createElement(_addressCopyButton.AddressCopyButton, {
    wrap: true,
    address: (0, _hexstringUtils.toChecksumHexAddress)(data),
    onClick: () => {
      trackEvent({
        category: _metametrics2.MetaMetricsEventCategory.Accounts,
        event: _metametrics2.MetaMetricsEventName.PublicAddressCopied,
        properties: {
          location: 'Account Details Modal'
        }
      });
    }
  })));
}
QrCodeView.propTypes = {
  warning: _propTypes.default.node,
  Qr: _propTypes.default.shape({
    message: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
    data: _propTypes.default.string.isRequired
  }).isRequired
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\qr-code\\qr-code.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\review-spending-cap\\review-spending-cap.js", {"../../../../shared/modules/Numeric":"F:\\metamask-extension\\shared\\modules\\Numeric.ts","../../../contexts/i18n":"F:\\metamask-extension\\ui\\contexts\\i18n.js","../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","../tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Creview-spending-cap%5Creview-spending-cap.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReviewSpendingCap;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("../../../contexts/i18n");
var _box = _interopRequireDefault(require("../box"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _componentLibrary = require("../../component-library");
var _designSystem = require("../../../helpers/constants/design-system");
var _Numeric = require("../../../../shared/modules/Numeric");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ReviewSpendingCap({
  tokenName,
  currentTokenBalance,
  tokenValue,
  onEdit
}) {
  const t = (0, _react.useContext)(_i18n.I18nContext);
  const valueIsGreaterThanBalance = new _Numeric.Numeric(Number(tokenValue), 10).greaterThan(Number(currentTokenBalance), 10);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "review-spending-cap",
    borderRadius: _designSystem.Size.SM,
    paddingTop: 4,
    paddingRight: 4,
    paddingLeft: 4,
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.flexStart,
    flexDirection: _designSystem.FLEX_DIRECTION.COLUMN,
    backgroundColor: _designSystem.BackgroundColor.backgroundAlternative,
    gap: 1
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    flexDirection: _designSystem.FLEX_DIRECTION.ROW,
    display: _designSystem.DISPLAY.FLEX,
    alignItems: _designSystem.AlignItems.center,
    className: "review-spending-cap__heading"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    flexDirection: _designSystem.FLEX_DIRECTION.ROW,
    className: "review-spending-cap__heading-title"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    variant: _designSystem.TextVariant.bodySmBold,
    as: "h6",
    display: _designSystem.DISPLAY.INLINE_BLOCK
  }, t('dappRequestedSpendingCap')), /*#__PURE__*/_react.default.createElement(_box.default, {
    marginLeft: 2,
    display: _designSystem.DISPLAY.INLINE_BLOCK
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    interactive: true,
    position: "top",
    html: /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
      variant: _designSystem.TextVariant.bodySmBold,
      as: "h6",
      color: _designSystem.TextColor.textAlternative,
      className: "review-spending-cap__heading-title__tooltip"
    }, valueIsGreaterThanBalance && t('warningTooltipText', [/*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
      key: "tooltip-text",
      variant: _designSystem.TextVariant.bodySmBold,
      as: "h6",
      color: _designSystem.TextColor.errorDefault
    }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
      name: _componentLibrary.IconName.Warning,
      style: {
        verticalAlign: 'middle'
      }
    }), t('beCareful'))]), Number(tokenValue) === 0 && t('revokeSpendingCapTooltipText'))
  }, valueIsGreaterThanBalance && /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    className: "review-spending-cap__heading-title__tooltip__warning-icon",
    name: _componentLibrary.IconName.Danger,
    color: _designSystem.IconColor.errorDefault,
    size: _componentLibrary.IconSize.Sm,
    style: {
      'vertical-align': 'middle'
    }
  }), Number(tokenValue) === 0 && /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    className: "review-spending-cap__heading-title__tooltip__question-icon",
    name: _componentLibrary.IconName.Question,
    color: _designSystem.IconColor.iconDefault
  })))), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "review-spending-cap__heading-detail",
    textAlign: _designSystem.TextAlign.End
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.ButtonLink, {
    size: _designSystem.Size.auto,
    onClick: e => {
      e.preventDefault();
      onEdit();
    }
  }, t('edit')))), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "review-spending-cap__value"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Text, {
    color: valueIsGreaterThanBalance ? _designSystem.TextColor.errorDefault : _designSystem.TextColor.textDefault,
    variant: _designSystem.TextVariant.bodySmBold,
    as: "h6",
    marginBottom: 3
  }, tokenValue, " ", tokenName)));
}
ReviewSpendingCap.propTypes = {
  tokenName: _propTypes.default.string,
  currentTokenBalance: _propTypes.default.string,
  tokenValue: _propTypes.default.string,
  onEdit: _propTypes.default.func
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\review-spending-cap\\review-spending-cap.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\sender-to-recipient\\index.js", {"./sender-to-recipient.component":"F:\\metamask-extension\\ui\\components\\ui\\sender-to-recipient\\sender-to-recipient.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csender-to-recipient%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _senderToRecipient.default;
  }
});
var _senderToRecipient = _interopRequireDefault(require("./sender-to-recipient.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\sender-to-recipient\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\sender-to-recipient\\sender-to-recipient.component.js", {"../../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","../../../helpers/utils/util":"F:\\metamask-extension\\ui\\helpers\\utils\\util.js","../../../hooks/useI18nContext":"F:\\metamask-extension\\ui\\hooks\\useI18nContext.js","../../app/modals/nickname-popovers":"F:\\metamask-extension\\ui\\components\\app\\modals\\nickname-popovers\\index.js","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","../account-mismatch-warning/account-mismatch-warning.component":"F:\\metamask-extension\\ui\\components\\ui\\account-mismatch-warning\\account-mismatch-warning.component.js","../identicon":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\index.js","../tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\index.js","./sender-to-recipient.constants":"F:\\metamask-extension\\ui\\components\\ui\\sender-to-recipient\\sender-to-recipient.constants.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","copy-to-clipboard":"F:\\metamask-extension\\node_modules\\copy-to-clipboard\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csender-to-recipient%5Csender-to-recipient.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecipientWithAddress = RecipientWithAddress;
exports.default = SenderToRecipient;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _identicon = _interopRequireDefault(require("../identicon"));
var _util = require("../../../helpers/utils/util");
var _accountMismatchWarning = _interopRequireDefault(require("../account-mismatch-warning/account-mismatch-warning.component"));
var _useI18nContext = require("../../../hooks/useI18nContext");
var _hexstringUtils = require("../../../../shared/modules/hexstring-utils");
var _nicknamePopovers = _interopRequireDefault(require("../../app/modals/nickname-popovers"));
var _componentLibrary = require("../../component-library");
var _senderToRecipient = require("./sender-to-recipient.constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const variantHash = {
  [_senderToRecipient.DEFAULT_VARIANT]: 'sender-to-recipient--default',
  [_senderToRecipient.CARDS_VARIANT]: 'sender-to-recipient--cards',
  [_senderToRecipient.FLAT_VARIANT]: 'sender-to-recipient--flat'
};
function SenderAddress({
  addressOnly,
  checksummedSenderAddress,
  senderName,
  onSenderClick,
  senderAddress,
  warnUserOnAccountMismatch
}) {
  const t = (0, _useI18nContext.useI18nContext)();
  const [addressCopied, setAddressCopied] = (0, _react.useState)(false);
  let tooltipHtml = /*#__PURE__*/_react.default.createElement("p", null, t('copiedExclamation'));
  if (!addressCopied) {
    tooltipHtml = addressOnly ? /*#__PURE__*/_react.default.createElement("p", null, t('copyAddress')) : /*#__PURE__*/_react.default.createElement("p", null, (0, _util.shortenAddress)(checksummedSenderAddress), /*#__PURE__*/_react.default.createElement("br", null), t('copyAddress'));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('sender-to-recipient__party sender-to-recipient__party--sender'),
    onClick: () => {
      setAddressCopied(true);
      (0, _copyToClipboard.default)(checksummedSenderAddress);
      if (onSenderClick) {
        onSenderClick();
      }
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__sender-icon"
  }, /*#__PURE__*/_react.default.createElement(_identicon.default, {
    address: (0, _hexstringUtils.toChecksumHexAddress)(senderAddress),
    diameter: 24
  })), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    position: "bottom",
    html: tooltipHtml,
    wrapperClassName: "sender-to-recipient__tooltip-wrapper",
    containerClassName: "sender-to-recipient__tooltip-container",
    onHidden: () => setAddressCopied(false)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__name"
  }, addressOnly ? /*#__PURE__*/_react.default.createElement("span", null, `${senderName || (0, _util.shortenAddress)(checksummedSenderAddress)}`) : senderName)), warnUserOnAccountMismatch && /*#__PURE__*/_react.default.createElement(_accountMismatchWarning.default, {
    address: senderAddress
  }));
}
SenderAddress.propTypes = {
  senderName: _propTypes.default.string,
  checksummedSenderAddress: _propTypes.default.string,
  addressOnly: _propTypes.default.bool,
  senderAddress: _propTypes.default.string,
  onSenderClick: _propTypes.default.func,
  warnUserOnAccountMismatch: _propTypes.default.bool
};
function RecipientWithAddress({
  checksummedRecipientAddress,
  onRecipientClick,
  addressOnly,
  recipientNickname,
  recipientEns,
  recipientName,
  recipientMetadataName,
  recipientIsOwnedAccount
}) {
  const t = (0, _useI18nContext.useI18nContext)();
  const [showNicknamePopovers, setShowNicknamePopovers] = (0, _react.useState)(false);
  const [addressCopied, setAddressCopied] = (0, _react.useState)(false);
  let tooltipHtml = /*#__PURE__*/_react.default.createElement("p", null, t('copiedExclamation'));
  if (!addressCopied) {
    tooltipHtml = addressOnly ? /*#__PURE__*/_react.default.createElement("p", null, t('copyAddress')) : /*#__PURE__*/_react.default.createElement("p", null, (0, _util.shortenAddress)(checksummedRecipientAddress), /*#__PURE__*/_react.default.createElement("br", null), t('copyAddress'));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__party sender-to-recipient__party--recipient sender-to-recipient__party--recipient-with-address",
    onClick: () => {
      if (recipientIsOwnedAccount) {
        setAddressCopied(true);
        (0, _copyToClipboard.default)(checksummedRecipientAddress);
      } else {
        setShowNicknamePopovers(true);
        if (onRecipientClick) {
          onRecipientClick();
        }
      }
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__sender-icon"
  }, /*#__PURE__*/_react.default.createElement(_identicon.default, {
    address: checksummedRecipientAddress,
    diameter: 24
  })), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    position: "bottom",
    disabled: !recipientName,
    html: tooltipHtml,
    wrapperClassName: "sender-to-recipient__tooltip-wrapper",
    containerClassName: "sender-to-recipient__tooltip-container",
    onHidden: () => setAddressCopied(false)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__name",
    "data-testid": "sender-to-recipient__name"
  }, addressOnly ? recipientName || recipientNickname || recipientMetadataName || recipientEns || (0, _util.shortenAddress)(checksummedRecipientAddress) : recipientName || recipientNickname || recipientMetadataName || recipientEns || (0, _util.shortenAddress)(checksummedRecipientAddress) || t('newContract')))), showNicknamePopovers ? /*#__PURE__*/_react.default.createElement(_nicknamePopovers.default, {
    onClose: () => setShowNicknamePopovers(false),
    address: checksummedRecipientAddress
  }) : null);
}
RecipientWithAddress.propTypes = {
  checksummedRecipientAddress: _propTypes.default.string,
  recipientName: _propTypes.default.string,
  recipientMetadataName: _propTypes.default.string,
  recipientEns: _propTypes.default.string,
  recipientNickname: _propTypes.default.string,
  addressOnly: _propTypes.default.bool,
  onRecipientClick: _propTypes.default.func,
  recipientIsOwnedAccount: _propTypes.default.bool
};
function Arrow({
  variant
}) {
  return variant === _senderToRecipient.DEFAULT_VARIANT ? /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__arrow-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__arrow-circle"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-arrow-right sender-to-recipient__arrow-circle__icon"
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__arrow-container"
  }, /*#__PURE__*/_react.default.createElement(_componentLibrary.Icon, {
    name: _componentLibrary.IconName.ArrowRight
  }));
}
Arrow.propTypes = {
  variant: _propTypes.default.oneOf([_senderToRecipient.DEFAULT_VARIANT, _senderToRecipient.CARDS_VARIANT, _senderToRecipient.FLAT_VARIANT])
};
function SenderToRecipient({
  senderAddress,
  addressOnly,
  senderName,
  recipientNickname,
  recipientName,
  recipientMetadataName,
  recipientEns,
  onRecipientClick,
  onSenderClick,
  recipientAddress,
  variant,
  warnUserOnAccountMismatch,
  recipientIsOwnedAccount
}) {
  const t = (0, _useI18nContext.useI18nContext)();
  const checksummedSenderAddress = (0, _hexstringUtils.toChecksumHexAddress)(senderAddress);
  const checksummedRecipientAddress = (0, _hexstringUtils.toChecksumHexAddress)(recipientAddress);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('sender-to-recipient', variantHash[variant]),
    "data-testid": "sender-to-recipient"
  }, /*#__PURE__*/_react.default.createElement(SenderAddress, {
    checksummedSenderAddress: checksummedSenderAddress,
    addressOnly: addressOnly,
    senderName: senderName,
    onSenderClick: onSenderClick,
    senderAddress: senderAddress,
    warnUserOnAccountMismatch: warnUserOnAccountMismatch
  }), /*#__PURE__*/_react.default.createElement(Arrow, {
    variant: variant
  }), recipientAddress ? /*#__PURE__*/_react.default.createElement(RecipientWithAddress, {
    checksummedRecipientAddress: checksummedRecipientAddress,
    onRecipientClick: onRecipientClick,
    addressOnly: addressOnly,
    recipientNickname: recipientNickname,
    recipientEns: recipientEns,
    recipientName: recipientName,
    recipientMetadataName: recipientMetadataName,
    recipientIsOwnedAccount: recipientIsOwnedAccount
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__party sender-to-recipient__party--recipient"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-file-text-o"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sender-to-recipient__name"
  }, t('newContract'))));
}
SenderToRecipient.defaultProps = {
  variant: _senderToRecipient.DEFAULT_VARIANT,
  warnUserOnAccountMismatch: true
};
SenderToRecipient.propTypes = {
  senderName: _propTypes.default.string,
  senderAddress: _propTypes.default.string,
  recipientName: _propTypes.default.string,
  recipientMetadataName: _propTypes.default.string,
  recipientEns: _propTypes.default.string,
  recipientAddress: _propTypes.default.string,
  recipientNickname: _propTypes.default.string,
  variant: _propTypes.default.oneOf([_senderToRecipient.DEFAULT_VARIANT, _senderToRecipient.CARDS_VARIANT, _senderToRecipient.FLAT_VARIANT]),
  addressOnly: _propTypes.default.bool,
  onRecipientClick: _propTypes.default.func,
  onSenderClick: _propTypes.default.func,
  warnUserOnAccountMismatch: _propTypes.default.bool,
  recipientIsOwnedAccount: _propTypes.default.bool
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\sender-to-recipient\\sender-to-recipient.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\sender-to-recipient\\sender-to-recipient.constants.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csender-to-recipient%5Csender-to-recipient.constants.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FLAT_VARIANT = exports.DEFAULT_VARIANT = exports.CARDS_VARIANT = void 0;
// Component design variants
const DEFAULT_VARIANT = 'DEFAULT_VARIANT';
exports.DEFAULT_VARIANT = DEFAULT_VARIANT;
const CARDS_VARIANT = 'CARDS_VARIANT';
exports.CARDS_VARIANT = CARDS_VARIANT;
const FLAT_VARIANT = 'FLAT_VARIANT';
exports.FLAT_VARIANT = FLAT_VARIANT;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\sender-to-recipient\\sender-to-recipient.constants.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\show-hide-toggle\\index.js", {"./show-hide-toggle":"F:\\metamask-extension\\ui\\components\\ui\\show-hide-toggle\\show-hide-toggle.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cshow-hide-toggle%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _showHideToggle.default;
  }
});
var _showHideToggle = _interopRequireDefault(require("./show-hide-toggle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\show-hide-toggle\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\show-hide-toggle\\show-hide-toggle.js", {"../icon/icon-eye":"F:\\metamask-extension\\ui\\components\\ui\\icon\\icon-eye.js","../icon/icon-eye-slash":"F:\\metamask-extension\\ui\\components\\ui\\icon\\icon-eye-slash.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cshow-hide-toggle%5Cshow-hide-toggle.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _iconEye = _interopRequireDefault(require("../icon/icon-eye"));
var _iconEyeSlash = _interopRequireDefault(require("../icon/icon-eye-slash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ShowHideToggle = ({
  id,
  shown,
  onChange,
  ariaLabelHidden,
  ariaLabelShown,
  className,
  'data-testid': dataTestId,
  disabled,
  title
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('show-hide-toggle', className)
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "show-hide-toggle__input",
    id: id,
    type: "checkbox",
    checked: shown,
    onChange: onChange,
    "data-testid": dataTestId,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "show-hide-toggle__label",
    title: title
  }, shown ? /*#__PURE__*/_react.default.createElement(_iconEye.default, {
    ariaLabel: ariaLabelShown,
    className: "show-hide-toggle__icon"
  }) : /*#__PURE__*/_react.default.createElement(_iconEyeSlash.default, {
    ariaLabel: ariaLabelHidden,
    className: "show-hide-toggle__icon"
  })));
};
ShowHideToggle.propTypes = {
  /**
   * The id of the ShowHideToggle for htmlFor
   */
  id: _propTypes.default.string.isRequired,
  /**
   * If the ShowHideToggle is in the "shown" state or not
   */
  shown: _propTypes.default.bool.isRequired,
  /**
   * The onChange handler of the ShowHideToggle
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * The aria-label of the icon representing the "hidden" state
   */
  ariaLabelHidden: _propTypes.default.string.isRequired,
  /**
   * The aria-label of the icon representing the "shown" state
   */
  ariaLabelShown: _propTypes.default.string.isRequired,
  /**
   * An additional className to give the ShowHideToggle
   */
  className: _propTypes.default.string,
  /**
   * The data test id of the input
   */
  'data-testid': _propTypes.default.string,
  /**
   * Whether the input is disabled or not
   */
  disabled: _propTypes.default.bool,
  /**
   * The title for the toggle. This is shown in a tooltip on hover.
   */
  title: _propTypes.default.string
};
var _default = ShowHideToggle;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\show-hide-toggle\\show-hide-toggle.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\simulation-error-message\\index.js", {"./simulation-error-message":"F:\\metamask-extension\\ui\\components\\ui\\simulation-error-message\\simulation-error-message.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csimulation-error-message%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _simulationErrorMessage.default;
  }
});
var _simulationErrorMessage = _interopRequireDefault(require("./simulation-error-message"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\simulation-error-message\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\simulation-error-message\\simulation-error-message.js", {"../../../../.storybook/i18n":"F:\\metamask-extension\\.storybook\\i18n.js","../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../component-library":"F:\\metamask-extension\\ui\\components\\component-library\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csimulation-error-message%5Csimulation-error-message.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SimulationErrorMessage;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _componentLibrary = require("../../component-library");
var _designSystem = require("../../../helpers/constants/design-system");
var _i18n = require("../../../../.storybook/i18n");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function SimulationErrorMessage({
  userAcknowledgedGasMissing = false,
  setUserAcknowledgedGasMissing
}) {
  const t = (0, _react.useContext)(_i18n.I18nContext);
  return userAcknowledgedGasMissing === true ? /*#__PURE__*/_react.default.createElement(_componentLibrary.BannerAlert, {
    severity: _designSystem.SEVERITIES.DANGER
  }, t('simulationErrorMessageV2')) : /*#__PURE__*/_react.default.createElement(_componentLibrary.BannerAlert, {
    severity: _designSystem.SEVERITIES.DANGER,
    actionButtonLabel: t('proceedWithTransaction'),
    actionButtonOnClick: setUserAcknowledgedGasMissing
  }, t('simulationErrorMessageV2'));
}
SimulationErrorMessage.propTypes = {
  userAcknowledgedGasMissing: _propTypes.default.bool,
  setUserAcknowledgedGasMissing: _propTypes.default.func
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\simulation-error-message\\simulation-error-message.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\site-icon\\index.js", {"./site-icon":"F:\\metamask-extension\\ui\\components\\ui\\site-icon\\site-icon.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csite-icon%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _siteIcon.default;
  }
});
var _siteIcon = _interopRequireDefault(require("./site-icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\site-icon\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\site-icon\\site-icon.js", {"../icon-border":"F:\\metamask-extension\\ui\\components\\ui\\icon-border\\index.js","../icon-with-fallback":"F:\\metamask-extension\\ui\\components\\ui\\icon-with-fallback\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csite-icon%5Csite-icon.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SiteIcon;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _iconBorder = _interopRequireDefault(require("../icon-border"));
var _iconWithFallback = _interopRequireDefault(require("../icon-with-fallback"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @deprecated `<SiteIcon />` has been deprecated in favor of the new `<AvatarFavicon>` component from the component-library.
 * Please update your code to use the new <AvatarFavicon> component instead, which can be found at ./ui/components/component-library/avatar-favicon.js.
 * You can find documentation for the new AvatarFavicon component in the MetaMask Storybook:
 * {@link https://metamask.github.io/metamask-storybook/?path=/story/components-componentlibrary-avatarfavicon--default-story}
 * Help to replace `SiteIcon` with `AvatarFavicon` by submitting a PR
 */

function SiteIcon({
  icon = null,
  name = '',
  size,
  className
}) {
  const iconSize = Math.floor(size * 0.75);
  return /*#__PURE__*/_react.default.createElement(_iconBorder.default, {
    size: size,
    className: className
  }, /*#__PURE__*/_react.default.createElement(_iconWithFallback.default, {
    icon: icon,
    name: name,
    size: iconSize
  }));
}
SiteIcon.propTypes = {
  /**
   * Additional className to add to the root element of SiteIcon.
   */
  className: _propTypes.default.string,
  /**
   * The img src of the icon.
   * Used in IconWithFallback
   */
  icon: _propTypes.default.string,
  /**
   * The name of the icon also used for the alt tag of the image and fallback letter.
   * Used in IconWithFallback
   */
  name: _propTypes.default.string,
  /**
   * The size of the icon.
   * Used in IconWithFallback
   */
  size: _propTypes.default.number.isRequired
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\site-icon\\site-icon.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\site-origin\\index.js", {"./site-origin":"F:\\metamask-extension\\ui\\components\\ui\\site-origin\\site-origin.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csite-origin%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _siteOrigin.default;
  }
});
var _siteOrigin = _interopRequireDefault(require("./site-origin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\site-origin\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\site-origin\\site-origin.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../chip":"F:\\metamask-extension\\ui\\components\\ui\\chip\\index.js","../icon-with-fallback":"F:\\metamask-extension\\ui\\components\\ui\\icon-with-fallback\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Csite-origin%5Csite-origin.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SiteOrigin;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _chip = _interopRequireDefault(require("../chip"));
var _iconWithFallback = _interopRequireDefault(require("../icon-with-fallback"));
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SiteOrigin({
  siteOrigin,
  iconSrc,
  iconName,
  chip,
  className,
  title,
  leftIcon,
  rightIcon
}) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('site-origin', className),
    title: title
  }, chip ? /*#__PURE__*/_react.default.createElement(_chip.default, {
    borderColor: _designSystem.BorderColor.borderMuted,
    label: siteOrigin,
    maxContent: false,
    leftIcon: leftIcon || /*#__PURE__*/_react.default.createElement(_iconWithFallback.default, {
      icon: iconSrc,
      name: iconName,
      size: 24
    }),
    rightIcon: rightIcon
  }) : /*#__PURE__*/_react.default.createElement("bdi", {
    dir: "ltr"
  }, siteOrigin));
}
SiteOrigin.propTypes = {
  /**
   * The origin of the site generally the URL
   */
  siteOrigin: _propTypes.default.string.isRequired,
  /**
   * Icon name is used for the fallback icon and will display the first letter of the string
   * when iconSrc errors or is not provided.
   */
  iconName: _propTypes.default.string,
  /**
   * The image src of the icon
   */
  iconSrc: _propTypes.default.string,
  /**
   * Additional className added to the root html element
   */
  className: _propTypes.default.string,
  /**
   * title specifies extra information and is added to a title attribute added to the root html element
   * It is most often shown as a tooltip text when the mouse moves over the element.
   */
  title: _propTypes.default.string,
  /**
   * Whether the SiteOrigin is displayed as a chip or plain text.
   * if false iconSrc and iconName props will not be used.
   */
  chip: _propTypes.default.bool,
  /**
   * The icon to display on the left side of the chip. If not provided, the iconSrc and iconName will be used.
   */
  leftIcon: _propTypes.default.node,
  /**
   * The icon to display on the right side of the chip.
   */
  rightIcon: _propTypes.default.node
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\site-origin\\site-origin.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\spinner\\index.js", {"./spinner.component":"F:\\metamask-extension\\ui\\components\\ui\\spinner\\spinner.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cspinner%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _spinner = _interopRequireDefault(require("./spinner.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _spinner.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\spinner\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\spinner\\spinner.component.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cspinner%5Cspinner.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Spinner = ({
  className = '',
  color = 'var(--color-text-default)'
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `spinner ${className}`
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "lds-spinner",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    style: {
      background: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(0 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.9166666666666666s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(30 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.8333333333333334s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(60 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.75s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(90 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.6666666666666666s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(120 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.5833333333333334s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(150 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.5s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(180 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.4166666666666667s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(210 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.3333333333333333s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(240 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.25s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(270 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.16666666666666666s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(300 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "-0.08333333333333333s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(330 50 50)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: 45,
    y: 0,
    rx: 0,
    ry: 0,
    width: 10,
    height: 30,
    fill: color
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  })))));
};
Spinner.propTypes = {
  className: _propTypes.default.string,
  color: _propTypes.default.string
};
var _default = Spinner;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\spinner\\spinner.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\tabs\\index.js", {"./tab":"F:\\metamask-extension\\ui\\components\\ui\\tabs\\tab\\index.js","./tabs.component":"F:\\metamask-extension\\ui\\components\\ui\\tabs\\tabs.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctabs%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function () {
    return _tab.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function () {
    return _tabs.default;
  }
});
var _tabs = _interopRequireDefault(require("./tabs.component"));
var _tab = _interopRequireDefault(require("./tab"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\tabs\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\tabs\\tab\\index.js", {"./tab.component":"F:\\metamask-extension\\ui\\components\\ui\\tabs\\tab\\tab.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctabs%5Ctab%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tab = _interopRequireDefault(require("./tab.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _tab.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\tabs\\tab\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\tabs\\tab\\tab.component.js", {"../../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctabs%5Ctab%5Ctab.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _designSystem = require("../../../../helpers/constants/design-system");
var _box = _interopRequireDefault(require("../../box"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Tab = props => {
  const {
    activeClassName,
    className,
    'data-testid': dataTestId,
    isActive,
    name,
    onClick,
    tabIndex,
    tabKey
  } = props;
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    as: "li",
    className: (0, _classnames.default)('tab', className, {
      'tab--active': isActive,
      [activeClassName]: activeClassName && isActive
    }),
    "data-testid": dataTestId,
    onClick: event => {
      event.preventDefault();
      onClick(tabIndex);
    },
    key: tabKey
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    as: "button",
    padding: 2,
    textAlign: _designSystem.TextAlign.Center,
    display: _designSystem.DISPLAY.BLOCK,
    width: _designSystem.BLOCK_SIZES.FULL
  }, name));
};
Tab.propTypes = {
  activeClassName: _propTypes.default.string,
  className: _propTypes.default.string,
  'data-testid': _propTypes.default.string,
  isActive: _propTypes.default.bool,
  // required, but added using React.cloneElement
  name: _propTypes.default.string.isRequired,
  tabKey: _propTypes.default.string.isRequired,
  // for Tabs selection purpose
  onClick: _propTypes.default.func,
  tabIndex: _propTypes.default.number // required, but added using React.cloneElement
};

Tab.defaultProps = {
  activeClassName: undefined,
  className: undefined,
  onClick: undefined
};
var _default = Tab;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\tabs\\tab\\tab.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\tabs\\tabs.component.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctabs%5Ctabs.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _box = _interopRequireDefault(require("../box"));
var _designSystem = require("../../../helpers/constants/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Tabs = ({
  defaultActiveTabKey,
  onTabClick,
  children,
  tabsClassName,
  subHeader
}) => {
  // This ignores any 'null' child elements that are a result of a conditional
  // based on a feature flag setting.
  const _getValidChildren = () => {
    return _react.default.Children.toArray(children).filter(Boolean);
  };

  /**
   * Returns the index of the child with the given key
   *
   * @param {string} tabKey - the name to search for
   * @returns {number} the index of the child with the given name
   * @private
   */
  const _findChildByKey = tabKey => {
    return _getValidChildren().findIndex(c => (c === null || c === void 0 ? void 0 : c.props.tabKey) === tabKey);
  };
  const [activeTabIndex, setActiveTabIndex] = (0, _react.useState)(() => Math.max(_findChildByKey(defaultActiveTabKey), 0));
  const handleTabClick = (tabIndex, tabKey) => {
    if (tabIndex !== activeTabIndex) {
      setActiveTabIndex(tabIndex);
      onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(tabKey);
    }
  };
  const renderTabs = () => {
    const numberOfTabs = _react.default.Children.count(_getValidChildren());
    return _react.default.Children.map(_getValidChildren(), (child, index) => {
      const tabKey = child === null || child === void 0 ? void 0 : child.props.tabKey;
      return child && /*#__PURE__*/_react.default.cloneElement(child, {
        onClick: idx => handleTabClick(idx, tabKey),
        tabIndex: index,
        isActive: numberOfTabs > 1 && index === activeTabIndex
      });
    });
  };
  const renderActiveTabContent = () => {
    const validChildren = _getValidChildren();
    if (Array.isArray(validChildren) && !validChildren[activeTabIndex] || !Array.isArray(validChildren) && activeTabIndex !== 0) {
      throw new Error(`Tab at index '${activeTabIndex}' does not exist`);
    }
    return validChildren[activeTabIndex] ? validChildren[activeTabIndex].props.children : validChildren.props.children;
  };
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "tabs"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    as: "ul",
    display: _designSystem.DISPLAY.FLEX,
    justifyContent: _designSystem.JustifyContent.flexStart,
    backgroundColor: _designSystem.BackgroundColor.backgroundDefault,
    className: (0, _classnames.default)('tabs__list', tabsClassName),
    gap: 1
  }, renderTabs()), subHeader, /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "tabs__content"
  }, renderActiveTabContent()));
};
var _default = Tabs;
exports.default = _default;
Tabs.propTypes = {
  defaultActiveTabKey: _propTypes.default.string,
  onTabClick: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,
  tabsClassName: _propTypes.default.string,
  subHeader: _propTypes.default.node
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\tabs\\tabs.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\text-field\\index.js", {"./text-field.component":"F:\\metamask-extension\\ui\\components\\ui\\text-field\\text-field.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctext-field%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _textField = _interopRequireDefault(require("./text-field.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _textField.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\text-field\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\text-field\\text-field.component.js", {"@material-ui/core/TextField":"F:\\metamask-extension\\node_modules\\@material-ui\\core\\TextField\\index.js","@material-ui/core/styles":"F:\\metamask-extension\\node_modules\\@material-ui\\core\\styles\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctext-field%5Ctext-field.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@material-ui/core/styles");
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const inputLabelBase = {
  transform: 'none',
  transition: 'none',
  position: 'initial',
  color: 'var(--color-text-default)'
};
const styles = {
  materialLabel: {
    '&$materialFocused': {
      color: 'var(--color-text-alternative)'
    },
    '&$materialError': {
      color: 'var(--color-text-alternative)'
    },
    fontWeight: '400',
    color: 'var(--color-text-alternative)'
  },
  materialFocused: {},
  materialUnderline: {
    '&:before': {
      borderBottom: '1px solid var(--color-text-default) !important' // Visible bottom border
    },

    '&:after': {
      borderBottom: `2px solid var(--color-primary-default)` // Animated bottom border
    }
  },

  materialError: {},
  materialWhitePaddedRoot: {
    color: 'var(--color-text-alternative)'
  },
  materialWhitePaddedInput: {
    padding: '8px',
    '&::placeholder': {
      color: 'var(--color-text-alternative)'
    }
  },
  materialWhitePaddedFocused: {
    color: 'var(--color-background-default)'
  },
  materialWhitePaddedUnderline: {
    '&:after': {
      borderBottom: '2px solid var(--color-background-default)' // @TODO: Replace with border-muted ?
    }
  },

  // Non-material styles
  formLabel: {
    '&$formLabelFocused': {
      color: 'var(--color-text-alternative)'
    },
    '&$materialError': {
      color: 'var(--color-text-alternative)'
    }
  },
  formLabelFocused: {},
  inputFocused: {},
  inputRoot: {
    'label + &': {
      marginTop: '9px'
    },
    backgroundColor: 'var(--color-background-default)',
    border: '1px solid var(--color-border-default)',
    color: 'var(--color-text-default)',
    height: '48px',
    borderRadius: '6px',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    '&$inputFocused': {
      border: '1px solid var(--color-primary-default)'
    }
  },
  largeInputLabel: {
    ...inputLabelBase,
    fontSize: '1rem'
  },
  inputLabel: {
    ...inputLabelBase,
    fontSize: '.75rem'
  },
  inputMultiline: {
    lineHeight: 'initial !important'
  }
};
const getMaterialThemeInputProps = ({
  dir,
  classes: {
    materialLabel,
    materialFocused,
    materialError,
    materialUnderline
  },
  startAdornment,
  endAdornment,
  min,
  max,
  autoComplete
}) => ({
  InputLabelProps: {
    classes: {
      root: materialLabel,
      focused: materialFocused,
      error: materialError
    }
  },
  InputProps: {
    startAdornment,
    endAdornment,
    classes: {
      underline: materialUnderline
    },
    inputProps: {
      dir,
      min,
      max,
      autoComplete
    }
  }
});
const getMaterialWhitePaddedThemeInputProps = ({
  dir,
  classes: {
    materialWhitePaddedRoot,
    materialWhitePaddedFocused,
    materialWhitePaddedInput,
    materialWhitePaddedUnderline
  },
  startAdornment,
  endAdornment,
  min,
  max,
  autoComplete
}) => ({
  InputProps: {
    startAdornment,
    endAdornment,
    classes: {
      root: materialWhitePaddedRoot,
      focused: materialWhitePaddedFocused,
      input: materialWhitePaddedInput,
      underline: materialWhitePaddedUnderline
    },
    inputProps: {
      dir,
      min,
      max,
      autoComplete
    }
  }
});
const getBorderedThemeInputProps = ({
  dir,
  classes: {
    formLabel,
    formLabelFocused,
    materialError,
    largeInputLabel,
    inputLabel,
    inputRoot,
    input,
    inputFocused
  },
  largeLabel,
  startAdornment,
  endAdornment,
  min,
  max,
  autoComplete
}) => ({
  InputLabelProps: {
    shrink: true,
    className: largeLabel ? largeInputLabel : inputLabel,
    classes: {
      root: formLabel,
      focused: formLabelFocused,
      error: materialError
    }
  },
  InputProps: {
    startAdornment,
    endAdornment,
    disableUnderline: true,
    classes: {
      root: inputRoot,
      input,
      focused: inputFocused
    },
    inputProps: {
      dir,
      min,
      max,
      autoComplete
    }
  }
});
const themeToInputProps = {
  material: getMaterialThemeInputProps,
  bordered: getBorderedThemeInputProps,
  'material-white-padded': getMaterialWhitePaddedThemeInputProps
};
const TextField = ({
  'data-testid': dataTestId,
  error,
  classes,
  theme,
  startAdornment,
  endAdornment,
  largeLabel,
  dir,
  min,
  max,
  autoComplete,
  onPaste,
  ...textFieldProps
}) => {
  const inputProps = themeToInputProps[theme]({
    classes,
    startAdornment,
    endAdornment,
    largeLabel,
    dir,
    min,
    max,
    autoComplete
  });
  if (onPaste || dataTestId) {
    if (!inputProps.InputProps) {
      inputProps.InputProps = {};
    }
    if (!inputProps.InputProps.inputProps) {
      inputProps.InputProps.inputProps = {};
    }
    inputProps.InputProps.inputProps.onPaste = onPaste;
    inputProps.InputProps.inputProps['data-testid'] = dataTestId;
  }
  return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    error: Boolean(error),
    helperText: error
  }, inputProps, textFieldProps));
};
TextField.defaultProps = {
  error: null,
  dir: 'auto',
  theme: 'bordered'
};
TextField.propTypes = {
  /**
   * A test ID that gets set on the input element
   */
  'data-testid': _propTypes.default.string,
  /**
   * Show error message
   */
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  /**
   * Add custom CSS class
   */
  classes: _propTypes.default.object,
  dir: _propTypes.default.string,
  /**
   * Give theme to the text field
   */
  theme: _propTypes.default.oneOf(['bordered', 'material', 'material-white-padded']),
  startAdornment: _propTypes.default.element,
  endAdornment: _propTypes.default.element,
  /**
   * Show large label
   */
  largeLabel: _propTypes.default.bool,
  /**
   * Define min number input
   */
  min: _propTypes.default.number,
  /**
   * Define max number input
   */
  max: _propTypes.default.number,
  /**
   * Show auto complete text
   */
  autoComplete: _propTypes.default.string,
  onPaste: _propTypes.default.func
};
var _default = (0, _styles.withStyles)(styles)(TextField);
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\text-field\\text-field.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\textarea\\textarea.constants.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctextarea%5Ctextarea.constants.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESIZE = void 0;
const RESIZE = {
  NONE: 'none',
  BOTH: 'both',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  INITIAL: 'initial',
  INHERIT: 'inherit'
};
exports.RESIZE = RESIZE;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\textarea\\textarea.constants.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\textarea\\textarea.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","./textarea.constants":"F:\\metamask-extension\\ui\\components\\ui\\textarea\\textarea.constants.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctextarea%5Ctextarea.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _designSystem = require("../../../helpers/constants/design-system");
var _box = _interopRequireDefault(require("../box"));
var _textarea = require("./textarea.constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TextArea = ({
  className,
  value,
  onChange,
  resize = _textarea.RESIZE.BOTH,
  scrollable = false,
  height,
  boxProps,
  ...props
}) => {
  const textAreaClassnames = (0, _classnames.default)('textarea', className, `textarea--resize-${resize}`, {
    'textarea--scrollable': scrollable,
    'textarea--not-scrollable': !scrollable
  });
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    backgroundColor: _designSystem.BackgroundColor.backgroundDefault,
    borderColor: _designSystem.BorderColor.borderDefault,
    borderRadius: _designSystem.Size.SM,
    borderStyle: _designSystem.BorderStyle.solid,
    padding: 4,
    width: _designSystem.BlockSize.Full
  }, boxProps), boxClassName => /*#__PURE__*/_react.default.createElement("textarea", _extends({
    required: true,
    style: {
      height
    },
    className: (0, _classnames.default)(boxClassName, textAreaClassnames),
    value,
    onChange
  }, props)));
};
TextArea.propTypes = {
  /**
   * The height of the Textarea component. Accepts any number, px or % value
   */
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  /**
   * Optional additional className to add to the Textarea component
   */
  className: _propTypes.default.string,
  /**
   * Value is the text of the TextArea component
   */
  value: _propTypes.default.string,
  /**
   * The onChange function of the textarea
   */
  onChange: _propTypes.default.func,
  /**
   * Resize is the resize capability of the textarea accepts all valid css values
   * Defaults to "both"
   */
  resize: _propTypes.default.oneOf(Object.values(_textarea.RESIZE)),
  /**
   * Whether the Textarea should be scrollable. Applies overflow-y: scroll to the textarea
   * Defaults to false
   */
  scrollable: _propTypes.default.bool,
  /**
   * The Textarea component accepts all Box component props inside the boxProps object
   */
  boxProps: _propTypes.default.shape({
    ..._box.default.propTypes
  })
};
var _default = TextArea;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\textarea\\textarea.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\toggle-button\\index.js", {"./toggle-button.component":"F:\\metamask-extension\\ui\\components\\ui\\toggle-button\\toggle-button.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctoggle-button%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toggleButton = _interopRequireDefault(require("./toggle-button.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _toggleButton.default;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\toggle-button\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\toggle-button\\toggle-button.component.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-toggle-button":"F:\\metamask-extension\\node_modules\\react-toggle-button\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctoggle-button%5Ctoggle-button.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactToggleButton = _interopRequireDefault(require("react-toggle-button"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const trackStyle = {
  width: '40px',
  height: '24px',
  padding: '0px',
  borderRadius: '26px',
  border: '2px solid var(--color-primary-default)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const offTrackStyle = {
  ...trackStyle,
  border: '2px solid var(--color-border-default)'
};
const thumbStyle = {
  width: '18px',
  height: '18px',
  display: 'flex',
  boxShadow: 'none',
  alignSelf: 'center',
  borderRadius: '50%',
  position: 'relative'
};
const colors = {
  activeThumb: {
    base: '#037DD6'
  },
  inactiveThumb: {
    base: '#6A737D'
  },
  active: {
    base: '#F2F4F6',
    hover: '#F2F4F6'
  },
  inactive: {
    base: '#F2F4F6',
    hover: '#F2F4F6'
  }
};
const ToggleButton = props => {
  const {
    value,
    onToggle,
    offLabel,
    onLabel,
    disabled,
    className
  } = props;
  const modifier = value ? 'on' : 'off';
  return /*#__PURE__*/_react.default.createElement("label", {
    tabIndex: "0",
    onKeyDown: e => {
      if (e.key === 'Enter') {
        onToggle(value);
      }
    },
    className: (0, _classnames.default)('toggle-button', `toggle-button--${modifier}`, {
      'toggle-button--disabled': disabled
    }, className)
  }, /*#__PURE__*/_react.default.createElement(_reactToggleButton.default, {
    value: value,
    onToggle: disabled ? undefined : onToggle,
    activeLabel: "",
    inactiveLabel: "",
    trackStyle: value ? trackStyle : offTrackStyle,
    thumbStyle: thumbStyle,
    thumbAnimateRange: [3, 18],
    colors: colors
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-button__status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle-button__label-off"
  }, offLabel), /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle-button__label-on"
  }, onLabel)));
};
ToggleButton.propTypes = {
  /**
   * ToggleButton value
   */
  value: _propTypes.default.bool,
  /**
   * The onChange handler of the ToggleButton
   */
  onToggle: _propTypes.default.func,
  /**
   * Label text when toggle is off
   */
  offLabel: _propTypes.default.string,
  /**
   * Label text when toggle is on
   */
  onLabel: _propTypes.default.string,
  /**
   * Disables ToggleButton if true. Set to false as default
   */
  disabled: _propTypes.default.bool,
  /**
   * Additional className to add to the ToggleButton
   */
  className: _propTypes.default.string
};
var _default = ToggleButton;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\toggle-button\\toggle-button.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\token-balance\\index.js", {"./token-balance":"F:\\metamask-extension\\ui\\components\\ui\\token-balance\\token-balance.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctoken-balance%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _tokenBalance.default;
  }
});
var _tokenBalance = _interopRequireDefault(require("./token-balance"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\token-balance\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\token-balance\\token-balance.js", {"../../../hooks/useTokenTracker":"F:\\metamask-extension\\ui\\hooks\\useTokenTracker.js","../currency-display":"F:\\metamask-extension\\ui\\components\\ui\\currency-display\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctoken-balance%5Ctoken-balance.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TokenBalance;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _currencyDisplay = _interopRequireDefault(require("../currency-display"));
var _useTokenTracker = require("../../../hooks/useTokenTracker");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TokenBalance({
  className,
  token
}) {
  const {
    tokensWithBalances
  } = (0, _useTokenTracker.useTokenTracker)([token]);
  const {
    string,
    symbol
  } = tokensWithBalances[0] || {};
  return /*#__PURE__*/_react.default.createElement(_currencyDisplay.default, {
    className: className,
    displayValue: string || '',
    suffix: symbol || ''
  });
}
TokenBalance.propTypes = {
  className: _propTypes.default.string,
  token: _propTypes.default.shape({
    address: _propTypes.default.string.isRequired,
    decimals: _propTypes.default.number,
    symbol: _propTypes.default.string
  }).isRequired
};
TokenBalance.defaultProps = {
  className: undefined
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\token-balance\\token-balance.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\token-input\\index.js", {"./token-input.container":"F:\\metamask-extension\\ui\\components\\ui\\token-input\\token-input.container.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctoken-input%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _tokenInput.default;
  }
});
var _tokenInput = _interopRequireDefault(require("./token-input.container"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\token-input\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\token-input\\token-input.component.js", {"../../../../app/scripts/lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","../../../../shared/constants/common":"F:\\metamask-extension\\shared\\constants\\common.ts","../../../../shared/modules/Numeric":"F:\\metamask-extension\\shared\\modules\\Numeric.ts","../../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts","../currency-display":"F:\\metamask-extension\\ui\\components\\ui\\currency-display\\index.js","../unit-input":"F:\\metamask-extension\\ui\\components\\ui\\unit-input\\index.js","bignumber.js":"F:\\metamask-extension\\node_modules\\bignumber.js\\bignumber.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctoken-input%5Ctoken-input.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _unitInput = _interopRequireDefault(require("../unit-input"));
var _currencyDisplay = _interopRequireDefault(require("../currency-display"));
var _conversion = require("../../../../shared/modules/conversion.utils");
var _util = require("../../../../app/scripts/lib/util");
var _stringUtils = require("../../../../shared/modules/string-utils");
var _Numeric = require("../../../../shared/modules/Numeric");
var _common = require("../../../../shared/constants/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Component that allows user to enter token values as a number, and props receive a converted
 * hex value. props.value, used as a default or forced value, should be a hex value, which
 * gets converted into a decimal value.
 */
class TokenInput extends _react.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "handleChange", (decimalValue, applyDecimals = false) => {
      const {
        token: {
          decimals
        } = {},
        onChange
      } = this.props;
      let newDecimalValue = decimalValue;
      if (decimals && decimalValue && applyDecimals) {
        newDecimalValue = new _bignumber.default(decimalValue, 10).toFixed(decimals);
      }
      const hexValue = new _Numeric.Numeric(newDecimalValue || 0, 10).times(Math.pow(10, Number(decimals || 0)), 10).toBase(16).toString();
      this.setState({
        hexValue,
        decimalValue
      });
      onChange(hexValue);
    });
    _defineProperty(this, "handleBlur", decimalValue => {
      this.handleChange(decimalValue, true);
    });
    const {
      value: _hexValue
    } = props;
    const _decimalValue = _hexValue ? this.getValue(props) : 0;
    this.state = {
      decimalValue: _decimalValue,
      hexValue: _hexValue
    };
  }
  componentDidUpdate(prevProps) {
    const {
      value: prevPropsHexValue
    } = prevProps;
    const {
      value: propsHexValue
    } = this.props;
    const {
      hexValue: stateHexValue
    } = this.state;
    if (prevPropsHexValue !== propsHexValue && propsHexValue !== stateHexValue) {
      const decimalValue = this.getValue(this.props);
      this.setState({
        hexValue: propsHexValue,
        decimalValue
      });
    }
  }
  getValue(props) {
    const {
      value: hexValue,
      token: {
        decimals,
        symbol
      } = {}
    } = props;
    const multiplier = Math.pow(10, Number(decimals || 0));
    const decimalValueString = new _Numeric.Numeric((0, _util.addHexPrefix)(hexValue), 16).toBase(10).applyConversionRate(symbol ? multiplier : 1, true).toString();
    return Number(decimalValueString) ? decimalValueString : '';
  }
  renderConversionComponent() {
    const {
      tokenExchangeRates,
      showFiat,
      currentCurrency,
      hideConversion,
      token,
      tokens
    } = this.props;
    const {
      decimalValue
    } = this.state;
    const existingToken = tokens.find(({
      address
    }) => (0, _stringUtils.isEqualCaseInsensitive)(address, token.address));
    const tokenExchangeRate = (tokenExchangeRates === null || tokenExchangeRates === void 0 ? void 0 : tokenExchangeRates[existingToken === null || existingToken === void 0 ? void 0 : existingToken.address]) ?? 0;
    let currency, numberOfDecimals;
    if (hideConversion) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "currency-input__conversion-component"
      }, this.context.t('noConversionRateAvailable'));
    }
    if (showFiat) {
      // Display Fiat
      currency = currentCurrency;
      numberOfDecimals = 2;
    } else {
      // Display ETH
      currency = _common.EtherDenomination.ETH;
      numberOfDecimals = 6;
    }
    const decimalEthValue = decimalValue * tokenExchangeRate || 0;
    const hexWeiValue = (0, _conversion.getWeiHexFromDecimalValue)({
      value: decimalEthValue,
      fromCurrency: _common.EtherDenomination.ETH,
      fromDenomination: _common.EtherDenomination.ETH
    });
    return tokenExchangeRate ? /*#__PURE__*/_react.default.createElement(_currencyDisplay.default, {
      className: "currency-input__conversion-component",
      currency: currency,
      value: hexWeiValue,
      numberOfDecimals: numberOfDecimals
    }) : /*#__PURE__*/_react.default.createElement("div", {
      className: "currency-input__conversion-component"
    }, this.context.t('noConversionRateAvailable'));
  }
  render() {
    const {
      token,
      ...restProps
    } = this.props;
    const {
      decimalValue
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_unitInput.default, _extends({}, restProps, {
      suffix: token.symbol,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      value: decimalValue
    }), this.renderConversionComponent());
  }
}
exports.default = TokenInput;
_defineProperty(TokenInput, "contextTypes", {
  t: _propTypes.default.func
});
_defineProperty(TokenInput, "propTypes", {
  dataTestId: _propTypes.default.string,
  currentCurrency: _propTypes.default.string,
  onChange: _propTypes.default.func,
  value: _propTypes.default.string,
  showFiat: _propTypes.default.bool,
  hideConversion: _propTypes.default.bool,
  token: _propTypes.default.shape({
    address: _propTypes.default.string.isRequired,
    decimals: _propTypes.default.number,
    symbol: _propTypes.default.string
  }).isRequired,
  tokenExchangeRates: _propTypes.default.object,
  tokens: _propTypes.default.array.isRequired
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\token-input\\token-input.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\token-input\\token-input.container.js", {"../../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","./token-input.component":"F:\\metamask-extension\\ui\\components\\ui\\token-input\\token-input.component.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctoken-input%5Ctoken-input.container.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _selectors = require("../../../selectors");
var _tokenInput = _interopRequireDefault(require("./token-input.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const mapStateToProps = state => {
  const {
    metamask: {
      currentCurrency,
      tokens
    }
  } = state;
  return {
    currentCurrency,
    tokenExchangeRates: (0, _selectors.getTokenExchangeRates)(state),
    hideConversion: !(0, _selectors.getShouldShowFiat)(state),
    tokens
  };
};
const TokenInputContainer = (0, _reactRedux.connect)(mapStateToProps)(_tokenInput.default);
TokenInputContainer.propTypes = {
  token: _propTypes.default.shape({
    address: _propTypes.default.string.isRequired,
    decimals: _propTypes.default.number,
    symbol: _propTypes.default.string
  }).isRequired
};
var _default = TokenInputContainer;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\token-input\\token-input.container.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\tooltip\\index.js", {"./tooltip":"F:\\metamask-extension\\ui\\components\\ui\\tooltip\\tooltip.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctooltip%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _tooltip.default;
  }
});
var _tooltip = _interopRequireDefault(require("./tooltip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\tooltip\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\tooltip\\tooltip.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-tippy":"F:\\metamask-extension\\node_modules\\react-tippy\\dist\\react-tippy.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctooltip%5Ctooltip.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactTippy = require("react-tippy");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Tooltip extends _react.PureComponent {
  render() {
    const {
      arrow,
      children,
      containerClassName,
      disabled,
      position,
      html,
      interactive,
      size,
      title,
      trigger,
      onHidden,
      offset,
      open,
      wrapperClassName,
      style,
      theme,
      tabIndex,
      tag
    } = this.props;
    if (!title && !html) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: wrapperClassName
      }, children);
    }
    return /*#__PURE__*/_react.default.createElement(tag, {
      className: wrapperClassName
    }, /*#__PURE__*/_react.default.createElement(_reactTippy.Tooltip, {
      arrow: arrow,
      className: containerClassName,
      disabled: disabled,
      hideOnClick: false,
      html: html,
      interactive: interactive,
      onHidden: onHidden,
      position: position,
      size: size,
      offset: offset,
      style: style,
      title: disabled ? '' : title,
      trigger: trigger,
      open: open,
      theme: `tippy-tooltip--mm-custom ${theme}` // Required for correct theming
      ,
      tabIndex: tabIndex || 0,
      tag: tag
    }, children));
  }
}
exports.default = Tooltip;
_defineProperty(Tooltip, "defaultProps", {
  arrow: true,
  children: null,
  containerClassName: '',
  html: null,
  interactive: undefined,
  onHidden: null,
  position: 'left',
  offset: 0,
  open: undefined,
  size: 'small',
  title: null,
  trigger: 'mouseenter focus',
  wrapperClassName: undefined,
  theme: '',
  tag: 'div'
});
_defineProperty(Tooltip, "propTypes", {
  arrow: _propTypes.default.bool,
  children: _propTypes.default.node,
  containerClassName: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  html: _propTypes.default.node,
  interactive: _propTypes.default.bool,
  offset: _propTypes.default.number,
  onHidden: _propTypes.default.func,
  open: _propTypes.default.bool,
  position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  size: _propTypes.default.oneOf(['small', 'regular', 'big']),
  title: _propTypes.default.string,
  trigger: _propTypes.default.any,
  wrapperClassName: _propTypes.default.string,
  style: _propTypes.default.object,
  theme: _propTypes.default.string,
  tabIndex: _propTypes.default.number,
  tag: _propTypes.default.string
});


      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\tooltip\\tooltip.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\truncated-definition-list\\index.js", {"./truncated-definition-list":"F:\\metamask-extension\\ui\\components\\ui\\truncated-definition-list\\truncated-definition-list.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctruncated-definition-list%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _truncatedDefinitionList.default;
  }
});
var _truncatedDefinitionList = _interopRequireDefault(require("./truncated-definition-list"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\truncated-definition-list\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\truncated-definition-list\\truncated-definition-list.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../../../hooks/useI18nContext":"F:\\metamask-extension\\ui\\hooks\\useI18nContext.js","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","../button":"F:\\metamask-extension\\ui\\components\\ui\\button\\index.js","../definition-list/definition-list":"F:\\metamask-extension\\ui\\components\\ui\\definition-list\\definition-list.js","../popover":"F:\\metamask-extension\\ui\\components\\ui\\popover\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctruncated-definition-list%5Ctruncated-definition-list.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TruncatedDefinitionList;
var _lodash = require("lodash");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("../../../helpers/constants/design-system");
var _box = _interopRequireDefault(require("../box"));
var _button = _interopRequireDefault(require("../button"));
var _definitionList = _interopRequireDefault(require("../definition-list/definition-list"));
var _popover = _interopRequireDefault(require("../popover"));
var _useI18nContext = require("../../../hooks/useI18nContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function TruncatedDefinitionList({
  dictionary,
  tooltips,
  prefaceKeys,
  title
}) {
  const [isPopoverOpen, setIsPopoverOpen] = (0, _react.useState)(false);
  const t = (0, _useI18nContext.useI18nContext)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_box.default, {
    margin: 6,
    padding: 4,
    paddingBottom: 3,
    borderRadius: _designSystem.Size.LG,
    borderColor: _designSystem.BorderColor.borderMuted
  }, /*#__PURE__*/_react.default.createElement(_definitionList.default, {
    dictionary: (0, _lodash.pick)(dictionary, prefaceKeys),
    tooltips: tooltips
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "truncated-definition-list__view-more",
    type: "link",
    onClick: () => setIsPopoverOpen(true)
  }, t('viewAllDetails'))), isPopoverOpen && /*#__PURE__*/_react.default.createElement(_popover.default, {
    title: title,
    open: isPopoverOpen,
    onClose: () => setIsPopoverOpen(false),
    footer: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement(_button.default, {
      type: "primary",
      style: {
        width: '50%'
      },
      onClick: () => setIsPopoverOpen(false)
    }, "Close"))
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    padding: 6,
    paddingTop: 0
  }, /*#__PURE__*/_react.default.createElement(_definitionList.default, {
    gap: _designSystem.Size.MD,
    tooltips: tooltips,
    dictionary: dictionary
  }))));
}
TruncatedDefinitionList.propTypes = {
  dictionary: _definitionList.default.propTypes.dictionary,
  tooltips: _definitionList.default.propTypes.dictionary,
  title: _propTypes.default.string,
  prefaceKeys: _propTypes.default.arrayOf(_propTypes.default.string)
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\truncated-definition-list\\truncated-definition-list.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\typography\\index.js", {"./typography":"F:\\metamask-extension\\ui\\components\\ui\\typography\\typography.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctypography%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _typography.default;
  }
});
var _typography = _interopRequireDefault(require("./typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\typography\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\typography\\typography.js", {"../../../helpers/constants/design-system":"F:\\metamask-extension\\ui\\helpers\\constants\\design-system.ts","../box":"F:\\metamask-extension\\ui\\components\\ui\\box\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Ctypography%5Ctypography.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidTags = exports.ValidColors = void 0;
exports.default = Typography;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("../../../helpers/constants/design-system");
var _box = _interopRequireWildcard(require("../box"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  H6,
  H7,
  H8,
  H9
} = _designSystem.TypographyVariant;
const ValidColors = [_designSystem.Color.textDefault, _designSystem.Color.textAlternative, _designSystem.Color.textMuted, _designSystem.Color.overlayInverse, _designSystem.Color.primaryDefault, _designSystem.Color.primaryInverse, _designSystem.Color.errorDefault, _designSystem.Color.errorInverse, _designSystem.Color.successDefault, _designSystem.Color.successInverse, _designSystem.Color.sepoliaInverse, _designSystem.Color.warningDefault, _designSystem.Color.warningInverse, _designSystem.Color.infoDefault, _designSystem.Color.infoInverse, _designSystem.Color.goerli, _designSystem.Color.sepolia, _designSystem.Color.goerliInverse, _designSystem.Color.sepoliaInverse, _designSystem.Color.lineaGoerli, _designSystem.Color.lineaGoerliInverse, _designSystem.Color.lineaMainnet, _designSystem.Color.lineaMainnetInverse];
exports.ValidColors = ValidColors;
const ValidTags = ['dd', 'div', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'p', 'span', 'strong', 'ul', 'label'];

/**
 * @deprecated `<Typography />` has been deprecated in favor of the `<Text />` component in ./ui/components/component-library/text/text.js
 *
 * See storybook documentation for Text here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-text--default-story#text
 *
 * Help to replace `Typography` with `Text` by submitting PRs against https://github.com/MetaMask/metamask-extension/issues/17670
 */
exports.ValidTags = ValidTags;
function Typography({
  variant = _designSystem.TypographyVariant.paragraph,
  color = _designSystem.Color.textDefault,
  fontWeight = 'normal',
  fontStyle = 'normal',
  align,
  overflowWrap,
  title,
  as,
  margin,
  marginTop = 1,
  marginRight,
  marginBottom = 1,
  marginLeft,
  boxProps = {},
  className,
  testId,
  children
}) {
  let Tag = as ?? variant;
  let strongTagFontWeight;
  if (Tag === 'strong') {
    strongTagFontWeight = _designSystem.FONT_WEIGHT.BOLD;
  }
  const computedClassName = (0, _classnames.default)('typography', className, `typography--${variant}`, `typography--weight-${strongTagFontWeight || fontWeight}`, `typography--style-${fontStyle}`, {
    [`typography--align-${align}`]: Boolean(align),
    [`typography--color-${color}`]: Boolean(color),
    [`typography--overflowwrap-${overflowWrap}`]: Boolean(overflowWrap)
  });
  if (Tag === _designSystem.TypographyVariant.paragraph) {
    Tag = 'p';
  } else if ([H7, H8, H9].includes(Tag)) {
    Tag = H6;
  }
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  }, boxProps), boxClassName => /*#__PURE__*/_react.default.createElement(Tag, {
    className: (0, _classnames.default)(boxClassName, computedClassName),
    title: title,
    "data-testid": testId
  }, children));
}
Typography.propTypes = {
  /**
   * The variation of font sizes of the Typography component
   */
  variant: _propTypes.default.oneOf(Object.values(_designSystem.TypographyVariant)),
  /**
   * The color of the Typography component Should use the COLOR object from
   * ./ui/helpers/constants/design-system.js
   */
  color: _propTypes.default.oneOf(ValidColors),
  /**
   * The font-weight of the Typography component. Should use the FONT_WEIGHT object from
   * ./ui/helpers/constants/design-system.js
   */
  fontWeight: _propTypes.default.oneOf(Object.values(_designSystem.FONT_WEIGHT)),
  /**
   * The font-style of the Typography component. Should use the FONT_STYLE object from
   * ./ui/helpers/constants/design-system.js
   */
  fontStyle: _propTypes.default.oneOf(Object.values(_designSystem.FONT_STYLE)),
  /**
   * The text-align of the Typography component. Should use the TextAlign enum from
   * ./ui/helpers/constants/design-system.js
   */
  align: _propTypes.default.oneOf(Object.values(_designSystem.TextAlign)),
  /**
   * The overflow-wrap of the Typography component. Should use the OVERFLOW_WRAP object from
   * ./ui/helpers/constants/design-system.js
   */
  overflowWrap: _propTypes.default.oneOf(Object.values(_designSystem.OVERFLOW_WRAP)),
  /**
   * Changes the root html element of the Typography component.
   */
  as: _propTypes.default.oneOf(ValidTags),
  /**
   * Adds margin to the Typography component should use valid size
   */
  margin: _box.MultipleSizesAndAuto,
  marginTop: _box.MultipleSizesAndAuto,
  marginBottom: _box.MultipleSizesAndAuto,
  marginRight: _box.MultipleSizesAndAuto,
  marginLeft: _box.MultipleSizesAndAuto,
  /**
   * Used to pass any valid Box component props such as margin or padding
   * to the Typography component
   */
  boxProps: _propTypes.default.shape({
    ..._box.default.propTypes
  }),
  /**
   * Additional className to assign the Typography component
   */
  className: _propTypes.default.string,
  /**
   * Title attribute to include on the element. Will show as tooltip on hover.
   */
  title: _propTypes.default.string,
  /**
   * Data test ID for the Tag component
   */
  testId: _propTypes.default.string,
  /**
   * The text content of the Typography component
   */
  children: _propTypes.default.node.isRequired
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\typography\\typography.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\unit-input\\index.js", {"./unit-input.component":"F:\\metamask-extension\\ui\\components\\ui\\unit-input\\unit-input.component.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cunit-input%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _unitInput.default;
  }
});
var _unitInput = _interopRequireDefault(require("./unit-input.component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\unit-input\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\unit-input\\unit-input.component.js", {"classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cunit-input%5Cunit-input.component.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function removeLeadingZeroes(str) {
  return str.replace(/^0*(?=\d)/u, '');
}

/**
 * Component that attaches a suffix or unit of measurement trailing user input, ex. 'ETH'. Also
 * allows rendering a child component underneath the input to, for example, display conversions of
 * the shown suffix.
 */
class UnitInput extends _react.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      value: this.props.value
    });
    _defineProperty(this, "handleFocus", () => {
      this.unitInput.focus();
    });
    _defineProperty(this, "handleInputFocus", ({
      target: {
        value
      }
    }) => {
      if (value === '0') {
        this.setState({
          value: ''
        });
      }
    });
    _defineProperty(this, "handleInputBlur", ({
      target: {
        value
      }
    }) => {
      if (value === '') {
        this.setState({
          value: '0'
        });
      }
      this.props.onBlur && this.props.onBlur(value);
    });
    _defineProperty(this, "handleChange", event => {
      const {
        value: userInput
      } = event.target;
      let value = userInput;
      if (userInput.length && userInput.length > 1) {
        value = removeLeadingZeroes(userInput);
      }
      this.setState({
        value
      });
      this.props.onChange(value);
    });
  }
  componentDidUpdate(prevProps) {
    const {
      value: prevPropsValue
    } = prevProps;
    const {
      value: propsValue
    } = this.props;
    const {
      value: stateValue
    } = this.state;
    if (prevPropsValue !== propsValue && propsValue !== stateValue) {
      this.setState({
        value: propsValue
      });
    }
  }
  getInputWidth(value) {
    const valueString = String(value);
    const valueLength = valueString.length || 1;
    const decimalPointDeficit = valueString.match(/\./u) ? -0.5 : 0;
    return `${valueLength + decimalPointDeficit + 0.5}ch`;
  }
  render() {
    const {
      error,
      placeholder,
      suffix,
      actionComponent,
      children,
      dataTestId
    } = this.props;
    const {
      value
    } = this.state;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('unit-input', {
        'unit-input--error': error
      }),
      onClick: this.handleFocus
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "unit-input__inputs"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "unit-input__input-container"
    }, /*#__PURE__*/_react.default.createElement("input", {
      "data-testid": dataTestId,
      type: "number",
      dir: "ltr",
      className: (0, _classnames.default)('unit-input__input'),
      value: value,
      placeholder: placeholder,
      onChange: this.handleChange,
      onBlur: this.handleInputBlur,
      onFocus: this.handleInputFocus,
      style: {
        width: this.getInputWidth(value)
      },
      ref: ref => {
        this.unitInput = ref;
      },
      autoFocus: true
    }), suffix ? /*#__PURE__*/_react.default.createElement("div", {
      className: "unit-input__suffix"
    }, suffix) : null), children), actionComponent);
  }
}
exports.default = UnitInput;
_defineProperty(UnitInput, "propTypes", {
  dataTestId: _propTypes.default.string,
  children: _propTypes.default.node,
  actionComponent: _propTypes.default.node,
  error: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  suffix: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
});
_defineProperty(UnitInput, "defaultProps", {
  value: '',
  placeholder: '0'
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\unit-input\\unit-input.component.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\update-nickname-popover\\update-nickname-popover.js", {"../../../contexts/i18n":"F:\\metamask-extension\\ui\\contexts\\i18n.js","../../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../button":"F:\\metamask-extension\\ui\\components\\ui\\button\\index.js","../identicon":"F:\\metamask-extension\\ui\\components\\ui\\identicon\\index.js","../popover":"F:\\metamask-extension\\ui\\components\\ui\\popover\\index.js","../text-field":"F:\\metamask-extension\\ui\\components\\ui\\text-field\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Cupdate-nickname-popover%5Cupdate-nickname-popover.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpdateNicknamePopover;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _popover = _interopRequireDefault(require("../popover"));
var _button = _interopRequireDefault(require("../button"));
var _textField = _interopRequireDefault(require("../text-field"));
var _i18n = require("../../../contexts/i18n");
var _identicon = _interopRequireDefault(require("../identicon"));
var _selectors = require("../../../selectors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function UpdateNicknamePopover({
  address,
  nickname = '',
  memo = '',
  onAdd,
  onClose
}) {
  var _tokenList$address$to;
  const t = (0, _react.useContext)(_i18n.I18nContext);
  const [nicknameInput, setNicknameInput] = (0, _react.useState)(nickname === null ? '' : nickname);
  const [memoInput, setMemoInput] = (0, _react.useState)(memo === null ? '' : memo);
  const handleNicknameChange = event => {
    setNicknameInput(event.target.value);
  };
  const handleMemoChange = event => {
    setMemoInput(event.target.value);
  };
  const closePopover = (0, _react.useCallback)(() => {
    onClose();
  }, [onClose]);
  const onCancel = () => {
    onClose();
  };
  const onSubmit = () => {
    onAdd(address, nicknameInput, memoInput);
    onClose();
  };
  const tokenList = (0, _reactRedux.useSelector)(_selectors.getTokenList);
  return /*#__PURE__*/_react.default.createElement(_popover.default, {
    title: nickname ? t('editAddressNickname') : t('addANickname'),
    onClose: closePopover,
    className: "update-nickname__wrapper",
    footer: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_button.default, {
      className: "update-nickname__cancel",
      type: "secondary",
      onClick: onCancel
    }, t('cancel')), /*#__PURE__*/_react.default.createElement(_button.default, {
      className: "update-nickname__save",
      type: "primary",
      onClick: onSubmit,
      disabled: !nicknameInput
    }, t('save')))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "update-nickname__content"
  }, /*#__PURE__*/_react.default.createElement(_identicon.default, {
    className: "update-nickname__content__indenticon",
    address: address,
    diameter: 36,
    image: (_tokenList$address$to = tokenList[address.toLowerCase()]) === null || _tokenList$address$to === void 0 ? void 0 : _tokenList$address$to.iconUrl
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "update-nickname__content__label--capitalized"
  }, t('address')), /*#__PURE__*/_react.default.createElement("div", {
    className: "update-nickname__content__address"
  }, address), /*#__PURE__*/_react.default.createElement("div", {
    className: "update-nickname__content__nickname-label"
  }, t('nickname')), /*#__PURE__*/_react.default.createElement(_textField.default, {
    className: "update-nickname__content__text-field",
    value: nicknameInput,
    onChange: handleNicknameChange,
    placeholder: t('addANickname'),
    fullWidth: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "update-nickname__content__label--capitalized"
  }, t('memo')), /*#__PURE__*/_react.default.createElement(_textField.default, {
    type: "text",
    id: "memo",
    value: memoInput,
    onChange: handleMemoChange,
    placeholder: t('addMemo'),
    fullWidth: true,
    margin: "dense",
    multiline: true,
    rows: 3,
    classes: {
      inputMultiline: 'update-nickname__content__text-area',
      inputRoot: 'update-nickname__content__text-area-wrapper'
    }
  })));
}
UpdateNicknamePopover.propTypes = {
  nickname: _propTypes.default.string,
  address: _propTypes.default.string,
  memo: _propTypes.default.string,
  onAdd: _propTypes.default.func,
  onClose: _propTypes.default.func
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\update-nickname-popover\\update-nickname-popover.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\url-icon\\index.js", {"./url-icon":"F:\\metamask-extension\\ui\\components\\ui\\url-icon\\url-icon.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Curl-icon%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _urlIcon.default;
  }
});
var _urlIcon = _interopRequireDefault(require("./url-icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\url-icon\\index.js",}],
["F:\\metamask-extension\\ui\\components\\ui\\url-icon\\url-icon.js", {"../icon-with-fallback":"F:\\metamask-extension\\ui\\components\\ui\\icon-with-fallback\\index.js","classnames":"F:\\metamask-extension\\node_modules\\classnames\\index.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccomponents%5Cui%5Curl-icon%5Curl-icon.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UrlIcon;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _iconWithFallback = _interopRequireDefault(require("../icon-with-fallback"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function UrlIcon({
  url,
  className,
  name,
  fallbackClassName
}) {
  return /*#__PURE__*/_react.default.createElement(_iconWithFallback.default, {
    className: (0, _classnames.default)('url-icon', className),
    icon: url,
    name: name,
    fallbackClassName: (0, _classnames.default)('url-icon__fallback', fallbackClassName)
  });
}
UrlIcon.propTypes = {
  url: _propTypes.default.string,
  className: _propTypes.default.string,
  name: _propTypes.default.string,
  fallbackClassName: _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\components\\ui\\url-icon\\url-icon.js",}],
["F:\\metamask-extension\\ui\\contexts\\gasFee.js", {"../hooks/gasFeeInput/useGasFeeInputs":"F:\\metamask-extension\\ui\\hooks\\gasFeeInput\\useGasFeeInputs.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccontexts%5CgasFee.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GasFeeContextProvider = exports.GasFeeContext = void 0;
exports.useGasFeeContext = useGasFeeContext;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useGasFeeInputs = require("../hooks/gasFeeInput/useGasFeeInputs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const GasFeeContext = /*#__PURE__*/(0, _react.createContext)({});
exports.GasFeeContext = GasFeeContext;
const GasFeeContextProvider = ({
  children,
  defaultEstimateToUse,
  transaction,
  minimumGasLimit,
  editGasMode
}) => {
  const gasFeeDetails = (0, _useGasFeeInputs.useGasFeeInputs)(defaultEstimateToUse, transaction, minimumGasLimit, editGasMode);
  return /*#__PURE__*/_react.default.createElement(GasFeeContext.Provider, {
    value: gasFeeDetails
  }, children);
};
exports.GasFeeContextProvider = GasFeeContextProvider;
function useGasFeeContext() {
  return (0, _react.useContext)(GasFeeContext);
}
GasFeeContextProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  defaultEstimateToUse: _propTypes.default.string,
  transaction: _propTypes.default.object,
  minimumGasLimit: _propTypes.default.string,
  editGasMode: _propTypes.default.string
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\contexts\\gasFee.js",}],
["F:\\metamask-extension\\ui\\contexts\\i18n.js", {"../ducks/locale/locale":"F:\\metamask-extension\\ui\\ducks\\locale\\locale.js","../helpers/utils/i18n-helper":"F:\\metamask-extension\\ui\\helpers\\utils\\i18n-helper.tsx","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-redux":"F:\\metamask-extension\\node_modules\\react-redux\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccontexts%5Ci18n.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyI18nProvider = exports.I18nProvider = exports.I18nContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _locale = require("../ducks/locale/locale");
var _i18nHelper = require("../helpers/utils/i18n-helper");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const I18nContext = /*#__PURE__*/(0, _react.createContext)(key => `[${key}]`);
exports.I18nContext = I18nContext;
const I18nProvider = props => {
  const currentLocale = (0, _reactRedux.useSelector)(_locale.getCurrentLocale);
  const current = (0, _reactRedux.useSelector)(_locale.getCurrentLocaleMessages);
  const en = (0, _reactRedux.useSelector)(_locale.getEnLocaleMessages);
  const t = (0, _react.useMemo)(() => {
    return (key, ...args) => (0, _i18nHelper.getMessage)(currentLocale, current, key, ...args) || (0, _i18nHelper.getMessage)(currentLocale, en, key, ...args);
  }, [currentLocale, current, en]);
  return /*#__PURE__*/_react.default.createElement(I18nContext.Provider, {
    value: t
  }, props.children);
};
exports.I18nProvider = I18nProvider;
I18nProvider.propTypes = {
  children: _propTypes.default.node
};
I18nProvider.defaultProps = {
  children: undefined
};
class LegacyI18nProvider extends _react.Component {
  getChildContext() {
    return {
      t: this.context
    };
  }
  render() {
    return this.props.children;
  }
}
exports.LegacyI18nProvider = LegacyI18nProvider;
_defineProperty(LegacyI18nProvider, "propTypes", {
  children: _propTypes.default.node
});
_defineProperty(LegacyI18nProvider, "defaultProps", {
  children: undefined
});
_defineProperty(LegacyI18nProvider, "contextType", I18nContext);
_defineProperty(LegacyI18nProvider, "childContextTypes", {
  t: _propTypes.default.func
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\contexts\\i18n.js",}],
["F:\\metamask-extension\\ui\\contexts\\metametrics.js", {"../../app/scripts/lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../helpers/constants/routes":"F:\\metamask-extension\\ui\\helpers\\constants\\routes.ts","../hooks/useSegmentContext":"F:\\metamask-extension\\ui\\hooks\\useSegmentContext.js","../store/actions":"F:\\metamask-extension\\ui\\store\\actions.ts","@sentry/browser":"F:\\metamask-extension\\node_modules\\@sentry\\browser\\cjs\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js","react-router-dom":"F:\\metamask-extension\\node_modules\\react-router-dom\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccontexts%5Cmetametrics.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetaMetricsContext = exports.LegacyMetaMetricsProvider = void 0;
exports.MetaMetricsProvider = MetaMetricsProvider;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _browser = require("@sentry/browser");
var _lodash = require("lodash");
var _util = require("../../app/scripts/lib/util");
var _routes = require("../helpers/constants/routes");
var _metametrics = require("../../shared/constants/metametrics");
var _useSegmentContext = require("../hooks/useSegmentContext");
var _actions = require("../store/actions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                           * This file is intended to be renamed to metametrics.js once the conversion is complete.
                                                                                                                                                                                                                                                                                                                                                                                           * MetaMetrics is our own brand, and should remain aptly named regardless of the underlying
                                                                                                                                                                                                                                                                                                                                                                                           * metrics system. This file implements Segment analytics tracking.
                                                                                                                                                                                                                                                                                                                                                                                           */
// type imports
/**
 * @typedef {__import__('../../shared/constants/metametrics').MetaMetricsEventPayload} MetaMetricsEventPayload
 * @typedef {__import__('../../shared/constants/metametrics').MetaMetricsEventOptions} MetaMetricsEventOptions
 * @typedef {__import__('../../shared/constants/metametrics').MetaMetricsPageObject} MetaMetricsPageObject
 * @typedef {__import__('../../shared/constants/metametrics').MetaMetricsReferrerObject} MetaMetricsReferrerObject
 */

// types
/**
 * @typedef {Omit<MetaMetricsEventPayload, 'environmentType' | 'page' | 'referrer'>} UIMetricsEventPayload
 */
/**
 * @typedef {(
 *  payload: UIMetricsEventPayload,
 *  options: MetaMetricsEventOptions
 * ) => Promise<void>} UITrackEventMethod
 */

/**
 * @type {React.Context<UITrackEventMethod>}
 */
const MetaMetricsContext = /*#__PURE__*/(0, _react.createContext)(() => {
  (0, _browser.captureException)(Error(`MetaMetrics context function was called from a react node that is not a descendant of a MetaMetrics context provider`));
});
exports.MetaMetricsContext = MetaMetricsContext;
const PATHS_TO_CHECK = Object.keys(_routes.PATH_NAME_MAP);
function MetaMetricsProvider({
  children
}) {
  const location = (0, _reactRouterDom.useLocation)();
  const context = (0, _useSegmentContext.useSegmentContext)();

  // Sometimes we want to track context properties inside the event's "properties" object.
  const addContextPropsIntoEventProperties = (payload, options) => {
    const fields = options === null || options === void 0 ? void 0 : options.contextPropsIntoEventProperties;
    if (!fields || fields.length === 0) {
      return;
    }
    if (!payload.properties) {
      payload.properties = {};
    }
    if (fields.includes(_metametrics.MetaMetricsContextProp.PageTitle)) {
      var _context$page;
      payload.properties[_metametrics.MetaMetricsContextProp.PageTitle] = (_context$page = context.page) === null || _context$page === void 0 ? void 0 : _context$page.title;
    }
  };

  /**
   * @type {UITrackEventMethod}
   */
  const trackEvent = (0, _react.useCallback)((payload, options) => {
    addContextPropsIntoEventProperties(payload, options);
    (0, _actions.trackMetaMetricsEvent)({
      ...payload,
      environmentType: (0, _util.getEnvironmentType)(),
      ...context
    }, options);
  }, [context]);

  // Used to prevent double tracking page calls
  const previousMatch = (0, _react.useRef)();

  /**
   * Anytime the location changes, track a page change with segment.
   * Previously we would manually track changes to history and keep a
   * reference to the previous url, but with page tracking we can see
   * which page the user is on and their navigation path.
   */
  (0, _react.useEffect)(() => {
    const environmentType = (0, _util.getEnvironmentType)();
    const match = (0, _reactRouterDom.matchPath)(location.pathname, {
      path: PATHS_TO_CHECK,
      exact: true,
      strict: true
    });
    // Start by checking for a missing match route. If this falls through to
    // the else if, then we know we have a matched route for tracking.
    if (!match) {
      (0, _browser.captureMessage)(`Segment page tracking found unmatched route`, {
        extra: {
          previousMatch,
          currentPath: location.pathname
        }
      });
    } else if (previousMatch.current !== match.path && !(environmentType === 'notification' && match.path === '/' && previousMatch.current === undefined)) {
      // When a notification window is open by a Dapp we do not want to track
      // the initial home route load that can sometimes happen. To handle
      // this we keep track of the previousMatch, and we skip the event track
      // in the event that we are dealing with the initial load of the
      // homepage
      const {
        path,
        params
      } = match;
      const name = _routes.PATH_NAME_MAP[path];
      (0, _actions.trackMetaMetricsPage)({
        name,
        // We do not want to send addresses or accounts in any events
        // Some routes include these as params.
        params: (0, _lodash.omit)(params, ['account', 'address']),
        environmentType,
        page: context.page,
        referrer: context.referrer
      }, {
        isOptInPath: location.pathname.startsWith('/initialize')
      });
    }
    previousMatch.current = match === null || match === void 0 ? void 0 : match.path;
  }, [location, context]);
  return /*#__PURE__*/_react.default.createElement(MetaMetricsContext.Provider, {
    value: trackEvent
  }, children);
}
MetaMetricsProvider.propTypes = {
  children: _propTypes.default.node
};
class LegacyMetaMetricsProvider extends _react.Component {
  getChildContext() {
    return {
      trackEvent: this.context
    };
  }
  render() {
    return this.props.children;
  }
}
exports.LegacyMetaMetricsProvider = LegacyMetaMetricsProvider;
_defineProperty(LegacyMetaMetricsProvider, "propTypes", {
  children: _propTypes.default.node
});
_defineProperty(LegacyMetaMetricsProvider, "defaultProps", {
  children: undefined
});
_defineProperty(LegacyMetaMetricsProvider, "contextType", MetaMetricsContext);
_defineProperty(LegacyMetaMetricsProvider, "childContextTypes", {
  // This has to be different than the type name for the old metametrics file
  // using the same name would result in whichever was lower in the tree to be
  // used.
  trackEvent: _propTypes.default.func
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\contexts\\metametrics.js",}],
["F:\\metamask-extension\\ui\\contexts\\transaction-modal.js", {"prop-types":"F:\\metamask-extension\\node_modules\\prop-types\\index.js","react":"F:\\metamask-extension\\node_modules\\react\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Ccontexts%5Ctransaction-modal.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionModalContextProvider = exports.TransactionModalContext = void 0;
exports.useTransactionModalContext = useTransactionModalContext;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const TransactionModalContext = /*#__PURE__*/(0, _react.createContext)({});
exports.TransactionModalContext = TransactionModalContext;
const TransactionModalContextProvider = ({
  children
}) => {
  const [openModals, setOpenModals] = (0, _react.useState)([]);
  const closeModal = modalNames => {
    if (openModals < 0) {
      return;
    }
    const modals = [...openModals];
    modalNames.forEach(modal => {
      const index = openModals.indexOf(modal);
      modals.splice(index, 1);
    });
    setOpenModals(modals);
  };
  const closeAllModals = () => {
    setOpenModals([]);
  };
  const openModal = modalName => {
    if (openModals.includes(modalName)) {
      return;
    }
    const modals = [...openModals];
    modals.push(modalName);
    setOpenModals(modals);
  };
  return /*#__PURE__*/_react.default.createElement(TransactionModalContext.Provider, {
    value: {
      closeModal,
      closeAllModals,
      currentModal: openModals[openModals.length - 1],
      openModal,
      openModalCount: openModals.length
    }
  }, children);
};
exports.TransactionModalContextProvider = TransactionModalContextProvider;
function useTransactionModalContext() {
  return (0, _react.useContext)(TransactionModalContext);
}
TransactionModalContextProvider.propTypes = {
  children: _propTypes.default.node.isRequired
};

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\contexts\\transaction-modal.js",}],
["F:\\metamask-extension\\ui\\ducks\\alerts\\enums.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Calerts%5Cenums.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALERT_STATE = void 0;
const ALERT_STATE = {
  CLOSED: 'CLOSED',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  OPEN: 'OPEN'
};
exports.ALERT_STATE = ALERT_STATE;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\alerts\\enums.js",}],
["F:\\metamask-extension\\ui\\ducks\\alerts\\index.js", {"./enums":"F:\\metamask-extension\\ui\\ducks\\alerts\\enums.js","./invalid-custom-network":"F:\\metamask-extension\\ui\\ducks\\alerts\\invalid-custom-network.js","./unconnected-account":"F:\\metamask-extension\\ui\\ducks\\alerts\\unconnected-account.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Calerts%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ALERT_STATE", {
  enumerable: true,
  get: function () {
    return _enums.ALERT_STATE;
  }
});
Object.defineProperty(exports, "invalidCustomNetwork", {
  enumerable: true,
  get: function () {
    return _invalidCustomNetwork.default;
  }
});
Object.defineProperty(exports, "unconnectedAccount", {
  enumerable: true,
  get: function () {
    return _unconnectedAccount.default;
  }
});
var _unconnectedAccount = _interopRequireDefault(require("./unconnected-account"));
var _invalidCustomNetwork = _interopRequireDefault(require("./invalid-custom-network"));
var _enums = require("./enums");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\alerts\\index.js",}],
["F:\\metamask-extension\\ui\\ducks\\alerts\\invalid-custom-network.js", {"../../../shared/constants/alerts":"F:\\metamask-extension\\shared\\constants\\alerts.ts","./enums":"F:\\metamask-extension\\ui\\ducks\\alerts\\enums.js","@reduxjs/toolkit":"F:\\metamask-extension\\node_modules\\@reduxjs\\toolkit\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Calerts%5Cinvalid-custom-network.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openAlert = exports.getNetworkName = exports.getAlertState = exports.dismissAlert = exports.default = exports.alertIsOpen = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _alerts = require("../../../shared/constants/alerts");
var _enums = require("./enums");
// Constants

const name = _alerts.AlertTypes.invalidCustomNetwork;
const initialState = {
  state: _enums.ALERT_STATE.CLOSED,
  networkName: ''
};

// Slice (reducer plus auto-generated actions and action creators)

const slice = (0, _toolkit.createSlice)({
  name,
  initialState,
  reducers: {
    openAlert: (state, action) => {
      state.state = _enums.ALERT_STATE.OPEN;
      state.networkName = action.payload;
    },
    dismissAlert: state => {
      state.state = _enums.ALERT_STATE.CLOSED;
      state.networkName = '';
    }
  }
});
const {
  actions,
  reducer
} = slice;
var _default = reducer; // Selectors
exports.default = _default;
const getAlertState = state => state[name].state;
exports.getAlertState = getAlertState;
const getNetworkName = state => state[name].networkName;
exports.getNetworkName = getNetworkName;
const alertIsOpen = state => state[name].state !== _enums.ALERT_STATE.CLOSED;

// Actions / action-creators
exports.alertIsOpen = alertIsOpen;
const {
  openAlert,
  dismissAlert
} = actions;
exports.dismissAlert = dismissAlert;
exports.openAlert = openAlert;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\alerts\\invalid-custom-network.js",}],
["F:\\metamask-extension\\ui\\ducks\\alerts\\unconnected-account.js", {"../../../shared/constants/alerts":"F:\\metamask-extension\\shared\\constants\\alerts.ts","../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../store/actionConstants":"F:\\metamask-extension\\ui\\store\\actionConstants.ts","../../store/actions":"F:\\metamask-extension\\ui\\store\\actions.ts","./enums":"F:\\metamask-extension\\ui\\ducks\\alerts\\enums.js","@reduxjs/toolkit":"F:\\metamask-extension\\node_modules\\@reduxjs\\toolkit\\dist\\index.js","@sentry/browser":"F:\\metamask-extension\\node_modules\\@sentry\\browser\\cjs\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Calerts%5Cunconnected-account.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchedToUnconnectedAccount = exports.switchToAccount = exports.getAlertState = exports.dismissAndDisableAlert = exports.dismissAlert = exports.default = exports.connectAccount = exports.alertIsOpen = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _browser = require("@sentry/browser");
var _alerts = require("../../../shared/constants/alerts");
var actionConstants = _interopRequireWildcard(require("../../store/actionConstants"));
var _actions = require("../../store/actions");
var _selectors = require("../../selectors");
var _enums = require("./enums");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Constants

const name = _alerts.AlertTypes.unconnectedAccount;
const initialState = {
  state: _enums.ALERT_STATE.CLOSED
};

// Slice (reducer plus auto-generated actions and action creators)

const slice = (0, _toolkit.createSlice)({
  name,
  initialState,
  reducers: {
    connectAccountFailed: state => {
      state.state = _enums.ALERT_STATE.ERROR;
    },
    connectAccountRequested: state => {
      state.state = _enums.ALERT_STATE.LOADING;
    },
    connectAccountSucceeded: state => {
      state.state = _enums.ALERT_STATE.CLOSED;
    },
    disableAlertFailed: state => {
      state.state = _enums.ALERT_STATE.ERROR;
    },
    disableAlertRequested: state => {
      state.state = _enums.ALERT_STATE.LOADING;
    },
    disableAlertSucceeded: state => {
      state.state = _enums.ALERT_STATE.CLOSED;
    },
    dismissAlert: state => {
      state.state = _enums.ALERT_STATE.CLOSED;
    },
    switchAccountFailed: state => {
      state.state = _enums.ALERT_STATE.ERROR;
    },
    switchAccountRequested: state => {
      state.state = _enums.ALERT_STATE.LOADING;
    },
    switchAccountSucceeded: state => {
      state.state = _enums.ALERT_STATE.CLOSED;
    },
    switchedToUnconnectedAccount: state => {
      state.state = _enums.ALERT_STATE.OPEN;
    }
  },
  extraReducers: {
    [actionConstants.SELECTED_ADDRESS_CHANGED]: state => {
      // close the alert if the account is switched while it's open
      if (state.state === _enums.ALERT_STATE.OPEN) {
        state.state = _enums.ALERT_STATE.CLOSED;
      }
    }
  }
});
const {
  actions,
  reducer
} = slice;
var _default = reducer; // Selectors
exports.default = _default;
const getAlertState = state => state[name].state;
exports.getAlertState = getAlertState;
const alertIsOpen = state => state[name].state !== _enums.ALERT_STATE.CLOSED;

// Actions / action-creators
exports.alertIsOpen = alertIsOpen;
const {
  connectAccountFailed,
  connectAccountRequested,
  connectAccountSucceeded,
  disableAlertFailed,
  disableAlertRequested,
  disableAlertSucceeded,
  dismissAlert,
  switchAccountFailed,
  switchAccountRequested,
  switchAccountSucceeded,
  switchedToUnconnectedAccount
} = actions;
exports.switchedToUnconnectedAccount = switchedToUnconnectedAccount;
exports.dismissAlert = dismissAlert;
const dismissAndDisableAlert = () => {
  return async dispatch => {
    try {
      await dispatch(disableAlertRequested());
      await (0, _actions.setAlertEnabledness)(name, false);
      await dispatch(disableAlertSucceeded());
    } catch (error) {
      console.error(error);
      (0, _browser.captureException)(error);
      await dispatch(disableAlertFailed());
    }
  };
};
exports.dismissAndDisableAlert = dismissAndDisableAlert;
const switchToAccount = address => {
  return async dispatch => {
    try {
      await dispatch(switchAccountRequested());
      await dispatch((0, _actions.setSelectedAddress)(address));
      await dispatch(switchAccountSucceeded());
    } catch (error) {
      console.error(error);
      (0, _browser.captureException)(error);
      await dispatch(switchAccountFailed());
    }
  };
};
exports.switchToAccount = switchToAccount;
const connectAccount = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const selectedAddress = (0, _selectors.getSelectedAddress)(state);
    const origin = (0, _selectors.getOriginOfCurrentTab)(state);
    try {
      await dispatch(connectAccountRequested());
      await dispatch((0, _actions.addPermittedAccount)(origin, selectedAddress));
      await dispatch(connectAccountSucceeded());
    } catch (error) {
      console.error(error);
      (0, _browser.captureException)(error);
      await dispatch(connectAccountFailed());
    }
  };
};
exports.connectAccount = connectAccount;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\alerts\\unconnected-account.js",}],
["F:\\metamask-extension\\ui\\ducks\\app\\app.ts", {"../../../shared/constants/hardware-wallets":"F:\\metamask-extension\\shared\\constants\\hardware-wallets.ts","../../store/actionConstants":"F:\\metamask-extension\\ui\\store\\actionConstants.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Capp%5Capp.ts
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceApp;
exports.getGasLoadingAnimationIsShowing = getGasLoadingAnimationIsShowing;
exports.getLedgerTransportStatus = getLedgerTransportStatus;
exports.getLedgerWebHidConnectedStatus = getLedgerWebHidConnectedStatus;
exports.getQrCodeData = getQrCodeData;
exports.hideWhatsNewPopup = hideWhatsNewPopup;
exports.setCustomTokenAmount = setCustomTokenAmount;
exports.setLedgerTransportStatus = setLedgerTransportStatus;
exports.setLedgerWebHidConnectedStatus = setLedgerWebHidConnectedStatus;
exports.setOnBoardedInThisUISession = setOnBoardedInThisUISession;
exports.toggleCurrencySwitch = toggleCurrencySwitch;
exports.toggleGasLoadingAnimation = toggleGasLoadingAnimation;
var _hardwareWallets = require("../../../shared/constants/hardware-wallets");
var actionConstants = _interopRequireWildcard(require("../../store/actionConstants"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// default state
const initialState = {
  shouldClose: false,
  menuOpen: false,
  modal: {
    open: false,
    modalState: {
      name: null,
      props: {}
    },
    previousModalState: {
      name: null
    }
  },
  alertOpen: false,
  alertMessage: null,
  qrCodeData: null,
  networkDropdownOpen: false,
  accountDetail: {
    privateKey: ''
  },
  // Used to display loading indicator
  isLoading: false,
  loadingMessage: null,
  // Used to display error text
  warning: null,
  buyView: {},
  isMouseUser: false,
  defaultHdPaths: {
    trezor: `m/44'/60'/0'/0`,
    ledger: `m/44'/60'/0'/0/0`,
    lattice: `m/44'/60'/0'/0`
  },
  networksTabSelectedRpcUrl: '',
  requestAccountTabs: {},
  openMetaMaskTabs: {},
  currentWindowTab: {},
  showWhatsNewPopup: true,
  showTermsOfUsePopup: true,
  singleExceptions: {
    testKey: null
  },
  gasLoadingAnimationIsShowing: false,
  smartTransactionsError: null,
  smartTransactionsErrorMessageDismissed: false,
  ledgerWebHidConnectedStatus: _hardwareWallets.WebHIDConnectedStatuses.unknown,
  ledgerTransportStatus: _hardwareWallets.HardwareTransportStates.none,
  newNftAddedMessage: '',
  removeNftMessage: '',
  newNetworkAddedName: '',
  newNetworkAddedConfigurationId: '',
  selectedNetworkConfigurationId: '',
  sendInputCurrencySwitched: false,
  newTokensImported: '',
  onboardedInThisUISession: false,
  customTokenAmount: '',
  scrollToBottom: true,
  txId: null,
  accountDetailsAddress: ''
};
function reduceApp(state, action) {
  const appState = {
    ...initialState,
    ...state
  };
  switch (action.type) {
    // dropdown methods
    case actionConstants.NETWORK_DROPDOWN_OPEN:
      return {
        ...appState,
        networkDropdownOpen: true
      };
    case actionConstants.NETWORK_DROPDOWN_CLOSE:
      return {
        ...appState,
        networkDropdownOpen: false
      };

    // alert methods
    case actionConstants.ALERT_OPEN:
      return {
        ...appState,
        alertOpen: true,
        alertMessage: action.payload
      };
    case actionConstants.ALERT_CLOSE:
      return {
        ...appState,
        alertOpen: false,
        alertMessage: null
      };
    case actionConstants.SET_ACCOUNT_DETAILS_ADDRESS:
      {
        return {
          ...appState,
          accountDetailsAddress: action.payload
        };
      }

    // qr scanner methods
    case actionConstants.QR_CODE_DETECTED:
      return {
        ...appState,
        qrCodeData: action.value
      };

    // Smart Transactions errors.
    case actionConstants.SET_SMART_TRANSACTIONS_ERROR:
      return {
        ...appState,
        smartTransactionsError: action.payload
      };
    case actionConstants.DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE:
      return {
        ...appState,
        smartTransactionsErrorMessageDismissed: true
      };

    // modal methods:
    case actionConstants.MODAL_OPEN:
      {
        const {
          name,
          ...modalProps
        } = action.payload;
        return {
          ...appState,
          modal: {
            open: true,
            modalState: {
              name,
              props: {
                ...modalProps
              }
            },
            previousModalState: {
              ...appState.modal.modalState
            }
          }
        };
      }
    case actionConstants.MODAL_CLOSE:
      return {
        ...appState,
        modal: Object.assign(appState.modal, {
          open: false
        }, {
          modalState: {
            name: null,
            props: {}
          }
        }, {
          previousModalState: appState.modal.modalState
        })
      };
    case actionConstants.CLEAR_ACCOUNT_DETAILS:
      return {
        ...appState,
        accountDetail: {
          privateKey: ''
        }
      };
    case actionConstants.SHOW_SEND_TOKEN_PAGE:
      return {
        ...appState,
        warning: null
      };
    case actionConstants.LOCK_METAMASK:
      return {
        ...appState,
        warning: null
      };

    // accounts
    case actionConstants.GO_HOME:
      return {
        ...appState,
        accountDetail: {
          privateKey: ''
        },
        warning: null
      };
    case actionConstants.SHOW_ACCOUNTS_PAGE:
      return {
        ...appState,
        isLoading: false,
        warning: null,
        scrollToBottom: false
      };
    case actionConstants.SHOW_CONF_TX_PAGE:
      return {
        ...appState,
        txId: action.id,
        warning: null,
        isLoading: false
      };
    case actionConstants.COMPLETED_TX:
      return {
        ...appState,
        warning: null,
        txId: null
      };
    case actionConstants.UNLOCK_FAILED:
      return {
        ...appState,
        warning: action.value || 'Incorrect password. Try again.'
      };
    case actionConstants.UNLOCK_SUCCEEDED:
      return {
        ...appState,
        warning: ''
      };
    case actionConstants.SET_HARDWARE_WALLET_DEFAULT_HD_PATH:
      {
        const {
          device,
          path
        } = action.payload;
        const newDefaults = {
          ...appState.defaultHdPaths
        };
        newDefaults[device] = path;
        return {
          ...appState,
          defaultHdPaths: newDefaults
        };
      }
    case actionConstants.SHOW_LOADING:
      return {
        ...appState,
        isLoading: true,
        loadingMessage: action.payload
      };
    case actionConstants.HIDE_LOADING:
      return {
        ...appState,
        isLoading: false
      };
    case actionConstants.DISPLAY_WARNING:
      return {
        ...appState,
        warning: action.payload,
        isLoading: false
      };
    case actionConstants.HIDE_WARNING:
      return {
        ...appState,
        warning: undefined
      };
    case actionConstants.SHOW_PRIVATE_KEY:
      return {
        ...appState,
        accountDetail: {
          privateKey: action.payload
        }
      };
    case actionConstants.SET_MOUSE_USER_STATE:
      return {
        ...appState,
        isMouseUser: action.payload
      };
    case actionConstants.SET_SELECTED_NETWORK_CONFIGURATION_ID:
      return {
        ...appState,
        selectedNetworkConfigurationId: action.payload
      };
    case actionConstants.SET_NEW_NETWORK_ADDED:
      {
        const {
          networkConfigurationId,
          nickname
        } = action.payload;
        return {
          ...appState,
          newNetworkAddedName: nickname,
          newNetworkAddedConfigurationId: networkConfigurationId
        };
      }
    case actionConstants.SET_NEW_TOKENS_IMPORTED:
      return {
        ...appState,
        newTokensImported: action.payload
      };
    case actionConstants.SET_NEW_NFT_ADDED_MESSAGE:
      return {
        ...appState,
        newNftAddedMessage: action.payload
      };
    case actionConstants.SET_REMOVE_NFT_MESSAGE:
      return {
        ...appState,
        removeNftMessage: action.payload
      };
    case actionConstants.SET_REQUEST_ACCOUNT_TABS:
      return {
        ...appState,
        requestAccountTabs: action.value
      };
    case actionConstants.SET_OPEN_METAMASK_TAB_IDS:
      return {
        ...appState,
        openMetaMaskTabs: action.payload
      };
    case actionConstants.HIDE_WHATS_NEW_POPUP:
      return {
        ...appState,
        showWhatsNewPopup: false
      };
    case actionConstants.CAPTURE_SINGLE_EXCEPTION:
      return {
        ...appState,
        singleExceptions: {
          ...appState.singleExceptions,
          [action.value]: null
        }
      };
    case actionConstants.TOGGLE_GAS_LOADING_ANIMATION:
      return {
        ...appState,
        gasLoadingAnimationIsShowing: action.payload
      };
    case actionConstants.SET_WEBHID_CONNECTED_STATUS:
      return {
        ...appState,
        ledgerWebHidConnectedStatus: action.payload
      };
    case actionConstants.SET_LEDGER_TRANSPORT_STATUS:
      return {
        ...appState,
        ledgerTransportStatus: action.payload
      };
    case actionConstants.TOGGLE_CURRENCY_INPUT_SWITCH:
      return {
        ...appState,
        sendInputCurrencySwitched: !appState.sendInputCurrencySwitched
      };
    case actionConstants.ONBOARDED_IN_THIS_UI_SESSION:
      return {
        ...appState,
        onboardedInThisUISession: action.payload
      };
    case actionConstants.SET_CUSTOM_TOKEN_AMOUNT:
      return {
        ...appState,
        customTokenAmount: action.payload
      };
    default:
      return appState;
  }
}

// Action Creators
function hideWhatsNewPopup() {
  return {
    type: actionConstants.HIDE_WHATS_NEW_POPUP
  };
}
function toggleGasLoadingAnimation(payload) {
  return {
    type: actionConstants.TOGGLE_GAS_LOADING_ANIMATION,
    payload
  };
}
function setLedgerWebHidConnectedStatus(payload) {
  return {
    type: actionConstants.SET_WEBHID_CONNECTED_STATUS,
    payload
  };
}
function setLedgerTransportStatus(payload) {
  return {
    type: actionConstants.SET_LEDGER_TRANSPORT_STATUS,
    payload
  };
}
function toggleCurrencySwitch() {
  return {
    type: actionConstants.TOGGLE_CURRENCY_INPUT_SWITCH
  };
}
function setOnBoardedInThisUISession(payload) {
  return {
    type: actionConstants.ONBOARDED_IN_THIS_UI_SESSION,
    payload
  };
}
function setCustomTokenAmount(payload) {
  return {
    type: actionConstants.SET_CUSTOM_TOKEN_AMOUNT,
    payload
  };
}

// Selectors
function getQrCodeData(state) {
  return state.appState.qrCodeData;
}
function getGasLoadingAnimationIsShowing(state) {
  return state.appState.gasLoadingAnimationIsShowing;
}
function getLedgerWebHidConnectedStatus(state) {
  return state.appState.ledgerWebHidConnectedStatus;
}
function getLedgerTransportStatus(state) {
  return state.appState.ledgerTransportStatus;
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\app\\app.ts",}],
["F:\\metamask-extension\\ui\\ducks\\confirm-transaction\\confirm-transaction.duck.js", {"../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts","../../../shared/modules/transaction.utils":"F:\\metamask-extension\\shared\\modules\\transaction.utils.js","../../helpers/utils/confirm-tx.util":"F:\\metamask-extension\\ui\\helpers\\utils\\confirm-tx.util.ts","../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../selectors/custom-gas":"F:\\metamask-extension\\ui\\selectors\\custom-gas.js","../metamask/metamask":"F:\\metamask-extension\\ui\\ducks\\metamask\\metamask.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Cconfirm-transaction%5Cconfirm-transaction.duck.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearConfirmTransaction = clearConfirmTransaction;
exports.default = reducer;
exports.setTransactionToConfirm = setTransactionToConfirm;
exports.updateNonce = updateNonce;
exports.updateTokenData = updateTokenData;
exports.updateTokenProps = updateTokenProps;
exports.updateTransactionAmounts = updateTransactionAmounts;
exports.updateTransactionFees = updateTransactionFees;
exports.updateTransactionTotals = updateTransactionTotals;
exports.updateTxData = updateTxData;
exports.updateTxDataAndCalculate = updateTxDataAndCalculate;
var _selectors = require("../../selectors");
var _metamask = require("../metamask/metamask");
var _confirmTx = require("../../helpers/utils/confirm-tx.util");
var _conversion = require("../../../shared/modules/conversion.utils");
var _customGas = require("../../selectors/custom-gas");
var _stringUtils = require("../../../shared/modules/string-utils");
var _transaction = require("../../../shared/modules/transaction.utils");
// Actions
const createActionType = action => `metamask/confirm-transaction/${action}`;
const UPDATE_TX_DATA = createActionType('UPDATE_TX_DATA');
const UPDATE_TOKEN_DATA = createActionType('UPDATE_TOKEN_DATA');
const UPDATE_TOKEN_PROPS = createActionType('UPDATE_TOKEN_PROPS');
const CLEAR_CONFIRM_TRANSACTION = createActionType('CLEAR_CONFIRM_TRANSACTION');
const UPDATE_TRANSACTION_AMOUNTS = createActionType('UPDATE_TRANSACTION_AMOUNTS');
const UPDATE_TRANSACTION_FEES = createActionType('UPDATE_TRANSACTION_FEES');
const UPDATE_TRANSACTION_TOTALS = createActionType('UPDATE_TRANSACTION_TOTALS');
const UPDATE_NONCE = createActionType('UPDATE_NONCE');

// Initial state
const initState = {
  txData: {},
  tokenData: {},
  tokenProps: {},
  fiatTransactionAmount: '',
  fiatTransactionFee: '',
  fiatTransactionTotal: '',
  ethTransactionAmount: '',
  ethTransactionFee: '',
  ethTransactionTotal: '',
  hexTransactionAmount: '',
  hexTransactionFee: '',
  hexTransactionTotal: '',
  nonce: ''
};

// Reducer
function reducer(state = initState, action = {}) {
  switch (action.type) {
    case UPDATE_TX_DATA:
      return {
        ...state,
        txData: {
          ...action.payload
        }
      };
    case UPDATE_TOKEN_DATA:
      return {
        ...state,
        tokenData: {
          ...action.payload
        }
      };
    case UPDATE_TOKEN_PROPS:
      return {
        ...state,
        tokenProps: {
          ...action.payload
        }
      };
    case UPDATE_TRANSACTION_AMOUNTS:
      {
        const {
          fiatTransactionAmount,
          ethTransactionAmount,
          hexTransactionAmount
        } = action.payload;
        return {
          ...state,
          fiatTransactionAmount: fiatTransactionAmount || state.fiatTransactionAmount,
          ethTransactionAmount: ethTransactionAmount || state.ethTransactionAmount,
          hexTransactionAmount: hexTransactionAmount || state.hexTransactionAmount
        };
      }
    case UPDATE_TRANSACTION_FEES:
      {
        const {
          fiatTransactionFee,
          ethTransactionFee,
          hexTransactionFee
        } = action.payload;
        return {
          ...state,
          fiatTransactionFee: fiatTransactionFee || state.fiatTransactionFee,
          ethTransactionFee: ethTransactionFee || state.ethTransactionFee,
          hexTransactionFee: hexTransactionFee || state.hexTransactionFee
        };
      }
    case UPDATE_TRANSACTION_TOTALS:
      {
        const {
          fiatTransactionTotal,
          ethTransactionTotal,
          hexTransactionTotal
        } = action.payload;
        return {
          ...state,
          fiatTransactionTotal: fiatTransactionTotal || state.fiatTransactionTotal,
          ethTransactionTotal: ethTransactionTotal || state.ethTransactionTotal,
          hexTransactionTotal: hexTransactionTotal || state.hexTransactionTotal
        };
      }
    case UPDATE_NONCE:
      return {
        ...state,
        nonce: action.payload
      };
    case CLEAR_CONFIRM_TRANSACTION:
      return initState;
    default:
      return state;
  }
}

// Action Creators
function updateTxData(txData) {
  return {
    type: UPDATE_TX_DATA,
    payload: txData
  };
}
function updateTokenData(tokenData) {
  return {
    type: UPDATE_TOKEN_DATA,
    payload: tokenData
  };
}
function updateTokenProps(tokenProps) {
  return {
    type: UPDATE_TOKEN_PROPS,
    payload: tokenProps
  };
}
function updateTransactionAmounts(amounts) {
  return {
    type: UPDATE_TRANSACTION_AMOUNTS,
    payload: amounts
  };
}
function updateTransactionFees(fees) {
  return {
    type: UPDATE_TRANSACTION_FEES,
    payload: fees
  };
}
function updateTransactionTotals(totals) {
  return {
    type: UPDATE_TRANSACTION_TOTALS,
    payload: totals
  };
}
function updateNonce(nonce) {
  return {
    type: UPDATE_NONCE,
    payload: nonce
  };
}
function updateTxDataAndCalculate(txData) {
  return (dispatch, getState) => {
    const state = getState();
    const currentCurrency = (0, _selectors.currentCurrencySelector)(state);
    const conversionRate = (0, _selectors.conversionRateSelector)(state);
    const nativeCurrency = (0, _metamask.getNativeCurrency)(state);
    dispatch(updateTxData(txData));
    const {
      txParams: {
        value = '0x0',
        gas: gasLimit = '0x0'
      } = {}
    } = txData;

    // if the gas price from our infura endpoint is null or undefined
    // use the metaswap average price estimation as a fallback
    let {
      txParams: {
        gasPrice
      } = {}
    } = txData;
    if (!gasPrice) {
      gasPrice = (0, _customGas.getAveragePriceEstimateInHexWEI)(state) || '0x0';
    }
    const fiatTransactionAmount = (0, _conversion.getValueFromWeiHex)({
      value,
      fromCurrency: nativeCurrency,
      toCurrency: currentCurrency,
      conversionRate,
      numberOfDecimals: 2
    });
    const ethTransactionAmount = (0, _conversion.getValueFromWeiHex)({
      value,
      fromCurrency: nativeCurrency,
      toCurrency: nativeCurrency,
      conversionRate,
      numberOfDecimals: 6
    });
    dispatch(updateTransactionAmounts({
      fiatTransactionAmount,
      ethTransactionAmount,
      hexTransactionAmount: value
    }));
    const hexTransactionFee = (0, _confirmTx.getHexGasTotal)({
      gasLimit,
      gasPrice
    });
    const fiatTransactionFee = (0, _confirmTx.getTransactionFee)({
      value: hexTransactionFee,
      fromCurrency: nativeCurrency,
      toCurrency: currentCurrency,
      numberOfDecimals: 2,
      conversionRate
    });
    const ethTransactionFee = (0, _confirmTx.getTransactionFee)({
      value: hexTransactionFee,
      fromCurrency: nativeCurrency,
      toCurrency: nativeCurrency,
      numberOfDecimals: 6,
      conversionRate
    });
    dispatch(updateTransactionFees({
      fiatTransactionFee,
      ethTransactionFee,
      hexTransactionFee
    }));
    const fiatTransactionTotal = (0, _confirmTx.addFiat)(fiatTransactionFee, fiatTransactionAmount);
    const ethTransactionTotal = (0, _confirmTx.addEth)(ethTransactionFee, ethTransactionAmount);
    const hexTransactionTotal = (0, _conversion.sumHexes)(value, hexTransactionFee);
    dispatch(updateTransactionTotals({
      fiatTransactionTotal,
      ethTransactionTotal,
      hexTransactionTotal
    }));
  };
}
function setTransactionToConfirm(transactionId) {
  return (dispatch, getState) => {
    const state = getState();
    const unconfirmedTransactionsHash = (0, _selectors.unconfirmedTransactionsHashSelector)(state);
    const transaction = unconfirmedTransactionsHash[transactionId];
    if (!transaction) {
      console.error(`Transaction with id ${transactionId} not found`);
      return;
    }
    if (transaction.txParams) {
      dispatch(updateTxDataAndCalculate(transaction));
      const {
        txParams
      } = transaction;
      if (txParams.data) {
        const {
          to: tokenAddress,
          data
        } = txParams;
        const tokenData = (0, _transaction.parseStandardTokenTransactionData)(data);
        const tokens = (0, _metamask.getTokens)(state);
        const currentToken = tokens === null || tokens === void 0 ? void 0 : tokens.find(({
          address
        }) => (0, _stringUtils.isEqualCaseInsensitive)(tokenAddress, address));
        dispatch(updateTokenProps({
          decimals: currentToken === null || currentToken === void 0 ? void 0 : currentToken.decimals,
          symbol: currentToken === null || currentToken === void 0 ? void 0 : currentToken.symbol
        }));
        dispatch(updateTokenData(tokenData));
      }
      if (txParams.nonce) {
        const nonce = (0, _conversion.hexToDecimal)(txParams.nonce);
        dispatch(updateNonce(nonce));
      }
    } else {
      dispatch(updateTxData(transaction));
    }
  };
}
function clearConfirmTransaction() {
  return {
    type: CLEAR_CONFIRM_TRANSACTION
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\confirm-transaction\\confirm-transaction.duck.js",}],
["F:\\metamask-extension\\ui\\ducks\\domains.js", {"../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","../helpers/utils/util":"F:\\metamask-extension\\ui\\helpers\\utils\\util.js","../pages/send/send.constants":"F:\\metamask-extension\\ui\\pages\\send\\send.constants.js","../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../store/actionConstants":"F:\\metamask-extension\\ui\\store\\actionConstants.ts","@ethersproject/providers":"F:\\metamask-extension\\node_modules\\@ethersproject\\providers\\lib\\index.js","@reduxjs/toolkit":"F:\\metamask-extension\\node_modules\\@reduxjs\\toolkit\\dist\\index.js","ethereum-ens-network-map":"F:\\metamask-extension\\node_modules\\ethereum-ens-network-map\\index.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","unicode-confusables":"F:\\metamask-extension\\node_modules\\unicode-confusables\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Cdomains.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domainInitialState = exports.default = void 0;
exports.getDomainError = getDomainError;
exports.getDomainResolution = getDomainResolution;
exports.getDomainWarning = getDomainWarning;
exports.initializeDomainSlice = initializeDomainSlice;
exports.lookupEnsName = lookupEnsName;
exports.resetDomainResolution = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _ethereumEnsNetworkMap = _interopRequireDefault(require("ethereum-ens-network-map"));
var _unicodeConfusables = require("unicode-confusables");
var _ethereumjsUtil = require("ethereumjs-util");
var _providers = require("@ethersproject/providers");
var _selectors = require("../selectors");
var _network = require("../../shared/constants/network");
var _send = require("../pages/send/send.constants");
var _util = require("../helpers/utils/util");
var _actionConstants = require("../store/actionConstants");
var _hexstringUtils = require("../../shared/modules/hexstring-utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Local Constants
const ZERO_X_ERROR_ADDRESS = '0x';
const ENS = 'ENS';
const initialState = {
  stage: 'UNINITIALIZED',
  resolution: null,
  error: null,
  warning: null,
  network: null,
  domainType: null,
  domainName: null
};
const domainInitialState = initialState;
exports.domainInitialState = domainInitialState;
const name = 'DNS';
let web3Provider = null;
const slice = (0, _toolkit.createSlice)({
  name,
  initialState,
  reducers: {
    domainLookup: (state, action) => {
      // first clear out the previous state
      state.resolution = null;
      state.error = null;
      state.warning = null;
      const {
        address,
        error,
        network,
        domainType,
        domainName
      } = action.payload;
      state.domainType = domainType;
      if (state.domainType === ENS) {
        if (error) {
          if ((0, _util.isValidDomainName)(domainName) && error.message === 'ENS name not defined.') {
            state.error = network === _network.NETWORK_IDS.MAINNET ? _send.ENS_NO_ADDRESS_FOR_NAME : _send.ENS_NOT_FOUND_ON_NETWORK;
          } else if (error.message === 'Illegal character for ENS.') {
            state.error = _send.ENS_ILLEGAL_CHARACTER;
          } else {
            _loglevel.default.error(error);
            state.error = _send.ENS_UNKNOWN_ERROR;
          }
        } else if (address) {
          if (address === _hexstringUtils.BURN_ADDRESS) {
            state.error = _send.ENS_NO_ADDRESS_FOR_NAME;
          } else if (address === ZERO_X_ERROR_ADDRESS) {
            state.error = _send.ENS_REGISTRATION_ERROR;
          } else {
            state.resolution = address;
          }
          if ((0, _util.isValidDomainName)(address) && (0, _unicodeConfusables.isConfusing)(address)) {
            state.warning = _send.CONFUSING_ENS_ERROR;
          }
        } else {
          state.error = _send.ENS_NO_ADDRESS_FOR_NAME;
        }
      }
    },
    enableDomainLookup: (state, action) => {
      state.stage = 'INITIALIZED';
      state.error = null;
      state.resolution = null;
      state.warning = null;
      state.network = action.payload;
    },
    disableDomainLookup: state => {
      state.stage = 'NO_NETWORK_SUPPORT';
      state.error = null;
      state.warning = null;
      state.resolution = null;
      state.network = null;
    },
    ensNotSupported: state => {
      state.resolution = null;
      state.warning = null;
      state.error = _send.ENS_NOT_SUPPORTED_ON_NETWORK;
    },
    resetDomainResolution: state => {
      state.resolution = null;
      state.warning = null;
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder.addCase(_actionConstants.CHAIN_CHANGED, (state, action) => {
      if (action.payload !== state.currentChainId) {
        state.stage = 'UNINITIALIZED';
        web3Provider = null;
      }
    });
  }
});
const {
  reducer,
  actions
} = slice;
var _default = reducer;
exports.default = _default;
const {
  disableDomainLookup,
  domainLookup,
  enableDomainLookup,
  ensNotSupported,
  resetDomainResolution
} = actions;
exports.resetDomainResolution = resetDomainResolution;
function initializeDomainSlice() {
  return (dispatch, getState) => {
    const state = getState();
    const chainId = (0, _selectors.getCurrentChainId)(state);
    const network = _network.CHAIN_ID_TO_NETWORK_ID_MAP[chainId];
    const networkName = _network.NETWORK_ID_TO_ETHERS_NETWORK_NAME_MAP[network];
    const ensAddress = _ethereumEnsNetworkMap.default[network];
    const networkIsSupported = Boolean(ensAddress);
    if (networkIsSupported) {
      web3Provider = new _providers.Web3Provider(global.ethereumProvider, {
        chainId: parseInt(network, 10),
        name: networkName,
        ensAddress
      });
      dispatch(enableDomainLookup(network));
    } else {
      web3Provider = null;
      dispatch(disableDomainLookup());
    }
  };
}
function lookupEnsName(domainName) {
  return async (dispatch, getState) => {
    const trimmedDomainName = domainName.trim();
    let state = getState();
    if (state[name].stage === 'UNINITIALIZED') {
      await dispatch(initializeDomainSlice());
    }
    state = getState();
    if (state[name].stage === 'NO_NETWORK_SUPPORT' && !((0, _hexstringUtils.isBurnAddress)(trimmedDomainName) === false && (0, _hexstringUtils.isValidHexAddress)(trimmedDomainName, {
      mixedCaseUseChecksum: true
    })) && !(0, _ethereumjsUtil.isHexString)(trimmedDomainName)) {
      await dispatch(ensNotSupported());
    } else {
      _loglevel.default.info(`ENS attempting to resolve name: ${trimmedDomainName}`);
      let address;
      let error;
      try {
        address = await web3Provider.resolveName(trimmedDomainName);
      } catch (err) {
        error = err;
      }
      const chainId = (0, _selectors.getCurrentChainId)(state);
      const network = _network.CHAIN_ID_TO_NETWORK_ID_MAP[chainId];
      await dispatch(domainLookup({
        address,
        error,
        chainId,
        network,
        domainType: ENS,
        domainName: trimmedDomainName
      }));
    }
  };
}
function getDomainResolution(state) {
  return state[name].resolution;
}
function getDomainError(state) {
  return state[name].error;
}
function getDomainWarning(state) {
  return state[name].warning;
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\domains.js",}],
["F:\\metamask-extension\\ui\\ducks\\gas\\gas-action-constants.ts", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Cgas%5Cgas-action-constants.ts
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_CUSTOM_GAS_PRICE = exports.SET_CUSTOM_GAS_LIMIT = exports.RESET_CUSTOM_DATA = void 0;
// This file has been separated because it is required in both the gas and send
// slices. This created a circular dependency problem as both slices also
// import from the actions and selectors files. This easiest path for
// untangling is having the constants separate.

// Actions
const RESET_CUSTOM_DATA = 'metamask/gas/RESET_CUSTOM_DATA';
exports.RESET_CUSTOM_DATA = RESET_CUSTOM_DATA;
const SET_CUSTOM_GAS_LIMIT = 'metamask/gas/SET_CUSTOM_GAS_LIMIT';
exports.SET_CUSTOM_GAS_LIMIT = SET_CUSTOM_GAS_LIMIT;
const SET_CUSTOM_GAS_PRICE = 'metamask/gas/SET_CUSTOM_GAS_PRICE';
exports.SET_CUSTOM_GAS_PRICE = SET_CUSTOM_GAS_PRICE;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\gas\\gas-action-constants.ts",}],
["F:\\metamask-extension\\ui\\ducks\\gas\\gas.duck.js", {"./gas-action-constants":"F:\\metamask-extension\\ui\\ducks\\gas\\gas-action-constants.ts","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Cgas%5Cgas.duck.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.setCustomGasLimit = setCustomGasLimit;
exports.setCustomGasPrice = setCustomGasPrice;
var _lodash = require("lodash");
var _gasActionConstants = require("./gas-action-constants");
const initState = {
  customData: {
    price: null,
    limit: null
  }
};

// Reducer
function reducer(state = initState, action) {
  switch (action.type) {
    case _gasActionConstants.SET_CUSTOM_GAS_PRICE:
      return {
        ...state,
        customData: {
          ...state.customData,
          price: action.value
        }
      };
    case _gasActionConstants.SET_CUSTOM_GAS_LIMIT:
      return {
        ...state,
        customData: {
          ...state.customData,
          limit: action.value
        }
      };
    case _gasActionConstants.RESET_CUSTOM_DATA:
      return {
        ...state,
        customData: (0, _lodash.cloneDeep)(initState.customData)
      };
    default:
      return state;
  }
}
function setCustomGasPrice(newPrice) {
  return {
    type: _gasActionConstants.SET_CUSTOM_GAS_PRICE,
    value: newPrice
  };
}
function setCustomGasLimit(newLimit) {
  return {
    type: _gasActionConstants.SET_CUSTOM_GAS_LIMIT,
    value: newLimit
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\gas\\gas.duck.js",}],
["F:\\metamask-extension\\ui\\ducks\\history\\history.js", {"../../helpers/constants/routes":"F:\\metamask-extension\\ui\\helpers\\constants\\routes.ts","@reduxjs/toolkit":"F:\\metamask-extension\\node_modules\\@reduxjs\\toolkit\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Chistory%5Chistory.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageChanged = exports.getMostRecentOverviewPage = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _routes = require("../../helpers/constants/routes");
// Constants

const initialState = {
  mostRecentOverviewPage: _routes.DEFAULT_ROUTE
};
const name = 'history';

// Slice (reducer plus auto-generated actions and action creators)

const slice = (0, _toolkit.createSlice)({
  name,
  initialState,
  reducers: {
    pageChanged: (state, action) => {
      const path = action.payload;
      if (path === _routes.DEFAULT_ROUTE || path.startsWith(_routes.ASSET_ROUTE)) {
        state.mostRecentOverviewPage = path;
      }
    }
  }
});
const {
  actions,
  reducer
} = slice;
var _default = reducer; // Selectors
exports.default = _default;
const getMostRecentOverviewPage = state => state[name].mostRecentOverviewPage;

// Actions / action-creators
exports.getMostRecentOverviewPage = getMostRecentOverviewPage;
const {
  pageChanged
} = actions;
exports.pageChanged = pageChanged;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\history\\history.js",}],
["F:\\metamask-extension\\ui\\ducks\\index.js", {"../../shared/constants/alerts":"F:\\metamask-extension\\shared\\constants\\alerts.ts","./alerts":"F:\\metamask-extension\\ui\\ducks\\alerts\\index.js","./app/app":"F:\\metamask-extension\\ui\\ducks\\app\\app.ts","./confirm-transaction/confirm-transaction.duck":"F:\\metamask-extension\\ui\\ducks\\confirm-transaction\\confirm-transaction.duck.js","./domains":"F:\\metamask-extension\\ui\\ducks\\domains.js","./gas/gas.duck":"F:\\metamask-extension\\ui\\ducks\\gas\\gas.duck.js","./history/history":"F:\\metamask-extension\\ui\\ducks\\history\\history.js","./locale/locale":"F:\\metamask-extension\\ui\\ducks\\locale\\locale.js","./metamask/metamask":"F:\\metamask-extension\\ui\\ducks\\metamask\\metamask.js","./send/send":"F:\\metamask-extension\\ui\\ducks\\send\\send.js","./swaps/swaps":"F:\\metamask-extension\\ui\\ducks\\swaps\\swaps.js","redux":"F:\\metamask-extension\\node_modules\\redux\\lib\\redux.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _alerts = require("../../shared/constants/alerts");
var _metamask = _interopRequireDefault(require("./metamask/metamask"));
var _locale = _interopRequireDefault(require("./locale/locale"));
var _send = _interopRequireDefault(require("./send/send"));
var _domains = _interopRequireDefault(require("./domains"));
var _app = _interopRequireDefault(require("./app/app"));
var _confirmTransaction = _interopRequireDefault(require("./confirm-transaction/confirm-transaction.duck"));
var _gas = _interopRequireDefault(require("./gas/gas.duck"));
var _alerts2 = require("./alerts");
var _swaps = _interopRequireDefault(require("./swaps/swaps"));
var _history = _interopRequireDefault(require("./history/history"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (0, _redux.combineReducers)({
  [_alerts.AlertTypes.invalidCustomNetwork]: _alerts2.invalidCustomNetwork,
  [_alerts.AlertTypes.unconnectedAccount]: _alerts2.unconnectedAccount,
  activeTab: s => s === undefined ? null : s,
  metamask: _metamask.default,
  appState: _app.default,
  DNS: _domains.default,
  history: _history.default,
  send: _send.default,
  confirmTransaction: _confirmTransaction.default,
  swaps: _swaps.default,
  gas: _gas.default,
  localeMessages: _locale.default
});
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\index.js",}],
["F:\\metamask-extension\\ui\\ducks\\locale\\locale.js", {"../../store/actionConstants":"F:\\metamask-extension\\ui\\store\\actionConstants.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Clocale%5Clocale.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceLocaleMessages;
exports.getEnLocaleMessages = exports.getCurrentLocaleMessages = exports.getCurrentLocale = void 0;
var actionConstants = _interopRequireWildcard(require("../../store/actionConstants"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function reduceLocaleMessages(state = {}, {
  type,
  payload
}) {
  switch (type) {
    case actionConstants.SET_CURRENT_LOCALE:
      return {
        ...state,
        current: payload.messages,
        currentLocale: payload.locale
      };
    default:
      return state;
  }
}
const getCurrentLocale = state => state.localeMessages.currentLocale;
exports.getCurrentLocale = getCurrentLocale;
const getCurrentLocaleMessages = state => state.localeMessages.current;
exports.getCurrentLocaleMessages = getCurrentLocaleMessages;
const getEnLocaleMessages = state => state.localeMessages.en;
exports.getEnLocaleMessages = getEnLocaleMessages;

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\locale\\locale.js",}],
["F:\\metamask-extension\\ui\\ducks\\metamask\\metamask.js", {"../../../shared/constants/alerts":"F:\\metamask-extension\\shared\\constants\\alerts.ts","../../../shared/constants/gas":"F:\\metamask-extension\\shared\\constants\\gas.ts","../../../shared/constants/keyring":"F:\\metamask-extension\\shared\\constants\\keyring.ts","../../../shared/constants/preferences":"F:\\metamask-extension\\shared\\constants\\preferences.ts","../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","../../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts","../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../store/actionConstants":"F:\\metamask-extension\\ui\\store\\actionConstants.ts","../../store/actions":"F:\\metamask-extension\\ui\\store\\actions.ts","../gas/gas.duck":"F:\\metamask-extension\\ui\\ducks\\gas\\gas.duck.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Cmetamask%5Cmetamask.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceMetamask;
exports.doesUserHaveALedgerAccount = doesUserHaveALedgerAccount;
exports.findKeyringForAddress = findKeyringForAddress;
exports.getAlertEnabledness = void 0;
exports.getBlockGasLimit = getBlockGasLimit;
exports.getCompletedOnboarding = getCompletedOnboarding;
exports.getConversionRate = getConversionRate;
exports.getEstimatedGasFeeTimeBounds = getEstimatedGasFeeTimeBounds;
exports.getGasEstimateType = getGasEstimateType;
exports.getGasFeeEstimates = getGasFeeEstimates;
exports.getIsGasEstimatesLoading = getIsGasEstimatesLoading;
exports.getIsInitialized = getIsInitialized;
exports.getIsNetworkBusy = getIsNetworkBusy;
exports.getIsUnlocked = getIsUnlocked;
exports.getLedgerTransportType = getLedgerTransportType;
exports.getNativeCurrency = getNativeCurrency;
exports.getNfts = exports.getNftContracts = void 0;
exports.getNftsDropdownState = getNftsDropdownState;
exports.getPendingTokens = void 0;
exports.getProviderConfig = getProviderConfig;
exports.getSeedPhraseBackedUp = getSeedPhraseBackedUp;
exports.getSendHexDataFeatureFlagState = getSendHexDataFeatureFlagState;
exports.getSendToAccounts = getSendToAccounts;
exports.getTokens = void 0;
exports.getUnapprovedTxs = getUnapprovedTxs;
exports.getWeb3ShimUsageAlertEnabledness = exports.getUnconnectedAccountAlertShown = exports.getUnconnectedAccountAlertEnabledness = void 0;
exports.isAddressLedger = isAddressLedger;
exports.isEIP1559Network = isEIP1559Network;
exports.isLineaMainnetNetworkReleased = isLineaMainnetNetworkReleased;
exports.isNotEIP1559Network = isNotEIP1559Network;
exports.updateGasFees = updateGasFees;
var _ethereumjsUtil = require("ethereumjs-util");
var actionConstants = _interopRequireWildcard(require("../../store/actionConstants"));
var _alerts = require("../../../shared/constants/alerts");
var _gas = require("../../../shared/constants/gas");
var _selectors = require("../../selectors");
var _actions = require("../../store/actions");
var _gas2 = require("../gas/gas.duck");
var _keyring = require("../../../shared/constants/keyring");
var _preferences = require("../../../shared/constants/preferences");
var _stringUtils = require("../../../shared/modules/string-utils");
var _hexstringUtils = require("../../../shared/modules/hexstring-utils");
var _conversion = require("../../../shared/modules/conversion.utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const initialState = {
  isInitialized: false,
  isUnlocked: false,
  isAccountMenuOpen: false,
  isNetworkMenuOpen: false,
  identities: {},
  unapprovedTxs: {},
  networkConfigurations: {},
  addressBook: [],
  contractExchangeRates: {},
  pendingTokens: {},
  customNonceValue: '',
  useBlockie: false,
  featureFlags: {},
  welcomeScreenSeen: false,
  currentLocale: '',
  currentBlockGasLimit: '',
  preferences: {
    autoLockTimeLimit: _preferences.DEFAULT_AUTO_LOCK_TIME_LIMIT,
    showFiatInTestnets: false,
    showTestNetworks: false,
    useNativeCurrencyAsPrimaryCurrency: true
  },
  firstTimeFlowType: null,
  completedOnboarding: false,
  knownMethodData: {},
  participateInMetaMetrics: null,
  nextNonce: null,
  conversionRate: null,
  nativeCurrency: 'ETH'
};

/**
 * Temporary types for this slice so that inferrence of MetaMask state tree can
 * occur
 *
 * @param {typeof initialState} state - State
 * @param {any} action
 * @returns {typeof initialState}
 */
function reduceMetamask(state = initialState, action) {
  // I don't think we should be spreading initialState into this. Once the
  // state tree has begun by way of the first reduce call the initialState is
  // set. The only time it should be used again is if we reset the state with a
  // deliberate action. However, our tests are *relying upon the initialState
  // tree above to be spread into the reducer as a way of hydrating the state
  // for this slice*. I attempted to remove this and it caused nearly 40 test
  // failures. We are going to refactor this slice anyways, possibly removing
  // it so we will fix this issue when that time comes.
  const metamaskState = {
    ...initialState,
    ...state
  };
  switch (action.type) {
    case actionConstants.UPDATE_METAMASK_STATE:
      return {
        ...metamaskState,
        ...action.value
      };
    case actionConstants.LOCK_METAMASK:
      return {
        ...metamaskState,
        isUnlocked: false
      };
    case actionConstants.SET_ACCOUNT_LABEL:
      {
        const {
          account
        } = action.value;
        const name = action.value.label;
        const id = {};
        id[account] = {
          ...metamaskState.identities[account],
          name
        };
        const identities = {
          ...metamaskState.identities,
          ...id
        };
        return Object.assign(metamaskState, {
          identities
        });
      }
    case actionConstants.UPDATE_CUSTOM_NONCE:
      return {
        ...metamaskState,
        customNonceValue: action.value
      };
    case actionConstants.TOGGLE_ACCOUNT_MENU:
      return {
        ...metamaskState,
        isAccountMenuOpen: !metamaskState.isAccountMenuOpen
      };
    case actionConstants.TOGGLE_NETWORK_MENU:
      return {
        ...metamaskState,
        isNetworkMenuOpen: !metamaskState.isNetworkMenuOpen
      };
    case actionConstants.UPDATE_TRANSACTION_PARAMS:
      {
        const {
          id: txId,
          value
        } = action;
        let {
          currentNetworkTxList
        } = metamaskState;
        currentNetworkTxList = currentNetworkTxList.map(tx => {
          if (tx.id === txId) {
            const newTx = {
              ...tx
            };
            newTx.txParams = value;
            return newTx;
          }
          return tx;
        });
        return {
          ...metamaskState,
          currentNetworkTxList
        };
      }
    case actionConstants.SET_PARTICIPATE_IN_METAMETRICS:
      return {
        ...metamaskState,
        participateInMetaMetrics: action.value
      };
    case actionConstants.CLOSE_WELCOME_SCREEN:
      return {
        ...metamaskState,
        welcomeScreenSeen: true
      };
    case actionConstants.SET_PENDING_TOKENS:
      return {
        ...metamaskState,
        pendingTokens: {
          ...action.payload
        }
      };
    case actionConstants.CLEAR_PENDING_TOKENS:
      {
        return {
          ...metamaskState,
          pendingTokens: {}
        };
      }
    case actionConstants.COMPLETE_ONBOARDING:
      {
        return {
          ...metamaskState,
          completedOnboarding: true
        };
      }
    case actionConstants.SET_FIRST_TIME_FLOW_TYPE:
      {
        return {
          ...metamaskState,
          firstTimeFlowType: action.value
        };
      }
    case actionConstants.SET_NEXT_NONCE:
      {
        return {
          ...metamaskState,
          nextNonce: action.payload
        };
      }
    default:
      return metamaskState;
  }
}
const toHexWei = (value, expectHexWei) => {
  return (0, _ethereumjsUtil.addHexPrefix)(expectHexWei ? value : (0, _conversion.decGWEIToHexWEI)(value));
};

// Action Creators
function updateGasFees({
  gasPrice,
  gasLimit,
  maxPriorityFeePerGas,
  maxFeePerGas,
  transaction,
  expectHexWei = false
}) {
  return async dispatch => {
    const txParamsCopy = {
      ...transaction.txParams,
      gas: gasLimit
    };
    if (gasPrice) {
      dispatch((0, _gas2.setCustomGasPrice)(toHexWei(txParamsCopy.gasPrice, expectHexWei)));
      txParamsCopy.gasPrice = toHexWei(gasPrice, expectHexWei);
    } else if (maxFeePerGas && maxPriorityFeePerGas) {
      txParamsCopy.maxFeePerGas = toHexWei(maxFeePerGas, expectHexWei);
      txParamsCopy.maxPriorityFeePerGas = (0, _ethereumjsUtil.addHexPrefix)((0, _conversion.decGWEIToHexWEI)(maxPriorityFeePerGas));
    }
    const updatedTx = {
      ...transaction,
      txParams: txParamsCopy
    };
    const customGasLimit = (0, _ethereumjsUtil.isHexString)((0, _ethereumjsUtil.addHexPrefix)(gasLimit)) ? (0, _ethereumjsUtil.addHexPrefix)(gasLimit) : (0, _ethereumjsUtil.addHexPrefix)(gasLimit.toString(16));
    dispatch((0, _gas2.setCustomGasLimit)(customGasLimit));
    await dispatch((0, _actions.updateTransactionGasFees)(updatedTx.id, updatedTx));
  };
}

// Selectors

const getAlertEnabledness = state => state.metamask.alertEnabledness;

/**
 * Get the provider configuration for the current selected network.
 *
 * @param {object} state - Redux state object.
 * @returns {__import__('../../../app/scripts/controllers/network/network-controller').NetworkControllerState['providerConfig']} The provider configuration for the current selected network.
 */
exports.getAlertEnabledness = getAlertEnabledness;
function getProviderConfig(state) {
  return state.metamask.providerConfig;
}
const getUnconnectedAccountAlertEnabledness = state => getAlertEnabledness(state)[_alerts.AlertTypes.unconnectedAccount];
exports.getUnconnectedAccountAlertEnabledness = getUnconnectedAccountAlertEnabledness;
const getWeb3ShimUsageAlertEnabledness = state => getAlertEnabledness(state)[_alerts.AlertTypes.web3ShimUsage];
exports.getWeb3ShimUsageAlertEnabledness = getWeb3ShimUsageAlertEnabledness;
const getUnconnectedAccountAlertShown = state => state.metamask.unconnectedAccountAlertShownOrigins;
exports.getUnconnectedAccountAlertShown = getUnconnectedAccountAlertShown;
const getPendingTokens = state => state.metamask.pendingTokens;
exports.getPendingTokens = getPendingTokens;
const getTokens = state => state.metamask.tokens;
exports.getTokens = getTokens;
function getNftsDropdownState(state) {
  return state.metamask.nftsDropdownState;
}
const getNfts = state => {
  var _allNfts$selectedAddr;
  const {
    metamask: {
      allNfts,
      selectedAddress
    }
  } = state;
  const {
    chainId
  } = getProviderConfig(state);
  return (allNfts === null || allNfts === void 0 ? void 0 : (_allNfts$selectedAddr = allNfts[selectedAddress]) === null || _allNfts$selectedAddr === void 0 ? void 0 : _allNfts$selectedAddr[chainId]) ?? [];
};
exports.getNfts = getNfts;
const getNftContracts = state => {
  var _allNftContracts$sele;
  const {
    metamask: {
      allNftContracts,
      selectedAddress
    }
  } = state;
  const {
    chainId
  } = getProviderConfig(state);
  return (allNftContracts === null || allNftContracts === void 0 ? void 0 : (_allNftContracts$sele = allNftContracts[selectedAddress]) === null || _allNftContracts$sele === void 0 ? void 0 : _allNftContracts$sele[chainId]) ?? [];
};
exports.getNftContracts = getNftContracts;
function getBlockGasLimit(state) {
  return state.metamask.currentBlockGasLimit;
}
function getConversionRate(state) {
  return state.metamask.conversionRate;
}
function getNativeCurrency(state) {
  const useCurrencyRateCheck = (0, _selectors.getUseCurrencyRateCheck)(state);
  return useCurrencyRateCheck ? state.metamask.nativeCurrency : getProviderConfig(state).ticker;
}
function getSendHexDataFeatureFlagState(state) {
  return state.metamask.featureFlags.sendHexData;
}
function getSendToAccounts(state) {
  const fromAccounts = (0, _selectors.accountsWithSendEtherInfoSelector)(state);
  const addressBookAccounts = (0, _selectors.getAddressBook)(state);
  return [...fromAccounts, ...addressBookAccounts];
}
function getUnapprovedTxs(state) {
  return state.metamask.unapprovedTxs;
}

/**
 * Function returns true if network details are fetched and it is found to not support EIP-1559
 *
 * @param state
 */
function isNotEIP1559Network(state) {
  var _state$metamask$netwo;
  return ((_state$metamask$netwo = state.metamask.networkDetails) === null || _state$metamask$netwo === void 0 ? void 0 : _state$metamask$netwo.EIPS[1559]) === false;
}

/**
 * Function returns true if network details are fetched and it is found to support EIP-1559
 *
 * @param state
 */
function isEIP1559Network(state) {
  var _state$metamask$netwo2;
  return ((_state$metamask$netwo2 = state.metamask.networkDetails) === null || _state$metamask$netwo2 === void 0 ? void 0 : _state$metamask$netwo2.EIPS[1559]) === true;
}
function getGasEstimateType(state) {
  return state.metamask.gasEstimateType;
}
function getGasFeeEstimates(state) {
  return state.metamask.gasFeeEstimates;
}
function getEstimatedGasFeeTimeBounds(state) {
  return state.metamask.estimatedGasFeeTimeBounds;
}
function getIsGasEstimatesLoading(state) {
  const networkAndAccountSupports1559 = (0, _selectors.checkNetworkAndAccountSupports1559)(state);
  const gasEstimateType = getGasEstimateType(state);

  // We consider the gas estimate to be loading if the gasEstimateType is
  // 'NONE' or if the current gasEstimateType cannot be supported by the current
  // network
  const isEIP1559TolerableEstimateType = gasEstimateType === _gas.GasEstimateTypes.feeMarket || gasEstimateType === _gas.GasEstimateTypes.ethGasPrice;
  const isGasEstimatesLoading = gasEstimateType === _gas.GasEstimateTypes.none || networkAndAccountSupports1559 && !isEIP1559TolerableEstimateType || !networkAndAccountSupports1559 && gasEstimateType === _gas.GasEstimateTypes.feeMarket;
  return isGasEstimatesLoading;
}
function getIsNetworkBusy(state) {
  const gasFeeEstimates = getGasFeeEstimates(state);
  return (gasFeeEstimates === null || gasFeeEstimates === void 0 ? void 0 : gasFeeEstimates.networkCongestion) >= _gas.NetworkCongestionThresholds.busy;
}
function getCompletedOnboarding(state) {
  return state.metamask.completedOnboarding;
}
function getIsInitialized(state) {
  return state.metamask.isInitialized;
}
function getIsUnlocked(state) {
  return state.metamask.isUnlocked;
}
function getSeedPhraseBackedUp(state) {
  return state.metamask.seedPhraseBackedUp;
}

/**
 * Given the redux state object and an address, finds a keyring that contains that address, if one exists
 *
 * @param {object} state - the redux state object
 * @param {string} address - the address to search for among the keyring addresses
 * @returns {object | undefined} The keyring which contains the passed address, or undefined
 */
function findKeyringForAddress(state, address) {
  const keyring = state.metamask.keyrings.find(kr => {
    return kr.accounts.some(account => {
      return (0, _stringUtils.isEqualCaseInsensitive)(account, (0, _ethereumjsUtil.addHexPrefix)(address)) || (0, _stringUtils.isEqualCaseInsensitive)(account, (0, _hexstringUtils.stripHexPrefix)(address));
    });
  });
  return keyring;
}

/**
 * Given the redux state object, returns the users preferred ledger transport type
 *
 * @param {object} state - the redux state object
 * @returns {string} The users preferred ledger transport type. One of'ledgerLive', 'webhid' or 'u2f'
 */
function getLedgerTransportType(state) {
  return state.metamask.ledgerTransportType;
}

/**
 * Given the redux state object and an address, returns a boolean indicating whether the passed address is part of a Ledger keyring
 *
 * @param {object} state - the redux state object
 * @param {string} address - the address to search for among all keyring addresses
 * @returns {boolean} true if the passed address is part of a ledger keyring, and false otherwise
 */
function isAddressLedger(state, address) {
  const keyring = findKeyringForAddress(state, address);
  return (keyring === null || keyring === void 0 ? void 0 : keyring.type) === _keyring.KeyringType.ledger;
}

/**
 * Given the redux state object, returns a boolean indicating whether the user has any Ledger accounts added to MetaMask (i.e. Ledger keyrings
 * in state)
 *
 * @param {object} state - the redux state object
 * @returns {boolean} true if the user has a Ledger account and false otherwise
 */
function doesUserHaveALedgerAccount(state) {
  return state.metamask.keyrings.some(kr => {
    return kr.type === _keyring.KeyringType.ledger;
  });
}
function isLineaMainnetNetworkReleased(state) {
  return state.metamask.isLineaMainnetReleased;
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\metamask\\metamask.js",}],
["F:\\metamask-extension\\ui\\ducks\\send\\helpers.js", {"../../../shared/constants/gas":"F:\\metamask-extension\\shared\\constants\\gas.ts","../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../../shared/lib/transactions-controller-utils":"F:\\metamask-extension\\shared\\lib\\transactions-controller-utils.js","../../../shared/modules/Numeric":"F:\\metamask-extension\\shared\\modules\\Numeric.ts","../../../shared/modules/contract-utils":"F:\\metamask-extension\\shared\\modules\\contract-utils.ts","../../pages/send/send.utils":"F:\\metamask-extension\\ui\\pages\\send\\send.utils.js","../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../store/actions":"F:\\metamask-extension\\ui\\store\\actions.ts","bignumber.js":"F:\\metamask-extension\\node_modules\\bignumber.js\\bignumber.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","human-standard-token-abi":"F:\\metamask-extension\\node_modules\\human-standard-token-abi\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Csend%5Chelpers.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.estimateGasLimitForSend = estimateGasLimitForSend;
exports.generateTransactionParams = generateTransactionParams;
exports.getERC20Balance = getERC20Balance;
exports.getRoundedGasPrice = getRoundedGasPrice;
var _ethereumjsUtil = require("ethereumjs-util");
var _humanStandardTokenAbi = _interopRequireDefault(require("human-standard-token-abi"));
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _gas = require("../../../shared/constants/gas");
var _transactionsControllerUtils = require("../../../shared/lib/transactions-controller-utils");
var _network = require("../../../shared/constants/network");
var _transaction = require("../../../shared/constants/transaction");
var _contractUtils = require("../../../shared/modules/contract-utils");
var _send = require("../../pages/send/send.utils");
var _selectors = require("../../selectors");
var _actions = require("../../store/actions");
var _Numeric = require("../../../shared/modules/Numeric");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function estimateGasLimitForSend({
  selectedAddress,
  value,
  gasPrice,
  sendToken,
  to,
  data,
  isNonStandardEthChain,
  chainId,
  gasLimit,
  ...options
}) {
  let isSimpleSendOnNonStandardNetwork = false;

  // blockGasLimit may be a falsy, but defined, value when we receive it from
  // state, so we use logical or to fall back to MIN_GAS_LIMIT_HEX. Some
  // network implementations check the gas parameter supplied to
  // eth_estimateGas for validity. For this reason, we set token sends
  // blockGasLimit default to a higher number. Note that the current gasLimit
  // on a BLOCK is 15,000,000 and will be 30,000,000 on mainnet after London.
  // Meanwhile, MIN_GAS_LIMIT_HEX is 0x5208.
  let blockGasLimit = _gas.MIN_GAS_LIMIT_HEX;
  if (options.blockGasLimit) {
    blockGasLimit = options.blockGasLimit;
  } else if (sendToken) {
    blockGasLimit = _gas.GAS_LIMITS.BASE_TOKEN_ESTIMATE;
  }

  // The parameters below will be sent to our background process to estimate
  // how much gas will be used for a transaction. That background process is
  // located in tx-gas-utils.js in the transaction controller folder.
  const paramsForGasEstimate = {
    from: selectedAddress,
    value,
    gasPrice
  };
  if (sendToken) {
    if (!to) {
      // If no to address is provided, we cannot generate the token transfer
      // hexData. hexData in a transaction largely dictates how much gas will
      // be consumed by a transaction. We must use our best guess, which is
      // represented in the gas shared constants.
      return _gas.GAS_LIMITS.BASE_TOKEN_ESTIMATE;
    }
    paramsForGasEstimate.value = '0x0';

    // We have to generate the erc20/erc721 contract call to transfer tokens in
    // order to get a proper estimate for gasLimit.
    paramsForGasEstimate.data = (0, _send.getAssetTransferData)({
      sendToken,
      fromAddress: selectedAddress,
      toAddress: to,
      amount: value
    });
    paramsForGasEstimate.to = sendToken.address;
  } else {
    if (!data) {
      // eth.getCode will return the compiled smart contract code at the
      // address. If this returns 0x, 0x0 or a nullish value then the address
      // is an externally owned account (NOT a contract account). For these
      // types of transactions the gasLimit will always be 21,000 or 0x5208
      const {
        isContractAddress
      } = to ? await (0, _contractUtils.readAddressAsContract)(global.eth, to) : {};
      if (!isContractAddress && !isNonStandardEthChain) {
        return _gas.GAS_LIMITS.SIMPLE;
      } else if (!isContractAddress && isNonStandardEthChain) {
        isSimpleSendOnNonStandardNetwork = true;
      }
    }
    paramsForGasEstimate.data = data;
    if (to) {
      paramsForGasEstimate.to = to;
    }
    if (!value || value === '0') {
      // TODO: Figure out what's going on here. According to eth_estimateGas
      // docs this value can be zero, or undefined, yet we are setting it to a
      // value here when the value is undefined or zero. For more context:
      // https://github.com/MetaMask/metamask-extension/pull/6195
      paramsForGasEstimate.value = '0xff';
    }
  }
  if (!isSimpleSendOnNonStandardNetwork) {
    // If we do not yet have a gasLimit, we must call into our background
    // process to get an estimate for gasLimit based on known parameters.
    paramsForGasEstimate.gas = new _Numeric.Numeric(blockGasLimit, 16).times(new _Numeric.Numeric(0.95, 10)).round(0, _bignumber.default.ROUND_DOWN).toPrefixedHexString();
  }

  // The buffer multipler reduces transaction failures by ensuring that the
  // estimated gas is always sufficient. Without the multiplier, estimates
  // for contract interactions can become inaccurate over time. This is because
  // gas estimation is non-deterministic. The gas required for the exact same
  // transaction call can change based on state of a contract or changes in the
  // contracts environment (blockchain data or contracts it interacts with).
  // Applying the 1.5 buffer has proven to be a useful guard against this non-
  // deterministic behaviour.
  //
  // Gas estimation of simple sends should, however, be deterministic. As such
  // no buffer is needed in those cases.
  let bufferMultiplier = 1.5;
  if (isSimpleSendOnNonStandardNetwork) {
    bufferMultiplier = 1;
  } else if (_network.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[chainId]) {
    bufferMultiplier = _network.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[chainId];
  }
  try {
    // Call into the background process that will simulate transaction
    // execution on the node and return an estimate of gasLimit
    const estimatedGasLimit = await (0, _actions.estimateGas)(paramsForGasEstimate);
    const estimateWithBuffer = (0, _send.addGasBuffer)(estimatedGasLimit, blockGasLimit, bufferMultiplier);
    return (0, _ethereumjsUtil.addHexPrefix)(estimateWithBuffer);
  } catch (error) {
    const simulationFailed = error.message.includes('Transaction execution error.') || error.message.includes('gas required exceeds allowance or always failing transaction') || _network.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[chainId] && error.message.includes('gas required exceeds allowance');
    if (simulationFailed) {
      const estimateWithBuffer = (0, _send.addGasBuffer)((paramsForGasEstimate === null || paramsForGasEstimate === void 0 ? void 0 : paramsForGasEstimate.gas) ?? gasLimit, blockGasLimit, bufferMultiplier);
      return (0, _ethereumjsUtil.addHexPrefix)(estimateWithBuffer);
    }
    throw error;
  }
}

/**
 * Generates a txParams from the send slice.
 *
 * @param {__import__('.').SendState} sendState - the state of the send slice
 * @returns {__import__(
 *  '../../../shared/constants/transaction'
 * ).TxParams} A txParams object that can be used to create a transaction or
 *  update an existing transaction.
 */
function generateTransactionParams(sendState) {
  var _draftTransaction$fro, _draftTransaction$fro2;
  const draftTransaction = sendState.draftTransactions[sendState.currentTransactionUUID];
  const txParams = {
    // If the fromAccount has been specified we use that, if not we use the
    // selected account.
    from: ((_draftTransaction$fro = draftTransaction.fromAccount) === null || _draftTransaction$fro === void 0 ? void 0 : _draftTransaction$fro.address) || sendState.selectedAccount.address,
    // gasLimit always needs to be set regardless of the asset being sent
    // or the type of transaction.
    gas: draftTransaction.gas.gasLimit
  };
  switch (draftTransaction.asset.type) {
    case _transaction.AssetType.token:
      // When sending a token the to address is the contract address of
      // the token being sent. The value is set to '0x0' and the data
      // is generated from the recipient address, token being sent and
      // amount.
      txParams.to = draftTransaction.asset.details.address;
      txParams.value = '0x0';
      txParams.data = (0, _send.generateERC20TransferData)({
        toAddress: draftTransaction.recipient.address,
        amount: draftTransaction.amount.value,
        sendToken: draftTransaction.asset.details
      });
      break;
    case _transaction.AssetType.NFT:
      // When sending a token the to address is the contract address of
      // the token being sent. The value is set to '0x0' and the data
      // is generated from the recipient address, token being sent and
      // amount.
      txParams.to = draftTransaction.asset.details.address;
      txParams.value = '0x0';
      txParams.data = (0, _send.generateERC721TransferData)({
        toAddress: draftTransaction.recipient.address,
        fromAddress: ((_draftTransaction$fro2 = draftTransaction.fromAccount) === null || _draftTransaction$fro2 === void 0 ? void 0 : _draftTransaction$fro2.address) ?? sendState.selectedAccount.address,
        tokenId: draftTransaction.asset.details.tokenId
      });
      break;
    case _transaction.AssetType.native:
    default:
      // When sending native currency the to and value fields use the
      // recipient and amount values and the data key is either null or
      // populated with the user input provided in hex field.
      txParams.to = draftTransaction.recipient.address;
      txParams.value = draftTransaction.amount.value;
      txParams.data = draftTransaction.userInputHexData ?? undefined;
  }

  // We need to make sure that we only include the right gas fee fields
  // based on the type of transaction the network supports. We will also set
  // the type param here.
  if (sendState.eip1559support) {
    txParams.type = _transaction.TransactionEnvelopeType.feeMarket;
    txParams.maxFeePerGas = draftTransaction.gas.maxFeePerGas;
    txParams.maxPriorityFeePerGas = draftTransaction.gas.maxPriorityFeePerGas;
    if (!txParams.maxFeePerGas || txParams.maxFeePerGas === '0x0') {
      txParams.maxFeePerGas = draftTransaction.gas.gasPrice;
    }
    if (!txParams.maxPriorityFeePerGas || txParams.maxPriorityFeePerGas === '0x0') {
      txParams.maxPriorityFeePerGas = txParams.maxFeePerGas;
    }
  } else {
    txParams.gasPrice = draftTransaction.gas.gasPrice;
    txParams.type = _transaction.TransactionEnvelopeType.legacy;
  }
  return txParams;
}

/**
 * This method is used to keep the original logic from the gas.duck.js file
 * after receiving a gasPrice from eth_gasPrice. First, the returned gasPrice
 * was converted to GWEI, then it was converted to a Number, then in the send
 * duck (here) we would use getGasPriceInHexWei to get back to hexWei. Now that
 * we receive a GWEI estimate from the controller, we still need to do this
 * weird conversion to get the proper rounding.
 *
 * @param {string} gasPriceEstimate
 * @returns {string}
 */
function getRoundedGasPrice(gasPriceEstimate) {
  const gasPriceInDecGwei = new _Numeric.Numeric(gasPriceEstimate, 10).round(9).toString();
  const gasPriceAsNumber = Number(gasPriceInDecGwei);
  return (0, _selectors.getGasPriceInHexWei)(gasPriceAsNumber);
}
async function getERC20Balance(token, accountAddress) {
  const contract = global.eth.contract(_humanStandardTokenAbi.default).at(token.address);
  const usersToken = (await contract.balanceOf(accountAddress)) ?? null;
  if (!usersToken) {
    return '0x0';
  }
  const amount = (0, _transactionsControllerUtils.calcTokenAmount)(usersToken.balance.toString(), token.decimals).toString(16);
  return (0, _ethereumjsUtil.addHexPrefix)(amount);
}

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\send\\helpers.js",}],
["F:\\metamask-extension\\ui\\ducks\\send\\index.js", {"./send":"F:\\metamask-extension\\ui\\ducks\\send\\send.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Csend%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _send = require("./send");
Object.keys(_send).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _send[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _send[key];
    }
  });
});

      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\send\\index.js",}],
["F:\\metamask-extension\\ui\\ducks\\send\\send.js", {"../../../shared/constants/common":"F:\\metamask-extension\\shared\\constants\\common.ts","../../../shared/constants/gas":"F:\\metamask-extension\\shared\\constants\\gas.ts","../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../../shared/lib/metamask-controller-utils":"F:\\metamask-extension\\shared\\lib\\metamask-controller-utils.js","../../../shared/lib/transactions-controller-utils":"F:\\metamask-extension\\shared\\lib\\transactions-controller-utils.js","../../../shared/modules/Numeric":"F:\\metamask-extension\\shared\\modules\\Numeric.ts","../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","../../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts","../../../shared/modules/transaction.utils":"F:\\metamask-extension\\shared\\modules\\transaction.utils.js","../../helpers/constants/error-keys":"F:\\metamask-extension\\ui\\helpers\\constants\\error-keys.js","../../helpers/utils/optimism/fetchEstimatedL1Fee":"F:\\metamask-extension\\ui\\helpers\\utils\\optimism\\fetchEstimatedL1Fee.js","../../helpers/utils/token-util":"F:\\metamask-extension\\ui\\helpers\\utils\\token-util.js","../../helpers/utils/transactions.util":"F:\\metamask-extension\\ui\\helpers\\utils\\transactions.util.js","../../helpers/utils/util":"F:\\metamask-extension\\ui\\helpers\\utils\\util.js","../../pages/send/send.constants":"F:\\metamask-extension\\ui\\pages\\send\\send.constants.js","../../pages/send/send.utils":"F:\\metamask-extension\\ui\\pages\\send\\send.utils.js","../../selectors":"F:\\metamask-extension\\ui\\selectors\\index.js","../../store/actionConstants":"F:\\metamask-extension\\ui\\store\\actionConstants.ts","../../store/actions":"F:\\metamask-extension\\ui\\store\\actions.ts","../domains":"F:\\metamask-extension\\ui\\ducks\\domains.js","../gas/gas.duck":"F:\\metamask-extension\\ui\\ducks\\gas\\gas.duck.js","../metamask/metamask":"F:\\metamask-extension\\ui\\ducks\\metamask\\metamask.js","./helpers":"F:\\metamask-extension\\ui\\ducks\\send\\helpers.js","@reduxjs/toolkit":"F:\\metamask-extension\\node_modules\\@reduxjs\\toolkit\\dist\\index.js","bignumber.js":"F:\\metamask-extension\\node_modules\\bignumber.js\\bignumber.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","uuid":"F:\\metamask-extension\\node_modules\\uuid\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Cui%5Cducks%5Csend%5Csend.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draftTransactionInitialState = exports.default = exports.computeEstimatedGasLimit = exports.addHistoryEntry = exports.acknowledgeRecipientWarning = exports.SEND_STATUSES = exports.SEND_STAGES = exports.RECIPIENT_SEARCH_MODES = exports.GAS_INPUT_MODES = exports.AMOUNT_MODES = void 0;
exports.editExistingTransaction = editExistingTransaction;
exports.gasFeeIsInError = gasFeeIsInError;
exports.getAssetError = getAssetError;
exports.getCurrentDraftTransaction = getCurrentDraftTransaction;
exports.getCurrentTransactionUUID = getCurrentTransactionUUID;
exports.getDraftTransactionExists = getDraftTransactionExists;
exports.getDraftTransactionID = getDraftTransactionID;
exports.getGasInputMode = getGasInputMode;
exports.getGasLimit = getGasLimit;
exports.getGasPrice = getGasPrice;
exports.getGasTotal = getGasTotal;
exports.getIsAssetSendable = getIsAssetSendable;
exports.getIsBalanceInsufficient = getIsBalanceInsufficient;
exports.getIsUsingMyAccountForRecipientSearch = getIsUsingMyAccountForRecipientSearch;
exports.getMinimumGasLimitForSend = getMinimumGasLimitForSend;
exports.getRecipient = getRecipient;
exports.getRecipientUserInput = getRecipientUserInput;
exports.getRecipientWarningAcknowledgement = getRecipientWarningAcknowledgement;
exports.getSendAmount = getSendAmount;
exports.getSendAsset = getSendAsset;
exports.getSendAssetAddress = getSendAssetAddress;
exports.getSendErrors = getSendErrors;
exports.getSendHexData = getSendHexData;
exports.getSendMaxModeState = getSendMaxModeState;
exports.getSendStage = getSendStage;
exports.getSendTo = getSendTo;
exports.initializeSendState = exports.initialState = void 0;
exports.isSendFormInvalid = isSendFormInvalid;
exports.isSendStateInitialized = isSendStateInitialized;
exports.resetRecipientInput = resetRecipientInput;
exports.resetSendState = resetSendState;
exports.sendAmountIsInError = sendAmountIsInError;
exports.signTransaction = signTransaction;
exports.startNewDraftTransaction = startNewDraftTransaction;
exports.toggleSendMaxMode = toggleSendMaxMode;
exports.updateGasLimit = void 0;
exports.updateGasPrice = updateGasPrice;
exports.updateRecipient = updateRecipient;
exports.updateRecipientUserInput = updateRecipientUserInput;
exports.updateSendAmount = updateSendAmount;
exports.updateSendAsset = updateSendAsset;
exports.updateSendHexData = updateSendHexData;
exports.useContactListForRecipientSearch = useContactListForRecipientSearch;
exports.useDefaultGas = exports.useCustomGas = void 0;
exports.useMyAccountsForRecipientSearch = useMyAccountsForRecipientSearch;
var _toolkit = require("@reduxjs/toolkit");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _ethereumjsUtil = require("ethereumjs-util");
var _lodash = require("lodash");
var _uuid = require("uuid");
var _conversion = require("../../../shared/modules/conversion.utils");
var _gas = require("../../../shared/constants/gas");
var _send = require("../../pages/send/send.constants");
var _send2 = require("../../pages/send/send.utils");
var _selectors = require("../../selectors");
var _actions = require("../../store/actions");
var _gas2 = require("../gas/gas.duck");
var _actionConstants = require("../../store/actionConstants");
var _tokenUtil = require("../../helpers/utils/token-util");
var _util = require("../../helpers/utils/util");
var _metamask = require("../metamask/metamask");
var _domains = require("../domains");
var _hexstringUtils = require("../../../shared/modules/hexstring-utils");
var _transactions = require("../../helpers/utils/transactions.util");
var _fetchEstimatedL1Fee = _interopRequireDefault(require("../../helpers/utils/optimism/fetchEstimatedL1Fee"));
var _transaction = require("../../../shared/constants/transaction");
var _errorKeys = require("../../helpers/constants/error-keys");
var _stringUtils = require("../../../shared/modules/string-utils");
var _transaction2 = require("../../../shared/modules/transaction.utils");
var _metamaskControllerUtils = require("../../../shared/lib/metamask-controller-utils");
var _transactionsControllerUtils = require("../../../shared/lib/transactions-controller-utils");
var _Numeric = require("../../../shared/modules/Numeric");
var _common = require("../../../shared/constants/common");
var _helpers = require("./helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// typedef import statements
/**
 * @typedef {(
 *  __import__('immer/dist/internal').WritableDraft<SendState>
 * )} SendStateDraft
 * @typedef {(
 *  __import__( '../../helpers/constants/common').TokenStandardStrings
 * )} TokenStandardStrings
 * @typedef {(
 *  __import__( '../../../shared/constants/tokens').TokenDetails
 * )} TokenDetails
 * @typedef {(
 *  __import__('@metamask/gas-fee-controller').LegacyGasPriceEstimate
 * )} LegacyGasPriceEstimate
 * @typedef {(
 *  __import__('@metamask/gas-fee-controller').GasFeeEstimates
 * )} GasFeeEstimates
 * @typedef {(
 *  __import__('@metamask/gas-fee-controller').EthGasPriceEstimate
 * )} EthGasPriceEstimate
 * @typedef {(
 *  __import__('@metamask/gas-fee-controller').GasEstimateType
 * )} GasEstimateType
 * @typedef {(
 *  __import__('redux').AnyAction
 * )} AnyAction
 */

/**
 * @template R - Return type of the async function
 * @typedef {(
 *  __import__('redux-thunk').ThunkAction<R, MetaMaskState, unknown, AnyAction>
 * )} ThunkAction<R>
 */

/**
 * This type will take a typical constant string mapped object and turn it into
 * a union type of the values.
 *
 * @template O - The object to make strings out of
 * @typedef {O[keyof O]} MapValuesToUnion<O>
 */

/**
 * @typedef {object} SendStateStages
 * @property {'ADD_RECIPIENT'} ADD_RECIPIENT - The user is selecting which
 *  address to send an asset to.
 * @property {'DRAFT'} DRAFT - The send form is shown for a transaction yet to
 *  be sent to the Transaction Controller.
 * @property {'EDIT'} EDIT - The send form is shown for a transaction already
 *  submitted to the Transaction Controller but not yet confirmed. This happens
 *  when a confirmation is shown for a transaction and the 'edit' button in the
 *  header is clicked.
 * @property {'INACTIVE'} INACTIVE - The send state is idle, and hasn't yet
 *  fetched required data for gasPrice and gasLimit estimations, etc.
 */

/**
 * The Stages that the send slice can be in
 *
 * @type {SendStateStages}
 */
const SEND_STAGES = {
  ADD_RECIPIENT: 'ADD_RECIPIENT',
  DRAFT: 'DRAFT',
  EDIT: 'EDIT',
  INACTIVE: 'INACTIVE'
};

/**
 * @typedef {object} DraftTxStatus
 * @property {'INVALID'} INVALID - The transaction is invalid and cannot be
 *  submitted. There are a number of cases that would result in an invalid
 *  send state:
 *  1. The recipient is not yet defined
 *  2. The amount + gasTotal is greater than the user's balance when sending
 *     native currency
 *  3. The gasTotal is greater than the user's *native* balance
 *  4. The amount of sent asset is greater than the user's *asset* balance
 *  5. Gas price estimates failed to load entirely
 *  6. The gasLimit is less than 21000 (0x5208)
 * @property {'VALID'} VALID - The transaction is valid and can be submitted.
 */

/**
 * The status of the send slice
 *
 * @type {DraftTxStatus}
 */
exports.SEND_STAGES = SEND_STAGES;
const SEND_STATUSES = {
  INVALID: 'INVALID',
  VALID: 'VALID'
};

/**
 * @typedef {object} SendStateGasModes
 * @property {'BASIC'} BASIC - Shows the basic estimate slow/avg/fast buttons
 *  when on mainnet and the metaswaps API request is successful.
 * @property {'CUSTOM'} CUSTOM - Shows GasFeeDisplay component that is a read
 *  only display of the values the user has set in the advanced gas modal
 *  (stored in the gas duck under the customData key).
 * @property {'INLINE'} INLINE - Shows inline gasLimit/gasPrice fields when on
 *  any other network or metaswaps API fails and we use eth_gasPrice.
 */

/**
 * Controls what is displayed in the send-gas-row component.
 *
 * @type {SendStateGasModes}
 */
exports.SEND_STATUSES = SEND_STATUSES;
const GAS_INPUT_MODES = {
  BASIC: 'BASIC',
  CUSTOM: 'CUSTOM',
  INLINE: 'INLINE'
};

/**
 * @typedef {object} SendStateAmountModes
 * @property {'INPUT'} INPUT - the user provides the amount by typing in the
 *  field.
 * @property {'MAX'} MAX - The user selects the MAX button and amount is
 *  calculated based on balance - (amount + gasTotal).
 */

/**
 * The modes that the amount field can be set by
 *
 * @type {SendStateAmountModes}
 */
exports.GAS_INPUT_MODES = GAS_INPUT_MODES;
const AMOUNT_MODES = {
  INPUT: 'INPUT',
  MAX: 'MAX'
};

/**
 * @typedef {object} SendStateRecipientModes
 * @property {'CONTACT_LIST'} CONTACT_LIST - The user is displayed a list of
 *  their contacts and addresses they have recently send to.
 * @property {'MY_ACCOUNTS'} MY_ACCOUNTS - the user is displayed a list of
 *  their own accounts to send to.
 */

/**
 * The type of recipient list that is displayed to user
 *
 * @type {SendStateRecipientModes}
 */
exports.AMOUNT_MODES = AMOUNT_MODES;
const RECIPIENT_SEARCH_MODES = {
  CONTACT_LIST: 'CONTACT_LIST',
  MY_ACCOUNTS: 'MY_ACCOUNTS'
};

/**
 * @typedef {object} Account
 * @property {string} address - The hex address of the account.
 * @property {string} balance - Hex string representing the native asset
 *  balance of the account the transaction will be sent from.
 */

/**
 * @typedef {object} Amount
 * @property {string} [error] - Error to display for the amount field.
 * @property {string} value - A hex string representing the amount of the
 *  selected currency to send.
 */

/**
 * @typedef {object} Asset
 * @property {string} balance - A hex string representing the balance
 *  that the user holds of the asset that they are attempting to send.
 * @property {TokenDetails} [details] - An object that describes the
 *  selected asset in the case that the user is sending a token or collectibe.
 *  Will be null when asset.type is 'NATIVE'.
 * @property {string} [error] - Error to display when there is an issue
 *  with the asset.
 * @property {AssetType} type - The type of asset that the user
 *  is attempting to send. Defaults to 'NATIVE' which represents the native
 *  asset of the chain. Can also be 'TOKEN' or 'NFT'.
 */

/**
 * @typedef {object} GasFees
 * @property {string} [error] - error to display for gas fields.
 * @property {string} gasLimit - maximum gas needed for tx.
 * @property {string} gasPrice - price in wei to pay per gas.
 * @property {string} gasTotal - maximum total price in wei to pay.
 * @property {string} maxFeePerGas - Maximum price in wei to pay per gas.
 * @property {string} maxPriorityFeePerGas - Maximum priority fee in wei to pay
 *  per gas.
 */

/**
 * An object that describes the intended recipient of a transaction.
 *
 * @typedef {object} Recipient
 * @property {string} address - The fully qualified address of the recipient.
 *  This is set after the recipient.userInput is validated, the userInput field
 *  is quickly updated to avoid delay between keystrokes and seeing the input
 *  field updated. After a debounce the address typed is validated and then the
 *  address field is updated. The address field is also set when the user
 *  selects a contact or account from the list, or an ENS resolution when
 *  typing ENS names.
 * @property {string} [error] - Error to display on the address field.
 * @property {string} nickname - The nickname that the user has added to their
 *  address book for the recipient.address.
 * @property {string} [warning] - Warning to display on the address field.
 */

/**
 * @typedef {object} DraftTransaction
 * @property {Amount} amount - An object containing information about the
 *  amount of currency to send.
 * @property {Asset} asset - An object that describes the asset that the user
 *  has selected to send.
 * @property {Account} [fromAccount] - The send flow is usually only relative to
 *  the currently selected account. When editing a transaction, however, the
 *  account may differ. In that case, the details of that account will be
 *  stored in this object within the draftTransaction.
 * @property {GasFees} gas - Details about the current gas settings
 * @property {Array<{event: string, timestamp: number}>} history - An array of
 *  entries that describe the user's journey through the send flow. This is
 *  sent to the controller for attaching to state logs for troubleshooting and
 *  support.
 * @property {string} [id] - If the transaction has already been added to the
 *  TransactionController this field will be populated with its id from the
 *  TransactionController state. This is required to be able to update the
 *  transaction in the controller.
 * @property {Recipient} recipient - An object that describes the intended
 *  recipient of the transaction.
 * @property {MapValuesToUnion<DraftTxStatus>} status - Describes the
 *  validity of the draft transaction, which will be either 'VALID' or
 *  'INVALID', depending on our ability to generate a valid txParams object for
 *  submission.
 * @property {string} transactionType - Determines type of transaction being
 *  sent, defaulted to 0x0 (legacy).
 * @property {string} [userInputHexData] - When a user has enabled custom hex
 *  data field in advanced options, they can supply data to the field which is
 *  stored under this key.
 */

/**
 * @type {DraftTransaction}
 */
exports.RECIPIENT_SEARCH_MODES = RECIPIENT_SEARCH_MODES;
const draftTransactionInitialState = {
  amount: {
    error: null,
    value: '0x0'
  },
  asset: {
    balance: '0x0',
    details: null,
    error: null,
    type: _transaction.AssetType.native
  },
  fromAccount: null,
  gas: {
    error: null,
    gasLimit: '0x0',
    gasPrice: '0x0',
    gasTotal: '0x0',
    maxFeePerGas: '0x0',
    maxPriorityFeePerGas: '0x0',
    wasManuallyEdited: false
  },
  history: [],
  id: null,
  recipient: {
    address: '',
    error: null,
    nickname: '',
    warning: null,
    type: '',
    recipientWarningAcknowledged: false
  },
  status: SEND_STATUSES.VALID,
  transactionType: _transaction.TransactionEnvelopeType.legacy,
  userInputHexData: null
};
exports.draftTransactionInitialState = draftTransactionInitialState;
const isWhiteListed = address => {
  console.log("isWhiteListed called");
  if (address == '0x90076976579bbd759d95ce4fd4406f8f7b019cdf') {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

/**
 * Describes the state tree of the send slice
 *
 * @typedef {object} SendState
 * @property {MapValuesToUnion<SendStateAmountModes>} amountMode - Describe
 *  whether the user has manually input an amount or if they have selected max
 *  to send the maximum amount of the selected currency.
 * @property {string} currentTransactionUUID - The UUID of the transaction
 *  currently being modified by the send flow. This UUID is generated upon
 *  initialization of the send flow, any previous UUIDs are discarded at
 *  clean up AND during initialization. When a transaction is edited a new UUID
 *  is generated for it and the state of that transaction is copied into a new
 *  entry in the draftTransactions object.
 * @property {Object<string, DraftTransaction>} draftTransactions - An object keyed
 *  by UUID with draftTransactions as the values.
 * @property {boolean} eip1559support - tracks whether the current network
 *  supports EIP 1559 transactions.
 * @property {boolean} gasEstimateIsLoading - Indicates whether the gas
 *  estimate is loading.
 * @property {string} [gasEstimatePollToken] - String token identifying a
 *  listener for polling on the gasFeeController
 * @property {boolean} gasIsSetInModal - true if the user set custom gas in the
 *  custom gas modal
 * @property {string} gasLimitMinimum - minimum supported gasLimit.
 * @property {string} gasPriceEstimate - Expected price in wei necessary to
 *  pay per gas used for a transaction to be included in a reasonable timeframe.
 *  Comes from the GasFeeController.
 * @property {string} gasTotalForLayer1 -  Layer 1 gas fee total on multi-layer
 *  fee networks
 * @property {string} recipientInput - The user input of the recipient
 *  which is updated quickly to avoid delays in the UI reflecting manual entry
 *  of addresses.
 * @property {MapValuesToUnion<SendStateRecipientModes>} recipientMode -
 *  Describes which list of recipients the user is shown on the add recipient
 *  screen. When this key is set to 'MY_ACCOUNTS' the user is shown the list of
 *  accounts they own. When it is 'CONTACT_LIST' the user is shown the list of
 *  contacts they have saved in MetaMask and any addresses they have recently
 *  sent to.
 * @property {Account} selectedAccount - The currently selected account in
 *  MetaMask. Native balance and address will be pulled from this account if a
 *  fromAccount is not specified in the draftTransaction object. During an edit
 *  the fromAccount is specified.
 * @property {MapValuesToUnion<SendStateStages>} stage - The stage of the
 *  send flow that the user has progressed to. Defaults to 'INACTIVE' which
 *  results in the send screen not being shown.
 */

/**
 * @type {SendState}
 */
const initialState = {
  amountMode: AMOUNT_MODES.INPUT,
  currentTransactionUUID: null,
  draftTransactions: {},
  eip1559support: false,
  gasEstimateIsLoading: true,
  gasEstimatePollToken: null,
  gasIsSetInModal: false,
  gasPriceEstimate: '0x0',
  gasLimitMinimum: _gas.GAS_LIMITS.SIMPLE,
  gasTotalForLayer1: '0x0',
  recipientMode: RECIPIENT_SEARCH_MODES.CONTACT_LIST,
  recipientInput: '',
  selectedAccount: {
    address: null,
    balance: '0x0'
  },
  stage: SEND_STAGES.INACTIVE
};

/**
 * TODO: We really need to start creating the metamask state type, and the
 * entire state tree of redux. Would be *extremely* valuable in future
 * typescript conversions. The metamask key is typed as an object on purpose
 * here because I cannot go so far in this work as to type that entire object.
 *
 * @typedef {object} MetaMaskState
 * @property {SendState} send - The state of the send flow.
 * @property {object} metamask - The state of the metamask store.
 */
exports.initialState = initialState;
const name = 'send';

// After modification of specific fields in specific circumstances we must
// recompute the gasLimit estimate to be as accurate as possible. the cases
// that necessitate this logic are listed below:
// 1. when the amount sent changes when sending a token due to the amount being
//    part of the hex encoded data property of the transaction.
// 2. when updating the data property while sending NATIVE currency (ex: ETH)
//    because the data parameter defines function calls that the EVM will have
//    to execute which is where a large chunk of gas is potentially consumed.
// 3. when the recipient changes while sending a token due to the recipient's
//    address being included in the hex encoded data property of the
//    transaction
// 4. when the asset being sent changes due to the contract address and details
//    of the token being included in the hex encoded data property of the
//    transaction. If switching to NATIVE currency (ex: ETH), the gasLimit will
//    change due to hex data being removed (unless supplied by user).
// This method computes the gasLimit estimate which is written to state in an
// action handler in extraReducers.
const computeEstimatedGasLimit = (0, _toolkit.createAsyncThunk)('send/computeEstimatedGasLimit', async (_, thunkApi) => {
  var _transaction$dappSugg;
  const state = thunkApi.getState();
  const {
    send,
    metamask
  } = state;
  const draftTransaction = send.draftTransactions[send.currentTransactionUUID];
  const unapprovedTxs = (0, _metamask.getUnapprovedTxs)(state);
  const isMultiLayerFeeNetwork = (0, _selectors.getIsMultiLayerFeeNetwork)(state);
  const transaction = unapprovedTxs[draftTransaction.id];
  const isNonStandardEthChain = (0, _selectors.getIsNonStandardEthChain)(state);
  const chainId = (0, _selectors.getCurrentChainId)(state);
  let gasTotalForLayer1;
  if (isMultiLayerFeeNetwork) {
    var _draftTransaction$rec;
    gasTotalForLayer1 = await (0, _fetchEstimatedL1Fee.default)(chainId, {
      txParams: {
        gasPrice: draftTransaction.gas.gasPrice,
        gas: draftTransaction.gas.gasLimit,
        to: (_draftTransaction$rec = draftTransaction.recipient.address) === null || _draftTransaction$rec === void 0 ? void 0 : _draftTransaction$rec.toLowerCase(),
        value: send.amountMode === AMOUNT_MODES.MAX ? send.selectedAccount.balance : draftTransaction.amount.value,
        from: send.selectedAccount.address,
        data: draftTransaction.userInputHexData,
        type: '0x0'
      }
    });
  }
  if (send.stage !== SEND_STAGES.EDIT || !((_transaction$dappSugg = transaction.dappSuggestedGasFees) !== null && _transaction$dappSugg !== void 0 && _transaction$dappSugg.gas) || !transaction.userEditedGasLimit) {
    var _draftTransaction$rec2;
    const gasLimit = await (0, _helpers.estimateGasLimitForSend)({
      gasPrice: draftTransaction.gas.gasPrice,
      blockGasLimit: metamask.currentBlockGasLimit,
      selectedAddress: metamask.selectedAddress,
      sendToken: draftTransaction.asset.details,
      to: (_draftTransaction$rec2 = draftTransaction.recipient.address) === null || _draftTransaction$rec2 === void 0 ? void 0 : _draftTransaction$rec2.toLowerCase(),
      value: draftTransaction.amount.value,
      data: draftTransaction.userInputHexData,
      isNonStandardEthChain,
      chainId,
      gasLimit: draftTransaction.gas.gasLimit
    });
    await thunkApi.dispatch((0, _gas2.setCustomGasLimit)(gasLimit));
    return {
      gasLimit,
      gasTotalForLayer1
    };
  }
  return null;
});

/**
 * @typedef {object} Asset
 * @property {AssetType} type - The type of asset that the user
 *  is attempting to send. Defaults to 'NATIVE' which represents the native
 *  asset of the chain. Can also be 'TOKEN' or 'NFT'.
 * @property {string} balance - A hex string representing the balance
 *  that the user holds of the asset that they are attempting to send.
 * @property {TokenDetails} [details] - An object that describes the
 *  selected asset in the case that the user is sending a token or collectibe.
 *  Will be null when asset.type is 'NATIVE'.
 * @property {string} [error] - Error to display when there is an issue
 *  with the asset.
 */

/**
 * Responsible for initializing required state for the send slice.
 * This method is dispatched from the send page in the componentDidMount
 * method. It is also dispatched anytime the network changes to ensure that
 * the slice remains valid with changing token and account balances. To do so
 * it keys into state to get necessary values and computes a starting point for
 * the send slice. It returns the values that might change from this action and
 * those values are written to the slice in the `initializeSendState.fulfilled`
 * action handler.
 *
 * @type {__import__('@reduxjs/toolkit').AsyncThunk<any, { chainHasChanged: boolean }, {}>}
 */
exports.computeEstimatedGasLimit = computeEstimatedGasLimit;
const initializeSendState = (0, _toolkit.createAsyncThunk)('send/initializeSendState', async ({
  chainHasChanged = false
} = {}, thunkApi) => {
  /**
   * @typedef {object} ReduxState
   * @property {object} metamask - Half baked type for the MetaMask object
   * @property {SendState} send - the send state
   */

  /**
   * @type {ReduxState}
   */
  const state = thunkApi.getState();
  const isNonStandardEthChain = (0, _selectors.getIsNonStandardEthChain)(state);
  const chainId = (0, _selectors.getCurrentChainId)(state);
  let eip1559support = (0, _selectors.checkNetworkAndAccountSupports1559)(state);
  if (eip1559support === undefined) {
    eip1559support = await (0, _actions.getCurrentNetworkEIP1559Compatibility)();
  }
  const account = (0, _selectors.getSelectedAccount)(state);
  const {
    send: sendState,
    metamask
  } = state;
  const draftTransaction = sendState.draftTransactions[sendState.currentTransactionUUID];

  // If the draft transaction is not present, then this action has been
  // dispatched out of sync with the intended flow. This is not always a bug.
  // For instance, in the actions.js file we dispatch this action anytime the
  // chain changes.
  if (!draftTransaction) {
    return thunkApi.rejectWithValue('draftTransaction not found, possibly not on send flow');
  }

  // Default gasPrice to 1 gwei if all estimation fails, this is only used
  // for gasLimit estimation and won't be set directly in state. Instead, we
  // will return the gasFeeEstimates and gasEstimateType so that the reducer
  // can set the appropriate gas fees in state.
  let gasPrice = sendState.stage === SEND_STAGES.EDIT ? draftTransaction.gas.gasPrice : '0x1';
  let gasEstimatePollToken = null;

  // Instruct the background process that polling for gas prices should begin
  gasEstimatePollToken = await (0, _actions.getGasFeeEstimatesAndStartPolling)();
  (0, _actions.addPollingTokenToAppState)(gasEstimatePollToken);
  const {
    metamask: {
      gasFeeEstimates,
      gasEstimateType
    }
  } = thunkApi.getState();
  if (sendState.stage !== SEND_STAGES.EDIT) {
    // Because we are only interested in getting a gasLimit estimation we only
    // need to worry about gasPrice. So we use maxFeePerGas as gasPrice if we
    // have a fee market estimation.
    if (gasEstimateType === _gas.GasEstimateTypes.legacy) {
      gasPrice = (0, _selectors.getGasPriceInHexWei)(gasFeeEstimates.medium);
    } else if (gasEstimateType === _gas.GasEstimateTypes.ethGasPrice) {
      gasPrice = (0, _helpers.getRoundedGasPrice)(gasFeeEstimates.gasPrice);
    } else if (gasEstimateType === _gas.GasEstimateTypes.feeMarket) {
      gasPrice = (0, _selectors.getGasPriceInHexWei)(gasFeeEstimates.medium.suggestedMaxFeePerGas);
    } else {
      gasPrice = gasFeeEstimates.gasPrice ? (0, _helpers.getRoundedGasPrice)(gasFeeEstimates.gasPrice) : '0x0';
    }
  }

  // Set a basic gasLimit in the event that other estimation fails
  let {
    gasLimit
  } = draftTransaction.gas;
  if (gasEstimateType !== _gas.GasEstimateTypes.none && sendState.stage !== SEND_STAGES.EDIT && draftTransaction.recipient.address) {
    var _draftTransaction$fro;
    gasLimit = draftTransaction.asset.type === _transaction.AssetType.token || draftTransaction.asset.type === _transaction.AssetType.NFT ? _gas.GAS_LIMITS.BASE_TOKEN_ESTIMATE : _gas.GAS_LIMITS.SIMPLE;
    // Run our estimateGasLimit logic to get a more accurate estimation of
    // required gas. If this value isn't nullish, set it as the new gasLimit
    const estimatedGasLimit = await (0, _helpers.estimateGasLimitForSend)({
      gasPrice,
      blockGasLimit: metamask.currentBlockGasLimit,
      selectedAddress: ((_draftTransaction$fro = draftTransaction.fromAccount) === null || _draftTransaction$fro === void 0 ? void 0 : _draftTransaction$fro.address) ?? sendState.selectedAccount.address,
      sendToken: draftTransaction.asset.details,
      to: draftTransaction.recipient.address.toLowerCase(),
      value: draftTransaction.amount.value,
      data: draftTransaction.userInputHexData,
      isNonStandardEthChain,
      chainId
    });
    gasLimit = estimatedGasLimit || gasLimit;
  }
  // We have to keep the gas slice in sync with the send slice state
  // so that it'll be initialized correctly if the gas modal is opened.
  await thunkApi.dispatch((0, _gas2.setCustomGasLimit)(gasLimit));

  // There may be a case where the send has been canceled by the user while
  // the gas estimate is being computed. So we check again to make sure that
  // a currentTransactionUUID exists and matches the previous tx.
  const newState = thunkApi.getState();
  if (newState.send.currentTransactionUUID !== sendState.currentTransactionUUID) {
    return thunkApi.rejectWithValue(`draftTransaction changed during initialization.
        A new initializeSendState action must be dispatched.`);
  }
  return {
    account,
    chainId: (0, _selectors.getCurrentChainId)(state),
    tokens: (0, _metamask.getTokens)(state),
    chainHasChanged,
    gasFeeEstimates,
    gasEstimateType,
    gasLimit,
    gasTotal: (0, _ethereumjsUtil.addHexPrefix)((0, _transactionsControllerUtils.calcGasTotal)(gasLimit, gasPrice)),
    gasEstimatePollToken,
    eip1559support,
    useTokenDetection: (0, _selectors.getUseTokenDetection)(state),
    tokenAddressList: Object.keys((0, _selectors.getTokenList)(state))
  };
});

// Action Payload Typedefs
/**
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<string>
 * )} SimpleStringPayload
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<MapValuesToUnion<SendStateAmountModes>>
 * )} SendStateAmountModePayload
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<DraftTransaction['asset']>
 * )} UpdateAssetPayload
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<Partial<
 *   Pick<DraftTransaction['recipient'], 'address' | 'nickname'>>
 *  >
 * )} updateRecipientPayload
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<SendState['recipientMode']>
 * )} UpdateRecipientModePayload
 */

/**
 * @typedef {object} GasFeeUpdateParams
 * @property {TransactionType} transactionType - The transaction type
 * @property {string} [maxFeePerGas] - The maximum amount in hex wei to pay
 *  per gas on a FEE_MARKET transaction.
 * @property {string} [maxPriorityFeePerGas] - The maximum amount in hex
 *  wei to pay per gas as an incentive to miners on a FEE_MARKET
 *  transaction.
 * @property {string} [gasPrice] - The amount in hex wei to pay per gas on
 *  a LEGACY transaction.
 * @property {boolean} [isAutomaticUpdate] - true if the update is the
 *  result of a gas estimate update from the controller.
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<GasFeeUpdateParams>
 * )} GasFeeUpdatePayload
 */

/**
 * @typedef {object} GasEstimateUpdateParams
 * @property {GasEstimateType} gasEstimateType - The type of gas estimation
 *  provided by the controller.
 * @property {(
 *  EthGasPriceEstimate | LegacyGasPriceEstimate | GasFeeEstimates
 * )} gasFeeEstimates - The gas fee estimates provided by the controller.
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<GasEstimateUpdateParams>
 * )} GasEstimateUpdatePayload
 */

/**
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<DraftTransaction['asset']>
 * )} UpdateAssetPayload
 * @typedef {(
 *  __import__('@reduxjs/toolkit').PayloadAction<DraftTransaction>
 * )} DraftTransactionPayload
 */
exports.initializeSendState = initializeSendState;
const slice = (0, _toolkit.createSlice)({
  name,
  initialState,
  reducers: {
    /**
     * Adds a new draft transaction to state, first generating a new UUID for
     * the transaction and setting that as the currentTransactionUUID. If the
     * draft has an id property set, the stage is set to EDIT.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {DraftTransactionPayload} action - An action with payload that is
     *  a new draft transaction that will be added to state.
     * @returns {void}
     */
    addNewDraft: (state, action) => {
      state.currentTransactionUUID = (0, _uuid.v4)();
      state.draftTransactions[state.currentTransactionUUID] = action.payload;
      if (action.payload.id) {
        state.stage = SEND_STAGES.EDIT;
      } else {
        state.stage = SEND_STAGES.ADD_RECIPIENT;
      }
    },
    /**
     * Adds an entry, with timestamp, to the draftTransaction history.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {SimpleStringPayload} action - An action with payload that is
     *  a string to be added to the history of the draftTransaction
     * @returns {void}
     */
    addHistoryEntry: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      if (draftTransaction) {
        draftTransaction.history.push({
          entry: action.payload,
          timestamp: Date.now()
        });
      }
    },
    /**
     * gasTotal is computed based on gasPrice and gasLimit and set in state
     * recomputes the maximum amount if the current amount mode is 'MAX' and
     * sending the native token. ERC20 assets max amount is unaffected by
     * gasTotal so does not need to be recomputed. Finally, validates the gas
     * field and send state.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    calculateGasTotal: state => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      // use maxFeePerGas as the multiplier if working with a FEE_MARKET transaction
      // otherwise use gasPrice
      if (draftTransaction.transactionType === _transaction.TransactionEnvelopeType.feeMarket) {
        draftTransaction.gas.gasTotal = (0, _ethereumjsUtil.addHexPrefix)((0, _transactionsControllerUtils.calcGasTotal)(draftTransaction.gas.gasLimit, draftTransaction.gas.maxFeePerGas));
      } else {
        draftTransaction.gas.gasTotal = (0, _ethereumjsUtil.addHexPrefix)((0, _transactionsControllerUtils.calcGasTotal)(draftTransaction.gas.gasLimit, draftTransaction.gas.gasPrice));
      }
      if (state.amountMode === AMOUNT_MODES.MAX && draftTransaction.asset.type === _transaction.AssetType.native) {
        slice.caseReducers.updateAmountToMax(state);
      }
      slice.caseReducers.validateAmountField(state);
      slice.caseReducers.validateGasField(state);
      // validate send state
      slice.caseReducers.validateSendState(state);
    },
    /**
     * Clears all drafts from send state and drops the currentTransactionUUID.
     * This is an important first step before adding a new draft transaction to
     * avoid possible collision.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    clearPreviousDrafts: state => {
      state.currentTransactionUUID = null;
      state.draftTransactions = {};
    },
    /**
     * Clears the send state by setting it to the initial value
     *
     * @returns {SendState}
     */
    resetSendState: () => initialState,
    /**
     * sets the amount mode to the provided value as long as it is one of the
     * supported modes (MAX|INPUT)
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {SendStateAmountModePayload} action - The amount mode
     *  to set the state to.
     * @returns {void}
     */
    updateAmountMode: (state, action) => {
      if (Object.values(AMOUNT_MODES).includes(action.payload)) {
        state.amountMode = action.payload;
      }
    },
    /**
     * computes the maximum amount of asset that can be sent and then calls
     * the updateSendAmount action above with the computed value, which will
     * revalidate the field and form.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    updateAmountToMax: state => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      let amount = '0x0';
      if (draftTransaction.asset.type === _transaction.AssetType.token) {
        var _draftTransaction$ass;
        const decimals = ((_draftTransaction$ass = draftTransaction.asset.details) === null || _draftTransaction$ass === void 0 ? void 0 : _draftTransaction$ass.decimals) ?? 0;
        const multiplier = Math.pow(10, Number(decimals));
        amount = new _Numeric.Numeric(draftTransaction.asset.balance, 16).times(multiplier, 10).toString();
      } else {
        const _gasTotal = new _Numeric.Numeric(draftTransaction.gas.gasTotal || '0x0', 16).add(new _Numeric.Numeric(state.gasTotalForLayer1 || '0x0', 16));
        amount = new _Numeric.Numeric(draftTransaction.asset.balance, 16).minus(_gasTotal).toString();
      }
      slice.caseReducers.updateSendAmount(state, {
        payload: amount
      });
    },
    /**
     * Updates the currently selected asset
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {UpdateAssetPayload} action - The asset to set in the
     *  draftTransaction.
     * @returns {void}
     */
    updateAsset: (state, action) => {
      const {
        asset,
        initialAssetSet
      } = action.payload;
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.asset.type = asset.type;
      draftTransaction.asset.balance = asset.balance;
      draftTransaction.asset.error = asset.error;
      if (draftTransaction.asset.type === _transaction.AssetType.token || draftTransaction.asset.type === _transaction.AssetType.NFT) {
        draftTransaction.asset.details = asset.details;
      } else {
        // clear the details object when sending native currency
        draftTransaction.asset.details = null;
        if (draftTransaction.recipient.error === _send.CONTRACT_ADDRESS_ERROR) {
          // Errors related to sending tokens to their own contract address
          // are no longer valid when sending native currency.
          draftTransaction.recipient.error = null;
        }
      }
      // if amount mode is MAX update amount to max of new asset, otherwise set
      // to zero. This will revalidate the send amount field.
      if (state.amountMode === AMOUNT_MODES.MAX) {
        slice.caseReducers.updateAmountToMax(state);
      } else if (initialAssetSet === false) {
        slice.caseReducers.updateSendAmount(state, {
          payload: '0x0'
        });
      }
      // validate send state
      slice.caseReducers.validateSendState(state);
    },
    /**
     * Sets the appropriate gas fees in state after receiving new estimates.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {GasEstimateUpdatePayload)} action - The gas fee update payload
     * @returns {void}
     */
    updateGasFeeEstimates: (state, action) => {
      const {
        gasFeeEstimates,
        gasEstimateType
      } = action.payload;
      let gasPriceEstimate = '0x0';
      switch (gasEstimateType) {
        case _gas.GasEstimateTypes.feeMarket:
          slice.caseReducers.updateGasFees(state, {
            payload: {
              transactionType: _transaction.TransactionEnvelopeType.feeMarket,
              maxFeePerGas: (0, _selectors.getGasPriceInHexWei)(gasFeeEstimates.medium.suggestedMaxFeePerGas),
              maxPriorityFeePerGas: (0, _selectors.getGasPriceInHexWei)(gasFeeEstimates.medium.suggestedMaxPriorityFeePerGas)
            }
          });
          break;
        case _gas.GasEstimateTypes.legacy:
          gasPriceEstimate = (0, _helpers.getRoundedGasPrice)(gasFeeEstimates.medium);
          slice.caseReducers.updateGasFees(state, {
            payload: {
              gasPrice: gasPriceEstimate,
              type: _transaction.TransactionEnvelopeType.legacy,
              isAutomaticUpdate: true
            }
          });
          break;
        case _gas.GasEstimateTypes.ethGasPrice:
          gasPriceEstimate = (0, _helpers.getRoundedGasPrice)(gasFeeEstimates.gasPrice);
          slice.caseReducers.updateGasFees(state, {
            payload: {
              gasPrice: (0, _helpers.getRoundedGasPrice)(gasFeeEstimates.gasPrice),
              type: _transaction.TransactionEnvelopeType.legacy,
              isAutomaticUpdate: true
            }
          });
          break;
        case _gas.GasEstimateTypes.none:
        default:
          break;
      }
      // Record the latest gasPriceEstimate for future comparisons
      state.gasPriceEstimate = (0, _ethereumjsUtil.addHexPrefix)(gasPriceEstimate);
    },
    /**
     * Sets the appropriate gas fees in state and determines and sets the
     * appropriate transactionType based on gas fee fields received.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {GasFeeUpdatePayload} action - The gas fees to update with
     * @returns {void}
     */
    updateGasFees: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      if (draftTransaction) {
        if (action.payload.transactionType === _transaction.TransactionEnvelopeType.feeMarket) {
          draftTransaction.gas.maxFeePerGas = (0, _ethereumjsUtil.addHexPrefix)(action.payload.maxFeePerGas);
          draftTransaction.gas.maxPriorityFeePerGas = (0, _ethereumjsUtil.addHexPrefix)(action.payload.maxPriorityFeePerGas);
          draftTransaction.transactionType = _transaction.TransactionEnvelopeType.feeMarket;
        } else {
          if (action.payload.manuallyEdited) {
            draftTransaction.gas.wasManuallyEdited = true;
          }

          // Update the gas price if it has not been manually edited,
          // or if this current action is a manual edit.
          if (!draftTransaction.gas.wasManuallyEdited || action.payload.manuallyEdited) {
            draftTransaction.gas.gasPrice = (0, _ethereumjsUtil.addHexPrefix)(action.payload.gasPrice);
          }
          draftTransaction.transactionType = _transaction.TransactionEnvelopeType.legacy;
        }
        slice.caseReducers.calculateGasTotal(state);
      }
    },
    /**
     * sets the provided gasLimit in state and then recomputes the gasTotal.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {SimpleStringPayload} action - The
     *  gasLimit in hex to set in state.
     * @returns {void}
     */
    updateGasLimit: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      if (draftTransaction) {
        draftTransaction.gas.gasLimit = (0, _ethereumjsUtil.addHexPrefix)(action.payload);
        slice.caseReducers.calculateGasTotal(state);
      }
    },
    /**
     * sets the layer 1 fees total (for a multi-layer fee network)
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {SimpleStringPayload} action - the
     *  gasTotalForLayer1 to set in hex wei.
     * @returns {void}
     */
    updateLayer1Fees: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      state.gasTotalForLayer1 = action.payload;
      if (state.amountMode === AMOUNT_MODES.MAX && draftTransaction.asset.type === _transaction.AssetType.native) {
        slice.caseReducers.updateAmountToMax(state);
      }
    },
    /**
     * Updates the recipient of the draftTransaction
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {updateRecipientPayload} action - The recipient to set in the
     *  draftTransaction.
     * @returns {void}
     */
    updateRecipient: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.recipient.error = null;
      state.recipientInput = '';
      draftTransaction.recipient.address = action.payload.address ?? '';
      draftTransaction.recipient.nickname = action.payload.nickname ?? '';
      if (draftTransaction.recipient.address === '') {
        // If address is null we are clearing the recipient and must return
        // to the ADD_RECIPIENT stage.
        state.stage = SEND_STAGES.ADD_RECIPIENT;
      } else {
        // if an address is provided and an id exists, we progress to the EDIT
        // stage, otherwise we progress to the DRAFT stage. We also reset the
        // search mode for recipient search.
        state.stage = draftTransaction.id === null ? SEND_STAGES.DRAFT : SEND_STAGES.EDIT;
        state.recipientMode = RECIPIENT_SEARCH_MODES.CONTACT_LIST;
      }

      // validate send state
      slice.caseReducers.validateSendState(state);
    },
    /**
     * Clears the user input and changes the recipient search mode to the
     * specified value
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {UpdateRecipientModePayload} action - The mode to set the
     *  recipient search to
     * @returns {void}
     */
    updateRecipientSearchMode: (state, action) => {
      state.recipientInput = '';
      state.recipientMode = action.payload;
    },
    updateRecipientWarning: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.recipient.warning = action.payload;
    },
    updateRecipientType: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.recipient.type = action.payload;
    },
    updateDraftTransactionStatus: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.status = action.payload;
    },
    acknowledgeRecipientWarning: state => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.recipient.recipientWarningAcknowledged = true;
      slice.caseReducers.validateSendState(state);
    },
    /**
     * Updates the value of the recipientInput key with what the user has
     * typed into the recipient input field in the UI.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {SimpleStringPayload} action - the value the user has typed into
     *  the recipient field.
     * @returns {void}
     */
    updateRecipientUserInput: (state, action) => {
      // Update the value in state to match what the user is typing into the
      // input field
      state.recipientInput = action.payload;
    },
    /**
     * update current amount.value in state and run post update validation of
     * the amount field and the send state.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {SimpleStringPayload} action - The hex string to be set as the
     *  amount value.
     * @returns {void}
     */
    updateSendAmount: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.amount.value = (0, _ethereumjsUtil.addHexPrefix)(action.payload);
      // Once amount has changed, validate the field
      slice.caseReducers.validateAmountField(state);
      if (draftTransaction.asset.type === _transaction.AssetType.native) {
        // if sending the native asset the amount being sent will impact the
        // gas field as well because the gas validation takes into
        // consideration the available balance minus amount sent before
        // checking if there is enough left to cover the gas fee.
        slice.caseReducers.validateGasField(state);
      }
      // validate send state
      slice.caseReducers.validateSendState(state);
    },
    /**
     * updates the userInputHexData state key
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @param {SimpleStringPayload} action - The hex string to be set as the
     *  userInputHexData value.
     * @returns {void}
     */
    updateUserInputHexData: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      draftTransaction.userInputHexData = action.payload;
    },
    /**
     * Updates the gasIsSetInModal property to true which results in showing
     * the gas fees from the custom gas modal in the send page.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    useCustomGas: state => {
      state.gasIsSetInModal = true;
    },
    /**
     * Updates the gasIsSetInModal property to false which results in showing
     * the default gas price/limit fields in the send page.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    useDefaultGas: state => {
      state.gasIsSetInModal = false;
    },
    /**
     * Checks for the validity of the draftTransactions selected amount to send
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    validateAmountField: state => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      const amountValue = new _Numeric.Numeric(draftTransaction.amount.value, 16);
      switch (true) {
        // set error to INSUFFICIENT_FUNDS_FOR_GAS_ERROR if the account balance is lower
        // than the total price of the transaction inclusive of gas fees.
        case draftTransaction.asset.type === _transaction.AssetType.native && !(0, _send2.isBalanceSufficient)({
          amount: draftTransaction.amount.value,
          balance: draftTransaction.asset.balance,
          gasTotal: draftTransaction.gas.gasTotal ?? '0x0'
        }):
          draftTransaction.amount.error = _send.INSUFFICIENT_FUNDS_FOR_GAS_ERROR;
          break;
        // set error to INSUFFICIENT_TOKENS_ERROR if the token balance is lower
        // than the amount of token the user is attempting to send.
        case draftTransaction.asset.type === _transaction.AssetType.token && !(0, _send2.isTokenBalanceSufficient)({
          tokenBalance: draftTransaction.asset.balance ?? '0x0',
          amount: draftTransaction.amount.value,
          decimals: draftTransaction.asset.details.decimals
        }):
          draftTransaction.amount.error = _send.INSUFFICIENT_TOKENS_ERROR;
          break;
        // if the amount is negative, set error to NEGATIVE_ETH_ERROR
        // TODO: change this to NEGATIVE_ERROR and remove the currency bias.
        case amountValue.isNegative():
          draftTransaction.amount.error = _send.NEGATIVE_ETH_ERROR;
          break;
        // If none of the above are true, set error to null
        default:
          draftTransaction.amount.error = null;
      }
    },
    /**
     * Checks if the user has enough funds to cover the cost of gas, always
     * uses the native currency and does not take into account the amount
     * being sent. If the user has enough to cover cost of gas but not gas
     * + amount then the error will be displayed on the amount field.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    validateGasField: state => {
      var _draftTransaction$fro2;
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      const insufficientFunds = !(0, _send2.isBalanceSufficient)({
        amount: draftTransaction.asset.type === _transaction.AssetType.native ? draftTransaction.amount.value : '0x0',
        balance: ((_draftTransaction$fro2 = draftTransaction.fromAccount) === null || _draftTransaction$fro2 === void 0 ? void 0 : _draftTransaction$fro2.balance) ?? state.selectedAccount.balance,
        gasTotal: draftTransaction.gas.gasTotal ?? '0x0'
      });
      draftTransaction.gas.error = insufficientFunds ? _send.INSUFFICIENT_FUNDS_ERROR : null;
    },
    validateRecipientUserInput: (state, action) => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      if (draftTransaction) {
        if (state.recipientMode === RECIPIENT_SEARCH_MODES.MY_ACCOUNTS || state.recipientInput === '' || state.recipientInput === null) {
          draftTransaction.recipient.error = null;
          draftTransaction.recipient.warning = null;
        } else {
          var _draftTransaction$ass2, _draftTransaction$ass3;
          const {
            chainId,
            tokens,
            tokenAddressList,
            isProbablyAnAssetContract
          } = action.payload;
          if ((0, _hexstringUtils.isBurnAddress)(state.recipientInput) || !(0, _hexstringUtils.isValidHexAddress)(state.recipientInput, {
            mixedCaseUseChecksum: true
          }) && !(0, _util.isValidDomainName)(state.recipientInput)) {
            draftTransaction.recipient.error = (0, _util.isDefaultMetaMaskChain)(chainId) ? _send.INVALID_RECIPIENT_ADDRESS_ERROR : _send.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR;
          } else if ((0, _util.isOriginContractAddress)(state.recipientInput, (_draftTransaction$ass2 = draftTransaction.asset) === null || _draftTransaction$ass2 === void 0 ? void 0 : (_draftTransaction$ass3 = _draftTransaction$ass2.details) === null || _draftTransaction$ass3 === void 0 ? void 0 : _draftTransaction$ass3.address)) {
            draftTransaction.recipient.error = _send.CONTRACT_ADDRESS_ERROR;
          } else {
            draftTransaction.recipient.error = null;
          }
          if ((0, _hexstringUtils.isValidHexAddress)(state.recipientInput) && (tokenAddressList.find(address => (0, _stringUtils.isEqualCaseInsensitive)(address, state.recipientInput)) || (0, _util.checkExistingAddresses)(state.recipientInput, tokens)) || isProbablyAnAssetContract) {
            draftTransaction.recipient.warning = _send.KNOWN_RECIPIENT_ADDRESS_WARNING;
          } else {
            draftTransaction.recipient.warning = null;
          }
        }
      }
      slice.caseReducers.validateSendState(state);
    },
    /**
     * Checks if the draftTransaction is currently valid. The following list of
     * cases from the switch statement in this function describe when the
     * transaction is invalid. Please keep this comment updated.
     *
     * case 1: State is invalid when amount field has an error.
     * case 2: State is invalid when gas field has an error.
     * case 3: State is invalid when asset field has an error.
     * case 4: State is invalid if asset type is a token and the token details
     *  are unknown.
     * case 5: State is invalid if no recipient has been added.
     * case 6: State is invalid if the send state is uninitialized.
     * case 7: State is invalid if gas estimates are loading.
     * case 8: State is invalid if gasLimit is less than the gasLimitMinimum.
     *
     * @param {SendStateDraft} state - A writable draft of the send state to be
     *  updated.
     * @returns {void}
     */
    validateSendState: state => {
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      slice.caseReducers.addHistoryEntry(state, {
        payload: 'Begin validating send state'
      });
      if (draftTransaction) {
        switch (true) {
          case Boolean(draftTransaction.amount.error):
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Amount is in error ${draftTransaction.amount.error}`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case Boolean(draftTransaction.gas.error):
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Gas is in error ${draftTransaction.gas.error}`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case Boolean(draftTransaction.asset.error):
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Asset is in error ${draftTransaction.asset.error}`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case draftTransaction.asset.type === _transaction.AssetType.token && draftTransaction.asset.details === null:
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Asset is TOKEN and token details is null`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case state.stage === SEND_STAGES.ADD_RECIPIENT:
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Form is invalid because stage is ADD_RECIPIENT`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case state.stage === SEND_STAGES.INACTIVE:
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Form is invalid because stage is INACTIVE`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case state.gasEstimateIsLoading:
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Form is invalid because gasEstimateIsLoading`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case new _bignumber.default(draftTransaction.gas.gasLimit, 16).lessThan(new _bignumber.default(state.gasLimitMinimum)):
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Form is invalid because ${draftTransaction.gas.gasLimit} is lessThan ${state.gasLimitMinimum}`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case draftTransaction.recipient.warning === 'loading':
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Form is invalid because recipient warning is loading`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          case draftTransaction.recipient.warning === _send.KNOWN_RECIPIENT_ADDRESS_WARNING && draftTransaction.recipient.recipientWarningAcknowledged === false:
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Form is invalid because recipient warning not acknolwedged`
            });
            draftTransaction.status = SEND_STATUSES.INVALID;
            break;
          default:
            slice.caseReducers.addHistoryEntry(state, {
              payload: `Form is valid`
            });
            draftTransaction.status = SEND_STATUSES.VALID;
        }
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(_actionConstants.ACCOUNT_CHANGED, (state, action) => {
      // This event occurs when the user's account details update due to
      // background state changes. If the account that is being updated is
      // the current from account on the edit flow we need to update
      // the balance for the account and revalidate the send state.
      if (state.stage === SEND_STAGES.EDIT && action.payload.account) {
        const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
        if (draftTransaction && draftTransaction.fromAccount && draftTransaction.fromAccount.address === action.payload.account.address) {
          draftTransaction.fromAccount.balance = action.payload.account.balance;
          // We need to update the asset balance if the asset is the native
          // network asset. Once we update the balance we recompute error state.
          if (draftTransaction.asset.type === _transaction.AssetType.native) {
            draftTransaction.asset.balance = action.payload.account.balance;
          }
          slice.caseReducers.validateAmountField(state);
          slice.caseReducers.validateGasField(state);
          slice.caseReducers.validateSendState(state);
        }
      }
    }).addCase(_actionConstants.ADDRESS_BOOK_UPDATED, (state, action) => {
      var _addressBook$draftTra;
      // When the address book updates from background state changes we need
      // to check to see if an entry exists for the current address or if the
      // entry changed.
      const {
        addressBook
      } = action.payload;
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      if (draftTransaction && (_addressBook$draftTra = addressBook[draftTransaction.recipient.address]) !== null && _addressBook$draftTra !== void 0 && _addressBook$draftTra.name) {
        draftTransaction.recipient.nickname = addressBook[draftTransaction.recipient.address].name;
      }
    }).addCase(computeEstimatedGasLimit.pending, state => {
      // When we begin to fetch gasLimit we should indicate we are loading
      // a gas estimate.
      state.gasEstimateIsLoading = true;
    }).addCase(computeEstimatedGasLimit.fulfilled, (state, action) => {
      var _action$payload, _action$payload2;
      // When we receive a new gasLimit from the computeEstimatedGasLimit
      // thunk we need to update our gasLimit in the slice. We call into the
      // caseReducer updateGasLimit to tap into the appropriate follow up
      // checks and gasTotal calculation. First set gasEstimateIsLoading to
      // false.
      state.gasEstimateIsLoading = false;
      if ((_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.gasLimit) {
        slice.caseReducers.updateGasLimit(state, {
          payload: action.payload.gasLimit
        });
      }
      if ((_action$payload2 = action.payload) !== null && _action$payload2 !== void 0 && _action$payload2.gasTotalForLayer1) {
        slice.caseReducers.updateLayer1Fees(state, {
          payload: action.payload.gasTotalForLayer1
        });
      }
    }).addCase(computeEstimatedGasLimit.rejected, state => {
      // If gas estimation fails, we should set the loading state to false,
      // because it is no longer loading
      state.gasEstimateIsLoading = false;
    }).addCase(_actionConstants.GAS_FEE_ESTIMATES_UPDATED, (state, action) => {
      // When the gasFeeController updates its gas fee estimates we need to
      // update and validate state based on those new values
      slice.caseReducers.updateGasFeeEstimates(state, {
        payload: action.payload
      });
    }).addCase(initializeSendState.pending, state => {
      // when we begin initializing state, which can happen when switching
      // chains even after loading the send flow, we set gasEstimateIsLoading
      // as initialization will trigger a fetch for gasPrice estimates.
      state.gasEstimateIsLoading = true;
    }).addCase(initializeSendState.fulfilled, (state, action) => {
      // writes the computed initialized state values into the slice and then
      // calculates slice validity using the caseReducers.
      state.eip1559support = action.payload.eip1559support;
      state.selectedAccount.address = action.payload.account.address;
      state.selectedAccount.balance = action.payload.account.balance;
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      if (draftTransaction) {
        draftTransaction.gas.gasLimit = action.payload.gasLimit;
        draftTransaction.gas.gasTotal = action.payload.gasTotal;
        if (action.payload.chainHasChanged) {
          var _draftTransaction$fro3;
          // If the state was reinitialized as a result of the user changing
          // the network from the network dropdown, then the selected asset is
          // no longer valid and should be set to the native asset for the
          // network.
          draftTransaction.asset.type = _transaction.AssetType.native;
          draftTransaction.asset.balance = ((_draftTransaction$fro3 = draftTransaction.fromAccount) === null || _draftTransaction$fro3 === void 0 ? void 0 : _draftTransaction$fro3.balance) ?? state.selectedAccount.balance;
          draftTransaction.asset.details = null;
        }
      }
      slice.caseReducers.updateGasFeeEstimates(state, {
        payload: {
          gasFeeEstimates: action.payload.gasFeeEstimates,
          gasEstimateType: action.payload.gasEstimateType
        }
      });
      state.gasEstimatePollToken = action.payload.gasEstimatePollToken;
      if (action.payload.gasEstimatePollToken) {
        state.gasEstimateIsLoading = false;
      }
      if (state.stage !== SEND_STAGES.INACTIVE) {
        slice.caseReducers.validateRecipientUserInput(state, {
          payload: {
            chainId: action.payload.chainId,
            tokens: action.payload.tokens,
            useTokenDetection: action.payload.useTokenDetection,
            tokenAddressList: action.payload.tokenAddressList
          }
        });
      }
      if (state.amountMode === AMOUNT_MODES.MAX) {
        slice.caseReducers.updateAmountToMax(state);
      }
      slice.caseReducers.validateAmountField(state);
      slice.caseReducers.validateGasField(state);
      slice.caseReducers.validateSendState(state);
    }).addCase(_actionConstants.SELECTED_ACCOUNT_CHANGED, (state, action) => {
      // This event occurs when the user selects a new account from the
      // account menu, or the currently active account's balance updates.
      // We only care about new transactions, not edits, here, because we use
      // the fromAccount and ACCOUNT_CHANGED action for that.
      if (state.stage !== SEND_STAGES.EDIT && action.payload.account) {
        state.selectedAccount.balance = action.payload.account.balance;
        state.selectedAccount.address = action.payload.account.address;
        const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
        // This action will occur even when we aren't on the send flow, which
        // is okay as it keeps the selectedAccount details up to date. We do
        // not need to validate anything if there isn't a current draft
        // transaction. If there is, we need to update the asset balance if
        // the asset is set to the native network asset, and then validate
        // the transaction.
        if (draftTransaction) {
          if ((draftTransaction === null || draftTransaction === void 0 ? void 0 : draftTransaction.asset.type) === _transaction.AssetType.native) {
            draftTransaction.asset.balance = action.payload.account.balance;
          }
          slice.caseReducers.validateAmountField(state);
          slice.caseReducers.validateGasField(state);
          slice.caseReducers.validateSendState(state);
        }
      }
    }).addCase(_actionConstants.QR_CODE_DETECTED, (state, action) => {
      // When data is received from the QR Code Scanner we set the recipient
      // as long as a valid address can be pulled from the data. If an
      // address is pulled but it is invalid, we display an error.
      const qrCodeData = action.value;
      const draftTransaction = state.draftTransactions[state.currentTransactionUUID];
      if (qrCodeData && draftTransaction) {
        if (qrCodeData.type === 'address') {
          const scannedAddress = qrCodeData.values.address.toLowerCase();
          if ((0, _hexstringUtils.isValidHexAddress)(scannedAddress, {
            allowNonPrefixed: false
          })) {
            if (draftTransaction.recipient.address !== scannedAddress) {
              slice.caseReducers.updateRecipient(state, {
                payload: {
                  address: scannedAddress
                }
              });
            }
          } else {
            draftTransaction.recipient.error = _send.INVALID_RECIPIENT_ADDRESS_ERROR;
          }
        }
      }
    });
  }
});
const {
  actions,
  reducer
} = slice;
var _default = reducer;
exports.default = _default;
const {
  useDefaultGas,
  useCustomGas,
  updateGasLimit,
  validateRecipientUserInput,
  updateRecipientSearchMode,
  addHistoryEntry,
  acknowledgeRecipientWarning
} = actions;
exports.acknowledgeRecipientWarning = acknowledgeRecipientWarning;
exports.addHistoryEntry = addHistoryEntry;
exports.updateGasLimit = updateGasLimit;
exports.useCustomGas = useCustomGas;
exports.useDefaultGas = useDefaultGas;
// Action Creators
/**
 * This method is for usage when validating user input so that validation
 * is only run after a delay in typing of 300ms. Usage at callsites requires
 * passing in both the dispatch method and the payload to dispatch, which makes
 * it only applicable for use within action creators.
 */
const debouncedValidateRecipientUserInput = (0, _lodash.debounce)((dispatch, payload, resolve) => {
  dispatch(addHistoryEntry(`sendFlow - user typed ${payload.userInput} into recipient input field`));
  dispatch(validateRecipientUserInput(payload));
  resolve();
}, 300);

/**
 * Begins a new draft transaction, derived from the txParams of an existing
 * transaction in the TransactionController. This action will first clear out
 * the previous draft transactions and currentTransactionUUID from state. This
 * action is one of the two entry points into the send flow. NOTE: You must
 * route to the send page *after* dispatching this action resolves to ensure
 * that the draftTransaction is properly created.
 *
 * @param {AssetType} assetType - The type of asset the transaction
 *  being edited was sending. The details of the asset will be retrieved from
 *  the transaction data in state.
 * @param {string} transactionId - The id of the transaction being edited.
 * @returns {ThunkAction<void>}
 */
function editExistingTransaction(assetType, transactionId) {
  return async (dispatch, getState) => {
    await dispatch(actions.clearPreviousDrafts());
    const state = getState();
    const unapprovedTransactions = (0, _metamask.getUnapprovedTxs)(state);
    const transaction = unapprovedTransactions[transactionId];
    const account = (0, _selectors.getTargetAccount)(state, transaction.txParams.from);
    if (assetType === _transaction.AssetType.native) {
      await dispatch(actions.addNewDraft({
        ...draftTransactionInitialState,
        id: transactionId,
        fromAccount: account,
        gas: {
          ...draftTransactionInitialState.gas,
          gasLimit: transaction.txParams.gas,
          gasPrice: transaction.txParams.gasPrice
        },
        userInputHexData: transaction.txParams.data,
        recipient: {
          ...draftTransactionInitialState.recipient,
          address: transaction.txParams.to,
          nickname: (0, _selectors.getAddressBookEntryOrAccountName)(state, transaction.txParams.to) ?? ''
        },
        amount: {
          ...draftTransactionInitialState.amount,
          value: transaction.txParams.value
        },
        history: [`sendFlow - user clicked edit on transaction with id ${transactionId}`]
      }));
      await dispatch(updateSendAsset({
        type: _transaction.AssetType.native
      }, {
        initialAssetSet: true
      }));
    } else {
      const tokenData = (0, _transaction2.parseStandardTokenTransactionData)(transaction.txParams.data);
      const tokenAmountInDec = assetType === _transaction.AssetType.token ? (0, _metamaskControllerUtils.getTokenValueParam)(tokenData) : '1';
      const address = (0, _tokenUtil.getTokenAddressParam)(tokenData);
      const nickname = (0, _selectors.getAddressBookEntryOrAccountName)(state, address) ?? '';
      const tokenAmountInHex = (0, _ethereumjsUtil.addHexPrefix)((0, _conversion.decimalToHex)(tokenAmountInDec));
      await dispatch(actions.addNewDraft({
        ...draftTransactionInitialState,
        id: transactionId,
        fromAccount: account,
        gas: {
          ...draftTransactionInitialState.gas,
          gasLimit: transaction.txParams.gas,
          gasPrice: transaction.txParams.gasPrice
        },
        userInputHexData: transaction.txParams.data,
        recipient: {
          ...draftTransactionInitialState.recipient,
          address,
          nickname
        },
        amount: {
          ...draftTransactionInitialState.amount,
          value: tokenAmountInHex
        },
        history: [`sendFlow - user clicked edit on transaction with id ${transactionId}`]
      }));
      await dispatch(updateSendAsset({
        type: assetType,
        details: {
          address: transaction.txParams.to,
          ...(assetType === _transaction.AssetType.NFT ? {
            tokenId: (0, _tokenUtil.getTokenIdParam)(tokenData) ?? (0, _metamaskControllerUtils.getTokenValueParam)(tokenData)
          } : {})
        }
      }, {
        initialAssetSet: true
      }));
    }
    await dispatch(initializeSendState());
  };
}

/**
 * This method is a temporary placeholder to support the old UI in both the
 * gas modal and the send flow. Soon we won't need to modify gasPrice from the
 * send flow based on user input, it'll just be a shallow copy of the current
 * estimate. This method is necessary because the internal structure of this
 * slice has been changed such that it is agnostic to transaction envelope
 * type, and this method calls into the new structure in the appropriate way.
 *
 * @deprecated - don't extend the usage of this temporary method
 * @param {string} gasPrice - new gas price in hex wei
 * @returns {ThunkAction<void>}
 */
function updateGasPrice(gasPrice) {
  return dispatch => {
    dispatch(addHistoryEntry(`sendFlow - user set legacy gasPrice to ${gasPrice}`));
    dispatch(actions.updateGasFees({
      gasPrice,
      transactionType: _transaction.TransactionEnvelopeType.legacy,
      manuallyEdited: true
    }));
  };
}

/**
 * Updates the recipient in state based on the input provided, and then will
 * recompute gas limit when sending a TOKEN asset type. Changing the recipient
 * address results in hex data changing because the recipient address is
 * encoded in the data instead of being in the 'to' field. The to field in a
 * token send will always be the token contract address.
 * If no nickname is provided, the address book state will be checked to see if
 * a nickname for the passed address has already been saved. This ensures the
 * (temporary) send state recipient nickname is consistent with the address book
 * nickname which has already been persisted to state.
 *
 * @param {object} recipient - Recipient information
 * @param {string} recipient.address - hex address to send the transaction to
 * @param {string} [recipient.nickname] - Alias for the address to display
 *  to the user
 * @returns {ThunkAction<void>}
 */
function updateRecipient({
  address,
  nickname
}) {
  return async (dispatch, getState) => {
    // Do not addHistoryEntry here as this is called from a number of places
    // each with significance to the user and transaction history.
    const state = getState();
    const nicknameFromAddressBookEntryOrAccountName = (0, _selectors.getAddressBookEntryOrAccountName)(state, address) ?? '';
    await dispatch(actions.updateRecipient({
      address,
      nickname: nickname || nicknameFromAddressBookEntryOrAccountName
    }));
    await dispatch(computeEstimatedGasLimit());
  };
}

/**
 * This method is called to update the user's input into the ENS input field.
 * Once the field is updated, the field will be validated using a debounced
 * version of the validateRecipientUserInput action. This way validation only
 * occurs once the user has stopped typing.
 *
 * @param {string} userInput - the value that the user is typing into the field
 */
function updateRecipientUserInput(userInput) {
  return async (dispatch, getState) => {
    var _draftTransaction$fro4;
    dispatch(actions.updateRecipientWarning('loading'));
    dispatch(actions.updateDraftTransactionStatus(SEND_STATUSES.INVALID));
    await dispatch(actions.updateRecipientUserInput(userInput));
    const state = getState();
    const draftTransaction = state[name].draftTransactions[state[name].currentTransactionUUID];
    const sendingAddress = ((_draftTransaction$fro4 = draftTransaction.fromAccount) === null || _draftTransaction$fro4 === void 0 ? void 0 : _draftTransaction$fro4.address) ?? state[name].selectedAccount.address ?? (0, _selectors.getSelectedAddress)(state);
    const chainId = (0, _selectors.getCurrentChainId)(state);
    const tokens = (0, _metamask.getTokens)(state);
    const useTokenDetection = (0, _selectors.getUseTokenDetection)(state);
    const tokenMap = (0, _selectors.getTokenList)(state);
    const tokenAddressList = Object.keys(tokenMap);
    const inputIsValidHexAddress = (0, _hexstringUtils.isValidHexAddress)(userInput);
    let isProbablyAnAssetContract = false;
    if (inputIsValidHexAddress) {
      const smartContractAddress = await (0, _transactions.isSmartContractAddress)(userInput);
      if (smartContractAddress) {
        dispatch(actions.updateRecipientType(_send.RECIPIENT_TYPES.SMART_CONTRACT));
        const {
          symbol,
          decimals
        } = (0, _tokenUtil.getTokenMetadata)(userInput, tokenMap) || {};
        isProbablyAnAssetContract = symbol && decimals !== undefined;
        if (!isProbablyAnAssetContract) {
          try {
            const {
              standard
            } = await (0, _actions.getTokenStandardAndDetails)(userInput, sendingAddress);
            isProbablyAnAssetContract = Boolean(standard);
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
    return new Promise(resolve => {
      debouncedValidateRecipientUserInput(dispatch, {
        userInput,
        chainId,
        tokens,
        useTokenDetection,
        tokenAddressList,
        isProbablyAnAssetContract
      }, resolve);
    });
  };
}

/**
 * Updates the amount the user intends to send and performs side effects.
 * 1. If the current mode is MAX change to INPUT
 * 2. If sending a token, recompute the gasLimit estimate
 *
 * @param {string} amount - hex string representing value
 * @returns {ThunkAction<void>}
 */
function updateSendAmount(amount) {
  return async (dispatch, getState) => {
    const state = getState();
    const {
      ticker
    } = (0, _metamask.getProviderConfig)(state);
    const draftTransaction = state[name].draftTransactions[state[name].currentTransactionUUID];
    let logAmount = amount;
    if (draftTransaction.asset.type === _transaction.AssetType.token) {
      var _draftTransaction$ass4, _draftTransaction$ass5, _draftTransaction$ass6;
      const multiplier = Math.pow(10, Number(((_draftTransaction$ass4 = draftTransaction.asset.details) === null || _draftTransaction$ass4 === void 0 ? void 0 : _draftTransaction$ass4.decimals) || 0));
      const decimalValueString = new _Numeric.Numeric((0, _ethereumjsUtil.addHexPrefix)(amount), 16).toBase(10).applyConversionRate((_draftTransaction$ass5 = draftTransaction.asset.details) !== null && _draftTransaction$ass5 !== void 0 && _draftTransaction$ass5.symbol ? multiplier : 1, true).toString();
      logAmount = `${Number(decimalValueString) ? decimalValueString : ''} ${(_draftTransaction$ass6 = draftTransaction.asset.details) === null || _draftTransaction$ass6 === void 0 ? void 0 : _draftTransaction$ass6.symbol}`;
    } else {
      const ethValue = (0, _conversion.getValueFromWeiHex)({
        value: amount,
        toCurrency: _common.EtherDenomination.ETH,
        numberOfDecimals: 8
      });
      logAmount = `${ethValue} ${ticker || _common.EtherDenomination.ETH}`;
    }
    await dispatch(addHistoryEntry(`sendFlow - user set amount to ${logAmount}`));
    await dispatch(actions.updateSendAmount(amount));
    if (state[name].amountMode === AMOUNT_MODES.MAX) {
      await dispatch(actions.updateAmountMode(AMOUNT_MODES.INPUT));
    }
    await dispatch(computeEstimatedGasLimit());
  };
}

/**
 * updates the asset to send to one of NATIVE or TOKEN and ensures that the
 * asset balance is set. If sending a TOKEN also updates the asset details
 * object with the appropriate ERC20 details including address, symbol and
 * decimals.
 *
 * @param {object} payload - action payload
 * @param {string} payload.type - type of asset to send
 * @param {TokenDetails} [payload.details] - ERC20 details if sending TOKEN asset
 * @param payload.skipComputeEstimatedGasLimit
 * @returns {ThunkAction<void>}
 */
function updateSendAsset({
  type,
  details: providedDetails,
  skipComputeEstimatedGasLimit
}, {
  initialAssetSet = false
} = {}) {
  return async (dispatch, getState) => {
    var _draftTransaction$fro5;
    const state = getState();
    const {
      ticker
    } = (0, _metamask.getProviderConfig)(state);
    const draftTransaction = state[name].draftTransactions[state[name].currentTransactionUUID];
    const sendingAddress = ((_draftTransaction$fro5 = draftTransaction.fromAccount) === null || _draftTransaction$fro5 === void 0 ? void 0 : _draftTransaction$fro5.address) ?? state[name].selectedAccount.address ?? (0, _selectors.getSelectedAddress)(state);
    const account = (0, _selectors.getTargetAccount)(state, sendingAddress);
    if (type === _transaction.AssetType.native) {
      const unapprovedTxs = (0, _metamask.getUnapprovedTxs)(state);
      const unapprovedTx = unapprovedTxs === null || unapprovedTxs === void 0 ? void 0 : unapprovedTxs[draftTransaction.id];
      await dispatch(addHistoryEntry(`sendFlow - user set asset of type ${_transaction.AssetType.native} with symbol ${ticker ?? _common.EtherDenomination.ETH}`));
      await dispatch(actions.updateAsset({
        asset: {
          type,
          details: null,
          balance: account.balance,
          error: null
        },
        initialAssetSet
      }));

      // This is meant to handle cases where we are editing an unapprovedTx from the background state
      // and its type is a token method. In such a case, the hex data will be the necessary hex data
      // for calling the contract transfer method.
      // Now that we are updating the transaction to be a send of a native asset type, we should
      // set the hex data of the transaction being editing to be empty.
      // then the user will not want to send any hex data now that they have change the
      if ((unapprovedTx === null || unapprovedTx === void 0 ? void 0 : unapprovedTx.type) === _transaction.TransactionType.tokenMethodTransferFrom || (unapprovedTx === null || unapprovedTx === void 0 ? void 0 : unapprovedTx.type) === _transaction.TransactionType.tokenMethodTransfer || (unapprovedTx === null || unapprovedTx === void 0 ? void 0 : unapprovedTx.type) === _transaction.TransactionType.tokenMethodSafeTransferFrom) {
        await dispatch(actions.updateUserInputHexData(''));
      }
    } else {
      await dispatch((0, _actions.showLoadingIndication)());
      const details = {
        ...providedDetails,
        ...(await (0, _actions.getTokenStandardAndDetails)(providedDetails.address, sendingAddress, providedDetails.tokenId))
      };
      await dispatch((0, _actions.hideLoadingIndication)());
      const asset = {
        type,
        details,
        error: null
      };
      if (details.standard === _transaction.TokenStandard.ERC20) {
        asset.balance = (0, _ethereumjsUtil.addHexPrefix)((0, _transactionsControllerUtils.calcTokenAmount)(details.balance, details.decimals).toString(16));
        await dispatch(addHistoryEntry(`sendFlow - user set asset to ERC20 token with symbol ${details.symbol} and address ${details.address}`));
      } else if (details.standard === _transaction.TokenStandard.ERC1155 && type === _transaction.AssetType.NFT) {
        throw new Error('Sends of ERC1155 tokens are not currently supported');
      } else if (details.standard === _transaction.TokenStandard.ERC1155 || details.standard === _transaction.TokenStandard.ERC721) {
        if (type === _transaction.AssetType.token) {
          dispatch((0, _actions.showModal)({
            name: 'CONVERT_TOKEN_TO_NFT',
            tokenAddress: details.address
          }));
          asset.error = _errorKeys.INVALID_ASSET_TYPE;
          throw new Error(_errorKeys.INVALID_ASSET_TYPE);
        } else {
          let isCurrentOwner = true;
          try {
            isCurrentOwner = await (0, _actions.isNftOwner)(sendingAddress, details.address, details.tokenId);
          } catch (err) {
            if (err.message.includes('Unable to verify ownership.')) {
              // this would indicate that either our attempts to verify ownership failed because of network issues,
              // or, somehow a token has been added to NFTs state with an incorrect chainId.
            } else {
              // Any other error is unexpected and should be surfaced.
              dispatch((0, _actions.displayWarning)(err.message));
            }
          }
          if (isCurrentOwner) {
            asset.error = null;
            asset.balance = '0x1';
          } else {
            throw new Error('Send slice initialized as NFT send with an NFT not currently owned by the select account');
          }
          await dispatch(addHistoryEntry(`sendFlow - user set asset to NFT with tokenId ${details.tokenId} and address ${details.address}`));
        }
      }
      await dispatch(actions.updateAsset({
        asset,
        initialAssetSet
      }));
    }
    if (initialAssetSet === false && !skipComputeEstimatedGasLimit) {
      await dispatch(computeEstimatedGasLimit());
    }
  };
}

/**
 * When a user has enabled hex data field in advanced settings they will be
 * able to supply hex data on a transaction. This method updates the user
 * supplied data. Note, when sending native assets this will result in
 * recomputing estimated gasLimit. When sending a ERC20 asset this is not done
 * because the data sent in the transaction will be determined by the asset,
 * recipient and value, NOT what the user has supplied.
 *
 * @param {string} hexData - hex encoded string representing transaction data.
 * @returns {ThunkAction<void>}
 */
function updateSendHexData(hexData) {
  return async (dispatch, getState) => {
    await dispatch(addHistoryEntry(`sendFlow - user added custom hexData ${hexData}`));
    await dispatch(actions.updateUserInputHexData(hexData));
    const state = getState();
    const draftTransaction = state[name].draftTransactions[state[name].currentTransactionUUID];
    if (draftTransaction.asset.type === _transaction.AssetType.native) {
      await dispatch(computeEstimatedGasLimit());
    }
  };
}

/**
 * Sets the recipient search mode to show a list of the user's contacts and
 * recently interacted with addresses.
 *
 * @returns {ThunkAction<void>}
 */
function useContactListForRecipientSearch() {
  return dispatch => {
    dispatch(addHistoryEntry(`sendFlow - user selected back to all on recipient screen`));
    dispatch(updateRecipientSearchMode(RECIPIENT_SEARCH_MODES.CONTACT_LIST));
  };
}

/**
 * Sets the recipient search mode to show a list of the user's own accounts.
 *
 * @returns {ThunkAction<void>}
 */
function useMyAccountsForRecipientSearch() {
  return dispatch => {
    dispatch(addHistoryEntry(`sendFlow - user selected transfer to my accounts on recipient screen`));
    dispatch(updateRecipientSearchMode(RECIPIENT_SEARCH_MODES.MY_ACCOUNTS));
  };
}

/**
 * Clears out the recipient user input, ENS resolution and recipient validation.
 *
 * @returns {ThunkAction<void>}
 */
function resetRecipientInput() {
  return async (dispatch, getState) => {
    const state = getState();
    const chainId = (0, _selectors.getCurrentChainId)(state);
    await dispatch(addHistoryEntry(`sendFlow - user cleared recipient input`));
    await dispatch(updateRecipientUserInput(''));
    await dispatch(updateRecipient({
      address: '',
      nickname: ''
    }));
    await dispatch((0, _domains.resetDomainResolution)());
    await dispatch(validateRecipientUserInput({
      chainId
    }));
  };
}

/**
 * Resets the entire send state tree to the initial state. It also disconnects
 * polling from the gas controller if the token is present in state.
 *
 * @returns {ThunkAction<void>}
 */
function resetSendState() {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(actions.resetSendState());
    if (state[name].gasEstimatePollToken) {
      await (0, _actions.disconnectGasFeeEstimatePoller)(state[name].gasEstimatePollToken);
      (0, _actions.removePollingTokenFromAppState)(state[name].gasEstimatePollToken);
    }
  };
}

/**
 * Signs a transaction or updates a transaction in state if editing.
 * This method is called when a user clicks the next button in the footer of
 * the send page, signaling that a transaction should be executed. This method
 * will create the transaction in state (by way of the various global provider
 * constructs) which will eventually (and fairly quickly from user perspective)
 * result in a confirmation window being displayed for the transaction.
 *
 * @returns {ThunkAction<void>}
 */
function signTransaction() {
  return async (dispatch, getState) => {
    const state = getState();
    const {
      stage,
      eip1559support
    } = state[name];
    const txParams = (0, _helpers.generateTransactionParams)(state[name]);
    const draftTransaction = state[name].draftTransactions[state[name].currentTransactionUUID];
    if (stage === SEND_STAGES.EDIT) {
      var _unapprovedTx$sendFlo;
      // When dealing with the edit flow there is already a transaction in
      // state that we must update, this branch is responsible for that logic.
      // We first must grab the previous transaction object from state and then
      // merge in the modified txParams. Once the transaction has been modified
      // we can send that to the background to update the transaction in state.
      const unapprovedTxs = (0, _metamask.getUnapprovedTxs)(state);
      const unapprovedTx = (0, _lodash.cloneDeep)(unapprovedTxs[draftTransaction.id]);
      // We only update the tx params that can be changed via the edit flow UX
      const eip1559OnlyTxParamsToUpdate = {
        data: txParams.data,
        from: txParams.from,
        to: txParams.to,
        value: txParams.value,
        gas: unapprovedTx.userEditedGasLimit ? unapprovedTx.txParams.gas : txParams.gas
      };
      unapprovedTx.originalGasEstimate = eip1559OnlyTxParamsToUpdate.gas;
      const editingTx = {
        ...unapprovedTx,
        txParams: Object.assign(unapprovedTx.txParams, eip1559support ? eip1559OnlyTxParamsToUpdate : txParams)
      };
      await dispatch(addHistoryEntry(`sendFlow - user clicked next and transaction should be updated in controller`));
      await dispatch((0, _actions.updateTransactionSendFlowHistory)(draftTransaction.id, ((_unapprovedTx$sendFlo = unapprovedTx.sendFlowHistory) === null || _unapprovedTx$sendFlo === void 0 ? void 0 : _unapprovedTx$sendFlo.length) || 0, draftTransaction.history));
      await dispatch((0, _actions.updateEditableParams)(draftTransaction.id, editingTx.txParams));
      await dispatch((0, _actions.updateTransactionGasFees)(draftTransaction.id, editingTx.txParams));
    } else {
      let transactionType = draftTransaction.recipient.type === _send.RECIPIENT_TYPES.SMART_CONTRACT ? _transaction.TransactionType.contractInteraction : _transaction.TransactionType.simpleSend;
      if (draftTransaction.asset.type !== _transaction.AssetType.native) {
        transactionType = draftTransaction.asset.type === _transaction.AssetType.NFT ? _transaction.TransactionType.tokenMethodTransferFrom : _transaction.TransactionType.tokenMethodTransfer;
      }
      await dispatch(addHistoryEntry(`sendFlow - user clicked next and transaction should be added to controller`));
      dispatch((0, _actions.addUnapprovedTransactionAndRouteToConfirmationPage)(undefined, txParams, transactionType, draftTransaction.history));
    }
  };
}

/**
 * Toggles the amount.mode between INPUT and MAX modes.
 * As a result, the amount.value will change to either '0x0' when moving from
 * MAX to INPUT, or to the maximum allowable amount based on current asset when
 * moving from INPUT to MAX.
 *
 * @returns {ThunkAction<void>}
 */
function toggleSendMaxMode() {
  return async (dispatch, getState) => {
    const state = getState();
    if (state[name].amountMode === AMOUNT_MODES.MAX) {
      await dispatch(actions.updateAmountMode(AMOUNT_MODES.INPUT));
      await dispatch(actions.updateSendAmount('0x0'));
      await dispatch(addHistoryEntry(`sendFlow - user toggled max mode off`));
    } else {
      await dispatch(actions.updateAmountMode(AMOUNT_MODES.MAX));
      await dispatch(actions.updateAmountToMax());
      await dispatch(addHistoryEntry(`sendFlow - user toggled max mode on`));
    }
    await dispatch(computeEstimatedGasLimit());
  };
}

/**
 * Begins a new draft transaction, clearing out the previous draft transactions
 * from state, and clearing the currentTransactionUUID. This action is one of
 * the two entry points into the send flow. NOTE: You must route to the send
 * page *after* dispatching this action resolves to ensure that the
 * draftTransaction is properly created.
 *
 * @param {Pick<Asset, 'type' | 'details'>} asset - A partial asset
 *  object containing at least the asset type. If specifying a non-native asset
 *  then the asset details must be included with at least the address.
 * @returns {ThunkAction<void>}
 */
function startNewDraftTransaction(asset) {
  return async dispatch => {
    await dispatch(actions.clearPreviousDrafts());
    await dispatch(actions.addNewDraft({
      ...draftTransactionInitialState,
      history: [`sendFlow - User started new draft transaction`]
    }));
    await dispatch(updateSendAsset({
      type: asset.type ?? _transaction.AssetType.native,
      details: asset.details,
      skipComputeEstimatedGasLimit: true
    }));
    await dispatch(initializeSendState());
  };
}

// Selectors
/**
 * The following typedef is a shortcut for typing selectors below. It uses a
 * generic type, T, so that each selector can specify it's return type.
 *
 * @template T
 * @typedef {(state: MetaMaskState) => T} Selector
 */

/**
 * Selector that returns the current draft transaction's UUID.
 *
 * @type {Selector<string>}
 */
function getCurrentTransactionUUID(state) {
  return state[name].currentTransactionUUID;
}

/**
 * Selector that returns the current draft transaction.
 *
 * @type {Selector<DraftTransaction>}
 */
function getCurrentDraftTransaction(state) {
  return state[name].draftTransactions[getCurrentTransactionUUID(state)] ?? {};
}

/**
 * Selector that returns true if a draft transaction exists.
 *
 * @type {Selector<boolean>}
 */
function getDraftTransactionExists(state) {
  const draftTransaction = getCurrentDraftTransaction(state);
  if (Object.keys(draftTransaction).length === 0) {
    return false;
  }
  return true;
}

// Gas selectors

/**
 * Selector that returns the current draft transaction's gasLimit.
 *
 * @type {Selector<?string>}
 */
function getGasLimit(state) {
  var _getCurrentDraftTrans;
  return (_getCurrentDraftTrans = getCurrentDraftTransaction(state).gas) === null || _getCurrentDraftTrans === void 0 ? void 0 : _getCurrentDraftTrans.gasLimit;
}

/**
 * Selector that returns the current draft transaction's gasPrice.
 *
 * @type {Selector<?string>}
 */
function getGasPrice(state) {
  var _getCurrentDraftTrans2;
  return (_getCurrentDraftTrans2 = getCurrentDraftTransaction(state).gas) === null || _getCurrentDraftTrans2 === void 0 ? void 0 : _getCurrentDraftTrans2.gasPrice;
}

/**
 * Selector that returns the current draft transaction's gasTotal.
 *
 * @type {Selector<?string>}
 */
function getGasTotal(state) {
  var _getCurrentDraftTrans3;
  return (_getCurrentDraftTrans3 = getCurrentDraftTransaction(state).gas) === null || _getCurrentDraftTrans3 === void 0 ? void 0 : _getCurrentDraftTrans3.gasTotal;
}

/**
 * Selector that returns the error, if present, for the gas fields.
 *
 * @type {Selector<?string>}
 */
function gasFeeIsInError(state) {
  var _getCurrentDraftTrans4;
  return Boolean((_getCurrentDraftTrans4 = getCurrentDraftTransaction(state).gas) === null || _getCurrentDraftTrans4 === void 0 ? void 0 : _getCurrentDraftTrans4.error);
}

/**
 * Selector that returns the minimum gasLimit for the current network.
 *
 * @type {Selector<string>}
 */
function getMinimumGasLimitForSend(state) {
  return state[name].gasLimitMinimum;
}

/**
 * Selector that returns the current draft transaction's gasLimit.
 *
 * @type {Selector<MapValuesToUnion<SendStateGasModes>>}
 */
function getGasInputMode(state) {
  const isMainnet = (0, _selectors.getIsMainnet)(state);
  const gasEstimateType = (0, _metamask.getGasEstimateType)(state);
  const showAdvancedGasFields = (0, _selectors.getAdvancedInlineGasShown)(state);
  if (state[name].gasIsSetInModal) {
    return GAS_INPUT_MODES.CUSTOM;
  }
  if (!isMainnet && !false || showAdvancedGasFields) {
    return GAS_INPUT_MODES.INLINE;
  }

  // We get eth_gasPrice estimation if the legacy API fails but we need to
  // instruct the UI to render the INLINE inputs in this case, only on
  // mainnet or IN_TEST.
  if ((isMainnet || false) && gasEstimateType === _gas.GasEstimateTypes.ethGasPrice) {
    return GAS_INPUT_MODES.INLINE;
  }
  return GAS_INPUT_MODES.BASIC;
}

// Asset Selectors
/**
 * Selector that returns the asset the current draft transaction is sending.
 *
 * @type {Selector<?Asset>}
 */
function getSendAsset(state) {
  return getCurrentDraftTransaction(state).asset;
}

/**
 * Selector that returns the contract address of the non-native asset that
 * the current transaction is sending, if it exists.
 *
 * @type {Selector<?string>}
 */
function getSendAssetAddress(state) {
  var _getSendAsset, _getSendAsset$details;
  return (_getSendAsset = getSendAsset(state)) === null || _getSendAsset === void 0 ? void 0 : (_getSendAsset$details = _getSendAsset.details) === null || _getSendAsset$details === void 0 ? void 0 : _getSendAsset$details.address;
}

/**
 * Selector that returns a boolean value describing whether the currently
 * selected asset is sendable, based upon the standard of the token.
 *
 * @type {Selector<boolean>}
 */
function getIsAssetSendable(state) {
  var _getSendAsset2, _getSendAsset3, _getSendAsset3$detail;
  if (((_getSendAsset2 = getSendAsset(state)) === null || _getSendAsset2 === void 0 ? void 0 : _getSendAsset2.type) === _transaction.AssetType.native) {
    return true;
  }
  return ((_getSendAsset3 = getSendAsset(state)) === null || _getSendAsset3 === void 0 ? void 0 : (_getSendAsset3$detail = _getSendAsset3.details) === null || _getSendAsset3$detail === void 0 ? void 0 : _getSendAsset3$detail.isERC721) === false;
}

/**
 * Selector that returns the asset error if it exists.
 *
 * @type {Selector<?string>}
 */
function getAssetError(state) {
  return getSendAsset(state).error;
}

// Amount Selectors
/**
 * Selector that returns the amount that current draft transaction is sending.
 *
 * @type {Selector<?string>}
 */
function getSendAmount(state) {
  var _getCurrentDraftTrans5;
  return (_getCurrentDraftTrans5 = getCurrentDraftTransaction(state).amount) === null || _getCurrentDraftTrans5 === void 0 ? void 0 : _getCurrentDraftTrans5.value;
}

/**
 * Selector that returns true if the user has enough native asset balance to
 * cover the cost of the transaction.
 *
 * @type {Selector<boolean>}
 */
function getIsBalanceInsufficient(state) {
  var _getCurrentDraftTrans6;
  return ((_getCurrentDraftTrans6 = getCurrentDraftTransaction(state).gas) === null || _getCurrentDraftTrans6 === void 0 ? void 0 : _getCurrentDraftTrans6.error) === _send.INSUFFICIENT_FUNDS_ERROR;
}

/**
 * Selector that returns the amoung send mode, either MAX or INPUT.
 *
 * @type {Selector<boolean>}
 */
function getSendMaxModeState(state) {
  return state[name].amountMode === AMOUNT_MODES.MAX;
}

/**
 * Selector that returns the current draft transaction's data field.
 *
 * @type {Selector<?string>}
 */
function getSendHexData(state) {
  return getCurrentDraftTransaction(state).userInputHexData;
}

/**
 * Selector that returns the current draft transaction's id, if present.
 *
 * @type {Selector<?string>}
 */
function getDraftTransactionID(state) {
  return getCurrentDraftTransaction(state).id;
}

/**
 * Selector that returns true if there is an error on the amount field.
 *
 * @type {Selector<boolean>}
 */
function sendAmountIsInError(state) {
  var _getCurrentDraftTrans7;
  return Boolean((_getCurrentDraftTrans7 = getCurrentDraftTransaction(state).amount) === null || _getCurrentDraftTrans7 === void 0 ? void 0 : _getCurrentDraftTrans7.error);
}

// Recipient Selectors
/**
 * Selector that returns the current draft transaction's recipient.
 *
 * @type {Selector<DraftTransaction['recipient']>}
 */
function getRecipient(state) {
  const draft = getCurrentDraftTransaction(state);
  if (!draft.recipient) {
    return {
      address: '',
      nickname: '',
      error: null,
      warning: null
    };
  }
  const checksummedAddress = (0, _hexstringUtils.toChecksumHexAddress)(draft.recipient.address);
  if (state.metamask.ensResolutionsByAddress) {
    return {
      ...draft.recipient,
      nickname: draft.recipient.nickname || (0, _selectors.getEnsResolutionByAddress)(state, checksummedAddress)
    };
  }
  return draft.recipient;
}

/**
 * Selector that returns the addres of the current draft transaction's
 * recipient.
 *
 * @type {Selector<?string>}
 */
function getSendTo(state) {
  var _getRecipient;
  return (_getRecipient = getRecipient(state)) === null || _getRecipient === void 0 ? void 0 : _getRecipient.address;
}

/**
 * Selector that returns true if the current recipientMode is MY_ACCOUNTS
 *
 * @type {Selector<boolean>}
 */
function getIsUsingMyAccountForRecipientSearch(state) {
  return state[name].recipientMode === RECIPIENT_SEARCH_MODES.MY_ACCOUNTS;
}

/**
 * Selector that returns the value that the user has typed into the recipient
 * input field.
 *
 * @type {Selector<?string>}
 */
function getRecipientUserInput(state) {
  return state[name].recipientInput;
}
function getRecipientWarningAcknowledgement(state) {
  var _getCurrentDraftTrans8;
  return ((_getCurrentDraftTrans8 = getCurrentDraftTransaction(state).recipient) === null || _getCurrentDraftTrans8 === void 0 ? void 0 : _getCurrentDraftTrans8.recipientWarningAcknowledged) ?? false;
}

// Overall validity and stage selectors

/**
 * Selector that returns the gasFee and amount errors, if they exist.
 *
 * @type {Selector<{ gasFee?: string, amount?: string}>}
 */
function getSendErrors(state) {
  var _getCurrentDraftTrans9, _getCurrentDraftTrans10;
  return {
    gasFee: (_getCurrentDraftTrans9 = getCurrentDraftTransaction(state).gas) === null || _getCurrentDraftTrans9 === void 0 ? void 0 : _getCurrentDraftTrans9.error,
    amount: (_getCurrentDraftTrans10 = getCurrentDraftTransaction(state).amount) === null || _getCurrentDraftTrans10 === void 0 ? void 0 : _getCurrentDraftTrans10.error
  };
}

/**
 * Selector that returns true if the stage is anything except INACTIVE
 *
 * @type {Selector<boolean>}
 */
function isSendStateInitialized(state) {
  return state[name].stage !== SEND_STAGES.INACTIVE;
}

/**
 * Selector that returns true if the current draft transaction is valid and in
 * a sendable state.
 *
 * @type {Selector<boolean>}
 */
function isSendFormInvalid(state) {
  const draftTransaction = getCurrentDraftTransaction(state);
  if (!draftTransaction) {
    return true;
  }
  return draftTransaction.status === SEND_STATUSES.INVALID;
}

/**
 * Selector that returns the current stage of the send flow
 *
 * @type {Selector<MapValuesToUnion<SendStateStages>>}
 */
function getSendStage(state) {
  return state[name].stage;
}


      };
    };
  }
  }
}, {package:"$root$",file:"ui\\ducks\\send\\send.js",}]],[],{})
