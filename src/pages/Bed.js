import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList2 from "../components/ProductList2";
import bed from "../json/Bed.json";

const { Header, Content, Footer } = Layout;

function Bed() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Home Accessories" />
      </Header>
      <Content className="layout-content">
          <ProductList2 products={bed} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Bed;
