import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Action/actions';
import { Connexion } from '../components/Connexion'
import { Welcome } from '../components/Welcome'


export const Home = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => {
        return {
            user: state.dataReducer.user,
        }
    });

    useEffect(() => {
        localStorage.token && dispatch(getUser(localStorage.token))
    }, [localStorage.token]);

    return (
        <div className="home" >
            {
                localStorage.token ? <Welcome user={user} /> : <Connexion />
            }
        </div>
    )
}
