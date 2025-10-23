import styles from "../styles.module.scss";
function InfoCard({ title, des, src }) {
  const { containerCard, containerContent, titles, dess } = styles;
  return (
    <>
      <div className={containerCard}>
        <img with={40} height={41} src={src} alt={src} />
        <div className={containerContent}>
          <div className={titles}>{title}</div>
          <div className={dess}>{des}</div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
