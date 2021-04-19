import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList2";
import sofa from "../json/Sofa.json";

const { Header, Content, Footer } = Layout;

function Sofa() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Sofa" />
      </Header>
      <Content className="layout-content">
        <h2 className="subtitle"><strong className="strong">|</strong> 皮沙發</h2>
        <ProductList products={sofa} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Sofa;
