import React from 'react'
import "./our-packages.css"

const Our_Packages = () => {
    return (
        <div className='new'>
            <div className="container mt-2 mb-5">
                <h1 className="font-coffee text-center mb-3">Our Packages</h1>
            </div>
            <div id="ourpackage-container">
                <div class="boxesContainer">

                    <div class="cardBox">
                        <div class="card">
                            <div class="front">
                                <h3>Card One</h3>
                                <p>Hover to flip</p>
                                <strong>&#x21bb;</strong>
                            </div>
                            <div class="back">
                                <h3>Back Side One</h3>
                                <p>Content in card one</p>
                                <a href="#">Button 1</a>
                            </div>
                        </div>
                    </div>

                    <div class="cardBox">
                        <div class="card">
                            <div class="front">
                                <h3>Card Two</h3>
                                <p>Hover to flip</p>
                                <strong>&#x21bb;</strong>
                            </div>
                            <div class="back">
                                <h3>Back Side Two</h3>
                                <p>Content in card two</p>
                                <a href="#">Button 2</a>
                            </div>
                        </div>
                    </div>

                    <div class="cardBox">
                        <div class="card">
                            <div class="front">
                                <h3>Card Three</h3>
                                <p>Hover to flip</p>
                                <strong>&#x21bb;</strong>
                            </div>
                            <div class="back">
                                <h3>Back Side Three</h3>
                                <p>Content in card three</p>
                                <a href="#">Button 3</a>
                            </div>
                        </div>
                    </div>

                    <div class="cardBox">
                        <div class="card">
                            <div class="front">
                                <h3>Card Four</h3>
                                <p>Hover to flip</p>
                                <strong>&#x21bb;</strong>
                            </div>
                            <div class="back">
                                <h3>Back Side Four</h3>
                                <p>Content in card four</p>
                                <a href="#">Button 4</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Our_Packages