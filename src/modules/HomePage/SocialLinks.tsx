import React,{FC} from 'react';
import GitHubIcon from "../../assets/Social_Icons/social_github_icon.png";
import TwitterIcon from "../../assets/Social_Icons/x_twitter_icon.png";
import LinkedInIcon from "../../assets/Social_Icons/app_linkedin_logo_media_popular_icon.png";

const Socials = [
    {name: 'Twitter', size: 'w-12', icon: TwitterIcon, link: "ds"},
    {name: 'LinkedIn', size: 'w-14', icon: LinkedInIcon, link: "ds"},
    {name: 'GitHub', size: 'w-14', icon: GitHubIcon, link: "https://github.com/Aqu1ver1"},
]
// type Icons = {
//     size:number;
//     href:string;
//
// }
const SocialLinks:FC = () => {
    return (
        <div className="flex gap-8 items-center">
            {Socials.map((social) => {
                return (
                    <a key={social.name}>
                        <img src={social.icon} className={social.size} alt="Twitter"/>
                    </a>
                )

            })}
        </div>
    );
};

export default SocialLinks;