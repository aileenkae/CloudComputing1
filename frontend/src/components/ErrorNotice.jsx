import React from 'react';
// This component will be used to display the error message
function ErrorNotice(props) {
    return (
        <div className="w-full bg-red-400 py-2 px-4 rounded-xl text-white flex items-center justify-between">
            <span>{props.message}</span> // This is the error message
            <button className='bg-red-600 w-8 h-8 hover:bg-red-700 transition rounded-lg text-sm' onClick={props.clearError}>X</button>
        </div>
    );
}
export default ErrorNotice;