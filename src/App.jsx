import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../src/features/productsSlice';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-gray-100  p-8">
      <h1 className="text-2xl font-semibold mb-4">FakeStore Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow rounded-md"
          >
           <div className='max-w-4 max-h-4'>
           <img src={product.image} alt={product.title} className=" mx-auto mb-2" />
            </div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
