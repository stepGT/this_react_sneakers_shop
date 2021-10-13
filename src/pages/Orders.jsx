import React from 'react';

const Orders = () => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Orders sneakers</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    [].map((el) => {
                        console.log(el)
                    })
                }
            </div>
        </div>
    )
}

export default Orders;