'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Contact_Page() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle16="Contact Information">
        <section className="contact_info_section pt_150 pb_120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="contact_block_icon"><i className="icon-3"></i></div>
                            <div className="contact_block_title"><h4>Our Location</h4></div>
                            <div className="contact_block_text"><p>Shop No. 30 , New Aatish Market<br/></p>Jaipur</div>
                        </div>
                    </div>  
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                            <div className="contact_block_icon"><i className="icon-2"></i></div>
                            <div className="contact_block_title"><h4>Email Address</h4></div>
                            <div className="contact_block_text"><p><Link href="#">gkhomedecorz@gmail.com</Link></p></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="contact_block_icon"><i className="icon-1"></i></div>
                            <div className="contact_block_title"><h4>Phone Number</h4></div>
                            <div className="contact_block_text"><p>Emergency Cases <br/><Link href="#">+91 9587501000 (24/7)</Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="google_map" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="map_outer_box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7881216591836!2d75.7581013754383!3d26.87847197666751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53860a3593b%3A0x635d79816ced4d4b!2sGK%20HOME%20DECORZ!5e0!3m2!1sen!2sin!4v1754475643808!5m2!1sen!2sin" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </section>
        <section className="contact_section pt_150" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            {/* <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Contact Info</h6></div>
                    <h2>Contact Information</h2>
                </div>
                <form action="/contact" className="contact_form">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" name="user" placeholder="Your name"/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" name="email" placeholder="Your email"/>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <textarea type="message" name="message" placeholder="Type message"></textarea>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="form-group centred">
                                <button type="button" name="button" className="btn_style_one">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
        </section>
        </Layout>
    </div>
    )
}