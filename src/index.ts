// @ts-nocheck

import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";

export function bootstrapSeaport() {
  const provider = new ethers.BrowserProvider(window.ethereum);

  return new Seaport(provider);
}
