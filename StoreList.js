import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StoreList = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchStores = async () => {
            const response = await axios.get('http://localhost:5000/api/stores');
            setStores(response.data);
        };
        fetchStores();
    }, []);

    return (
        <div>
            <h1>Stores</h1>
            <ul>
                {stores.map(store => (
                    <li key={store.id}>{store.name} - {store.address} - Rating: {store.rating}</li>
                ))}
            </ul>
        </div>
    );
};

export default StoreList;