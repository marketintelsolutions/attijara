import React from "react";
import { services } from "../../utils/services";
import ServiceLeft from "./ServiceLeft";
import ServiceRight from "./ServiceRight";

const SectionTwo = () => {
  return (
    <div className="services-section-two">
      <div className="content">
        {services.map((service, index) => {
          if (index % 2 !== 0) return <ServiceRight {...service} />;

          return <ServiceLeft {...service} />;
        })}
      </div>
    </div>
  );
};

export default SectionTwo;
