"use strict";
/*!
 * tinyvector 2D JavaScript Lib
 * Jeremy Zevin
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TinyVector = /** @class */ (function () {
    function TinyVector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    TinyVector.prototype.add = function (tv) {
        this.x += tv.x;
        this.y += tv.y;
        return this;
    };
    TinyVector.prototype.sub = function (tv) {
        this.x -= tv.x;
        this.y -= tv.y;
        return this;
    };
    TinyVector.prototype.mult = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    TinyVector.prototype.div = function (n) {
        this.x /= n;
        this.y /= n;
        return this;
    };
    TinyVector.prototype.mag = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    TinyVector.prototype.normalize = function () {
        var m = this.mag();
        if (m !== 0) {
            this.div(m);
        }
        return this;
    };
    TinyVector.prototype.limit = function (h, l) {
        var high = h || null, low = l || null;
        if (high && this.mag() > high) {
            this.normalize();
            this.mult(high);
        }
        if (low && this.mag() < low) {
            this.normalize();
            this.mult(low);
        }
        return this;
    };
    TinyVector.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
        return this;
    };
    TinyVector.prototype.copy = function () {
        return new TinyVector(this.x, this.y);
    };
    TinyVector.prototype.rotate = function (angle) {
        var nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        var ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);
        this.x = nx;
        this.y = ny;
        return this;
    };
    TinyVector.prototype.rotateDeg = function (angle) {
        return this.rotate(this._degrees2radian(angle));
    };
    TinyVector.prototype.heading = function () {
        return Math.atan2(this.y, this.x);
    };
    TinyVector.prototype.angleBetween = function (tv) {
        var dotmagmag = this.dot(tv) / (this.mag() * tv.mag());
        var angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
        return angle;
    };
    TinyVector.prototype.angleTo = function (tv, angleOffset) {
        if (angleOffset === void 0) { angleOffset = 0; }
        return Math.atan2(tv.y - this.y, tv.x - this.x) + angleOffset;
    };
    TinyVector.prototype.dot = function (tv) {
        return this.x * (tv.x || 0) + this.y * (tv.y || 0);
    };
    ;
    TinyVector.prototype.lerp = function (tv, amt) {
        this.x += (tv.x - this.x) * amt || 0;
        this.y += (tv.y - this.y) * amt || 0;
        return this;
    };
    ;
    TinyVector.prototype._radian2degrees = function (rad) {
        return rad * (180 / Math.PI);
    };
    TinyVector.prototype._degrees2radian = function (deg) {
        return deg / (180 / Math.PI);
    };
    return TinyVector;
}());
exports.TinyVector = TinyVector;
//# sourceMappingURL=TinyVector.js.map