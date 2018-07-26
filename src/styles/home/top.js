import styled from "styled-components";

export default styled.div`
  position: relative;
  background-color: #222;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2em 8vw;
  min-height: 34em;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  #background,
  #overlay-background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }

  * {
    font-family: cabin !important;
  }

  #logo {
    color: white;
    display: block;
    img {
      position: relative;
      margin: 0;
      padding: 0;
      object-fit: cover;
      height: 3em;
    }
  }
  .nav-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1em 0 0.5em;
    line-height: 3em;
  }
  nav {
    a {
      padding: 1em 1.2em;
      color: white;
      font-style: normal;
      font-weight: 100;
      line-height: normal;
      font-size: 1em;
      color: #f9fafc;
      transition: 150ms;
      &:hover {
        color: golden;
        transform: scale(1.1);
      }
    }

    #get-started {
      border: 1px solid #f1c157;
      border-radius: 4px;

      &:hover {
        background: #f1c157;
        color: black;
      }
    }
  }

  .home,
  .project,
  .nav-container {
    z-index: 1;
    position: relative;
  }

  .project {
    .content {
      #progress {
        padding: 1.5em 0;
      }
      h3,
      h4,
      h5 {
        font-family: ProximaNova, sans-serif !important;
        margin: 0;
      }
      h3 {
        color: white;
      }
      h4,
      h5 {
        color: #f9fafc;
        font-weight: 100;
      }

      #title {
        line-height: normal;
        font-size: 28px;
        color: #ffffff;
        font-weight: 300;
        padding-top: 2em;
      }

      #funder {
        line-height: normal;
        font-size: 18px;
        color: #f9fafc;
        padding-top: 0.5em;
      }

      .inner {
        padding-top: 3em;
        h4 {
          padding-top: 1.5em;
          line-height: normal;
          font-size: 18px;
          letter-spacing: 0.02em;
          color: #f9fafc;
        }

        h3 {
          line-height: normal;
          font-size: 24px;
          letter-spacing: 0.02em;
          color: #ffffff;
        }
      }

      #donate-btn {
        background: #f1c157;
        border-radius: 4px;
        height: 2em;
        padding: 0em 2em;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        border: 0;
        color: #22292f;
        transition: 100ms;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .home {
    .content {
      h3,
      h4,
      p {
        margin: 0;
        text-align: left;
      }

      h4 {
        font-family: ProximaNova, sans-serif !important;
        line-height: normal;
        font-size: 1.35em;
        font-weight: 300;
        color: #ffffff;
        padding: 1.25em 0 1.8em;
      }

      h3 {
        font-family: ProximaNova, sans-serif !important;
        line-height: 45px;
        font-size: 1.8em;
        color: #ffffff;
        padding: 0.25em 0 0.5em;
        font-weight: 300;
      }

      p {
        font-family: ProximaNova, sans-serif !important;

        line-height: 28px;
        font-size: 1.2em;
        color: #f9fafc;
        font-weight: 100;
      }
    }
  }

  @media (min-width: 768px) {
    nav {
      float: right;
    }
    .hide-sm {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .nav-container {
      overflow: hidden;
      transition: 300ms;
      &.no {
        height: 100px;
      }
      &.yes {
        height: 400px;
      }
    }
    nav {
      float: unset;

      a {
        display: block;
      }
    }
  }
`;