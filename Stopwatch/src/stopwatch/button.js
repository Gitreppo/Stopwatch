
import './digital.css';


function Button({start,stop,reset,status}) {
   

  return (
    <div className="App">
      {status==0? <button onClick={start}>Start</button>:null}
      {status==1?
      <div>
      <button onClick={reset}>Reset</button>&nbsp;
      <button onClick={stop}>Stop</button>
      </div>
      :null}
      {status==2?<div>
        <button onClick={reset}>Reset</button>&nbsp;
        <button onClick={start}>continue</button>
        </div>:null}
    </div>
  );
}

export default Button;
