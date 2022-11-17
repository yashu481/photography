import React from "react";
import Home from "../home/home";
import './homepage.css';
import pic from '../../images/photography.jpg';
import sqril from '../../images/squirrale.jpg';
import sprw from '../../images/sparrow.jpg';
import dgfly from '../../images/Dragonfly.jpg';
import alone from '../../images/alone.jpg';
const Homepage = () => {

    return(
        <div className="main">
            <div>
                <h3 className="m-t">Phohtography</h3>
                <div className="m-t">
                    <img src={pic} alt="" className="p-pic"/>
                </div>
                <div className="p-6">
                    <p>In today’s digital world, photographers use state-of-the-art cameras and sophisticated software to create stunning images. But photography is not just about high-tech tools. The heart of photography is the creative process, and the skill and artistry of the photographer.
                    Anyone with a camera can take a picture. But to create truly great images, you need to understand the principles of photography, and have a creative eye and a sense of composition. With practice, you can develop your own unique style, and become a better photographer.
                    When you look at a photograph, you can relive the moment that was captured in the image. You can feel the warmth of the sun, or the breeze blowing in your hair. You can see the expressions on the faces of the people in the picture, and hear the laughter or the silence.
                    </p>
                </div>
            </div>
            <div>
                <div className="flex-container m-t">
                    <div className="ubtn">
                        <input type='submit' value='Uplaod Photos' className="btns-dark"/>
                    </div>
                    <div className="ubtn">
                    <input type='submit' value='Download Photos' className="btns-dark"/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="m-t">Our Photos</h3>
                <div className="flex-container m-t">
                    <div className="img-div">
                       <img src={sqril} alt="" className="imgs"/>
                    </div>
                    <div className="img-div rfloat">
                        <img src={alone} alt="" className="imgs"/>
                    </div>
                </div>
                <div className="flex-container m-t">
                    <div className="img-div">
                       <img src={sprw} alt="" className="imgs"/>
                    </div>
                    <div className="img-div rfloat">
                        <img src={dgfly} alt="" className="imgs"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;