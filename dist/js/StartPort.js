"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartPort = void 0;
const MilitaryRocket_1 = require("./MilitaryRocket");
const NasaRocket_1 = require("./NasaRocket");
const SpaceXRocket_1 = require("./SpaceXRocket");
class StartPort {
    constructor() {
        this.rocketClasses = [MilitaryRocket_1.MilitaryRocket, NasaRocket_1.NasaRocket, SpaceXRocket_1.SpaceXRocket];
    }
    getAllRockets() {
        const rockets = [];
        for (let i = 0; i < 10; i++) {
            const index = Math.floor(Math.random() * Math.floor(3));
            rockets.push(new this.rocketClasses[index]);
        }
        return rockets;
    }
}
exports.StartPort = StartPort;
