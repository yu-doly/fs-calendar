'use strict';var helpers=require('./helpers-367e19e6.js'),vue=require('vue'),index=require('./index-021267b8.js'),CalendarNav=require('./CalendarNav-bf4a6ffe.js'),Popover_vue_vue_type_style_index_0_id_23f8033a_lang=require('./Popover.vue_vue&type=style&index=0&id=23f8033a&lang-30b99d4d.js'),styleInject_es=require('./style-inject.es-06def3b0.js'),CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang=require('./CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-b48baddc.js');var script = {
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
};var css_248z = "";
styleInject_es.s(css_248z);exports.s=script;