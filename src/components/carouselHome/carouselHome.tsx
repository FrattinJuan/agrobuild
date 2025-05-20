import React from "react";
import { Carousel, Col } from "antd";
import Tribu from "../../../public/img/tribunales1.jpg";
import Logo from "../../../public/img/agrobuild-redondo.png";
import Home1 from "../../../public/img/home1.jpg";
import Home2 from "../../../public/img/home2.jpg";
import Home3 from "../../../public/img/home3.jpg";  
import Home4 from "../../../public/img/home4.jpg";
import Study from '../../../public/img/estudio1.jpg';
import Tribu2 from '../../../public/img/tribunales4.jpg';
import Tribu3 from '../../../public/img/tribunales5.jpg';
import Study2 from '../../../public/img/estudio2.jpg';
import Silos from '../../../public/img/home-silos.jpg';
import Image from "next/image";
import "./carouselHome.scss";

export default function CarouselHome() {
  return (
    <Carousel arrows autoplay autoplaySpeed={10000}>
      <div className="carouselHome">
        <Image
          src={Home1}
          alt="Agrobuild"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="Agrobuild Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="carouselHome">
        <Image
          src={Home2}
          alt="Agrobuild"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="Agrobuild Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="carouselHome">
        <Image
          src={Home3}
          alt="Agrobuild"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="Agrobuild Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="carouselHome">
        <Image
          src={Home4}
          alt="Agrobuild"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="Agrobuild Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      {/* <div className="carouselHome">
        <Image
          src={Tribu3}
          alt="Agrobuild"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="Agrobuild Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div> */}
    </Carousel>
  );
}
