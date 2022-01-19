import React from 'react'
import Carousel from '../components/Carousel'
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
            <Carousel />
            <div className='container'>
                <div className="row justify-content-start">
                    <div className="col-md-4">

                        <div className="n-box2 px-3 py-3">
                            <h1 className="fontColor font-bold">Hello!</h1>
                            <p className="fontColor">My name is Juston Smith and I am a full stack web developer/software engineer. </p>
                        </div>

                    </div>
                </div>

                <div className='row pt-5 justify-content-center'>
                    <div className='col-md-4'>

                        <div>
                            <img src="https://content.techgig.com/photo/77313069/top-20-programming-languages-used-for-web-development.jpg?119426" alt="full stack img" height="200" className="w-100 stackImg"></img>
                        </div>

                    </div>
                </div>

                <div className='row pt-5 justify-content-end'>
                    <div className='col-md-4'>

                        <div className="n-box2 px-3 py-3 fontColor">
                        <p>Full stack web development technology refers to the entire depth of a computer system application. Full stack developers straddle two separate web development domains: the front end and the back end.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
