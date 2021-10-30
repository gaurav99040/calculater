import react, { useState } from 'react'
import './App.css';

function App() {
  const [result, setresult] = useState("")


  const onchange=(e)=>{
    setresult(result.concat(e.target.name))
  }
  const clear=()=>{
    setresult("")
  }
  const back=()=>{
    setresult(result.slice(0,result.length-1))
  }
  const showresult=()=>{
    try{
      setresult(eval(result).toString())
    }catch(err){
    alert(err)
    }
    
  }
  return (
    <>
      <div className="calculater">
        <div className="inline-cal">
          <div className="center-part">
            <div className="container">
            <div className='main'>
            
              <div className="textbox">
                <input type="text" value={result} />
              </div>
             
                <div class="row row-cols-4">
                
                  <div class="col align-self-center">
                    <button type="button"  class="btn btn-primary" onClick={clear}>Clear</button>
                  </div>
                  <div class="col">
                    <button type="button" class="btn btn-primary" onClick={back}>C</button>
                  </div>
                  <div class="col">
                    <button type="button" name='/' class="btn btn-primary" onClick={onchange}>&divide;</button>
                  </div>
                  <div class="col">
                    <button type="button" name='*' class="btn btn-primary" onClick={onchange}>&times;</button>
                  </div>
                  <div class="col">
                    <button type="button" name='1' class="btn btn-primary" onClick={onchange}>1</button>
                  </div>
                  <div class="col">
                    <button type="button" name='2' class="btn btn-primary" onClick={onchange}>2</button>
                  </div>
                  <div class="col">
                    <button type="button" name='3' class="btn btn-primary" onClick={onchange}>3</button>
                  </div>
                  <div class="col">
                    <button type="button" name='-' class="btn btn-primary" onClick={onchange}>&ndash;</button>
                  </div>
                  <div class="col">
                    <button type="button" name='4' class="btn btn-primary" onClick={onchange}>4</button>
                  </div>
                  <div class="col">
                    <button type="button" name='5' class="btn btn-primary" onClick={onchange}>5</button>
                  </div>
                  <div class="col">
                    <button type="button" name='6' class="btn btn-primary" onClick={onchange}>6</button>
                  </div>
                  <div class="col">
                    <button type="button" name='+' class="btn btn-primary" onClick={onchange}>+</button>
                  </div>
                  <div class="col">
                    <button type="button" name='7' class="btn btn-primary" onClick={onchange}>7</button>
                  </div>
                  <div class="col">
                    <button type="button" name='8' class="btn btn-primary" onClick={onchange}>8</button>
                  </div>
                  <div class="col">
                    <button type="button" name='9' class="btn btn-primary" onClick={onchange}>9</button>
                  </div>
                  <div class="col">
                    <button type="button" name='0' class="btn btn-primary" onClick={onchange}>0</button>
                  </div>
                  <div class="col">
                    <button type="button" name='.' class="btn btn-primary" onClick={onchange}>.</button>
                  </div>
                  <div class="col-sm-3 col-md-6 col-lg-9">
                    <button type="button" name='=' class="btn btn-primary" onClick={showresult}>=</button>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
