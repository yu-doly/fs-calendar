'use strict';var helpers=require('./helpers-367e19e6.js'),vue=require('vue'),core=require('@popperjs/core'),CustomTransition=require('./CustomTransition.js'),styleInject_es=require('./style-inject.es-06def3b0.js');// Can't just rely on 'click' event because of oddities in mobile Safari

var addTapOrClickHandler = function addTapOrClickHandler(element, handler) {
  if (!element || !element.addEventListener || !helpers.f(handler)) {
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


  helpers.D(element, 'touchstart', touchstart, {
    passive: true
  });
  helpers.D(element, 'touchmove', touchmove, {
    passive: true
  });
  helpers.D(element, 'click', touchend, {
    passive: true
  });
  helpers.D(element, 'touchend', touchend, {
    passive: true
  }); // Return function that removes event handlers

  return function () {
    helpers.E(element, 'touchstart', touchstart);
    helpers.E(element, 'touchmove', touchmove);
    helpers.E(element, 'click', touchend);
    helpers.E(element, 'touchend', touchend);
  };
};
var addHorizontalSwipeHandler = function addHorizontalSwipeHandler(element, handler, _ref) {
  var maxSwipeTime = _ref.maxSwipeTime,
      minHorizontalSwipeDistance = _ref.minHorizontalSwipeDistance,
      maxVerticalSwipeDistance = _ref.maxVerticalSwipeDistance;

  if (!element || !element.addEventListener || !helpers.f(handler)) {
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


  helpers.D(element, 'touchstart', touchStart, {
    passive: true
  }); // on(element, 'touchmove', touchmove);

  helpers.D(element, 'touchend', touchEnd, {
    passive: true
  }); // Return function that removes event handlers

  return function () {
    helpers.E(element, 'touchstart', touchStart); // off(element, 'touchmove', touchmove);

    helpers.E(element, 'touchend', touchEnd);
  };
};var script = {
  name: 'Popover',
  emits: ['before-show', 'after-show', 'before-hide', 'after-hide'],
  render: function render() {
    var _this = this;

    return vue.h('div', {
      class: ['vc-popover-content-wrapper', {
        'is-interactive': this.isInteractive
      }],
      ref: 'popover'
    }, [vue.h(CustomTransition['default'], {
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

      return helpers.f(this.$slots.default) && this.$slots.default({
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
        }].concat(helpers.C(this.modifiers || [])),
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
        oldVal.callback(helpers.n(helpers.n({}, oldVal), {}, {
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
      helpers.D(this.popoverEl, 'click', this.onClick);
      helpers.D(this.popoverEl, 'mouseover', this.onMouseOver);
      helpers.D(this.popoverEl, 'mouseleave', this.onMouseLeave);
      helpers.D(this.popoverEl, 'focusin', this.onFocusIn);
      helpers.D(this.popoverEl, 'focusout', this.onFocusOut);
      helpers.D(document, 'keydown', this.onDocumentKeydown);
      this.removeDocHandler = addTapOrClickHandler(document, this.onDocumentClick);
      helpers.D(document, 'show-popover', this.onDocumentShowPopover);
      helpers.D(document, 'hide-popover', this.onDocumentHidePopover);
      helpers.D(document, 'toggle-popover', this.onDocumentTogglePopover);
      helpers.D(document, 'update-popover', this.onDocumentUpdatePopover);
    },
    removeEvents: function removeEvents() {
      helpers.E(this.popoverEl, 'click', this.onClick);
      helpers.E(this.popoverEl, 'mouseover', this.onMouseOver);
      helpers.E(this.popoverEl, 'mouseleave', this.onMouseLeave);
      helpers.E(this.popoverEl, 'focusin', this.onFocusIn);
      helpers.E(this.popoverEl, 'focusout', this.onFocusOut);
      helpers.E(document, 'keydown', this.onDocumentKeydown);
      if (this.removeDocHandler) this.removeDocHandler();
      helpers.E(document, 'show-popover', this.onDocumentShowPopover);
      helpers.E(document, 'hide-popover', this.onDocumentHidePopover);
      helpers.E(document, 'toggle-popover', this.onDocumentTogglePopover);
      helpers.E(document, 'update-popover', this.onDocumentUpdatePopover);
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
      if (!e.relatedTarget || !helpers.I(this.popoverEl, e.relatedTarget)) {
        this.isFocused = false;
        if (!this.isHovered && this.autoHide) this.hide();
      }
    },
    onDocumentClick: function onDocumentClick(e) {
      if (!this.$refs.popover || !this.ref) {
        return;
      } // Don't hide if target element is contained within popover ref or content


      if (helpers.I(this.popoverEl, e.target) || helpers.I(this.ref, e.target)) {
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
        Object.assign(_this3, helpers.A(opts, ['id']));

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
          opts.callback(helpers.n(helpers.n({}, opts), {}, {
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
      Object.assign(this, helpers.A(opts, ['id']));
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
};var css_248z = "";
styleInject_es.s(css_248z);exports.a=addHorizontalSwipeHandler;exports.b=addTapOrClickHandler;exports.s=script;