(function(win, doc, $) {
  const kzEvent = {
    events: [],
    registerEvents: function(events) {
      events.forEach((event) => {
        if (this.events.indexOf(event) > -1) {
          console.warn(`${event} is already registered, please communicate with developer`)  
        } else {
          this.events.push(event)
          $.Event(event, { bubbles: false })
        }
      })
    },
    on: function(event, callback) {
      $(doc.body).on(event, function(e, ...args) {
        callback(...args)
      })
    },
    trigger: $(doc.body).trigger.bind($(doc.body))
  }
  win.kzEvent = kzEvent
}(window, document, $));