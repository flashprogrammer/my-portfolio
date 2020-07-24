import React from 'react'
import { FaFacebookF, FaInstagram, FaGoogle, FaStrava } from "react-icons/fa"

const Footer = () => (
    <div className="site-footer">
        <div className="footer-social-links">
            <ul className="social-links-list">
                <a className="facebook" href="https://www.facebook.com/noelits03" target="_blank" rel="noreferrer">
                    <FaFacebookF/>
                </a>
                <a className="instagram" href="https://www.instagram.com/la.renzz/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a className="google" href="mailto:noel.awitan@gmail.com">
                    <FaGoogle />
                </a>
                <a className="strava" href="https://www.strava.com/athletes/51606379" target="_blank" rel="noreferrer">
                    <FaStrava/>
                </a>
            </ul>
        </div>
        <span> &#169; 2019 - 2020 Noel Lawrence Awitan</span>
    </div>
)

export default Footer