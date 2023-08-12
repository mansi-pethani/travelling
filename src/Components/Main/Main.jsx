import React, {useEffect} from "react";
import './main.css'
import "./main.scss";
import { BsAndroid } from "react-icons/bs";
import img from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle:'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX ',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
    },
     {
         id:2,
         imgSrc: img2,
         destTitle:'Machu picchu',
         location: 'Peru',
         grade: 'CULTURAL RELAX ',
         fees: '$600',
         description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },
     {    
    id:3,
    imgSrc: img3,
    destTitle:'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },   
      {   
     id:4,
    imgSrc: img4,
    destTitle:'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },   
      {   
     id:5,
    imgSrc: img5,
    destTitle:'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX ',
    fees: '$1100',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },   
      {   
     id:6,
    imgSrc: img6,
    destTitle:'Cinque-Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX ',
    fees: '$840',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },   
      {   
     id:7,
    imgSrc: img7,
    destTitle:'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX ',
    fees: '$790',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },   
      {    
    id:8,
    imgSrc: img8,
    destTitle:'Taj Mahal',
    location: 'Indio',
    grade: 'CULTURAL RELAX ',
    fees: '$900',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },   
      {   
     id:9,
    imgSrc: img9,
    destTitle:'Bali IsLand',
    location: 'Indonesio',
    grade: 'CULTURAL RELAX ',
    fees: '$500',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. this is know for its luxurious stays BsAndroid adventurous activities.'
     },
    ]
const Main = () => {


    useEffect(()=>{
        Aos.init({duration: 2000})
      },[])

    return (
        <section className="main container section">

            <div className="secTitle">
<h3 data-aos="fade-right" className="title">
    Most visited destinations
</h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description })=>{

                        return(
                            <div key={id}
                            data-aos="fade-up" className="singleDestination">
<div className="imageDiv">
<img src={imgSrc} alt={destTitle} />
    </div>

    <div className="cardInfo">
        <h4 className="destTitle">
            {destTitle}
        </h4>
        <span className="continent flex">
 <HiOutlineLocationMarker className="icon"/>
 <span className="name">{location}</span>
        </span>

        <div className="fees flex">
            <div className="grade">
                <span>{grade}<small>+1</small></span>
            </div>
            <div className="price">
                <h5>{fees}</h5>
            </div>
            </div>

<div className="desc">
    <p>{description}</p>
</div>

<button className="btn flex">
    DETAILS <HiOutlineClipboardCheck className="icon" />
</button>
        </div>
          </div>
                        )

                    })
                }
            </div>
        </section>
    )
}
  
    


export default Main