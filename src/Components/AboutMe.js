import React from "react"
import auther from "../me.jpeg";
const AboutMe = () => {
    return (
        <div className="conatainer py-5">
            <div className="row">
            {/* large 6  xxtra small*/}
                <div className="col-lg-6 col-xm-12">
                    <img src={auther} alt="Arjun Sharma..."/>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>about me</h1>
                    <P>
                        Namaste (^_^)/ I am Arjun Sahrma , I have been a software developer for more than 4 years. I started my journey as iOS developer but later down the road branched to android development too. Over the course of time I have learned devOps and basics of python development.
                        Java is my goto programming language and then python,objective C respectively.

                        I have contributed to the development of many iOS and Android applications. 
                        After years of working as software developer I decided to persue Masters in Computer Science.
                        Now as my graduation day approches (Spring 2021) I am actively looking for Full time oppertunity to contribute and learn.

                        So be ready world, here I come :D
                        W̶h̶y̶ Try me!

                    </P>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
