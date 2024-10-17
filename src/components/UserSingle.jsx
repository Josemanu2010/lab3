import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDataUserSingle } from '../redux/usersSlice';
import { iAX } from '../axios/configAxios';

export default function UserSingle() {

    const data = useSelector(state => state.users.dataUserSingle)

    const disptach = useDispatch();

    async function getDataSingleUser() {
        try {
            const rta = await iAX.get(`https://reqres.in/api/users/2`);
            disptach(setDataUserSingle(rta.data.data))
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getDataSingleUser()
    }, []);

    console.log(data);


    return (
        <div >
            <h2 className='font-semibold text-2xl'>Usuario consutado:</h2>
            <div className='flex '>
                <img className='rounded-full w-[60px]' src={data.avatar} alt={data.first_name} />
                <div className='flex flex-col justify-around ml-2'>
                    <p className='font-bold'>{data.first_name}</p>
                    <p >{data.last_name}</p>
                </div>
            </div>
        </div>
    )
}
