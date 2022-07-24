import React from 'react';

const Moodbuttons = (props) => {
    return (
        <div>
      <div className='moodBtnContainer'>
        <button className={props.toggleMode ? "moodButton" : "darkMoodButton"}  onClick={() => props.setmood("")} >All ❤️</button>
        <button className={props.toggleMode ? "moodButton" : "darkMoodButton"}  onClick={() => props.setmood("sad")}>Sad 😔</button>
        <button className={props.toggleMode ? "moodButton" : "darkMoodButton"}  onClick={() => props.setmood("happy")}>Happy 🤗</button>
        <button className={props.toggleMode ? "moodButton" : "darkMoodButton"}  onClick={() => props.setmood("chill")}>Chill 😁</button>
        <button className={props.toggleMode ? "moodButton" : "darkMoodButton"}  onClick={() => props.setmood("motivation")}>Motivation 😤</button>
    
      </div>
      </div>
    );
}

export default Moodbuttons;
