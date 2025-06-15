import React from 'react';
import { Button, Container } from 'react-bootstrap';
import VisionImg from '../Assets/Images/vision.jpg';
import MissionImg from '../Assets/Images/mission.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import UserImg from '../Assets/Images/user1.jpg';
import TestiImg from '../Assets/Images/testi1.jpg';
import Start from '../Assets/Images/star.svg';

export default function About() {
  return (
    <main>
      <section className="about_banner">
        <Container>
          <h1 className="text-white mb15">About Us</h1>
          <p className="text-white mb30">
            Crafting Brilliance: The Artistry and Legacy of Excellent
            corporation
          </p>
          <Button variant="outline-light" className="rounded-pill px30">
            Know More
          </Button>
        </Container>
      </section>

      <section className="mission_vision_wrapper py50">
        <Container>
          <div className="our_vision_wrapper mb100 mb80-md mb50-xs">
            <div className="vision_img_wrapper">
              <img src={VisionImg} alt="" />
            </div>
            <div className="vision_text_wrapper">
              <h2>Our Vision</h2>
              <p>
                We want to become the most trusted name in diamond trading
                universally, by providing an online platform that integrates all
                the essential functions in one place, in order to meet the
                requirements of every customer and deliver beyond their
                expectations. We also want to expand our reach as much as
                possible, to spread the right information and awareness among
                the prospective diamond consumer base, so everyone is assured
                that quality diamonds can be had at their preferred price point.
              </p>
            </div>
          </div>
          <div className="our_vision_wrapper mission_wrapper">
            <div className="vision_img_wrapper">
              <img src={MissionImg} alt="" />
            </div>
            <div className="vision_text_wrapper">
              <h2>Our Mission</h2>
              <p>
                For years, the dark truths of traditional diamond mining have
                been shrouded in secrecy, concealed behind the dazzling allure
                of these precious gemstones. At Excellent Corporation, we are
                committed to forging a new legacy – one that prioritizes
                transparency, ethics, and environmental responsibility. Our
                exquisite designs are exclusively crafted using ethically
                created and conflict-free lab-grown diamonds, a conscious choice
                that allows us to significantly reduce our water and energy
                consumption, minimize land and mineral disturbance, and slash
                carbon emissions. It is our unwavering mission to stand firmly
                on the right side of diamond history.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="about_page_wrapper">
        <Container>
          <div className="text-center">
            <p>
              At Excellent Corporation, we epitomize the artistry of diamond
              jewelry. Our story begins with a family deeply rooted in the world
              of fine jewelry, with over 60 years of collective industry
              experience. Our enduring reputation, founded on tradition and
              trust, has paved the way for the creation of an online diamond
              haven that upholds the highest standards of reliability,
              transparency, and integrity
            </p>
            <p>
              We recognize that the journey of acquiring a diamond can be a
              daunting one. That's why we are dedicated to empowering our
              customers with the knowledge and awareness needed to make
              well-informed decisions. Excellent Corporation is synonymous with
              excellence, offering a single platform where consumers, dealers,
              and suppliers come together in the spirit of the Diamond Exchange.
            </p>
            <p>
              Within the virtual walls of the Excellent Corporation website,
              you'll discover a world of breathtaking natural diamonds,
              available in a plethora of captivating shapes and sizes. In
              addition to these treasures from the Earth, we're excited to
              introduce you to the allure of lab-grown diamonds. These gems
              provide an opportunity for everyone to embrace their dream
              solitaire without compromising quality or budget.
            </p>
          </div>
        </Container>
      </section>

      <section className="testimonial_Wrapper in_about pb40 pb20-xl">
        <Container>
          <h2 className="text-center mb60 mb40-xl">
            Thousands of Beautiful Rings Created
          </h2>
          <div className="testimonial_slider_wrapepr">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                1400: {
                  slidesPerView: 4,
                },
                991: {
                  slidesPerView: 3,
                },
                650: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              className="testimonial_slider navigation_center_bottom pb90 pb70-md"
            >
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="how_its_Work_wrapper pt100 pb100 pt80-xl pb70-xl pt50-md pb50-md">
        <div className="step_wrapper choose_ring mb40 mb20-xs">
          <div className="step_img_wrap"></div>
          <div className="step_content">
            <div className="step_content_inner">
              <span>1</span>
              <h3>Choose your ring setting</h3>
              <p>
                For years, the dark truths of traditional diamond mining have
                been shrouded in secrecy, concealed behind the dazzling allure
                of these precious gemstones. At Excellent Corporation, we are
                com
              </p>
            </div>
          </div>
        </div>
        <div className="step_wrapper choose_diamond mb40 mb40 mb20-xs">
          <div className="step_img_wrap"></div>
          <div className="step_content">
            <div className="step_content_inner">
              <span>2</span>
              <h3>Choose your diamond</h3>
              <p>
                For years, the dark truths of traditional diamond mining have
                been shrouded in secrecy, concealed behind the dazzling allure
                of these precious gemstones. At Excellent Corporation,
              </p>
            </div>
          </div>
        </div>
        <div className="step_wrapper complete_ring mb40 mb40 mb20-xs">
          <div className="step_img_wrap"></div>
          <div className="step_content">
            <div className="step_content_inner">
              <span>3</span>
              <h3>Complete your ring</h3>
              <p>
                For years, the dark truths of traditional diamond mining have
                been shrouded in secrecy, concealed behind the dazzling a
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
