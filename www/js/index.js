'use strict';

exports.__esModule = true;
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
    function App() {
        _classCallCheck(this, App);
    }

    _createClass(App, [{
        key: 'initialize',
        value: function initialize() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }
    }, {
        key: 'onDeviceReady',
        value: function onDeviceReady() {
            this.receivedEvent('deviceready');
        }
    }, {
        key: 'receivedEvent',
        value: function receivedEvent(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
            console.log('Received Event: ' + id);
        }
    }]);

    return App;
}();

var app = new App();
app.initialize();
exports.default = app;
//# sourceMappingURL=index.js.map