import React from "react";
import Slider from "react-slick";
import "../styles/Models.scss";
import { useNavigate } from "react-router-dom";

const Models = ({ images }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: determineSlidesToShow(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function determineSlidesToShow() {
    if (window.innerWidth >= 1200) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  React.useEffect(() => {
    function handleResize() {
      settings.slidesToShow = determineSlidesToShow();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const seeModel = (data) => {
    navigate(`/model-description/${data.model}`);
  };

  return (
    <div className="slider">
      <h2>Models</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            onClick={() => seeModel(image)}
          >
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <h3>{image.model}</h3>
            <p>{image.description}</p>
            <div className="carousel-buttons">
              <button>View Model Details</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#9e9e9e",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        textAlign: "center",
        lineHeight: "35px",
      }}
      onClick={onClick}
    >
      <i
        className="fa fa-chevron-right"
        style={{ color: "#fff", fontSize: "20px" }}
      ></i>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#9e9e9e",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        textAlign: "center",
        lineHeight: "35px",
      }}
      onClick={onClick}
    >
      <i
        className="fa fa-chevron-left"
        style={{ color: "#fff", fontSize: "20px" }}
      ></i>
    </div>
  );
};

export default Models;
