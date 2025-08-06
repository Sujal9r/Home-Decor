"use client";
import React from "react";

export default function Cta() {
  return (
    <>
      <section
        className="cta_section"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="container">
          <div className="cta_inner">
            <h3>
              Subscribe for latest update <br /> about Decorz
            </h3>
            <div className="subscribe-inner">
              <form
                action="https://formsubmit.co/gkhomedecorz@gmail.com"
                method="POST"
                className="subscribe-form"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="🎉 New Subscriber Alert!"
                />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="form-group">
                  <input
                    type="email"
                    name="Subscriber's Email"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="btn_style_one">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="cta_shape float-bob-y">
              <img src="assets/images/icons/shape_icon_3.png" alt="" />
            </div>
            <div className="cta_image">
              <figure>
                <img
                  src="https://buywallart.ca/cdn/shop/articles/productphoto1_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x_97881259-2223-42be-ae6b-c2775d179926.png?v=1750358763"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
