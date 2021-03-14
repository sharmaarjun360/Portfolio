import React from "react"
import auther from "../me.jpg";
const AboutMe = () => {
    return (
        <div className="conatainer py-5">
            <div className="row">
            {/* lg=large  xm= xtra small*/}
                <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="profile-img" src={auther} alt="Arjun Sharma..."/>
                    </div>
                </div>
                
                <div className="col-lg-6 col-xm-12">
                <div className="about-me-text">
                <h1 className="about-heading">about me</h1>
                    <p>
                        Namaste (^_^)/ 
                        <br />
                        I am Arjun Sahrma , I have been a software developer for more than 4 years. I started my journey as iOS developer but later down the road branched to android development too. Over the course of time I have learned devOps and basics of python development.
                        Java is my goto programming language and then python, objective C respectively.
                        <br />
                        I have contributed to the development of many iOS and Android applications. 
                        After years of working as software developer I decided to persue Masters in Computer Science.
                        Now as my graduation day approches (Spring 2021) I am actively looking for Full time oppertunity to contribute and learn.
                        <br />
                        So be ready world, here I come :D
                        <br />w̶h̶y̶ ̶m̶e̶ Try me!
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
