import { Image } from "@heroui/image";
import Slider from "react-slick";

export default function SimpleSlider() {
 const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
  
    cssEase: "linear"
  };
  return (
    <Slider {...settings} className="gap-y-4">
      <div className="max-h-1/3">
        <Image
          src="assets/slides/slide-1.png"
          
        />
      </div>
      <div className="max-h-1/3">
        <Image
          src="assets/slides/slide-2.png"
         
        />
      </div>
    </Slider>
  );
}