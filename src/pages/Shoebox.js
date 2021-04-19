import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList2";
import shoebox from "../json/Shoebox.json"

const { Header, Content, Footer } = Layout;

function Shoebox() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Shoebox" />
      </Header>
      <Content className="layout-content">
        <ProductList products={shoebox} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Shoebox;
