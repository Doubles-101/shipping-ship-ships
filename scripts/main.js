import { DockList } from "./docks.js";
import { HaulerList } from "./haulers.js";
import { ShippingShipList } from "./shippingships.js";

const mainHTML = `<div class="title"><h1>Shipping Ship Ships</h1></div>`
+ DockList() + HaulerList() + ShippingShipList()


document.getElementById("container").innerHTML = mainHTML