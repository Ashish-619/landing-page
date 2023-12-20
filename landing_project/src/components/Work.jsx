import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Indulge in personalized perfection with our 'Pick Meals' option — your passport to a customized culinary journey",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your own rhythm. Customize your dining frequency for a personalized and hassle-free experience.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Swift and seamless, our fast deliveries ensure your culinary cravings are met promptly, bringing the restaurant experience directly to your doorstep.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Embark on a seamless culinary journey with our user-friendly process.
          Simply browse our menu, customize your order, proceed to a secure
          checkout, and track your delivery in real-time. Effortless dining is
          just a few clicks away.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>  {/* Unique key for every title, title name is itself unique*/}
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
