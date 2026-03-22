import Banner from "@components/Banner/Banner.jsx";
import Header from "@components/Header/Header.jsx";
import styles from "./styles.module.scss";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling.jsx";
import Info from "@components/Info/Info.jsx";
import HeadingListProdouct from "@components/HeadingListProduct/HaedingListProduct.jsx";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productsService.js";
import PopularProduct from "../PopularProduct/PopularProduct";
import SaleHomepage from "../SaleHomePage/SaleHomePage";

function HomePage() {

const [listProducts, setListProducts] = useState([]);

  const { container } = styles;
  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res.contents);
    });
  }, []);

  

  return (
    <>
      <div>
        <div className={container}>
          <Header />
          <Banner />
          <Info />
          <AdvanceHeadling />
          <HeadingListProdouct data= {listProducts.slice(0,2)}/>
          <PopularProduct data = {listProducts.slice(2,listProducts.length)}/>
          <SaleHomepage />
          <div
            style={{
              height: "200px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
