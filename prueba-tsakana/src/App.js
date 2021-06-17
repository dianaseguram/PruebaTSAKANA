import Banner from "./Components/Banner/banner";
import './App.css';
import Carrousel from "./Components/Carrousel/carrousel";
import Card from "./Components/Cards/cards"
import axios from 'axios';
import { useState } from "react";
import './Components/Cards/cards.css'

const getProducts = () => {
    return axios.get('https://fakestoreapi.com/products/category/women\'s clothing')
}



function App() {

    const [products, setProducts] = useState({});


    getProducts().then((res) => {
        console.log(res.data)
        setProducts(res.data);
    })
        .catch((error) => {
            console.log(error)
            return {}
        });
    console.log("hola ", products)

    var productsCard

    if(products.length>0){
         productsCard = products.map((product) => {

            return <Card className="o-card" image={product.image} price={product.price} name={product.title} />
        })
    }
    

    return (
        <div className="App">
            <div>
                <Banner />
            </div>

            <div>
                <Carrousel />
            </div>

            <div>
                <h4 className="o-title2">
                    NOVEDADES DIARIAS
                </h4>
                {productsCard}
            </div>
        </div>
    );
}

export default App;
