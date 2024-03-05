import { getShippingShips, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "shippingship") {

            const haulerId = itemClicked.dataset.haulerid
            
            let haulingShip = { name: "Incorrect" }
            
            const haulerObjects = getHaulingShips()
            for (const hauler of haulerObjects) {
                if (parseInt(haulerId) === hauler.id) {
                    haulingShip = hauler.name
                }
            }
           
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}`)
        }
    }
)

export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = `<div class="shippingshipbox"><h2>Shipping Ship List</h2><ul>`

    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li
        data-type="shippingship"
        data-id="${shippingShip.id}"
        data-haulerid="${shippingShip.haulerId}"
        data-name="${shippingShip.name}"
        >${shippingShip.name}</li>`
    }

    shippingShipsHTML += "</ul></div>"

    return shippingShipsHTML
}