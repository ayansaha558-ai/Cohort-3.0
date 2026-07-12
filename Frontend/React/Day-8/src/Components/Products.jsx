import React from "react";

const Products = ({setToggle,setUpdateData, item, id ,deleteProduct}) => {
  return (
    <div className="flex flex-col w-64 rounded-2xl border border-slate-700 bg-slate-800 p-4 shadow-lg">
      <img
        className="w-60 h-40 rounded-xl"
        src={item.image}
        alt="Product"
      />

      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-semibold text-slate-100">{item.name}</h3>

        <p className="text-sm text-slate-400">{item.email}</p>

        <p className="text-sm text-slate-400">{item.mobile}</p>
      </div>

      <div className="mt-5 flex gap-3">
        <button onClick={()=>{
          setUpdateData(item);
          setToggle(prev=>!prev)
        }} className="flex-1 rounded-lg bg-amber-500 py-2 font-medium text-black hover:bg-amber-400">
          Edit
        </button>

        <button onClick={()=>deleteProduct(id)} className="flex-1 rounded-lg bg-red-600 py-2 font-medium text-white hover:bg-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Products;
