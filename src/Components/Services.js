import React from 'react'
import { faJava, faAndroid, faApple, faPython } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faJava, faAndroid, faApple, faGithub } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
      <div className="Services">
       <h1 className="py-5">Thechnical Stack</h1>
           <div className="container">
               <div className="row">
                   {/* md medium and sm is small */}
                   <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faJava} size="2x" /></div>
                           <h3>Java </h3>
                           <p> I develop awesome mobile apps </p>
                       </div>
                   </div>
                   {/* . */}
                   <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon  className="icon" icon={faAndroid} size="2x" /></div>
                           <h3>Android </h3>
                           <p> I develop awesome mobile apps</p>
                       </div>
                   </div>
                   {/* . */}
                   <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faApple} size="2x" /></div>
                           <h3>iOS </h3>
                           <p> I develop awesome mobile apps</p>
                       </div>
                   </div>
                   {/* . */}
                   <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faPython} size="2x" /></div>
                           <h3>Python </h3>
                           <p> I develop awesome mobile apps</p>
                       </div>
                   </div>
               </div>
               </div> 
            
      </div>
    )
}

export default Services;

