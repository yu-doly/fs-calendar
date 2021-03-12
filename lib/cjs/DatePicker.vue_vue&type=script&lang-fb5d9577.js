'use strict';var helpers=require('./helpers-367e19e6.js'),vue=require('vue'),index=require('./index-021267b8.js'),Calendar_vue_vue_type_style_index_0_id_952f7164_lang=require('./Calendar.vue_vue&type=style&index=0&id=952f7164&lang-24b33318.js'),Popover_vue_vue_type_style_index_0_id_23f8033a_lang=require('./Popover.vue_vue&type=style&index=0&id=23f8033a&lang-30b99d4d.js'),CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang=require('./CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-b48baddc.js'),TimePicker=require('./TimePicker.js');var _dateConfig = {
  type: 'auto',
  mask: 'iso',
  // String mask when `type === 'string'`
  timeAdjust: '' // 'HH:MM:SS', 'now'

};
var _rangeConfig = {
  start: helpers.n(helpers.n({}, _dateConfig), {}, {
    timeAdjust: '00:00:00'
  }),
  end: helpers.n(helpers.n({}, _dateConfig), {}, {
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
var script = {
  name: 'DatePicker',
  emits: ['update:modelValue', 'drag', 'dayclick', 'daykeydown', 'popover-will-show', 'popover-did-show', 'popover-will-hide', 'popover-did-hide'],
  render: function render() {
    var _this = this;

    // Timepicker renderer
    var timePicker = function timePicker() {
      if (!_this.dateParts) return null;
      var parts = _this.isRange ? _this.dateParts : [_this.dateParts[0]];
      return vue.h('div', {}, helpers.n(helpers.n({}, _this.$slots), {}, {
        default: function _default() {
          return parts.map(function (dp, idx) {
            return vue.h(TimePicker['default'], {
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
      return vue.h(Calendar_vue_vue_type_style_index_0_id_952f7164_lang.s, helpers.n(helpers.n({}, _this.$attrs), {}, {
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
      }), helpers.n(helpers.n({}, _this.$slots), {}, {
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
    vue.h(Popover_vue_vue_type_style_index_0_id_23f8033a_lang.s, {
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
  mixins: [index.e],
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
        return helpers.n({}, _dateConfig);
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
      datePickerPopoverId: helpers.o()
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
        return helpers.n({
          input: _this2.onInputInput(inputConfig, isStart),
          change: _this2.onInputChange(inputConfig, isStart),
          keyup: _this2.onInputKeyup
        }, CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.g(helpers.n(helpers.n({}, _this2.popover_), {}, {
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
        getPopoverTriggerEvents: CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.g
      };
    },
    popover_: function popover_() {
      return this.propOrDefault('popover', 'datePicker.popover', 'merge');
    },
    selectAttribute_: function selectAttribute_() {
      if (!this.hasValue(this.value_)) return null;

      var attribute = helpers.n(helpers.n({
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

      var attribute = helpers.n(helpers.n({
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
      var attrs = helpers.d(this.attributes) ? helpers.C(this.attributes) : [];

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
    helpers.D(document, 'keydown', this.onDocumentKeyDown); // Clear drag on background click

    this.offTapOrClickHandler = Popover_vue_vue_type_style_index_0_id_23f8033a_lang.b(document, function (e) {
      if (document.body.contains(e.target) && !helpers.I(_this3.$el, e.target)) {
        _this3.dragValue = null;
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    // Clean up handlers
    helpers.E(document, 'keydown', this.onDocumentKeyDown);
    this.offTapOrClickHandler();
  },
  methods: {
    initDateConfig: function initDateConfig() {
      var config;

      if (this.isRange) {
        config = {
          start: helpers.n(helpers.n({}, _rangeConfig.start), this.modelConfig.start || this.modelConfig),
          end: helpers.n(helpers.n({}, _rangeConfig.end), this.modelConfig.end || this.modelConfig)
        };
      } else {
        config = helpers.n(helpers.n({}, _dateConfig), this.modelConfig);
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
          this.dragTrackingValue = helpers.n({}, day.range);
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
            args = helpers.F(opts, ["debounce"]);

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
        return helpers.w(value) && value.start && value.end;
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
          var startParts = helpers.n(helpers.n({}, this.dateParts[0]), helpers.G(this.getDateParts(_result.start), patchKeys));

          _result.start = this.getDateFromParts(startParts);

          var endParts = helpers.n(helpers.n({}, this.dateParts[1]), helpers.G(this.getDateParts(_result.end), patchKeys));

          _result.end = this.getDateFromParts(endParts);
        }

        return isDragging ? _result : this.sortRange(_result);
      }

      var result = this.normalizeDate(value, config);
      if (patch === PATCH_DATE_TIME) return result;
      result = helpers.n(helpers.n({}, this.dateParts[0]), helpers.G(this.getDateParts(result), patchKeys));
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
        return helpers.H(a.start, b.start) && helpers.H(a.end, b.end);
      }

      return helpers.H(a, b);
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
    showPopover: function showPopover() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.s(helpers.n(helpers.n({
        ref: this.$el
      }, opts), {}, {
        isInteractive: true,
        id: this.datePickerPopoverId
      }));
    },
    hidePopover: function hidePopover() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.h(helpers.n(helpers.n({
        hideDelay: 10
      }, opts), {}, {
        id: this.datePickerPopoverId
      }));
    },
    togglePopover: function togglePopover(opts) {
      CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.t(helpers.n(helpers.n({
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

        if (page && calendar && !helpers.u(page, calendar.firstPage, calendar.lastPage)) {
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
};exports.s=script;