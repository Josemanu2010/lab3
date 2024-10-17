import React, { useEffect } from 'react'
import { iAX } from '../axios/configAxios';
import { useDispatch, useSelector } from 'react-redux';
import { setTokenUser } from '../redux/usersSlice';

export default function UsersLogin() {

    const token = useSelector(state => state.users.tokenUser);
    const disptach = useDispatch();


    async function prueba() {
        try {
            const rta = await iAX.post(
                "/login", {
                email: "eve.holt@reqres.in",
                password: "cityslicka",
            }
            );

            disptach(setTokenUser(rta.data.token))

            // console.log(token);
            // return rta;

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        prueba()
    }, [token]);

    // console.log(token);

    return (
        <div className='mb-12'>
            <h3 className='text-center text-3xl'>Token: {token}</h3>
        </div>
    )
}
