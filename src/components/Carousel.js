import React from 'react'
import { FaReact, FaNodeJs, FaJava, FaJsSquare, FaPython, FaCss3, FaHtml5, FaBootstrap, FaNpm} from 'react-icons/fa'
import { SiMongodb, SiDjango, SiFlask, SiMysql, SiSpringboot, SiPostman } from 'react-icons/si'

function Carousel() {
    return (
        <div>
            <div className=" carousel-parent position-relative">
                <h1 className=' tech position-absolute top-0 start-0 end-0 text-center mt-5'> Technologies I Use </h1>
                <div className= "gallery">
                    <span style={{'--i' : 1}}>
                        <a href=""><FaReact color='' /></a>
                    </span>

                    <span style={{'--i' : 2}}>
                        <a href=""><FaNodeJs color=''/></a>
                    </span>

                    <span style={{'--i' : 3}}>
                        <a href=""><FaJsSquare color=''/></a>
                    </span>

                    <span style={{'--i' : 4}}>
                    <a href=""><FaJava color=''/></a>
                    </span>

                    <span style={{'--i' : 5}}>
                    <a href=""><FaPython color=''/></a>
                    </span>

                    <span style={{'--i' : 6}}>
                    <a href=""><SiMongodb color=''/></a>
                    </span>

                    <span style={{'--i' : 7}}>
                    <a href=""><SiDjango color=''/></a>
                    </span>

                    <span style={{'--i' : 8}}>
                    <a href=""><FaCss3 color=''/></a>
                    </span>

                    <span style={{'--i' : 9}}>
                    <a href=""><FaHtml5 color=''/></a>
                    </span>

                    <span style={{'--i' : 10}}>
                    <a href=""><FaBootstrap color=''/></a>
                    </span>

                    <span style={{'--i' : 11}}>
                    <a href=""><SiMysql color=''/></a>
                    </span>

                    <span style={{'--i' : 12}}>
                    <a href=""><SiSpringboot color=''/></a>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Carousel
