import React from 'react';
import axios from 'axios';
import Card from '../components/Card/Card';

const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_MOCKAPI_URL}/orders`);
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Error! Get orders', error)
            }
        })()
    }, []);
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Orders sneakers</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    (isLoading ? [...Array(8)] : orders).map((el, ind) => <Card
                    key={ind}
                    loading={isLoading}
                    {...el} />)
                }
            </div>
        </div>
    )
}

export default Orders;