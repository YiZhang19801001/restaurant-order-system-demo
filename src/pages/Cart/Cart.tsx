import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store';
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from '../../store/slices/cartSlice';
import PageWrapper from '../../components/PageWrapper';
import { Button } from '../../components/ui/button';

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, newQty: number) => {
    dispatch(updateQuantity({ id, quantity: newQty }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    dispatch(clearCart());
    navigate('/success');
  };

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <PageWrapper>
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

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
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
            <button
              onClick={handlePlaceOrder}
              className="mt-4 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
            >
              ✅ Place Order
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Cart;
