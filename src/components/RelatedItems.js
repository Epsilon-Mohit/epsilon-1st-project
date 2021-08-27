import React from 'react'
import img from '../Assets/download.jpg';
const RelatedItems = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="customers-testimonials" className="owl-carousel">

                            <div className="item">
                                <div className="shodow-effect">
                                    <img className="img-circle" src={img} alt="" />
                                    <p>njchc cjdncijec nkeci</p>
                                </div>
                                <div className="testimonial-name">
                                    Emmy oliva
                                </div>
                            </div>

                            <div className="item">
                                <div className="shodow-effect">
                                    <img className="img-circle" src={img} alt="" />
                                    <p>njchc cjdncijec nkeci</p>
                                </div>
                                <div className="testimonial-name">
                                    Emmy oliva
                                </div>
                            </div>

                            <div className="item">
                                <div className="shodow-effect">
                                    <img className="img-circle" src={img} alt="" />
                                    <p>njchc cjdncijec nkeci</p>
                                </div>
                                <div className="testimonial-name">
                                    Emmy oliva
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedItems
