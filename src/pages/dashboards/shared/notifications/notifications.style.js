import styled from 'styled-components';

export default styled.div`

#refresh{
    height: 30px;
    background: #1f1e42;
    border-radius: 5px;
    border: 0;
    font-weight: 300;
    letter-spacing: 0.6px;
    margin-top: 20px;
    color: white;
}

.accept{
    height: 30px;
    margin: 1em 0.5em;
    width: 100px;
    font-size: 0.95em;
    font-weight: 300;
    background: #1f1e42;
    border: 0px solid #bbb;
    border-radius: 4px;
    color: white;
}
.reject{
    height: 30px;
    margin: 1em 0.5em;
    width: 100px;
    font-size: 0.95em;
    font-weight: 300;
    background: #f44336;
    border: 0px solid #bbb;
    border-radius: 4px;
    color: white;
}

.notif{
    max-height: 500px;
    overflow: auto;
}

.white{
    background: white;
    margin-top: 2.75%;
    background: #FFFFFF;
    border: 1px solid #EAEDF3;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    h3{
        padding: 1.25em;
        margin:0;
        border-bottom: 1px solid #F5F5F8;
        font-family: Acumin Pro;
        font-weight: 400;
        line-height: 22px;
        font-size: 17px;
        color: #222829;

    }

    .row{
        padding: 1em;
        &+.row{
            border: 1px solid #F5F5F8;
        }
        img{
            height: 50px;
            width: 50px;
            border-radius: 50px;
            object-fit: cover;
            background: silver;
        }

        strong{
            text-transform: capitalize;
            &:hover{
                color: slateblue;
            }
        }
        
        p,a{
            font-family: Acumin Pro;
            line-height: 20px;
            font-size: 15px;
            color: #201D41;
            font-weight: 300;
            margin-top: 0px;
            margin-left: 5px;
            margin-bottom: 5px;
        }

        a{
            color: #FFC107;
            margin: 0;
        }

        span{
            font-family: Acumin Pro;
            line-height: 14px;
            font-size: 12px;
            font-weight: 300;
            display: block;
            color: #696F74;
            margin-left: 5px;
        
        }

    }
}


.text {
    font-size: 0.95em !important;
        margin-top: 10px !important;
        font-weight: 900 !important;
    &.accepted{
        color: teal !important;
    }
    &.rejected{
        color: #f44336 !important;
    }
}

`;