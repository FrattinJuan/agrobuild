import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { BorderOutlined } from "@ant-design/icons";
import Image from "next/image";
import legalStudy from "../../../public/img/estudioHome.jpg";
import "./studioHome.scss";

const { Title, Text, Paragraph } = Typography;

export default function StudioHome() {
  return (
    <>
      <Row>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 18,
            offset: 3,
          }}
        >
          <Card
            // title="Nuestro Estudio"
            hoverable={false}
            bordered={false}
            className="studioHomeCard"
          >
            <Card.Grid className="studioHomeGrid1" hoverable={false}>
              <Row>
                <Col>
                  <Title className="studioHomeTitle" level={3}>
                    Nuestra Empresa
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Paragraph className="studioHomeParagraph">
                    Somos una empresa dedicada a ofrecer soluciones integrales
                    para el sector agroindustrial, combinando innovación y
                    experiencia para optimizar recursos y maximizar la
                    eficiencia de nuestros clientes. Nos especializamos en el
                    diseño, montaje y mantenimiento de sistemas esenciales en
                    plantas de acopio de granos, criaderos del tipo feedlot y
                    otras infraestructuras clave para el agro. <br />Nuestro enfoque
                    está orientado a garantizar un servicio confiable,
                    personalizado y adaptado a las necesidades de cada cliente,
                    construyendo relaciones de largo plazo basadas en la
                    excelencia y la profesionalidad.
                  </Paragraph>
                </Col>
                {/* <Col style={{ marginTop: "28px" }}>
                  <Paragraph className="studioHomeText">
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Asesoramiento Integral:
                    </Text>{" "}
                    Proporcionamos asesoramiento personalizado en diversas áreas
                    del derecho, protegiendo los intereses de nuestros clientes
                    y fomentando su desarrollo.
                    <br />{" "}
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Resolución de Conflictos:
                    </Text>{" "}
                    Nos destacamos en negociaciones y litigios, logrando
                    soluciones eficaces y prontas para nuestros clientes.
                    <br />
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Excelencia y Profesionalismo:
                    </Text>{" "}
                    Nuestro equipo está altamente capacitado y trabaja
                    colaborativamente para superar las expectativas de nuestros
                    clientes.
                    <br />{" "}
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Atención Personalizada:
                    </Text>{" "}
                    Construimos relaciones de confianza a largo plazo,
                    ofreciendo un servicio cercano y altamente profesional.
                    <br />
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Innovación y Tecnología:
                    </Text>{" "}
                    Utilizamos las últimas tecnologías legales para optimizar
                    nuestros procesos y brindar servicios de alta calidad.
                  </Paragraph>
                </Col> */}
              </Row>
            </Card.Grid>
            {/* <Card.Grid className="studioHomeGrid2" hoverable={false}>
              <Image
                src={legalStudy}
                alt="studio"
                style={{ width: "100%", height: "100%" }}
              />
            </Card.Grid> */}
          </Card>
        </Col>
      </Row>
    </>
  );
}
