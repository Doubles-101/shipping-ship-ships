import { getShippingShips } from "./database.js"


export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = `<div class="shippingshipbox"><h2>Shipping Ship List</h2><ul>`

    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li>${shippingShip.name}</li>`
    }

    shippingShipsHTML += "</ul></div>"

    return shippingShipsHTML
}