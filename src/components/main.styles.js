import styled from 'styled-components'

export const MainContainer = styled.div`
${'' /* width:100vw; */}
padding: 60px;
${'' /* height:100vh; */}
background-color: #3F23EF;
background-image: linear-gradient(315deg, #0052A2 0%, #3F23EF 74%);

`

export const SubContainer = styled.div`
border:1px solid #00d4ff;
padding:10px 10px 50px 10px;;
box-shadow:1px solid #abe9cd;
${'' /* height:85vh; */}
border-radius:8px;
-webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);
box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);

.heading-cls{
  margin:0 0 0 5px;
  font-size: 20px;
  font-weight:600;
  float:left;
  background: linear-gradient(#abe9cd, #abe9cd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.github-icon{
  float:right;
  color:white;
  margin:8px;
  font-size:20px;
  cursor:pointer;
}

.input-field {
  border: none;
  display: block;
  width:100%;
  outline: none;
  margin:0 10px 0 0;
  height: 40px;
  margin: 0 auto;
  border-radius:8px;
  padding: 10px;
  color: black;
  box-shadow: 0 0px 10px 0px rgba(0,0,0,0.5);
}

@media only screen and (max-width: 1030px) {
    .clear-button{
      left: 98%;
      }
    }
    
@media only screen and (max-width: 880px) {
    .clear-button{
      left: 97%;
      }
    }
@media only screen and (max-width: 780px) {
    .clear-button{
      left: 96%;
      }
    }
    
@media only screen and (max-width: 580px) {
    .clear-button{
      left: 95%;
      }
    }
    
@media only screen and (max-width: 420px) {
    .clear-button{
      left: 94%;
      }
    }
`

export const BodyContainer = styled.div`
margin:10px 0 0 0;
color:white;
text-align:center;
line-height:20px;

.sub-heading{
  font-size:20px;
  font-weight:800;
  margin:20px 0 20px 0;
}

.sub-title{
font-size:20px;
font-weight:600;
}

.forecast-subDiv{
border:1px solid #00d4ff;
  border-radius:4px;
  padding:5px;
  margin:10px 0 10px 10px;
  background:#213ACA;
}
`