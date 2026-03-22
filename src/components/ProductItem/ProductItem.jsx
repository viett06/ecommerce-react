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
          src={src}
          alt=''
        />
        <img
          src={prevSrc}
          alt=''
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
      <div className={title}>{name}</div>
      <div className={price1}>${price}</div>
    </div>
  );
}

export default ProductItem;
