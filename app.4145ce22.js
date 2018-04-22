// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DateConverter = /** @class */function () {
    function DateConverter() {}
    DateConverter.toText = function (date) {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    };
    DateConverter.toDate = function (text) {
        var regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(text)) {
            throw new Error('Must be in the format yyyy-mm-dd');
        }
        return new (Date.bind.apply(Date, [void 0].concat(text.split('-').map(function (item, index) {
            return item - index % 2;
        }))))();
    };
    return DateConverter;
}();
exports.DateConverter = DateConverter;
},{}],10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */function () {
    function Message(text) {
        if (text === void 0) {
            text = '';
        }
        this._text = text;
    }
    Object.defineProperty(Message.prototype, "text", {
        get: function get() {
            return this._text;
        },
        set: function set(text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    return Message;
}();
exports.Message = Message;
},{}],21:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var View = /** @class */function () {
    function View(selector) {
        this._element = document.querySelector(selector);
    }
    View.prototype.update = function (model) {
        this._element.innerHTML = this.render(model);
    };
    View.prototype.render = function (model) {
        throw new Error('You need to implement the render method!');
    };
    return View;
}();
exports.View = View;
},{}],11:[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View");
var MessageView = /** @class */function (_super) {
    __extends(MessageView, _super);
    function MessageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageView.prototype.render = function (model) {
        return model.text ? "<p class=\"notification is-success\">" + model.text + "</p>" : '';
    };
    return MessageView;
}(View_1.View);
exports.MessageView = MessageView;
},{"./View":21}],12:[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var DateConverter_1 = require("../converters/DateConverter");
var View_1 = require("./View");
var NegotiationsView = /** @class */function (_super) {
    __extends(NegotiationsView, _super);
    function NegotiationsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NegotiationsView.prototype.render = function (model) {
        return "\n      <table class=\"table is-bordered is-striped is-hoverable is-fullwidth\">\n          <thead>\n              <tr>\n                  <th>Date</th>\n                  <th>Quantity</th>\n                  <th>Value</th>\n                  <th>Volume</th>\n              </tr>\n          </thead>\n\n          <tbody>\n              " + model.toArray().map(function (negotiation) {
            return "\n                  <tr>\n                      <td>" + DateConverter_1.DateConverter.toText(negotiation.date) + "</td>\n                      <td>" + negotiation.quantity + "</td>\n                      <td>" + negotiation.value + "</td>\n                      <td>" + negotiation.volume + "</td>\n                  </tr>";
        }).join('') + "\n          </tbody>\n\n          <tfoot>\n              <tr>\n                  <td colspan=\"3\"></td>\n                  <td>" + model.totalVolume + "</td>\n              </tr>\n          </tfoot>\n      </table>\n    ";
    };
    return NegotiationsView;
}(View_1.View);
exports.NegotiationsView = NegotiationsView;
},{"../converters/DateConverter":9,"./View":21}],13:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Negotiation = /** @class */function () {
    function Negotiation(_date, _quantity, _value) {
        Object.assign(this, { _quantity: _quantity, _value: _value });
        this._date = new Date(_date.getTime());
        Object.freeze(this);
    }
    Object.defineProperty(Negotiation.prototype, "volume", {
        get: function get() {
            return this._quantity * this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negotiation.prototype, "date", {
        get: function get() {
            return new Date(this._date.getTime());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negotiation.prototype, "quantity", {
        get: function get() {
            return this._quantity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negotiation.prototype, "value", {
        get: function get() {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Negotiation;
}();
exports.Negotiation = Negotiation;
},{}],14:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Negotiations = /** @class */function () {
    function Negotiations() {
        this._negotiations = [];
    }
    Negotiations.prototype.add = function (negotiation) {
        this._negotiations.push(negotiation);
    };
    Negotiations.prototype.toArray = function () {
        return [].concat(this._negotiations);
    };
    Object.defineProperty(Negotiations.prototype, "totalVolume", {
        get: function get() {
            return this._negotiations.reduce(function (total, negotiation) {
                return total + negotiation.volume;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    return Negotiations;
}();
exports.Negotiations = Negotiations;
},{}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DateConverter_1 = require("./../ui/converters/DateConverter");
var Message_1 = require("./../ui/models/Message");
var MessageView_1 = require("../ui/views/MessageView");
var NegotiationsView_1 = require("../ui/views/NegotiationsView");
var Negotiation_1 = require("./../domain/negotiation/Negotiation");
var Negotiations_1 = require("./../domain/negotiation/Negotiations");
var NegotiationController = /** @class */function () {
    function NegotiationController() {
        var $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._negotiations = new Negotiations_1.Negotiations();
        this._negotiationsView = new NegotiationsView_1.NegotiationsView('#negotiations');
        this._message = new Message_1.Message();
        this._messageView = new MessageView_1.MessageView('#messageView');
        this._messageView.update(this._message);
    }
    NegotiationController.prototype.add = function (event) {
        event.preventDefault();
        this._negotiations.add(this._createNegotiation());
        this._message.text = 'Successfully created negotiation';
        this._negotiationsView.update(this._negotiations);
        this._clearForm();
        this._messageView.update(this._message);
    };
    NegotiationController.prototype._clearForm = function () {
        this._inputDate.value = '';
        this._inputQuantity.value = '';
        this._inputValue.value = '';
        this._inputDate.focus();
    };
    NegotiationController.prototype._createNegotiation = function () {
        return new Negotiation_1.Negotiation(DateConverter_1.DateConverter.toDate(this._inputDate.value), parseInt(this._inputQuantity.value, 10), parseFloat(this._inputValue.value));
    };
    return NegotiationController;
}();
exports.NegotiationController = NegotiationController;
},{"./../ui/converters/DateConverter":9,"./../ui/models/Message":10,"../ui/views/MessageView":11,"../ui/views/NegotiationsView":12,"./../domain/negotiation/Negotiation":13,"./../domain/negotiation/Negotiations":14}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NegotiationController_1 = require("./controllers/NegotiationController");
var controller = new NegotiationController_1.NegotiationController();
var $form = document.querySelector('[data-js="form"]');
if ($form) {
    $form.addEventListener('submit', controller.add.bind(controller));
}
},{"./controllers/NegotiationController":8}],23:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58101' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[23,5])
//# sourceMappingURL=/app.4145ce22.map