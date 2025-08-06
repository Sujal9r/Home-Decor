import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li className=""><Link href="/about">About</Link>
                </li>
                <li className=""><Link href="/services">Services</Link>
                </li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li className=""><Link href="/blog-grid">Blog</Link>
                </li> 
            </ul>
        </>
    )
}

