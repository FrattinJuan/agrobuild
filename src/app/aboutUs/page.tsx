"use client";
import { Card, Col, Divider, Row, Typography } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import legalStudy from "../../../public/img/legalStudyHome.png";
import "./aboutUs.scss";
import SocialBar from "@/components/socialBar/socialBar";

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <Row className="aboutUsRow">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Typography.Title level={1} className="aboutUsTitle">
            Sobre Nosotros
          </Typography.Title>
        </Col>
        <Col span={14} offset={5}>
          <Typography.Title level={5} className="aboutUsSubtitle">
            Nuestra cultura de trabajo se basa en la calidad, el compromiso y la
            responsabilidad. Ofrecemos una atención personalizada altamente
            eficaz a través de un equipo que aborda cada consulta con la máxima
            seriedad y profesionalismo.
            <br /> La integración de perfiles de investigación, análisis
            jurisprudencial y experiencia práctica dota a nuestro estudio de una
            solvencia técnica excepcional, convirtiéndose en nuestro principal
            factor diferencial.
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2} style={{ marginBottom: "2%" }}>
          <Divider />
        </Col>
      </Row>
      <Row  className="aboutUsRow2">
        <Col span={20} offset={2}>
          <Card className="aboutUsCard" bordered={false}>
            <Card.Grid hoverable={false} style={{ width: "75%" }}>
              <Typography.Title level={3} className="aboutUsCardTitle">
                Guadalupe C. Cuestas
              </Typography.Title>
              <Typography.Text className="aboutUsCardText">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Netus
                ornare natoque, eleifend vivamus diam faucibus. Sollicitudin
                urna urna lectus donec mauris. Eget vitae montes ligula sagittis
                eros habitant et dictumst tristique. Erat in pulvinar
                condimentum feugiat eu phasellus. Vitae class mollis dolor id
                parturient; rhoncus turpis. Facilisi proin nec est justo mattis
                leo fusce tincidunt. Praesent sapien suscipit integer habitant
                enim. Leo tellus tristique ornare ornare per elementum fames.
                <br />
                Nisl nisl sem sollicitudin donec platea pulvinar nunc torquent.
                Felis magna sollicitudin ultrices habitasse nascetur gravida
                tempor finibus efficitur. Dis facilisi eleifend hac elementum
                morbi volutpat. Nec metus curae tempor dignissim eget hac
                faucibus ac nisi. Turpis aliquet non turpis metus efficitur
                fermentum sodales habitasse. Tempus vehicula class turpis
                pellentesque nunc. Tempus class velit eros per lobortis
                penatibus himenaeos parturient. Senectus justo ac, ut risus
                maximus neque nam in. Senectus sollicitudin per condimentum
                commodo class tempus ipsum. Consectetur nec magnis at diam
                vulputate senectus.
              </Typography.Text>
            </Card.Grid>
            <Card.Grid hoverable={false} style={{ width: "25%" }}>
              <Image src={legalStudy} alt="logo" width={600} height={800} />
            </Card.Grid>
          </Card>
        </Col>
      </Row>
      <Row className="aboutUsRow2">
        <Col span={20} offset={2} >
          <Card className="aboutUsCard" bordered={false}>
            <Card.Grid hoverable={false} style={{ width: "25%" }}>
              <Image src={legalStudy} alt="logo" width={600} height={800} />
            </Card.Grid>
            <Card.Grid hoverable={false} style={{ width: "75%" }}>
              <Typography.Title level={3} className="aboutUsCardTitle">
                Joaquín Patiño
              </Typography.Title>
              <Typography.Text className="aboutUsCardText">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Netus
                ornare natoque, eleifend vivamus diam faucibus. Sollicitudin
                urna urna lectus donec mauris. Eget vitae montes ligula sagittis
                eros habitant et dictumst tristique. Erat in pulvinar
                condimentum feugiat eu phasellus. Vitae class mollis dolor id
                parturient; rhoncus turpis. Facilisi proin nec est justo mattis
                leo fusce tincidunt. Praesent sapien suscipit integer habitant
                enim. Leo tellus tristique ornare ornare per elementum fames.
                <br />
                Nisl nisl sem sollicitudin donec platea pulvinar nunc torquent.
                Felis magna sollicitudin ultrices habitasse nascetur gravida
                tempor finibus efficitur. Dis facilisi eleifend hac elementum
                morbi volutpat. Nec metus curae tempor dignissim eget hac
                faucibus ac nisi. Turpis aliquet non turpis metus efficitur
                fermentum sodales habitasse. Tempus vehicula class turpis
                pellentesque nunc. Tempus class velit eros per lobortis
                penatibus himenaeos parturient. Senectus justo ac, ut risus
                maximus neque nam in. Senectus sollicitudin per condimentum
                commodo class tempus ipsum. Consectetur nec magnis at diam
                vulputate senectus.
              </Typography.Text>
            </Card.Grid>
          </Card>
        </Col>
      </Row>
      
      
      <SocialBar  />
    </>
  );
}
