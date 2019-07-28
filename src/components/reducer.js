export default function (state = { responseArray: {} }, action) {
    switch (action.type) {
        case "FETCH_DETAILS_SUCCESS":
            {
                return { ...state, responseArray: action.payload }
                break;
            }

        case "FETCH_DETAILS_FAILURE":
            {
                return { ...state, responseArray: action.payload }
                break;
            }
    }
    return state;
}