import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <div className="product">
        <div className="image-container">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
            />
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
    </div>
);


const Library = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the URL for your API endpoint
        const apiUrl = 'http://localhost:8080/api/products/getProducts';

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                // Update the state with the fetched data
                setData(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="library">
            <h1>My Library</h1>
            <div className="library-card-group">
                {data.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="library-card-link">
                        <div className="library-card">
                            <ProductCard product={product} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

}

export default Library;
