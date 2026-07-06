import React from 'react'

const ProductsCard = ({ product,del }) => {
  return (
    <div className='bg-slate-50 border border-slate-200 rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-4 w-52 flex flex-col items-center gap-3'>

      <img
        className='w-40 h-44 object-contain'
        src={product.image}
        alt=""
      />

      <h5 className='text-lg font-bold text-slate-800 tracking-tight text-center'>
        {product.title.substring(0, 25)}...
      </h5>

      <p className='text-sm font-medium text-slate-500 uppercase tracking-wide'>
        {product.category}
      </p>

      <p className='text-2xl font-bold text-emerald-600'>
        ${product.price}
      </p>

      <button
        className='bg-red-500 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-600 hover:shadow-lg active:scale-95 transition-all duration-200'
      onClick={()=>del(product.id)}>
        Delete
      </button>

    </div>
  )
}

export default ProductsCard