import React from 'react';
import '../Header/styles.css';



export function Header ({children, user, onUpdateUser}) {

    const handleClickButtonEdit = (e) => {
        e.preventDefault();
        onUpdateUser({about: 'Ментор'});
    }

return (
    <header className='header'>
        <div className="container">
            {user && <span>{user.email}</span>}
            {user && <span>{user.name}</span>}
            <button className='btn' onClick={handleClickButtonEdit}>Change</button>
            <div className="header__wrapper">
                {children}  
            </div>
        </div>
    </header>
)
}