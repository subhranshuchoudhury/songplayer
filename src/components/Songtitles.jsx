import React from 'react';

const Songtitles = (props) => {
    return (
        <div className='songTilesContainer'>
            
            <img src={props.thumbnail} 
            alt={props.title} 
            onClick={() => props.playFunction(props.source,props.title,props.thumbnail)} />
            <h5 className={props.toggleMode ? "songTitle" : "darkSongTitle"}>{props.title}</h5>
        </div>
    );
}

export default Songtitles;
