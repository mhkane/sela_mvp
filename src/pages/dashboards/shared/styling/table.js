import styled from 'styled-components';

export const plain = `
.t-options{
    label{
        font-size: 0.8em;
        display: block;
        color: #555;
    }
    select{
        height: 2.5em;
        background: white;
        border: 1px solid #cacaca;
        border-radius: 0;
        font-size: 0.8em;
        width: 10em;
        margin: 0.25em 0.5em;    
    }
    .view-on-block{
        height: 2.5em;
        font-size: 0.78em;
        background: #f3f3f3;
        color: #545151;
        line-height: 2.5em;
        margin: 0.25em 1em 0em 0;
        padding: 0 1em;
        border: 1px solid #cacaca;
        border-radius: 2px;
        display: inline-block;    
    }
}


border: 1px solid #F5F5F8;
border-radius: 4px;
background: #FFFFFF;

.top {
    margin:0;
    padding: 1em;
    span#info{
        color: #aaa;
        font-size: 0.8em;
        font-weight: 300;
        display: block;
    }
    h3{
        line-height: 21px;
        font-size: 1em;
        color: #201D41;
        padding: 0;
        margin: 0;
        font-weight: 500;
        margin-top: 0.45em;
    }
    .button{
        background: #F2994A;
        border-radius: 5px;
        padding: 0.85em 1em;
        font-weight: 300;
        border: 0;
        color: white;
        font-size: 0.8em;
        font-weight: 300;
        line-height:0;
        height: 30px;
    }
}

.headings{
    background: #fafafa;
    h3{
        font-size: 0.9em;
        font-weight: 500;
        padding: 0 1em;
        color: #3D4851;
    }
}

.content{
    .row + .row{
        border-top: 1px solid #eee;
    }
    .col-row{
        padding: 1em;
    }
    a,button,p{
        line-height: 21px;
        font-size: 0.9em;
        color: #3D4851;
        margin: 0;
        text-transform: capitalize;
        &:hover{
            color: slateblue;
        }
    }
    button{
        background: transparent;
        border: 0;
        img{
            height: 30px;
            width: 30px;
            border-radius: 30px;
            display: inline-block;
            float: left;
            margin-right: 10px;
            background: #ddd;
            position: relative;
            top: -5px;
            object-fit: cover;
            object-position:center;

        }
    }
    
}`;

export default styled.div`
    ${plain}
`;