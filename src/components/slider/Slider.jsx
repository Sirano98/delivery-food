import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './Slider.css';

export default function Slider() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <section className="promo vegetables swiper-slide">
                    <h2 className="promo-title">20% discount on all food <br /> with promo code LOVE.JS</h2>
                    <p className="promo-text">
                        A dish from the restaurant will be brought along with two gift books about the frontend
                    </p>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="promo pizza swiper-slide">
                    <h2 className="promo-title">Online <br />food delivery service</h2>
                    <p className="promo-text">
                        Dishes from your favorite restaurant will be brought by a courier wearing gloves and a mask
                    </p>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="promo kebab swiper-slide">
                    <h2 className="promo-title">BBQ  <br />with 35% discount</h2>
                    <p className="promo-text">
                        Order a BBQ at any restaurant and get a discount with the promo code OMAGAD
                    </p>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="promo sushi swiper-slide">
                    <h2 className="promo-title">Sets with up to 30% discount <br /> in restaurants</h2>
                    <p className="promo-text">
                        Discounts on sets with promo code DADADA
                    </p>
                </section>
            </SwiperSlide>
        </Swiper>
    );
};