import { ProductCard } from "./ProductCard"


export const Product = ({products}) => {

  return (
    <div className="py-10">
      <div className="flex flex-col items-center  gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">shopping everyday</h1>
        <span className="w-20 h-[3px] bg-black"/>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corrupti rerum quam facilis laborum molestiae illo,
          adipisci deleniti. Culpa, fugiat! Explicabo itaque quam rerum quisquam laborum. Quisquam illo rem eveniet.
        </p>
      </div>
      <div className="max-w-screen-2xl mx-auto py-10 grid grid-cols-4 gap-10">
        {
          products.map((product) => (<ProductCard key={product.id} product={product}/>) )
        }
      </div>
    </div>
  )
}
