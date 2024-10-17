import React, { useEffect } from 'react'
import { iAX } from '../axios/configAxios';
import { useDispatch, useSelector } from 'react-redux';
import { setDataUser } from '../redux/usersSlice';

export default function UserPost() {

    const data = useSelector(state => state.users.dataUsers)

    const disptach = useDispatch();

    async function postData() {
        try {
            const rta = await iAX.post(
                "/users", {
                name: "John",
                job: "Panadero"
            }
            );
            disptach(setDataUser(rta.data))

            // console.log("List usuers: " + rta);
            za
        } catch (error) {

        }
    }

    useEffect(() => {
        postData()
    }, []);

    // console.log(data);


    return (
        <div>
            <h2 className='font-semibold text-2xl'>Usuario creado:</h2>
            <div>
                <p className='font-bold'>{data.name}</p>
                <p>{data.job}</p>
                <p>{data.id}</p>
            </div>

        </div>
    )
}
