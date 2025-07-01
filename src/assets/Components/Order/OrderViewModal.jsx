import React from "react";

export default function OrderViewModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Product Image's & Price</h2>
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="space-y-4">
          {order.products.map((product, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <p className="text-red-600 font-medium">{product.title}</p>
                <p><strong>Price :</strong> ₹ {product.price}</p>
                <p><strong>Quantity :</strong> {product.quantity}</p>
                <p><strong>Size :</strong> {product.size}</p>
                <p><strong>Color :</strong> {product.color}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
          <div className="bg-gray-100 p-4 rounded w-full md:w-1/2">
            <h3 className="font-semibold text-gray-800 mb-2">Product Details</h3>
            <p>{order.customerName}</p>
            <p>{order.address}</p>
            <p>{order.city}, {order.state} {order.zip}</p>
            <p>{order.country}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded w-full md:w-1/2">
            <h3 className="font-semibold text-gray-800 mb-2">Order Summary</h3>
            <p><strong>Item(s) Subtotal :</strong> ₹ {order.subtotal}</p>
            <p><strong>Cash / Pay on Delivery :</strong> ₹ {order.cod}</p>
            <p><strong>Shipping :</strong> ₹ {order.shipping}</p>
            <hr className="my-2" />
            <p className="font-semibold"><strong>Grand Total :</strong> ₹ {order.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
