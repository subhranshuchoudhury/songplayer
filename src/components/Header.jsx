import React from 'react';

const Header = (props) => {
    return (
        <div className={props.toggleMode ? "header" : "darkheader"}>
            <a href='https://about.me/subhranshu'>Song Player</a>
        </div>
    );
}

export default Header;
