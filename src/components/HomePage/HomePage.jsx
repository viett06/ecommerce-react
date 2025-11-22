import Banner from "@components/Banner/Banner.jsx";
import Header from "@components/Header/Header.jsx";
import styles from "./styles.module.scss";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling.jsx";
import Info from "@components/Info/Info.jsx";
import HeadingListProdouct from "@components/HeadingListProduct/HaedingListProduct.jsx";
import { useEffect } from "react";
import { getProducts } from "@/apis/productsService.js";

function HomePage() {
  const { container } = styles;
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>
        <div className={container}>
          <Header />
          <Banner />
          <Info />
          <AdvanceHeadling />
          <HeadingListProdouct />
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
