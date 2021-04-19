import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList2";
import table from "../json/Table.json"

const { Header, Content, Footer } = Layout;

function Table() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Table" />
      </Header>
      <Content className="layout-content">
        <ProductList products={table} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Table;
