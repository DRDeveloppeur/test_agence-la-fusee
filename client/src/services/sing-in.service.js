import axios from "axios";
import { addFlash, getUser, loading, setToken } from "../Action/actions";

const singInRequest = async (data) => await axios.post("https://localhost:8000/api/login_check", data)

const singInDB = (data) => {
    const singInThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        await singInRequest(data)
            .then(result => {
                (result) && dispatch(setToken(result.data));
                (result) && dispatch(getUser(result.data.token));
                dispatch(addFlash({ type: 'success', message: 'Connexion réussie !' }));
            })
            .catch(err => dispatch(addFlash({ type: 'error', message: 'Erreur de connexion !' })));
        dispatch(loading(false));
    }
    return singInThunk;
}
export default singInDB;