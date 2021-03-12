import { j as _createClass, k as _classCallCheck, l as arrayHasItems, m as hash, n as _objectSpread2, o as createGuid, p as last_1, q as pageIsValid, r as pageIsAfterPage, s as pageIsBeforePage, t as pageIsEqualToPage, u as pageIsBetweenPages, v as isDate, w as isObject, x as addPages, y as _slicedToArray, z as hasAny, A as omit_1, B as onSpaceOrEnter } from './helpers-125bb300.js';
import { h } from 'vue';
import { r as requiredArgs, b as toDate, c as toInteger, A as Attribute, e as rootMixin, f as slotMixin, g as isNumber_1, h as addDays } from './index-f38a9194.js';
import { h as head_1 } from './CalendarNav-524b9f55.js';
import { s as script$4, a as addHorizontalSwipeHandler } from './Popover.vue_vue&type=style&index=0&id=23f8033a&lang-3cc7f1bc.js';
import script$1 from './CustomTransition.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import script$5 from './PopoverRow.js';
import script$3 from './SvgIcon.js';
import { s as script$2 } from './CalendarPane.vue_vue&type=style&index=0&id=57c801f6&lang-8688e7e1.js';

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

var script = {
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
      return h('div', {
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
      })) || h(script$3, {
        name: isPrev ? 'left-arrow' : 'right-arrow'
      })]);
    }; // Day popover


    var getDayPopover = function getDayPopover() {
      return h(script$4, {
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
          }, h('div', [// Show popover header only if format is defined
          masks.dayPopover && h('div', {
            class: ['vc-day-popover-header']
          }, [dayTitle]), attributes.map(function (attribute) {
            return h(script$5, {
              key: attribute.key,
              attribute: attribute
            });
          })]));
        }
      });
    }; // Render calendar container


    return h('div', {
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
    }, [h('div', {
      class: ['vc-pane-container', {
        'in-transition': this.inTransition
      }]
    }, [h(script$1, {
      name: this.transitionName,
      'on-before-enter': function onBeforeEnter() {
        _this.inTransition = true;
      },
      'on-after-enter': function onAfterEnter() {
        _this.inTransition = false;
      }
    }, {
      default: function _default() {
        return h('div', _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
          class: 'vc-pane-layout',
          style: {
            gridTemplateColumns: "repeat(".concat(_this.columns, ", 1fr)")
          },
          key: _this.firstPage ? _this.firstPage.key : ''
        }), _this.pages.map(function (page, i) {
          return h(script$2, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
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
    }), h('div', {
      class: ["vc-arrows-container title-".concat(this.titlePosition_)]
    }, [getArrowButton(true), getArrowButton(false)]), this.$slots.footer && this.$slots.footer()]), getDayPopover()]);
  },
  mixins: [rootMixin, slotMixin],
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

      if (isDate(range)) {
        fromPage = this.pageForDate(range);
      } else if (isObject(range)) {
        var month = range.month,
            year = range.year;
        var from = range.from,
            to = range.to;

        if (isNumber_1(month) && isNumber_1(year)) {
          fromPage = range;
        } else if (from || to) {
          fromPage = isDate(from) ? this.pageForDate(from) : from;
          toPage = isDate(to) ? this.pageForDate(to) : to;
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

var css_248z = "";
styleInject(css_248z);

export { script as s };
