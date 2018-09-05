"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var thing_1 = require('../model/thing');
var ThingsListComponent = (function () {
    function ThingsListComponent() {
        // this.thing = new Thing(1, "Cosa #1");
        this.things = [
            new thing_1.Thing(1, "Cosa #1"),
            new thing_1.Thing(2, "Cosa #2"),
            new thing_1.Thing(3, "Cosa #3")
        ];
        this.thing = this.things[0];
        this.thingSelected = this.thing;
        this.visible = true;
        this.debug();
    }
    ThingsListComponent.prototype.debug = function () {
        console.log(this.things);
    };
    ThingsListComponent.prototype.toggle = function (value) {
        this.visible = value;
    };
    ThingsListComponent.prototype.change = function (thing) {
        this.thing = thing;
        this.thingSelected = thing;
    };
    ThingsListComponent = __decorate([
        core_1.Component({
            selector: 'things-list',
            templateUrl: 'app/view/things-list.html',
            styleUrls: ['assets/css/thing.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ThingsListComponent);
    return ThingsListComponent;
}());
exports.ThingsListComponent = ThingsListComponent;
//# sourceMappingURL=things-list.component.js.map