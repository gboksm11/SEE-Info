import { Carousel } from "react-responsive-carousel"
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img_1 from "../../assets/see-1.jpg";
import img_2 from "../../assets/see-2.jpg";
import img_3 from "../../assets/see-3.jpg";
import img_4 from "../../assets/see-4.jpg";


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
            dynamicHeight={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            width={isMobile ? 300 : 500}
            >

            <div>
                <img src={img_2} />
            </div>

            <div>
                <img src={img_4} />
            </div>

            <div>
                <img src={img_1} />
            </div>
        </Carousel>
    )
}

export default HomeCarousel;