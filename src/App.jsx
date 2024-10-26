import  { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]); 
useEffect(() => {
  async function callApi() {
    try {
      const response = await axios.get("https://dummyjson.com/products"); 
      setProducts(response.data.products); 
      // console.log(response.data.products); 
    } catch (e) {
      console.log(e);
    }
  }

  
    callApi();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} style={{ marginBottom: "20px" }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} width="150" />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;









//////// second to store a card......................



// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [products, setProducts] = useState("");
//   useEffect(() => {
//   async function callApi() {
//     try {
//       const response = await axios.get("https://dummyjson.com/products"); 
//       setProducts(response.data.products);
//     } catch (e) {
//       console.log(e);
//     }
//   }

 
//     callApi();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className="card" style={{ border: '1px solid black', padding: '20px', width: '300px', borderRadius: '10px' }}>
//               <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//               <h2>{product.title}</h2>
//               <p>{product.description}</p>
//               <p><strong>Price: ${product.price}</strong></p>
//             </div>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;









// import React, { useEffect } from "react";
// import axios from "axios";

// function App() {
//   async function callApi() {
//     try {
//       const response = await axios.get("https://dummyjson.com/products/1");
//      console.log(response.data)
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   useEffect(()=>{
//     callApi()
//   },[])
//   return (
//     <div>
//       <h1> This is a component </h1>
//     </div>
//   );
// }

// export default App;
