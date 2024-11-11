import React, { Component } from 'react';

class Content extends Component {
    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    handleItem3Click = () => {
        const item = document.getElementById('item3');
        item.style.backgroundColor = this.getRandomColor();
        item.style.color = this.getRandomColor();
    }

    handleH4Click = () => {
        const item = document.querySelector('h4')
        item.style.backgroundColor = this.getRandomColor();
        item.style.color = this.getRandomColor();
    }

    render() {
        return (
            <div>
                <p>Дата і місце народження: 28 липня, 2004 року, м. Київ</p>
                <p id="item3" onClick={this.handleItem3Click}>Освіта: СШ №185 м. Київ; НТУУ "КПІ", м. Київ.</p>

                <h4 onClick={this.handleH4Click}>Моє хобі:</h4>
                <ul>
                    <li>Музика</li>
                    <li>Кінематограф</li>
                    <li>Прогулянки містом</li>
                </ul>

                <h4>Мої улюблені книги:</h4>
                <ol>
                    <li>Hunger games</li>
                    <li>The Maze Runner</li>
                    <li>Unbelievers</li>
                </ol>

                <h4>Опис улюбленого міста:</h4>
                <p>Гданськ (пол. Gdańsk) — місто на півночі Польщі, лежить на березі Гданської затоки Балтійського моря,
                    у гирлі річки Вісла, столиця Поморського воєводства.
                    Гданськ — культурний, науковий та економічний центр, а також потужний транспортний вузол Північної
                    Польщі. Місто є великим портом на Балтійському морі, центр промисловості, зокрема нафтохімічної і
                    машинобудування (розвинені суднобудування і судноремонт).
                </p>
            </div>
        );
    }
}

export default Content;