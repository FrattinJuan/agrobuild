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
        "Miguel C. del Corro 661 - Piso 1 Of. 3 - C.P. X5000BGO - Córdoba, Argentina",
      icon: <EnvironmentOutlined />,
      link: "https://maps.app.goo.gl/81X9mtqwEpSmzNGx5",
    },
    {
      title: "+54 9 351 308 6599",
      icon: <PhoneOutlined />,
      link: "https://api.whatsapp.com/send?phone=5493513086599&text=Hola,%20quisiera%20hacer%20una%20consulta%20...",
    },
    {
      title: "+54 9 351 747 2345",
      icon: <PhoneOutlined />,
      link: "https://api.whatsapp.com/send?phone=54935174723455&text=Hola,%20quisiera%20hacer%20una%20consulta%20...",
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
