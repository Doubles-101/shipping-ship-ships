import { getDocks } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = `<div class="dockbox"><h2>Dock List</h2><ul>`

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li>${dock.location}</li>`
    }

    docksHTML += "</ul></div>"

    return docksHTML
}