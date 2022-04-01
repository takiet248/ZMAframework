import React from "react";
import {
  Page,
  Card,
  Navbar,
  Swiper,
  SwiperSlide,
  Button,
  zmp,
  Box
} from "zmp-framework/react";
import "../styles/swiper.css";

export default () => {
  const goToFirstSlide = () => {
    const swiper = zmp.swiper.get("#swiper");
    if (swiper) {
      swiper.slideTo(0);
    }
  };

  const disableSwiper = () => {
    const swiper = zmp.swiper.get("#swiper");
    if (swiper) {
      swiper.disable();
    }
  };

  const enableSwiper = () => {
    const swiper = zmp.swiper.get("#swiper");
    if (swiper) {
      swiper.enable();
    }
  };
  return (
    <Page>
      <Navbar backLink="Back"></Navbar>
      <Card inset title="Minimal layout">
        <Swiper>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </Card>
      <Card inset title="Vertical layout">
        <Swiper direction="vertical" pagination>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </Card>
      <Card inset title="With all controls">
        <Swiper pagination navigation scrollbar>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </Card>
      <Card inset title="Additional parameters">
        <Box flex flexDirection="row" flexWrap>
          <Box>
            <Button typeName="secondary" onClick={goToFirstSlide}>
              Go to 1st Slide
            </Button>
          </Box>
          <Box>
            <Button typeName="secondary" onClick={disableSwiper}>
              Disable
            </Button>
          </Box>
          <Box>
            <Button typeName="secondary" onClick={enableSwiper}>
              Enable
            </Button>
          </Box>
        </Box>
        <Swiper
          id="swiper"
          navigation
          speed={400}
          slidesPerView={1}
          spaceBetween={50}
          onSlideChange={(sw) => {
            console.log("activeIndex: ", sw.activeIndex);
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </Card>
    </Page>
  );
};
