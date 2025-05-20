import { ReactNode } from "react";
import { Layout, Menu } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";

// const {  Content, Footer } = Layout;


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
        {children}
    </Layout>
  );
}
