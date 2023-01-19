import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react';
import { AddFormButton } from '../components/AddFormButton';
import FormItem from '../components/FormItem';
import userContext from '../context/userContext';
// This component will be used to display the home page of the application 
export function Home() {
    const {userData} = useContext(userContext);
    const [forms, setForms] = useState([]);
    // This useEffect hook will be used to fetch the forms from the backend
    useEffect(() => {
        const getForms = async () => {
            const formResponse = await axios.get('https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/forms', {
                headers: {
                    "x-auth-token": userData.token
                }
            })

            setForms(formResponse.data)
        }

        getForms();
    }, [userData]);
    // This function will be used to handle the delete event of the form with a DELETE request to the backend
    const handleFormDelete = (form) => {
        axios.delete('https://hdm-rest-api-yzluwpqwsa-ey.a.run.app/forms/' + form._id, {
            headers: {
                "x-auth-token": userData.token
            }
        }).then(response => {
            setForms(forms.filter(f => f._id !== form._id))
        })
    }
    // This function will be used to handle the edit event of the form with a PUT request to the backend 
    return (
        <div className='w-full h-full'>
            <div className='py-12'>
                <h1 className='text-3xl font-bold text-black mb-12'>
                   Welcome back {userData.user.name}. Here are your forms
                </h1>

                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-4'>
                        <AddFormButton/>
                    </div>
                    {
                        forms.map(form => { // This will be used to display the forms in the home page
                            return(
                                <div className='col-span-4' key={form._id}>
                                    <FormItem onDelete={() => handleFormDelete(form)} form={form} />
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}