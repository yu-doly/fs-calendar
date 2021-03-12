'use strict';var helpers=require('./helpers-367e19e6.js'),vue=require('vue'),index=require('./index-021267b8.js'),CalendarNav=require('./CalendarNav-e7b802a6.js'),Popover_vue_vue_type_style_index_0_id_23f8033a_lang=require('./Popover.vue_vue&type=style&index=0&id=23f8033a&lang-5ab69849.js'),CustomTransition=require('./CustomTransition.js'),styleInject_es=require('./style-inject.es-06def3b0.js'),PopoverRow=require('./PopoverRow.js'),SvgIcon=require('./SvgIcon.js'),CalendarPane_vue_vue_type_style_index_0_id_46034670_lang=require('./CalendarPane.vue_vue&type=style&index=0&id=46034670&lang-0ff5ebe7.js');/**
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
  index.r(2, arguments);
  var date = index.b(dirtyDate);
  var amount = index.c(dirtyAmount);

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
}/**
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
  index.r(2, arguments);
  var amount = index.c(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}var AttributeStore = /*#__PURE__*/function () {
  function AttributeStore(theme, locale, attrs) {
    helpers.k(this, AttributeStore);

    this.theme = theme;
    this.locale = locale;
    this.map = {};
    this.refresh(attrs, true);
  }

  helpers.j(AttributeStore, [{
    key: "refresh",
    value: function refresh(attrs, reset) {
      var _this = this;

      var map = {};
      var list = [];
      var pinAttr = null; // Keep record of added and deleted attributes

      var adds = [];
      var deletes = reset ? new Set() : new Set(Object.keys(this.map));

      if (helpers.l(attrs)) {
        attrs.forEach(function (attr, i) {
          if (!attr || !attr.dates) return;
          var key = attr.key ? attr.key.toString() : i.toString();
          var order = attr.order || 0;
          var hashcode = helpers.m(JSON.stringify(attr));
          var exAttr = _this.map[key]; // If just tracking delta changes and attribute hash hasn't changed

          if (!reset && exAttr && exAttr.hashcode === hashcode) {
            // ...don't need to replace the attribute
            deletes.delete(key);
          } else {
            // Otherwise, create attribute and add to the list of adds
            exAttr = new index.A(helpers.n({
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
}();var script = {
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
        return helpers.B(e, click);
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
      })) || vue.h(SvgIcon['default'], {
        name: isPrev ? 'left-arrow' : 'right-arrow'
      })]);
    }; // Day popover


    var getDayPopover = function getDayPopover() {
      return vue.h(Popover_vue_vue_type_style_index_0_id_23f8033a_lang.s, {
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
            return vue.h(PopoverRow['default'], {
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
    }, [vue.h(CustomTransition['default'], {
      name: this.transitionName,
      'on-before-enter': function onBeforeEnter() {
        _this.inTransition = true;
      },
      'on-after-enter': function onAfterEnter() {
        _this.inTransition = false;
      }
    }, {
      default: function _default() {
        return vue.h('div', helpers.n(helpers.n({}, _this.$attrs), {}, {
          class: 'vc-pane-layout',
          style: {
            gridTemplateColumns: "repeat(".concat(_this.columns, ", 1fr)")
          },
          key: _this.firstPage ? _this.firstPage.key : ''
        }), _this.pages.map(function (page, i) {
          return vue.h(CalendarPane_vue_vue_type_style_index_0_id_46034670_lang.s, helpers.n(helpers.n({}, _this.$attrs), {}, {
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
  mixins: [index.e, index.f],
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
        dayPopoverId: helpers.o(),
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
      return CalendarNav.h(this.pages);
    },
    lastPage: function lastPage() {
      return helpers.p(this.pages);
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
      return !helpers.q(this.minPage_) || helpers.r(this.pages[0], this.minPage_);
    },
    canMoveNext: function canMoveNext() {
      return !helpers.q(this.maxPage_) || helpers.s(this.pages[this.pages.length - 1], this.maxPage_);
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
      if (helpers.t(val, firstPage)) return;
      this.refreshPages();
    },
    toPage: function toPage(val) {
      var lastPage = this.pages && this.pages[this.pages.length - 1];
      if (helpers.t(val, lastPage)) return;
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
      this.removeHandlers = Popover_vue_vue_type_style_index_0_id_23f8033a_lang.a(this.$refs.container, function (_ref2) {
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
    this.removeHandlers();
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
      return helpers.u(page, this.minPage_, this.maxPage_);
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

      if (index.g(arg)) opts.position = 1; // Reject unresolved pages

      if (!page) return Promise.reject(new Error("Invalid argument provided: ".concat(arg))); // Set position if unspecified and out of current bounds

      if (!opts.position) {
        if (helpers.s(page, this.firstPage)) {
          opts.position = -1;
        } else if (helpers.r(page, this.lastPage)) {
          opts.position = 1;
        } else {
          // Page already displayed with no specified position, so we're done
          return Promise.resolve(true);
        }
      } // Calculate new `fromPage`


      var _this$getTargetPageRa = this.getTargetPageRange(page, opts),
          fromPage = _this$getTargetPageRa.fromPage; // Move to new `fromPage` if it's different from the current one


      if (fromPage && !helpers.t(fromPage, this.firstPage)) {
        return this.refreshPages(helpers.n(helpers.n({}, opts), {}, {
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

      if (helpers.v(range)) {
        fromPage = this.pageForDate(range);
      } else if (helpers.w(range)) {
        var month = range.month,
            year = range.year;
        var from = range.from,
            to = range.to;

        if (index.g(month) && index.g(year)) {
          fromPage = range;
        } else if (from || to) {
          fromPage = helpers.v(from) ? this.pageForDate(from) : from;
          toPage = helpers.v(to) ? this.pageForDate(to) : to;
        }
      } else {
        return Promise.reject(new Error('Invalid page range provided.'));
      }

      var lastPage = this.lastPage;
      var page = fromPage; // Offset page from the desired `toPage`

      if (helpers.r(toPage, lastPage)) {
        page = helpers.x(toPage, -(this.pages.length - 1));
      } // But no earlier than the desired `fromPage`


      if (helpers.s(page, fromPage)) {
        page = fromPage;
      }

      return this.refreshPages(helpers.n(helpers.n({}, opts), {}, {
        page: page
      }));
    },
    getTargetPageRange: function getTargetPageRange(page) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          position = _ref3.position,
          force = _ref3.force;

      // Calculate the page to start displaying from
      var fromPage = null; // 1. Try the page parameter

      if (helpers.q(page)) {
        var pagesToAdd = position > 0 ? 1 - position : -(this.count + position);
        fromPage = helpers.x(page, pagesToAdd);
      } else {
        // 2. Try the fromPage prop
        fromPage = this.fromPage || this.pageForDate(this.normalizeDate(this.fromDate));

        if (!helpers.q(fromPage)) {
          // 3. Try the toPage prop
          var _toPage = this.toPage || this.pageForDate(this.normalizeDate(this.toPage));

          if (helpers.q(_toPage)) {
            fromPage = helpers.x(_toPage, 1 - this.count);
          } else {
            // 4. Try the first attribute
            fromPage = this.getPageForAttributes();
          }
        }
      } // 5. Fall back to today's page


      fromPage = helpers.q(fromPage) ? fromPage : this.pageForThisMonth();
      var toPage = helpers.x(fromPage, this.count - 1); // 6. Adjust for min/max pages if not forced

      if (!force) {
        if (helpers.s(fromPage, this.minPage_)) {
          fromPage = this.minPage_;
        } else if (helpers.r(toPage, this.maxPage_)) {
          fromPage = helpers.x(this.maxPage_, 1 - this.count);
        }

        toPage = helpers.x(fromPage, this.count - 1);
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
          pages.push(_this4.buildPage(helpers.x(fromPage, i), ignoreCache));
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

      if (transition === 'fade' || !transition && this.count > 1 || !helpers.q(oldPage) || !helpers.q(newPage)) {
        return 'fade';
      } // Moving to a previous page


      var movePrev = helpers.s(newPage, oldPage); // Vertical slide

      if (transition === 'slide-v') {
        return movePrev ? 'slide-down' : 'slide-up';
      } // Horizontal slide


      return movePrev ? 'slide-right' : 'slide-left';
    },
    getPageForAttributes: function getPageForAttributes() {
      var page = null;
      var attr = this.store.pinAttr;

      if (attr && attr.hasDates) {
        var _attr$dates = helpers.y(attr.dates, 1),
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
      if (!helpers.l(pages)) return; // For each page...

      pages.forEach(function (p) {
        // For each day...
        p.days.forEach(function (d) {
          var shouldRefresh = false;
          var map = {}; // If resetting...

          if (reset) {
            shouldRefresh = true;
          } else if (helpers.z(d.attributesMap, deletes)) {
            // Delete attributes from the delete list
            map = helpers.A(d.attributesMap, deletes); // Flag day for refresh

            shouldRefresh = true;
          } else {
            // Get the existing attributes
            map = d.attributesMap || {};
          } // For each attribute to add...


          adds.forEach(function (attr) {
            // Add it if it includes the current day
            var targetDate = attr.intersectsDay(d);

            if (targetDate) {
              var newAttr = helpers.n(helpers.n({}, attr), {}, {
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
            newDate = index.h(date, -1);
            break;
          }

        case 'ArrowRight':
          {
            // Move to next day
            newDate = index.h(date, 1);
            break;
          }

        case 'ArrowUp':
          {
            // Move to previous week
            newDate = index.h(date, -7);
            break;
          }

        case 'ArrowDown':
          {
            // Move to next week
            newDate = index.h(date, 7);
            break;
          }

        case 'Home':
          {
            // Move to first weekday position
            newDate = index.h(date, -day.weekdayPosition + 1);
            break;
          }

        case 'End':
          {
            // Move to last weekday position
            newDate = index.h(date, day.weekdayPositionFromEnd);
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
};var css_248z = ".vc-container {\n  --white: #ffffff;\n  --black: #000000;\n\n  --gray-100: #f7fafc;\n  --gray-200: #edf2f7;\n  --gray-300: #e2e8f0;\n  --gray-400: #cbd5e0;\n  --gray-500: #a0aec0;\n  --gray-600: #718096;\n  --gray-700: #4a5568;\n  --gray-800: #2d3748;\n  --gray-900: #1a202c;\n\n  --red-100: #fff5f5;\n  --red-200: #fed7d7;\n  --red-300: #feb2b2;\n  --red-400: #fc8181;\n  --red-500: #f56565;\n  --red-600: #e53e3e;\n  --red-700: #c53030;\n  --red-800: #9b2c2c;\n  --red-900: #742a2a;\n\n  --orange-100: #fffaf0;\n  --orange-200: #feebc8;\n  --orange-300: #fbd38d;\n  --orange-400: #f6ad55;\n  --orange-500: #ed8936;\n  --orange-600: #dd6b20;\n  --orange-700: #c05621;\n  --orange-800: #9c4221;\n  --orange-900: #7b341e;\n\n  --yellow-100: #fffff0;\n  --yellow-200: #fefcbf;\n  --yellow-300: #faf089;\n  --yellow-400: #f6e05e;\n  --yellow-500: #ecc94b;\n  --yellow-600: #d69e2e;\n  --yellow-700: #b7791f;\n  --yellow-800: #975a16;\n  --yellow-900: #744210;\n\n  --green-100: #f0fff4;\n  --green-200: #c6f6d5;\n  --green-300: #9ae6b4;\n  --green-400: #68d391;\n  --green-500: #48bb78;\n  --green-600: #38a169;\n  --green-700: #2f855a;\n  --green-800: #276749;\n  --green-900: #22543d;\n\n  --teal-100: #e6fffa;\n  --teal-200: #b2f5ea;\n  --teal-300: #81e6d9;\n  --teal-400: #4fd1c5;\n  --teal-500: #38b2ac;\n  --teal-600: #319795;\n  --teal-700: #2c7a7b;\n  --teal-800: #285e61;\n  --teal-900: #234e52;\n\n  --blue-100: #ebf8ff;\n  --blue-200: #bee3f8;\n  --blue-300: #90cdf4;\n  --blue-400: #63b3ed;\n  --blue-500: #4299e1;\n  --blue-600: #3182ce;\n  --blue-700: #2b6cb0;\n  --blue-800: #2c5282;\n  --blue-900: #2a4365;\n\n  --indigo-100: #ebf4ff;\n  --indigo-200: #c3dafe;\n  --indigo-300: #a3bffa;\n  --indigo-400: #7f9cf5;\n  --indigo-500: #667eea;\n  --indigo-600: #5a67d8;\n  --indigo-700: #4c51bf;\n  --indigo-800: #434190;\n  --indigo-900: #3c366b;\n\n  --purple-100: #faf5ff;\n  --purple-200: #e9d8fd;\n  --purple-300: #d6bcfa;\n  --purple-400: #b794f4;\n  --purple-500: #9f7aea;\n  --purple-600: #805ad5;\n  --purple-700: #6b46c1;\n  --purple-800: #553c9a;\n  --purple-900: #44337a;\n\n  --pink-100: #fff5f7;\n  --pink-200: #fed7e2;\n  --pink-300: #fbb6ce;\n  --pink-400: #f687b3;\n  --pink-500: #ed64a6;\n  --pink-600: #d53f8c;\n  --pink-700: #b83280;\n  --pink-800: #97266d;\n  --pink-900: #702459;\n}\n.vc-container.vc-red {\n    --accent-100: var(--red-100);\n    --accent-200: var(--red-200);\n    --accent-300: var(--red-300);\n    --accent-400: var(--red-400);\n    --accent-500: var(--red-500);\n    --accent-600: var(--red-600);\n    --accent-700: var(--red-700);\n    --accent-800: var(--red-800);\n    --accent-900: var(--red-900);\n}\n.vc-container.vc-orange {\n    --accent-100: var(--orange-100);\n    --accent-200: var(--orange-200);\n    --accent-300: var(--orange-300);\n    --accent-400: var(--orange-400);\n    --accent-500: var(--orange-500);\n    --accent-600: var(--orange-600);\n    --accent-700: var(--orange-700);\n    --accent-800: var(--orange-800);\n    --accent-900: var(--orange-900);\n}\n.vc-container.vc-yellow {\n    --accent-100: var(--yellow-100);\n    --accent-200: var(--yellow-200);\n    --accent-300: var(--yellow-300);\n    --accent-400: var(--yellow-400);\n    --accent-500: var(--yellow-500);\n    --accent-600: var(--yellow-600);\n    --accent-700: var(--yellow-700);\n    --accent-800: var(--yellow-800);\n    --accent-900: var(--yellow-900);\n}\n.vc-container.vc-green {\n    --accent-100: var(--green-100);\n    --accent-200: var(--green-200);\n    --accent-300: var(--green-300);\n    --accent-400: var(--green-400);\n    --accent-500: var(--green-500);\n    --accent-600: var(--green-600);\n    --accent-700: var(--green-700);\n    --accent-800: var(--green-800);\n    --accent-900: var(--green-900);\n}\n.vc-container.vc-teal {\n    --accent-100: var(--teal-100);\n    --accent-200: var(--teal-200);\n    --accent-300: var(--teal-300);\n    --accent-400: var(--teal-400);\n    --accent-500: var(--teal-500);\n    --accent-600: var(--teal-600);\n    --accent-700: var(--teal-700);\n    --accent-800: var(--teal-800);\n    --accent-900: var(--teal-900);\n}\n.vc-container.vc-blue {\n    --accent-100: var(--blue-100);\n    --accent-200: var(--blue-200);\n    --accent-300: var(--blue-300);\n    --accent-400: var(--blue-400);\n    --accent-500: var(--blue-500);\n    --accent-600: var(--blue-600);\n    --accent-700: var(--blue-700);\n    --accent-800: var(--blue-800);\n    --accent-900: var(--blue-900);\n}\n.vc-container.vc-indigo {\n    --accent-100: var(--indigo-100);\n    --accent-200: var(--indigo-200);\n    --accent-300: var(--indigo-300);\n    --accent-400: var(--indigo-400);\n    --accent-500: var(--indigo-500);\n    --accent-600: var(--indigo-600);\n    --accent-700: var(--indigo-700);\n    --accent-800: var(--indigo-800);\n    --accent-900: var(--indigo-900);\n}\n.vc-container.vc-purple {\n    --accent-100: var(--purple-100);\n    --accent-200: var(--purple-200);\n    --accent-300: var(--purple-300);\n    --accent-400: var(--purple-400);\n    --accent-500: var(--purple-500);\n    --accent-600: var(--purple-600);\n    --accent-700: var(--purple-700);\n    --accent-800: var(--purple-800);\n    --accent-900: var(--purple-900);\n}\n.vc-container.vc-pink {\n    --accent-100: var(--pink-100);\n    --accent-200: var(--pink-200);\n    --accent-300: var(--pink-300);\n    --accent-400: var(--pink-400);\n    --accent-500: var(--pink-500);\n    --accent-600: var(--pink-600);\n    --accent-700: var(--pink-700);\n    --accent-800: var(--pink-800);\n    --accent-900: var(--pink-900);\n}\n.vc-container {\n\n  --font-normal: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n\n  --text-xs: 12px;\n  --text-sm: 14px;\n  --text-base: 16px;\n  --text-lg: 18px;\n\n  --leading-snug: 1.375;\n\n  --rounded: 0.25rem;\n  --rounded-lg: 0.5rem;\n  --rounded-full: 9999px;\n\n  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n\n  --slide-translate: 22px;\n  --slide-duration: 0.15s;\n  --slide-timing: ease;\n\n  --day-content-transition-time: 0.13s ease-in;\n\n  position: relative;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: -webkit-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: max-content;\n  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    'Helvetica', 'Arial', sans-serif;\n  color: var(--gray-900);\n  background-color: var(--white);\n  border: 1px solid;\n  border-color: var(--gray-400);\n  border-radius: var(--rounded-lg);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: transparent;\n}\n.vc-container,\n  .vc-container * {\n    box-sizing: border-box;\n}\n.vc-container:focus, .vc-container *:focus {\n      outline: none;\n}\n.vc-container button,\n  .vc-container [role='button'] {\n    cursor: pointer;\n}\n.vc-container.vc-is-expanded {\n    min-width: 100%;\n}\n/* Hides double border within popovers */\n.vc-container .vc-container {\n    border: none;\n}\n.vc-container.vc-is-dark {\n    color: var(--gray-100);\n    background-color: var(--gray-900);\n    border-color: var(--gray-700);\n}\n.vc-pane-container {\n  width: 100%;\n  position: relative;\n}\n.vc-pane-container.in-transition {\n    overflow: hidden;\n}\n.vc-pane-layout {\n  display: grid;\n}\n.vc-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: auto;\n  color: var(--gray-600);\n  border-width: 2px;\n  border-style: solid;\n  border-radius: var(--rounded);\n  border-color: transparent;\n}\n.vc-arrow:hover {\n    background: var(--gray-200);\n}\n.vc-arrow:focus {\n    border-color: var(--gray-300);\n}\n.vc-arrow.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n.vc-day-popover-container {\n  color: var(--white);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  padding: 4px 8px;\n  box-shadow: var(--shadow);\n}\n.vc-day-popover-header {\n  font-size: var(--text-xs);\n  color: var(--gray-300);\n  font-weight: var(--font-semibold);\n  text-align: center;\n}\n.vc-arrows-container {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 8px 10px;\n  pointer-events: none;\n}\n.vc-arrows-container.title-left {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vc-arrows-container.title-right {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.vc-is-dark .vc-arrow {\n    color: var(--white);\n}\n.vc-is-dark .vc-arrow:hover {\n      background: var(--gray-800);\n}\n.vc-is-dark .vc-arrow:focus {\n      border-color: var(--gray-700);\n}\n.vc-is-dark .vc-day-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n}\n.vc-is-dark .vc-day-popover-header {\n    color: var(--gray-700);\n}\n";
styleInject_es.s(css_248z);exports.s=script;