"use strict";

(function (win, doc, $) {
  var kzEvent = {
    events: [],
    registerEvents: function registerEvents(events) {
      var _this = this;

      events.forEach(function (event) {
        if (_this.events.indexOf(event) > -1) {
          console.warn("".concat(event, " is already registered, please communicate with developer"));
        } else {
          _this.events.push(event);

          $.Event(event, {
            bubbles: false
          });
        }
      });
    },
    on: function on(event, callback) {
      $(doc.body).on(event, function (e) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        callback.apply(void 0, args);
      });
    },
    trigger: $(doc.body).trigger.bind($(doc.body))
  };
  win.kzEvent = kzEvent;
})(window, document, $);