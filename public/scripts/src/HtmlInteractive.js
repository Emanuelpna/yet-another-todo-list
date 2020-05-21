"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlInteractive = /** @class */ (function () {
    function HtmlInteractive(elementTag, textContent) {
        this.elementTag = elementTag;
        this.textContent = textContent;
        this.isValid = true;
        this.elementTag.textContent = this.textContent;
    }
    HtmlInteractive.prototype.setElementClass = function (classNames) {
        var _a;
        (_a = this.elementTag.classList).add.apply(_a, classNames);
    };
    HtmlInteractive.prototype.removeElementClass = function (classNames) {
        var _a;
        (_a = this.elementTag.classList).remove.apply(_a, classNames);
    };
    HtmlInteractive.prototype.print = function (contentElement) {
        var _a;
        (_a = this.elementTag) === null || _a === void 0 ? void 0 : _a.appendChild(contentElement);
    };
    HtmlInteractive.prototype.resetContent = function () {
        this.elementTag.innerHTML = "";
    };
    HtmlInteractive.prototype.setAttributes = function (attributes) {
        var _this = this;
        attributes.forEach(function (attribute) {
            var _a;
            (_a = _this.elementTag) === null || _a === void 0 ? void 0 : _a.setAttribute(attribute.name, attribute.value);
        });
    };
    return HtmlInteractive;
}());
exports.default = HtmlInteractive;
