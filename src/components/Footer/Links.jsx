// lib
import Link from "next/link"
import 
    { FaRss, 
    FaQuestionCircle, 
    FaInfoCircle, 
    FaUser, 
    FaPhoneAlt, 
    FaCalculator, 
    FaWrench,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaPinterestP,
    FaEnvelope,
    FaWhatsapp
} from "react-icons/fa";

// styles
import styles from "./styles.module.scss"
import React from "react";

export default function Links() {
  return (
    <div className={styles.footer__links}>
        {
            links.map((link,i) => (
                <ul key={link.heading}>
                    {
                        i === 0 ? (
                            <img src="/images/logo/logo-light.png" alt="" />
                        ) :(
                            <b>{link.heading}</b>
                        )
                    }
                    {link.links.map((item, i)=>(
                        <li key={i}>
                            <Link href={item.link}>
                                {item.icon && React.createElement(item.icon)}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))
        }
    </div>
  )
}

const links = [
    {
        heading: "VD INFOTECH",
        links: [
            {
                name: "+91-9988993645",
                link: "",
                icon: FaPhoneAlt
            },
            {
                name: "info@vdinfotech.com",
                link: "",
                icon: FaEnvelope
            },
            {
                name: "+91-9988993645",
                link: "",
                icon: FaWhatsapp
            },
            {
                name: "help",
                link: "",
                icon: FaQuestionCircle, 
            },
        ],
    },
    {
        heading: "Our Services",
        links: [
            {
                name: "Digital Marketing Services",
                link: "",
            },
            {
                name: "Design & Development",
                link: "",
            },
            {
                name: "Social Media Management",
                link: "",
            },
            {
                name: "How to Track",
                link: "",
            },
            {
                name: "Services",
                link: "",
            },
        ]
    },
    {
        heading: "Resources",
        links: [
            {
                name: "Tools",
                link: "",
            },
            {
                name: "News",
                link: "",
            },
            {
                name: "Media Coverage",
                link: "",
            },
            {
                name: "Guest Post",
                link: "",
            },
            {
                name: "Blog",
                link: "",
            },
        ] 
    }
]
