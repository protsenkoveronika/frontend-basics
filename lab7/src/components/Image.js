import React from 'react';

const Image = () => {

    const increaseSize = () => {
        const imgElement = document.querySelector("img");
        if (imgElement) {
            imgElement.style.width = (imgElement.offsetWidth + 20) + "px";
        }
    };

    const decreaseSize = () => {
        const imgElement = document.querySelector("img");
        if (imgElement) {
            imgElement.style.width = (imgElement.offsetWidth - 20) + "px";
        }
    };

    const removeImage = () => {
        const imgElement = document.querySelector("img");
        if (imgElement) {
            imgElement.style.display = "none";
        }
    };

    const addImage = () => {
        const imgElement = document.querySelector("img");
        if (imgElement) {
            imgElement.style.display = "block";
        }
    };

    return (
        <div>
            <a href="http://www.whereintheworldistosh.com/2020/12/30/how-to-spend-one-day-exploring-gdansk-poland"
               target="_blank" rel="noopener noreferrer">
                <img src="/img/gdansk.jpg" alt="Gdansk"/>
            </a>

            <div>
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseSize}>Збільшити</button>
                <button onClick={decreaseSize}>Зменшити</button>
                <button onClick={removeImage}>Видалити</button>
            </div>
        </div>
    );
};

export default Image;