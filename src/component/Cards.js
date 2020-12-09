import React from 'react';
import {Link} from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css'

function Cards(){

    return(
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside 
                            the Amazon Jungle'
                            label ='Adventure'
                            path='/services'
                        ></CardItem>
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Travel through the Iland of Balli in a Private Cruise'
                            label ='Luxury'
                            path='/services'
                        ></CardItem>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-1.jpg'
                            text='Viewing the Sun Set at Himalaya'
                            label ='Mountain'
                            path='/services'
                        ></CardItem>
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Luxurious Boat trip in Lasvagus'
                            label ='Sea Beach'
                            path='/services'
                        ></CardItem>
                        <CardItem 
                            src='images/img-8.jpg'
                            text='Travel by Camel in Sahara Desert'
                            label ='Desert'
                            path='/services'
                        ></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;