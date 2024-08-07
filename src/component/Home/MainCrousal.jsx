import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handyman from "../../assets/handyman.jpg"

const MainCrousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  return (
    <>
    <div style={{backgroundImage:`url(${handyman})`}} className={`w-full h-24  `}><div className="bg-[#000000e6] h-full w-full"></div></div>
    <div className="pt-6 bg-[#000000e6] ">
      <div className=" w-11/12 relative m-auto text-[var(--primary-color)]">
        <Slider {...settings}>
          <div className=" flex justify-center items-center p-8 ">
            <svg
              className="h-40 mx-auto"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1 copy</title>
              <path
                fill={"var(--primary-color)"}
                d="M200,123H186.46l14.93-14.93a2,2,0,0,0-2.83-2.83L180.8,123H170.27l31.12-31.12a2,2,0,0,0-2.83-2.83l-33.94,34H154.08l47.33-47.33a2,2,0,1,0-2.82-2.83L148.43,123H137.9l63.49-63.49a2,2,0,0,0-2.83-2.83L132.24,123H127v-5.29l66.3-66.3a2,2,0,0,0-2.83-2.82L127,112.06V101.53l50.11-50.12a2,2,0,0,0-2.82-2.82L127,95.87V85.34l33.92-33.92a2,2,0,0,0-2.82-2.83L127,79.69V69.16l17.74-17.75a2,2,0,0,0-2.83-2.82L127,63.5V50a2,2,0,0,0-2-2H50a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V125A2,2,0,0,0,200,123ZM52,52h71v71H52Zm0,75h71v71H52Zm146,71H127V127h71ZM90.59,61.06a2,2,0,0,1-2,2H63.06V88.59a2,2,0,0,1-4,0V61.06a2,2,0,0,1,2-2H88.59A2,2,0,0,1,90.59,61.06Zm0,75a2,2,0,0,1-2,2H63.06v25.53a2,2,0,0,1-4,0V136.06a2,2,0,0,1,2-2H88.59A2,2,0,0,1,90.59,136.06Zm43.47,27.53V136.06a2,2,0,0,1,2-2h27.53a2,2,0,0,1,0,4H138.06v25.53a2,2,0,0,1-4,0Z"
              />
            </svg>
            <p className="text-center">TILING</p>
          </div>
          <div className="flex justify-center items-center p-8">
            <svg
              className="h-40 mx-auto"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1 copy 9</title>
              <path
                fill={"var(--primary-color)"}
                d="M61.2,177.35h0a4.5,4.5,0,0,0-.11,9h.11a4.47,4.47,0,0,0,3.14-1.28,4.53,4.53,0,0,0,1.37-3.27A4.46,4.46,0,0,0,61.2,177.35Zm1.72,6.3a2.39,2.39,0,0,1-1.81.7,2.54,2.54,0,0,1-2.43-2.55,2.49,2.49,0,0,1,2.49-2.45h0a2.47,2.47,0,0,1,2.49,2.46A2.58,2.58,0,0,1,62.92,183.65ZM201,88.74a1.73,1.73,0,0,0-.5-.39L198.05,87c-2.16-1.16-4.85-2.61-6.08-3.33h0c-2.36-1.37-14.21-7.79-22.86-12.47-3.95-2.15-7-3.82-7.77-4.23h0l-5-2.7-7.41-4c-4.6-2.49-7.36-4-8.22-4.54-2.41-1.47-4.89-1-7.36,1.5C130.2,60.4,121.23,69.66,114,77.1c-4.73,4.89-8.82,9.11-9.71,10h0c-2.14,2.15-5.17,5.08-8.1,7.91s-5.85,5.64-7.93,7.72c-3.37,3.07-4.19,6.28-2.71,10.72.56,1.67,1.11,3.35,1.66,5,1.21,3.7,2.46,7.53,3.79,11.28,1,2.85.53,4.9-1.67,7.09-9.35,9.27-18.81,18.74-28,27.9l-9.69,9.7c-.43.43-.88.88-1.31,1.38a8.82,8.82,0,0,0,0,12c.81.95,1.69,1.81,2.55,2.65l.91.9c2.48,2.49,4.9,3.71,7.38,3.71h0c2.48,0,4.91-1.22,7.42-3.73l9.2-9.19c9.37-9.37,19.06-19,28.55-28.61a5.77,5.77,0,0,1,6.67-1.59c5.41,1.87,10.93,3.69,16.26,5.46l.67.22a9,9,0,0,0,10.28-2.86h0c2.11-2.11,5-5,7.83-7.9s5.8-5.88,7.94-8h0l20.22-20.23c7.32-7.33,22.54-22.58,24.33-24.35C202.69,92.13,202.12,90,201,88.74Zm-33.69,17.75-.51.51-7.31,7.4-.3.3-1,1c-.77.78-1.53,1.54-2.26,2.29l0,0-1.23,1.25-.41.41c-2,2-3.76,3.8-5.31,5.35l-.16.17-.63.63-.53.53-.43.43L147,127c-3.62-3.63-7.12-7.12-10.61-10.61l-.28-.28-10.27-10.27c3.55-3.53,8.7-8.63,14.11-14l2.75-2.72c6.71-6.65,13.63-13.5,18-17.87l5.59,3L156.5,84.76a1,1,0,0,0,.05,1.41,1,1,0,0,0,.68.27,1,1,0,0,0,.74-.32l10.16-10.86,12,6.52-20.51,20.78a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.3L182,82.78l5.7,3.12C183,90.64,175,98.68,167.29,106.49Zm-50.4-26.6c7.2-7.44,16.16-16.68,19.28-19.8,1.5-1.49,2-1.17,2.45-.91.84.51,3.08,1.75,7,3.87L125.45,83.44a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.3L147.42,64l7,3.79,2.62,1.41c-4.26,4.25-10.55,10.47-16.83,16.69l-2.5,2.48C132,94.09,126.66,99.36,123,103l-6.79-6.78-7.7-7.71C110.28,86.71,113.31,83.58,116.89,79.89Zm14.31,73.93-.66-.22c-5.32-1.76-10.83-3.58-16.21-5.44a9.74,9.74,0,0,0-10.81,2.55C94,160.27,84.34,170,75,179.31l-9.2,9.19c-1.72,1.72-3.22,2.56-4.59,2.56h0c-1.36,0-2.85-.83-4.55-2.54l-.94-.93c-.83-.81-1.61-1.58-2.32-2.4a4.82,4.82,0,0,1,0-6.76c.33-.38.71-.76,1.1-1.15l9.7-9.71c9.15-9.16,18.6-18.63,28-27.89,3.3-3.28,4.16-7,2.62-11.27-1.31-3.7-2.56-7.51-3.76-11.19q-.83-2.52-1.66-5c-.75-2.25-.69-3.71.37-5.17L136,153.32A4.93,4.93,0,0,1,131.2,153.82Zm14-9.78c-2.26,2.28-4.51,4.57-6.39,6.46L92.51,104.15c1.88-1.85,4.2-4.09,6.46-6.27s4.75-4.59,6.73-6.54l7.45,7.45.13.12,8.32,8.32h0l11.24,11.24,13.06,13.07,2.75,2.74,3.12,3.12C149.84,139.35,147.53,141.7,145.22,144Zm28.18-28.28-18.8,18.82L152,132l-.25-.25-1.9-1.9c4.54-4.56,12.59-12.7,20.4-20.6,8-8.07,16.2-16.38,20.82-21l.26-.26c1.4.77,3.27,1.78,4.85,2.63l1.58.85C195.87,93.26,180.7,108.45,173.4,115.76Zm-33.67,23a1,1,0,0,1,0,1.41,1,1,0,0,1-1.42,0L102.76,104a1,1,0,0,1,1.42-1.4Z"
              />
            </svg>
            <p className="text-center">PAINT</p>
          </div>
          <div className="flex justify-center items-center p-8">
            <svg
              className="h-40 mx-auto"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1 copy 2</title>
              <path
                fill={"var(--primary-color)"}
                d="M202.33,191.68,182.94,170.9a2,2,0,0,0-1.47-.63h-.68V166.8h5.44a1,1,0,0,0,1-1v-6.44a1,1,0,0,0-1-1h-5.37v-4.44h5.37a1,1,0,0,0,1-1v-6.44a1,1,0,0,0-1-1h-5.44V141h5.44a1,1,0,0,0,1-1V133.6a1,1,0,0,0-1-1h-5.37v-4.44h5.37a1,1,0,0,0,1-1v-6.44a1,1,0,0,0-1-1h-5.44V114.9a2,2,0,0,0,.32-1.08V49.26a2,2,0,1,0-4,0v62.56H126.87V49.26a2,2,0,1,0-4,0v62.56h-50V49.26a2,2,0,0,0-4,0v64H63.77a1,1,0,0,0-1,1v6.45a1,1,0,0,0,1,1h5.44v4.44H63.84a1,1,0,0,0-1,1v6.44a1,1,0,0,0,1,1h5.37V139H63.77a1,1,0,0,0-1,1v6.44a1,1,0,0,0,1,1h5.44v4.44H63.84a1,1,0,0,0-1,1v6.44a1,1,0,0,0,1,1h5.37v4.44H63.77a1,1,0,0,0-1,1v6.45a1,1,0,0,0,1,1h1.11L47.67,191.68a2,2,0,0,0-.53,1.37v7.69a2,2,0,0,0,2,2H200.86a2,2,0,0,0,2-2v-7.69A2,2,0,0,0,202.33,191.68Zm-23.54-75.86v3.9H155v-3.9Zm-36.65,29.66V141H153v4.44H142.14Zm4.37,2v4.44H129.19v-4.44h17.32Zm0-8.44H135.63V134.6h10.88Zm-6.44,2v4.44H116.3V141h23.77Zm-12.88,6.44v4.44H109.86v-4.44h17.33Zm6.44-8.44H109.86V134.6h23.77Zm-19.33,2v4.44H103.42V141H114.3Zm-6.44-2H97V134.6h10.88Zm0,8.44v4.44H90.54v-4.44h17.32Zm-4.37,6.44h17.33v4.44H103.49Zm6.37,6.44h23.77v4.44H109.86Zm13-2v-4.44h17.32v4.44H122.82Zm12.81,2h10.88v4.44H135.63Zm6.58-2v-4.44h17.32v4.44H142.21Zm6.37-6.44v-4.44H165.9v4.44H148.58Zm0-12.88V134.6h23.77V139H148.58Zm0-12.88v-4.44H165.9v4.44H148.58Zm10.95,2v4.44H142.21v-4.44h17.32Zm-13-2H129.19v-4.44h17.32Zm-6.37,2v4.44H122.82v-4.44h17.32Zm-12.95-2H109.86v-4.44h17.33Zm-6.37,2v4.44H103.49v-4.44h17.33Zm-13-2H90.54v-4.44h17.32Zm-6.37,2v4.44H84.17v-4.44h17.32ZM101.42,141v4.44H77.66V141h23.76Zm.07,12.88v4.44H84.17v-4.44h17.32ZM97,160.36h10.88v4.44H97Zm6.44,9.91V166.8H114.3v3.47Zm12.88,0V166.8h23.77v3.47Zm25.84,0V166.8H153v3.47Zm6.44-5.47v-4.44h23.77v4.44H148.58Zm12.95-6.44v-4.44h17.33v4.44H161.53ZM155,145.48V141h23.77v4.44H155Zm6.51-12.88v-4.44h17.33v4.44H161.53ZM153,115.82v3.9H142.14v-3.9Zm-13,0v3.9H116.3v-3.9Zm-25.77,0v3.9H103.42v-3.9Zm-12.88,0v3.9H77.66v-3.9Zm-12.88,5.9v4.44H71.21v-4.44H88.54ZM95,134.6V139H71.21V134.6H95Zm-6.44,12.88v4.44H71.21v-4.44H88.54ZM95,160.36v4.44H71.21v-4.44H95ZM77.66,166.8h23.76v3.47H77.66ZM155,170.27V166.8h23.77v3.47Zm30.21-9.91v4.44H174.35v-4.44h10.88Zm0-12.88v4.44H167.9v-4.44h17.33Zm0-12.88V139H174.35V134.6h10.88Zm0-12.88v4.44H167.9v-4.44h17.33Zm-120.46-2v-4.45h4.76a2,2,0,0,0,1.36.55h4.77v3.9H64.77Zm.07,12.88v-4.44H82.17v4.44H64.84Zm-.07,12.88V141H75.66v4.44H64.77Zm.07,12.88v-4.44H82.17v4.44H64.84Zm-.07,12.89V166.8H75.66v3.47H68.53a2,2,0,0,0-1.47.63l-.32.35Zm134.09,27.49H51.14v-4.9L69.4,174.27H180.6l18.26,19.57Zm-142-7.69h136.3a2,2,0,1,1,0,4H56.85a2,2,0,1,1,0-4Zm54.3-87.29V84.52a2,2,0,0,1,4,0v19.24a2,2,0,1,1-4,0Zm21.91,0V84.52a2,2,0,1,1,4,0v19.24a2,2,0,0,1-4,0Z"
              />
            </svg>
            <p className="text-center">BACKSPLASH</p>
          </div>
          <div className="flex justify-center items-center p-8">
            <svg
              className="h-40 mx-auto"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1 copy 4</title>
              <path
                fill={"var(--primary-color)"}
                d="M153.57,82.53a1,1,0,0,1,1.09-.89l5.66.56a1,1,0,0,1-.09,2h-.1l-5.67-.56A1,1,0,0,1,153.57,82.53ZM153.3,94l5.67.6h.11a1,1,0,0,0,.1-2l-5.67-.6a1,1,0,1,0-.21,2Zm11.35,1.2,5.68.6h.1a1,1,0,0,0,.11-2l-5.68-.6a1,1,0,0,0-.21,2Zm-32.84-13.8,5.66.56h.1a1,1,0,0,0,.1-2L132,79.38a1,1,0,0,0-.2,2Zm11.33,1.13,5.66.56h.1a1,1,0,0,0,.1-2l-5.66-.56a1,1,0,0,0-1.1.89A1,1,0,0,0,143.14,82.5Zm22.65,2.26,5.66.56h.1a1,1,0,0,0,.1-2L166,82.77a1,1,0,0,0-1.1.89A1,1,0,0,0,165.79,84.76Zm-23.84,8,5.67.6h.11a1,1,0,0,0,.1-2l-5.67-.6a1,1,0,1,0-.21,2Zm35.16-6.88,5.67.56h.1a1,1,0,0,0,.1-2l-5.67-.56a1,1,0,0,0-.2,2ZM188.44,87l5.66.56h.1a1,1,0,0,0,.1-2L188.64,85a1,1,0,0,0-1.1.89A1,1,0,0,0,188.44,87Zm10.27,11.74,5.67.6h.11a1,1,0,0,0,.1-2l-5.67-.6a1,1,0,0,0-.21,2Zm1.06-10.61,5.66.56h.1a1,1,0,0,0,.1-2L200,86.16a1,1,0,0,0-1.09.89A1,1,0,0,0,199.77,88.15Zm-12.42,9.41,5.68.6h.11a1,1,0,0,0,.1-2l-5.68-.59a1,1,0,1,0-.21,2ZM176,96.37l5.68.6h.1a1,1,0,0,0,.11-2l-5.68-.6a1,1,0,0,0-1.1.89A1,1,0,0,0,176,96.37Zm-45.4-4.79,5.67.59h.11a1,1,0,0,0,.1-2l-5.68-.59a1,1,0,0,0-1.09.89A1,1,0,0,0,130.6,91.58Zm80.49-2.3,5.66.56h.1a1,1,0,0,0,.1-2l-5.66-.56a1,1,0,0,0-1.09.89A1,1,0,0,0,211.09,89.28ZM32.55,135.2a1,1,0,0,0,.79,1.18l129.07,26.11.2,0a1,1,0,0,0,.2-2L33.73,134.41A1,1,0,0,0,32.55,135.2Zm87.93-55,5.67.56h.1a1,1,0,0,0,.1-2l-5.67-.56a1,1,0,0,0-1.09.89A1,1,0,0,0,120.48,80.24Zm94.6,47.24a2,2,0,0,1-.71,2.1l-43.87,34,0,7a2,2,0,0,1-.74,1.55,2,2,0,0,1-1.26.45,2,2,0,0,1-.41-.05L25.1,143a2,2,0,0,1-1.6-2v-7.34a2,2,0,0,1,1.33-1.89L87,109.71v-1.23a1,1,0,0,1,2,0v1.11l35.43,4.68v-9.85c0-.52-1.47-1.36-3.21-1.36a3.14,3.14,0,0,0-1.63.38.94.94,0,0,0-.48.87v3.31a1,1,0,0,1-1,1h-5.17a1,1,0,0,1-1-1v-5.36a5.66,5.66,0,0,1,2.92-5,11.83,11.83,0,0,1,6.07-1.49c5.26,0,10.86,2.67,10.86,7.61v11.85l80.37,10.61V125a1,1,0,1,1,2,0v1.29A2,2,0,0,1,215.08,127.48Zm-88.66-23.06v17.13h3.36V103.39c0-3.51-4.51-5.61-8.86-5.61a9.88,9.88,0,0,0-5,1.19,3.72,3.72,0,0,0-2,3.29v4.36h3.17v-2.31a3,3,0,0,1,1.41-2.57,5.1,5.1,0,0,1,2.7-.68C123.72,101.06,126.42,102.35,126.42,104.42Zm81.71,24.94-76.35-10.08v3.27a1,1,0,0,1-1,1h-5.36a1,1,0,0,1-1-1v-4.24L88.2,113.52,27.5,135.08v4.3l139,28.78,0-5.57a2,2,0,0,1,.78-1.57Zm9.15-34.54-4.43,3.42L210.27,98a1,1,0,0,0-1.1.89,1,1,0,0,0,.89,1.1l2.09.22v2.1a1,1,0,0,0,2,0V99.77l4.35-3.37a1,1,0,1,0-1.22-1.58Zm9.2-5.15a1,1,0,0,0,0-.24.93.93,0,0,0-.1-.2.42.42,0,0,0-.07-.13h0a.82.82,0,0,0-.2-.17l-.09-.08a.69.69,0,0,0-.13,0,1,1,0,0,0-.25-.07h0l-3-.29a1,1,0,0,0-1.1.89,1,1,0,0,0,.9,1.1l.49,0-.89.69a1,1,0,0,0,.61,1.79,1,1,0,0,0,.61-.21l2.87-2.22,0,0a1,1,0,0,0,.16-.19.39.39,0,0,0,.08-.1,1.29,1.29,0,0,0,.07-.21.83.83,0,0,0,0-.15h0A.68.68,0,0,0,226.48,89.67Zm-13.33,28.76a1,1,0,0,0,1-1v-7.58a1,1,0,0,0-2,0v7.58A1,1,0,0,0,213.15,118.43ZM88,103a1,1,0,0,0,1-1V95.54a1,1,0,0,0-2,0V102A1,1,0,0,0,88,103Zm67.74,26.8a1,1,0,0,1,.44,1.79l-24.4,17.66a.94.94,0,0,1-.58.19.68.68,0,0,1-.2,0L78.4,139.06a1,1,0,0,1-.28-1.86l27.89-15a.94.94,0,0,1,.52-.11h.06l.12,0Zm-2.7,1.6-45.44-7.11v15a1,1,0,0,1-2,0V124.72L81.53,137.64,131,147.39ZM109.08,80.3a1.18,1.18,0,0,0,.31,0L112,79.4l2.78.27h.1a1,1,0,0,0,.1-2l-3-.29h0a1,1,0,0,0-.24,0,.77.77,0,0,0-.15,0h0l-2.86.92a1,1,0,0,0,.31,2Zm-1.19,8.88,5.68.6h.1a1,1,0,0,0,.11-2l-5.68-.6a1,1,0,0,0-1.1.89A1,1,0,0,0,107.89,89.18ZM88,90.07a1,1,0,0,0,1-1V87.18l1.87.2a1,1,0,0,0,1.1-.89,1,1,0,0,0-.29-.8,1,1,0,0,0,.12-.84,1,1,0,0,0-1.25-.65l-2.86.92h0l0,0a1.06,1.06,0,0,0-.33.18h0a.24.24,0,0,0-.06.08.76.76,0,0,0-.17.23.83.83,0,0,0,0,.15A.94.94,0,0,0,87,86v3A1,1,0,0,0,88,90.07Zm31.25.31,5.68.6H125a1,1,0,0,0,.1-2l-5.68-.6a1,1,0,0,0-.21,2ZM96.54,88l5.68.6h.1a1,1,0,0,0,.1-2L96.75,86a1,1,0,0,0-1.1.89A1,1,0,0,0,96.54,88Zm.38-3.78a.84.84,0,0,0,.31,0l6.08-2a1,1,0,1,0-.62-1.9l-6.07,2a1,1,0,0,0,.3,2Z"
              />
            </svg>
            <p className="text-center">BAR REMOVAL</p>
          </div>
          <div className="flex justify-center items-center p-8">
            <svg
              className="h-40 mx-auto"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1</title>
              <path
                fill={"var(--primary-color)"}
                d="M125,77.88c3.32,0,11-.29,11-2.95S128.36,72,125,72s-11,.28-11,2.94S121.73,77.88,125,77.88ZM125,74a29.3,29.3,0,0,1,8.46.94,28.81,28.81,0,0,1-8.46.95,28.92,28.92,0,0,1-8.46-.95A29.41,29.41,0,0,1,125,74Zm75.5-5.08a1,1,0,0,0-1-.06l-12.75,6-18.11,8.5-6.46,3H87.74l-6.46-3-18.11-8.5-12.75-6a1,1,0,0,0-1.42.91V169.82a1,1,0,0,0,.46.84,1,1,0,0,0,.54.16.9.9,0,0,0,.42-.1L73.19,160l2.38-1.12a22.29,22.29,0,0,0,14.91,13.8,12.73,12.73,0,0,1-2.29,3.49c-1,1.18-1.92,2.29-1.26,3.7a2.38,2.38,0,0,0,2.35,1.33h5.35c2.61,0,5.13-3.7,6.17-7h48.4c1,3.28,3.56,7,6.17,7h5.35a2.38,2.38,0,0,0,2.35-1.33c.66-1.41-.27-2.52-1.26-3.7a12.73,12.73,0,0,1-2.29-3.49,22.29,22.29,0,0,0,14.91-13.8l2.38,1.12,22.77,10.68a.9.9,0,0,0,.42.1,1,1,0,0,0,.54-.16,1,1,0,0,0,.46-.84V69.76A1,1,0,0,0,200.54,68.91Zm-30.4,16,16.12-7.56V86l-8.44,3-.92.32-6.76,2.38Zm7,24.09-7,.81v-7l5.44-1.27,1.88-.44,8.8-2.07v8.86Zm.11,11.83h9v8.89l-6.71-.79-9.41-1.1v-7ZM163.48,88l4.66-2.18v6.6l-1.21.43-3.45,1.21Zm0,8.18,4.43-1.56,1.57-.55,4.75-1.67,2-.7v7.63L164.93,102l-1.45.34Zm0,8.2,4.65-1.1h0V110l-2.11.25-2.55.3Zm0,8.2,5.84-.69,6.91-.81v7.72H163.48Zm0,8.22h4.66v6.76l-4.66-.55Zm12.75,9.72v2a27.69,27.69,0,0,0-3-.15h-9.78V129Zm5.66,11.07,4.37,1v8.8l-8.62-3A21.25,21.25,0,0,1,181.89,141.58Zm-17-1.1H85.16c-10.63,0-14.6-2-15.49-2.81.62-.46,2.63-1.35,7.07-1.35h96.52c4.44,0,6.45.89,7.07,1.35C179.44,138.52,175.47,140.48,164.84,140.48Zm-96.74,1.1a21.17,21.17,0,0,1,4.26,6.8l-8.62,3v-8.8l1.24-.29ZM86.52,127l-4.66.55v-6.76h4.66Zm0-16.44-2.36-.28-2.3-.27v-6.74l.61.15,4,1Zm0,2v6.22H73.77v-7.72l6.63.78Zm-6.66-2.8-7-.81-9.14-1.08V99l8.8,2.07,3.24.76,4.08,1Zm0,11v7l-8.52,1-7.6.89v-8.89H79.86ZM86.52,129v3.3H76.74a27.69,27.69,0,0,0-3,.15v-2Zm58.2,3.3v-3.43h16.76v3.43ZM125,126.89h-8.3v-6.1h16.68v6.1H125Zm1.08,2h16.68v3.43H126Zm9.3-2v-6.1H152.1v6.1H135.34Zm18.76,0v-6.1h7.38v6.1Zm7.38-16.21H154.1v-6.11h7.38Zm0,2v6.11H144.72v-6.11h16.76Zm-9.38-2H135.34v-6.11H152.1Zm-9.38,2v6.11H126v-6.11h16.68Zm-9.38-2H116.66v-6.11h16.68Zm-9.38,2v6.11H107.28v-6.11H124Zm-9.3-2H97.9v-6.11h16.76Zm0,10.11v6.1H97.9v-6.1h16.76Zm-7.38,8.1H124v3.43H107.28ZM154.1,88.36h7.38v6.11H154.1Zm7.38,8.11v6.1H144.72v-6.1h16.76Zm-26.14-8.11H152.1v6.11H135.34Zm7.38,8.11v6.1H126v-6.1h16.68Zm-26.06-8.11h16.68v6.11H116.66Zm-1,8.11H124v6.1H107.28v-6.1h8.38ZM97.9,88.36h16.68v6.11H97.9Zm-9.38,0H95.9v6.11H88.52Zm0,8.11h16.76v6.1H88.52Zm0,8.1H95.9v6.11H88.52Zm0,8.11h16.76v6.11H88.52Zm0,8.11H95.9v6.1H88.52Zm8.38,8.1h8.38v3.43H88.52v-3.43Zm-15-43.08L86.52,88v6.06l-3.65-1.28-1-.36Zm-.28,8.63,4.94,1.73v6.14l-1.9-.44L75.83,99.8l-2.06-.48V91.69l4.57,1.6,2.18.77ZM63.74,77.31l16.12,7.56v6.84L63.74,86ZM51,71.33l10.74,5v9L51,81.55Zm0,12.35,20.6,7.24.17.06v7.87L63,96.79l-5.68-1.34L51,94ZM51,96l10.74,2.52v9.1L52,106.51l-1-.12Zm0,12.37,11.63,1.37,9.14,1.07v8H51Zm0,12.39H61.74v9.12L51,131.17Zm0,12.39,2.71-.31,9.15-1.08h0l8.91-1v2c-4,.76-6.25,2.49-6.25,4.88a3.67,3.67,0,0,0,.83,2.31l-3.83.9L51,143.54Zm0,12.42,5.55-1.31,5.19-1.21v9l-10.28,3.62-.46.16Zm20.77,12.9L51,168.24V158l12.08-4.25,8.69-3.06Zm2-.94v-4.49c.3,1.3.66,2.63,1.11,4Zm83,11.77a2,2,0,0,0-1.5,1.71,1.88,1.88,0,0,0,0,.53,10.35,10.35,0,0,0,2.26,5.67h-1.94a9.58,9.58,0,0,1-2.83-5.33,2,2,0,0,0-2.1-1.72c-1,.06-1.81.08-2.64.08H102c-.83,0-1.67,0-2.64-.08a2,2,0,0,0-2.1,1.72,9.58,9.58,0,0,1-2.83,5.33H92.48a10.47,10.47,0,0,0,2.26-5.55,2.26,2.26,0,0,0,0-.64,2,2,0,0,0-1.52-1.72c-10.94-2.63-14.09-10.44-15.72-17.74a29.2,29.2,0,0,0-3-8,59.56,59.56,0,0,0,10.65.85h79.68a59.56,59.56,0,0,0,10.65-.85,29.2,29.2,0,0,0-3,8C170.84,158.89,167.69,166.7,156.75,169.33ZM175.12,157c.45-1.34.81-2.67,1.11-4v4.49ZM199,168.24l-20.77-9.74v-7.79l8.69,3.06L199,158Zm0-12.34-.55-.19-10.19-3.59v-9l6.13,1.43L199,145.6Zm0-12.36-11.51-2.7-3.84-.9a3.67,3.67,0,0,0,.83-2.31c0-2.39-2.3-4.12-6.25-4.88v-2l8.91,1h0l8.68,1,3.18.37Zm0-12.37-10.74-1.26v-9.12H199Zm0-12.38H178.23v-8l9.14-1.07L199,108.4Zm0-12.4-1,.11-9.77,1.15v-9.1l4.8-1.12L199,96ZM199,94l-7.91,1.85-4.06,1-8.8,2.06V91l2.91-1L199,83.68Zm0-12.43-10.74,3.78v-9l10.74-5Zm-74-2.76a1,1,0,0,1,1,1v4.44a1,1,0,0,1-2,0V79.79A1,1,0,0,1,125,78.79Zm6.46.38.55,4.41a1,1,0,0,1-.87,1.12h-.12a1,1,0,0,1-1-.88l-.56-4.41a1,1,0,0,1,2-.25ZM136,78l1.28,4.26a1,1,0,0,1-.67,1.24.93.93,0,0,1-.29,0,1,1,0,0,1-.95-.72l-1.29-4.25a1,1,0,0,1,.67-1.25A1,1,0,0,1,136,78Zm-16.29.26a1,1,0,0,1,.87,1.12L120,83.83a1,1,0,0,1-1,.88h-.12a1,1,0,0,1-.87-1.12l.55-4.41A1,1,0,0,1,119.71,78.3Zm-6.9,4L114.09,78a1,1,0,1,1,1.91.58l-1.28,4.25a1,1,0,0,1-1,.72,1,1,0,0,1-.29,0A1,1,0,0,1,112.81,82.3Z"
              />
            </svg>
            <p className="text-center">BATHROOM RENO</p>
          </div>

          <div className="flex justify-center items-center p-8">
            <svg
                          className="h-40 mx-auto"

              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1 copy 3</title>
              <path 
                              fill={"var(--primary-color)"}
                               d="M178.93,124.81a2,2,0,0,0-2-2H161.62V50a2,2,0,0,0-2-2H90.38a2,2,0,0,0-2,2v72.81H73.07a2,2,0,0,0-2,2v15s0,.08,0,.13,0,.08,0,.13v60a2,2,0,0,0,2,2H176.93a2,2,0,0,0,2-2V140c0-.05,0-.09,0-.13s0-.09,0-.13ZM88.38,198H75.07V187H88.38Zm0-15H75.07v-11H88.38Zm0-15H75.07v-11H88.38Zm0-15.09H75.07V142H88.38Zm0-15.22H75.07v-11H88.38ZM109.69,52h30.62V63H109.69Zm0,40.88v-11h30.62v11H109.69Zm30.62,19v11H109.69v-11h30.62ZM92.38,52h13.31V63H92.38Zm0,15H123v11H92.38Zm0,15h13.31v11H92.38Zm0,15H123v11H92.38Zm0,15h13.31v11H92.38Zm0,15H123v11H92.38ZM123,198H92.38V187H123Zm-4.23-21.06a7.06,7.06,0,0,0,2.54,5.9H121s-10.26-3.42-10.26-13.88A15.48,15.48,0,0,1,113,161s.66,5,3.42,5c.62,0,1.09-1,1.09-3,0-2.85-1.51-3.43-1.51-6.78,0-8,12-14,12-14a17.84,17.84,0,0,0-.63,4.77c0,9.52,12,10.15,12,22.73,0,10.3-7.41,12.75-8.61,13.08a7.51,7.51,0,0,0,3.35-6.26,8.26,8.26,0,0,0-1.21-4.24S132.47,175,131,175c-.33,0-.58-.54-.58-1.61,0-1.52.81-1.83.81-3.62,0-4.25-6.38-7.48-6.38-7.48a9.59,9.59,0,0,1,.33,2.54C125.17,169.89,118.77,170.23,118.77,176.94ZM157.62,198H127V187h30.62Zm0-60.23H127v-11h30.62Zm0-15H144.31v-11h13.31Zm0-15H127v-11h30.62Zm0-15H144.31v-11h13.31Zm0-15H127V67h30.62Zm0-15H144.31V52h13.31Zm17.31,135H161.62V187h13.31Zm0-15H161.62v-11h13.31Zm0-15H161.62v-11h13.31Zm0-15.09H161.62V142h13.31Zm0-15.22H161.62v-11h13.31Z" />
            </svg>
            <p className="text-center">FIRESPACE</p>
          </div>
          <div className="flex justify-center items-center p-8">
            <svg
              className="h-40 mx-auto"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1 copy 5</title>
              <path
                fill={"var(--primary-color)"}
                d="M226,136.86V108.37a1,1,0,0,0-2,0v15.11L126.54,94.34V82.58a1,1,0,0,0-2,0v11.8L26,129.32V110.15a1,1,0,0,0-2,0v33a2,2,0,0,0-1,1.57,2,2,0,0,0,1,1.89l13.12,7.27a2,2,0,0,0,1,.25,2.07,2.07,0,0,0,.77-.15l37.57-15.56,9.79,4.47-14.39,6.34a2,2,0,0,0-.09,3.62l15.68,7.85a2,2,0,0,0,.89.21,2.1,2.1,0,0,0,.85-.19l35.61-16.79,12.35,5.16-14,7.08a2,2,0,0,0,.07,3.6l18.64,8.51a2,2,0,0,0,.83.18,1.94,1.94,0,0,0,1-.25L176.79,150,196,157.39a2,2,0,0,0,1.75-.15l28.28-17a2,2,0,0,0,0-3.43Zm-34.65.58-13.17-4.71,9.06-4.59,13.11,4.36Zm14.61-7.3-18.25-6.06-17-5.64-15.84-5.27-14.82-4.92-13.52-4.49V100L224,129.8v6.34ZM26,142.28v-6.61l98.54-35.62v3.73L79.66,121.32Zm138.72-21.62-23.83,11.23-10-3.84-.61-.24,10.4-4.59h0l.25-.11h0l13.4-5.9Zm-24.65-1.53-9.19-3.28,8.63-3.57,9.18,3Zm-45.95,7.61-8.4-3.5,39.88-15.58,8.11,2.69ZM224,125.57v2.13L126.54,97.88V96.43ZM124.54,96.5v1.42L26,133.54v-2.1ZM38.25,149.88l-8.56-4.75,50.67-19.79,8.54,3.56Zm52.9-9.19-9.64-4.4,43.61-18,9.38,3.35-10.25,4.51L97.49,137.89Zm-2.78,15.95-11-5.5,47.75-21,10.77,4.15Zm53.47-10-12.16-5.08,40.54-19.1,11.68,3.87-7.57,3.84L172,131.39h0l-13.42,6.8Zm.8,17.51-13.94-6.36,38.61-19.58,5.7-2.89,13.41,4.79L175.68,146h0Zm53.89-10.87-15.15-5.83,24.15-13.26,14.71,4.88Z"
              />
            </svg>
            <p className="text-center">WOOD & LAMINATE FLOORING</p>
          </div>
          <div className="flex justify-center items-center p-8">
            <svg
              className="h-40 mx-auto"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
            >
              <title>Artboard 1 copy 7</title>
              <path
                fill={"var(--primary-color)"}
                d="M81.36,135.35a2,2,0,0,1-1.63.85,2,2,0,0,1-1.15-.37l-22.19-15.7a2,2,0,1,1,2.31-3.26l22.19,15.69A2,2,0,0,1,81.36,135.35Zm89.18-.61a2,2,0,0,0,1.15-.36l20.92-14.8a2,2,0,0,0-2.31-3.27l-20.92,14.8a2,2,0,0,0,1.16,3.63Zm31.46-23V124a2,2,0,0,1-.83,1.62L168.92,149a2,2,0,0,1-2.22.09l-1.68-1v2.47a2,2,0,0,1-.83,1.61l-38,27.59a2,2,0,0,1-2.35,0l-38-27.56a2,2,0,0,1-.83-1.62V148.1l-1.68,1a2,2,0,0,1-2.22-.09L48.83,125.63A2,2,0,0,1,48,124V111.79A2,2,0,0,1,49.06,110L86.68,89.92a2,2,0,0,1,2,.06l1.64,1V89.34a2,2,0,0,1,1.06-1.76L124,70.09a2,2,0,0,1,1.89,0l32.69,17.47a2,2,0,0,1,1.06,1.77V91l1.64-1a2,2,0,0,1,2-.06L200.94,110A2,2,0,0,1,202,111.79ZM94.32,93.45l27,16.66a2,2,0,0,1,1,1.7v2.45l1.64-1a2,2,0,0,1,2.1,0l1.68,1v-2.47a2,2,0,0,1,1-1.7l27-16.66V90.52L125,74.12,94.32,90.54ZM85,143.4v-5a2,2,0,0,1,1-1.7l32.36-19.95v-3.79L87.56,94,52,113v10l30.35,22Zm76-3.94L125,117.3,89,139.49v10.08l36,26.11,36-26.13ZM198,113,162.44,94l-30.73,18.94v3.81l32.36,19.9a2,2,0,0,1,1,1.7v5.06l2.63,1.62L198,123Zm-97.94,32.87a2,2,0,1,0-2.31,3.27l26.11,18.43.09.05a2.53,2.53,0,0,0,.37.18l.16.06a2.25,2.25,0,0,0,.52.07h0a2.25,2.25,0,0,0,.52-.07l.16-.06a1.85,1.85,0,0,0,.37-.19l.09,0,26.09-18.45a2,2,0,0,0-2.31-3.27L125,163.48Z"
              />
            </svg>
            <p className="text-center">PAVERS</p>
          </div>
        </Slider>
      </div>
    </div>
    </>
  );
};

export default MainCrousal;
