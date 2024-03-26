import "../style/banniere.css";
export function Banner({ image, title }) {
  return (
    <div className="banner-container">
      <div className="filter"></div>
      {image && <img src={image} alt="banner" />}

      {title && <p>{title}</p>}
    </div>
  );
}

export default Banner;
