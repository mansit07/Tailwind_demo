export const getData = (userData) => {
    return {
        type: "getUsers",
        payload: userData
    }
}

// export const createFootbalgetlPlayerProfile = (data: any) => {
//     return {
//         type: "createPlayer",
//         payload: data
//     }
// }

// export const updateFootballerData = (updatedData: any) => {
//     return {
//         type: "updatePlayer",
//         payload: updatedData
//     }
// }