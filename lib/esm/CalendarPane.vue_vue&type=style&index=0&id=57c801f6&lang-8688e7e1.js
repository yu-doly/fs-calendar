import { n as _objectSpread2, C as _toConsumableArray, o as createGuid } from './helpers-125bb300.js';
import { h } from 'vue';
import { j as childMixin, f as slotMixin } from './index-f38a9194.js';
import { s as script$2 } from './CalendarNav-524b9f55.js';
import { s as script$1 } from './Popover.vue_vue&type=style&index=0&id=23f8033a&lang-3cc7f1bc.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import { a as script$3, g as getPopoverTriggerEvents } from './CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-04c0e522.js';

var script = {
  name: 'CalendarPane',
  emits: ['update:page'],
  mixins: [childMixin, slotMixin],
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    // Header
    var header = this.safeSlot('header', this.page) || // Default header
    h('div', {
      class: "vc-header align-".concat(this.titlePosition)
    }, [// Header title
    h('div', _objectSpread2({
      class: 'vc-title'
    }, this.navPopoverEvents), [this.safeSlot('header-title', this.page, this.page.title)]), // Navigation popover
    h(script$1, {
      id: this.navPopoverId,
      contentClass: 'vc-nav-popover-container'
    }, {
      // Navigation pane
      default: function _default() {
        return h(script$2, {
          value: _this.page,
          validator: _this.canMove,
          onInput: function onInput($event) {
            return _this.move($event);
          }
        }, _objectSpread2({}, _this.$slots));
      }
    })]); // Weeks

    var weeks = h('div', {
      class: 'vc-weeks'
    }, [].concat(_toConsumableArray(this.weekdayLabels.map(function (wl, i) {
      return h('div', {
        key: i + 1,
        class: 'vc-weekday'
      }, [wl]);
    })), _toConsumableArray(this.page.days.map(function (day) {
      return h(script$3, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
        day: day,
        slots: _this.$slots
      }), _this.$slots);
    }))));
    return h('div', {
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

var css_248z = "";
styleInject(css_248z);

export { script as s };
