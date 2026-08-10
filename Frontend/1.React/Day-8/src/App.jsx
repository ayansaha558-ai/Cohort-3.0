import React, { useState } from "react";
import Nav from "./Components/Nav";
import Productcards from "./Components/Productcards";
import Products from "./Components/Products";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  let deleteProduct=(id)=>{
    let filter_arr=product.filter(item=>item.id!=id);

    setProduct(filter_arr);
    localStorage.setItem("products",JSON.stringify(filter_arr));
  }

  const [updateData, setUpdateData] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-amber-50">
      <Nav setToggle={setToggle} />

      <div className="px-6 py-10">
        {toggle && (
          <div className="flex justify-center mb-10">
            <Productcards updateData={updateData}  setProduct={setProduct} product={product} setToggle={setToggle}/>
          </div>
        )}

        <div className="w-full flex gap-4">
          {
            product.map((item)=>(
              <Products setToggle={setToggle} item={item} setUpdateData={setUpdateData} id={item.id} key={item.id} deleteProduct={deleteProduct}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;