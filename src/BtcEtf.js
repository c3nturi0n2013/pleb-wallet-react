import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BtcEtf() {
    const [etfs, setEtfs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/c3nturi0n2013/data/master/btcetf.json');
                const etfData = response.data;
                const formattedData = Object.keys(etfData).map(key => ({
                    symbol: key,
                    ...etfData[key]
                }));
                setEtfs(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Bitcoin ETFs</h1>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Country</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {etfs.map(etf => (
                        <tr key={etf.symbol}>
                            <td>{etf.symbol}</td>
                            <td>{etf.country}</td>
                            <td>${etf.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BtcEtf;
