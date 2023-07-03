import { useLoaderData } from "react-router-dom"
import { Banner } from "../components/Banner"
import { Product } from "../components/Product.jsx"

export const Home = () => {

  /* const [products, setProducts] = useState([]); */
  const {data} = useLoaderData();
  /* useEffect(() => {
    setProducts(data);
  }, []); */

  return (
    <>
      <Banner/>
      <Product products = {data}/>
    </>
  )
}
