'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Blog_Grid() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle14="Decor Diaries">
        <section className="blog_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/9f/4c/9a/9f4c9a28326a0a7428b2b5ea131f331c.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>DIY Ideas</span></div>
                                    <h3><Link href="/blog-details">10 Easy DIY Decor Projects for Every Room</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ava Brooks</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/07/dd/e9/07dde97fbf745213d70dadd5d0f64a43.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Trends</span></div>
                                    <h3><Link href="/blog-details">2025 Home Decor Trends You’ll Love</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Mason Lee</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/1200x/b5/19/cf/b519cfaf9b5fe9abcf9f292f94152b79.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Room Makeover</span></div>
                                    <h3><Link href="/blog-details">Small Living Room Makeover: Before & After</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ella Carter</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/1d/66/45/1d6645f3a797b142c0f9869d4ada4540.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Color Inspiration</span></div>
                                    <h3><Link href="/blog-details">How to Choose the Perfect Paint Color</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Liam Turner</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/9f/a7/25/9fa725550a77a8886aa75135b93783e3.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Budget Decor</span></div>
                                    <h3><Link href="/blog-details">Stylish Decor Ideas on a Budget</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Sophie Kim</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/e2/c8/55/e2c855a82dd9e664e031f384d788c452.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Organization</span></div>
                                    <h3><Link href="/blog-details">Declutter Your Home: Storage Tips & Tricks</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Noah Smith</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/b8/15/a1/b815a12708039611310ca7b5effbf31c.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Outdoor Spaces</span></div>
                                    <h3><Link href="/blog-details">Create a Cozy Patio for Summer Evenings</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Mia Johnson</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/be/8a/76/be8a7675399e32b8c8d2a2b032c57950.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Lighting</span></div>
                                    <h3><Link href="/blog-details">Lighting Ideas to Brighten Your Home</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Lucas Brown</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="https://i.pinimg.com/736x/19/43/42/194342eb7204c8d005ac4259bcd33065.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Style Tips</span></div>
                                    <h3><Link href="/blog-details">Mixing Modern and Vintage Decor</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Olivia Green</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="pagination-wrapper text-center">
                    <ul className="pagination">
                        <li><span className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href="/blog-grid">2</a></li>
                        <li><a className="page-numbers" href="/blog-grid">3</a></li>
                        <li><a className="page-numbers" href="/blog-grid">...</a></li>
                        <li><a className="page-numbers" href="/blog-grid">8</a></li>
                        <li><a className="next page-numbers" href="/blog-grid"><i className="icon-34"></i></a></li>
                    </ul>
                </div> */}
            </div>
        </section>
        </Layout>
    </div>
    )
}