import styled from "styled-components";

export default styled.div`

.ReactPasswordStrength-strength-desc{
  font-size: 14px;
  padding-top: 22px;
  font-style: normal;
  font-weight: 300;
  display: inline-block;
  right: 20px;
  top: 0;
}

&#change-password {
  .ReactPasswordStrength-strength-desc{
    padding: 0;
    padding-top: 14px;
    min-width: 60px;
  }

  .ReactPasswordStrength-input{
    height: 40px;
    background: white;
  }

  #submit-btn{
    padding: 1em 0;
  }
}

input.match{
  border:1px solid teal !important;
}
input.dont-match{
  border: 2px solid pink !important;
}


.test-cred{
  text-align:center;
 p{
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  padding: 8px 15px;
  border-radius: 10em;
  margin: 5px;
  width: auto;
  display:inline-block;

  &:nth-child(1){
    background: #F7AF7B;
  }

  &:nth-child(2){
    background: #7B96F7;
  }
  
 } 
}
  height: 100%;
  width: 100%;
  display: table;
  background: white;

  .special-error {
    font-size: 0.85em;
    color: coral;
    margin: 0.5em 0 0;
    text-align: left;
  }

  p {
    font-weight: 300;
  }
  input.form-control {
    background: #f4f4f4;
    border-radius: 4px;
    line-height: normal;
    font-size: 1em;
    color: #666;
    border: 0;
    padding: 1em;
    width: 100%;
    font-weight: 400;
    transition: 300ms;
    font-weight: 300;
    &:active,
    &:focus {
      box-shadow: 0 0 1px 0 #2d9cdb;
    }

    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-size: 1em;
      color: rgba(35, 33, 42, 0.4878);
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-size: 1em;
      color: rgba(35, 33, 42, 0.4878);
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-size: 1em;
      color: rgba(35, 33, 42, 0.4878);
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-size: 1em;
      color: rgba(35, 33, 42, 0.4878);
    }
  }

  .form-group {
    margin: 0.8em 0;
  }

  .link {
    color: #2d9cdb;
  }

  .link,
  label {
    line-height: normal;
    font-size: 0.9em;
    font-weight: 100;
  }

  .container {
    height: 100%;
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 3em 0;

    #logo {
      height: 5em;
      width: 5em;
      margin-bottom: 2em;
    }

    h2 {
      line-height: normal;
      font-size: 1.5em;
      text-align: center;
      color: #0a1f46;
      font-weight: 400;
    }

    #submit-btn {
      background: #f0954e;
      border-radius: 2px;
      padding: 0.85em 0;
      max-width: 10em;
      width: 100%;
      font-size: 1em;
      color: white;
      border: 0;
    }

    .extremes {
      padding: 0.95em 0;

      div:nth-child(1) {
        text-align: left;
        input[type="checkbox"] {
          background: #f2f2f2;
        }
        label {
          letter-spacing: 0.18px;
          color: #828282;
        }
      }
      div:nth-child(2) {
        text-align: right;
      }
    }
  }
`;
