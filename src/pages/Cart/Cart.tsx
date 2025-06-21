import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right font-bold text-green-700">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mt-6 text-xl font-bold">
            <span>Total:</span>
            <span className="text-green-800">${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
