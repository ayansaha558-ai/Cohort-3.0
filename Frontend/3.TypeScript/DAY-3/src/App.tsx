import axios from 'axios'
import React, { useEffect,useState } from 'react'
import type {Product} from "./types"
import ProductCard from './components/ProductCard'

type Props = {}

const App = (props: Props) => {
const [products, setProducts] = useState<Product[]>([])

  let getData=async()=>{
    let res=await axios.get("https://fakestoreapi.com/products")
    console.log(res);
    setProducts(res.data)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
  )
}

export default App