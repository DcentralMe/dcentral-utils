"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapSeaport = void 0;
const seaport_js_1 = require("@opensea/seaport-js");
const ethers_1 = require("ethers");
function bootstrapSeaport() {
    const provider = new ethers_1.ethers.BrowserProvider(window.ethereum);
    return new seaport_js_1.Seaport(provider);
}
exports.bootstrapSeaport = bootstrapSeaport;
