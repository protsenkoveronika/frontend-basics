import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

const App = () => {
    const goods = [
        { image: "img/apple.webp", name: "Apple", price: "100" },
        { image: "img/carrot.webp", name: "Carrot", price: "150" },
        { image: "img/kiwi.webp", name: "Kiwi", price: "200" },
        { image: "img/pineapple.jpg", name: "Pineapple", price: "250" },
        { image: "img/watermelon.jpg", name: "Watermelon", price: "300" },
        { image: "img/strawberry.jpg", name: "Strawberry", price: "350" },
    ];

    return (
        <div>
            <Header />
            <Content />
            <Image />
            <GoodsCard goods={goods} />
        </div>
    );
};

export default App;