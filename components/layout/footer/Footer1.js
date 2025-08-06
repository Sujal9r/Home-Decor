import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main_footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7 col-xs-12 ">
                <div
                  className="footer_widget newsletter_widget"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="650"
                >
                  <h4 className="footer_widget_title">
                    Subscribe to our Newsletter
                  </h4>

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
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7 col-xs-12">
                <div
                  className="footer_widget about_widget"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <ul className="social-links">
                    <li>
                      <Link href="https://www.facebook.com/GKINTERIORSDECOR?rdid=BU5knUOiZeLmypQg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16jVP7Pxwq%2F#">
                        <i className="icon-43"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/gkhomedecors?igsh=MWJ6eHkxZnczcDNzbg==">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/gk-homedecorz-a988b9364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <i className="icon-40"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="copyright">
              Copyright &copy; {new Date().getFullYear()} &nbsp;
              <Link href="/">Home Decorz</Link> , Inc. All Rights Reserved
            </div>
          </div>
        </div>
        <div className="footer_shape"></div>
      </footer>
    </>
  );
}
