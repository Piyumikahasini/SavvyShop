import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { FaBox } from "react-icons/fa";

const MyOrders = () => {
  const { url, token } = useContext(ShopContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    // console.log(response.data.data)
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <section className="max-padd-container pt-20">
      <div className="py-10">
        <h4 className="bold-24">My Orders</h4>
        <table className="w-full mt-8">
          <thead>
            <tr
              className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 
          text-start py-12 "
            >
              <th className="p-1 text-left hidden sm:table-cell">Package</th>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Quantity</th>
              <th className="p-1 text-left">Status</th>
              <th className="p-1 text-left">Track</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, i) => (
              <tr
                key={i}
                className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left"
              >
                <td className="p-1 hidden sm:table-cell">
                  <FaBox className="text-2xl text-secondary" />
                </td>
                <td className="p-1">
                  <p>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + item.quantity + ",";
                      }
                    })}
                  </p>
                </td>
                <td className="p-1 ">${order.amount}</td>
                <td className="p-1 text-center ">{order.items.length}</td>

                <td className="p-1">
                  <p className="flexCenter gap-x-2 ">
                    <span className="hidden lg:flex">&#x25cf;</span>
                    <b>{order.status}</b>
                  </p>
                </td>
                <td className="p-1">
                  <button onClick={fetchOrders} className="btn-light rounded-sm !py-2 ">
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
