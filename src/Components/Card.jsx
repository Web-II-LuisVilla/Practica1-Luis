import React, { useState } from 'react'

import Amg from '../assets/AmgGtrPro.jpg'
import Audi from '../assets/Audi_e-tron_GT.webp'
import Bmw from '../assets/bmwM8.jpeg'
import Honda from '../assets/HondaCivicTypeR.jpg'
import Porche from '../assets/Porche911Gt3Rs.jpg'
import Subaru from '../assets/SubaruBrz.webp'

const Card = ({count}) => {

return (
    <>
        <div class="container">
            <div class="card">
                <figure>
                    <img src={Amg} alt="" />
                </figure>
                <div class="contenido"> 
                    <h3>Mercedes Benz: Amg Gtr Pro</h3> <h4>Contador: {count}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ab veniam nisi error quosaliquam ipsum nostrum esse
                        doloremque eligendi necessitatibus alias, omnis culpa ipsa 
                        possimus accusamus exercitationem laudantium enim.</p>
                    <a href="https://www.mercedes-benz.com.co/" target="_blank">Leer Mas</a>
                </div>
            </div>
            
            <div class="card">
                <figure>
                    <img src={Audi} alt="" />
                </figure>
                <div class="contenido"> 
                    <h3>Audi: E-Tron GT</h3> <h4>Contador: {count}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ab veniam nisi error quosaliquam ipsum nostrum esse
                        doloremque eligendi necessitatibus alias, omnis culpa ipsa 
                        possimus accusamus exercitationem laudantium enim.</p>
                    <a href="https://www.mercedes-benz.com.co/" target="_blank">Leer Mas</a>
                </div>
            </div>

            <div class="card">
                <figure>
                    <img src={Bmw} alt="" />
                </figure>
                <div class="contenido"> 
                    <h3>Bmw: M8 Competition</h3><h4>Contador: {count}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ab veniam nisi error quosaliquam ipsum nostrum esse
                        doloremque eligendi necessitatibus alias, omnis culpa ipsa 
                        possimus accusamus exercitationem laudantium enim.</p>
                    <a href="https://www.mercedes-benz.com.co/" target="_blank">Leer Mas</a>
                </div>
            </div>

            <div class="card">
                <figure>
                    <img src={Honda} alt="" />
                </figure>
                <div class="contenido"> 
                    <h3>Honda: Civic Type R</h3> <h4>Contador: {count}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ab veniam nisi error quosaliquam ipsum nostrum esse
                        doloremque eligendi necessitatibus alias, omnis culpa ipsa 
                        possimus accusamus exercitationem laudantium enim.</p>
                    <a href="https://www.mercedes-benz.com.co/" target="_blank">Leer Mas</a>
                </div>
            </div>

            <div class="card">
                <figure>
                    <img src={Porche} alt="" />
                </figure>
                <div class="contenido"> 
                    <h3>Porche 911: Gt3 RS</h3> <h4>Contador: {count}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ab veniam nisi error quosaliquam ipsum nostrum esse
                        doloremque eligendi necessitatibus alias, omnis culpa ipsa 
                        possimus accusamus exercitationem laudantium enim.</p>
                    <a href="https://www.mercedes-benz.com.co/" target="_blank">Leer Mas</a>
                </div>
            </div>

            <div class="card">
                <figure>
                    <img src={Subaru} alt="" />
                </figure>
                <div class="contenido"> 
                    <h3>Subaru: Brz</h3> <h4>Contador: {count}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ab veniam nisi error quosaliquam ipsum nostrum esse
                        doloremque eligendi necessitatibus alias, omnis culpa ipsa 
                        possimus accusamus exercitationem laudantium enim.</p>
                    <a href="https://www.mercedes-benz.com.co/" target="_blank">Leer Mas</a>
                </div>
            </div>
        </div>
    </>
    
)
}

export default Card