const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Big Ol Boat", dockId: 2 },
        { id: 2, name: "Tubby", dockId: 1 },
        { id: 3, name: "Bubbles", dockId: 4 },
        { id: 4, name: "Boating Boat Boats", dockId: 3 }
    ],
    shippingShips: [
        { id: 1, name: "Patrick Star", haulerId: 1 },
        { id: 2, name: "Longbow", haulerId: 2 } ,
        { id: 3, name: "The Uther", haulerId: 3 },
        { id: 4, name: "Steve", haulerId: 3 },
        { id: 5, name: "Stewart", haulerId: 4 }
    ]
}

export const getDocks = () => {
    return database.docks.map(docks => ({...docks}))
}

export const getHaulingShips = () => {
    return database.haulers.map(haulers =>({...haulers}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShips =>({...shippingShips}))
}
