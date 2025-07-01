import { useState } from "react";
import OrderViewModal from "./OrderViewModal";

const orderData = [
  {
    id: 1,
    orderId: "Frank01",
    name: "Roshan Chaurasia",
    date: "10/06/2024",
    status: "Processing...",
    address: "First Floor, Laxmi Tower, Bhaskar Circle, Ratanada",
    city: "PRAYAGRAJ",
    state: "UTTAR PRADESH",
    zip: "211003",
    country: "India",
    subtotal: 3500,
    cod: 0,
    shipping: 0,
    total: 3500,
    products: [
      {
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg",
        title: "Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt",
        price: 1500,
        quantity: 1,
        size: "XL",
        color: "Red",
      },
      {
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg",
        title: "Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt",
        price: 1500,
        quantity: 1,
        size: "XL",
        color: "Red",
      },
    ],
  },
  {
    id: 2,
    orderId: "Zara02",
    name: "Neha Sharma",
    date: "11/06/2024",
    status: "Shipped",
    address: "B-104, Pearl Residency, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400001",
    country: "India",
    subtotal: 1999,
    cod: 0,
    shipping: 0,
    total: 1999,
    products: [
      {
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg",
        title: "Women Pink Textured Cotton T-shirt",
        price: 1999,
        quantity: 1,
        size: "M",
        color: "Pink",
      },
    ],
  },
];

export default function OrderManagement() {
  const [orders] = useState(orderData);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="p-6">
      <div className="text-sm text-gray-500 mb-3">Home / Orders</div>

      <div className="bg-gray-100 p-4 rounded-t-md border border-b-0 font-semibold text-lg">
        Order's List
      </div>

      <div className="overflow-x-auto border rounded-b-md">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3 font-medium text-gray-600">DELETE</th>
              <th className="p-3 font-medium text-gray-600">S. NO.</th>
              <th className="p-3 font-medium text-gray-600">ORDER ID</th>
              <th className="p-3 font-medium text-gray-600">NAME</th>
              <th className="p-3 font-medium text-gray-600">QUANTITY</th>
              <th className="p-3 font-medium text-gray-600">PRICE</th>
              <th className="p-3 font-medium text-gray-600">DATE</th>
              <th className="p-3 font-medium text-gray-600">STATUS</th>
              <th className="p-3 font-medium text-gray-600">VIEW</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const totalQty = order.products.reduce((sum, item) => sum + item.quantity, 0);
              const totalPrice = order.products.reduce((sum, item) => sum + item.price, 0);
              return (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{order.orderId}</td>
                  <td className="p-3">{order.name}</td>
                  <td className="p-3">{totalQty}</td>
                  <td className="p-3">₹ {totalPrice}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">{order.status}</td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <OrderViewModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
}
