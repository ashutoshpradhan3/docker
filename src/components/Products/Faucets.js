// src/components/Products/Prod1.js
import React from 'react';
import '../../styles/CardPage.css'; // Ensure the correct path
import fauc1 from '../../ImagesProduct/fauc1.png';
import fauc2 from '../../ImagesProduct/fauc2.png';
import fauc3 from '../../ImagesProduct/fauc3.png';
import fauc4 from '../../ImagesProduct/fauc4.png';
import fauc5 from '../../ImagesProduct/fauc5.png';
import fauc6 from '../../ImagesProduct/fauc6.png';

function Prod1() {
  const products = [
    { id: 1, name: 'Single Lever Basin Mixer - Chrome', description: 'Code : FLP-CHR-5001BPM', image: fauc1, price: 'MRP : ₹ 4,000.00' },
    { id: 2, name: 'Single Lever Basin Mixer', description: 'Code : FLR-CHR-5001B', image: fauc2, price: 'MRP : ₹ 3,700.00' },
    { id: 3, name: 'Exposed Part Kit of Single Lever Basin Mixer Wall Mounted - Chrome', description: 'Code : OPP-CHR-15233NKPM', image: fauc3, price: 'MRP : ₹ 3,900.00' },
    { id: 4, name: 'Exposed Part Kit of Single Lever Basin Mixer', description: 'Code : ARI-CHR-39233NK', image: fauc4, price: 'MRP : ₹ 3,900.00' },
    { id: 5, name: 'Exposed Part Kit of Single Lever Basin Mixer', description: 'Code : FUS-CHR-29233NK', image: fauc5, price: 'MRP : ₹ 3,300.00' },
    { id: 6, name: 'Exposed Part Kit of Single Lever Basin Mixer', description: 'Code : SOL-CHR-6231NK', image: fauc6, price: 'MRP : ₹ 3,250.00' },
  ];

  return (
    <div className="card-page">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Prod1;
