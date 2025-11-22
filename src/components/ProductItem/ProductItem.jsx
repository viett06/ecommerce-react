import styles from "./styles.module.scss";
import cart from "@icons/svgs/cart.svg";
import reload from "@icons/svgs/reload.svg";
import heart from "@icons/svgs/heart.svg";
function ProductItem({ src, prevSrc, name, price }) {
  const { boxImg, showImgWhenHover, showFncWhenhover, boxIcon, title, price1 } =
    styles;
  return (
    <div>
      <div className={boxImg}>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg"
          alt="anh"
        />
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg"
          alt="anh"
          className={showImgWhenHover}
        />
        <div className={showFncWhenhover}>
          <div className={boxIcon}>
            <img src={cart} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={heart} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={reload} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
      <div className={title}>10K Yellow Gold</div>
      <div className={price1}>$99.99</div>
    </div>
  );
}

export default ProductItem;
