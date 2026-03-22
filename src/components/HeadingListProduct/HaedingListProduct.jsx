import MainLayout from "@components/Layout/Layout.jsx";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer.jsx";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner.jsx";
import ProductItem from "@components/ProductItem/ProductItem.jsx";
function HeadingListProduct({ data }) {
  //   const targetDate = "2025-11-01T00:00:00";
  const { container, containerItem } = styles;

  return (
    <MainLayout>
      {/* <CountdownTimer targetDate={targetDate} /> */}
      <div className={container}>
        <CountdownBanner />

        <div className={containerItem}>
          {
            data.map((item) => (
              <ProductItem key={item.id}
                src={item.images[0]}
                prevSrc={item.images[1]}
                name={item.name}
                price={item.price}
              />
            ))
          }
        </div>
      </div>
    </MainLayout>
  );


}

export default HeadingListProduct;
