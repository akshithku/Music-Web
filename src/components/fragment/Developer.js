import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn,} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Akshith Kumar</h3>
                        <p>Full Stack developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at Lovely Professional University, Punjab.</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/akshith-kumar-94aa5b24b/"} >
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/kanni.kumar/"} >
                            <Instagram/>
                        </IconButton>
                       
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;