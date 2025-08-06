'use client'
import React from 'react'
import VideoPopup from "@/components/elements/VideoPopup"


export default function Process() {
    return (
        <> 

        <section className="work_process_section">
            <div className="container">        
                <div className="section_title centred">
                    <div className="tag_text"><h6>Work Process</h6></div>
                    <h2>How it works</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
                            <div className="process_icon">
                                <i className="icon-35"></i>
                            </div>
                            <h4>Step 1: Share Your Vision</h4>
                            <p>Tell us about your style, needs, and the spaces you want to transform.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred shape_image" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
                            <div className="process_icon">
                                <i className="icon-36"></i>
                            </div>
                            <h4>Step 2: Get a Custom Plan</h4>
                            <p>Receive a personalized decor plan with mood boards, layouts, and product suggestions.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="process_icon">
                                <i className="icon-37"></i>
                            </div>
                            <h4>Step 3: Enjoy Styled Home</h4>
                            <p>Relax as we bring your vision to life—making your home beautiful, organized, and uniquely yours.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="video_box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundImage: "url(https://www.qualcondreams.com/in/wp-content/uploads/2019/10/fd97f0c9100644e526c5b84702d53692.jpg)" }}>
                    <VideoPopup />
                </div> */}
            </div>
        </section>

        </>
    )
}
