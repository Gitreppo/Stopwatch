import './digital.css';
import React, { useEffect, useState } from 'react';

import Button from './button';

export default function Stop() {

    const details = {
        hours: "0",
        minutes: "0",
        seconds: "0",
        milliseconds: "0"
    }

    const [timer, setTimer] = useState(details);
    const[gap,setGap] =useState();
    const [status,setStatus] =useState(0);
 

   let hrs=timer.hours;
   let min=timer.minutes;
   let sec=timer.seconds;
   let milli=timer.milliseconds;

    const run=()=>{
        if(min=="60"){
            hrs++;
            min="00";
        }
        if(sec=="60"){
            min++;
            sec="00";
        }
        if(milli=="100"){
            sec++;
            milli="00";
        }
        milli++;
        return setTimer({hours:hrs,minutes:min,seconds:sec,milliseconds:milli})
    }

    const start = () => {
        run();
        setGap(setInterval(run,10));
        setStatus(1);

    }
    const stop = () => {
         clearInterval(gap);
         setStatus(2);
    }
    const reset=()=>{
        clearInterval(gap);
        setTimer(details);
        setStatus(0);
    }


    return (
        <div className="digital">
            <h1>Stop watch</h1>

            <h4>{timer.hours<10?"0"+timer.hours:timer.hours}</h4>:

            <h4>{timer.minutes<10?"0"+timer.minutes:timer.minutes}</h4>:

            <h4>{timer.seconds<10?"0"+timer.seconds:timer.seconds}</h4>:

            <h4>{timer.milliseconds<10?"0"+timer.milliseconds:timer.milliseconds}</h4>
            
            <Button start={start} stop={stop} reset={reset} status={status} />


        </div>
    );
}

