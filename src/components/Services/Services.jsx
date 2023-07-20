import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div class="container mt-2 mb-5">
        <h1 className="font-coffee text-center mb-3">Services</h1>
        <section id="minimal-statistics">

            <div class="row">
                <div class="col-xl-3 col-sm-6 col-6">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center icon">
                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h4 className='icon-head1'>New</h4>
                                        <span className='icon-head2'>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center icon">
                                        <i class="icon-speech warning font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h4 className='icon-head1'>New</h4>
                                        <span className='icon-head2'>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center icon">
                                        <i class="icon-graph success font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h4 className='icon-head1'>New</h4>
                                        <span className='icon-head2'>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center icon">
                                        <i class="icon-pointer danger font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h4 className='icon-head1'>New</h4>
                                        <span className='icon-head2'>New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </section>


    </div>
  )
}

export default Services