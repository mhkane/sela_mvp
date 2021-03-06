import styled from "styled-components";

export default styled.div`
  #options {
    margin: 2.75em 0 1.5em;
  }

  #de-activate {
    line-height: normal;
    font-size: 12px;
    text-align: center;
    color: #eb5757;
    border: 0;
    background: transparent;
    padding: 0;
  }

  .select {
    padding: 0.25em 0;
    font-family: Acumin Pro, sans-serif !important;
    line-height: 20px;
    font-size: 1em;
    text-align: center;
    color: #adb5bd;
    border: 0;
    border-bottom: 1px solid #f1f2f4;
    background: transparent;
    padding-right: 1.5em;
    font-weight: 300;
    text-align: left;
    &:active,
    &:focus,
    &:hover {
      color: #156edc;
      border-color: #156edc;
    }
  }

  padding: 5%;
  margin: 2em 0;
  h3 {
    font-family: Acumin Pro, sans-serif !important;
    line-height: normal;
    font-size: 1.8em;
    font-weight: 300;
    color: #000000;
    margin: 0.5em 0;
  }

  h5 {
    font-family: Acumin Pro, sans-serif !important;
    line-height: 20px;
    font-size: 0.9em;
    font-weight: 100;
    color: #333333;
    margin: 0.5em 0;
  }

  form {
    .form-group {
      margin: 1.25em 0;

      #save {
        background: #156edc;
        border-radius: 5px;
        color: white;
        font-size: 0.85em;
        letter-spacing: 0.05em;
        font-weight: 100;
        border: 0;
        padding: 0.95em 2.5em;

        span {
          color: white;
        }
      }

      label {
        display: block;
        font-weight: 300;
        line-height: 16px;
        font-size: 0.95em;
        color: #333333;
        margin: 0.2em 0;
      }

      .form-control {
        background: #ffffff;
        border: 1px solid #e1e4e8;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 1em;
        width: 100%;
        sfont-size: 1em;
      }
    }
  }

  .profile-photo {
    height: 200px;
    width: 200px;
    background: #e0e0e0;
    border-radius: 200px;
    cursor: pointer;
    display: block;
    margin: auto;
    position: relative;

    @media (max-width: 767px) {
      margin: 1.5em auto 0;
    }
    span {
      display: block;
      color: #bbbaba;
      font-size: 2.3em;
      font-weight: 600;
    }
    input {
      height: 0;
      width: 0;
      overflow: hidden;
      border: 0;
      padding: 0;
    }
  }

  form {
    #profilePhoto {
      height: 100%;
      display: block;
      border-radius: 100%;
      width: 100%;
      background: transparent;
      position: absolute;
      top: 0;
      object-fit: cover;
      object-position: center;
    }
  }
`;
