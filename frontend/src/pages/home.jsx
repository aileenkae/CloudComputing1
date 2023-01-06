import React from 'react';
import { AddFormButton } from '../components/AddFormButton';
import { FormPreview } from '../components/FormPreview';

export function Home() {
    return (
        <div className='w-full h-full'>
            <div className='py-12'>
                <h1 className='text-5xl font-bold text-center text-black mb-12'>
                    Your Forms
                </h1>

                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-4'>
                        <AddFormButton/>
                    </div>

                    <div className='col-span-4'>
                        <FormPreview/>
                    </div>

                    <div className='col-span-4'>
                        <FormPreview/>
                    </div>

                    <div className='col-span-4'>
                        <FormPreview/>
                    </div>

                    <div className='col-span-4'>
                        <FormPreview/>
                    </div>
                </div>
            </div>
        </div>
    )
}