'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function Testimonial() {
    return (
        <> 

        <section className="testimonial_section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="shape_bg"></div>
                <div className="section_title centred">
                    <div className="tag_text"><h6>Testimonials</h6></div>
                    <h2>Love from Clients</h2>
                </div>
                <Swiper {...swiperOptions} className='three-item-carousel'>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>“I am extremely satisfied with the quality and variety of products offered… Highly recommended!”</p>
                                <div className="author_box">
                                    <div className="author_info">
                                        <h5>Ms. Nidhi</h5>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>"I am extremely satisfied with the quality and variety of products offered by GK Home Decors. Highly recommended!"</p>
                                <div className="author_box">
                                    <div className="author_info">
                                        <h5>Mr. Aditya Jain</h5>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>"The customer service provided by GK Home Decors is exceptional. They went above and beyond to meet my requirements."</p>
                                <div className="author_box">
                                    <div className="author_info">
                                        <h5>Mr. Saurabh garg</h5>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>"GK Home Decors helped me transform my living room into a stylish and cozy space. I couldn't be happier!"</p>
                                <div className="author_box">
                                    <div className="author_info">
                                        <h5>Ms. Priya Jain</h5>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='owl-dots-one'>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        </section>

        </>
    )
}
