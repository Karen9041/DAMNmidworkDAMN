import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList2";
import sofaA from "../json/SofaA.json";
import sofaB from "../json/SofaB.json";

const { Header, Content, Footer } = Layout;

function Sofa() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Sofa" />
      </Header>
      <Content className="layout-content">
        <h2 className="subtitle"><strong className="strong">|</strong> 皮沙發</h2>
        <ProductList products={sofaA} />
        <h2 className="HM-More" >查看更多</h2>
        <h2 className="subtitle"><strong className="strong">|</strong> 布沙發</h2>
        <ProductList products={sofaB} />
        <h2 className="HM-More" >查看更多</h2>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Sofa;
