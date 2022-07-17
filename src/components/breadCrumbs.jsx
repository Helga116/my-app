import React from 'react'

const Breadcrumbs = () => {
    return (
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Главная</li>
                <li className="breadcrumb-item active" aria-current="page">
                    Текущая страница
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs
