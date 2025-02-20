import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheck, FaRegClock } from "react-icons/fa6";
import './OrderHistory.css';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [expandedOrderId, setExpandedOrderId] = useState(null); // Track expanded order

    const userEmail = "gamiyash15@gmail.com";

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getOrdersforHistory/${userEmail}`);
    //             setOrders(Array.isArray(response.data) ? response.data : [response.data]);
    //         } catch (err) {
    //             setError('Error fetching orders');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchOrders();
    // }, [userEmail]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getOrdersforHistory/${userEmail}`);
                const ordersData = Array.isArray(response.data) ? response.data : [response.data];

                // Sort orders by createdAt (newest first)
                const sortedOrders = ordersData.sort((a, b) => new Date(b.time) - new Date(a.time));

                setOrders(sortedOrders);
            } catch (err) {
                setError('Error fetching orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userEmail]);

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-GB');
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'delivered':
                return 'status-delivered';
            case 'new order':
                return 'status-new';
            default:
                return 'status-processing';
        }
    };

    const toggleExpand = (orderId) => {
        setExpandedOrderId(prevId => (prevId === orderId ? null : orderId)); // Toggle state
    };

    return (
        <div className="order-history-container">
            <div className="order-history-wrapper">
                <h1 className="page-title">Order History</h1>

                {loading && <div className="loading-state">Loading orders...</div>}
                {error && <div className="error-state">{error}</div>}

                <div className="orders-grid">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className={`order-card ${expandedOrderId === order.id ? 'expanded' : ''}`}
                            onClick={() => toggleExpand(order.id)}
                        >
                            <div className="order-card-content">
                                <div className="order-id">Order #{order.id}</div>
                                <div className={`order-status ${getStatusClass(order.status)}`}>
                                    {order.status === 'delivered' ? <FaCheck size={14} /> : <FaRegClock size={14} />}
                                    {order.status}
                                </div>
                                <div className="order-main-info">
                                    <h3>{order.mealType}</h3>
                                    <div>TiffinName:- {order.tiffinName}</div>
                                    <div>TiffinAddress:- {order.tiffinAddress}</div>
                                    <div>Qty: {order.quantity}</div>
                                </div>
                                <div className="order-price">${order.total}</div>

                            </div>

                            {expandedOrderId === order.id && (
                                <div className="order-detail-section">
                                    <div className="detail-grid">
                                        <div className="detail-item">
                                            <div className="detail-label">Distance</div>
                                            <div className="detail-value">{order.distance}</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Address</div>
                                            <div className="detail-value">{order.address}</div>
                                        </div>
                                        
                                        {order.flexiblePlan && (
                                            <>
                                                <div className="detail-item">
                                                    <div className="detail-label">Plan Type</div>
                                                    <div className="detail-value">{order.flexiblePlan.type}</div>
                                                </div>
                                                {/* <div className="detail-item">
                                                    <div className="detail-label">Quantity</div>
                                                    <div className="detail-value">{order.quantity}</div>
                                                </div> */}
                                                {order.flexiblePlan.type === 'normal' && (
                                                    <div className="detail-item">
                                                        <div className="detail-label">Start Date</div>
                                                        <div className="detail-value">{formatDate(order.startDate)}</div>
                                                    </div>
                                                )}
                                                {order.flexiblePlan.type === 'date-range' && (
                                                    <div className="detail-item">
                                                        <div className="detail-label">Date Range</div>
                                                        <div className="detail-value">
                                                            {formatDate(order.flexiblePlan.startDate)} - {formatDate(order.flexiblePlan.endDate)}
                                                        </div>
                                                    </div>
                                                )}

                                            </>
                                        )}
                                    </div>
                                    {order.flexiblePlan.type === 'flexi-dates' && order.flexiblePlan.flexiDates && (
                                        <div className="detail-item mt-4">
                                            <div className="detail-label">Selected Dates</div>
                                            <div className="dates-list">
                                                {order.flexiblePlan.flexiDates.map((date, idx) => (
                                                    <span key={idx} className="date-chip">{formatDate(date)}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div style={{ paddingTop: "10px" }}>
                                        <h4>Delivery Status</h4>
                                        <div className="dates-list">
                                            {order.subStatus && order.subStatus.map((status, idx) => (
                                                <div key={idx} className="detail-item">
                                                    <div className="detail-label">{formatDate(status.date)}</div>
                                                    <div
                                                        className={`detail-value ${status.status === 'Delivered'
                                                            ? 'Delivered'
                                                            : status.status === null ? 'Not-delivered' : ''
                                                            }`}
                                                    >
                                                        <span className={`${status.status === "Delivered" ? "text-green-500" : status.status === "Not Delivered" ? "text-red-500" : ""}`}>{status.status}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
