import React, { useState } from 'react'

const NavLink = (props) => {
    
    const handleClick = () => {
        props.onActiveChange(props.id)
    }

    // Теперь для ссылки
    const getClasses = () => {
        let classes = 'nav-link'
        // Заменено на значение из props
        return (classes += props.active ? ' active' : '')
    }

    return (
        <>
            <li className="nav-item" onClick={handleClick}>
                <a href={props.link} className={getClasses()}>
                    {props.text}
                </a>
            </li>
        </>
    )
}

export default NavLink
