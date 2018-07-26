import styled from "styled-components";

export default styled.div`
  .hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 4px;
    background-color: #156edc;

    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  /*
   * Slider
   */
  .hamburger--slider .hamburger-inner {
    top: 2px;
  }
  .hamburger--slider .hamburger-inner::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  .hamburger--slider .hamburger-inner::after {
    top: 20px;
  }

  .hamburger--slider.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--slider.is-active .hamburger-inner::before {
    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
    opacity: 0;
  }
  .hamburger--slider.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-90deg);
  }

  /*
   * Slider Reverse
   */
  .hamburger--slider-r .hamburger-inner {
    top: 2px;
  }
  .hamburger--slider-r .hamburger-inner::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  .hamburger--slider-r .hamburger-inner::after {
    top: 20px;
  }

  .hamburger--slider-r.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
  .hamburger--slider-r.is-active .hamburger-inner::before {
    transform: rotate(45deg) translate3d(5.71429px, -6px, 0);
    opacity: 0;
  }
  .hamburger--slider-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(90deg);
  }
`;