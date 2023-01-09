import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react';
import { AddFormButton } from '../components/AddFormButton';
import { FormPreview } from '../components/FormPreview';
import userContext from '../context/userContext';

export function Home() {
    const {userData} = useContext(userContext);
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const getForms = async () => {
            const formResponse = await axios.get('http://localhost:8000/forms', {
                headers: {
                    "x-auth-token": userData.token
                }
            })

            console.log(formResponse)
            setForms(formResponse.data)
        }

        getForms();
    }, []);

    const handleFormDelete = (form) => {
        axios.delete('http://localhost:8000/forms/' + form._id, {
            headers: {
                "x-auth-token": userData.token
            }
        }).then(response => {
            setForms(forms.filter(f => f._id !== form._id))
        })
    }

    return (
        <div className='w-full h-full'>
            <div className='py-12'>
                <h1 className='text-3xl font-bold text-black mb-12'>
                   Welcome back {userData.user.name}. Here is your forms
                </h1>

                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-4'>
                        <AddFormButton/>
                    </div>
                    {
                        forms.map(form => {
                            return(
                                <div className='col-span-4'>
                                    <FormPreview onDelete={() => handleFormDelete(form)} form={form} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}