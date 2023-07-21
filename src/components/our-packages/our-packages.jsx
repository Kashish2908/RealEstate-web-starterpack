import React from 'react'
import "./our-packages.css"

const Our_Packages = () => {
    const cardData = [
        {
            "title": "Package Name", "img": "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", "days": "3 Days & 4 Nights", "button": "Book Now"
        },

        {
            "title": "Package Name", "img": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80", "days": "3 Days & 4 Nights", "button": "Book Now"
        },

        {
            "title": "Package Name", "img": "https://images.unsplash.com/photo-1596306499317-8490232098fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", "days": "3 Days & 4 Nights", "button": "Book Now"
        },

        
    ]
    return (
        <>
        <div className='web container'>
            <div className="container mt-2 mb-5">
                <h1 className="font-coffee text-center mb-3">Our Packages</h1>
            </div>
            <div id="ourpackage-container">
                <div class="boxesContainer">
                    {cardData.map((dets) => (
                        <div class="cardBox">
                            <div class="card">
                                <div class="front">
                                    <div id="card-deets">
                                        <h3>{dets.title}</h3>
                                        <p>{dets.days}</p>
                                    </div>

                                    <img src={dets.img} alt="" />

                                </div>
                                <div class="back">
                                    <a href="#">{dets.button}</a>
                                </div>
                            </div>
                        </div>
                    ))}


                    {/* <div class="cardBox">
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
                    </div> */}

                </div>
            </div>



        </div>
        <div className='mobile container-fluid'>
            <div className="container mt-2 mb-5">
                <h1 className="font-coffee text-center mb-3">Our Packages</h1>
            </div>
            <div id="ourpackage-container">
                <div class="boxesContainer">
                    {cardData.map((dets) => (
                        <div class="cardBox">
                            <div class="card">
                                <div class="front">
                                    <div id="card-deets">
                                        <h3>{dets.title}</h3>
                                        <p>{dets.days}</p>
                                    </div>

                                    <img src={dets.img} alt="" />

                                </div>
                                <div class="back">
                                    <a href="#">{dets.button}</a>
                                </div>
                            </div>
                        </div>
                    ))}


                    {/* <div class="cardBox">
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
                    </div> */}

                </div>
            </div>



        </div>
        </>
    )
}

export default Our_Packages