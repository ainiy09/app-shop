import React from 'react';
import '../Header/styles.css';



export function Header ({children}) {
return (
    <header className='header'>
        <div className="container">
            <div className="header__wrapper">
                {children}  
            </div>
        </div>
    </header>
)
}