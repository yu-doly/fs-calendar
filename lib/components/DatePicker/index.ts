(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', '@popperjs/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DatePicker = {}, global.Vue, global.PopperCore));
}(this, (function (exports, vue, core) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }

    var number = Number(dirtyNumber);

    if (isNaN(number)) {
      return number;
    }

    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */

  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date

    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

        console.warn(new Error().stack);
      }

      return new Date(NaN);
    }
  }

  /**
   * @name addDays
   * @category Day Helpers
   * @summary Add the specified number of days to the given date.
   *
   * @description
   * Add the specified number of days to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the days added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 10 days to 1 September 2014:
   * var result = addDays(new Date(2014, 8, 1), 10)
   * //=> Thu Sep 11 2014 00:00:00
   */

  function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);

    if (isNaN(amount)) {
      return new Date(NaN);
    }

    if (!amount) {
      // If 0 days, no-op to avoid changing times in the hour before end of DST
      return date;
    }

    date.setDate(date.getDate() + amount);
    return date;
  }

  /**
   * @name addMonths
   * @category Month Helpers
   * @summary Add the specified number of months to the given date.
   *
   * @description
   * Add the specified number of months to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the months added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 5 months to 1 September 2014:
   * var result = addMonths(new Date(2014, 8, 1), 5)
   * //=> Sun Feb 01 2015 00:00:00
   */

  function addMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);

    if (isNaN(amount)) {
      return new Date(NaN);
    }

    if (!amount) {
      // If 0 months, no-op to avoid changing times in the hour before end of DST
      return date;
    }

    var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.

    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();

    if (dayOfMonth >= daysInMonth) {
      // If we're already at the end of the month, then this is the correct date
      // and we're done.
      return endOfDesiredMonth;
    } else {
      // Otherwise, we now know that setting the original day-of-month value won't
      // cause an overflow, so set the desired day-of-month. Note that we can't
      // just set the date of `endOfDesiredMonth` because that object may have had
      // its time changed in the unusual case where where a DST transition was on
      // the last day of the month and its local time was in the hour skipped or
      // repeated next to a DST transition.  So we use `date` instead which is
      // guaranteed to still have the original time.
      date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
      return date;
    }
  }

  /**
   * @name addYears
   * @category Year Helpers
   * @summary Add the specified number of years to the given date.
   *
   * @description
   * Add the specified number of years to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the years added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 5 years to 1 September 2014:
   * var result = addYears(new Date(2014, 8, 1), 5)
   * //=> Sun Sep 01 2019 00:00:00
   */

  function addYears(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMonths(dirtyDate, amount * 12);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var numberTag = '[object Number]';

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      (isObjectLike_1(value) && _baseGetTag(value) == numberTag);
  }

  var isNumber_1 = isNumber;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
  }

  var isString_1 = isString;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike_1(value) && isArrayLike_1(value);
  }

  var isArrayLikeObject_1 = isArrayLikeObject;

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   *
   * _.isUndefined(null);
   * // => false
   */
  function isUndefined(value) {
    return value === undefined;
  }

  var isUndefined_1 = isUndefined;

  /** `Object#toString` result references. */
  var dateTag = '[object Date]';

  /**
   * The base implementation of `_.isDate` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */
  function baseIsDate(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == dateTag;
  }

  var _baseIsDate = baseIsDate;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  });

  /* Node.js helper references. */
  var nodeIsDate = _nodeUtil && _nodeUtil.isDate;

  /**
   * Checks if `value` is classified as a `Date` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   *
   * _.isDate('Mon April 23 2012');
   * // => false
   */
  var isDate = nodeIsDate ? _baseUnary(nodeIsDate) : _baseIsDate;

  var isDate_1 = isDate;

  /**
   * The base implementation of `_.clamp` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   */
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== undefined) {
        number = number <= upper ? number : upper;
      }
      if (lower !== undefined) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }

  var _baseClamp = baseClamp;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /**
   * Clamps `number` within the inclusive `lower` and `upper` bounds.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Number
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   * @example
   *
   * _.clamp(-10, -5, 5);
   * // => -5
   *
   * _.clamp(10, -5, 5);
   * // => 5
   */
  function clamp(number, lower, upper) {
    if (upper === undefined) {
      upper = lower;
      lower = undefined;
    }
    if (upper !== undefined) {
      upper = toNumber_1(upper);
      upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
      lower = toNumber_1(lower);
      lower = lower === lower ? lower : 0;
    }
    return _baseClamp(toNumber_1(number), lower, upper);
  }

  var clamp_1 = clamp;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray_1(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol_1(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  var _isKey = isKey;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = _root['__core-js_shared__'];

  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }
    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */
  var nativeCreate = _getNative(Object, 'create');

  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;

  var _Hash = Hash;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;

  var _ListCache = ListCache;

  /* Built-in method references that are verified to be native. */
  var Map = _getNative(_root, 'Map');

  var _Map = Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash,
      'map': new (_Map || _ListCache),
      'string': new _Hash
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;

  var _MapCache = MapCache;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || _MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = _MapCache;

  var memoize_1 = memoize;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize_1(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped;

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = _memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  var _stringToPath = stringToPath;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray_1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return _arrayMap(value, baseToString) + '';
    }
    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  var _baseToString = baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray_1(value)) {
      return value;
    }
    return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
  }

  var _castPath = castPath;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol_1(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  var _toKey = toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = _castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[_toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  var _baseGet = baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : _baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get;

  var defineProperty = (function() {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty$1 = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty$1) {
      _defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex;

  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseSet(object, path, value, customizer) {
    if (!isObject_1(object)) {
      return object;
    }
    path = _castPath(path, object);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
      var key = _toKey(path[index]),
          newValue = value;

      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object;
      }

      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;
        if (newValue === undefined) {
          newValue = isObject_1(objValue)
            ? objValue
            : (_isIndex(path[index + 1]) ? [] : {});
        }
      }
      _assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }

  var _baseSet = baseSet;

  /**
   * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
   * it's created. Arrays are created for missing index properties while objects
   * are created for all other missing properties. Use `_.setWith` to customize
   * `path` creation.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.set(object, 'a[0].b.c', 4);
   * console.log(object.a[0].b.c);
   * // => 4
   *
   * _.set(object, ['x', '0', 'y', 'z'], 5);
   * console.log(object.x[0].y.z);
   * // => 5
   */
  function set(object, path, value) {
    return object == null ? object : _baseSet(object, path, value);
  }

  var set_1 = set;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = _createBaseFor();

  var _baseFor = baseFor;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
    return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
  });

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag$1 = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag$1 = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag$1] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag$1] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike_1(value) &&
      isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /* Node.js helper references. */
  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

  var isTypedArray_1 = isTypedArray;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$6.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             _isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = _overArg(Object.keys, Object);

  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && _baseFor(object, iteratee, keys_1);
  }

  var _baseForOwn = baseForOwn;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _ListCache;
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _ListCache) {
      var pairs = data.__data__;
      if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;

  var _Stack = Stack;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);
    return this;
  }

  var _setCacheAdd = setCacheAdd;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new _MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
  SetCache.prototype.has = _setCacheHas;

  var _SetCache = SetCache;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  var _arraySome = arraySome;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!_arraySome(other, function(othValue, othIndex) {
              if (!_cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays;

  /** Built-in value references. */
  var Uint8Array = _root.Uint8Array;

  var _Uint8Array = Uint8Array;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      mapTag$1 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$1 = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$1:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag$1:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag$1:
      case dateTag$2:
      case numberTag$2:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq_1(+object, +other);

      case errorTag$1:
        return object.name == other.name && object.message == other.message;

      case regexpTag$1:
      case stringTag$2:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag$1:
        var convert = _mapToArray;

      case setTag$1:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = _setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$1;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$1:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  var _equalByTag = equalByTag;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return _arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1;

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
        objProps = _getAllKeys(object),
        objLength = objProps.length,
        othProps = _getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
        return false;
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects;

  /* Built-in method references that are verified to be native. */
  var DataView = _getNative(_root, 'DataView');

  var _DataView = DataView;

  /* Built-in method references that are verified to be native. */
  var Promise$1 = _getNative(_root, 'Promise');

  var _Promise = Promise$1;

  /* Built-in method references that are verified to be native. */
  var Set$1 = _getNative(_root, 'Set');

  var _Set = Set$1;

  /* Built-in method references that are verified to be native. */
  var WeakMap = _getNative(_root, 'WeakMap');

  var _WeakMap = WeakMap;

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$2 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = _baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
      (_Map && getTag(new _Map) != mapTag$2) ||
      (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
      (_Set && getTag(new _Set) != setTag$2) ||
      (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
    getTag = function(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$2;
          case mapCtorString: return mapTag$2;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$2;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      objectTag$2 = '[object Object]';

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_1(object),
        othIsArr = isArray_1(other),
        objTag = objIsArr ? arrayTag$1 : _getTag(object),
        othTag = othIsArr ? arrayTag$1 : _getTag(other);

    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

    var objIsObj = objTag == objectTag$2,
        othIsObj = othTag == objectTag$2,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer_1(object)) {
      if (!isBuffer_1(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new _Stack);
      return (objIsArr || isTypedArray_1(object))
        ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new _Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new _Stack);
    return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep;

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
      return value !== value && other !== other;
    }
    return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  var _baseIsEqual = baseIsEqual;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new _Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  var _baseIsMatch = baseIsMatch;

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject_1(value);
  }

  var _isStrictComparable = isStrictComparable;

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys_1(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, _isStrictComparable(value)];
    }
    return result;
  }

  var _getMatchData = getMatchData;

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  var _matchesStrictComparable = matchesStrictComparable;

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = _getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || _baseIsMatch(object, source, matchData);
    };
  }

  var _baseMatches = baseMatches;

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  var _baseHasIn = baseHasIn;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = _castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = _toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength_1(length) && _isIndex(key, length) &&
      (isArray_1(object) || isArguments_1(object));
  }

  var _hasPath = hasPath;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && _hasPath(object, path, _baseHasIn);
  }

  var hasIn_1 = hasIn;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (_isKey(path) && _isStrictComparable(srcValue)) {
      return _matchesStrictComparable(_toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get_1(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn_1(object, path)
        : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
    };
  }

  var _baseMatchesProperty = baseMatchesProperty;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  var _baseProperty = baseProperty;

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return _baseGet(object, path);
    };
  }

  var _basePropertyDeep = basePropertyDeep;

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
  }

  var property_1 = property;

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity_1;
    }
    if (typeof value == 'object') {
      return isArray_1(value)
        ? _baseMatchesProperty(value[0], value[1])
        : _baseMatches(value);
    }
    return property_1(value);
  }

  var _baseIteratee = baseIteratee;

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = _baseIteratee(iteratee);

    _baseForOwn(object, function(value, key, object) {
      _baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
  }

  var mapValues_1 = mapValues;

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return _arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  var _baseToPairs = baseToPairs;

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  var _setToPairs = setToPairs;

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]',
      setTag$3 = '[object Set]';

  /**
   * Creates a `_.toPairs` or `_.toPairsIn` function.
   *
   * @private
   * @param {Function} keysFunc The function to get the keys of a given object.
   * @returns {Function} Returns the new pairs function.
   */
  function createToPairs(keysFunc) {
    return function(object) {
      var tag = _getTag(object);
      if (tag == mapTag$3) {
        return _mapToArray(object);
      }
      if (tag == setTag$3) {
        return _setToPairs(object);
      }
      return _baseToPairs(object, keysFunc(object));
    };
  }

  var _createToPairs = createToPairs;

  /**
   * Creates an array of own enumerable string keyed-value pairs for `object`
   * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
   * entries are returned.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias entries
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the key-value pairs.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.toPairs(new Foo);
   * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
   */
  var toPairs = _createToPairs(keys_1);

  var toPairs_1 = toPairs;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return _apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
    return _defineProperty$1(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant_1(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = _shortOut(_baseSetToString);

  var _setToString = setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return _setToString(_overRest(func, start, identity_1), func + '');
  }

  var _baseRest = baseRest;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike_1(object) && _isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq_1(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }
    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$a.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

  /** Used for built-in method references. */
  var objectProto$e = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$e.hasOwnProperty;

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = _baseRest(function(object, sources) {
    object = Object(object);

    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }

    while (++index < length) {
      var source = sources[index];
      var props = keysIn_1(source);
      var propsIndex = -1;
      var propsLength = props.length;

      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];

        if (value === undefined ||
            (eq_1(value, objectProto$e[key]) && !hasOwnProperty$b.call(object, key))) {
          object[key] = source[key];
        }
      }
    }

    return object;
  });

  var defaults_1 = defaults;

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq_1(object[key], value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignMergeValue = assignMergeValue;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  });

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject_1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !_isPrototype(object))
      ? _baseCreate(_getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject;

  /** `Object#toString` result references. */
  var objectTag$3 = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$f = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$f.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$3) {
      return false;
    }
    var proto = _getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$c.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  var _safeGet = safeGet;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return _copyObject(value, keysIn_1(value));
  }

  var toPlainObject_1 = toPlainObject;

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = _safeGet(object, key),
        srcValue = _safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      _assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray_1(srcValue),
          isBuff = !isArr && isBuffer_1(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray_1(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject_1(objValue)) {
          newValue = _copyArray(objValue);
        }
        else if (isBuff) {
          isCommon = false;
          newValue = _cloneBuffer(srcValue, true);
        }
        else if (isTyped) {
          isCommon = false;
          newValue = _cloneTypedArray(srcValue, true);
        }
        else {
          newValue = [];
        }
      }
      else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
        newValue = objValue;
        if (isArguments_1(objValue)) {
          newValue = toPlainObject_1(objValue);
        }
        else if (!isObject_1(objValue) || isFunction_1(objValue)) {
          newValue = _initCloneObject(srcValue);
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    _assignMergeValue(object, key, newValue);
  }

  var _baseMergeDeep = baseMergeDeep;

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    _baseFor(source, function(srcValue, key) {
      stack || (stack = new _Stack);
      if (isObject_1(srcValue)) {
        _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        _assignMergeValue(object, key, newValue);
      }
    }, keysIn_1);
  }

  var _baseMerge = baseMerge;

  /**
   * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
   * objects into destination objects that are passed thru.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to merge.
   * @param {Object} object The parent object of `objValue`.
   * @param {Object} source The parent object of `srcValue`.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   * @returns {*} Returns the value to assign.
   */
  function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
    if (isObject_1(objValue) && isObject_1(srcValue)) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, objValue);
      _baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
      stack['delete'](srcValue);
    }
    return objValue;
  }

  var _customDefaultsMerge = customDefaultsMerge;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return _baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner;

  /**
   * This method is like `_.merge` except that it accepts `customizer` which
   * is invoked to produce the merged values of the destination and source
   * properties. If `customizer` returns `undefined`, merging is handled by the
   * method instead. The `customizer` is invoked with six arguments:
   * (objValue, srcValue, key, object, source, stack).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   if (_.isArray(objValue)) {
   *     return objValue.concat(srcValue);
   *   }
   * }
   *
   * var object = { 'a': [1], 'b': [2] };
   * var other = { 'a': [3], 'b': [4] };
   *
   * _.mergeWith(object, other, customizer);
   * // => { 'a': [1, 3], 'b': [2, 4] }
   */
  var mergeWith = _createAssigner(function(object, source, srcIndex, customizer) {
    _baseMerge(object, source, srcIndex, customizer);
  });

  var mergeWith_1 = mergeWith;

  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaults
   * @example
   *
   * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
   * // => { 'a': { 'b': 2, 'c': 3 } }
   */
  var defaultsDeep = _baseRest(function(args) {
    args.push(undefined, _customDefaultsMerge);
    return _apply(mergeWith_1, undefined, args);
  });

  var defaultsDeep_1 = defaultsDeep;

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};

    while (++index < length) {
      var path = paths[index],
          value = _baseGet(object, path);

      if (predicate(value, path)) {
        _baseSet(result, _castPath(path, object), value);
      }
    }
    return result;
  }

  var _basePickBy = basePickBy;

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, paths) {
    return _basePickBy(object, paths, function(value, path) {
      return hasIn_1(object, path);
    });
  }

  var _basePick = basePick;

  /** Built-in value references. */
  var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray_1(value) || isArguments_1(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  var _isFlattenable = isFlattenable;

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = _isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          _arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  var _baseFlatten = baseFlatten;

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? _baseFlatten(array, 1) : [];
  }

  var flatten_1 = flatten;

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return _setToString(_overRest(func, undefined, flatten_1), func + '');
  }

  var _flatRest = flatRest;

  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  var pick = _flatRest(function(object, paths) {
    return object == null ? {} : _basePick(object, paths);
  });

  var pick_1 = pick;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && _copyObject(source, keys_1(source), object);
  }

  var _baseAssign = baseAssign;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && _copyObject(source, keysIn_1(source), object);
  }

  var _baseAssignIn = baseAssignIn;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return _copyObject(source, _getSymbols(source), object);
  }

  var _copySymbols = copySymbols;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
    var result = [];
    while (object) {
      _arrayPush(result, _getSymbols(object));
      object = _getPrototype(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return _copyObject(source, _getSymbolsIn(source), object);
  }

  var _copySymbolsIn = copySymbolsIn;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn;

  /** Used for built-in method references. */
  var objectProto$g = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$d = objectProto$g.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$d.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol;

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      mapTag$4 = '[object Map]',
      numberTag$3 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return _cloneArrayBuffer(object);

      case boolTag$2:
      case dateTag$3:
        return new Ctor(+object);

      case dataViewTag$3:
        return _cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return _cloneTypedArray(object, isDeep);

      case mapTag$4:
        return new Ctor;

      case numberTag$3:
      case stringTag$3:
        return new Ctor(object);

      case regexpTag$2:
        return _cloneRegExp(object);

      case setTag$4:
        return new Ctor;

      case symbolTag$2:
        return _cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag;

  /** `Object#toString` result references. */
  var mapTag$5 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike_1(value) && _getTag(value) == mapTag$5;
  }

  var _baseIsMap = baseIsMap;

  /* Node.js helper references. */
  var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

  var isMap_1 = isMap;

  /** `Object#toString` result references. */
  var setTag$5 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike_1(value) && _getTag(value) == setTag$5;
  }

  var _baseIsSet = baseIsSet;

  /* Node.js helper references. */
  var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

  var isSet_1 = isSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$3 = '[object Boolean]',
      dateTag$4 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$6 = '[object Map]',
      numberTag$4 = '[object Number]',
      objectTag$4 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$6 = '[object Set]',
      stringTag$4 = '[object String]',
      symbolTag$3 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
  cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
  cloneableTags[boolTag$3] = cloneableTags[dateTag$4] =
  cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
  cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
  cloneableTags[int32Tag$2] = cloneableTags[mapTag$6] =
  cloneableTags[numberTag$4] = cloneableTags[objectTag$4] =
  cloneableTags[regexpTag$3] = cloneableTags[setTag$6] =
  cloneableTags[stringTag$4] = cloneableTags[symbolTag$3] =
  cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
  cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
  cloneableTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject_1(value)) {
      return value;
    }
    var isArr = isArray_1(value);
    if (isArr) {
      result = _initCloneArray(value);
      if (!isDeep) {
        return _copyArray(value, result);
      }
    } else {
      var tag = _getTag(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer_1(value)) {
        return _cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$4 || tag == argsTag$3 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : _initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? _copySymbolsIn(value, _baseAssignIn(result, value))
            : _copySymbols(value, _baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = _initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new _Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet_1(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap_1(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? _getAllKeysIn : _getAllKeys)
      : (isFlat ? keysIn_1 : keys_1);

    var props = isArr ? undefined : keysFunc(value);
    _arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone;

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }

  var last_1 = last;

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }

  var _baseSlice = baseSlice;

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
  }

  var _parent = parent;

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = _castPath(path, object);
    object = _parent(object, path);
    return object == null || delete object[_toKey(last_1(path))];
  }

  var _baseUnset = baseUnset;

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone(value) {
    return isPlainObject_1(value) ? undefined : value;
  }

  var _customOmitClone = customOmitClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG$1 = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = _flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = _arrayMap(paths, function(path) {
      path = _castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    _copyObject(object, _getAllKeysIn(object), result);
    if (isDeep) {
      result = _baseClone(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, _customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      _baseUnset(result, paths[length]);
    }
    return result;
  });

  var omit_1 = omit;

  /** Used for built-in method references. */
  var objectProto$h = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$e = objectProto$h.hasOwnProperty;

  /**
   * The base implementation of `_.has` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHas(object, key) {
    return object != null && hasOwnProperty$e.call(object, key);
  }

  var _baseHas = baseHas;

  /**
   * Checks if `path` is a direct property of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = { 'a': { 'b': 2 } };
   * var other = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.has(object, 'a');
   * // => true
   *
   * _.has(object, 'a.b');
   * // => true
   *
   * _.has(object, ['a', 'b']);
   * // => true
   *
   * _.has(other, 'a');
   * // => false
   */
  function has(object, path) {
    return object != null && _hasPath(object, path, _baseHas);
  }

  var has_1 = has;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike_1(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var _createBaseEach = createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = _createBaseEach(_baseForOwn);

  var _baseEach = baseEach;

  /**
   * Gets the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias first
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of `array`.
   * @example
   *
   * _.head([1, 2, 3]);
   * // => 1
   *
   * _.head([]);
   * // => undefined
   */
  function head(array) {
    return (array && array.length) ? array[0] : undefined;
  }

  var head_1 = head;

  /**
   * The base implementation of `_.some` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function baseSome(collection, predicate) {
    var result;

    _baseEach(collection, function(value, index, collection) {
      result = predicate(value, index, collection);
      return !result;
    });
    return !!result;
  }

  var _baseSome = baseSome;

  /**
   * Checks if `predicate` returns truthy for **any** element of `collection`.
   * Iteration is stopped once `predicate` returns truthy. The predicate is
   * invoked with three arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   *
   * var users = [
   *   { 'user': 'barney', 'active': true },
   *   { 'user': 'fred',   'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.some(users, { 'user': 'barney', 'active': false });
   * // => false
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.some(users, ['active', false]);
   * // => true
   *
   * // The `_.property` iteratee shorthand.
   * _.some(users, 'active');
   * // => true
   */
  function some(collection, predicate, guard) {
    var func = isArray_1(collection) ? _arraySome : _baseSome;
    if (guard && _isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, _baseIteratee(predicate));
  }

  var some_1 = some;

  // Type utils
  // Type checkers
  const getType = (value) => Object.prototype.toString.call(value).slice(8, -1);
  const isDate$1 = (value) => isDate_1(value) && !isNaN(value.getTime());
  const isObject$1 = (value) => getType(value) === 'Object';
  // Object utils
  const has$1 = has_1;
  const hasAny = (obj, props) => some_1(props, p => has_1(obj, p));
  // Collection utils
  const some$1 = some_1;

  const pad = (val, len, char = '0') => {
      val = val !== null && val !== undefined ? String(val) : '';
      len = len || 2;
      while (val.length < len) {
          val = `${char}${val}`;
      }
      return val;
  };
  const pageIsValid = (page) => !!(page && page.month && page.year);
  const mergeEvents = (...args) => {
      const result = {};
      args.forEach(e => Object.entries(e).forEach(([key, value]) => {
          if (!result[key]) {
              result[key] = value;
          }
          else if (isArrayLikeObject_1(result[key])) {
              result[key].push(value);
          }
          else {
              result[key] = [result[key], value];
          }
      }));
      return result;
  };
  const pageIsBeforePage = (page, comparePage) => {
      if (!pageIsValid(page) || !pageIsValid(comparePage))
          return false;
      if (page.year === comparePage.year)
          return page.month < comparePage.month;
      return page.year < comparePage.year;
  };
  const pageIsAfterPage = (page, comparePage) => {
      if (!pageIsValid(page) || !pageIsValid(comparePage))
          return false;
      if (page.year === comparePage.year)
          return page.month > comparePage.month;
      return page.year > comparePage.year;
  };
  const pageIsBetweenPages = (page, fromPage, toPage) => (page || false) &&
      !pageIsBeforePage(page, fromPage) &&
      !pageIsAfterPage(page, toPage);
  const pageIsEqualToPage = (aPage, bPage) => {
      if (!aPage && bPage)
          return false;
      if (aPage && !bPage)
          return false;
      if (!aPage && !bPage)
          return true;
      return aPage.month === bPage.month && aPage.year === bPage.year;
  };
  const addPages = ({ month, year }, count) => {
      const incr = count > 0 ? 1 : -1;
      for (let i = 0; i < Math.abs(count); i++) {
          month += incr;
          if (month > 12) {
              month = 1;
              year++;
          }
          else if (month < 1) {
              month = 12;
              year--;
          }
      }
      return {
          month,
          year,
      };
  };
  function datesAreEqual(a, b) {
      const aIsDate = isDate$1(a);
      const bIsDate = isDate$1(b);
      if (!aIsDate && !bIsDate)
          return true;
      if (aIsDate !== bIsDate)
          return false;
      return a.getTime() === b.getTime();
  }
  const arrayHasItems = (array) => isArrayLikeObject_1(array) && array.length > 0;
  const mixinOptionalProps = (source, target, props) => {
      const assigned = [];
      props.forEach(p => {
          const name = p.name || p.toString();
          const mixin = p.mixin;
          const validate = p.validate;
          if (Object.prototype.hasOwnProperty.call(source, name)) {
              const value = validate ? validate(source[name]) : source[name];
              target[name] = mixin && isObject$1(value) ? { ...mixin, ...value } : value;
              assigned.push(name);
          }
      });
      return {
          target,
          assigned: assigned.length ? assigned : null,
      };
  };
  const on = (element, event, handler, opts) => {
      if (element && event && handler) {
          element.addEventListener(event, handler, opts);
      }
  };
  const off = (element, event, handler, opts) => {
      if (element && event) {
          element.removeEventListener(event, handler, opts);
      }
  };
  const elementContains = (element, child) => !!element && !!child && (element === child || element.contains(child));
  const onSpaceOrEnter = (event, handler) => {
      if (event.key === ' ' || event.key === 'Enter') {
          handler(event);
          event.preventDefault();
      }
  };
  /* eslint-disable no-bitwise */
  const createGuid = () => {
      function S4() {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  };
  function hash(str) {
      let hashcode = 0;
      let i = 0;
      let chr;
      if (str.length === 0)
          return hashcode;
      for (i = 0; i < str.length; i++) {
          chr = str.charCodeAt(i);
          hashcode = (hashcode << 5) - hashcode + chr;
          hashcode |= 0; // Convert to 32bit integer
      }
      return hashcode;
  }
  /* eslint-enable no-bitwise */

  // Can't just rely on 'click' event because of oddities in mobile Safari

  var addTapOrClickHandler = function addTapOrClickHandler(element, handler) {
    if (!element || !element.addEventListener || !isFunction_1(handler)) {
      return null;
    } // State variables


    var tap = false;
    var disableClick = false;

    var touchstart = function touchstart() {
      return tap = true;
    };

    var touchmove = function touchmove() {
      return tap = false;
    };

    var touchend = function touchend(event) {
      if (tap) {
        // Reset state
        tap = false; // Disable click so we don't call handler twice

        disableClick = true;
        handler(event);
        return;
      } // Make sure tap event hasn't disabled click


      if (event.type === 'click' && !disableClick) {
        handler(event);
      } // Reset state


      disableClick = false;
    }; // Add event handlers


    on(element, 'touchstart', touchstart, {
      passive: true
    });
    on(element, 'touchmove', touchmove, {
      passive: true
    });
    on(element, 'click', touchend, {
      passive: true
    });
    on(element, 'touchend', touchend, {
      passive: true
    }); // Return function that removes event handlers

    return function () {
      off(element, 'touchstart', touchstart);
      off(element, 'touchmove', touchmove);
      off(element, 'click', touchend);
      off(element, 'touchend', touchend);
    };
  };
  var addHorizontalSwipeHandler = function addHorizontalSwipeHandler(element, handler, _ref) {
    var maxSwipeTime = _ref.maxSwipeTime,
        minHorizontalSwipeDistance = _ref.minHorizontalSwipeDistance,
        maxVerticalSwipeDistance = _ref.maxVerticalSwipeDistance;

    if (!element || !element.addEventListener || !isFunction_1(handler)) {
      return null;
    } // State variables


    var startX = 0;
    var startY = 0;
    var startTime = null;
    var isSwiping = false; // Touch start handler

    function touchStart(e) {
      var t = e.changedTouches[0];
      startX = t.screenX;
      startY = t.screenY;
      startTime = new Date().getTime();
      isSwiping = true;
    } // Touch end handler


    function touchEnd(e) {
      if (!isSwiping) return;
      isSwiping = false;
      var t = e.changedTouches[0];
      var deltaX = t.screenX - startX;
      var deltaY = t.screenY - startY;
      var deltaTime = new Date().getTime() - startTime;

      if (deltaTime < maxSwipeTime) {
        if (Math.abs(deltaX) >= minHorizontalSwipeDistance && Math.abs(deltaY) <= maxVerticalSwipeDistance) {
          var arg = {
            toLeft: false,
            toRight: false
          };

          if (deltaX < 0) {
            // Swipe to the left
            arg.toLeft = true;
          } else {
            // Swipe to the right
            arg.toRight = true;
          }

          handler(arg);
        }
      }
    } // Add event handlers


    on(element, 'touchstart', touchStart, {
      passive: true
    }); // on(element, 'touchmove', touchmove);

    on(element, 'touchend', touchEnd, {
      passive: true
    }); // Return function that removes event handlers

    return function () {
      off(element, 'touchstart', touchStart); // off(element, 'touchmove', touchmove);

      off(element, 'touchend', touchEnd);
    };
  };

  var script = {
    name: 'CustomTransition',
    emits: ['before-enter', 'before-transition', 'after-enter', 'after-transition'],
    props: {
      name: String,
      appear: Boolean
    },
    computed: {
      name_: function name_() {
        return "vc-".concat(this.name || 'none');
      }
    },
    methods: {
      beforeEnter: function beforeEnter(el) {
        this.$emit('before-enter', el);
        this.$emit('before-transition', el);
      },
      afterEnter: function afterEnter(el) {
        this.$emit('after-enter', el);
        this.$emit('after-transition', el);
      }
    }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: $options.name_,
      appear: $props.appear,
      onBeforeEnter: $options.beforeEnter,
      onAfterEnter: $options.afterEnter
    }, {
      default: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "default")];
      }),
      _: 3
    }, 8, ["name", "appear", "onBeforeEnter", "onAfterEnter"]);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".vc-none-enter-active,\n.vc-none-leave-active {\n  transition-duration: 0s;\n}\n\n.vc-fade-enter-active,\n.vc-fade-leave-active,\n.vc-slide-left-enter-active,\n.vc-slide-left-leave-active,\n.vc-slide-right-enter-active,\n.vc-slide-right-leave-active,\n.vc-slide-up-enter-active,\n.vc-slide-up-leave-active,\n.vc-slide-down-enter-active,\n.vc-slide-down-leave-active,\n.vc-slide-fade-enter-active,\n.vc-slide-fade-leave-active {\n  transition: opacity var(--slide-duration) var(--slide-timing),\n    -webkit-transform var(--slide-duration) var(--slide-timing);\n  transition: transform var(--slide-duration) var(--slide-timing),\n    opacity var(--slide-duration) var(--slide-timing);\n  transition: transform var(--slide-duration) var(--slide-timing),\n    opacity var(--slide-duration) var(--slide-timing),\n    -webkit-transform var(--slide-duration) var(--slide-timing);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  pointer-events: none;\n}\n\n.vc-none-leave-active,\n.vc-fade-leave-active,\n.vc-slide-left-leave-active,\n.vc-slide-right-leave-active,\n.vc-slide-up-leave-active,\n.vc-slide-down-leave-active {\n  position: absolute !important;\n  width: 100%;\n}\n\n.vc-none-enter-from,\n.vc-none-leave-to,\n.vc-fade-enter-from,\n.vc-fade-leave-to,\n.vc-slide-left-enter-from,\n.vc-slide-left-leave-to,\n.vc-slide-right-enter-from,\n.vc-slide-right-leave-to,\n.vc-slide-up-enter-from,\n.vc-slide-up-leave-to,\n.vc-slide-down-enter-from,\n.vc-slide-down-leave-to,\n.vc-slide-fade-enter-from,\n.vc-slide-fade-leave-to {\n  opacity: 0;\n}\n\n.vc-slide-left-enter-from,\n.vc-slide-right-leave-to,\n.vc-slide-fade-enter-from.direction-left,\n.vc-slide-fade-leave-to.direction-left {\n  -webkit-transform: translateX(var(--slide-translate));\n          transform: translateX(var(--slide-translate));\n}\n\n.vc-slide-right-enter-from,\n.vc-slide-left-leave-to,\n.vc-slide-fade-enter-from.direction-right,\n.vc-slide-fade-leave-to.direction-right {\n  -webkit-transform: translateX(calc(-1 * var(--slide-translate)));\n          transform: translateX(calc(-1 * var(--slide-translate)));\n}\n\n.vc-slide-up-enter-from,\n.vc-slide-down-leave-to,\n.vc-slide-fade-enter-from.direction-top,\n.vc-slide-fade-leave-to.direction-top {\n  -webkit-transform: translateY(var(--slide-translate));\n          transform: translateY(var(--slide-translate));\n}\n\n.vc-slide-down-enter-from,\n.vc-slide-up-leave-to,\n.vc-slide-fade-enter-from.direction-bottom,\n.vc-slide-fade-leave-to.direction-bottom {\n  -webkit-transform: translateY(calc(-1 * var(--slide-translate)));\n          transform: translateY(calc(-1 * var(--slide-translate)));\n}\n";
  styleInject(css_248z);

  script.render = render;

  var script$1 = {
    name: 'Popover',
    emits: ['before-show', 'after-show', 'before-hide', 'after-hide'],
    render: function render() {
      var _this = this;

      return vue.h('div', {
        class: ['vc-popover-content-wrapper', {
          'is-interactive': this.isInteractive
        }],
        ref: 'popover'
      }, [vue.h(script, {
        name: this.transition,
        appear: true,
        'on-before-enter': this.beforeEnter,
        'on-after-enter': this.afterEnter,
        'on-before-leave': this.beforeLeave,
        'on-after-leave': this.afterLeave
      }, {
        default: function _default() {
          return _this.isVisible ? vue.h('div', {
            tabindex: -1,
            class: ['vc-popover-content', "direction-".concat(_this.direction), _this.contentClass],
            style: _this.contentStyle
          }, [_this.content, vue.h('span', {
            class: ['vc-popover-caret', "direction-".concat(_this.direction), "align-".concat(_this.alignment)]
          })]) : null;
        }
      })]);
    },
    props: {
      id: {
        type: String,
        required: true
      },
      contentClass: String
    },
    data: function data() {
      return {
        ref: null,
        opts: null,
        data: null,
        transition: 'slide-fade',
        transitionTranslate: '15px',
        transitionDuration: '0.15s',
        placement: 'bottom',
        positionFixed: false,
        modifiers: [],
        isInteractive: false,
        isHovered: false,
        isFocused: false,
        showDelay: 0,
        hideDelay: 110,
        autoHide: false,
        popperEl: null
      };
    },
    computed: {
      content: function content() {
        var _this2 = this;

        return isFunction_1(this.$slots.default) && this.$slots.default({
          direction: this.direction,
          alignment: this.alignment,
          data: this.data,
          updateLayout: this.setupPopper,
          hide: function hide(opts) {
            return _this2.hide(opts);
          }
        }) || this.$slots.default;
      },
      contentStyle: function contentStyle() {
        return {
          '--slide-translate': this.transitionTranslate,
          '--slide-duration': this.transitionDuration
        };
      },
      popperOptions: function popperOptions() {
        return {
          placement: this.placement,
          strategy: this.positionFixed ? 'fixed' : 'absolute',
          modifiers: [{
            name: 'onUpdate',
            enabled: true,
            phase: 'afterWrite',
            fn: this.onPopperUpdate
          }].concat(_toConsumableArray(this.modifiers || [])),
          onFirstUpdate: this.onPopperUpdate
        };
      },
      isVisible: function isVisible() {
        return !!(this.ref && this.content);
      },
      direction: function direction() {
        return this.placement && this.placement.split('-')[0] || 'bottom';
      },
      alignment: function alignment() {
        var isLeftRight = this.direction === 'left' || this.direction === 'right';
        var alignment = this.placement.split('-');
        alignment = alignment.length > 1 ? alignment[1] : '';

        if (['start', 'top', 'left'].includes(alignment)) {
          return isLeftRight ? 'top' : 'left';
        }

        if (['end', 'bottom', 'right'].includes(alignment)) {
          return isLeftRight ? 'bottom' : 'right';
        }

        return isLeftRight ? 'middle' : 'center';
      },
      state: function state() {
        return this.$popovers[this.id];
      }
    },
    watch: {
      opts: function opts(val, oldVal) {
        if (oldVal && oldVal.callback) {
          oldVal.callback(_objectSpread2(_objectSpread2({}, oldVal), {}, {
            completed: !val,
            reason: val ? 'Overridden by action' : null
          }));
        }
      }
    },
    mounted: function mounted() {
      this.popoverEl = this.$refs.popover;
      this.addEvents();
    },
    beforeUnmount: function beforeUnmount() {
      this.removeEvents();
    },
    methods: {
      addEvents: function addEvents() {
        on(this.popoverEl, 'click', this.onClick);
        on(this.popoverEl, 'mouseover', this.onMouseOver);
        on(this.popoverEl, 'mouseleave', this.onMouseLeave);
        on(this.popoverEl, 'focusin', this.onFocusIn);
        on(this.popoverEl, 'focusout', this.onFocusOut);
        on(document, 'keydown', this.onDocumentKeydown);
        this.removeDocHandler = addTapOrClickHandler(document, this.onDocumentClick);
        on(document, 'show-popover', this.onDocumentShowPopover);
        on(document, 'hide-popover', this.onDocumentHidePopover);
        on(document, 'toggle-popover', this.onDocumentTogglePopover);
        on(document, 'update-popover', this.onDocumentUpdatePopover);
      },
      removeEvents: function removeEvents() {
        off(this.popoverEl, 'click', this.onClick);
        off(this.popoverEl, 'mouseover', this.onMouseOver);
        off(this.popoverEl, 'mouseleave', this.onMouseLeave);
        off(this.popoverEl, 'focusin', this.onFocusIn);
        off(this.popoverEl, 'focusout', this.onFocusOut);
        off(document, 'keydown', this.onDocumentKeydown);
        if (this.removeDocHandler) this.removeDocHandler();
        off(document, 'show-popover', this.onDocumentShowPopover);
        off(document, 'hide-popover', this.onDocumentHidePopover);
        off(document, 'toggle-popover', this.onDocumentTogglePopover);
        off(document, 'update-popover', this.onDocumentUpdatePopover);
      },
      onClick: function onClick(e) {
        e.stopPropagation();
      },
      onMouseOver: function onMouseOver() {
        this.isHovered = true;
        if (this.isInteractive) this.show();
      },
      onMouseLeave: function onMouseLeave() {
        this.isHovered = false;

        if (this.autoHide && !this.isFocused && (!this.ref || this.ref !== document.activeElement)) {
          this.hide();
        }
      },
      onFocusIn: function onFocusIn() {
        this.isFocused = true;
        if (this.isInteractive) this.show();
      },
      onFocusOut: function onFocusOut(e) {
        if (!e.relatedTarget || !elementContains(this.popoverEl, e.relatedTarget)) {
          this.isFocused = false;
          if (!this.isHovered && this.autoHide) this.hide();
        }
      },
      onDocumentClick: function onDocumentClick(e) {
        if (!this.$refs.popover || !this.ref) {
          return;
        } // Don't hide if target element is contained within popover ref or content


        if (elementContains(this.popoverEl, e.target) || elementContains(this.ref, e.target)) {
          return;
        } // Hide the popover


        this.hide();
      },
      onDocumentKeydown: function onDocumentKeydown(e) {
        if (e.key === 'Esc' || e.key === 'Escape') {
          this.hide();
        }
      },
      onDocumentShowPopover: function onDocumentShowPopover(_ref) {
        var detail = _ref.detail;
        if (!detail.id || detail.id !== this.id) return;
        this.show(detail);
      },
      onDocumentHidePopover: function onDocumentHidePopover(_ref2) {
        var detail = _ref2.detail;
        if (!detail.id || detail.id !== this.id) return;
        this.hide(detail);
      },
      onDocumentTogglePopover: function onDocumentTogglePopover(_ref3) {
        var detail = _ref3.detail;
        if (!detail.id || detail.id !== this.id) return;
        this.toggle(detail);
      },
      onDocumentUpdatePopover: function onDocumentUpdatePopover(_ref4) {
        var detail = _ref4.detail;
        if (!detail.id || detail.id !== this.id) return;
        this.update(detail);
      },
      show: function show() {
        var _this3 = this;

        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.action = 'show';
        var ref = opts.ref || this.ref;
        var delay = opts.showDelay >= 0 ? opts.showDelay : this.showDelay; // Validate options

        if (!ref) {
          if (opts.callback) {
            opts.callback({
              completed: false,
              reason: 'Invalid reference element provided'
            });
          }

          return;
        }

        clearTimeout(this.timeout);
        this.opts = opts;

        var fn = function fn() {
          Object.assign(_this3, omit_1(opts, ['id']));

          _this3.setupPopper();

          _this3.opts = null;
        };

        if (delay > 0) {
          this.timeout = setTimeout(function () {
            return fn();
          }, delay);
        } else {
          fn();
        }
      },
      hide: function hide() {
        var _this4 = this;

        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.action = 'hide';
        var ref = opts.ref || this.ref;
        var delay = opts.hideDelay >= 0 ? opts.hideDelay : this.hideDelay;

        if (!this.ref || ref !== this.ref) {
          if (opts.callback) {
            opts.callback(_objectSpread2(_objectSpread2({}, opts), {}, {
              completed: false,
              reason: this.ref ? 'Invalid reference element provided' : 'Popover already hidden'
            }));
          }

          return;
        }

        var fn = function fn() {
          _this4.ref = null;
          _this4.opts = null;
        };

        clearTimeout(this.timeout);
        this.opts = opts;

        if (delay > 0) {
          this.timeout = setTimeout(fn, delay);
        } else {
          fn();
        }
      },
      toggle: function toggle() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (this.isVisible && opts.ref === this.ref) {
          this.hide(opts);
        } else {
          this.show(opts);
        }
      },
      update: function update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        Object.assign(this, omit_1(opts, ['id']));
        this.setupPopper();
      },
      setupPopper: function setupPopper() {
        var _this5 = this;

        this.$nextTick(function () {
          if (!_this5.ref || !_this5.$refs.popover) return;

          if (_this5.popper && _this5.popper.reference !== _this5.ref) {
            _this5.destroyPopper();
          }

          if (!_this5.popper) {
            _this5.popper = core.createPopper(_this5.ref, _this5.popoverEl, _this5.popperOptions);
          } else {
            _this5.popper.update();
          }
        });
      },
      onPopperUpdate: function onPopperUpdate(args) {
        if (args.placement) {
          this.placement = args.placement;
        } else if (args.state) {
          this.placement = args.state.placement;
        }
      },
      beforeEnter: function beforeEnter(e) {
        this.$emit('before-show', e);
      },
      afterEnter: function afterEnter(e) {
        this.$emit('after-show', e);
      },
      beforeLeave: function beforeLeave(e) {
        this.$emit('before-hide', e);
      },
      afterLeave: function afterLeave(e) {
        this.destroyPopper();
        this.$emit('after-hide', e);
      },
      destroyPopper: function destroyPopper() {
        if (this.popper) {
          this.popper.destroy();
          this.popper = null;
        }
      }
    }
  };

  var css_248z$1 = ".vc-popover-content-wrapper {\n  --popover-horizontal-content-offset: 8px;\n  --popover-vertical-content-offset: 10px;\n  --popover-caret-horizontal-offset: 18px;\n  --popover-caret-vertical-offset: 8px;\n\n  position: absolute;\n  display: block;\n  outline: none;\n  z-index: 10;\n}\n  .vc-popover-content-wrapper:not(.is-interactive) {\n    pointer-events: none;\n  }\n  .vc-popover-content {\n  position: relative;\n  outline: none;\n  z-index: 10;\n  box-shadow: var(--shadow-lg);\n}\n  .vc-popover-content.direction-bottom {\n    margin-top: var(--popover-vertical-content-offset);\n  }\n  .vc-popover-content.direction-top {\n    margin-bottom: var(--popover-vertical-content-offset);\n  }\n  .vc-popover-content.direction-left {\n    margin-right: var(--popover-horizontal-content-offset);\n  }\n  .vc-popover-content.direction-right {\n    margin-left: var(--popover-horizontal-content-offset);\n  }\n  .vc-popover-caret {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 12px;\n  height: 12px;\n  border-top: inherit;\n  border-left: inherit;\n  background-color: inherit;\n  z-index: -1;\n}\n  .vc-popover-caret.direction-bottom {\n    top: 0;\n  }\n  .vc-popover-caret.direction-bottom.align-left {\n      -webkit-transform: translateY(-50%) rotate(45deg);\n              transform: translateY(-50%) rotate(45deg);\n    }\n  .vc-popover-caret.direction-bottom.align-center {\n      -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n              transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    }\n  .vc-popover-caret.direction-bottom.align-right {\n      -webkit-transform: translateY(-50%) rotate(45deg);\n              transform: translateY(-50%) rotate(45deg);\n    }\n  .vc-popover-caret.direction-top {\n    top: 100%;\n  }\n  .vc-popover-caret.direction-top.align-left {\n      -webkit-transform: translateY(-50%) rotate(-135deg);\n              transform: translateY(-50%) rotate(-135deg);\n    }\n  .vc-popover-caret.direction-top.align-center {\n      -webkit-transform: translateX(-50%) translateY(-50%) rotate(-135deg);\n              transform: translateX(-50%) translateY(-50%) rotate(-135deg);\n    }\n  .vc-popover-caret.direction-top.align-right {\n      -webkit-transform: translateY(-50%) rotate(-135deg);\n              transform: translateY(-50%) rotate(-135deg);\n    }\n  .vc-popover-caret.direction-left {\n    left: 100%;\n  }\n  .vc-popover-caret.direction-left.align-top {\n      -webkit-transform: translateX(-50%) rotate(135deg);\n              transform: translateX(-50%) rotate(135deg);\n    }\n  .vc-popover-caret.direction-left.align-middle {\n      -webkit-transform: translateY(-50%) translateX(-50%) rotate(135deg);\n              transform: translateY(-50%) translateX(-50%) rotate(135deg);\n    }\n  .vc-popover-caret.direction-left.align-bottom {\n      -webkit-transform: translateX(-50%) rotate(135deg);\n              transform: translateX(-50%) rotate(135deg);\n    }\n  .vc-popover-caret.direction-right {\n    left: 0;\n  }\n  .vc-popover-caret.direction-right.align-top {\n      -webkit-transform: translateX(-50%) rotate(-45deg);\n              transform: translateX(-50%) rotate(-45deg);\n    }\n  .vc-popover-caret.direction-right.align-middle {\n      -webkit-transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n              transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n    }\n  .vc-popover-caret.direction-right.align-bottom {\n      -webkit-transform: translateX(-50%) rotate(-45deg);\n              transform: translateX(-50%) rotate(-45deg);\n    }\n  .vc-popover-caret.align-left {\n    left: var(--popover-caret-horizontal-offset);\n  }\n  .vc-popover-caret.align-center {\n    left: 50%;\n  }\n  .vc-popover-caret.align-right {\n    right: var(--popover-caret-horizontal-offset);\n  }\n  .vc-popover-caret.align-top {\n    top: var(--popover-caret-vertical-offset);\n  }\n  .vc-popover-caret.align-middle {\n    top: 50%;\n  }\n  .vc-popover-caret.align-bottom {\n    bottom: var(--popover-caret-vertical-offset);\n  }\n";
  styleInject(css_248z$1);

  var maxSwipeTime = 300;
  var minHorizontalSwipeDistance = 60;
  var maxVerticalSwipeDistance = 80;
  var touch = {
  	maxSwipeTime: maxSwipeTime,
  	minHorizontalSwipeDistance: minHorizontalSwipeDistance,
  	maxVerticalSwipeDistance: maxVerticalSwipeDistance
  };

  var title = "MMMM YYYY";
  var weekdays = "W";
  var navMonths = "MMM";
  var input = [
  	"L",
  	"YYYY-MM-DD",
  	"YYYY/MM/DD"
  ];
  var inputDateTime = [
  	"L h:mm A",
  	"YYYY-MM-DD h:mm A",
  	"YYYY/MM/DD h:mm A"
  ];
  var inputDateTime24hr = [
  	"L HH:mm",
  	"YYYY-MM-DD HH:mm",
  	"YYYY/MM/DD HH:mm"
  ];
  var inputTime = [
  	"h:mm A"
  ];
  var inputTime24hr = [
  	"HH:mm"
  ];
  var dayPopover = "WWW, MMM D, YYYY";
  var data = [
  	"L",
  	"YYYY-MM-DD",
  	"YYYY/MM/DD"
  ];
  var model = "iso";
  var iso = "YYYY-MM-DDTHH:mm:ssXXX";
  var masks = {
  	title: title,
  	weekdays: weekdays,
  	navMonths: navMonths,
  	input: input,
  	inputDateTime: inputDateTime,
  	inputDateTime24hr: inputDateTime24hr,
  	inputTime: inputTime,
  	inputTime24hr: inputTime24hr,
  	dayPopover: dayPopover,
  	data: data,
  	model: model,
  	iso: iso
  };

  var sm = "640px";
  var md = "768px";
  var lg = "1024px";
  var xl = "1280px";
  var screens = {
  	sm: sm,
  	md: md,
  	lg: lg,
  	xl: xl
  };

  const locales = {
      // Arabic
      ar: { dow: 7, L: 'D/\u200FM/\u200FYYYY' },
      // Bulgarian
      bg: { dow: 2, L: 'D.MM.YYYY' },
      // Catalan
      ca: { dow: 2, L: 'DD/MM/YYYY' },
      // Chinese (China)
      'zh-CN': { dow: 2, L: 'YYYY/MM/DD' },
      // Chinese (Taiwan)
      'zh-TW': { dow: 1, L: 'YYYY/MM/DD' },
      // Croatian
      hr: { dow: 2, L: 'DD.MM.YYYY' },
      // Czech
      cs: { dow: 2, L: 'DD.MM.YYYY' },
      // Danish
      da: { dow: 2, L: 'DD.MM.YYYY' },
      // Dutch
      nl: { dow: 2, L: 'DD-MM-YYYY' },
      // English (US)
      'en-US': { dow: 1, L: 'MM/DD/YYYY' },
      // English (Australia)
      'en-AU': { dow: 2, L: 'DD/MM/YYYY' },
      // English (Canada)
      'en-CA': { dow: 1, L: 'YYYY-MM-DD' },
      // English (Great Britain)
      'en-GB': { dow: 2, L: 'DD/MM/YYYY' },
      // English (Ireland)
      'en-IE': { dow: 2, L: 'DD-MM-YYYY' },
      // English (New Zealand)
      'en-NZ': { dow: 2, L: 'DD/MM/YYYY' },
      // English (South Africa)
      'en-ZA': { dow: 1, L: 'YYYY/MM/DD' },
      // Esperanto
      eo: { dow: 2, L: 'YYYY-MM-DD' },
      // Estonian
      et: { dow: 2, L: 'DD.MM.YYYY' },
      // Finnish
      fi: { dow: 2, L: 'DD.MM.YYYY' },
      // French
      fr: { dow: 2, L: 'DD/MM/YYYY' },
      // French (Canada)
      'fr-CA': { dow: 1, L: 'YYYY-MM-DD' },
      // French (Switzerland)
      'fr-CH': { dow: 2, L: 'DD.MM.YYYY' },
      // German
      de: { dow: 2, L: 'DD.MM.YYYY' },
      // Hebrew
      he: { dow: 1, L: 'DD.MM.YYYY' },
      // Indonesian
      id: { dow: 2, L: 'DD/MM/YYYY' },
      // Italian
      it: { dow: 2, L: 'DD/MM/YYYY' },
      // Japanese
      ja: { dow: 1, L: 'YYYY年M月D日' },
      // Korean
      ko: { dow: 1, L: 'YYYY.MM.DD' },
      // Latvian
      lv: { dow: 2, L: 'DD.MM.YYYY' },
      // Lithuanian
      lt: { dow: 2, L: 'DD.MM.YYYY' },
      // Macedonian
      mk: { dow: 2, L: 'D.MM.YYYY' },
      // Norwegian
      nb: { dow: 2, L: 'D. MMMM YYYY' },
      nn: { dow: 2, L: 'D. MMMM YYYY' },
      // Polish
      pl: { dow: 2, L: 'DD.MM.YYYY' },
      // Portuguese
      pt: { dow: 2, L: 'DD/MM/YYYY' },
      // Romanian
      ro: { dow: 2, L: 'DD.MM.YYYY' },
      // Russian
      ru: { dow: 2, L: 'DD.MM.YYYY' },
      // Slovak
      sk: { dow: 2, L: 'DD.MM.YYYY' },
      // Spanish (Spain)
      'es-ES': { dow: 2, L: 'DD/MM/YYYY' },
      // Spanish (Mexico)
      'es-MX': { dow: 2, L: 'DD/MM/YYYY' },
      // Swedish
      sv: { dow: 2, L: 'YYYY-MM-DD' },
      // Thai
      th: { dow: 1, L: 'DD/MM/YYYY' },
      // Turkish
      tr: { dow: 2, L: 'DD.MM.YYYY' },
      // Ukrainian
      uk: { dow: 2, L: 'DD.MM.YYYY' },
      // Vietnam
      vi: { dow: 2, L: 'DD/MM/YYYY' },
  };
  locales.en = locales['en-US'];
  locales.es = locales['es-ES'];
  locales.no = locales.nb;
  locales.zh = locales['zh-CN'];
  // Remap from abbr. to intuitive property names
  toPairs_1(locales).forEach(([id, { dow, L }]) => {
      locales[id] = {
          id,
          firstDayOfWeek: dow,
          masks: { L },
      };
  });

  const defaultConfig = {
      componentPrefix: 'v',
      navVisibility: 'click',
      titlePosition: 'center',
      transition: 'slide-h',
      touch,
      masks,
      screens,
      locales,
      datePicker: {
          updateOnInput: true,
          inputDebounce: 1000,
          popover: {
              visibility: 'hover-focus',
              placement: 'bottom-start',
              keepVisibleOnInput: false,
              isInteractive: true,
          },
      },
  };
  const state = vue.reactive({
      didSetup: false,
      defaults: defaultConfig,
  });
  const computedLocales = vue.computed(() => {
      return mapValues_1(state.defaults.locales, (v) => {
          v.masks = defaultsDeep_1(v.masks, state.defaults.masks);
          return v;
      });
  });
  const defaultsMixin = {
      computed: {
          $defaults() {
              return state.defaults;
          },
          $locales() {
              return computedLocales.value;
          },
      },
      methods: {
          propOrDefault(prop, defaultPath, strategy) {
              return this.passedProp(prop, get_1(this.$defaults, defaultPath), strategy);
          },
          passedProp(prop, fallback, strategy) {
              if (has$1(this.$props, prop)) {
                  const propValue = this[prop];
                  if (isObject$1(propValue) && strategy === 'merge') {
                      return defaultsDeep_1(propValue, fallback);
                  }
                  return propValue;
              }
              return fallback;
          },
      },
      created() {
          if (!state.didSetup && window && window.__vcalendar__) {
              state.defaults = defaultsDeep_1(window.__vcalendar__, defaultConfig);
              state.didSetup = true;
          }
      },
  };

  var childMixin = {
    inject: ['sharedState'],
    mixins: [defaultsMixin],
    computed: {
      masks: function masks() {
        return this.sharedState.masks;
      },
      theme: function theme() {
        return this.sharedState.theme;
      },
      locale: function locale() {
        return this.sharedState.locale;
      },
      dayPopoverId: function dayPopoverId() {
        return this.sharedState.dayPopoverId;
      }
    },
    methods: {
      format: function format(date, mask) {
        return this.locale.format(date, mask);
      },
      pageForDate: function pageForDate(date) {
        return this.locale.getDateParts(this.locale.normalizeDate(date));
      }
    }
  };

  var targetProps = ['base', 'start', 'end', 'startEnd'];
  var displayProps = ['class', 'contentClass', 'style', 'contentStyle', 'color', 'fillMode'];
  var defConfig = {
    color: 'blue',
    isDark: false,
    highlight: {
      base: {
        fillMode: 'light'
      },
      start: {
        fillMode: 'solid'
      },
      end: {
        fillMode: 'solid'
      }
    },
    dot: {
      base: {
        fillMode: 'solid'
      },
      start: {
        fillMode: 'solid'
      },
      end: {
        fillMode: 'solid'
      }
    },
    bar: {
      base: {
        fillMode: 'solid'
      },
      start: {
        fillMode: 'solid'
      },
      end: {
        fillMode: 'solid'
      }
    },
    content: {
      base: {},
      start: {},
      end: {}
    }
  };

  var Theme = /*#__PURE__*/function () {
    function Theme(config) {
      _classCallCheck(this, Theme);

      Object.assign(this, defConfig, config);
    } // Normalizes attribute config to the structure defined by the properties


    _createClass(Theme, [{
      key: "normalizeAttr",
      value: function normalizeAttr(_ref) {
        var config = _ref.config,
            type = _ref.type;
        var rootColor = this.color;
        var root = {}; // Get the normalized root config

        var normAttr = this[type];

        if (config === true || isString_1(config)) {
          // Assign default color for booleans or strings
          rootColor = isString_1(config) ? config : rootColor; // Set the default root

          root = _objectSpread2({}, normAttr);
        } else if (isObject$1(config)) {
          if (hasAny(config, targetProps)) {
            // Mixin target configs
            root = _objectSpread2({}, config);
          } else {
            // Mixin display configs
            root = {
              base: _objectSpread2({}, config),
              start: _objectSpread2({}, config),
              end: _objectSpread2({}, config)
            };
          }
        } else {
          return null;
        } // Fill in missing targets


        defaults_1(root, {
          start: root.startEnd,
          end: root.startEnd
        }, normAttr); // Normalize each target

        toPairs_1(root).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              targetType = _ref3[0],
              targetConfig = _ref3[1];

          var targetColor = rootColor;

          if (targetConfig === true || isString_1(targetConfig)) {
            targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
            root[targetType] = {
              color: targetColor
            };
          } else if (isObject$1(targetConfig)) {
            if (hasAny(targetConfig, displayProps)) {
              root[targetType] = _objectSpread2({}, targetConfig);
            } else {
              root[targetType] = {};
            }
          } // Set the theme color if it is missing


          if (!has$1(root, "".concat(targetType, ".color"))) {
            set_1(root, "".concat(targetType, ".color"), targetColor);
          }
        });
        return root;
      }
    }, {
      key: "normalizeHighlight",
      value: function normalizeHighlight(config) {
        var _this = this;

        var highlight = this.normalizeAttr({
          config: config,
          type: 'highlight'
        }); // eslint-disable-next-line @typescript-eslint/no-unused-vars

        toPairs_1(highlight).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              _ = _ref5[0],
              targetConfig = _ref5[1];

          var c = defaults_1(targetConfig, {
            isDark: _this.isDark,
            color: _this.color
          });
          targetConfig.style = _objectSpread2(_objectSpread2({}, _this.getHighlightBgStyle(c)), targetConfig.style);
          targetConfig.contentStyle = _objectSpread2(_objectSpread2({}, _this.getHighlightContentStyle(c)), targetConfig.contentStyle);
        });
        return highlight;
      }
    }, {
      key: "getHighlightBgStyle",
      value: function getHighlightBgStyle(_ref6) {
        var fillMode = _ref6.fillMode,
            color = _ref6.color,
            isDark = _ref6.isDark;

        switch (fillMode) {
          case 'outline':
          case 'none':
            return {
              backgroundColor: isDark ? 'var(--gray-900)' : 'var(--white)',
              border: '2px solid',
              borderColor: isDark ? "var(--".concat(color, "-200)") : "var(--".concat(color, "-700)"),
              borderRadius: 'var(--rounded-full)'
            };

          case 'light':
            return {
              backgroundColor: isDark ? "var(--".concat(color, "-800)") : "var(--".concat(color, "-200)"),
              opacity: isDark ? 0.75 : 1,
              borderRadius: 'var(--rounded-full)'
            };

          case 'solid':
            return {
              backgroundColor: isDark ? "var(--".concat(color, "-500)") : "var(--".concat(color, "-600)"),
              borderRadius: 'var(--rounded-full)'
            };

          default:
            return {
              borderRadius: 'var(--rounded-full)'
            };
        }
      }
    }, {
      key: "getHighlightContentStyle",
      value: function getHighlightContentStyle(_ref7) {
        var fillMode = _ref7.fillMode,
            color = _ref7.color,
            isDark = _ref7.isDark;

        switch (fillMode) {
          case 'outline':
          case 'none':
            return {
              fontWeight: 'var(--font-bold)',
              color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
            };

          case 'light':
            return {
              fontWeight: 'var(--font-bold)',
              color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
            };

          case 'solid':
            return {
              fontWeight: 'var(--font-bold)',
              color: 'var(--white)'
            };

          default:
            return '';
        }
      }
    }, {
      key: "bgAccentHigh",
      value: function bgAccentHigh(_ref8) {
        var color = _ref8.color,
            isDark = _ref8.isDark;
        return {
          backgroundColor: isDark ? "var(--".concat(color, "-500)") : "var(--".concat(color, "-600)")
        };
      }
    }, {
      key: "contentAccent",
      value: function contentAccent(_ref9) {
        var color = _ref9.color,
            isDark = _ref9.isDark;
        if (!color) return null;
        return {
          fontWeight: 'var(--font-bold)',
          color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
        };
      }
    }, {
      key: "normalizeDot",
      value: function normalizeDot(config) {
        return this.normalizeNonHighlight('dot', config, this.bgAccentHigh);
      }
    }, {
      key: "normalizeBar",
      value: function normalizeBar(config) {
        return this.normalizeNonHighlight('bar', config, this.bgAccentHigh);
      }
    }, {
      key: "normalizeContent",
      value: function normalizeContent(config) {
        return this.normalizeNonHighlight('content', config, this.contentAccent);
      }
    }, {
      key: "normalizeNonHighlight",
      value: function normalizeNonHighlight(type, config, styleFn) {
        var _this2 = this;

        var attr = this.normalizeAttr({
          type: type,
          config: config
        }); // eslint-disable-next-line @typescript-eslint/no-unused-vars

        toPairs_1(attr).forEach(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              _ = _ref11[0],
              targetConfig = _ref11[1];

          defaults_1(targetConfig, {
            isDark: _this2.isDark,
            color: _this2.color
          });
          targetConfig.style = _objectSpread2(_objectSpread2({}, styleFn(targetConfig)), targetConfig.style);
        });
        return attr;
      }
    }]);

    return Theme;
  }();

  var MILLISECONDS_IN_MINUTE = 60000;

  function getDateMillisecondsPart(date) {
    return date.getTime() % MILLISECONDS_IN_MINUTE;
  }
  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */


  function getTimezoneOffsetInMilliseconds(dirtyDate) {
    var date = new Date(dirtyDate.getTime());
    var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
    date.setSeconds(0, 0);
    var hasNegativeUTCOffset = baseTimezoneOffset > 0;
    var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
    return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
  }

  /**
   * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
   * `date` as it will be rendered in the `timeZone`.
   */
  function tzTokenizeDate(date, timeZone) {
    var dtf = getDateTimeFormat(timeZone);
    return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date)
  }

  var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };

  function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i = 0; i < formatted.length; i++) {
      var pos = typeToPos[formatted[i].type];

      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled
  }

  function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, '');
    var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
    // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
    // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
    return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]]
  }

  // Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
  // to get deterministic local date/time output according to the `en-US` locale which
  // can be used to extract local time parts as necessary.
  var dtfCache = {};
  function getDateTimeFormat(timeZone) {
    if (!dtfCache[timeZone]) {
      // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
      var testDateFormatted = new Intl.DateTimeFormat('en-US', {
        hour12: false,
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date('2014-06-25T04:00:00.123Z'));
      var hourCycleSupported =
        testDateFormatted === '06/25/2014, 00:00:00' ||
        testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';

      dtfCache[timeZone] = hourCycleSupported
        ? new Intl.DateTimeFormat('en-US', {
            hour12: false,
            timeZone: timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        : new Intl.DateTimeFormat('en-US', {
            hourCycle: 'h23',
            timeZone: timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
    }
    return dtfCache[timeZone]
  }

  var MILLISECONDS_IN_HOUR = 3600000;
  var MILLISECONDS_IN_MINUTE$1 = 60000;

  var patterns = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-])(\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
    timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
  };

  // Parse various time zone offset formats to an offset in milliseconds
  function tzParseTimezone(timezoneString, date) {
    var token;
    var absoluteOffset;

    // Z
    token = patterns.timezoneZ.exec(timezoneString);
    if (token) {
      return 0
    }

    var hours;

    // ±hh
    token = patterns.timezoneHH.exec(timezoneString);
    if (token) {
      hours = parseInt(token[2], 10);

      if (!validateTimezone()) {
        return NaN
      }

      absoluteOffset = hours * MILLISECONDS_IN_HOUR;
      return token[1] === '+' ? -absoluteOffset : absoluteOffset
    }

    // ±hh:mm or ±hhmm
    token = patterns.timezoneHHMM.exec(timezoneString);
    if (token) {
      hours = parseInt(token[2], 10);
      var minutes = parseInt(token[3], 10);

      if (!validateTimezone(hours, minutes)) {
        return NaN
      }

      absoluteOffset =
        hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
      return token[1] === '+' ? -absoluteOffset : absoluteOffset
    }

    // IANA time zone
    token = patterns.timezoneIANA.exec(timezoneString);
    if (token) {
      // var [fYear, fMonth, fDay, fHour, fMinute, fSecond] = tzTokenizeDate(date, timezoneString)
      var tokens = tzTokenizeDate(date, timezoneString);
      var asUTC = Date.UTC(
        tokens[0],
        tokens[1] - 1,
        tokens[2],
        tokens[3],
        tokens[4],
        tokens[5]
      );
      var timestampWithMsZeroed = date.getTime() - (date.getTime() % 1000);
      return -(asUTC - timestampWithMsZeroed)
    }

    return 0
  }

  function validateTimezone(hours, minutes) {
    if (minutes != null && (minutes < 0 || minutes > 59)) {
      return false
    }

    return true
  }

  var MILLISECONDS_IN_HOUR$1 = 3600000;
  var MILLISECONDS_IN_MINUTE$2 = 60000;
  var DEFAULT_ADDITIONAL_DIGITS = 2;

  var patterns$1 = {
    dateTimeDelimeter: /[T ]/,
    plainTime: /:/,
    timeZoneDelimeter: /[Z ]/i,

    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
      /^([+-]\d{2})$/, // 0 additional digits
      /^([+-]\d{3})$/, // 1 additional digit
      /^([+-]\d{4})$/ // 2 additional digits
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
      /^([+-]\d{4})/, // 0 additional digits
      /^([+-]\d{5})/, // 1 additional digit
      /^([+-]\d{6})/ // 2 additional digits
    ],

    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,

    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

    // timezone tokens (to identify the presence of a tz)
    timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
  };

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If an argument is a string, the function tries to parse it.
   * Function accepts complete ISO 8601 formats as well as partial implementations.
   * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
   * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
   *
   * @param {Date|String|Number} argument - the value to convert
   * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
   * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
   * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
   *
   * @example
   * // Convert string '2014-02-11T11:30:30' to date:
   * var result = toDate('2014-02-11T11:30:30')
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert string '+02014101' to date,
   * // if the additional number of digits in the extended year format is 1:
   * var result = toDate('+02014101', {additionalDigits: 1})
   * //=> Fri Apr 11 2014 00:00:00
   */
  function toDate$1(argument, dirtyOptions) {
    if (arguments.length < 1) {
      throw new TypeError(
        '1 argument required, but only ' + arguments.length + ' present'
      )
    }

    if (argument === null) {
      return new Date(NaN)
    }

    var options = dirtyOptions || {};

    var additionalDigits =
      options.additionalDigits == null
        ? DEFAULT_ADDITIONAL_DIGITS
        : toInteger(options.additionalDigits);
    if (
      additionalDigits !== 2 &&
      additionalDigits !== 1 &&
      additionalDigits !== 0
    ) {
      throw new RangeError('additionalDigits must be 0, 1 or 2')
    }

    // Clone the date
    if (
      argument instanceof Date ||
      (typeof argument === 'object' &&
        Object.prototype.toString.call(argument) === '[object Date]')
    ) {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime())
    } else if (
      typeof argument === 'number' ||
      Object.prototype.toString.call(argument) === '[object Number]'
    ) {
      return new Date(argument)
    } else if (
      !(
        typeof argument === 'string' ||
        Object.prototype.toString.call(argument) === '[object String]'
      )
    ) {
      return new Date(NaN)
    }

    var dateStrings = splitDateString(argument);

    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    var year = parseYearResult.year;
    var restDateString = parseYearResult.restDateString;

    var date = parseDate(restDateString, year);

    if (isNaN(date)) {
      return new Date(NaN)
    }

    if (date) {
      var timestamp = date.getTime();
      var time = 0;
      var offset;

      if (dateStrings.time) {
        time = parseTime(dateStrings.time);

        if (isNaN(time)) {
          return new Date(NaN)
        }
      }

      if (dateStrings.timezone || options.timeZone) {
        offset = tzParseTimezone(
          dateStrings.timezone || options.timeZone,
          new Date(timestamp + time)
        );
        if (isNaN(offset)) {
          return new Date(NaN)
        }
        offset = tzParseTimezone(
          dateStrings.timezone || options.timeZone,
          new Date(timestamp + time + offset)
        );
        if (isNaN(offset)) {
          return new Date(NaN)
        }
      } else {
        // get offset accurate to hour in timezones that change offset
        offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
        offset = getTimezoneOffsetInMilliseconds(
          new Date(timestamp + time + offset)
        );
      }

      return new Date(timestamp + time + offset)
    } else {
      return new Date(NaN)
    }
  }

  function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns$1.dateTimeDelimeter);
    var timeString;

    if (patterns$1.plainTime.test(array[0])) {
      dateStrings.date = null;
      timeString = array[0];
    } else {
      dateStrings.date = array[0];
      timeString = array[1];
      dateStrings.timezone = array[2];
      if (patterns$1.timeZoneDelimeter.test(dateStrings.date)) {
        dateStrings.date = dateString.split(patterns$1.timeZoneDelimeter)[0];
        timeString = dateString.substr(dateStrings.date.length, dateString.length);
      }
    }

    if (timeString) {
      var token = patterns$1.timezone.exec(timeString);
      if (token) {
        dateStrings.time = timeString.replace(token[1], '');
        dateStrings.timezone = token[1];
      } else {
        dateStrings.time = timeString;
      }
    }

    return dateStrings
  }

  function parseYear(dateString, additionalDigits) {
    var patternYYY = patterns$1.YYY[additionalDigits];
    var patternYYYYY = patterns$1.YYYYY[additionalDigits];

    var token;

    // YYYY or ±YYYYY
    token = patterns$1.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
      var yearString = token[1];
      return {
        year: parseInt(yearString, 10),
        restDateString: dateString.slice(yearString.length)
      }
    }

    // YY or ±YYY
    token = patterns$1.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
      var centuryString = token[1];
      return {
        year: parseInt(centuryString, 10) * 100,
        restDateString: dateString.slice(centuryString.length)
      }
    }

    // Invalid ISO-formatted year
    return {
      year: null
    }
  }

  function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) {
      return null
    }

    var token;
    var date;
    var month;
    var week;

    // YYYY
    if (dateString.length === 0) {
      date = new Date(0);
      date.setUTCFullYear(year);
      return date
    }

    // YYYY-MM
    token = patterns$1.MM.exec(dateString);
    if (token) {
      date = new Date(0);
      month = parseInt(token[1], 10) - 1;

      if (!validateDate(year, month)) {
        return new Date(NaN)
      }

      date.setUTCFullYear(year, month);
      return date
    }

    // YYYY-DDD or YYYYDDD
    token = patterns$1.DDD.exec(dateString);
    if (token) {
      date = new Date(0);
      var dayOfYear = parseInt(token[1], 10);

      if (!validateDayOfYearDate(year, dayOfYear)) {
        return new Date(NaN)
      }

      date.setUTCFullYear(year, 0, dayOfYear);
      return date
    }

    // yyyy-MM-dd or YYYYMMDD
    token = patterns$1.MMDD.exec(dateString);
    if (token) {
      date = new Date(0);
      month = parseInt(token[1], 10) - 1;
      var day = parseInt(token[2], 10);

      if (!validateDate(year, month, day)) {
        return new Date(NaN)
      }

      date.setUTCFullYear(year, month, day);
      return date
    }

    // YYYY-Www or YYYYWww
    token = patterns$1.Www.exec(dateString);
    if (token) {
      week = parseInt(token[1], 10) - 1;

      if (!validateWeekDate(year, week)) {
        return new Date(NaN)
      }

      return dayOfISOWeekYear(year, week)
    }

    // YYYY-Www-D or YYYYWwwD
    token = patterns$1.WwwD.exec(dateString);
    if (token) {
      week = parseInt(token[1], 10) - 1;
      var dayOfWeek = parseInt(token[2], 10) - 1;

      if (!validateWeekDate(year, week, dayOfWeek)) {
        return new Date(NaN)
      }

      return dayOfISOWeekYear(year, week, dayOfWeek)
    }

    // Invalid ISO-formatted date
    return null
  }

  function parseTime(timeString) {
    var token;
    var hours;
    var minutes;

    // hh
    token = patterns$1.HH.exec(timeString);
    if (token) {
      hours = parseFloat(token[1].replace(',', '.'));

      if (!validateTime(hours)) {
        return NaN
      }

      return (hours % 24) * MILLISECONDS_IN_HOUR$1
    }

    // hh:mm or hhmm
    token = patterns$1.HHMM.exec(timeString);
    if (token) {
      hours = parseInt(token[1], 10);
      minutes = parseFloat(token[2].replace(',', '.'));

      if (!validateTime(hours, minutes)) {
        return NaN
      }

      return (
        (hours % 24) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2
      )
    }

    // hh:mm:ss or hhmmss
    token = patterns$1.HHMMSS.exec(timeString);
    if (token) {
      hours = parseInt(token[1], 10);
      minutes = parseInt(token[2], 10);
      var seconds = parseFloat(token[3].replace(',', '.'));

      if (!validateTime(hours, minutes, seconds)) {
        return NaN
      }

      return (
        (hours % 24) * MILLISECONDS_IN_HOUR$1 +
        minutes * MILLISECONDS_IN_MINUTE$2 +
        seconds * 1000
      )
    }

    // Invalid ISO-formatted time
    return null
  }

  function dayOfISOWeekYear(isoWeekYear, week, day) {
    week = week || 0;
    day = day || 0;
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date
  }

  // Validation functions

  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function isLeapYearIndex(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  }

  function validateDate(year, month, date) {
    if (month < 0 || month > 11) {
      return false
    }

    if (date != null) {
      if (date < 1) {
        return false
      }

      var isLeapYear = isLeapYearIndex(year);
      if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
        return false
      }
      if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
        return false
      }
    }

    return true
  }

  function validateDayOfYearDate(year, dayOfYear) {
    if (dayOfYear < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && dayOfYear > 366) {
      return false
    }
    if (!isLeapYear && dayOfYear > 365) {
      return false
    }

    return true
  }

  function validateWeekDate(year, week, day) {
    if (week < 0 || week > 52) {
      return false
    }

    if (day != null && (day < 0 || day > 6)) {
      return false
    }

    return true
  }

  function validateTime(hours, minutes, seconds) {
    if (hours != null && (hours < 0 || hours >= 25)) {
      return false
    }

    if (minutes != null && (minutes < 0 || minutes >= 60)) {
      return false
    }

    if (seconds != null && (seconds < 0 || seconds >= 60)) {
      return false
    }

    return true
  }

  var millisecondsPerDay = 24 * 60 * 60 * 1000;

  var DateInfo = /*#__PURE__*/function () {
    function DateInfo(config) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$order = _ref.order,
          order = _ref$order === void 0 ? 0 : _ref$order,
          locale = _ref.locale,
          isFullDay = _ref.isFullDay;

      _classCallCheck(this, DateInfo);

      this.isDateInfo = true;
      this.order = order;
      this.locale = locale instanceof Locale ? locale : new Locale(locale);
      this.firstDayOfWeek = this.locale.firstDayOfWeek; // Adjust config for simple dates

      if (!isObject$1(config)) {
        var date = this.locale.normalizeDate(config);

        if (isFullDay) {
          config = {
            start: date,
            end: date
          };
        } else {
          config = {
            startOn: date,
            endOn: date
          };
        }
      }

      var start = null;
      var end = null;

      if (config.start) {
        start = this.locale.normalizeDate(config.start, _objectSpread2(_objectSpread2({}, this.opts), {}, {
          time: '00:00:00'
        }));
      } else if (config.startOn) {
        start = this.locale.normalizeDate(config.startOn, this.opts);
      }

      if (config.end) {
        end = this.locale.normalizeDate(config.end, _objectSpread2(_objectSpread2({}, this.opts), {}, {
          time: '23:59:59'
        }));
      } else if (config.endOn) {
        end = this.locale.normalizeDate(config.endOn, this.opts);
      } // Reconfigure start and end dates if needed


      if (start && end && start > end) {
        var temp = start;
        start = end;
        end = temp;
      } else if (start && config.span >= 1) {
        end = addDays(start, config.span - 1);
      } // Assign start and end dates


      this.start = start;
      this.startTime = start ? start.getTime() : NaN;
      this.end = end;
      this.endTime = end ? end.getTime() : NaN;
      this.isDate = this.startTime && this.startTime === this.endTime;
      this.isRange = !this.isDate; // Assign 'and' condition

      var andOpt = mixinOptionalProps(config, {}, DateInfo.patternProps);

      if (andOpt.assigned) {
        this.on = {
          and: andOpt.target
        };
      } // Assign 'or' conditions


      if (config.on) {
        var or = (isArrayLikeObject_1(config.on) ? config.on : [config.on]).map(function (o) {
          if (isFunction_1(o)) return o;
          var opt = mixinOptionalProps(o, {}, DateInfo.patternProps);
          return opt.assigned ? opt.target : null;
        }).filter(function (o) {
          return o;
        });
        if (or.length) this.on = _objectSpread2(_objectSpread2({}, this.on), {}, {
          or: or
        });
      } // Assign flag if date is complex


      this.isComplex = !!this.on;
    }

    _createClass(DateInfo, [{
      key: "toDateInfo",
      value: function toDateInfo(date) {
        return date.isDateInfo ? date : new DateInfo(date, this.opts);
      }
    }, {
      key: "startOfWeek",
      value: function startOfWeek(date) {
        var day = date.getDay() + 1;
        var daysToAdd = day >= this.firstDayOfWeek ? this.firstDayOfWeek - day : -(7 - (this.firstDayOfWeek - day));
        return addDays(date, daysToAdd);
      }
    }, {
      key: "diffInDays",
      value: function diffInDays(d1, d2) {
        return Math.round((d2 - d1) / millisecondsPerDay);
      }
    }, {
      key: "diffInWeeks",
      value: function diffInWeeks(d1, d2) {
        return this.diffInDays(this.startOfWeek(d1), this.startOfWeek(d2));
      }
    }, {
      key: "diffInYears",
      value: function diffInYears(d1, d2) {
        return d2.getUTCFullYear() - d1.getUTCFullYear();
      }
    }, {
      key: "diffInMonths",
      value: function diffInMonths(d1, d2) {
        return this.diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
      }
    }, {
      key: "iterateDatesInRange",
      value: function iterateDatesInRange(_ref2, fn) {
        var start = _ref2.start,
            end = _ref2.end;
        if (!start || !end || !isFunction_1(fn)) return null;
        start = this.locale.normalizeDate(start, _objectSpread2(_objectSpread2({}, this.opts), {}, {
          time: '00:00:00'
        }));
        var state = {
          i: 0,
          date: start,
          day: this.locale.getDateParts(start),
          finished: false
        };
        var result = null;

        for (; !state.finished && state.date <= end; state.i++) {
          result = fn(state);
          state.date = addDays(state.date, 1);
          state.day = this.locale.getDateParts(state.date);
        }

        return result;
      }
    }, {
      key: "shallowIntersectingRange",
      value: function shallowIntersectingRange(other) {
        return this.rangeShallowIntersectingRange(this, this.toDateInfo(other));
      } // Returns a date range that intersects two DateInfo objects
      // NOTE: This is a shallow calculation (does not take patterns into account),
      //   so this method should only really be called for special conditions
      //   where absolute accuracy is not necessarily needed

    }, {
      key: "rangeShallowIntersectingRange",
      value: function rangeShallowIntersectingRange(date1, date2) {
        if (!this.dateShallowIntersectsDate(date1, date2)) {
          return null;
        }

        var thisRange = date1.toRange();
        var otherRange = date2.toRange(); // Start with infinite start and end dates

        var start = null;
        var end = null; // This start date exists

        if (thisRange.start) {
          // Use this definite start date if other start date is infinite
          if (!otherRange.start) {
            start = thisRange.start;
          } else {
            // Otherwise, use the latest start date
            start = thisRange.start > otherRange.start ? thisRange.start : otherRange.start;
          } // Other start date exists

        } else if (otherRange.start) {
          // Use other definite start date as this one is infinite
          start = otherRange.start;
        } // This end date exists


        if (thisRange.end) {
          // Use this definite end date if other end date is infinite
          if (!otherRange.end) {
            end = thisRange.end;
          } else {
            // Otherwise, use the earliest end date
            end = thisRange.end < otherRange.end ? thisRange.end : otherRange.end;
          } // Other end date exists

        } else if (otherRange.end) {
          // Use other definite end date as this one is infinite
          end = otherRange.end;
        } // Return calculated range


        return {
          start: start,
          end: end
        };
      } // ========================================================
      // Determines if this date partially intersects another date
      // NOTE: This is a deep test (patterns tested)

    }, {
      key: "intersectsDate",
      value: function intersectsDate(other) {
        var _this = this;

        var date = this.toDateInfo(other);
        if (!this.shallowIntersectsDate(date)) return null;
        if (!this.on) return this;
        var range = this.rangeShallowIntersectingRange(this, date);
        var result = false;
        this.iterateDatesInRange(range, function (state) {
          if (_this.matchesDay(state.day)) {
            result = result || date.matchesDay(state.day);
            state.finished = result;
          }
        });
        return result;
      } // ========================================================
      // Determines if this date partially intersects another date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "shallowIntersectsDate",
      value: function shallowIntersectsDate(other) {
        return this.dateShallowIntersectsDate(this, this.toDateInfo(other));
      } // ========================================================
      // Determines if first date partially intersects second date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "dateShallowIntersectsDate",
      value: function dateShallowIntersectsDate(date1, date2) {
        if (date1.isDate) {
          return date2.isDate ? date1.startTime === date2.startTime : this.dateShallowIncludesDate(date2, date1);
        }

        if (date2.isDate) {
          return this.dateShallowIncludesDate(date1, date2);
        } // Both ranges


        if (date1.start && date2.end && date1.start > date2.end) {
          return false;
        }

        if (date1.end && date2.start && date1.end < date2.start) {
          return false;
        }

        return true;
      } // ========================================================
      // Determines if this date completely includes another date
      // NOTE: This is a deep test (patterns tested)

    }, {
      key: "includesDate",
      value: function includesDate(other) {
        var _this2 = this;

        var date = this.toDateInfo(other);

        if (!this.shallowIncludesDate(date)) {
          return false;
        }

        if (!this.on) {
          return true;
        }

        var range = this.rangeShallowIntersectingRange(this, date);
        var result = true;
        this.iterateDatesInRange(range, function (state) {
          if (_this2.matchesDay(state.day)) {
            result = result && date.matchesDay(state.day);
            state.finished = !result;
          }
        });
        return result;
      } // ========================================================
      // Determines if this date completely includes another date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "shallowIncludesDate",
      value: function shallowIncludesDate(other) {
        return this.dateShallowIncludesDate(this, other.isDate ? other : new DateInfo(other, this.opts));
      } // ========================================================
      // Determines if first date completely includes second date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "dateShallowIncludesDate",
      value: function dateShallowIncludesDate(date1, date2) {
        // First date is simple date
        if (date1.isDate) {
          if (date2.isDate) {
            return date1.startTime === date2.startTime;
          }

          if (!date2.startTime || !date2.endTime) {
            return false;
          }

          return date1.startTime === date2.startTime && date1.startTime === date2.endTime;
        } // Second date is simple date and first is date range


        if (date2.isDate) {
          if (date1.start && date2.start < date1.start) {
            return false;
          }

          if (date1.end && date2.start > date1.end) {
            return false;
          }

          return true;
        } // Both dates are date ranges


        if (date1.start && (!date2.start || date2.start < date1.start)) {
          return false;
        }

        if (date1.end && (!date2.end || date2.end > date1.end)) {
          return false;
        }

        return true;
      }
    }, {
      key: "intersectsDay",
      value: function intersectsDay(day) {
        // Date is outside general range - return null
        if (!this.shallowIntersectsDate(day.range)) return null; // Return this date if patterns match

        return this.matchesDay(day) ? this : null;
      }
    }, {
      key: "matchesDay",
      value: function matchesDay(day) {
        var _this3 = this;

        // No patterns to test
        if (!this.on) return true; // Fail if 'and' condition fails

        if (this.on.and && !DateInfo.testConfig(this.on.and, day, this)) {
          return false;
        } // Fail if every 'or' condition fails


        if (this.on.or && !this.on.or.some(function (or) {
          return DateInfo.testConfig(or, day, _this3);
        })) {
          return false;
        } // Patterns match


        return true;
      }
    }, {
      key: "toRange",
      value: function toRange() {
        return new DateInfo({
          start: this.start,
          end: this.end
        }, this.opts);
      } // Build the 'compare to other' function

    }, {
      key: "compare",
      value: function compare(other) {
        if (this.order !== other.order) return this.order - other.order;
        if (this.isDate !== other.isDate) return this.isDate ? 1 : -1;
        if (this.isDate) return 0;
        var diff = this.start - other.start;
        return diff !== 0 ? diff : this.end - other.end;
      }
    }, {
      key: "opts",
      get: function get() {
        return {
          order: this.order,
          locale: this.locale
        };
      }
    }], [{
      key: "testConfig",
      value: function testConfig(config, day, dateInfo) {
        if (isFunction_1(config)) return config(day);

        if (isObject$1(config)) {
          return Object.keys(config).every(function (k) {
            return DateInfo.patterns[k].test(day, config[k], dateInfo);
          });
        }

        return null;
      }
    }, {
      key: "patterns",
      get: function get() {
        return {
          dailyInterval: {
            test: function test(day, interval, di) {
              return di.diffInDays(di.start || new Date(), day.date) % interval === 0;
            }
          },
          weeklyInterval: {
            test: function test(day, interval, di) {
              return di.diffInWeeks(di.start || new Date(), day.date) % interval === 0;
            }
          },
          monthlyInterval: {
            test: function test(day, interval, di) {
              return di.diffInMonths(di.start || new Date(), day.date) % interval === 0;
            }
          },
          yearlyInterval: {
            test: function test() {
              return function (day, interval, di) {
                return di.diffInYears(di.start || new Date(), day.date) % interval === 0;
              };
            }
          },
          days: {
            validate: function validate(days) {
              return isArrayLikeObject_1(days) ? days : [parseInt(days, 10)];
            },
            test: function test(day, days) {
              return days.includes(day.day) || days.includes(-day.dayFromEnd);
            }
          },
          weekdays: {
            validate: function validate(weekdays) {
              return isArrayLikeObject_1(weekdays) ? weekdays : [parseInt(weekdays, 10)];
            },
            test: function test(day, weekdays) {
              return weekdays.includes(day.weekday);
            }
          },
          ordinalWeekdays: {
            validate: function validate(ordinalWeekdays) {
              return Object.keys(ordinalWeekdays).reduce(function (obj, ck) {
                var weekdays = ordinalWeekdays[ck];
                if (!weekdays) return obj;
                obj[ck] = isArrayLikeObject_1(weekdays) ? weekdays : [parseInt(weekdays, 10)];
                return obj;
              }, {});
            },
            test: function test(day, ordinalWeekdays) {
              return Object.keys(ordinalWeekdays).map(function (k) {
                return parseInt(k, 10);
              }).find(function (k) {
                return ordinalWeekdays[k].includes(day.weekday) && (k === day.weekdayOrdinal || k === -day.weekdayOrdinalFromEnd);
              });
            }
          },
          weekends: {
            validate: function validate(config) {
              return config;
            },
            test: function test(day) {
              return day.weekday === 1 || day.weekday === 7;
            }
          },
          workweek: {
            validate: function validate(config) {
              return config;
            },
            test: function test(day) {
              return day.weekday >= 2 && day.weekday <= 6;
            }
          },
          weeks: {
            validate: function validate(weeks) {
              return isArrayLikeObject_1(weeks) ? weeks : [parseInt(weeks, 10)];
            },
            test: function test(day, weeks) {
              return weeks.includes(day.week) || weeks.includes(-day.weekFromEnd);
            }
          },
          months: {
            validate: function validate(months) {
              return isArrayLikeObject_1(months) ? months : [parseInt(months, 10)];
            },
            test: function test(day, months) {
              return months.includes(day.month);
            }
          },
          years: {
            validate: function validate(years) {
              return isArrayLikeObject_1(years) ? years : [parseInt(years, 10)];
            },
            test: function test(day, years) {
              return years.includes(day.year);
            }
          }
        };
      }
    }, {
      key: "patternProps",
      get: function get() {
        return Object.keys(DateInfo.patterns).map(function (k) {
          return {
            name: k,
            validate: DateInfo.patterns[k].validate
          };
        });
      }
    }]);

    return DateInfo;
  }();

  var token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|X{1,3}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm; // eslint-disable-next-line @typescript-eslint/no-empty-function

  var noop = function noop() {};

  var monthUpdate = function monthUpdate(arrName) {
    return function (d, v, l) {
      var index = l[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

      if (~index) {
        d.month = index;
      }
    };
  };

  var maskMacros = ['L', 'iso'];
  var daysInWeek = 7;
  var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var formatFlags = {
    D: function D(d) {
      return d.day;
    },
    DD: function DD(d) {
      return pad(d.day);
    },
    Do: function Do(d, l) {
      return l.DoFn(d.day);
    },
    d: function d(_d) {
      return _d.weekday - 1;
    },
    dd: function dd(d) {
      return pad(d.weekday - 1);
    },
    W: function W(d, l) {
      return l.dayNamesNarrow[d.weekday - 1];
    },
    WW: function WW(d, l) {
      return l.dayNamesShorter[d.weekday - 1];
    },
    WWW: function WWW(d, l) {
      return l.dayNamesShort[d.weekday - 1];
    },
    WWWW: function WWWW(d, l) {
      return l.dayNames[d.weekday - 1];
    },
    M: function M(d) {
      return d.month;
    },
    MM: function MM(d) {
      return pad(d.month);
    },
    MMM: function MMM(d, l) {
      return l.monthNamesShort[d.month - 1];
    },
    MMMM: function MMMM(d, l) {
      return l.monthNames[d.month - 1];
    },
    YY: function YY(d) {
      return String(d.year).substr(2);
    },
    YYYY: function YYYY(d) {
      return pad(d.year, 4);
    },
    h: function h(d) {
      return d.hours % 12 || 12;
    },
    hh: function hh(d) {
      return pad(d.hours % 12 || 12);
    },
    H: function H(d) {
      return d.hours;
    },
    HH: function HH(d) {
      return pad(d.hours);
    },
    m: function m(d) {
      return d.minutes;
    },
    mm: function mm(d) {
      return pad(d.minutes);
    },
    s: function s(d) {
      return d.seconds;
    },
    ss: function ss(d) {
      return pad(d.seconds);
    },
    S: function S(d) {
      return Math.round(d.milliseconds / 100);
    },
    SS: function SS(d) {
      return pad(Math.round(d.milliseconds / 10), 2);
    },
    SSS: function SSS(d) {
      return pad(d.milliseconds, 3);
    },
    a: function a(d, l) {
      return d.hours < 12 ? l.amPm[0] : l.amPm[1];
    },
    A: function A(d, l) {
      return d.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
    },
    X: function X(d) {
      var o = d.timezoneOffset;
      return "".concat(o > 0 ? '-' : '+').concat(pad(Math.floor(Math.abs(o) / 60), 2));
    },
    XX: function XX(d) {
      var o = d.timezoneOffset;
      return "".concat(o > 0 ? '-' : '+').concat(pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4));
    },
    XXX: function XXX(d) {
      var o = d.timezoneOffset;
      return "".concat(o > 0 ? '-' : '+').concat(pad(Math.floor(Math.abs(o) / 60), 2), ":").concat(pad(Math.abs(o) % 60, 2));
    }
  };
  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    d: [twoDigits, noop],
    W: [word, noop],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    YY: [twoDigits, function (d, v) {
      var da = new Date();
      var cent = +da.getFullYear().toString().substr(0, 2);
      d.year = "".concat(v > 68 ? cent - 1 : cent).concat(v);
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    a: [word, function (d, v, l) {
      var val = v.toLowerCase();

      if (val === l.amPm[0]) {
        d.isPm = false;
      } else if (val === l.amPm[1]) {
        d.isPm = true;
      }
    }],
    X: [/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = "".concat(v).match(/([+-]|\d\d)/gi);

      if (parts) {
        var minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.DD = parseFlags.D;
  parseFlags.dd = parseFlags.d;
  parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
  parseFlags.MM = parseFlags.M;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;
  parseFlags.XXX = parseFlags.XX = parseFlags.X;
  function resolveConfig(config, locales) {
    // Get the detected locale string
    var detLocale = new Intl.DateTimeFormat().resolvedOptions().locale; // Resolve the locale id

    var id;

    if (isString_1(config)) {
      id = config;
    } else if (has$1(config, 'id')) {
      id = config.id;
    }

    id = (id || detLocale).toLowerCase();
    var localeKeys = Object.keys(locales);

    var validKey = function validKey(k) {
      return localeKeys.find(function (lk) {
        return lk.toLowerCase() === k;
      });
    };

    id = validKey(id) || validKey(id.substring(0, 2)) || detLocale; // Add fallback and spread default locale to prevent repetitive update loops

    var defLocale = _objectSpread2(_objectSpread2(_objectSpread2({}, locales['en-IE']), locales[id]), {}, {
      id: id
    }); // Assign or merge defaults with provided config


    config = isObject$1(config) ? defaultsDeep_1(config, defLocale) : defLocale; // Return resolved config

    return config;
  }

  var Locale = /*#__PURE__*/function () {
    function Locale(config) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$locales = _ref.locales,
          locales$1 = _ref$locales === void 0 ? locales : _ref$locales,
          timezone = _ref.timezone;

      _classCallCheck(this, Locale);

      var _resolveConfig = resolveConfig(config, locales$1),
          id = _resolveConfig.id,
          firstDayOfWeek = _resolveConfig.firstDayOfWeek,
          masks = _resolveConfig.masks;

      this.id = id;
      this.firstDayOfWeek = clamp_1(firstDayOfWeek, 1, daysInWeek);
      this.masks = masks;
      this.timezone = timezone || undefined;
      this.dayNames = this.getDayNames('long');
      this.dayNamesShort = this.getDayNames('short');
      this.dayNamesShorter = this.dayNamesShort.map(function (s) {
        return s.substring(0, 2);
      });
      this.dayNamesNarrow = this.getDayNames('narrow');
      this.monthNames = this.getMonthNames('long');
      this.monthNamesShort = this.getMonthNames('short');
      this.amPm = ['am', 'pm'];
      this.monthData = {}; // Bind methods

      this.getMonthComps = this.getMonthComps.bind(this);
      this.parse = this.parse.bind(this);
      this.format = this.format.bind(this);
      this.toPage = this.toPage.bind(this);
    }

    _createClass(Locale, [{
      key: "format",
      value: function format(date, mask) {
        var _this = this;

        date = this.normalizeDate(date);
        if (!date) return '';
        mask = this.normalizeMasks(mask)[0];
        var literals = []; // Make literals inactive by replacing them with ??

        mask = mask.replace(literal, function ($0, $1) {
          literals.push($1);
          return '??';
        }); // Apply formatting rules

        mask = mask.replace(token, function ($0) {
          return $0 in formatFlags ? formatFlags[$0](_this.getDateParts(date), _this) : $0.slice(1, $0.length - 1);
        }); // Inline literal values back into the formatted value

        return mask.replace(/\?\?/g, function () {
          return literals.shift();
        });
      }
    }, {
      key: "parse",
      value: function parse(dateString, mask) {
        var _this2 = this;

        var masks = this.normalizeMasks(mask);
        return masks.map(function (m) {
          if (typeof m !== 'string') {
            throw new Error('Invalid mask in fecha.parse');
          } // Reset string value


          var str = dateString; // Avoid regular expression denial of service, fail early for really long strings
          // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

          if (str.length > 1000) {
            return false;
          }

          var isValid = true;
          var dateInfo = {};
          m.replace(token, function ($0) {
            if (parseFlags[$0]) {
              var info = parseFlags[$0];
              var index = str.search(info[0]);

              if (!~index) {
                isValid = false;
              } else {
                str.replace(info[0], function (result) {
                  info[1](dateInfo, result, _this2);
                  str = str.substr(index + result.length);
                  return result;
                });
              }
            }

            return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
          });

          if (!isValid) {
            return false;
          }

          var today = new Date();

          if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
            dateInfo.hour = +dateInfo.hour + 12;
          } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
            dateInfo.hour = 0;
          }

          var date;

          if (dateInfo.timezoneOffset != null) {
            dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
            date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
          } else {
            date = _this2.getDateFromParts({
              year: dateInfo.year || today.getFullYear(),
              month: (dateInfo.month || 0) + 1,
              day: dateInfo.day || 1,
              hours: dateInfo.hour || 0,
              minutes: dateInfo.minute || 0,
              seconds: dateInfo.second || 0,
              milliseconds: dateInfo.millisecond || 0
            });
          }

          return date;
        }).find(function (d) {
          return d;
        }) || new Date(dateString);
      } // Normalizes mask(s) as an array with replaced mask macros

    }, {
      key: "normalizeMasks",
      value: function normalizeMasks(masks) {
        var _this3 = this;

        return (arrayHasItems(masks) && masks || [isString_1(masks) && masks || 'YYYY-MM-DD']).map(function (m) {
          return maskMacros.reduce(function (prev, curr) {
            return prev.replace(curr, _this3.masks[curr] || '');
          }, m);
        });
      }
    }, {
      key: "normalizeDate",
      value: function normalizeDate(d) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var result = null;
        var type = config.type;
        var auto = type === 'auto' || !type;

        if (isNumber_1(d)) {
          type = 'number';
          result = new Date(+d);
        } else if (isString_1(d)) {
          type = 'string';
          var mask = config.mask || 'iso';
          result = d ? this.parse(d, mask) : null;
        } else if (isObject$1(d)) {
          type = 'object';
          result = this.getDateFromParts(d);
        } else {
          type = 'date';
          result = isDate$1(d) ? new Date(d.getTime()) : null;
        }

        if (auto) config.type = type;

        if (result && !isNaN(result.getTime())) {
          if (config.time) {
            result = this.adjustTimeForDate(result, {
              timeAdjust: config.time
            });
          }

          return result;
        }

        return null;
      }
    }, {
      key: "denormalizeDate",
      value: function denormalizeDate(date) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            type = _ref2.type,
            mask = _ref2.mask;

        switch (type) {
          case 'number':
            return date ? date.getTime() : NaN;

          case 'string':
            return date ? this.format(date, mask || 'iso') : '';

          default:
            return date ? new Date(date) : null;
        }
      }
    }, {
      key: "adjustTimeForDate",
      value: function adjustTimeForDate(date, _ref3) {
        var timeAdjust = _ref3.timeAdjust;

        if (timeAdjust) {
          var dateParts = this.getDateParts(date);

          if (timeAdjust === 'now') {
            var timeParts = this.getDateParts(new Date());
            dateParts.hours = timeParts.hours;
            dateParts.minutes = timeParts.minutes;
            dateParts.seconds = timeParts.seconds;
            dateParts.milliseconds = timeParts.milliseconds;
          } else {
            var d = new Date("2000-01-01T".concat(timeAdjust));
            dateParts.hours = d.getHours();
            dateParts.minutes = d.getMinutes();
            dateParts.seconds = d.getSeconds();
            dateParts.milliseconds = d.getMilliseconds();
          }

          date = this.getDateFromParts(dateParts);
        }

        return date;
      }
    }, {
      key: "normalizeDates",
      value: function normalizeDates(dates, opts) {
        opts = opts || {};
        opts.locale = this; // Assign dates

        return (isArrayLikeObject_1(dates) ? dates : [dates]).map(function (d) {
          return d && (d instanceof DateInfo ? d : new DateInfo(d, opts));
        }).filter(function (d) {
          return d;
        });
      }
    }, {
      key: "getDateParts",
      value: function getDateParts(date) {
        if (!date) return null;
        var tzDate = date;

        if (this.timezone) {
          var normDate = new Date(date.toLocaleString('en-US', {
            timeZone: this.timezone
          }));
          normDate.setMilliseconds(date.getMilliseconds);
          var diff = normDate.getTime() - date.getTime();
          tzDate = new Date(date.getTime() + diff);
        }

        var milliseconds = tzDate.getMilliseconds();
        var seconds = tzDate.getSeconds();
        var minutes = tzDate.getMinutes();
        var hours = tzDate.getHours();
        var month = tzDate.getMonth() + 1;
        var year = tzDate.getFullYear();
        var comps = this.getMonthComps(month, year);
        var day = tzDate.getDate();
        var dayFromEnd = comps.days - day + 1;
        var weekday = tzDate.getDay() + 1;
        var weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
        var weekdayOrdinalFromEnd = Math.floor((comps.days - day) / 7 + 1);
        var week = Math.ceil((day + Math.abs(comps.firstWeekday - comps.firstDayOfWeek)) / 7);
        var weekFromEnd = comps.weeks - week + 1;
        var parts = {
          milliseconds: milliseconds,
          seconds: seconds,
          minutes: minutes,
          hours: hours,
          day: day,
          dayFromEnd: dayFromEnd,
          weekday: weekday,
          weekdayOrdinal: weekdayOrdinal,
          weekdayOrdinalFromEnd: weekdayOrdinalFromEnd,
          week: week,
          weekFromEnd: weekFromEnd,
          month: month,
          year: year,
          date: date,
          isValid: true
        };
        parts.timezoneOffset = this.getTimezoneOffset(parts);
        return parts;
      }
    }, {
      key: "getDateFromParts",
      value: function getDateFromParts(parts) {
        if (!parts) return null;
        var y = parts.year,
            m = parts.month,
            d = parts.day,
            _parts$hours = parts.hours,
            hrs = _parts$hours === void 0 ? 0 : _parts$hours,
            _parts$minutes = parts.minutes,
            min = _parts$minutes === void 0 ? 0 : _parts$minutes,
            _parts$seconds = parts.seconds,
            sec = _parts$seconds === void 0 ? 0 : _parts$seconds,
            _parts$milliseconds = parts.milliseconds,
            ms = _parts$milliseconds === void 0 ? 0 : _parts$milliseconds;
        if (y === undefined || m === undefined || d === undefined) return null;

        if (this.timezone) {
          var dateString = "".concat(pad(y, 4), "-").concat(pad(m, 2), "-").concat(pad(d, 2), "T").concat(pad(hrs, 2), ":").concat(pad(min, 2), ":").concat(pad(sec, 2), ".").concat(pad(ms, 3));
          return toDate$1(dateString, {
            timeZone: this.timezone
          });
        }

        return new Date(y, m - 1, d, hrs, min, sec, ms);
      }
    }, {
      key: "getTimezoneOffset",
      value: function getTimezoneOffset(parts) {
        var y = parts.year,
            m = parts.month,
            d = parts.day,
            _parts$hours2 = parts.hours,
            hrs = _parts$hours2 === void 0 ? 0 : _parts$hours2,
            _parts$minutes2 = parts.minutes,
            min = _parts$minutes2 === void 0 ? 0 : _parts$minutes2,
            _parts$seconds2 = parts.seconds,
            sec = _parts$seconds2 === void 0 ? 0 : _parts$seconds2,
            _parts$milliseconds2 = parts.milliseconds,
            ms = _parts$milliseconds2 === void 0 ? 0 : _parts$milliseconds2;
        var date;
        var utcDate = new Date(Date.UTC(y, m - 1, d, hrs, min, sec, ms));

        if (this.timezone) {
          var dateString = "".concat(pad(y, 4), "-").concat(pad(m, 2), "-").concat(pad(d, 2), "T").concat(pad(hrs, 2), ":").concat(pad(min, 2), ":").concat(pad(sec, 2), ".").concat(pad(ms, 3));
          date = toDate$1(dateString, {
            timeZone: this.timezone
          });
        } else {
          date = new Date(y, m - 1, d, hrs, min, sec, ms);
        }

        return (date - utcDate) / 60000;
      }
    }, {
      key: "toPage",
      value: function toPage(arg, fromPage) {
        if (isNumber_1(arg)) {
          return addPages(fromPage, arg);
        }

        if (isString_1(arg)) {
          return this.getDateParts(this.normalizeDate(arg));
        }

        if (isDate$1(arg)) {
          return this.getDateParts(arg);
        }

        if (isObject$1(arg)) {
          return arg;
        }

        return null;
      }
    }, {
      key: "getMonthDates",
      value: function getMonthDates() {
        var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
        var dates = [];

        for (var i = 0; i < 12; i++) {
          dates.push(new Date(year, i, 15));
        }

        return dates;
      }
    }, {
      key: "getMonthNames",
      value: function getMonthNames(length) {
        var dtf = new Intl.DateTimeFormat(this.id, {
          month: length,
          timezome: 'UTC'
        });
        return this.getMonthDates().map(function (d) {
          return dtf.format(d);
        });
      }
    }, {
      key: "getWeekdayDates",
      value: function getWeekdayDates() {
        var firstDayOfWeek = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.firstDayOfWeek;
        var dates = [];
        var year = 2020;
        var month = 1;
        var day = 5 + firstDayOfWeek - 1;

        for (var i = 0; i < daysInWeek; i++) {
          dates.push(this.getDateFromParts({
            year: year,
            month: month,
            day: day + i,
            hours: 12
          }));
        }

        return dates;
      }
    }, {
      key: "getDayNames",
      value: function getDayNames(length) {
        var dtf = new Intl.DateTimeFormat(this.id, {
          weekday: length,
          timeZone: this.timezone
        });
        return this.getWeekdayDates(1).map(function (d) {
          return dtf.format(d);
        });
      } // Days/month/year components for a given month and year

    }, {
      key: "getMonthComps",
      value: function getMonthComps(month, year) {
        var key = "".concat(month, "-").concat(year);
        var comps = this.monthData[key];

        if (!comps) {
          var inLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
          var firstWeekday = new Date(year, month - 1, 1).getDay() + 1;
          var days = month === 2 && inLeapYear ? 29 : daysInMonths[month - 1];
          var weeks = Math.ceil((days + Math.abs(firstWeekday - this.firstDayOfWeek)) / daysInWeek);
          comps = {
            firstDayOfWeek: this.firstDayOfWeek,
            inLeapYear: inLeapYear,
            firstWeekday: firstWeekday,
            days: days,
            weeks: weeks,
            month: month,
            year: year
          };
          this.monthData[key] = comps;
        }

        return comps;
      } // Days/month/year components for today's month

    }, {
      key: "getThisMonthComps",
      value: function getThisMonthComps() {
        var _this$getDateParts = this.getDateParts(new Date()),
            month = _this$getDateParts.month,
            year = _this$getDateParts.year;

        return this.getMonthComps(month, year);
      } // Day/month/year components for previous month

    }, {
      key: "getPrevMonthComps",
      value: function getPrevMonthComps(month, year) {
        if (month === 1) return this.getMonthComps(12, year - 1);
        return this.getMonthComps(month - 1, year);
      } // Day/month/year components for next month

    }, {
      key: "getNextMonthComps",
      value: function getNextMonthComps(month, year) {
        if (month === 12) return this.getMonthComps(1, year + 1);
        return this.getMonthComps(month + 1, year);
      }
    }, {
      key: "getDayId",
      value: function getDayId(date) {
        return this.format(date, 'YYYY-MM-DD');
      } // Builds day components for a given page

    }, {
      key: "getCalendarDays",
      value: function getCalendarDays(_ref4) {
        var _this4 = this;

        var weeks = _ref4.weeks,
            monthComps = _ref4.monthComps,
            prevMonthComps = _ref4.prevMonthComps,
            nextMonthComps = _ref4.nextMonthComps;
        var days = [];
        var firstDayOfWeek = monthComps.firstDayOfWeek,
            firstWeekday = monthComps.firstWeekday;
        var prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
        var prevMonth = true;
        var thisMonth = false;
        var nextMonth = false; // Formatter for aria labels

        var formatter = new Intl.DateTimeFormat(this.id, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }); // Init counters with previous month's data

        var day = prevMonthComps.days - prevMonthDaysToShow + 1;
        var dayFromEnd = prevMonthComps.days - day + 1;
        var weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
        var weekdayOrdinalFromEnd = 1;
        var week = prevMonthComps.weeks;
        var weekFromEnd = 1;
        var month = prevMonthComps.month;
        var year = prevMonthComps.year; // Store todays comps

        var today = new Date();
        var todayDay = today.getDate();
        var todayMonth = today.getMonth() + 1;
        var todayYear = today.getFullYear();

        var dft = function dft(y, m, d) {
          return function (hours, minutes, seconds, milliseconds) {
            return _this4.normalizeDate({
              year: y,
              month: m,
              day: d,
              hours: hours,
              minutes: minutes,
              seconds: seconds,
              milliseconds: milliseconds
            });
          };
        }; // Cycle through 6 weeks (max in month)


        for (var w = 1; w <= weeks; w++) {
          // Cycle through days in week
          for (var i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1) {
            // We need to know when to start counting actual month days
            if (prevMonth && weekday === firstWeekday) {
              // Reset counters for current month
              day = 1;
              dayFromEnd = monthComps.days;
              weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
              weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
              week = 1;
              weekFromEnd = monthComps.weeks;
              month = monthComps.month;
              year = monthComps.year; // ...and flag we're tracking actual month days

              prevMonth = false;
              thisMonth = true;
            } // Append day info for the current week
            // Note: this might or might not be an actual month day
            //  We don't know how the UI wants to display various days,
            //  so we'll supply all the data we can


            var dateFromTime = dft(year, month, day);
            var range = {
              start: dateFromTime(0, 0, 0),
              end: dateFromTime(23, 59, 59, 999)
            };
            var date = range.start;
            var id = "".concat(pad(year, 4), "-").concat(pad(month, 2), "-").concat(pad(day, 2));
            var weekdayPosition = i;
            var weekdayPositionFromEnd = daysInWeek - i;
            var isToday = day === todayDay && month === todayMonth && year === todayYear;
            var isFirstDay = thisMonth && day === 1;
            var isLastDay = thisMonth && day === monthComps.days;
            var onTop = w === 1;
            var onBottom = w === 6;
            var onLeft = i === 1;
            var onRight = i === daysInWeek;
            days.push({
              id: id,
              label: day.toString(),
              ariaLabel: formatter.format(new Date(year, month - 1, day)),
              day: day,
              dayFromEnd: dayFromEnd,
              weekday: weekday,
              weekdayPosition: weekdayPosition,
              weekdayPositionFromEnd: weekdayPositionFromEnd,
              weekdayOrdinal: weekdayOrdinal,
              weekdayOrdinalFromEnd: weekdayOrdinalFromEnd,
              week: week,
              weekFromEnd: weekFromEnd,
              month: month,
              year: year,
              dateFromTime: dateFromTime,
              date: date,
              range: range,
              isToday: isToday,
              isFirstDay: isFirstDay,
              isLastDay: isLastDay,
              inMonth: thisMonth,
              inPrevMonth: prevMonth,
              inNextMonth: nextMonth,
              onTop: onTop,
              onBottom: onBottom,
              onLeft: onLeft,
              onRight: onRight,
              classes: ["id-".concat(id), "day-".concat(day), "day-from-end-".concat(dayFromEnd), "weekday-".concat(weekday), "weekday-position-".concat(weekdayPosition), "weekday-ordinal-".concat(weekdayOrdinal), "weekday-ordinal-from-end-".concat(weekdayOrdinalFromEnd), "week-".concat(week), "week-from-end-".concat(weekFromEnd), {
                'is-today': isToday,
                'is-first-day': isFirstDay,
                'is-last-day': isLastDay,
                'in-month': thisMonth,
                'in-prev-month': prevMonth,
                'in-next-month': nextMonth,
                'on-top': onTop,
                'on-bottom': onBottom,
                'on-left': onLeft,
                'on-right': onRight
              }]
            }); // See if we've hit the last day of the month

            if (thisMonth && isLastDay) {
              thisMonth = false;
              nextMonth = true; // Reset counters to next month's data

              day = 1;
              dayFromEnd = nextMonthComps.days;
              weekdayOrdinal = 1;
              weekdayOrdinalFromEnd = Math.floor((nextMonthComps.days - day) / daysInWeek + 1);
              week = 1;
              weekFromEnd = nextMonthComps.weeks;
              month = nextMonthComps.month;
              year = nextMonthComps.year; // Still in the middle of the month (hasn't ended yet)
            } else {
              day++;
              dayFromEnd--;
              weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
              weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
            }
          } // Append week days


          week++;
          weekFromEnd--;
        }

        return days;
      }
    }]);

    return Locale;
  }();

  var Attribute = /*#__PURE__*/function () {
    function Attribute(_ref, theme, locale) {
      var key = _ref.key,
          hashcode = _ref.hashcode,
          highlight = _ref.highlight,
          content = _ref.content,
          dot = _ref.dot,
          bar = _ref.bar,
          popover = _ref.popover,
          dates = _ref.dates,
          excludeDates = _ref.excludeDates,
          excludeMode = _ref.excludeMode,
          customData = _ref.customData,
          order = _ref.order,
          pinPage = _ref.pinPage;

      _classCallCheck(this, Attribute);

      this.key = isUndefined_1(key) ? createGuid() : key;
      this.hashcode = hashcode;
      this.customData = customData;
      this.order = order || 0;
      this.dateOpts = {
        order: order,
        locale: locale
      };
      this.pinPage = pinPage; // Normalize attribute types

      if (highlight) {
        this.highlight = theme.normalizeHighlight(highlight);
      }

      if (content) {
        this.content = theme.normalizeContent(content);
      }

      if (dot) {
        this.dot = theme.normalizeDot(dot);
      }

      if (bar) {
        this.bar = theme.normalizeBar(bar);
      }

      if (popover) {
        this.popover = popover;
      } // Assign dates


      this.dates = locale.normalizeDates(dates, this.dateOpts);
      this.hasDates = !!arrayHasItems(this.dates); // Assign exclude dates

      this.excludeDates = locale.normalizeDates(excludeDates, this.dateOpts);
      this.hasExcludeDates = !!arrayHasItems(this.excludeDates);
      this.excludeMode = excludeMode || 'intersects'; // Add infinite date range if excluded dates exist

      if (this.hasExcludeDates && !this.hasDates) {
        this.dates.push(new DateInfo({}, this.dateOpts));
        this.hasDates = true;
      }

      this.isComplex = some$1(this.dates, function (d) {
        return d.isComplex;
      });
    } // Accepts: Date or date range object
    // Returns: First date that partially intersects the given date


    _createClass(Attribute, [{
      key: "intersectsDate",
      value: function intersectsDate(date) {
        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return !this.excludesDate(date) && (this.dates.find(function (d) {
          return d.intersectsDate(date);
        }) || false);
      } // Accepts: Date or date range object
      // Returns: First date that completely includes the given date

    }, {
      key: "includesDate",
      value: function includesDate(date) {
        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return !this.excludesDate(date) && (this.dates.find(function (d) {
          return d.includesDate(date);
        }) || false);
      }
    }, {
      key: "excludesDate",
      value: function excludesDate(date) {
        var _this = this;

        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return this.hasExcludeDates && this.excludeDates.find(function (ed) {
          return _this.excludeMode === 'intersects' && ed.intersectsDate(date) || _this.excludeMode === 'includes' && ed.includesDate(date);
        });
      } // Accepts: Day object
      // Returns: First attribute date info that occurs on given day.

    }, {
      key: "intersectsDay",
      value: function intersectsDay(day) {
        return !this.excludesDay(day) && (this.dates.find(function (d) {
          return d.intersectsDay(day);
        }) || false);
      }
    }, {
      key: "excludesDay",
      value: function excludesDay(day) {
        return this.hasExcludeDates && this.excludeDates.find(function (ed) {
          return ed.intersectsDay(day);
        });
      }
    }]);

    return Attribute;
  }();

  var rootMixin = {
    mixins: [defaultsMixin],
    props: {
      color: String,
      isDark: Boolean,
      firstDayOfWeek: Number,
      masks: Object,
      locale: [String, Object],
      timezone: String,
      minDate: null,
      maxDate: null,
      minDateExact: null,
      maxDateExact: null,
      disabledDates: null,
      availableDates: null,
      theme: null
    },
    computed: {
      $theme: function $theme() {
        // Return the theme prop if it is an instance of the Theme class
        if (this.theme instanceof Theme) return this.theme; // Create the theme

        return new Theme({
          color: this.passedProp('color', 'blue'),
          isDark: this.passedProp('isDark', false)
        });
      },
      $locale: function $locale() {
        // Return the locale prop if it is an instance of the Locale class
        if (this.locale instanceof Locale) return this.locale; // Build up a base config from component props

        var config = isObject$1(this.locale) ? this.locale : {
          id: this.locale,
          firstDayOfWeek: this.firstDayOfWeek,
          masks: this.masks
        }; // Return new locale

        return new Locale(config, {
          locales: this.$locales,
          timezone: this.timezone
        });
      },
      disabledDates_: function disabledDates_() {
        var dates = this.normalizeDates(this.disabledDates);
        var minDate = this.minDate,
            minDateExact = this.minDateExact,
            maxDate = this.maxDate,
            maxDateExact = this.maxDateExact; // Add disabled range for min date

        if (minDateExact || minDate) {
          var end = minDateExact ? this.normalizeDate(minDateExact) : this.normalizeDate(minDate, {
            time: '00:00:00'
          });
          dates.push({
            start: null,
            end: new Date(end.getTime() - 1000)
          });
        } // Add disabled range for min date


        if (maxDateExact || maxDate) {
          var start = maxDateExact ? this.normalizeDate(maxDateExact) : this.normalizeDate(maxDate, {
            time: '23:59:59'
          });
          dates.push({
            start: new Date(start.getTime() + 1000),
            end: null
          });
        }

        return dates;
      },
      availableDates_: function availableDates_() {
        return this.normalizeDates(this.availableDates);
      },
      disabledAttribute: function disabledAttribute() {
        return new Attribute({
          key: 'disabled',
          dates: this.disabledDates_,
          excludeDates: this.availableDates_,
          excludeMode: 'includes',
          order: 100
        }, this.$theme, this.$locale);
      }
    },
    // created() {
    //   setupScreens(this.$defaults.screens);
    // },
    methods: {
      formatDate: function formatDate(date, mask) {
        return this.$locale ? this.$locale.format(date, mask) : '';
      },
      parseDate: function parseDate(text, mask) {
        if (!this.$locale) return null;
        var value = this.$locale.parse(text, mask);
        return isDate$1(value) ? value : null;
      },
      normalizeDate: function normalizeDate(date, config) {
        return this.$locale ? this.$locale.normalizeDate(date, config) : date;
      },
      normalizeDates: function normalizeDates(dates) {
        return this.$locale.normalizeDates(dates, {
          isFullDay: true
        });
      },
      pageForDate: function pageForDate(date) {
        return this.$locale.getDateParts(this.normalizeDate(date));
      },
      pageForThisMonth: function pageForThisMonth() {
        return this.pageForDate(new Date());
      }
    }
  };

  var slotMixin = {
    methods: {
      safeSlot: function safeSlot(name, args) {
        var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return isFunction_1(this.$slots[name]) ? this.$slots[name](args) : def;
      }
    }
  };

  var childMixin$1 = childMixin;
  var rootMixin$1 = rootMixin;
  var slotMixin$1 = slotMixin;

  var script$2 = {
    name: 'PopoverRow',
    mixins: [childMixin$1],
    props: {
      attribute: Object
    },
    computed: {
      indicator: function indicator() {
        var _this$attribute = this.attribute,
            highlight = _this$attribute.highlight,
            dot = _this$attribute.dot,
            bar = _this$attribute.bar,
            popover = _this$attribute.popover;
        if (popover && popover.hideIndicator) return null;

        if (highlight) {
          var _highlight$start = highlight.start,
              color = _highlight$start.color,
              isDark = _highlight$start.isDark;
          return {
            style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
              color: color,
              isDark: !isDark
            })), {}, {
              width: '10px',
              height: '5px',
              borderRadius: '3px'
            })
          };
        }

        if (dot) {
          var _dot$start = dot.start,
              _color = _dot$start.color,
              _isDark = _dot$start.isDark;
          return {
            style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
              color: _color,
              isDark: !_isDark
            })), {}, {
              width: '5px',
              height: '5px',
              borderRadius: '50%'
            })
          };
        }

        if (bar) {
          var _bar$start = bar.start,
              _color2 = _bar$start.color,
              _isDark2 = _bar$start.isDark;
          return {
            style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
              color: _color2,
              isDark: !_isDark2
            })), {}, {
              width: '10px',
              height: '3px'
            })
          };
        }

        return null;
      }
    }
  };

  var _hoisted_1 = {
    class: "vc-day-popover-row"
  };
  var _hoisted_2 = {
    key: 0,
    class: "vc-day-popover-row-indicator"
  };
  var _hoisted_3 = {
    class: "vc-day-popover-row-content"
  };
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, [$options.indicator ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [vue.createVNode("span", {
      style: $options.indicator.style,
      class: $options.indicator.class
    }, null, 6)])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_3, [vue.renderSlot(_ctx.$slots, "default", {}, function () {
      return [vue.createTextVNode(vue.toDisplayString($props.attribute.popover ? $props.attribute.popover.label : 'No content provided'), 1
      /* TEXT */
      )];
    })])]);
  }

  var css_248z$2 = ".vc-day-popover-row {\n  --day-content-transition-time: 0.13s ease-in;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all var(--day-content-transition-time);\n}\n  .vc-day-popover-row:not(:first-child) {\n    margin-top: 3px;\n  }\n  .vc-day-popover-row-indicator {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  width: 15px;\n  margin-right: 3px;\n}\n  .vc-day-popover-row-indicator span {\n    transition: all var(--day-content-transition-time);\n  }\n  .vc-day-popover-row-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: none;\n      -ms-flex-wrap: none;\n          flex-wrap: none;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  width: -webkit-max-content;\n  width: max-content;\n}\n";
  styleInject(css_248z$2);

  script$2.render = render$1;

  var _defSize = '26px';
  var _defViewBox = '0 0 32 32';
  var icons = {
    'left-arrow': {
      viewBox: '0 -1 16 34',
      path: 'M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z'
    },
    'right-arrow': {
      viewBox: '-5 -1 16 34',
      path: 'M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z'
    }
  };
  var script$3 = {
    props: ['name'],
    data: function data() {
      return {
        width: _defSize,
        height: _defSize,
        viewBox: _defViewBox,
        path: '',
        isBaseline: false
      };
    },
    mounted: function mounted() {
      this.updateIcon();
    },
    watch: {
      name: function name() {
        this.updateIcon();
      }
    },
    methods: {
      updateIcon: function updateIcon() {
        var icon = icons[this.name];

        if (icon) {
          this.width = icon.width || _defSize;
          this.height = icon.height || _defSize;
          this.viewBox = icon.viewBox;
          this.path = icon.path;
        }
      }
    }
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("svg", {
      class: "vc-svg-icon",
      width: $data.width,
      height: $data.height,
      viewBox: $data.viewBox
    }, [vue.createVNode("path", {
      d: $data.path
    }, null, 8, ["d"])], 8, ["width", "height", "viewBox"]);
  }

  var css_248z$3 = ".vc-svg-icon {\n  display: inline-block;\n  stroke: currentColor;\n  stroke-width: 0;\n}\n  .vc-svg-icon path {\n    fill: currentColor;\n  }\n";
  styleInject(css_248z$3);

  script$3.render = render$2;

  var _yearGroupCount = 12;
  var script$4 = {
    name: 'CalendarNav',
    emits: ['input'],
    components: {
      SvgIcon: script$3
    },
    mixins: [childMixin$1],
    props: {
      value: {
        type: Object,
        default: function _default() {
          return {
            month: 0,
            year: 0
          };
        }
      },
      validator: {
        type: Function,
        default: function _default() {
          return function () {
            return true;
          };
        }
      }
    },
    data: function data() {
      return {
        monthMode: true,
        yearIndex: 0,
        yearGroupIndex: 0,
        onSpaceOrEnter: onSpaceOrEnter
      };
    },
    computed: {
      month: function month() {
        return this.value ? this.value.month || 0 : 0;
      },
      year: function year() {
        return this.value ? this.value.year || 0 : 0;
      },
      title: function title() {
        return this.monthMode ? this.yearIndex : "".concat(this.firstYear, " - ").concat(this.lastYear);
      },
      monthItems: function monthItems() {
        var _this = this;

        var _this$pageForDate = this.pageForDate(new Date()),
            thisMonth = _this$pageForDate.month,
            thisYear = _this$pageForDate.year;

        return this.locale.getMonthDates().map(function (d, i) {
          var month = i + 1;
          return {
            label: _this.locale.format(d, _this.masks.navMonths),
            ariaLabel: _this.locale.format(d, 'MMMM YYYY'),
            isActive: month === _this.month && _this.yearIndex === _this.year,
            isCurrent: month === thisMonth && _this.yearIndex === thisYear,
            isDisabled: !_this.validator({
              month: month,
              year: _this.yearIndex
            }),
            click: function click() {
              return _this.monthClick(month);
            }
          };
        });
      },
      yearItems: function yearItems() {
        var _this2 = this;

        var _this$pageForDate2 = this.pageForDate(new Date()),
            thisYear = _this$pageForDate2.year;

        var startYear = this.yearGroupIndex * _yearGroupCount;
        var endYear = startYear + _yearGroupCount;
        var items = [];

        var _loop = function _loop(year) {
          items.push({
            year: year,
            label: year,
            ariaLabel: year,
            isActive: year === _this2.year,
            isCurrent: year === thisYear,
            isDisabled: !_this2.validator({
              month: _this2.month,
              year: year
            }),
            click: function click() {
              return _this2.yearClick(year);
            }
          });
        };

        for (var year = startYear; year < endYear; year += 1) {
          _loop(year);
        }

        return items;
      },
      activeItems: function activeItems() {
        return this.monthMode ? this.monthItems : this.yearItems;
      },
      firstYear: function firstYear() {
        return head_1(this.yearItems.map(function (i) {
          return i.year;
        }));
      },
      lastYear: function lastYear() {
        return last_1(this.yearItems.map(function (i) {
          return i.year;
        }));
      }
    },
    watch: {
      year: function year() {
        this.yearIndex = this.year;
      },
      yearIndex: function yearIndex(val) {
        this.yearGroupIndex = this.getYearGroupIndex(val);
      }
    },
    created: function created() {
      this.yearIndex = this.year;
    },
    methods: {
      getItemClasses: function getItemClasses(_ref) {
        var isActive = _ref.isActive,
            isCurrent = _ref.isCurrent,
            isDisabled = _ref.isDisabled;
        var classes = ['vc-nav-item'];

        if (isActive) {
          classes.push('is-active');
        } else if (isCurrent) {
          classes.push('is-current');
        }

        if (isDisabled) {
          classes.push('is-disabled');
        }

        return classes;
      },
      getYearGroupIndex: function getYearGroupIndex(year) {
        return Math.floor(year / _yearGroupCount);
      },
      monthClick: function monthClick(month) {
        this.$emit('input', {
          month: month,
          year: this.yearIndex
        });
      },
      yearClick: function yearClick(year) {
        this.yearIndex = year;
        this.monthMode = true;
      },
      toggleMode: function toggleMode() {
        this.monthMode = !this.monthMode;
      },
      movePrev: function movePrev() {
        if (this.monthMode) {
          this.movePrevYear();
        }

        this.movePrevYearGroup();
      },
      moveNext: function moveNext() {
        if (this.monthMode) {
          this.moveNextYear();
        }

        this.moveNextYearGroup();
      },
      movePrevYear: function movePrevYear() {
        this.yearIndex--;
      },
      moveNextYear: function moveNextYear() {
        this.yearIndex++;
      },
      movePrevYearGroup: function movePrevYearGroup() {
        this.yearGroupIndex--;
      },
      moveNextYearGroup: function moveNextYearGroup() {
        this.yearGroupIndex++;
      }
    }
  };

  var _hoisted_1$1 = {
    class: "vc-nav-container"
  };
  var _hoisted_2$1 = {
    class: "vc-nav-header"
  };
  var _hoisted_3$1 = {
    class: "vc-nav-items"
  };
  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_svg_icon = vue.resolveComponent("svg-icon");

    return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.createVNode("div", _hoisted_2$1, [vue.createVNode("span", {
      role: "button",
      class: "vc-nav-arrow is-left",
      tabindex: "0",
      onClick: _cache[1] || (_cache[1] = function () {
        return $options.movePrev.apply($options, arguments);
      }),
      onKeydown: _cache[2] || (_cache[2] = function (e) {
        return $data.onSpaceOrEnter(e, $options.movePrev);
      })
    }, [vue.renderSlot(_ctx.$slots, "nav-left-button", {}, function () {
      return [vue.createVNode(_component_svg_icon, {
        name: "left-arrow",
        width: "20px",
        height: "24px"
      })];
    })], 32), vue.createVNode("span", {
      role: "button",
      class: "vc-nav-title vc-grid-focus",
      style: {
        whiteSpace: 'nowrap'
      },
      tabindex: "0",
      onClick: _cache[3] || (_cache[3] = function () {
        return $options.toggleMode.apply($options, arguments);
      }),
      onKeydown: _cache[4] || (_cache[4] = function (e) {
        return $data.onSpaceOrEnter(e, $options.toggleMode);
      })
    }, vue.toDisplayString($options.title), 33), vue.createVNode("span", {
      role: "button",
      class: "vc-nav-arrow is-right",
      tabindex: "0",
      onClick: _cache[5] || (_cache[5] = function () {
        return $options.moveNext.apply($options, arguments);
      }),
      onKeydown: _cache[6] || (_cache[6] = function (e) {
        return $data.onSpaceOrEnter(e, $options.moveNext);
      })
    }, [vue.renderSlot(_ctx.$slots, "nav-right-button", {}, function () {
      return [vue.createVNode(_component_svg_icon, {
        name: "right-arrow",
        width: "20px",
        height: "24px"
      })];
    })], 32)]), vue.createVNode("div", _hoisted_3$1, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.activeItems, function (item) {
      return vue.openBlock(), vue.createBlock("span", {
        key: item.label,
        role: "button",
        "aria-label": item.ariaLabel,
        class: $options.getItemClasses(item),
        tabindex: item.isDisabled ? undefined : 0,
        onClick: item.click,
        onKeydown: function onKeydown(e) {
          return $data.onSpaceOrEnter(e, item.click);
        }
      }, vue.toDisplayString(item.label), 43, ["aria-label", "tabindex", "onClick", "onKeydown"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])]);
  }

  var css_248z$4 = ".vc-nav-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.vc-nav-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: var(--leading-snug);\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: var(--rounded);\n}\n\n.vc-nav-arrow.is-left {\n    margin-right: auto;\n  }\n\n.vc-nav-arrow.is-right {\n    margin-left: auto;\n  }\n\n.vc-nav-arrow:hover {\n    background-color: var(--gray-900);\n  }\n\n.vc-nav-arrow:focus {\n    border-color: var(--accent-600);\n  }\n\n.vc-nav-title {\n  color: var(--accent-100);\n  font-weight: var(--font-bold);\n  line-height: var(--leading-snug);\n  padding: 4px 8px;\n  border-radius: var(--rounded);\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.vc-nav-title:hover {\n    background-color: var(--gray-900);\n  }\n\n.vc-nav-title:focus {\n    border-color: var(--accent-600);\n  }\n\n.vc-nav-items {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 2px;\n  grid-column-gap: 5px;\n}\n\n.vc-nav-item {\n  width: 48px;\n  text-align: center;\n  line-height: var(--leading-snug);\n  font-weight: var(--font-semibold);\n  padding: 4px 0;\n  cursor: pointer;\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: var(--rounded);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.vc-nav-item:hover {\n    color: var(--white);\n    background-color: var(--gray-900);\n    box-shadow: var(--shadow-inner);\n  }\n\n.vc-nav-item:focus {\n    border-color: var(--accent-600);\n  }\n\n.vc-nav-item.is-active {\n    color: var(--accent-900);\n    background: var(--accent-100);\n    font-weight: var(--font-bold);\n    box-shadow: var(--shadow);\n  }\n\n.vc-nav-item.is-current {\n    color: var(--accent-100);\n    font-weight: var(--bold);\n    border-color: var(--accent-100);\n  }\n\n.vc-nav-item.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n  }\n\n.vc-is-dark .vc-nav-title {\n    color: var(--gray-900);\n  }\n\n.vc-is-dark .vc-nav-title:hover {\n      background-color: var(--gray-200);\n    }\n\n.vc-is-dark .vc-nav-title:focus {\n      border-color: var(--accent-400);\n    }\n\n.vc-is-dark .vc-nav-arrow:hover {\n      background-color: var(--gray-200);\n    }\n\n.vc-is-dark .vc-nav-arrow:focus {\n      border-color: var(--accent-400);\n    }\n\n.vc-is-dark .vc-nav-item:hover {\n      color: var(--gray-900);\n      background-color: var(--gray-200);\n      box-shadow: none;\n    }\n\n.vc-is-dark .vc-nav-item:focus {\n      border-color: var(--accent-400);\n    }\n\n.vc-is-dark .vc-nav-item.is-active {\n      color: var(--white);\n      background: var(--accent-500);\n    }\n\n.vc-is-dark .vc-nav-item.is-current {\n      color: var(--accent-600);\n      border-color: var(--accent-500);\n    }\n";
  styleInject(css_248z$4);

  script$4.render = render$3;

  function showPopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('show-popover', {
        detail: opts
      }));
    }
  }
  function hidePopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('hide-popover', {
        detail: opts
      }));
    }
  }
  function togglePopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('toggle-popover', {
        detail: opts
      }));
    }
  }
  function updatePopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('update-popover', {
        detail: opts
      }));
    }
  }
  function getPopoverTriggerEvents(opts) {
    var _ref;

    var visibility = opts.visibility;
    var click = visibility === 'click';
    var hover = visibility === 'hover';
    var hoverFocus = visibility === 'hover-focus';
    var focus = visibility === 'focus';
    opts.autoHide = !click;
    var hovered = false;
    var focused = false;
    var isRenderFn = opts.isRenderFn;
    var events = {
      click: isRenderFn ? 'onClick' : 'click',
      mousemove: isRenderFn ? 'onMousemove' : 'mousemove',
      mouseleave: isRenderFn ? 'onMouseleave' : 'mouseleave',
      focusin: isRenderFn ? 'onFocusin' : 'focusin',
      focusout: isRenderFn ? 'onFocusout' : 'focusout'
    };
    return _ref = {}, _defineProperty(_ref, events.click, function (e) {
      if (click) {
        opts.ref = e.target;
        togglePopover(opts);
        e.stopPropagation();
      }
    }), _defineProperty(_ref, events.mousemove, function (e) {
      opts.ref = e.currentTarget;

      if (!hovered) {
        hovered = true;

        if (hover || hoverFocus) {
          showPopover(opts);
        }
      }
    }), _defineProperty(_ref, events.mouseleave, function (e) {
      opts.ref = e.target;

      if (hovered) {
        hovered = false;

        if (hover || hoverFocus && !focused) {
          hidePopover(opts);
        }
      }
    }), _defineProperty(_ref, events.focusin, function (e) {
      opts.ref = e.currentTarget;

      if (!focused) {
        focused = true;

        if (focus || hoverFocus) {
          showPopover(opts);
        }
      }
    }), _defineProperty(_ref, events.focusout, function (e) {
      opts.ref = e.currentTarget;

      if (focused && !elementContains(opts.ref, e.relatedTarget)) {
        focused = false;

        if (focus || hoverFocus && !hovered) {
          hidePopover(opts);
        }
      }
    }), _ref;
  }

  var script$5 = {
    name: 'CalendarDay',
    emits: ['dayclick', 'daymouseenter', 'daymouseleave', 'dayfocusin', 'dayfocusout', 'daykeydown'],
    mixins: [childMixin$1, slotMixin$1],
    inheritAttrs: false,
    render: function render() {
      var _this = this;

      // Backgrounds layer
      var backgroundsLayer = function backgroundsLayer() {
        return _this.hasBackgrounds && vue.h('div', {
          class: 'vc-highlights vc-day-layer'
        }, _this.backgrounds.map(function (_ref) {
          var key = _ref.key,
              wrapperClass = _ref.wrapperClass,
              bgClass = _ref.class,
              style = _ref.style;
          return vue.h('div', {
            key: key,
            class: wrapperClass
          }, [vue.h('div', {
            class: bgClass,
            style: style
          })]);
        }));
      }; // Content layer


      var contentLayer = function contentLayer() {
        return _this.safeSlot('day-content', {
          day: _this.day,
          attributes: _this.day.attributes,
          attributesMap: _this.day.attributesMap,
          dayProps: _this.dayContentProps,
          dayEvents: _this.dayContentEvents
        }) || vue.h('span', _objectSpread2(_objectSpread2(_objectSpread2({}, _this.dayContentProps), {}, {
          class: _this.dayContentClass,
          style: _this.dayContentStyle
        }, _this.dayContentEvents), {}, {
          ref: 'content'
        }), [_this.day.label]);
      }; // Dots layer


      var dotsLayer = function dotsLayer() {
        return _this.hasDots && vue.h('div', {
          class: 'vc-day-layer vc-day-box-center-bottom'
        }, [vue.h('div', {
          class: 'vc-dots'
        }, _this.dots.map(function (_ref2) {
          var key = _ref2.key,
              bgClass = _ref2.class,
              style = _ref2.style;
          return vue.h('span', {
            key: key,
            class: bgClass,
            style: style
          });
        }))]);
      }; // Bars layer


      var barsLayer = function barsLayer() {
        return _this.hasBars && vue.h('div', {
          class: 'vc-day-layer vc-day-box-center-bottom'
        }, [vue.h('div', {
          class: 'vc-bars'
        }, _this.bars.map(function (_ref3) {
          var key = _ref3.key,
              bgClass = _ref3.class,
              style = _ref3.style;
          return vue.h('span', {
            key: key,
            class: bgClass,
            style: style
          });
        }))]);
      }; // Root layer


      return vue.h('div', {
        class: ['vc-day'].concat(_toConsumableArray(this.day.classes), [{
          'vc-day-box-center-center': !this.$slots['day-content']
        }, {
          'is-not-in-month': !this.inMonth
        }])
      }, [backgroundsLayer(), contentLayer(), dotsLayer(), barsLayer()]);
    },
    inject: ['sharedState'],
    props: {
      day: {
        type: Object,
        required: true
      }
    },
    data: function data() {
      return {
        glyphs: {},
        dayContentEvents: {}
      };
    },
    computed: {
      label: function label() {
        return this.day.label;
      },
      startTime: function startTime() {
        return this.day.range.start.getTime();
      },
      endTime: function endTime() {
        return this.day.range.end.getTime();
      },
      inMonth: function inMonth() {
        return this.day.inMonth;
      },
      isDisabled: function isDisabled() {
        return this.day.isDisabled;
      },
      backgrounds: function backgrounds() {
        return this.glyphs.backgrounds;
      },
      hasBackgrounds: function hasBackgrounds() {
        return !!arrayHasItems(this.backgrounds);
      },
      content: function content() {
        return this.glyphs.content;
      },
      dots: function dots() {
        return this.glyphs.dots;
      },
      hasDots: function hasDots() {
        return !!arrayHasItems(this.dots);
      },
      bars: function bars() {
        return this.glyphs.bars;
      },
      hasBars: function hasBars() {
        return !!arrayHasItems(this.bars);
      },
      popovers: function popovers() {
        return this.glyphs.popovers;
      },
      hasPopovers: function hasPopovers() {
        return !!arrayHasItems(this.popovers);
      },
      dayContentClass: function dayContentClass() {
        return ['vc-day-content vc-focusable', {
          'is-disabled': this.isDisabled
        }, get_1(last_1(this.content), 'class') || ''];
      },
      dayContentStyle: function dayContentStyle() {
        return get_1(last_1(this.content), 'style');
      },
      dayContentProps: function dayContentProps() {
        var tabindex;

        if (this.day.isFocusable) {
          tabindex = '0';
        } else if (this.day.inMonth) {
          tabindex = '-1';
        }

        return {
          tabindex: tabindex,
          'aria-label': this.day.ariaLabel,
          'aria-disabled': this.day.isDisabled ? 'true' : 'false',
          role: 'button'
        };
      },
      dayEvent: function dayEvent() {
        return _objectSpread2(_objectSpread2({}, this.day), {}, {
          el: this.$refs.content,
          popovers: this.popovers
        });
      }
    },
    watch: {
      theme: function theme() {
        this.refresh();
      },
      popovers: function popovers() {
        this.refreshPopovers();
      },
      'day.shouldRefresh': function dayShouldRefresh() {
        this.refresh();
      }
    },
    mounted: function mounted() {
      this.refreshPopovers();
      this.refresh();
    },
    methods: {
      getDayEvent: function getDayEvent(origEvent) {
        return _objectSpread2(_objectSpread2({}, this.dayEvent), {}, {
          event: origEvent
        });
      },
      click: function click(e) {
        this.$emit('dayclick', this.getDayEvent(e));
      },
      mouseenter: function mouseenter(e) {
        this.$emit('daymouseenter', this.getDayEvent(e));
      },
      mouseleave: function mouseleave(e) {
        this.$emit('daymouseleave', this.getDayEvent(e));
      },
      focusin: function focusin(e) {
        this.$emit('dayfocusin', this.getDayEvent(e));
      },
      focusout: function focusout(e) {
        this.$emit('dayfocusout', this.getDayEvent(e));
      },
      keydown: function keydown(e) {
        this.$emit('daykeydown', this.getDayEvent(e));
      },
      refresh: function refresh() {
        var _this2 = this;

        if (!this.day.shouldRefresh) return;
        /* eslint-disable vue/no-mutating-props */

        this.day.shouldRefresh = false;
        var glyphs = {
          backgrounds: [],
          dots: [],
          bars: [],
          popovers: [],
          content: []
        };
        this.day.attributes = Object.values(this.day.attributesMap || {}).sort(function (a, b) {
          return a.order - b.order;
        });
        this.day.attributes.forEach(function (attr) {
          // Add glyphs for each attribute
          var targetDate = attr.targetDate;
          var isDate = targetDate.isDate,
              isComplex = targetDate.isComplex,
              startTime = targetDate.startTime,
              endTime = targetDate.endTime;
          var onStart = _this2.startTime <= startTime;
          var onEnd = _this2.endTime >= endTime;
          var onStartAndEnd = onStart && onEnd;
          var onStartOrEnd = onStart || onEnd;
          var dateInfo = {
            isDate: isDate,
            isComplex: isComplex,
            onStart: onStart,
            onEnd: onEnd,
            onStartAndEnd: onStartAndEnd,
            onStartOrEnd: onStartOrEnd
          };

          _this2.processHighlight(attr, dateInfo, glyphs);

          _this2.processNonHighlight(attr, 'content', dateInfo, glyphs.content);

          _this2.processNonHighlight(attr, 'dot', dateInfo, glyphs.dots);

          _this2.processNonHighlight(attr, 'bar', dateInfo, glyphs.bars);

          _this2.processPopover(attr, glyphs);
        });
        this.glyphs = glyphs;
      },
      processHighlight: function processHighlight(_ref4, _ref5, _ref6) {
        var key = _ref4.key,
            highlight = _ref4.highlight;
        var isDate = _ref5.isDate,
            isComplex = _ref5.isComplex,
            onStart = _ref5.onStart,
            onEnd = _ref5.onEnd,
            onStartAndEnd = _ref5.onStartAndEnd;
        var backgrounds = _ref6.backgrounds,
            content = _ref6.content;
        if (!highlight) return;
        var base = highlight.base,
            start = highlight.start,
            end = highlight.end;

        if (isDate || isComplex) {
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', start.class],
            style: start.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: start.contentClass,
            style: start.contentStyle
          });
        } else if (onStartAndEnd) {
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', start.class],
            style: start.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: start.contentClass,
            style: start.contentStyle
          });
        } else if (onStart) {
          backgrounds.push({
            key: "".concat(key, "-base"),
            wrapperClass: 'vc-day-layer vc-day-box-right-center',
            class: ['vc-highlight vc-highlight-base-start', base.class],
            style: base.style
          });
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', start.class],
            style: start.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: start.contentClass,
            style: start.contentStyle
          });
        } else if (onEnd) {
          backgrounds.push({
            key: "".concat(key, "-base"),
            wrapperClass: 'vc-day-layer vc-day-box-left-center',
            class: ['vc-highlight vc-highlight-base-end', base.class],
            style: base.style
          });
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', end.class],
            style: end.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: end.contentClass,
            style: end.contentStyle
          });
        } else {
          backgrounds.push({
            key: "".concat(key, "-middle"),
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight vc-highlight-base-middle', base.class],
            style: base.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: base.contentClass,
            style: base.contentStyle
          });
        }
      },
      processNonHighlight: function processNonHighlight(attr, itemKey, _ref7, list) {
        var isDate = _ref7.isDate,
            onStart = _ref7.onStart,
            onEnd = _ref7.onEnd;
        if (!attr[itemKey]) return;
        var key = attr.key;
        var className = "vc-".concat(itemKey);
        var _attr$itemKey = attr[itemKey],
            base = _attr$itemKey.base,
            start = _attr$itemKey.start,
            end = _attr$itemKey.end;

        if (isDate || onStart) {
          list.push({
            key: key,
            class: [className, start.class],
            style: start.style
          });
        } else if (onEnd) {
          list.push({
            key: key,
            class: [className, end.class],
            style: end.style
          });
        } else {
          list.push({
            key: key,
            class: [className, base.class],
            style: base.style
          });
        }
      },
      processPopover: function processPopover(attribute, _ref8) {
        var popovers = _ref8.popovers;
        var key = attribute.key,
            customData = attribute.customData,
            popover = attribute.popover;
        if (!popover) return;
        var resolvedPopover = defaults_1({
          key: key,
          customData: customData,
          attribute: attribute
        }, _objectSpread2({}, popover), {
          visibility: popover.label ? 'hover' : 'click',
          placement: 'bottom',
          isInteractive: !popover.label
        });
        popovers.splice(0, 0, resolvedPopover);
      },
      refreshPopovers: function refreshPopovers() {
        var popoverEvents = {};

        if (arrayHasItems(this.popovers)) {
          popoverEvents = getPopoverTriggerEvents(defaults_1.apply(void 0, [{
            id: this.dayPopoverId,
            data: this.day,
            isRenderFn: true
          }].concat(_toConsumableArray(this.popovers))));
        }

        this.dayContentEvents = mergeEvents({
          onClick: this.click,
          onMouseenter: this.mouseenter,
          onMouseleave: this.mouseleave,
          onFocusin: this.focusin,
          onFocusout: this.focusout,
          onKeydown: this.keydown
        }, popoverEvents);
        updatePopover({
          id: this.dayPopoverId,
          data: this.day
        });
      }
    }
  };

  var css_248z$5 = ".vc-day {\n  position: relative;\n  min-height: 32px;\n  z-index: 1;\n}\n  .vc-day.is-not-in-month * {\n    opacity: 0;\n    pointer-events: none;\n  }\n  .vc-day-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n  .vc-day-box-center-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n  .vc-day-box-left-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n}\n  .vc-day-box-right-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n  .vc-day-box-center-bottom {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n  .vc-day-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-radius: var(--rounded-full);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n  .vc-day-content:hover {\n    background-color: hsla(211, 25%, 84%, 0.3);\n  }\n  .vc-day-content:focus {\n    font-weight: var(--font-bold);\n    background-color: hsla(211, 25%, 84%, 0.4);\n  }\n  .vc-day-content.is-disabled {\n    color: var(--gray-400);\n  }\n  .vc-is-dark .vc-day-content:hover {\n      background-color: hsla(216, 15%, 52%, 0.3);\n    }\n  .vc-is-dark .vc-day-content:focus {\n      background-color: hsla(216, 15%, 52%, 0.4);\n    }\n  .vc-is-dark .vc-day-content.is-disabled {\n      color: var(--gray-600);\n    }\n  .vc-highlights {\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n  .vc-highlight {\n  width: 28px;\n  height: 28px;\n}\n  .vc-highlight.vc-highlight-base-start {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-right-width: 0 !important;\n  }\n  .vc-highlight.vc-highlight-base-end {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n  }\n  .vc-highlight.vc-highlight-base-middle {\n    width: 100%;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n    border-right-width: 0 !important;\n    margin: 0 -1px;\n  }\n  .vc-dots {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n  .vc-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  transition: all var(--day-content-transition-time);\n}\n  .vc-dot:not(:last-child) {\n    margin-right: 3px;\n  }\n  .vc-bars {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 75%;\n}\n  .vc-bar {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 3px;\n  transition: all var(--day-content-transition-time);\n}\n";
  styleInject(css_248z$5);

  var script$6 = {
    name: 'CalendarPane',
    emits: ['update:page'],
    mixins: [childMixin$1, slotMixin$1],
    inheritAttrs: false,
    render: function render() {
      var _this = this;

      // Header
      var header = this.safeSlot('header', this.page) || // Default header
      vue.h('div', {
        class: "vc-header align-".concat(this.titlePosition)
      }, [// Header title
      vue.h('div', _objectSpread2({
        class: 'vc-title'
      }, this.navPopoverEvents), [this.safeSlot('header-title', this.page, this.page.title)]), // Navigation popover
      vue.h(script$1, {
        id: this.navPopoverId,
        contentClass: 'vc-nav-popover-container'
      }, {
        // Navigation pane
        default: function _default() {
          return vue.h(script$4, {
            value: _this.page,
            validator: _this.canMove,
            onInput: function onInput($event) {
              return _this.move($event);
            }
          }, _objectSpread2({}, _this.$slots));
        }
      })]); // Weeks

      var weeks = vue.h('div', {
        class: 'vc-weeks'
      }, [].concat(_toConsumableArray(this.weekdayLabels.map(function (wl, i) {
        return vue.h('div', {
          key: i + 1,
          class: 'vc-weekday'
        }, [wl]);
      })), _toConsumableArray(this.page.days.map(function (day) {
        return vue.h(script$5, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
          day: day,
          slots: _this.$slots
        }), _this.$slots);
      }))));
      return vue.h('div', {
        class: 'vc-pane',
        ref: 'pane'
      }, [header, weeks]);
    },
    props: {
      page: Object,
      titlePosition: String,
      navVisibility: String,
      canMove: {
        type: Function,
        default: function _default() {
          return true;
        }
      }
    },
    data: function data() {
      return {
        navPopoverId: createGuid()
      };
    },
    computed: {
      navVisibility_: function navVisibility_() {
        return this.propOrDefault('navVisibility', 'navVisibility');
      },
      navPlacement: function navPlacement() {
        switch (this.titlePosition) {
          case 'left':
            return 'bottom-start';

          case 'right':
            return 'bottom-end';

          default:
            return 'bottom';
        }
      },
      navPopoverEvents: function navPopoverEvents() {
        return getPopoverTriggerEvents({
          id: this.navPopoverId,
          visibility: this.navVisibility_,
          placement: this.navPlacement,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: ['bottom']
            }
          }],
          isInteractive: true,
          isRenderFn: true
        });
      },
      weekdayLabels: function weekdayLabels() {
        var _this2 = this;

        return this.locale.getWeekdayDates().map(function (d) {
          return _this2.format(d, _this2.masks.weekdays);
        });
      }
    },
    methods: {
      move: function move(page) {
        this.$emit('update:page', page);
      }
    }
  };

  var css_248z$6 = ".vc-pane {\n  min-width: 250px;\n}\n\n.vc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 16px 0px 16px;\n}\n\n.vc-header.align-left {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n\n.vc-header.align-right {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n\n.vc-title {\n  font-size: var(--text-lg);\n  color: var(--gray-800);\n  font-weight: var(--font-semibold);\n  line-height: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n\n.vc-title:hover {\n    opacity: 0.75;\n  }\n\n.vc-weeks {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 6px;\n}\n\n.vc-weekday {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: var(--text-sm);\n  font-weight: var(--font-bold);\n  line-height: 14px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n  cursor: default;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.vc-weekdays {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.vc-nav-popover-container {\n  color: var(--white);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded-lg);\n  padding: 4px;\n  box-shadow: var(--shadow);\n}\n\n.vc-is-dark .vc-header {\n    color: var(--gray-200);\n  }\n\n.vc-is-dark .vc-title {\n    color: var(--gray-100);\n  }\n\n.vc-is-dark .vc-weekday {\n    color: var(--accent-200);\n  }\n\n.vc-is-dark .vc-nav-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n  }\n";
  styleInject(css_248z$6);

  var AttributeStore = /*#__PURE__*/function () {
    function AttributeStore(theme, locale, attrs) {
      _classCallCheck(this, AttributeStore);

      this.theme = theme;
      this.locale = locale;
      this.map = {};
      this.refresh(attrs, true);
    }

    _createClass(AttributeStore, [{
      key: "refresh",
      value: function refresh(attrs, reset) {
        var _this = this;

        var map = {};
        var list = [];
        var pinAttr = null; // Keep record of added and deleted attributes

        var adds = [];
        var deletes = reset ? new Set() : new Set(Object.keys(this.map));

        if (arrayHasItems(attrs)) {
          attrs.forEach(function (attr, i) {
            if (!attr || !attr.dates) return;
            var key = attr.key ? attr.key.toString() : i.toString();
            var order = attr.order || 0;
            var hashcode = hash(JSON.stringify(attr));
            var exAttr = _this.map[key]; // If just tracking delta changes and attribute hash hasn't changed

            if (!reset && exAttr && exAttr.hashcode === hashcode) {
              // ...don't need to replace the attribute
              deletes.delete(key);
            } else {
              // Otherwise, create attribute and add to the list of adds
              exAttr = new Attribute(_objectSpread2({
                key: key,
                order: order,
                hashcode: hashcode
              }, attr), _this.theme, _this.locale);
              adds.push(exAttr);
            } // Keep track of attribute to pin for initial page


            if (exAttr && exAttr.pinPage) {
              pinAttr = exAttr;
            } // Add attribute to map and list


            map[key] = exAttr;
            list.push(exAttr);
          });
        }

        this.map = map;
        this.list = list;
        this.pinAttr = pinAttr;
        return {
          adds: adds,
          deletes: Array.from(deletes)
        };
      }
    }]);

    return AttributeStore;
  }();

  var script$7 = {
    name: 'Calendar',
    emits: ['dayfocusin', 'dayfocusout', 'transition-start', 'transition-end', 'update:from-page', 'update:to-page'],
    render: function render() {
      var _this = this;

      // Renderer for calendar arrows
      var getArrowButton = function getArrowButton(isPrev) {
        var click = function click() {
          return _this.move(isPrev ? -_this.step_ : _this.step_);
        };

        var keydown = function keydown(e) {
          return onSpaceOrEnter(e, click);
        };

        var isDisabled = isPrev ? !_this.canMovePrev : !_this.canMoveNext;
        return vue.h('div', {
          class: ['vc-arrow', {
            'is-disabled': isDisabled
          }],
          role: 'button',
          onClick: click,
          onKeydown: keydown
        }, [(isPrev ? _this.safeSlot('header-left-button', {
          click: click
        }) : _this.safeSlot('header-right-button', {
          click: click
        })) || vue.h(script$3, {
          name: isPrev ? 'left-arrow' : 'right-arrow'
        })]);
      }; // Day popover


      var getDayPopover = function getDayPopover() {
        return vue.h(script$1, {
          id: _this.sharedState.dayPopoverId,
          contentClass: 'vc-day-popover-container'
        }, {
          default: function _default(_ref) {
            var day = _ref.data,
                updateLayout = _ref.updateLayout,
                hide = _ref.hide;
            var attributes = Object.values(day.attributes).filter(function (a) {
              return a.popover;
            });
            var masks = _this.$locale.masks;
            var format = _this.formatDate;
            var dayTitle = format(day.date, masks.dayPopover);
            return _this.safeSlot('day-popover', {
              day: day,
              attributes: attributes,
              masks: masks,
              format: format,
              dayTitle: dayTitle,
              updateLayout: updateLayout,
              hide: hide
            }, vue.h('div', [// Show popover header only if format is defined
            masks.dayPopover && vue.h('div', {
              class: ['vc-day-popover-header']
            }, [dayTitle]), attributes.map(function (attribute) {
              return vue.h(script$2, {
                key: attribute.key,
                attribute: attribute
              });
            })]));
          }
        });
      }; // Render calendar container


      return vue.h('div', {
        'data-helptext': 'Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year',
        class: ['vc-container', "vc-".concat(this.$theme.color), {
          'vc-is-expanded': this.isExpanded,
          'vc-is-dark': this.$theme.isDark
        }],
        onKeydown: this.handleKeydown,
        onMouseup: function onMouseup(e) {
          return e.preventDefault();
        },
        ref: 'container'
      }, [vue.h('div', {
        class: ['vc-pane-container', {
          'in-transition': this.inTransition
        }]
      }, [vue.h(script, {
        name: this.transitionName,
        'on-before-enter': function onBeforeEnter() {
          _this.inTransition = true;
        },
        'on-after-enter': function onAfterEnter() {
          _this.inTransition = false;
        }
      }, {
        default: function _default() {
          return vue.h('div', _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
            class: 'vc-pane-layout',
            style: {
              gridTemplateColumns: "repeat(".concat(_this.columns, ", 1fr)")
            },
            key: _this.firstPage ? _this.firstPage.key : ''
          }), _this.pages.map(function (page, i) {
            return vue.h(script$6, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
              key: page && page.key,
              attributes: _this.store,
              titlePosition: _this.titlePosition_,
              page: page,
              minPage: _this.minPage_,
              maxPage: _this.maxPage_,
              canMove: _this.canMove,
              'onUpdate:page': function onUpdatePage(e) {
                _this.refreshPages({
                  page: e,
                  position: i + 1
                });
              },
              onDayfocusin: function onDayfocusin(e) {
                _this.lastFocusedDay = e;

                _this.$emit('dayfocusin', e);
              },
              onDayfocusout: function onDayfocusout(e) {
                _this.lastFocusedDay = null;

                _this.$emit('dayfocusout', e);
              },
              slots: _this.$slots
            }), _this.$slots);
          }));
        }
      }), vue.h('div', {
        class: ["vc-arrows-container title-".concat(this.titlePosition_)]
      }, [getArrowButton(true), getArrowButton(false)]), this.$slots.footer && this.$slots.footer()]), getDayPopover()]);
    },
    mixins: [rootMixin$1, slotMixin$1],
    provide: function provide() {
      return {
        sharedState: this.sharedState
      };
    },
    props: {
      rows: {
        type: Number,
        default: 1
      },
      columns: {
        type: Number,
        default: 1
      },
      step: Number,
      titlePosition: String,
      isExpanded: Boolean,
      fromDate: Date,
      toDate: Date,
      fromPage: Object,
      toPage: Object,
      minPage: Object,
      maxPage: Object,
      transition: String,
      attributes: [Object, Array],
      trimWeeks: Boolean,
      disablePageSwipe: Boolean
    },
    data: function data() {
      return {
        pages: [],
        store: null,
        lastFocusedDay: null,
        focusableDay: new Date().getDate(),
        transitionName: '',
        inTransition: false,
        sharedState: {
          dayPopoverId: createGuid(),
          theme: {},
          masks: {},
          locale: {}
        }
      };
    },
    computed: {
      titlePosition_: function titlePosition_() {
        return this.propOrDefault('titlePosition', 'titlePosition');
      },
      firstPage: function firstPage() {
        return head_1(this.pages);
      },
      lastPage: function lastPage() {
        return last_1(this.pages);
      },
      minPage_: function minPage_() {
        return this.minPage || this.pageForDate(this.minDate);
      },
      maxPage_: function maxPage_() {
        return this.maxPage || this.pageForDate(this.maxDate);
      },
      count: function count() {
        return this.rows * this.columns;
      },
      step_: function step_() {
        return this.step || this.count;
      },
      canMovePrev: function canMovePrev() {
        return !pageIsValid(this.minPage_) || pageIsAfterPage(this.pages[0], this.minPage_);
      },
      canMoveNext: function canMoveNext() {
        return !pageIsValid(this.maxPage_) || pageIsBeforePage(this.pages[this.pages.length - 1], this.maxPage_);
      }
    },
    watch: {
      $locale: function $locale() {
        this.refreshLocale();
        this.refreshPages({
          page: this.firstPage,
          ignoreCache: true
        });
        this.initStore();
      },
      $theme: function $theme() {
        this.refreshTheme();
        this.initStore();
      },
      fromDate: function fromDate() {
        this.refreshPages();
      },
      fromPage: function fromPage(val) {
        var firstPage = this.pages && this.pages[0];
        if (pageIsEqualToPage(val, firstPage)) return;
        this.refreshPages();
      },
      toPage: function toPage(val) {
        var lastPage = this.pages && this.pages[this.pages.length - 1];
        if (pageIsEqualToPage(val, lastPage)) return;
        this.refreshPages();
      },
      count: function count() {
        this.refreshPages();
      },
      attributes: function attributes(val) {
        var _this$store$refresh = this.store.refresh(val),
            adds = _this$store$refresh.adds,
            deletes = _this$store$refresh.deletes;

        this.refreshAttrs(this.pages, adds, deletes);
      },
      pages: function pages(val) {
        this.refreshAttrs(val, this.store.list, null, true);
      },
      disabledAttribute: function disabledAttribute() {
        this.refreshDisabledDays();
      },
      lastFocusedDay: function lastFocusedDay(val) {
        if (val) {
          this.focusableDay = val.day;
          this.refreshFocusableDays();
        }
      },
      inTransition: function inTransition(val) {
        if (val) {
          this.$emit('transition-start');
        } else {
          this.$emit('transition-end');

          if (this.transitionPromise) {
            this.transitionPromise.resolve(true);
            this.transitionPromise = null;
          }
        }
      }
    },
    created: function created() {
      this.refreshLocale();
      this.refreshTheme();
      this.initStore();
      this.refreshPages();
    },
    mounted: function mounted() {
      var _this2 = this;

      if (!this.disablePageSwipe) {
        // Add swipe handler to move to next and previous pages
        this.removeHandlers = addHorizontalSwipeHandler(this.$refs.container, function (_ref2) {
          var toLeft = _ref2.toLeft,
              toRight = _ref2.toRight;

          if (toLeft) {
            _this2.moveNext();
          } else if (toRight) {
            _this2.movePrev();
          }
        }, this.$defaults.touch);
      }
    },
    beforeUnmount: function beforeUnmount() {
      if (!this.disablePageSwipe) {
        this.removeHandlers();
      }
    },
    methods: {
      refreshLocale: function refreshLocale() {
        this.sharedState.locale = this.$locale;
        this.sharedState.masks = this.$locale.masks;
      },
      refreshTheme: function refreshTheme() {
        this.sharedState.theme = this.$theme;
      },
      canMove: function canMove(page) {
        return pageIsBetweenPages(page, this.minPage_, this.maxPage_);
      },
      movePrev: function movePrev(opts) {
        return this.move(-this.step_, opts);
      },
      moveNext: function moveNext(opts) {
        return this.move(this.step_, opts);
      },
      move: function move(arg) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var page = this.$locale.toPage(arg, this.firstPage); // Pin position if arg is number

        if (isNumber_1(arg)) opts.position = 1; // Reject unresolved pages

        if (!page) return Promise.reject(new Error("Invalid argument provided: ".concat(arg))); // Set position if unspecified and out of current bounds

        if (!opts.position) {
          if (pageIsBeforePage(page, this.firstPage)) {
            opts.position = -1;
          } else if (pageIsAfterPage(page, this.lastPage)) {
            opts.position = 1;
          } else {
            // Page already displayed with no specified position, so we're done
            return Promise.resolve(true);
          }
        } // Calculate new `fromPage`


        var _this$getTargetPageRa = this.getTargetPageRange(page, opts),
            fromPage = _this$getTargetPageRa.fromPage; // Move to new `fromPage` if it's different from the current one


        if (fromPage && !pageIsEqualToPage(fromPage, this.firstPage)) {
          return this.refreshPages(_objectSpread2(_objectSpread2({}, opts), {}, {
            position: 1,
            page: fromPage
          }));
        }

        return Promise.resolve(true);
      },
      focusDate: function focusDate(date) {
        var _this3 = this;

        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // Move to the given date
        this.move(date, opts).then(function () {
          // Set focus on the element for the date
          var focusableEl = _this3.$el.querySelector(".id-".concat(_this3.$locale.getDayId(date), ".in-month .vc-focusable"));

          if (focusableEl) {
            focusableEl.focus();
            return Promise.resolve(true);
          }

          return Promise.resolve(false);
        });
      },
      showPageRange: function showPageRange(range, opts) {
        var fromPage;
        var toPage;

        if (isDate$1(range)) {
          fromPage = this.pageForDate(range);
        } else if (isObject$1(range)) {
          var month = range.month,
              year = range.year;
          var from = range.from,
              to = range.to;

          if (isNumber_1(month) && isNumber_1(year)) {
            fromPage = range;
          } else if (from || to) {
            fromPage = isDate$1(from) ? this.pageForDate(from) : from;
            toPage = isDate$1(to) ? this.pageForDate(to) : to;
          }
        } else {
          return Promise.reject(new Error('Invalid page range provided.'));
        }

        var lastPage = this.lastPage;
        var page = fromPage; // Offset page from the desired `toPage`

        if (pageIsAfterPage(toPage, lastPage)) {
          page = addPages(toPage, -(this.pages.length - 1));
        } // But no earlier than the desired `fromPage`


        if (pageIsBeforePage(page, fromPage)) {
          page = fromPage;
        }

        return this.refreshPages(_objectSpread2(_objectSpread2({}, opts), {}, {
          page: page
        }));
      },
      getTargetPageRange: function getTargetPageRange(page) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            position = _ref3.position,
            force = _ref3.force;

        // Calculate the page to start displaying from
        var fromPage = null; // 1. Try the page parameter

        if (pageIsValid(page)) {
          var pagesToAdd = position > 0 ? 1 - position : -(this.count + position);
          fromPage = addPages(page, pagesToAdd);
        } else {
          // 2. Try the fromPage prop
          fromPage = this.fromPage || this.pageForDate(this.normalizeDate(this.fromDate));

          if (!pageIsValid(fromPage)) {
            // 3. Try the toPage prop
            var _toPage = this.toPage || this.pageForDate(this.normalizeDate(this.toPage));

            if (pageIsValid(_toPage)) {
              fromPage = addPages(_toPage, 1 - this.count);
            } else {
              // 4. Try the first attribute
              fromPage = this.getPageForAttributes();
            }
          }
        } // 5. Fall back to today's page


        fromPage = pageIsValid(fromPage) ? fromPage : this.pageForThisMonth();
        var toPage = addPages(fromPage, this.count - 1); // 6. Adjust for min/max pages if not forced

        if (!force) {
          if (pageIsBeforePage(fromPage, this.minPage_)) {
            fromPage = this.minPage_;
          } else if (pageIsAfterPage(toPage, this.maxPage_)) {
            fromPage = addPages(this.maxPage_, 1 - this.count);
          }

          toPage = addPages(fromPage, this.count - 1);
        }

        return {
          fromPage: fromPage,
          toPage: toPage
        };
      },
      refreshPages: function refreshPages() {
        var _this4 = this;

        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            page = _ref4.page,
            _ref4$position = _ref4.position,
            position = _ref4$position === void 0 ? 1 : _ref4$position,
            force = _ref4.force,
            transition = _ref4.transition,
            ignoreCache = _ref4.ignoreCache;

        return new Promise(function (resolve, reject) {
          var _this4$getTargetPageR = _this4.getTargetPageRange(page, {
            position: position,
            force: force
          }),
              fromPage = _this4$getTargetPageR.fromPage,
              toPage = _this4$getTargetPageR.toPage; // Create the new pages


          var pages = [];

          for (var i = 0; i < _this4.count; i++) {
            pages.push(_this4.buildPage(addPages(fromPage, i), ignoreCache));
          } // Refresh disabled days for new pages


          _this4.refreshDisabledDays(pages); // Refresh focusable days for new pages


          _this4.refreshFocusableDays(pages); // Assign the transition


          _this4.transitionName = _this4.getPageTransition(_this4.pages[0], pages[0], transition); // Assign the new pages

          _this4.pages = pages; // Emit page update events

          _this4.$emit('update:from-page', fromPage);

          _this4.$emit('update:to-page', toPage);

          if (_this4.transitionName && _this4.transitionName !== 'none') {
            _this4.transitionPromise = {
              resolve: resolve,
              reject: reject
            };
          } else {
            resolve(true);
          }
        });
      },
      refreshDisabledDays: function refreshDisabledDays(pages) {
        var _this5 = this;

        this.getPageDays(pages).forEach(function (d) {
          d.isDisabled = !!_this5.disabledAttribute && _this5.disabledAttribute.intersectsDay(d);
        });
      },
      refreshFocusableDays: function refreshFocusableDays(pages) {
        var _this6 = this;

        this.getPageDays(pages).forEach(function (d) {
          d.isFocusable = d.inMonth && d.day === _this6.focusableDay;
        });
      },
      getPageDays: function getPageDays() {
        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pages;
        return pages.reduce(function (prev, curr) {
          return prev.concat(curr.days);
        }, []);
      },
      getPageTransition: function getPageTransition(oldPage, newPage) {
        var transition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.transition;
        if (transition === 'none') return transition;

        if (transition === 'fade' || !transition && this.count > 1 || !pageIsValid(oldPage) || !pageIsValid(newPage)) {
          return 'fade';
        } // Moving to a previous page


        var movePrev = pageIsBeforePage(newPage, oldPage); // Vertical slide

        if (transition === 'slide-v') {
          return movePrev ? 'slide-down' : 'slide-up';
        } // Horizontal slide


        return movePrev ? 'slide-right' : 'slide-left';
      },
      getPageForAttributes: function getPageForAttributes() {
        var page = null;
        var attr = this.store.pinAttr;

        if (attr && attr.hasDates) {
          var _attr$dates = _slicedToArray(attr.dates, 1),
              date = _attr$dates[0];

          date = date.start || date.date;
          page = this.pageForDate(date);
        }

        return page;
      },
      buildPage: function buildPage(_ref5, ignoreCache) {
        var _this7 = this;

        var month = _ref5.month,
            year = _ref5.year;
        var key = "".concat(year.toString(), "-").concat(month.toString());
        var page = this.pages.find(function (p) {
          return p.key === key;
        });

        if (!page || ignoreCache) {
          var date = new Date(year, month - 1, 15);
          var monthComps = this.$locale.getMonthComps(month, year);
          var prevMonthComps = this.$locale.getPrevMonthComps(month, year);
          var nextMonthComps = this.$locale.getNextMonthComps(month, year);
          page = {
            key: key,
            month: month,
            year: year,
            weeks: this.trimWeeks ? monthComps.weeks : 6,
            title: this.$locale.format(date, this.$locale.masks.title),
            shortMonthLabel: this.$locale.format(date, 'MMM'),
            monthLabel: this.$locale.format(date, 'MMMM'),
            shortYearLabel: year.toString().substring(2),
            yearLabel: year.toString(),
            monthComps: monthComps,
            prevMonthComps: prevMonthComps,
            nextMonthComps: nextMonthComps,
            canMove: function canMove(pg) {
              return _this7.canMove(pg);
            },
            move: function move(pg) {
              return _this7.move(pg);
            },
            moveThisMonth: function moveThisMonth() {
              return _this7.moveThisMonth();
            },
            movePrevMonth: function movePrevMonth() {
              return _this7.move(prevMonthComps);
            },
            moveNextMonth: function moveNextMonth() {
              return _this7.move(nextMonthComps);
            },
            refresh: true
          }; // Assign day info

          page.days = this.$locale.getCalendarDays(page);
        }

        return page;
      },
      initStore: function initStore() {
        // Create a new attribute store
        this.store = new AttributeStore(this.$theme, this.$locale, this.attributes); // Refresh attributes for existing pages

        this.refreshAttrs(this.pages, this.store.list, [], true);
      },
      refreshAttrs: function refreshAttrs() {
        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var adds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var deletes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var reset = arguments.length > 3 ? arguments[3] : undefined;
        if (!arrayHasItems(pages)) return; // For each page...

        pages.forEach(function (p) {
          // For each day...
          p.days.forEach(function (d) {
            var shouldRefresh = false;
            var map = {}; // If resetting...

            if (reset) {
              shouldRefresh = true;
            } else if (hasAny(d.attributesMap, deletes)) {
              // Delete attributes from the delete list
              map = omit_1(d.attributesMap, deletes); // Flag day for refresh

              shouldRefresh = true;
            } else {
              // Get the existing attributes
              map = d.attributesMap || {};
            } // For each attribute to add...


            adds.forEach(function (attr) {
              // Add it if it includes the current day
              var targetDate = attr.intersectsDay(d);

              if (targetDate) {
                var newAttr = _objectSpread2(_objectSpread2({}, attr), {}, {
                  targetDate: targetDate
                });

                map[attr.key] = newAttr; // Flag day for refresh

                shouldRefresh = true;
              }
            }); // Reassign day attributes

            if (shouldRefresh) {
              d.attributesMap = map;
              d.shouldRefresh = true;
            }
          });
        });
      },
      handleKeydown: function handleKeydown(e) {
        var day = this.lastFocusedDay;

        if (day != null) {
          day.event = e;
          this.handleDayKeydown(day);
        }
      },
      handleDayKeydown: function handleDayKeydown(day) {
        var dateFromTime = day.dateFromTime,
            event = day.event; // Set to noon to offset any daylight savings time offset

        var date = dateFromTime(12);
        var newDate = null;

        switch (event.key) {
          case 'ArrowLeft':
            {
              // Move to previous day
              newDate = addDays(date, -1);
              break;
            }

          case 'ArrowRight':
            {
              // Move to next day
              newDate = addDays(date, 1);
              break;
            }

          case 'ArrowUp':
            {
              // Move to previous week
              newDate = addDays(date, -7);
              break;
            }

          case 'ArrowDown':
            {
              // Move to next week
              newDate = addDays(date, 7);
              break;
            }

          case 'Home':
            {
              // Move to first weekday position
              newDate = addDays(date, -day.weekdayPosition + 1);
              break;
            }

          case 'End':
            {
              // Move to last weekday position
              newDate = addDays(date, day.weekdayPositionFromEnd);
              break;
            }

          case 'PageUp':
            {
              if (event.altKey) {
                // Move to previous year w/ Alt/Option key
                newDate = addYears(date, -1);
              } else {
                // Move to previous month
                newDate = addMonths(date, -1);
              }

              break;
            }

          case 'PageDown':
            {
              if (event.altKey) {
                // Move to next year w/ Alt/Option key
                newDate = addYears(date, 1);
              } else {
                // Move to next month
                newDate = addMonths(date, 1);
              }

              break;
            }
        }

        if (newDate) {
          event.preventDefault();
          this.focusDate(newDate);
        }
      }
    }
  };

  var css_248z$7 = ".vc-container {\n  --white: #ffffff;\n  --black: #000000;\n\n  --gray-100: #f7fafc;\n  --gray-200: #edf2f7;\n  --gray-300: #e2e8f0;\n  --gray-400: #cbd5e0;\n  --gray-500: #a0aec0;\n  --gray-600: #718096;\n  --gray-700: #4a5568;\n  --gray-800: #2d3748;\n  --gray-900: #1a202c;\n\n  --red-100: #fff5f5;\n  --red-200: #fed7d7;\n  --red-300: #feb2b2;\n  --red-400: #fc8181;\n  --red-500: #f56565;\n  --red-600: #e53e3e;\n  --red-700: #c53030;\n  --red-800: #9b2c2c;\n  --red-900: #742a2a;\n\n  --orange-100: #fffaf0;\n  --orange-200: #feebc8;\n  --orange-300: #fbd38d;\n  --orange-400: #f6ad55;\n  --orange-500: #ed8936;\n  --orange-600: #dd6b20;\n  --orange-700: #c05621;\n  --orange-800: #9c4221;\n  --orange-900: #7b341e;\n\n  --yellow-100: #fffff0;\n  --yellow-200: #fefcbf;\n  --yellow-300: #faf089;\n  --yellow-400: #f6e05e;\n  --yellow-500: #ecc94b;\n  --yellow-600: #d69e2e;\n  --yellow-700: #b7791f;\n  --yellow-800: #975a16;\n  --yellow-900: #744210;\n\n  --green-100: #f0fff4;\n  --green-200: #c6f6d5;\n  --green-300: #9ae6b4;\n  --green-400: #68d391;\n  --green-500: #48bb78;\n  --green-600: #38a169;\n  --green-700: #2f855a;\n  --green-800: #276749;\n  --green-900: #22543d;\n\n  --teal-100: #e6fffa;\n  --teal-200: #b2f5ea;\n  --teal-300: #81e6d9;\n  --teal-400: #4fd1c5;\n  --teal-500: #38b2ac;\n  --teal-600: #319795;\n  --teal-700: #2c7a7b;\n  --teal-800: #285e61;\n  --teal-900: #234e52;\n\n  --blue-100: #ebf8ff;\n  --blue-200: #bee3f8;\n  --blue-300: #90cdf4;\n  --blue-400: #63b3ed;\n  --blue-500: #4299e1;\n  --blue-600: #3182ce;\n  --blue-700: #2b6cb0;\n  --blue-800: #2c5282;\n  --blue-900: #2a4365;\n\n  --indigo-100: #ebf4ff;\n  --indigo-200: #c3dafe;\n  --indigo-300: #a3bffa;\n  --indigo-400: #7f9cf5;\n  --indigo-500: #667eea;\n  --indigo-600: #5a67d8;\n  --indigo-700: #4c51bf;\n  --indigo-800: #434190;\n  --indigo-900: #3c366b;\n\n  --purple-100: #faf5ff;\n  --purple-200: #e9d8fd;\n  --purple-300: #d6bcfa;\n  --purple-400: #b794f4;\n  --purple-500: #9f7aea;\n  --purple-600: #805ad5;\n  --purple-700: #6b46c1;\n  --purple-800: #553c9a;\n  --purple-900: #44337a;\n\n  --pink-100: #fff5f7;\n  --pink-200: #fed7e2;\n  --pink-300: #fbb6ce;\n  --pink-400: #f687b3;\n  --pink-500: #ed64a6;\n  --pink-600: #d53f8c;\n  --pink-700: #b83280;\n  --pink-800: #97266d;\n  --pink-900: #702459;\n}\n\n  .vc-container.vc-red {\n    --accent-100: var(--red-100);\n    --accent-200: var(--red-200);\n    --accent-300: var(--red-300);\n    --accent-400: var(--red-400);\n    --accent-500: var(--red-500);\n    --accent-600: var(--red-600);\n    --accent-700: var(--red-700);\n    --accent-800: var(--red-800);\n    --accent-900: var(--red-900);\n  }\n\n  .vc-container.vc-orange {\n    --accent-100: var(--orange-100);\n    --accent-200: var(--orange-200);\n    --accent-300: var(--orange-300);\n    --accent-400: var(--orange-400);\n    --accent-500: var(--orange-500);\n    --accent-600: var(--orange-600);\n    --accent-700: var(--orange-700);\n    --accent-800: var(--orange-800);\n    --accent-900: var(--orange-900);\n  }\n\n  .vc-container.vc-yellow {\n    --accent-100: var(--yellow-100);\n    --accent-200: var(--yellow-200);\n    --accent-300: var(--yellow-300);\n    --accent-400: var(--yellow-400);\n    --accent-500: var(--yellow-500);\n    --accent-600: var(--yellow-600);\n    --accent-700: var(--yellow-700);\n    --accent-800: var(--yellow-800);\n    --accent-900: var(--yellow-900);\n  }\n\n  .vc-container.vc-green {\n    --accent-100: var(--green-100);\n    --accent-200: var(--green-200);\n    --accent-300: var(--green-300);\n    --accent-400: var(--green-400);\n    --accent-500: var(--green-500);\n    --accent-600: var(--green-600);\n    --accent-700: var(--green-700);\n    --accent-800: var(--green-800);\n    --accent-900: var(--green-900);\n  }\n\n  .vc-container.vc-teal {\n    --accent-100: var(--teal-100);\n    --accent-200: var(--teal-200);\n    --accent-300: var(--teal-300);\n    --accent-400: var(--teal-400);\n    --accent-500: var(--teal-500);\n    --accent-600: var(--teal-600);\n    --accent-700: var(--teal-700);\n    --accent-800: var(--teal-800);\n    --accent-900: var(--teal-900);\n  }\n\n  .vc-container.vc-blue {\n    --accent-100: var(--blue-100);\n    --accent-200: var(--blue-200);\n    --accent-300: var(--blue-300);\n    --accent-400: var(--blue-400);\n    --accent-500: var(--blue-500);\n    --accent-600: var(--blue-600);\n    --accent-700: var(--blue-700);\n    --accent-800: var(--blue-800);\n    --accent-900: var(--blue-900);\n  }\n\n  .vc-container.vc-indigo {\n    --accent-100: var(--indigo-100);\n    --accent-200: var(--indigo-200);\n    --accent-300: var(--indigo-300);\n    --accent-400: var(--indigo-400);\n    --accent-500: var(--indigo-500);\n    --accent-600: var(--indigo-600);\n    --accent-700: var(--indigo-700);\n    --accent-800: var(--indigo-800);\n    --accent-900: var(--indigo-900);\n  }\n\n  .vc-container.vc-purple {\n    --accent-100: var(--purple-100);\n    --accent-200: var(--purple-200);\n    --accent-300: var(--purple-300);\n    --accent-400: var(--purple-400);\n    --accent-500: var(--purple-500);\n    --accent-600: var(--purple-600);\n    --accent-700: var(--purple-700);\n    --accent-800: var(--purple-800);\n    --accent-900: var(--purple-900);\n  }\n\n  .vc-container.vc-pink {\n    --accent-100: var(--pink-100);\n    --accent-200: var(--pink-200);\n    --accent-300: var(--pink-300);\n    --accent-400: var(--pink-400);\n    --accent-500: var(--pink-500);\n    --accent-600: var(--pink-600);\n    --accent-700: var(--pink-700);\n    --accent-800: var(--pink-800);\n    --accent-900: var(--pink-900);\n  }\n\n  .vc-container {\n\n  --font-normal: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n\n  --text-xs: 12px;\n  --text-sm: 14px;\n  --text-base: 16px;\n  --text-lg: 18px;\n\n  --leading-snug: 1.375;\n\n  --rounded: 0.25rem;\n  --rounded-lg: 0.5rem;\n  --rounded-full: 9999px;\n\n  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n\n  --slide-translate: 22px;\n  --slide-duration: 0.15s;\n  --slide-timing: ease;\n\n  --day-content-transition-time: 0.13s ease-in;\n\n  position: relative;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: -webkit-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: max-content;\n  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    'Helvetica', 'Arial', sans-serif;\n  color: var(--gray-900);\n  background-color: var(--white);\n  border: 1px solid;\n  border-color: var(--gray-400);\n  border-radius: var(--rounded-lg);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: transparent;\n}\n\n  .vc-container,\n  .vc-container * {\n    box-sizing: border-box;\n  }\n\n  .vc-container:focus, .vc-container *:focus {\n      outline: none;\n    }\n\n  .vc-container button,\n  .vc-container [role='button'] {\n    cursor: pointer;\n  }\n\n  .vc-container.vc-is-expanded {\n    min-width: 100%;\n  }\n\n  /* Hides double border within popovers */\n\n  .vc-container .vc-container {\n    border: none;\n  }\n\n  .vc-container.vc-is-dark {\n    color: var(--gray-100);\n    background-color: var(--gray-900);\n    border-color: var(--gray-700);\n  }\n\n  .vc-pane-container {\n  width: 100%;\n  position: relative;\n}\n\n  .vc-pane-container.in-transition {\n    overflow: hidden;\n  }\n\n  .vc-pane-layout {\n  display: grid;\n}\n\n  .vc-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: auto;\n  color: var(--gray-600);\n  border-width: 2px;\n  border-style: solid;\n  border-radius: var(--rounded);\n  border-color: transparent;\n}\n\n  .vc-arrow:hover {\n    background: var(--gray-200);\n  }\n\n  .vc-arrow:focus {\n    border-color: var(--gray-300);\n  }\n\n  .vc-arrow.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n\n  .vc-day-popover-container {\n  color: var(--white);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  padding: 4px 8px;\n  box-shadow: var(--shadow);\n}\n\n  .vc-day-popover-header {\n  font-size: var(--text-xs);\n  color: var(--gray-300);\n  font-weight: var(--font-semibold);\n  text-align: center;\n}\n\n  .vc-arrows-container {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 8px 10px;\n  pointer-events: none;\n}\n\n  .vc-arrows-container.title-left {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n\n  .vc-arrows-container.title-right {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n\n  .vc-is-dark .vc-arrow {\n    color: var(--white);\n  }\n\n  .vc-is-dark .vc-arrow:hover {\n      background: var(--gray-800);\n    }\n\n  .vc-is-dark .vc-arrow:focus {\n      border-color: var(--gray-700);\n    }\n\n  .vc-is-dark .vc-day-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n  }\n\n  .vc-is-dark .vc-day-popover-header {\n    color: var(--gray-700);\n  }\n";
  styleInject(css_248z$7);

  var script$8 = {
    inheritAttrs: false,
    emits: ['update:modelValue'],
    props: {
      options: Array,
      modelValue: null
    }
  };

  var _hoisted_1$2 = {
    class: "vc-select"
  };

  var _hoisted_2$2 = /*#__PURE__*/vue.createVNode("div", {
    class: "vc-select-arrow"
  }, [/*#__PURE__*/vue.createVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [/*#__PURE__*/vue.createVNode("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  })])], -1);

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.createVNode("select", vue.mergeProps(_ctx.$attrs, {
      value: $props.modelValue,
      onChange: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.$emit('update:modelValue', $event.target.value);
      })
    }), [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.options, function (option) {
      return vue.openBlock(), vue.createBlock("option", {
        key: option.value,
        value: option.value,
        disabled: option.disabled
      }, vue.toDisplayString(option.label), 9, ["value", "disabled"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 16, ["value"]), _hoisted_2$2]);
  }

  var css_248z$8 = ".vc-select {\n  position: relative;\n}\n  .vc-select select {\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: block;\n    -webkit-appearance: none;\n            appearance: none;\n    width: 52px;\n    height: 30px;\n    font-size: var(--text-base);\n    font-weight: var(--font-medium);\n    text-align: left;\n    background-color: var(--gray-200);\n    border: 2px solid;\n    border-color: var(--gray-200);\n    color: var(--gray-900);\n    padding: 0 20px 0 8px;\n    border-radius: var(--rounded);\n    line-height: var(--leading-tight);\n    text-indent: 0px;\n    cursor: pointer;\n    -moz-padding-start: 3px;\n  }\n  .vc-select select:hover {\n      color: var(--gray-600);\n    }\n  .vc-select select:focus {\n      outline: 0;\n      border-color: var(--accent-400);\n      background-color: var(--white);\n    }\n  .vc-select-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px 0 0;\n  color: var(--gray-500);\n}\n  .vc-select-arrow svg {\n    width: 16px;\n    height: 16px;\n    fill: currentColor;\n  }\n  .vc-is-dark select {\n    background: var(--gray-700);\n    color: var(--gray-100);\n    border-color: var(--gray-700);\n  }\n  .vc-is-dark select:hover {\n      color: var(--gray-400);\n    }\n  .vc-is-dark select:focus {\n      border-color: var(--accent-500);\n      background-color: var(--gray-800);\n    }\n";
  styleInject(css_248z$8);

  script$8.render = render$4;

  var script$9 = {
    name: 'TimePicker',
    components: {
      TimeSelect: script$8
    },
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: Object,
        required: true
      },
      locale: {
        type: Object,
        required: true
      },
      theme: {
        type: Object,
        required: true
      },
      is24hr: {
        type: Boolean,
        default: true
      },
      minuteIncrement: {
        type: Number,
        default: 1
      },
      showBorder: Boolean
    },
    data: function data() {
      return {
        hours: 0,
        minutes: 0,
        isAM: true
      };
    },
    computed: {
      date: function date() {
        var date = this.locale.normalizeDate(this.modelValue);

        if (this.modelValue.hours === 24) {
          date = new Date(date.getTime() - 1);
        }

        return date;
      },
      hourOptions: function hourOptions() {
        var options12 = [{
          value: 0,
          label: '12'
        }, {
          value: 1,
          label: '1'
        }, {
          value: 2,
          label: '2'
        }, {
          value: 3,
          label: '3'
        }, {
          value: 4,
          label: '4'
        }, {
          value: 5,
          label: '5'
        }, {
          value: 6,
          label: '6'
        }, {
          value: 7,
          label: '7'
        }, {
          value: 8,
          label: '8'
        }, {
          value: 9,
          label: '9'
        }, {
          value: 10,
          label: '10'
        }, {
          value: 11,
          label: '11'
        }];
        var options24 = [{
          value: 0,
          label: '00'
        }, {
          value: 1,
          label: '01'
        }, {
          value: 2,
          label: '02'
        }, {
          value: 3,
          label: '03'
        }, {
          value: 4,
          label: '04'
        }, {
          value: 5,
          label: '05'
        }, {
          value: 6,
          label: '06'
        }, {
          value: 7,
          label: '07'
        }, {
          value: 8,
          label: '08'
        }, {
          value: 9,
          label: '09'
        }, {
          value: 10,
          label: '10'
        }, {
          value: 11,
          label: '11'
        }, {
          value: 12,
          label: '12'
        }, {
          value: 13,
          label: '13'
        }, {
          value: 14,
          label: '14'
        }, {
          value: 15,
          label: '15'
        }, {
          value: 16,
          label: '16'
        }, {
          value: 17,
          label: '17'
        }, {
          value: 18,
          label: '18'
        }, {
          value: 19,
          label: '19'
        }, {
          value: 20,
          label: '20'
        }, {
          value: 21,
          label: '21'
        }, {
          value: 22,
          label: '22'
        }, {
          value: 23,
          label: '23'
        }];
        if (this.is24hr) return options24;
        return options12;
      },
      minuteOptions: function minuteOptions() {
        var options = [];
        var m = 0;
        var added = false;

        while (m <= 59) {
          options.push({
            value: m,
            label: pad(m, 2)
          });
          added = added || m === this.minutes;
          m += this.minuteIncrement; // Add disabled option if interval has skipped it

          if (!added && m > this.minutes) {
            added = true;
            options.push({
              value: this.minutes,
              label: pad(this.minutes, 2),
              disabled: true
            });
          }
        }

        return options;
      }
    },
    watch: {
      modelValue: function modelValue() {
        this.setup();
      },
      hours: function hours() {
        this.updateValue();
      },
      minutes: function minutes() {
        this.updateValue();
      },
      isAM: function isAM() {
        this.updateValue();
      }
    },
    created: function created() {
      this.setup();
    },
    methods: {
      protected: function _protected(fn) {
        var _this = this;

        if (this.busy) return;
        this.busy = true;
        fn();
        this.$nextTick(function () {
          return _this.busy = false;
        });
      },
      setup: function setup() {
        var _this2 = this;

        this.protected(function () {
          var hours = _this2.modelValue.hours;
          if (hours === 24) hours = 0;
          var isAM = true;

          if (!_this2.is24hr && hours >= 12) {
            hours -= 12;
            isAM = false;
          }

          _this2.hours = hours;
          _this2.minutes = _this2.modelValue.minutes;
          _this2.isAM = isAM;
        });
      },
      updateValue: function updateValue() {
        var _this3 = this;

        this.protected(function () {
          var hours = _this3.hours;

          if (!_this3.is24hr && !_this3.isAM) {
            hours += 12;
          }

          _this3.$emit('update:modelValue', _objectSpread2(_objectSpread2({}, _this3.modelValue), {}, {
            hours: hours,
            minutes: _this3.minutes,
            seconds: 0,
            milliseconds: 0
          }));
        });
      }
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-63f66eaa");

  vue.pushScopeId("data-v-63f66eaa");

  var _hoisted_1$3 = /*#__PURE__*/vue.createVNode("div", null, [/*#__PURE__*/vue.createVNode("svg", {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    class: "vc-time-icon",
    stroke: "currentColor"
  }, [/*#__PURE__*/vue.createVNode("path", {
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  })])], -1);

  var _hoisted_2$3 = {
    class: "vc-time-content"
  };
  var _hoisted_3$2 = {
    key: 0,
    class: "vc-time-date"
  };
  var _hoisted_4 = {
    class: "vc-time-weekday"
  };
  var _hoisted_5 = {
    class: "vc-time-month"
  };
  var _hoisted_6 = {
    class: "vc-time-day"
  };
  var _hoisted_7 = {
    class: "vc-time-year"
  };
  var _hoisted_8 = {
    class: "vc-time-select"
  };

  var _hoisted_9 = /*#__PURE__*/vue.createVNode("span", {
    style: {
      "margin": "0 4px"
    }
  }, ":", -1);

  var _hoisted_10 = {
    key: 0,
    class: "vc-am-pm"
  };

  vue.popScopeId();

  var render$5 = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_time_select = vue.resolveComponent("time-select");

    return vue.openBlock(), vue.createBlock("div", {
      class: ["vc-time-picker", [{
        'vc-invalid': !$props.modelValue.isValid,
        'vc-bordered': $props.showBorder
      }]]
    }, [_hoisted_1$3, vue.createVNode("div", _hoisted_2$3, [$options.date ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$2, [vue.createVNode("span", _hoisted_4, vue.toDisplayString($props.locale.format($options.date, 'WWW')), 1), vue.createVNode("span", _hoisted_5, vue.toDisplayString($props.locale.format($options.date, 'MMM')), 1), vue.createVNode("span", _hoisted_6, vue.toDisplayString($props.locale.format($options.date, 'D')), 1), vue.createVNode("span", _hoisted_7, vue.toDisplayString($props.locale.format($options.date, 'YYYY')), 1)])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_8, [vue.createVNode(_component_time_select, {
      modelValue: $data.hours,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return $data.hours = $event;
      }),
      modelModifiers: {
        number: true
      },
      options: $options.hourOptions
    }, null, 8, ["modelValue", "options"]), _hoisted_9, vue.createVNode(_component_time_select, {
      modelValue: $data.minutes,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return $data.minutes = $event;
      }),
      modelModifiers: {
        number: true
      },
      options: $options.minuteOptions
    }, null, 8, ["modelValue", "options"]), !$props.is24hr ? (vue.openBlock(), vue.createBlock("div", _hoisted_10, [vue.createVNode("button", {
      class: {
        active: $data.isAM
      },
      onClick: _cache[3] || (_cache[3] = vue.withModifiers(function ($event) {
        return $data.isAM = true;
      }, ["prevent"])),
      type: "button"
    }, " AM ", 2), vue.createVNode("button", {
      class: {
        active: !$data.isAM
      },
      onClick: _cache[4] || (_cache[4] = vue.withModifiers(function ($event) {
        return $data.isAM = false;
      }, ["prevent"])),
      type: "button"
    }, " PM ", 2)])) : vue.createCommentVNode("", true)])])], 2);
  });

  var css_248z$9 = ".vc-time-picker {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px;\n}\n  .vc-time-picker.vc-invalid {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vc-time-picker.vc-bordered {\n    border-top: 1px solid var(--gray-400);\n  }\n  .vc-time-icon {\n  width: 16px;\n  height: 16px;\n  color: var(--gray-600);\n}\n  .vc-time-content {\n  margin-left: 8px;\n}\n  .vc-time-date {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  text-transform: uppercase;\n  padding: 0 0 4px 4px;\n  margin-top: -4px;\n  line-height: 21px;\n}\n  .vc-time-weekday {\n  color: var(--gray-700);\n  letter-spacing: var(--tracking-wide);\n}\n  .vc-time-month {\n  color: var(--accent-600);\n  margin-left: 8px;\n}\n  .vc-time-day {\n  color: var(--accent-600);\n  margin-left: 4px;\n}\n  .vc-time-year {\n  color: var(--gray-500);\n  margin-left: 8px;\n}\n  .vc-time-select {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n  .vc-am-pm {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: var(--gray-200);\n  color: var(--gray-800);\n  margin-left: 8px;\n  padding: 4px;\n  border-radius: var(--rounded);\n  height: 30px;\n}\n  .vc-am-pm button {\n    font-size: var(--text-sm);\n    font-weight: var(--font-medium);\n    padding: 0 4px;\n    background: transparent;\n    border: 2px solid transparent;\n    border-radius: var(--rounded);\n    line-height: var(--leading-snug);\n  }\n  .vc-am-pm button:hover {\n      color: var(--gray-600);\n    }\n  .vc-am-pm button:focus {\n      border-color: var(--accent-400);\n    }\n  .vc-am-pm button.active {\n      background: var(--accent-600);\n      color: var(--white);\n    }\n  .vc-am-pm button.active:hover {\n        background: var(--accent-500);\n      }\n  .vc-am-pm button.active:focus {\n        border-color: var(--accent-400);\n      }\n  .vc-is-dark .vc-time-picker {\n    border-color: var(--gray-700);\n  }\n  .vc-is-dark .vc-time-icon {\n    color: var(--gray-400);\n  }\n  .vc-is-dark .vc-time-weekday {\n    color: var(--gray-400);\n  }\n  .vc-is-dark .vc-time-month {\n    color: var(--accent-400);\n  }\n  .vc-is-dark .vc-time-day {\n    color: var(--accent-400);\n  }\n  .vc-is-dark .vc-time-year {\n    color: var(--gray-500);\n  }\n  .vc-is-dark .vc-am-pm {\n    background: var(--gray-700);\n  }\n  .vc-is-dark .vc-am-pm:focus {\n      border-color: var(--accent-500);\n    }\n  .vc-is-dark .vc-am-pm button {\n      color: var(--gray-100);\n    }\n  .vc-is-dark .vc-am-pm button:hover {\n        color: var(--gray-400);\n      }\n  .vc-is-dark .vc-am-pm button:focus {\n        border-color: var(--accent-500);\n      }\n  .vc-is-dark .vc-am-pm button.active {\n        background: var(--accent-500);\n        color: var(--white);\n      }\n  .vc-is-dark .vc-am-pm button.active:hover {\n          background: var(--accent-600);\n        }\n  .vc-is-dark .vc-am-pm button.active:focus {\n          border-color: var(--accent-500);\n        }\n";
  styleInject(css_248z$9);

  script$9.render = render$5;
  script$9.__scopeId = "data-v-63f66eaa";

  var _dateConfig = {
    type: 'auto',
    mask: 'iso',
    // String mask when `type === 'string'`
    timeAdjust: '' // 'HH:MM:SS', 'now'

  };
  var _rangeConfig = {
    start: _objectSpread2(_objectSpread2({}, _dateConfig), {}, {
      timeAdjust: '00:00:00'
    }),
    end: _objectSpread2(_objectSpread2({}, _dateConfig), {}, {
      timeAdjust: '23:59:59'
    })
  };
  var PATCH_KEYS = {
    1: ['year', 'month', 'day', 'hours', 'minutes', 'seconds'],
    2: ['year', 'month', 'day'],
    3: ['hours', 'minutes', 'seconds']
  };
  var MODE_DATE = 'date';
  var MODE_DATE_TIME = 'datetime';
  var MODE_TIME = 'time';
  var PATCH_DATE_TIME = 1;
  var PATCH_DATE = 2;
  var PATCH_TIME = 3;
  var script$a = {
    name: 'DatePicker',
    emits: ['update:modelValue', 'drag', 'dayclick', 'daykeydown', 'popover-will-show', 'popover-did-show', 'popover-will-hide', 'popover-did-hide'],
    render: function render() {
      var _this = this;

      // Timepicker renderer
      var timePicker = function timePicker() {
        if (!_this.dateParts) return null;
        var parts = _this.isRange ? _this.dateParts : [_this.dateParts[0]];
        return vue.h('div', {}, _objectSpread2(_objectSpread2({}, _this.$slots), {}, {
          default: function _default() {
            return parts.map(function (dp, idx) {
              return vue.h(script$9, {
                modelValue: dp,
                locale: _this.$locale,
                theme: _this.$theme,
                is24hr: _this.is24hr,
                minuteIncrement: _this.minuteIncrement,
                showBorder: !_this.isTime,
                'onUpdate:modelValue': function onUpdateModelValue(p) {
                  return _this.onTimeInput(p, idx);
                }
              });
            });
          }
        }));
      }; // Calendar renderer


      var calendar = function calendar() {
        return vue.h(script$7, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
          attributes: _this.attributes_,
          theme: _this.$theme,
          locale: _this.$locale,
          minDate: _this.minDateExact || _this.minDate,
          maxDate: _this.maxDateExact || _this.maxDate,
          disabledDates: _this.disabledDates,
          availableDates: _this.availableDates,
          onDayclick: _this.onDayClick,
          onDaykeydown: _this.onDayKeydown,
          onDaymouseenter: _this.onDayMouseEnter,
          ref: 'calendar'
        }), _objectSpread2(_objectSpread2({}, _this.$slots), {}, {
          footer: function footer() {
            return _this.isDateTime ? timePicker() : _this.$slots.footer;
          }
        }));
      }; // Content renderer


      var content = function content() {
        if (_this.isTime) {
          return vue.h('div', {
            class: ['vc-container', "vc-".concat(_this.$theme.color), {
              'vc-is-dark': _this.$theme.isDark
            }]
          }, [timePicker()]);
        }

        return calendar();
      };

      return this.$slots.default ? vue.h('div', [// Slot content
      this.$slots.default(this.slotArgs), // Popover content
      vue.h(script$1, {
        id: this.datePickerPopoverId,
        placement: 'bottom-start',
        contentClass: "vc-container".concat(this.isDark ? ' vc-is-dark' : ''),
        'on-before-show': function onBeforeShow(e) {
          return _this.$emit('popover-will-show', e);
        },
        'on-after-show': function onAfterShow(e) {
          return _this.$emit('popover-did-show', e);
        },
        'on-before-hide': function onBeforeHide(e) {
          return _this.$emit('popover-will-hide', e);
        },
        'on-after-hide': function onAfterHide(e) {
          return _this.$emit('popover-did-hide', e);
        },
        ref: 'popover'
      }, {
        default: content
      })]) : content();
    },
    mixins: [rootMixin$1],
    props: {
      mode: {
        type: String,
        default: MODE_DATE
      },
      modelValue: {
        type: null,
        required: true
      },
      modelConfig: {
        type: Object,
        default: function _default() {
          return _objectSpread2({}, _dateConfig);
        }
      },
      is24hr: Boolean,
      minuteIncrement: Number,
      isRequired: Boolean,
      isRange: Boolean,
      updateOnInput: Boolean,
      inputDebounce: Number,
      popover: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      dragAttribute: Object,
      selectAttribute: Object,
      attributes: Array
    },
    data: function data() {
      return {
        value_: null,
        dateParts: null,
        activeDate: '',
        dragValue: null,
        inputValues: ['', ''],
        updateTimeout: null,
        watchValue: true,
        datePickerPopoverId: createGuid()
      };
    },
    computed: {
      updateOnInput_: function updateOnInput_() {
        return this.propOrDefault('updateOnInput', 'datePicker.updateOnInput');
      },
      inputDebounce_: function inputDebounce_() {
        return this.propOrDefault('inputDebounce', 'datePicker.inputDebounce');
      },
      isDate: function isDate() {
        return this.mode.toLowerCase() === MODE_DATE;
      },
      isDateTime: function isDateTime() {
        return this.mode.toLowerCase() === MODE_DATE_TIME;
      },
      isTime: function isTime() {
        return this.mode.toLowerCase() === MODE_TIME;
      },
      isDragging: function isDragging() {
        return !!this.dragValue;
      },
      inputMask: function inputMask() {
        var masks = this.$locale.masks;

        if (this.isTime) {
          return this.is24hr ? masks.inputTime24hr : masks.inputTime;
        }

        if (this.isDateTime) {
          return this.is24hr ? masks.inputDateTime24hr : masks.inputDateTime;
        }

        return this.$locale.masks.input;
      },
      slotArgs: function slotArgs() {
        var _this2 = this;

        var inputConfig = {
          type: 'string',
          mask: this.inputMask,
          patch: PATCH_DATE_TIME
        };
        var isRange = this.isRange,
            isDragging = this.isDragging,
            updateValue = this.updateValue,
            showPopover = this.showPopover,
            hidePopover = this.hidePopover,
            togglePopover = this.togglePopover;
        var inputValue = isRange ? {
          start: this.inputValues[0],
          end: this.inputValues[1]
        } : this.inputValues[0];
        var events = [true, false].map(function (isStart) {
          return _objectSpread2({
            input: _this2.onInputInput(inputConfig, isStart),
            change: _this2.onInputChange(inputConfig, isStart),
            keyup: _this2.onInputKeyup
          }, getPopoverTriggerEvents(_objectSpread2(_objectSpread2({}, _this2.popover_), {}, {
            id: _this2.datePickerPopoverId,
            callback: function callback(e) {
              if (e.action === 'show' && e.completed) {
                _this2.onInputShow(isStart);
              }
            }
          })));
        });
        var inputEvents = isRange ? {
          start: events[0],
          end: events[1]
        } : events[0];
        return {
          inputValue: inputValue,
          inputEvents: inputEvents,
          isDragging: isDragging,
          updateValue: updateValue,
          showPopover: showPopover,
          hidePopover: hidePopover,
          togglePopover: togglePopover,
          getPopoverTriggerEvents: getPopoverTriggerEvents
        };
      },
      popover_: function popover_() {
        return this.propOrDefault('popover', 'datePicker.popover', 'merge');
      },
      selectAttribute_: function selectAttribute_() {
        if (!this.hasValue(this.value_)) return null;

        var attribute = _objectSpread2(_objectSpread2({
          key: 'select-drag'
        }, this.selectAttribute), {}, {
          dates: this.value_,
          pinPage: true
        });

        var dot = attribute.dot,
            bar = attribute.bar,
            highlight = attribute.highlight,
            content = attribute.content;

        if (!dot && !bar && !highlight && !content) {
          attribute.highlight = true;
        }

        return attribute;
      },
      dragAttribute_: function dragAttribute_() {
        if (!this.isRange || !this.hasValue(this.dragValue)) {
          return null;
        }

        var attribute = _objectSpread2(_objectSpread2({
          key: 'select-drag'
        }, this.dragAttribute), {}, {
          dates: this.dragValue
        });

        var dot = attribute.dot,
            bar = attribute.bar,
            highlight = attribute.highlight,
            content = attribute.content;

        if (!dot && !bar && !highlight && !content) {
          attribute.highlight = {
            startEnd: {
              fillMode: 'outline'
            }
          };
        }

        return attribute;
      },
      attributes_: function attributes_() {
        var attrs = isArrayLikeObject_1(this.attributes) ? _toConsumableArray(this.attributes) : [];

        if (this.dragAttribute_) {
          attrs.push(this.dragAttribute_);
        } else if (this.selectAttribute_) {
          attrs.push(this.selectAttribute_);
        }

        return attrs;
      }
    },
    watch: {
      inputMask: function inputMask() {
        this.formatInput();
      },
      isRange: {
        immediate: true,
        handler: function handler() {
          this.initDateConfig();
        }
      },
      modelValue: function modelValue(val) {
        if (!this.watchValue) return;
        this.forceUpdateValue(val, {
          config: this.modelConfig,
          notify: false,
          formatInput: true,
          hidePopover: false
        });
      },
      value_: function value_() {
        this.refreshDateParts();
      },
      dragValue: function dragValue() {
        this.refreshDateParts();
      },
      timezone: function timezone() {
        this.initDateConfig();
        this.refreshDateParts();
        this.forceUpdateValue(this.value_, {
          notify: true,
          formatInput: true
        });
      }
    },
    created: function created() {
      this.forceUpdateValue(this.modelValue, {
        config: this.modelConfig,
        notify: false,
        formatInput: true,
        hidePopover: false
      });
      this.refreshDateParts();
    },
    mounted: function mounted() {
      var _this3 = this;

      // Handle escape key presses
      on(document, 'keydown', this.onDocumentKeyDown); // Clear drag on background click

      this.offTapOrClickHandler = addTapOrClickHandler(document, function (e) {
        if (document.body.contains(e.target) && !elementContains(_this3.$el, e.target)) {
          _this3.dragValue = null;
        }
      });
    },
    beforeUnmount: function beforeUnmount() {
      // Clean up handlers
      off(document, 'keydown', this.onDocumentKeyDown);
      this.offTapOrClickHandler();
    },
    methods: {
      initDateConfig: function initDateConfig() {
        var config;

        if (this.isRange) {
          config = {
            start: _objectSpread2(_objectSpread2({}, _rangeConfig.start), this.modelConfig.start || this.modelConfig),
            end: _objectSpread2(_objectSpread2({}, _rangeConfig.end), this.modelConfig.end || this.modelConfig)
          };
        } else {
          config = _objectSpread2(_objectSpread2({}, _dateConfig), this.modelConfig);
        }

        this.dateConfig = config;
      },
      getDateParts: function getDateParts(date) {
        return this.$locale.getDateParts(date);
      },
      getDateFromParts: function getDateFromParts(parts) {
        return this.$locale.getDateFromParts(parts);
      },
      refreshDateParts: function refreshDateParts() {
        var _this4 = this;

        var value = this.dragValue || this.value_;
        var dateParts = [];

        if (this.isRange) {
          if (value && value.start) {
            dateParts.push(this.getDateParts(value.start));
          } else {
            dateParts.push({});
          }

          if (value && value.end) {
            dateParts.push(this.getDateParts(value.end));
          } else {
            dateParts.push({});
          }
        } else if (value) {
          dateParts.push(this.getDateParts(value));
        } else {
          dateParts.push({});
        }

        this.$nextTick(function () {
          return _this4.dateParts = dateParts;
        });
      },
      onDocumentKeyDown: function onDocumentKeyDown(e) {
        // Clear drag on escape keydown
        if (this.dragValue && e.key === 'Escape') {
          this.dragValue = null;
        }
      },
      onDayClick: function onDayClick(day) {
        this.handleDayClick(day); // Re-emit event

        this.$emit('dayclick', day);
      },
      onDayKeydown: function onDayKeydown(day) {
        switch (day.event.key) {
          case ' ':
          case 'Enter':
            {
              this.handleDayClick(day);
              day.event.preventDefault();
              break;
            }

          case 'Escape':
            {
              this.hidePopover();
            }
        } // Re-emit event


        this.$emit('daykeydown', day);
      },
      handleDayClick: function handleDayClick(day) {
        var _this$popover_ = this.popover_,
            keepVisibleOnInput = _this$popover_.keepVisibleOnInput,
            visibility = _this$popover_.visibility;
        var opts = {
          patch: PATCH_DATE,
          adjustTime: true,
          formatInput: true,
          hidePopover: this.isDate && !keepVisibleOnInput && visibility !== 'visible'
        };

        if (this.isRange) {
          if (!this.isDragging) {
            this.dragTrackingValue = _objectSpread2({}, day.range);
          } else {
            this.dragTrackingValue.end = day.date;
          }

          opts.isDragging = !this.isDragging;
          opts.hidePopover = opts.hidePopover && !opts.isDragging;
          this.updateValue(this.dragTrackingValue, opts);
        } else {
          opts.clearIfEqual = !this.isRequired;
          this.updateValue(day.date, opts);
        }
      },
      onDayMouseEnter: function onDayMouseEnter(day) {
        if (!this.isDragging) return;
        this.dragTrackingValue.end = day.date;
        this.updateValue(this.dragTrackingValue, {
          patch: PATCH_DATE,
          adjustTime: true
        });
      },
      onTimeInput: function onTimeInput(parts, idx) {
        var opts = {
          config: {
            type: 'object'
          },
          patch: PATCH_TIME
        };

        if (this.isRange) {
          var start = idx === 0 ? parts : this.dateParts[0];
          var end = idx === 0 ? this.dateParts[1] : parts;
          this.updateValue({
            start: start,
            end: end
          }, opts);
        } else {
          this.updateValue(parts, opts);
        }
      },
      onInputInput: function onInputInput(config, isStart) {
        var _this5 = this;

        return function (e) {
          if (!_this5.updateOnInput_) return;
          var inputValue = e.target.value;

          _this5.inputValues.splice(isStart ? 0 : 1, 1, inputValue);

          if (_this5.isRange) {
            inputValue = {
              start: _this5.inputValues[0],
              end: _this5.inputValues[1]
            };
          }

          _this5.updateValue(inputValue, {
            config: config,
            patch: PATCH_DATE_TIME,
            formatInput: false,
            hidePopover: false,
            debounce: _this5.inputDebounce_
          }).then(function () {
            return _this5.adjustPageRange(isStart);
          });
        };
      },
      onInputChange: function onInputChange(config, isStart) {
        var _this6 = this;

        return function (e) {
          var inputValue = e.target.value;

          _this6.inputValues.splice(isStart ? 0 : 1, 1, inputValue);

          var value = _this6.isRange ? {
            start: _this6.inputValues[0],
            end: _this6.inputValues[1]
          } : inputValue;

          _this6.updateValue(value, {
            config: config,
            formatInput: true,
            hidePopover: false
          }).then(function () {
            _this6.adjustPageRange(isStart);
          });
        };
      },
      onInputShow: function onInputShow(isStart) {
        this.adjustPageRange(isStart);
      },
      onInputKeyup: function onInputKeyup(e) {
        // Escape key only
        if (e.key !== 'Escape') return;
        this.updateValue(this.value_, {
          formatInput: true,
          hidePopover: true
        });
      },
      updateValue: function updateValue(value) {
        var _this7 = this;

        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        clearTimeout(this.updateTimeout);
        return new Promise(function (resolve) {
          var debounce = opts.debounce,
              args = _objectWithoutProperties(opts, ["debounce"]);

          if (debounce > 0) {
            _this7.updateTimeout = setTimeout(function () {
              _this7.forceUpdateValue(value, args);

              resolve(_this7.value_);
            }, debounce);
          } else {
            _this7.forceUpdateValue(value, args);

            resolve(_this7.value_);
          }
        });
      },
      forceUpdateValue: function forceUpdateValue(value) {
        var _this8 = this;

        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$config = _ref.config,
            config = _ref$config === void 0 ? this.dateConfig : _ref$config,
            _ref$patch = _ref.patch,
            patch = _ref$patch === void 0 ? PATCH_DATE_TIME : _ref$patch,
            _ref$notify = _ref.notify,
            notify = _ref$notify === void 0 ? true : _ref$notify,
            _ref$clearIfEqual = _ref.clearIfEqual,
            clearIfEqual = _ref$clearIfEqual === void 0 ? false : _ref$clearIfEqual,
            _ref$formatInput = _ref.formatInput,
            formatInput = _ref$formatInput === void 0 ? true : _ref$formatInput,
            _ref$hidePopover = _ref.hidePopover,
            hidePopover = _ref$hidePopover === void 0 ? false : _ref$hidePopover,
            _ref$adjustTime = _ref.adjustTime,
            adjustTime = _ref$adjustTime === void 0 ? false : _ref$adjustTime,
            _ref$isDragging = _ref.isDragging,
            isDragging = _ref$isDragging === void 0 ? this.isDragging : _ref$isDragging;

        // 1. Normalization
        var normalizedValue = this.normalizeValue(value, config, patch, isDragging); // Reset to previous value if it was cleared but is required

        if (!normalizedValue && this.isRequired) {
          normalizedValue = this.value_;
        } // Time Adjustment


        if (adjustTime) {
          normalizedValue = this.adjustTimeForValue(normalizedValue, config);
        } // 2. Validation (date or range)


        var isDisabled = this.hasValue(normalizedValue) && this.disabledAttribute && this.disabledAttribute.intersectsDate(normalizedValue);

        if (isDisabled) {
          if (isDragging) return;
          normalizedValue = this.value_; // Don't allow hiding popover

          hidePopover = false;
        } // 3. Assignment


        var valueKey = isDragging ? 'dragValue' : 'value_';
        var valueChanged = !this.valuesAreEqual(this[valueKey], normalizedValue); // Clear value if same value selected and clearIfEqual is set

        if (!isDisabled && !valueChanged && clearIfEqual) {
          normalizedValue = null;
          valueChanged = true;
        } // Assign value


        if (valueChanged) {
          this[valueKey] = normalizedValue; // Clear drag value if needed

          if (!isDragging) this.dragValue = null;
        } // 4. Denormalization/Notification


        if (notify && valueChanged) {
          // 4A. Denormalization
          var denormalizedValue = this.denormalizeValue(normalizedValue, this.dateConfig); // 4B. Notification

          var event = this.isDragging ? 'drag' : 'update:modelValue';
          this.watchValue = false;
          this.$emit(event, denormalizedValue);
          this.$nextTick(function () {
            return _this8.watchValue = true;
          });
        } // 5. Hide popover if needed


        if (formatInput) this.formatInput(); // 6. For inputs if needed

        if (hidePopover) this.hidePopover();
      },
      hasValue: function hasValue(value) {
        if (this.isRange) {
          return isObject$1(value) && value.start && value.end;
        }

        return !!value;
      },
      normalizeValue: function normalizeValue(value, config, patch, isDragging) {
        if (!this.hasValue(value)) return null;
        var patchKeys = PATCH_KEYS[patch];

        if (this.isRange) {
          var start = this.normalizeDate(value.start, config.start || config);
          var end = this.normalizeDate(value.end, config.end || config);

          var _result = this.sortRange({
            start: start,
            end: end
          });

          if (patch !== PATCH_DATE_TIME) {
            var startParts = _objectSpread2(_objectSpread2({}, this.dateParts[0]), pick_1(this.getDateParts(_result.start), patchKeys));

            _result.start = this.getDateFromParts(startParts);

            var endParts = _objectSpread2(_objectSpread2({}, this.dateParts[1]), pick_1(this.getDateParts(_result.end), patchKeys));

            _result.end = this.getDateFromParts(endParts);
          }

          return isDragging ? _result : this.sortRange(_result);
        }

        var result = this.normalizeDate(value, config);
        if (patch === PATCH_DATE_TIME) return result;
        result = _objectSpread2(_objectSpread2({}, this.dateParts[0]), pick_1(this.getDateParts(result), patchKeys));
        return this.getDateFromParts(result);
      },
      adjustTimeForValue: function adjustTimeForValue(value, config) {
        if (!this.hasValue(value)) return null;

        if (this.isRange) {
          return {
            start: this.$locale.adjustTimeForDate(value.start, config.start || config),
            end: this.$locale.adjustTimeForDate(value.end, config.end || config)
          };
        }

        return this.$locale.adjustTimeForDate(value, config);
      },
      sortRange: function sortRange(range) {
        var start = range.start,
            end = range.end;

        if (start > end) {
          return {
            start: end,
            end: start
          };
        }

        return {
          start: start,
          end: end
        };
      },
      denormalizeValue: function denormalizeValue(value, config) {
        if (this.isRange) {
          if (!this.hasValue(value)) return null;
          return {
            start: this.$locale.denormalizeDate(value.start, config.start || config),
            end: this.$locale.denormalizeDate(value.end, config.end || config)
          };
        }

        return this.$locale.denormalizeDate(value, config);
      },
      valuesAreEqual: function valuesAreEqual(a, b) {
        if (this.isRange) {
          var aHasValue = this.hasValue(a);
          var bHasValue = this.hasValue(b);
          if (!aHasValue && !bHasValue) return true;
          if (aHasValue !== bHasValue) return false;
          return datesAreEqual(a.start, b.start) && datesAreEqual(a.end, b.end);
        }

        return datesAreEqual(a, b);
      },
      formatInput: function formatInput() {
        var _this9 = this;

        this.$nextTick(function () {
          var opts = {
            type: 'string',
            mask: _this9.inputMask
          };

          var value = _this9.denormalizeValue(_this9.dragValue || _this9.value_, opts);

          if (_this9.isRange) {
            _this9.inputValues = [value && value.start, value && value.end];
          } else {
            _this9.inputValues = [value, ''];
          }
        });
      },
      showPopover: function showPopover$1() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        showPopover(_objectSpread2(_objectSpread2({
          ref: this.$el
        }, opts), {}, {
          isInteractive: true,
          id: this.datePickerPopoverId
        }));
      },
      hidePopover: function hidePopover$1() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        hidePopover(_objectSpread2(_objectSpread2({
          hideDelay: 10
        }, opts), {}, {
          id: this.datePickerPopoverId
        }));
      },
      togglePopover: function togglePopover$1(opts) {
        togglePopover(_objectSpread2(_objectSpread2({
          ref: this.$el
        }, opts), {}, {
          isInteractive: true,
          id: this.datePickerPopoverId
        }));
      },
      adjustPageRange: function adjustPageRange(isStart) {
        var _this10 = this;

        this.$nextTick(function () {
          var calendar = _this10.$refs.calendar;

          var page = _this10.getPageForValue(isStart);

          var position = isStart ? 1 : -1;

          if (page && calendar && !pageIsBetweenPages(page, calendar.firstPage, calendar.lastPage)) {
            calendar.move(page, {
              position: position,
              transition: 'fade'
            });
          }
        });
      },
      getPageForValue: function getPageForValue(isStart) {
        if (this.hasValue(this.value_)) {
          return this.pageForDate(this.isRange ? this.value_[isStart ? 'start' : 'end'] : this.value_);
        }

        return null;
      },
      move: function move(args, opts) {
        if (this.$refs.calendar) {
          return this.$refs.calendar.move(args, opts);
        }

        return Promise.reject(new Error('Navigation disabled while calendar is not yet displayed'));
      },
      focusDate: function focusDate(date, opts) {
        if (this.$refs.calendar) {
          return this.$refs.calendar.focusDate(date, opts);
        }

        return Promise.reject(new Error('Navigation disabled while calendar is not yet displayed'));
      }
    }
  };

  exports.default = script$a;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
