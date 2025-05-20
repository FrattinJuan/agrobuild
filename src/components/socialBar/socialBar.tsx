import { Button, Col, Row,Typography } from "antd";
import {
  XOutlined,
  InstagramOutlined,
  MailOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  LineOutlined
  
} from "@ant-design/icons";
import React from "react";
import "./socialBar.scss";
import Link from "next/link";

export default function SocialBar() {
  return (
    <>
      <Row className="socialBar">
        <Col span={24} style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <Button
            className="socialBarButton"
            shape="circle"
            size="large"
            icon={<XOutlined />}
          /> */}
          {/* <Link href={"https://www.instagram.com/cuestaspatino/"}>
            <Button
              className="socialBarButton"
              shape="circle"
              size="large"
              icon={<InstagramOutlined />}
            />
          </Link>
          <Link href={"https://www.linkedin.com/company/cuestaspatino/"}>
            <Button
              className="socialBarButton"
              shape="circle"
              size="large"
              icon={<LinkedinOutlined />}
            />
          </Link>
          <Link
            href={
              "https://api.whatsapp.com/send?phone=5493513086599&text=Hola,%20quisiera%20hacer%20una%20consulta%20..."
            }
          >
            <Button
              className="socialBarButton"
              shape="circle"
              size="large"
              icon={<WhatsAppOutlined />}
            />
          </Link>
            <Link href={"mailto:info@cuestaspatino.com.ar"}>
          <Button
            className="socialBarButton"
            shape="circle"
            size="large"
            icon={<MailOutlined />}
          />
          </Link> */}
          <Typography.Title level={4} className="socialBarTitle"><LineOutlined /> Transformando la Infraestructura del Campo <LineOutlined /></Typography.Title>
        </Col>
      </Row>
    </>
  );
}
