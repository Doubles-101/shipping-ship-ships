import { getHaulingShips, getShippingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "hauler") {

            const haulerId = itemClicked.dataset.id

            let shippingCounter = 0

            const shippingShips = getShippingShips()
            for (const ship of shippingShips) {
                if (parseInt(haulerId) === ship.haulerId) {
                    shippingCounter++
                }
            }
            
        window.alert(`This hauler is carrying ${shippingCounter} shipping ships`)    
        }
    }
) 

export const HaulerList = () => {
    const haulers = getHaulingShips()
   

    let haulerHTML = `<div class="haulerbox"><h2>Hauler List</h2><ul>`

    for (const hauler of haulers) {
        haulerHTML += `<li 
        data-id="${hauler.id}"
        data-type="hauler">
        ${hauler.name}</li>`
    }

    haulerHTML += "</ul></div>"

    return haulerHTML
}