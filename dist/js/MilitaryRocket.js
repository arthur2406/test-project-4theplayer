"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilitaryRocket = void 0;
const RocketBase_1 = require("./RocketBase");
class MilitaryRocket extends RocketBase_1.RocketBase {
    constructor() {
        super();
        this.name = 'TOP SECRET';
    }
    launch() {
        console.log('TOP SECRET \n');
    }
}
exports.MilitaryRocket = MilitaryRocket;
