import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);

export const seaport = new Seaport(provider);
