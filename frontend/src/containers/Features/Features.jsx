import React from "react";
import IconChat from "/img/icon-chat.webp";
import IconMoney from "/img/icon-money.webp";
import IconSecurity from "/img/icon-security.webp";

const Features = () => {
  const data = [
    {
      id: 1,
      img: IconChat,
      subtitle: "You are our #1 priority",
      paragraph:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: 2,
      img: IconMoney,
      subtitle: "More savings means higher rates",
      paragraph:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: 3,
      img: IconSecurity,
      subtitle: "Security you can trust",
      paragraph:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  const feat = data.map((item) => {
    return (
      <div key={item.id} className="features__bloc">
        <img src={item.img} className="features__img" />
        <h2 className="features__subtitle">{item.subtitle}</h2>
        <p className="features__paragraph">{item.paragraph}</p>
      </div>
    );
  });
  
  return (
    <>
      <h1 className="features__title">Features</h1>
      <section className="features">{feat}</section>
    </>
  );
};

export default Features;
