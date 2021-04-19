import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import Slidephoto from '../components/Slidephoto';


const { Header, Content, Footer } = Layout;



function Home() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content">
        <Slidephoto/>
        <ProductList products={products}/>
        <h2 className="HM-More" >查看更多</h2>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Home;
