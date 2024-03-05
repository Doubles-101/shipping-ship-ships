import { getShippingShips } from "./database.js"


export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li>${shippingShip.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}