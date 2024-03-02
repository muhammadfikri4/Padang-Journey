import React, { useState, useEffect } from "react";
import "./SliderDestination.css";

export default function SliderDestination() {
  const [viewCard, setViewCard] = useState(5);
  const [widthCard, setWidthCard] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [dataCurrentSlide, setDataCurrentSlide] = useState(0);
  const [indexSlide, setIndexSlide] = useState(0);
  const [lengthListSlider, setLengthListSlider] = useState(0);
  const [visibleButtonTriggerSlider, setVisibleButtonTriggerSlider] = useState(true);
  const [visibleButtonCloseSlider, setVisibleButtonCloseSlider] = useState(false);

  useEffect(() => {
    const closeSlider = document.querySelector(".destination .close-slider");
    console.log(closeSlider);
  }, []);

  useEffect(() => {
    const sliderTrack = document.querySelector(".slider-track");
    const gapSliderTrack = parseFloat(getComputedStyle(sliderTrack).gap);

    const sliderContainer = document.querySelector(
      ".destination .slider-container"
    );
    const sliderList = document.querySelector(".slider-list");
    const cardSliders = document.querySelectorAll(".card-slider");

    setLengthListSlider(
      document.querySelectorAll(".slider-track > div").length
    );

    function cardResponsive() {
      let paddingCard = 0;
      let newViewCard = viewCard;
      const widthScreen = window.innerWidth;
      const styleSliderList = getComputedStyle(sliderList);
      const paddingLeftSliderList = parseFloat(styleSliderList.paddingLeft);
      const paddingRightSliderList = parseFloat(styleSliderList.paddingRight);

      if (widthScreen >= 1280) {
        newViewCard = 5;
        setViewCard(5);
      } else if (widthScreen >= 1024) {
        newViewCard = 4;
        setViewCard(4);
      } else if (widthScreen >= 768) {
        newViewCard = 3;
        setViewCard(3);
      } else if (widthScreen >= 640) {
        newViewCard = 2;
        setViewCard(2);
      } else {
        newViewCard = 1;
        setViewCard(1);
        paddingCard =
          (widthScreen - 270 - paddingRightSliderList - paddingLeftSliderList) /
          2;
      }
      const widthSliderList =
        widthScreen - (paddingLeftSliderList + paddingRightSliderList);

      cardSliders.forEach((cardSlider) => {
        cardSlider.style.width = `${
          widthSliderList / newViewCard -
          (gapSliderTrack - gapSliderTrack / newViewCard)
        }px`;
        if (paddingCard >= 0) {
          cardSlider.style.paddingInline = `${paddingCard}px`;
        } else {
          cardSlider.style.paddingInline = `0px`;
        }
      });
      // height
      sliderContainer.style.height = `${widthCard + 80}px`;

      const newWidthCard = cardSliders[0].clientWidth;
      const newScrollAmount = newWidthCard * newViewCard + gapSliderTrack * newViewCard;
      let newDataCurrentSlide = newViewCard * indexSlide;
      let newIndexSlide = indexSlide;

      setWidthCard(newWidthCard);
      setScrollAmount(newScrollAmount);
      setDataCurrentSlide(newDataCurrentSlide);
      if (newDataCurrentSlide >= lengthListSlider) {
        newIndexSlide = Math.ceil(lengthListSlider / newViewCard - 1);
        setIndexSlide(newIndexSlide);
        newDataCurrentSlide = newViewCard * newIndexSlide;
        setDataCurrentSlide(newDataCurrentSlide);
      }
      const prevButton = document.querySelector(".slick-prev");
      const nextButton = document.querySelector(".slick-next");
      if (newDataCurrentSlide == 0) {
        prevButton.classList.add("slick-disabled");
        setVisibleButtonCloseSlider(true);
      }
      nextButton.setAttribute("data-current-slide", newDataCurrentSlide);
      prevButton.setAttribute("data-current-slide", newDataCurrentSlide);
      sliderList.style.transform = `translateX(-${
        newIndexSlide * newScrollAmount
      }px)`;
    }

    cardResponsive();
    window.addEventListener("resize", cardResponsive);

    return () => {
      window.removeEventListener("resize", cardResponsive);
    };
  }, [
    viewCard,
    widthCard,
    scrollAmount,
    dataCurrentSlide,
    indexSlide,
    lengthListSlider,
  ]);

  const triggerSlider = () => {
    setVisibleButtonTriggerSlider(false);
    setVisibleButtonCloseSlider(true);
    const heroSlider = document.querySelector(".hero-slider");
    heroSlider.classList.add("slider-ready");
  };

  const closeSlider = () => {
    setVisibleButtonCloseSlider(false);
    setVisibleButtonTriggerSlider(true);
    const heroSlider = document.querySelector(".hero-slider");
    heroSlider.classList.remove("slider-ready");
  };

  const prevButton = () => {
    const newDataCurrentSlide = dataCurrentSlide - viewCard;
    setDataCurrentSlide(newDataCurrentSlide);
    if (newDataCurrentSlide < 0) {
      setDataCurrentSlide(0);
      return;
    }
    if (newDataCurrentSlide === 0) {
      const prevButton = document.querySelector(".slick-prev");
      prevButton.classList.add("slick-disabled");
      setVisibleButtonCloseSlider(true);
    }
    setIndexSlide(indexSlide - 1);
    const sliderList = document.querySelector(".slider-list");
    sliderList.style.transform = `translateX(-${indexSlide * scrollAmount}px)`;
    const nextButton = document.querySelector(".slick-next");
    nextButton.setAttribute("data-current-slide", newDataCurrentSlide);
    const prevButton = document.querySelector(".slick-prev");
    prevButton.setAttribute("data-current-slide", newDataCurrentSlide);
  };

  const nextButton = () => {
    const newDataCurrentSlide = dataCurrentSlide + viewCard;
    if (lengthListSlider <= newDataCurrentSlide) {
      return;
    }
    setDataCurrentSlide(newDataCurrentSlide);
    if (newDataCurrentSlide === viewCard) {
      const prevButton = document.querySelector(".slick-prev");
      prevButton.classList.remove("slick-disabled");
      setVisibleButtonCloseSlider(false);
    }
    console.log(newDataCurrentSlide);
    setIndexSlide(indexSlide + 1);
    const sliderList = document.querySelector(".slider-list");
    sliderList.style.transform = `translateX(-${indexSlide * scrollAmount}px)`;
    const nextButton = document.querySelector(".slick-next");
    nextButton.setAttribute("data-current-slide", newDataCurrentSlide);
    const prevButton = document.querySelector(".slick-prev");
    prevButton.setAttribute("data-current-slide", newDataCurrentSlide);
  };

  return (
    <div className="destination bg-black flex py-10 justify-center overflow-hidden items-center">
      <div className="relative h-full w-full bg-fixed bg-cover bg-bottom transition-all ease-in-out duration-500 ms-8 sm:ms-16 hero-slider">
        <div className="w-[45%] ps-6 lg:ps-16 delay-100 duration-700 z-30 absolute h-full caption-slider flex flex-col justify-center">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold">
              All Destination
            </h1>
            <button className="text-[10px] md:text-sm lg:text-base text-white border border-white py-2 px-4 rounded mt-4 hover:bg-white hover:text-black">
              See All
            </button>
          </div>
        </div>
        <div className="opacity-0 transform translate-x-30 transition-all ease-in-out duration-500 delay-100 absolute top-3 z-20 header-slider">
          <h1 className="text-xl text-white font-bold px-12">
            All Destination
          </h1>
        </div>
        <div className="my-14 max-h-[400px] slider-container select-none z-20 relative">
          {visibleButtonCloseSlider && (
            <button className="btn-slider left-0 close-slider" onClick={closeSlider}>
            <i className="bi bi-chevron-left"></i>
          </button>
          )}
          <div className="absolute w-screen slider duration-700 delay-200 left-[40%] h-full">
            <button
              data-current-slide="0"
              className="btn-slider left-0 slick-prev slick-disabled"
              onClick={prevButton}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="slider-list px-[63px] duration-700 absolute h-full w-full">
              <div className="flex items-stretch gap-3 w-max h-full slider-track">
                <div className="card-slider">
                  <div className="bg-white h-full rounded-[50px] cursor-pointer overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
                      alt=""
                    />
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="sm:text-xl text-white font-bold">
                        New York New York New York1
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-slider">
                  <div className="bg-white h-full rounded-[50px] cursor-pointer overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
                      alt=""
                    />
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="sm:text-xl text-white font-bold">
                        New York New York New York1
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-slider">
                  <div className="bg-white h-full rounded-[50px] cursor-pointer overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
                      alt=""
                    />
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="sm:text-xl text-white font-bold">
                        New York New York New York1
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-slider">
                  <div className="bg-white h-full rounded-[50px] cursor-pointer overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.goturkiye.com/goturkiye/bg-1.jpg"
                      alt=""
                    />
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="sm:text-xl text-white font-bold">
                        New York New York New York1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-current-slide="0"
              className="btn-slider right-0 slick-next"
              onClick={nextButton}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          {visibleButtonTriggerSlider && (
            <button
              className="btn-slider right-0 trigger-slider"
              onClick={triggerSlider}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
