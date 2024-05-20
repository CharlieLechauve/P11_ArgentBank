import React from "react";
import headerImg from "/img/bank-tree.jpeg";

const Hero = () => {
  return (
    <div className="Hero">
      <img
        src={headerImg}
        alt="Pic of a plan growing in money"
        className="Hero__img"
      />
      <div className="Hero__rightBloc">
        <h2 className="Hero__title">
          No fees.
          <br />
          No minimum deposit. <br />
          High interest rates.
        </h2>
        <p className="Hero__txt">
          Open a savings account with <br />
          Argent Bank today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
