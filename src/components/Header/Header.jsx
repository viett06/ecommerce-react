import BoxIcon from "./BoxIcons/BoxIcon";
import { dataBoxIcon } from "./constants";
import { dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import logo from "@images/logo-shop.png";
function Header() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
  } = styles;
  return (
    <>
      <div className={container}>
        <div className={containerHeader}>
          <div className={containerBox}>
            <div className={containerBoxIcon}>
              {dataBoxIcon.slice(0, 3).map((item) => {
                return (
                  <BoxIcon key={item.type} type={item.type} href={item.href} />
                );
              })}
            </div>
            <div className={containerMenu}>
              {dataMenu.slice(0, 3).map((item) => {
                return (
                  <Menu
                    key={item.content}
                    content={item.content}
                    href={item.href}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "153px",
                height: "53px",
              }}
            />
          </div>
          <div className={containerBox}>
            <div className={containerMenu}>
              {dataMenu.slice(3, dataMenu.length).map((item) => {
                return (
                  <Menu
                    key={item.content}
                    content={item.content}
                    href={item.href}
                  />
                );
              })}
            </div>
            <div className={containerBoxIcon}>
              {dataBoxIcon.slice(3, dataBoxIcon.length).map((item) => {
                return (
                  <BoxIcon
                    key={item.type}
                    type={item.type}
                    href={item.href}
                    noStyle={true}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
