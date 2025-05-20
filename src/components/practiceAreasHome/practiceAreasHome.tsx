import { Button, Col, Row, Typography } from "antd";
import { StarFilled, InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
import "./practiceAreasHome.scss";
import Link from "next/link";

const { Title, Text, Paragraph } = Typography;
export default function PracticeAreas() {
  return (
    <>
      <Row className="banner">
        <Col span={24}>
          <Title className="bannerTitle" level={2}>
            Servicios
          </Title>
        </Col>
        <Col style={{ textAlign: "justify" }} span={18} offset={3}>
          <Col span={24}>
          <Text className="bannerText">
            En AGROBUILD, ofrecemos una amplia gama de servicios legales
            diseñados para satisfacer las necesidades de cada cliente. Nuestro
            enfoque innovador y personalizado garantiza soluciones efectivas que
            protegen y promueven los intereses de nuestros clientes.
            </Text>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <Link href={"/practiceAreas"}>
              <Button type="default" size="large" icon={<InfoCircleOutlined />}>
                Más información 
              </Button>
            </Link>
          </Col>
        </Col>
      </Row>
    </>
  );
}
