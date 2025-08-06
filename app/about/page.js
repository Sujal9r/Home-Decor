'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Feature from '@/components/sections/home4/Feature'
import Team from '@/components/sections/home2/Team'
import Testimonial from '@/components/sections/home3/Testimonial'

export default function About_Page() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={1} footerStyle={1}>

        <section className="about_page_banner" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="banner_content centred">
                    <div className="tag_text"><h6>About Us</h6></div>
                    <h1>Get to Know Us</h1>
                    <p>Transforming Homes with Style & Heart</p>
                    <div className="banner_image">
                        <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2024/10/living-room-by-top-interior-design-website-Decorilla-scaled.jpg" alt="Home Decor About Banner"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="why_choose_us about_page" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_circle float-bob-y"><img src="assets/images/icons/ring_shape.png" alt=""/></div>
            <div className="mouse_pointer float-bob-x"><img src="assets/images/icons/mouse-pointer.png" alt=""/></div>
            <div className="container">
                <div className="border_top"></div>
                <div className="section_title centred">
                    <div className="tag_text"><h6>Why Choose Us</h6></div>
                    <h2>Our Vision</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-28"></i>
                            </div>
                            <h4>Expert Consultants</h4>
                            <p>Our experienced designers help you create beautiful, functional spaces tailored to your lifestyle and taste.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40 hover" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-27"></i>
                            </div>
                            <h4>Personalized Solutions</h4>
                            <p>We listen to your needs and deliver custom decor plans, from color palettes to furniture and accessories.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-26"></i>
                            </div>
                            <h4>Sustainable & Stylish</h4>
                            <p>We use eco-friendly materials and innovative designs to make your home beautiful and planet-friendly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Feature/>
        <Team/>
        <Testimonial/>

        </Layout>
    </div>
    )
}