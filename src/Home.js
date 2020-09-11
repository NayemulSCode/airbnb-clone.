import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320"
                    title="Online Experiences"
                    description="Find unique activities led by one-of-a-kind hosts — all without leaving home."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                    title="Unique stays"
                    description="Boats, treehouses, and more—these spaces are more than just a place to sleep."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
                    title="Entire homes"
                    description="Comfortable private palces, eith room for friends or family"
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/3e973cc2-9755-410a-a922-c982d848fd39.jpg?aki_policy=x_large"
                    title="Entire apartment"
                    description="Uptown Chic - Hoboken"
                    price="$97/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/103241544/5b858882_original.jpg?aki_policy=x_large"
                    title="Private room"
                    description="The Artist's Experience"
                    price="$90/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/03407c92-086f-43d6-a27a-17a1d225c655.jpg?aki_policy=x_large"
                    title="Entire apartment"
                    description="1 Bedroom apartment"
                    price="$120/night"
                />
            </div>
        </div>
    )
}

export default Home
