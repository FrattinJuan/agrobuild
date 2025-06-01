"use client";
import { Row, Col, List, Typography } from "antd";
import {
  EnvironmentOutlined,
  CopyrightOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import logo from "../../../public/img/agrobuild-texto.png";
import Link from "next/link";

export default function FooterBar() {
  const data = [
    {
      title:
        "Córdoba, Argentina",
      icon: <EnvironmentOutlined />,
      link: "https://www.google.com.ar/maps/place/C%C3%B3rdoba+Province/@-32.2228173,-66.4121489,7z/data=!3m1!4b1!4m15!1m8!3m7!1s0x9432985f478f5b69:0xb0a24f9a5366b092!2zQ8OzcmRvYmEsIEPDs3Jkb2JhIFByb3ZpbmNl!3b1!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy!3m5!1s0x942cd4a109dac635:0xe72d300f810e899e!8m2!3d-32.2968402!4d-63.580611!16zL20vMDF5NGZi?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "+54 9 351 326 7517",
      icon: <PhoneOutlined />,
      link: "https://api.whatsapp.com/send?phone=5493513267517&text=Hola,%20Federico%20quisiera%20hacer%20una%20consulta%20...",
    },
    {
      title: "+54 9 351 528 2498",
      icon: <PhoneOutlined />,
      link: "https://api.whatsapp.com/send?phone=3515282498&text=Hola,%20Nicolas%20quisiera%20hacer%20una%20consulta%20...",
    },
    {
      title: "info@agrobuild.com.ar",
      icon: <MailOutlined />,
      link: "https://agrobuild.com.ar",
    },
  ];
  return (
    <>
      <Row className="footerBar">
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Image
              alt="Agrobuild"
              src={logo}
              width={250}
              height={100}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <List
            dataSource={data}
            style={{ textAlign: "left", color: "#460305!important" }}
            renderItem={(item) => (
              <Link href={item.link}>
                <List.Item style={{ color: "#460305" }}>
                  {item.icon} {` ` + item.title}
                </List.Item>
              </Link>
            )}
          ></List>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Paragraph>
            <Typography.Text strong>
              <CopyrightOutlined />
              {` 2025 AGROBUILD.`}
            </Typography.Text>
            <br />
            <Typography.Text>{` Todos los derechos reservados. `}</Typography.Text>
            <br />
            <Link href="https://www.linkedin.com/in/juan-frattin/">
              <Typography.Text keyboard strong>
                Desarrollado por Frattin Studio
              </Typography.Text>
            </Link>
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
}
