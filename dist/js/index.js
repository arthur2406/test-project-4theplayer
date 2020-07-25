"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StartPort_1 = require("./StartPort");
const port = new StartPort_1.StartPort();
const rockets = port.getAllRockets();
let i = 0;
for (const rocket of rockets) {
    i++;
    console.log(`Prepare to the next launch #${i}: `);
    rocket.launch();
}
