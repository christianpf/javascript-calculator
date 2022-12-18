import { useState } from 'react'

import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";

import { Container,  Row, Col} from "react-bootstrap"

function App() {

  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState("");


  const handleKeyClick = (key) =>{
    var currDisp = display;
    var currHist = history;
    if(history.indexOf("=") != -1 && key != "=") {
      if(key == "clear"){
        setDisplay("0");
        setHistory("");
      }else if(key == "x" || key == "/" || key == "+" || key == "-"){
        setHistory(display + key);
        setDisplay(key);
      }else{
        setDisplay(key);
        setHistory(key);
      }
    }else{
      switch (key) {
        case "clear":
          setDisplay("0");
          setHistory("");
          break;
        case "=":
          if(history.indexOf("=") == -1){
            setDisplay(eval(history.replace("x", "*")));
            setHistory(history + " = " + eval(history.replace("x", "*")));
          }
          break;
        case ".":
          if(display == "0"){
            setDisplay("0.");
            setHistory("0.");
          }else if(display == "x" || display == "/" || display == "+" || display == "-"){
            setDisplay("0.");
            setHistory(history + "0.");
          } else if (display.indexOf(".") == -1){
            setDisplay(display + key);
            setHistory(history + key);
          }
          break;
        case "-": 
          if(display == "0"){
            setDisplay(key);
            setHistory(key);
          }else if(display == "x" || display == "/" || display == "+"){
            setDisplay(display + key);
            setHistory(history + key);
          }else if(display == "-"){
            setDisplay(display + key);
            setHistory(history + key);
          }else {
            setDisplay(key);
            setHistory(history + key);            
          }
          break;
        case "/": case "+": case "x":
          if(display == "x" || display == "/" || display == "+" || display == "-" || display == "--"){ 
            setDisplay("")
            setDisplay(key);
            setHistory(currHist.slice(0, -1) + key);
          }else if(display == "x-" || display == "/-" || display == "+-"){
            setDisplay("")
            setDisplay(key);
            setHistory(currHist.slice(0, -2) + key);
          }else{
            setDisplay(key);
            setHistory(history + key);
          }
          break;
        default:
          if(display == "0"){
            setDisplay(key);
            setHistory(key);
          }else if(display == "x" || display == "/" || display == "+" || display == "-" || display == "--" ||
                   display == "x-" || display == "/-" || display == "+-"){
            setDisplay(key);
            setHistory(history + key);
          }else {
            setDisplay(display + key);
            setHistory(history + key);
          }
      }
    }
      
    
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <Container className="calculator">
        <Row className='screen g-0'>
          <Col id="history" className=" history col-12">
            {history}
          </Col>
          <Col id="display" className="display col-12">
            {display}
          </Col>
        </Row>
        <Row>
          <Col id="clear" className="key clear col-9" onClick={() => handleKeyClick("clear")}>Clear</Col>
          <Col id="divide" className="key operation col-3" onClick={() => handleKeyClick("/")}>/</Col>
        </Row>
        <Row>
          <Col id="seven" className="key number col-3" onClick={() => handleKeyClick("7")}>7</Col>
          <Col id="eight" className="key number col-3" onClick={() => handleKeyClick("8")}>8</Col>
          <Col id="nine" className="key number col-3" onClick={() => handleKeyClick("9")}>9</Col>
          <Col id="multiply" className="key operation col-3" onClick={() => handleKeyClick("x")}>x</Col>
        </Row>
        <Row>
          <Col id="four" className="key number col-3" onClick={() => handleKeyClick("4")}>4</Col>
          <Col id="five" className="key number col-3" onClick={() => handleKeyClick("5")}>5</Col>
          <Col id="six" className="key number col-3" onClick={() => handleKeyClick("6")}>6</Col>
          <Col id="subtract" className="key operation col-3" onClick={() => handleKeyClick("-")}>-</Col>
        </Row>
        <Row>
          <Col id="three" className="key number col-3" onClick={() => handleKeyClick("3")}>3</Col>
          <Col id="two" className="key number col-3" onClick={() => handleKeyClick("2")}>2</Col>
          <Col id="one" className="key number col-3" onClick={() => handleKeyClick("1")}>1</Col>
          <Col id="add" className="key operation col-3" onClick={() => handleKeyClick("+")}>+</Col>
        </Row>
        <Row>
          <Col id="zero" className="key number col-3" onClick={() => handleKeyClick("0")}>0</Col>
          <Col id="decimal" className="key number col-3" onClick={() => handleKeyClick(".")}>.</Col>
          <Col id="equals" className="key equals col-6" onClick={() => handleKeyClick("=")}>=</Col>
        </Row>

      </Container>
    </div>
  )
}

export default App
