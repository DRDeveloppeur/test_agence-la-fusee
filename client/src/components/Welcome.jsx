import { Alert, Avatar, Chip } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export const Welcome = ({ user }) => {

	return (
		<div className="welcome">
			<h1 align="center" className='mb-6'>Bonjour</h1>

			<div className="grid-spaceAround mb-4">
				<p>
					Vous êtes maintenant connecté avec le mail :
				</p>

				<Stack direction="row" spacing={1}>
					<Chip avatar={<Avatar>{user.username[0].toUpperCase()}</Avatar>} label={user.username} />
				</Stack>
			</div>

			<div className="grid-center mb-4">
				<p>
					Votre token est le suivant :
				</p>
				<Alert severity="success">{localStorage.token}</Alert>
			</div>

			<p align="center" className='mb-6'>
				Vous pouvez à tout moment vous déconnecter en appuyant sur le logo haut droit de la page et puis sur “Déconnexion”.
			</p>
		</div>
	)
}
