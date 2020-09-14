import React from 'react'

export default () => {
    return (
        <header>
        <div className='container'>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>
                        <a href='#container'>Home</a>
                    </li>
                    <li>
                        <a href='#container'>About</a>
                    </li>
                    <li>
                        <a href='#container'>Pricing</a>
                    </li>
                    <li>
                        <a href='#container'>Blog</a>
                    </li>
                    <li>
                        <a href='#container'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <style jsx> {`
            @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
            .container {
                width: 80%;
                margin: 0 auto;
            }
            header {
                background: #FFF6D8;
                font-family: 'Work Sans', sans-serif;
                border-bottom-style: solid;
                border-width: 1px;   
            }
            header::after {
                content: '';
                display: table;
                clear: both;
            }
            h1 {
                 float: left;
                 padding: 0;
            }
            nav {
                 float: right;
            }
            nav ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            nav li {
                display: inline-block;
                margin-left: 70px;
                padding-top: 32px;
                position: relative;
            }
            nav a {
                text-decoration: none;
                color: #262626;
                text-transform: uppercase;
                font-size: 16px;
                transition: all ease-in-out 0.3s;
            }
            nav a:hover {
                color: #000;
            }
            nav a::before {
                content: '';
                display: block;
                height: 4px;
                width: 100%;
                background-color: #000;
                position: absolute;
                top: 0;
                width: 0%;
                transition: all ease-in-out 0.3s;
            }
            nav a:hover::before {
                width: 100%;
            }
                `}
            </style>
        </header>
    )
}
