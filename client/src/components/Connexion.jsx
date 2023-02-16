import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import singInDB from '../services/sing-in.service';

export const Connexion = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(singInDB(form));
    }

    return (
        <>
            <div className="about">
                <h1>Bienvenue</h1>
                <p>
                    Cette application a pour but de pouvoir faire une connexion sécurisée avec un compte créé en amont par le bundle Fixtures dans la partie Back de l’application.
                    Le tout est sécurisé par un système d’authentification de double clef par JWT (JSON Web Token).
                    Cette sécurité est automatisée sur ce site et ne nécessite aucune manipulation de votre part.
                </p>
            </div>

            <div className="grid-spaceBetween mt-5 mb-5">
                <div className="col-5_md-6_sm-12">
                    <p>
                        La connexion est reserver aux membres qui ont reçu leurs iddentifiant et mot de passe afin de pouvoir se connecter.
                    </p>
                    <p>
                        Il est impossible de créer un compte sur ce site, pour se faire, contacter l'administrateur du site ou le développeur.
                    </p>
                </div>

                <div className="col-5_md-6_sm-12">
                    <form id='form' onSubmit={(e) => handleSubmit(e)}>
                        <div className="grid-spaceBetween">
                            <div className="col-6_sm-12">
                                <TextField className='mb-4' type='email' name='email' value={form.email} onChange={(e) => handleChange(e)} required id="email" label="Adresse email" variant="standard" />
                            </div>
                            <div className="col-6_sm-12">
                                <TextField className='mb-4' type='password' name='password' value={form.password} onChange={(e) => handleChange(e)} required id="password" label="Mot de passe" variant="standard" />
                            </div>
                            <Button className='grid' variant="outlined" type='submit' disabled={(!form.password || !form.email) && true}>Connexion</Button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
