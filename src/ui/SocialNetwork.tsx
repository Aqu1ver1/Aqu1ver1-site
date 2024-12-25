import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Instagram from "../assets/instagram_icon.png"
import Facebook from "../assets/facebook_icon.png"
import Twitter from "../assets/twitter_icon.png"

{/*<Link to="https://www.instagram.com/v_i_ktoria__/">*/}
{/*    <img src={Instagram} alt="instagram" />*/}
{/*</Link>*/}


const socialNet = [
    {name: 'Instagram', src: `${Instagram}`, href:"https://www.instagram.com/v_i_ktoria__/"},
    {name: 'Facebook', src: `${Facebook}`, href:"https://www.instagram.com/v_i_ktoria__/"},
    {name: 'Twitter', src: `${Twitter}`, href:"https://www.instagram.com/v_i_ktoria__/"},
]

const SocialNetwork:FC = () => {
    return (
        <div className="flex gap-5">
            {socialNet.map((social) => {
                return (
                    <a key={social.name} href={social.href}>
                        <img src={social.src} alt={social.name} />
                    </a>
                )
            })}

        </div>
    );
};

export default SocialNetwork;