import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faGooglePlusG, faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'

 

export default () => {
    return (
        <>
        <footer className='foot'>
            <ul>
                <li>
                    <a href='#foot'> 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faFacebookF} size='2x'/>
                    </a>
                </li>        
                <li>
                    <a href='#foot'> 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faTwitter} size='2x'/>
                    </a>
                </li>    
                <li>
                    <a href='#foot'> 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faGooglePlusG} size='2x'/>
                    </a>
                </li>    
                <li>    
                    <a href='#foot'> 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faInstagram} size='2x'/>
                    </a>
                </li>
                <li>
                    <a href='#foot'> 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
                    </a>
                </li>
            </ul>
        </footer>
        <style jsx> {`
                footer {
                    background: #FFF6D8;
                    border-top-style: solid;
                    border-width: 1px; 
                    width: 100%;  
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    padding: 1%;
                    margin: 0 auto;
                    align-items: center;
                    display: flex;
                }
                footer::after {
                    content: '';
                    display: table;
                    clear: both;
                }
                footer ul {
                    position: relative;
                    padding: 0;                    
                    margin: 0 auto;
                    display: flex;
                }
                footer ul li {
                    list-style: none;
                    
                }
                footer ul li a {
                    display: block;
                    position: relative;
                    width: 50px;
                    height: 50px;
                    line-height: 60px;
                    text-align: center;
                    text-decoration: none;
                    color: #262626;
                    margin: 0 10px;
                    transition: 0.5s;
                }
                footer ul li a span {
                    position: absolute;
                    transition: transform 0.5s;
                }
                footer ul li a span:nth-child(1),
                footer ul li a span:nth-child(3) 
                {
                    width: 100%;
                    height: 1px;
                    background: #262626;
                }
                footer ul li a span:nth-child(1) {
                    top: 0;
                    left: 0;
                    transform-origin: right;
                }
                footer ul li a:hover span:nth-child(1) {
                    transform-origin: left;
                    transform: scaleX(0);
                    transition: transform 0.5s;
                }
                footer ul li a span:nth-child(3) {
                    bottom: 0;
                    left: 0;
                    transform-origin: left;
                }
                footer ul li a:hover span:nth-child(3) {
                    transform-origin: right;
                    transform: scaleX(0);
                    transition: transform 0.5s;
                }
                footer ul li a span:nth-child(2),
                footer ul li a span:nth-child(4) 
                {
                    width: 1px;
                    height: 100%;
                    background: #262626;
                }
                footer ul li a span:nth-child(2) {
                    top: 0;
                    left: 0;
                    transform: scaleY(0);
                    transform-origin: bottom;
                }   
                footer ul li a:hover span:nth-child(2) {
                    transform-origin: top;
                    transform: scaleY(1);
                    transition: transform 0.5s;
                }
                footer ul li a span:nth-child(4) {
                    top: 0;
                    right: 0;
                    transform: scaleY(0);
                    transform-origin: top;
                }
                footer ul li a:hover span:nth-child(4) {
                    transform-origin: bottom;
                    transform: scaleY(1);
                    transition: transform 0.5s;
                }
            `}
            </style>
        </>
    )
}