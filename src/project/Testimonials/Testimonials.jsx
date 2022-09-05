import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
//import AwesomeSlider from 'react-awesome-slider';
import { Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I tried many companies to secure insurance for this major trip to Africa. The websites were difficult to navigate and understanding the different plans were challenging. As a non US resident, it was not easy to find travel insurance.",
    },
    {
      img: profilePic2,
      review:
        "I tried many companies to secure insurance for this major trip to Africa. The websites were difficult to navigate and understanding the different plans were challenging. As a non US resident, it was not easy to find travel insurance.",
    },
    {
      img: profilePic3,
      review:
        "I tried many companies to secure insurance for this major trip to Africa. The websites were difficult to navigate and understanding the different plans were challenging. As a non US resident, it was not easy to find travel insurance.",
    },
    {
      img: profilePic4,
      review:
        "I tried many companies to secure insurance for this major trip to Africa. The websites were difficult to navigate and understanding the different plans were challenging. As a non US resident, it was not easy to find travel insurance.",
    },
  ];
  return (
    <div className="" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptionals works</span>
        <span> from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial1 ">
                <div className="testimonial ">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
