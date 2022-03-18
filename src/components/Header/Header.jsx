import './Header.css';

import React from 'react';

function Header() {
    return (
        <div className="header__container">
            <div className="header__logo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVRoge3XoQ2AMBRF0QICwxQswgIIUJ2xCkQXYBGmwCBI0U2o+uKV5B7b5KVXfucAQKkpPSQ/JtNwOLPteVtMe3HdP//aWkZrQIAaAWoEqBGgRoAaAWoEANAq3sRduEw37OOHbDsdve3Gnm5u4ioRoEaAGgFqBKgRoEaA2u8DAEDrBQofED/8n8cqAAAAAElFTkSuQmCC" alt="logo"/>
            </div>
            <div className="header__content">
                <h1 id="h1">Har-Shop</h1>
            </div>
        </div>
    )
}

export default Header;
