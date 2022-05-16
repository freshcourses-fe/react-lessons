import React, { useEffect, useState } from 'react';
import { format, addSeconds } from 'date-fns';
import styles from './StopWatch.module.css';

function StopWatch(props) {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    console.log('render');
    start();

    return () => {
      stop();
    };
  }, []);

  function start() {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((time) => addSeconds(time, 1));
      }, 1000);
      setIntervalId(id);
    }
  }

  function stop() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  function reset() {
    setTime(new Date(0, 0, 0, 0, 0, 0));
  }

  return (
    <article className={styles.container}>
      <h1 className={styles.watchTime}>{format(time, 'HH:mm:ss')}</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </article>
  );
}

export default StopWatch;
