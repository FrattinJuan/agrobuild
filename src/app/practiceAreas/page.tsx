"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Col, Collapse, Row, Typography, Divider } from "antd";
import {
  FormOutlined,
  HighlightOutlined,
  ToolOutlined,
  AreaChartOutlined,
  AuditOutlined,
  CommentOutlined,
  FileDoneOutlined,
  PauseCircleOutlined,
  FundViewOutlined,
  SettingOutlined,
  BranchesOutlined,
  NodeIndexOutlined,
  FormatPainterOutlined,
  ApiOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import SocialBar from "@/components/socialBar/socialBar";
import "./practiceAreas.scss";

export default function Page() {
  const pathname = usePathname();
  const items = [
    {
      key: "1",
      label: (
        <>
          <PauseCircleOutlined className="practiceAreasIcon" />
          {" Sistemas de Criaderos"}
        </>
      ),
      children: (
        <p>
          Montaje y mantenimiento de sistemas para criaderos de cerdos y pollos, diseñados para optimizar la producción y garantizar su funcionamiento eficiente.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <FundViewOutlined className="practiceAreasIcon" />
          {" Plantas de Acopio"}
        </>
      ),
      children: (
        <p>
          Mantenimiento preventivo y predictivo de motores, instalaciones eléctricas y tableros en plantas de granos.
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <BranchesOutlined className="practiceAreasIcon" />
          {" Infraestructura Hidráulica"}
        </>
      ),
      children: (
        <p>
          Montaje y mantenimiento de bombas y circuitos de agua.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <>
          <NodeIndexOutlined className="practiceAreasIcon" />
          {" Líneas de Aire Comprimido"}
        </>
      ),
      children: (
        <p>
          Diseño e instalación para optimizar procesos industriales.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <>
          <FormatPainterOutlined className="practiceAreasIcon" />
          {" Pintura Industrial"}
        </>
      ),
      children: (
        <p>
          Aplicación de recubrimientos especializados en techos de chapa y silos para proteger contra la corrosión, bajar temperaturas, impermeabilizar, mejorar la durabilidad y garantizar un acabado profesional adaptado a las exigencias del entorno agroindustrial.
        </p>
      ),
    },
    {
      key: "6",
      label: (
        <>
          <ApiOutlined className="practiceAreasIcon" />
          {" Mediciones Eléctricas"}
        </>
      ),
      children: (
        <p>
          Diagnósticos precisos para garantizar seguridad y eficiencia.
        </p>
      ),
    },
    {
      key: "7",
      label: (
        <>
          <ToolOutlined className="practiceAreasIcon" />
          {" Estructuras Metálicas"}
        </>
      ),
      children: (
        <p>
          Montaje de soluciones estructurales adaptadas a las necesidades del sector agroindustrial.
        </p>
      ),
    },
    {
      key: "8",
      label: (
        <>
          <BarChartOutlined className="practiceAreasIcon" />
          {" Servicio de Mantenimiento"}
        </>
      ),
      children: (
        <p>
          Contratos de mantenimiento preventivos y predictivos para garantizar la continuidad operativa en plantas de acopio y criaderos.
        </p>
      ),
    },
  ];
  return (
    <>
      <Row className="practiceAreasRow">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Typography.Title level={1} className="practiceAreasTitle">
            Nuestros Servicios
          </Typography.Title>
        </Col>
        <Col span={14} offset={5}>
          <Typography.Title level={5} className="practiceAreasSubtitle">
            En AgroBuild, entendemos que cada proyecto es único, por eso trabajamos codo a codo con nuestros clientes, asegurando resultados que impulsan su crecimiento y eficiencia.
          </Typography.Title>
        </Col>
      </Row>

      <Row>
        <Col span={20} offset={2} style={{ marginBottom: "2%" }}>
          <Divider />
        </Col>
      </Row>
      <Row className="practiceAreasRow2">
        <Col span={14} offset={5}>
          <Collapse
            className="practiceAreasCollapse"
            expandIconPosition="end"
            bordered={false}
            size="large"
            accordion
            items={items}
          />
        </Col>
      </Row>
      <SocialBar />
    </>
  );
}
