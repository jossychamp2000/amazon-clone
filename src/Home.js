import React from 'react'
import './Home.css'
import Product from "./Product";

function Home() {
    return (
    <div className="home">
        <div className="home__container">
            <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
        />

        <div className = 'home__row'>
          <Product 
           id="12321341"
           title="Chezmoi Collection Napa 7-Piece Luxury Leaves Scroll Embroidery Bedding Comforter Set (Queen, Teal/Gray/Black) "
           price={148.98}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/81ht4pThTlL._AC_SX450_.jpg" alt=""
            /> 
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          /> 
        </div>

        <div className="home__row">
        <Product 
         id="4903850"
         title="Marabell Futon Sofa Bed, Modern Convertible Couch with Armrest and Cup Holders (Black)"
         price={419.95}
         rating={3}
         image="https://images-na.ssl-images-amazon.com/images/I/91%2BFOMIWp3L._AC_SX450_.jpg" alt="Marabell Futon Sofa Bed, Modern Convertible Couch with Armrest and Cup Holders (Black)"
        />  
          <Product 
           id="23445930"
           title="Hybrid Active Noise Cancelling Headphones, VANKYO C751 Over Ear Wireless Bluetooth Headphone with CVC 8.0 Mic, Deep Bass, Hi-Fi Sound, Comfortable Protein Earpads, 30H Playtime for Travel/Work "
           price={89.98}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/81fvSEjmWRL._AC_SX522_.jpg" alt="Hybrid Active Noise Cancelling Headphones, VANKYO C751 Over Ear Wireless Bluetooth Headphone with CVC 8.0 Mic, Deep Bass, Hi-Fi Sound, Comfortable Protein Earpads, 30H Playtime for Travel/Work"
          />
          <Product 
          id="3254354345"
          title="Apple iPhone 11 Pro, 64GB, Space Gray - Fully Unlocked (Renewed) "
          price={1099.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41wDuEW9iZL._AC_.jpg" alt="Apple iPhone 11 Pro, 64GB, Space Gray - Fully Unlocked (Renewed)"
          />  
        </div>

        <div className="home__row">
        <Product 
         id="90829332"
         title="Samsung LC34J791WTNXZA 34 INCH WQHD 100Hz WQHD Curved Monitor with Thunderbolt"
         price={1149.98}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._AC_SX355_.jpg" alt="Samsung LC34J791WTNXZA 34&amp;quot; WQHD 100Hz WQHD Curved Monitor with Thunderbolt"        />  
        </div>

    </div>
            
 </div>
    );
}

export default Home
