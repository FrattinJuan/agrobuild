"use client";

import { usePathname } from "next/navigation";
import SocialBar from "@/components/socialBar/socialBar";
import { Col, Divider, Row, Typography } from "antd";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import "./contact.scss";
import ContactForm from "@/components/contactForm/contactForm";
export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <Row className="contactRow">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Typography.Title level={1} className="contactTitle">
            Contacto
          </Typography.Title>
        </Col>
        <Col span={14} offset={5}>
          <Typography.Title level={5} className="contactSubtitle">
            Si tienes alguna consulta o necesitas ayuda, no dudes en
            contactarnos.
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2} >
          <Divider />
        </Col>
      </Row>
      <Row className="contactRow2">
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 24,
          }}
        >
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Typography.Title className="contactTitle3" level={3}>
               Envíanos tu consulta
            </Typography.Title>
          </Col>
          <Col span={20} offset={2}>
            <ContactForm />
          </Col>
        </Col>
      </Row>
      <SocialBar />
    </>
  );
}
