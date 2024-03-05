import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {
            const dockId = itemClicked.dataset.id
            
            // compare keys and add haulers
            const haulerObjects = getHaulingShips()
            let collectionOfHaulers = ""
            for (const hauler of haulerObjects) {
                if (hauler.dockId === parseInt(dockId)) {
                    collectionOfHaulers += `, ${hauler.name} `
                } 
            }

            // so the window alert will properly display the haulers
            if (collectionOfHaulers === "") {
                collectionOfHaulers = "nothing"
            } else {
                collectionOfHaulers = collectionOfHaulers.slice(2)
            }

            window.alert(`${itemClicked.dataset.location} dock is currently unloading ${collectionOfHaulers}`)
        }       
    }
)

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = `<div class="dockbox"><h2>Dock List</h2><ul>`

    for (const dock of docks) {
        docksHTML += `<li
        data-type="dock"
        data-location="${dock.location}"
        data-id="${dock.id}"
        >${dock.location}</li>`
    }

    docksHTML += "</ul></div>"

    return docksHTML
}