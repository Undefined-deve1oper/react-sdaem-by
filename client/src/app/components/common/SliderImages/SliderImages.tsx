import React from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

type ImageSliderTypes = SwiperProps & {
    items: string[];
    className?: string;
};

const ImageSlider: React.FC<ImageSliderTypes> = ({
    items,
    className,
    ...rest
}) => {
    return (
        <Swiper
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="images-swiper"
            mousewheel={true}
            loop={true}
            {...rest}
        >
            {items.map((item) => (
                <SwiperSlide key={item} className={className}>
                    <img src={item} alt="image" className={className} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;
