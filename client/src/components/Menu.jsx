import React from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import { AvatarConnect } from './AvatarConnect';

export const Menu = () => {
    return (
        <>
            <MDBNavbar sticky light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>Application connect</MDBNavbarBrand>
                    {
                        localStorage.token && <AvatarConnect />
                    }
                </MDBContainer>
            </MDBNavbar>
            <div className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://picsum.photos/1800/600')", height: 600 }}>
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Application</h1>
                            <h4 className='mb-3'>Connect</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
