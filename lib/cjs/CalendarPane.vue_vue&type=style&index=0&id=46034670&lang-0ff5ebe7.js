'use strict';var helpers=require('./helpers-367e19e6.js'),vue=require('vue'),index=require('./index-021267b8.js'),CalendarNav=require('./CalendarNav-e7b802a6.js'),Popover_vue_vue_type_style_index_0_id_23f8033a_lang=require('./Popover.vue_vue&type=style&index=0&id=23f8033a&lang-5ab69849.js'),styleInject_es=require('./style-inject.es-06def3b0.js'),CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang=require('./CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-cbe3e993.js');var script = {
  name: 'CalendarPane',
  emits: ['update:page'],
  mixins: [index.j, index.f],
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    // Header
    var header = this.safeSlot('header', this.page) || // Default header
    vue.h('div', {
      class: "vc-header align-".concat(this.titlePosition)
    }, [// Header title
    vue.h('div', helpers.n({
      class: 'vc-title'
    }, this.navPopoverEvents), [this.safeSlot('header-title', this.page, this.page.title)]), // Navigation popover
    vue.h(Popover_vue_vue_type_style_index_0_id_23f8033a_lang.s, {
      id: this.navPopoverId,
      contentClass: 'vc-nav-popover-container'
    }, {
      // Navigation pane
      default: function _default() {
        return vue.h(CalendarNav.s, {
          value: _this.page,
          validator: _this.canMove,
          onInput: function onInput($event) {
            return _this.move($event);
          }
        }, helpers.n({}, _this.$slots));
      }
    })]); // Weeks

    var weeks = vue.h('div', {
      class: 'vc-weeks'
    }, [].concat(helpers.C(this.weekdayLabels.map(function (wl, i) {
      return vue.h('div', {
        key: i + 1,
        class: 'vc-weekday'
      }, [wl]);
    })), helpers.C(this.page.days.map(function (day) {
      return vue.h(CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.a, helpers.n(helpers.n({}, _this.$attrs), {}, {
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
      navPopoverId: helpers.o()
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
      return CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.g({
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
};var css_248z = ".vc-pane {\n  min-width: 250px;\n}\n.vc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 16px 0px 16px;\n}\n.vc-header.align-left {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.vc-header.align-right {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vc-title {\n  font-size: var(--text-lg);\n  color: var(--gray-800);\n  font-weight: var(--font-semibold);\n  line-height: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n.vc-title:hover {\n    opacity: 0.75;\n}\n.vc-weeks {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 6px;\n}\n.vc-weekday {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: var(--text-sm);\n  font-weight: var(--font-bold);\n  line-height: 14px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n  cursor: default;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-weekdays {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vc-nav-popover-container {\n  color: var(--white);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded-lg);\n  padding: 4px;\n  box-shadow: var(--shadow);\n}\n.vc-is-dark .vc-header {\n    color: var(--gray-200);\n}\n.vc-is-dark .vc-title {\n    color: var(--gray-100);\n}\n.vc-is-dark .vc-weekday {\n    color: var(--accent-200);\n}\n.vc-is-dark .vc-nav-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n}\n";
styleInject_es.s(css_248z);exports.s=script;