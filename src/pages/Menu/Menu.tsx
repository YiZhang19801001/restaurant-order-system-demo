import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import toast from 'react-hot-toast';
import menuItems from '../../data/menuItems.json';
import PageWrapper from '../../components/PageWrapper';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

const Menu = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: (typeof menuItems)[0]) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
    toast.success(`${item.name} added to cart!`);
  };
  return (
    <PageWrapper>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6"><Utensils className="inline-block mr-2" /> Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="shadow hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className="p-0"
              >
                <CardContent className="p-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover rounded-t-xl"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Menu;
