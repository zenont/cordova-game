"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.initialize = function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    App.prototype.onDeviceReady = function () {
        this.receivedEvent('deviceready');
    };
    App.prototype.receivedEvent = function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    };
    return App;
}());
exports.App = App;
var app = new App();
app.initialize();
exports.default = app;
//# sourceMappingURL=index.js.map