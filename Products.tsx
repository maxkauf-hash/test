import React, { Fragment } from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

export const Products: React.FC = () => {
    return (
      <Fragment>
        <Navbar />
        <main>
            <div className='sidenav'>
                <ul>
                    <li>Catégories</li>
                    <li>Sous-catégories</li>
                </ul>
            </div>
        </main>
        <Footer/>
    </Fragment>
)}