import Banner from "@components/Banner/Banner.jsx";
import Header from "@components/Header/Header.jsx";
import styles from "./styles.module.scss";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling.jsx";
import Info from "@components/Info/Info.jsx";
import HeadingListProdouct from "@components/HeadingListProduct/HaedingListProduct.jsx";

function HomePage() {
  const { container } = styles;
  return (
    <>
      <div>
        <div className={container}>
          <Header />
          <Banner />
          <Info />
          <AdvanceHeadling />
          <HeadingListProdouct />
        </div>
      </div>
    </>
  );
}

export default HomePage;
