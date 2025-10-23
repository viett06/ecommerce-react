import MainLayout from "@components/Layout/Layout.jsx";
import styles from "./styles.module.scss";
import { dataInfo } from "./constants.js";
import InfoCard from "./InfoCard/InfoCard.jsx";
function Info() {
  const { container } = styles;
  return (
    <>
      <div>
        <MainLayout>
          <div className={container}>
            {dataInfo.map((item) => {
              return (
                <InfoCard
                  title={item.title}
                  des={item.description}
                  src={item.src}
                />
              );
            })}
          </div>
        </MainLayout>
      </div>
    </>
  );
}

export default Info;
