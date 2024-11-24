import React from 'react'

const NotAuthorized = ({children}) => {
    return (
        <>
        {children}
        <div className='fixed inset-0 flex items-center justify-center bg-red-500/50 backdrop-blur-sm'></div>
        
        </>
    )
}

export default NotAuthorized