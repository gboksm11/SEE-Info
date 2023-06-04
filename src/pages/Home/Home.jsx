import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import { Link } from "react-router-dom";
import BlackButton from "../../components/BlackButton/BlackButton";
import './Home.css';
import { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logo from "../../assets/logo.png";
import faceRecog from "../../assets/face-recog-icon.jpg";
import objectRecog from "../../assets/obj-recog-icon.png";
import objectDetect from "../../assets/obj-detect-icon.jpg";
import sidewalkDetect from "../../assets/sidewalk-icon.png";
import webapp from "../../assets/web-app.PNG";
import ghaith from "../../assets/ghaith.jpg";
import ze from "../../assets/Ze.png";
import brandon from "../../assets/brandon.jpg";
import josiah from "../../assets/josiah.jpg";
import varun from "../../assets/varun.png";
import SeeAnimated from "../../components/SeeAnimated/SeeAnimated";
import ze_vid from "../../assets/see-vid-1.mov";

const Home = () => {

    useEffect(() => {

    })

    return(
        <>
            <div className="home-container">

                <div className="home-logo-container">
                    <SeeAnimated/>
                    <img className="see-logo" src={logo}></img>
                </div>

                {/* <p className="home-title">Precision Measured, Results Guaranteed</p> */}
            </div>

            <div className="cards-container">
                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                            <div className="who-we-are-init">
                                <p className="home-title">Who We Are</p>
                                
                                {/* <img className="logo-alone" source={gray_logo}></img> */}
                                <p className="home-subtitle-init">We are a passionate team dedicated to leveraging cutting-edge technology to make a meaningful impact on the lives of the visually impaired. With a firm belief in the power of innovation and inclusivity, we have developed AI-powered glasses designed specifically for the blind. Our mission is to empower individuals with visual challenges, enabling them to navigate the world with enhanced independence and confidence. By combining advanced object recognition, facial recognition, and ultrasonic sensor technology, our glasses provide a revolutionary way for the blind to perceive their surroundings, recognize objects, and connect with others.</p>
                            </div>

                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                    <div className="who-we-are">
                        <p className="home-title">"Hear what you see"</p>
                        <p className="home-subtitle">Our product comprises an AI-powered wearable smart glasses that uses object detection to detect and analyze objects in a scene, and relay that information to the user through a bluetooth earpiece. Hence, the user would be able to effectively “hear what they see” via the glasses.</p>
                        <div className="carousel-container">
                            <HomeCarousel/>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                    <div className="who-we-are">
                        <p className="home-title">Features</p>
                        <p className="home-subtitle">Our product comprises an AI-powered wearable smart glasses that uses object detection to detect and analyze objects in a scene, and relay that information to the user through a bluetooth earpiece. Hence, the user would be able to effectively “hear what they see” via the glasses.</p>
                        <div className="features-container">
                            <div className="features-card left">
                                <p className="feature-title">Object Recognition</p>
                                <div className="img-text-container">
                                    <img className="feature-img" src={objectRecog}></img>
                                    <p className="feature-text">Our object recognition technology utilizes state-of-the-art <a href="https://github.com/ultralytics/yolov5">YOLO</a> (You Only Look Once) algorithms to provide seamless and accurate detection of up to 91 objects in real-time. By leveraging the video feed captured from the cameras mounted on our AI-powered glasses, we employ the power of deep learning to identify and classify objects with exceptional speed and precision. With a focus on reducing latency, we utilize WebRTC (Web Real-Time Communication) streaming technology to deliver a smooth and near-instantaneous visual experience. This enables our users to effortlessly navigate their surroundings, effortlessly recognizing and interacting with various objects in their environment.</p>
                                </div>

                            </div>

                            <div className="features-card right">
                                <p className="feature-title right">Object Detection</p>
                                <div className="img-text-container">
                                    <p className="feature-text">Our object detection system incorporates advanced ultrasonic sensors
                                     mounted on our AI-powered glasses, allowing for precise measurement of distances to nearby objects.
                                      By leveraging these sensors, we have developed a unique and intuitive method of relaying 
                                      information to the user. Haptic feedback pads attached to the body of the glasses provide 
                                      buzzing sensations that correspond to the proximity of objects in the wearer's surroundings. 
                                      This innovative approach enables the visually impaired to effortlessly detect and navigate 
                                      around obstacles, enhancing their spatial awareness and promoting a safer and more 
                                      independent experience.</p>
                                      <img className="feature-img" src={objectDetect}></img>
                                </div>
                            </div>

                            <div className="features-card left">
                                <p className="feature-title">Facial Recognition</p>
                                <div className="img-text-container">
                                <img className="feature-img" src={faceRecog}></img>
                                    <p className="feature-text">Our object detection system incorporates the HuskyLens, an advanced device 
                                    for facial recognition. It enables our AI-powered glasses to learn and recognize faces, associating 
                                    them with names or labels. When encountering familiar faces, the glasses swiftly detect and identify 
                                    them, relaying the recognized names to the user through clear audio feedback. This technology enhances
                                    social interactions, enabling individuals with visual impairments to easily recognize and engage 
                                    with people around them.</p>

                                </div>

                            </div>

                            <div className="features-card right">
                                <p className="feature-title right">Sidewalk Detection</p>
                                    <div className="img-text-container">
                                        <p className="feature-text"> Our sidewalk detection system utilizes a camera on our AI-powered glasses
                                        to stream video to a dedicated sidewalk detection model. The model analyzes the footage in real-time,
                                        identifying if the user has drifted off the right or left of the sidewalk. Using haptic feedback pads,
                                        the system cues the user to move in the opposite direction, guiding them back onto the sidewalk. 
                                        This technology ensures that individuals with visual impairments stay on a safe path while walking,
                                            promoting independence and reducing potential risks
                                        </p>
                                        <img className="feature-img" src={sidewalkDetect}></img>
                                    </div>

                            </div>

                            <p className="demo-vid-subtitle">Demo Video</p>
                            <video id="demo" className="demo-vid" loop autoPlay playsInline muted src={ze_vid} onClick={() => {
                                const vid = document.getElementById("demo");
                                vid.muted = !vid.muted;
                            }}></video>

                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                    <div className="who-we-are">
                        <p className="home-title">Personalize Your Experience</p>
                        <p className="home-subtitle">Our web application provides an intuitive platform for visually impaired users 
                        to configure and customize the settings of their AI-powered glasses. With built-in speech recognition technology,
                         users can easily interact with the app using voice commands. The application also incorporates text-to-speech
                          functionality, enabling important information and settings to be conveyed audibly to the user. 
                          This inclusive approach ensures that individuals with visual impairments have full control over their glasses'
                           settings, allowing them to personalize their experience and adapt it to their unique needs. </p>
                        <img className="web-app-img" src={webapp}></img>
                    </div>
                </AnimationOnScroll>


                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                        <div className="who-we-are">
                            <p className="home-title">Meet the Team</p>
                            <div className="partners-container">
                                <div className="browsing-categ">
                                    <p className="browsing-label">Ghaith Boksmati</p>
                                    <img className="browsing-img" src={ghaith}></img>
                                    <p className="browsing-label">Engineering, Software Development</p>
                                </div>

                                <div className="browsing-categ">
                                    <p className="browsing-label">Varun Venkatesh</p>
                                    <img className="browsing-img" src={varun}></img>
                                    <p className="browsing-label">Engineering, Software Development</p>
                                </div>

                                <div className="browsing-categ">
                                    <p className="browsing-label">Josiah Matsuda </p>
                                    <img className="browsing-img" src={josiah}></img>
                                    <p className="browsing-label">Engineering, Team Representative</p>
                                </div>

                                <div className="browsing-categ">
                                    <p className="browsing-label">Brandon Santoso</p>
                                    <img className="browsing-img" src={brandon}></img>
                                    <p className="browsing-label">Engineering, Testing</p>
                                </div>

                                
                                <div className="browsing-categ">
                                    <p className="browsing-label">Ze Xu </p>
                                    <img className="browsing-img" src={ze}></img>
                                    <p className="browsing-label">Engineering, Testing</p>
                                </div>
                            </div>
                        </div>
                </AnimationOnScroll>
            </div>
        </>

    )
}

export default Home;