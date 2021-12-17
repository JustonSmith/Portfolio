import React from 'react'
import Header from '../components/Header'

function Home() {
    return (
        <div>
            <Header />
            <div className="introduction flex-with-center">
                <div>
                    <h1>JUSTON SMITH</h1>
                    <div className="intro-content d-flex justify-content-between">
                            <p>Full Stack Web Developer <br/> Software Engineer </p>
                            <button className='primary-button font-bold'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
