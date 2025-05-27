import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatButton, Layout, Menu} from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { WhatsAppOutlined } from "@ant-design/icons";
import Logos_CuestasPatiño from "../../public/img/agrobuild-oval-text.png";
import Image from "next/image";

import "./globals.css";
import "./layout.scss";
import Link from "next/link";
import FooterBar from "@/components/FooterBar/FooterBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AGROBUILD",
  description: "Transformando la Infraestructura del Campo",
  keywords: ["agro", "study", "practice areas", "contact"], // cambiar keywords
  authors: [{ name: "Juan Frattin" }],
  // themeColor: "#fff",

};
const items = [
  {
    key: "1",
    label: <Link href="/">Inicio</Link>,
  },
  // {
  //   key: "2",
  //   label: <Link href="/aboutUs">Quienes somos</Link>,
  // },
  {
    key: "3",
    label: <Link href="/practiceAreas">Servicios</Link>,
  },
  {
    key: "4",
    label: <Link href="/contact">Contacto</Link>,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              height: 100,
            }}
          >
            <Link href="/">
              <div className="demo-logo">
                <Image
                  alt="logo"
                  width={200}
                  height={200}
                  src={Logos_CuestasPatiño}
                />
              </div>
            </Link>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ flex: 1, minWidth: 0, marginLeft:"2%" }}
              items={items}
            ></Menu>
          </Header>
          <Content>
            {children}
            <Link
              href={
                "https://api.whatsapp.com/send?phone=5493515282498&text=Hola,%20quisiera%20hacer%20una%20consulta%20..."
              }
            >
              <FloatButton
                shape="circle"
                type="default"
                style={{ height: "60px", width: "60px" }}
                tooltip={<div>Mas informacion</div>}
                icon={<WhatsAppOutlined style={{ fontSize: "25px", textAlign: "center", color: "#460305" }}/>}
              />
            </Link>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <FooterBar />
            
          </Footer>
          {/* <Row style={{ backgroundColor: "black", padding: "10px 0 10px 0" }}>
              <Col
                span={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p style={{ color: "white" }}>
                  CuestasPatiño ©2024 Created by <Link href="https://www.linkedin.com/in/juan-frattin/">Juan Frattin</Link>
                </p>
              </Col>
            </Row> */}
        </Layout>
      </body>
    </html>
  );
}
