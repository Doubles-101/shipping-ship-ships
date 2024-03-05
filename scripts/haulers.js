import { getHaulingShips } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulerHTML = `<div class="haulerbox"><h2>Hauler List</h2><ul>`

    for (const hauler of haulers) {
        haulerHTML += `<li>${hauler.name}</li>`
    }

    haulerHTML += "</ul></div>"

    return haulerHTML
}