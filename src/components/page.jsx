import React from 'react'
import Navbar from './navbar'
import Breadcrumbs from './breadCrumbs'

const Page = () => {
    const logoUrl = 'https://picsum.photos/30'
    const siteName = 'Example.com'

    return (
        <main className="d-flex flex-nowrap" style={{ height: '100vh' }}>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                style={{ width: '280px' }}
            >
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logoUrl} alt="" className="bi pe-none me-2" />
                    <span className="fs-4">{siteName}</span>
                </div>
                <hr />
                <Navbar />
            </div>
            <div className="p-4">
                <div>
                    <Breadcrumbs />
                </div>
                <h1 className="h3">Контент</h1>
            </div>
        </main>
    )
}

export default Page
