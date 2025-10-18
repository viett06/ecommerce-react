import styles from "../styles.module.scss";
import facebookIcon from "@icons/svgs/facebook.svg";
import instagramIcon from "@icons/svgs/instagram.svg";
import youtubeIcon from "@icons/svgs/youtube.svg";
import cart from "@icons/svgs/cart.svg";
import reload from "@icons/svgs/reload.svg";
import heart from "@icons/svgs/heart.svg";
function BoxIcon({ type, href, noStyle = false }) {
  const { BoxIcon, NoBoxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case "fa":
        return facebookIcon;
      case "ins":
        return instagramIcon;
      case "ytb":
        return youtubeIcon;
      case "ca":
        return cart;
      case "re":
        return reload;
      case "he":
        return heart;
    }
  };

  return (
    <>
      <div className={!noStyle ? BoxIcon : NoBoxIcon}>
        <img src={handleRenderIcon(type)} alt={type} />
      </div>
    </>
  );
}

export default BoxIcon;
