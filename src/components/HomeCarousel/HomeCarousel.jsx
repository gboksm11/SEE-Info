import { Carousel } from "react-responsive-carousel"
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img_1 from "../../assets/see-1.jpg";
import img_2 from "../../assets/see-5.jpg";
import img_3 from "../../assets/see-3.jpg";
import img_4 from "../../assets/see-4.jpg";
import img_5 from "../../assets/see-6.PNG";
import img_6 from "../../assets/see-7.jfif";
import img_7 from "../../assets/see-8.PNG";
import img_8 from "../../assets/see-9.PNG";
import "../../pages/Home/Home.css";


const HomeCarousel = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    useEffect(() => {
        const reactToWindowResize = () => {
          setIsMobile(window.innerWidth <= 850);
        }
        window.addEventListener('resize', reactToWindowResize);
    });

    return (
        <Carousel
            autoPlay={true}
            autoFocus={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            width={isMobile ? 300 : 500}
            >

            <div>
                <img src={img_2} className="carousel-img"/>
            </div>

            <div>
                <img src={img_4} className="carousel-img"/>
            </div>
            

            <div>
                <img src={img_1} className="carousel-img"/>
            </div>

            <div>
                <img src={img_3} className="carousel-img"/>
            </div>

            <div>
                <img src={img_5} className="carousel-img"/>
            </div>

            <div>
                <img src={img_6} className="carousel-img"/>
            </div>

            <div>
                <img src={img_7} className="carousel-img"/>
            </div>

            <div>
                <img src={img_8} className="carousel-img"/>
            </div>
        </Carousel>
    )
}

export default HomeCarousel;