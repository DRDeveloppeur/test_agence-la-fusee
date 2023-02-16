import ActionsType from "../Action/action.enum";

let stateInit = {
    user: [],
    flash: [],
    loading: false,
    theme: "light"
}

const dataReducer = (state = stateInit, action = {}) => {
    let newUser = [];

    switch (action.type) {
        case ActionsType.GET_USER:
            newUser = JSON.parse(atob(action.data.split(".")[1]));
            return { ...state, user: newUser };

        case ActionsType.SET_TOKEN:
            return localStorage.token = action.data.token;

        case ActionsType.ADD_FLASH:
            return { ...state, flash: action.data };

        case ActionsType.LOG_OUT:
            localStorage.removeItem('token');
            return 0;

        case ActionsType.LOADING:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}

export default dataReducer;