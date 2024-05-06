const initialState = {
    users: [],
    loading: true
}

const uersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getUsers":
            return {
                ... state,
                uersData: action.payload,
                loading: false
            }

        // case "createPlayer":
        //     return {
        //         ... state,
        //         createFootballerData: action.payload,
        //         loading: false
        //     } 
            
        // case "updatePlayer": 
        //     return {
        //         ... state,
        //         updatedData: action.payload,
        //         loading: false
        //     } 

        default: 
            return state    
    }
}

export default uersReducer;