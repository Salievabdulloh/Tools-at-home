import React, { useState } from 'react';

function ShoppingCartTable() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: '/images/cvv.png',
      name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
      article: '134544',
      inStock: 13,
      minOrder: 1,
      price: 155,
      quantity: 1,
    },
    {
      id: 2,
      image: '/images/cvv.png',
      name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
      article: '134544',
      inStock: 13,
      minOrder: 1,
      price: 155,
      quantity: 1,
    },
    {
        id: 3,
        image: '/images/cvv.png',
        name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
        article: '134544',
        inStock: 13,
        minOrder: 1,
        price: 155,
        quantity: 3,
    },
    {
        id: 4,
        image: '/images/cvv.png',
        name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
        article: '134544',
        inStock: 13,
        minOrder: 1,
        price: 155,
        quantity: 1,
    },
    {
        id: 5,
        image: '/images/cvv.png',
        name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
        article: '134544',
        inStock: 13,
        minOrder: 1,
        price: 155,
        quantity: 1,
    },
    {
        id: 6,
        image: '/images/cvv.png',
        name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
        article: '134544',
        inStock: 13,
        minOrder: 1,
        price: 155,
        quantity: 1,
    },
    {
        id: 7,
        image: '/images/cvv.png',
        name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
        article: '134544',
        inStock: 13,
        minOrder: 1,
        price: 155,
        quantity: 1,
    },
    {
        id: 8,
        image: '/images/cvv.png',
        name: 'Губка крупнопористая для мойки автомобиля (губка для мытья автомобиля), крупнопористая для мойки автомобиля автомобиля...',
        article: '134544',
        inStock: 13,
        minOrder: 1,
        price: 155,
        quantity: 1,
    },
  ]);

  const handleQuantityChange = (productId, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="mx-auto p-4 max-w-[1250px]">
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Фото</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Название</th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Артикул</th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">В наличии</th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Мин. партия</th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Цена</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Кол-во</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Итого</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Удалить</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onQuantityChange={handleQuantityChange}
                onDelete={handleDeleteProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductRow({ product, onQuantityChange, onDelete }) {
  const totalPrice = product.price * product.quantity;

  const handleDecrement = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleQuantityInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      onQuantityChange(product.id, value);
    } else if (e.target.value === '') {
      onQuantityChange(product.id, '');
    }
  };

  return (
    <tr>
      <td className="px-6 py-4">
        <img className="" src={product.image} alt={product.name} />
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900 line-clamp-2">{product.name}</div>
      </td>
      <td className="hidden md:table-cell px-6 py-4">{product.article}</td>
      <td className="hidden md:table-cell px-6 py-4">{product.inStock}</td>
      <td className="hidden md:table-cell px-6 py-4">{product.minOrder}</td>
      <td className="hidden md:table-cell px-6 py-4">{product.price} ₽</td>
      <td className="px-6 py-4">
        <div className="flex border items-center space-x-2">
          <button onClick={handleDecrement} className="p-1   bg-gray-300 border-r-2 pr-6 hover:bg-gray-100">
            −
          </button>
          <input
            type="text"
            value={product.quantity}
            onChange={handleQuantityInput}
            onBlur={() => {
              if (isNaN(product.quantity) || product.quantity < 1) {
                onQuantityChange(product.id, 1);
              }
            }}
            className="w-12 text-center  rounded"
          />
          <button onClick={handleIncrement} className="p-1  bg-gray-300 border-l-2 text-center flex justify-center pl-6  hover:bg-gray-100">
            +
          </button>
        </div>
      </td>
      <td className="px-6 py-4">{totalPrice} ₽</td>
      <td className="px-6 py-4">
        <button onClick={() => onDelete(product.id)} className="text-red-600 hover:text-red-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

        </button>
      </td>
    </tr>
  );
}

export default ShoppingCartTable;
