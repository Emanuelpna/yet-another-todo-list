"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateChecker = /** @class */ (function () {
    function DateChecker() {
    }
    DateChecker.prototype.isFuture = function (dateLimit) {
        var today = Date.now();
        if (today > dateLimit.getTime()) {
            return false;
        }
        return true;
    };
    return DateChecker;
}());
exports.default = DateChecker;
