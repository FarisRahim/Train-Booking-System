"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TrainBookingService = /** @class */ (function () {
    function TrainBookingService(http) {
        this.http = http;
    }
    TrainBookingService.prototype.findBookings = function () {
        return this.http.get('/data/trainBookings.json').map(function (res) { return res; });
    };
    TrainBookingService.prototype.findBookingByBookingNo = function (bookingNo) {
        return this.http.get('/data/trainBooking.json').map(function (res) { return res; });
    };
    TrainBookingService = __decorate([
        core_1.Injectable()
    ], TrainBookingService);
    return TrainBookingService;
}());
exports.TrainBookingService = TrainBookingService;
