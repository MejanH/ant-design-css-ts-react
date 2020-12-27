import React from "react";
import { Col, Layout, Menu, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import "./App.less";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

function App() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#fff" }}>
        <Row>
          <Col span={8}>
            <div style={{ fontSize: "28px", fontWeight: 600 }}>Header</div>
          </Col>
          <Col span={8} offset={8}>
            <Menu mode="horizontal" style={{ fontWeight: 500, float: "right" }}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Pricing</Menu.Item>
              <Menu.Item key="3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MejanH/ant-design-css-ts-react"
                >
                  Github
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content className="content">
        <Title>
          Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim
          sodales ut eu sem integer. Purus non enim praesent elementum facilisis
          leo vel fringilla est. Ullamcorper malesuada proin libero nunc.
          Ultricies tristique nulla aliquet enim tortor at auctor. Velit aliquet
          sagittis id consectetur purus. Est pellentesque elit ullamcorper
          dignissim cras tincidunt lobortis. Amet consectetur adipiscing elit
          pellentesque. Cursus vitae congue mauris rhoncus aenean vel. Libero
          nunc consequat interdum varius. Tortor id aliquet lectus proin nibh
          nisl condimentum id. Nibh tellus molestie nunc non blandit massa.
          Porta nibh venenatis cras sed felis eget. Nibh sit amet commodo nulla
          facilisi. Vel elit scelerisque mauris pellentesque. Convallis aenean
          et tortor at risus viverra adipiscing at in. Interdum velit laoreet id
          donec.{" "}
        </Text>
        <Title level={3}>
          Varius duis at consectetur lorem donec. Id semper risus in hendrerit
          gravida rutrum.
        </Title>
        <Text>
          Arcu vitae elementum curabitur vitae nunc. Felis imperdiet proin
          fermentum leo vel orci. Cras tincidunt lobortis feugiat vivamus at
          augue eget arcu. Nec nam aliquam sem et tortor consequat id porta
          nibh. Pellentesque massa placerat duis ultricies lacus sed. Senectus
          et netus et malesuada fames ac turpis egestas. Dignissim suspendisse
          in est ante in nibh mauris. Accumsan tortor posuere ac ut. Leo a diam
          sollicitudin tempor id eu. Tortor consequat id porta nibh venenatis
          cras sed. Risus nec feugiat in fermentum posuere urna nec tincidunt.
          Vel orci porta non pulvinar neque laoreet suspendisse interdum.
          Sagittis nisl rhoncus mattis rhoncus urna. Aliquam purus sit amet
          luctus venenatis lectus magna fringilla. Dictum sit amet justo donec
          enim. Ut sem viverra aliquet eget sit amet. Id consectetur purus ut
          faucibus pulvinar elementum. Dui id ornare arcu odio ut sem nulla
          pharetra. Id consectetur purus ut faucibus pulvinar elementum integer
          enim. Pretium quam vulputate dignissim suspendisse in. Vitae congue eu
          consequat ac felis. At in tellus integer feugiat scelerisque varius
          morbi enim nunc. Adipiscing diam donec adipiscing tristique risus nec
          feugiat in. Aliquam purus sit amet luctus. Tristique risus nec feugiat
          in fermentum posuere. Eu non diam phasellus vestibulum lorem sed
          risus. Velit euismod in pellentesque massa placerat duis ultricies.
          Risus feugiat in ante metus. Quisque id diam vel quam elementum. Vitae
          suscipit tellus mauris a diam maecenas sed enim. Nullam vehicula ipsum
          a arcu cursus. Sed turpis tincidunt id aliquet risus. Ultricies
          tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet
          risus nullam eget felis. Convallis aenean et tortor at risus viverra.
          Tristique et egestas quis ipsum. Nisi scelerisque eu ultrices vitae.
          Id diam maecenas ultricies mi. Ac odio tempor orci dapibus ultrices
          in. Semper eget duis at tellus at urna condimentum. Rhoncus dolor
          purus non enim praesent elementum facilisis. Pretium aenean pharetra
          magna ac placerat vestibulum lectus. Tortor pretium viverra
          suspendisse potenti nullam. In tellus integer feugiat scelerisque
          varius morbi. Sapien nec sagittis aliquam malesuada bibendum arcu.
          Metus dictum at tempor commodo. Tortor at risus viverra adipiscing at
          in tellus. Arcu dui vivamus arcu felis bibendum ut tristique et. Elit
          ut aliquam purus sit. Lorem ipsum dolor sit amet consectetur
          adipiscing elit pellentesque. Viverra suspendisse potenti nullam ac
          tortor vitae. Duis ultricies lacus sed turpis tincidunt id. Integer
          enim neque volutpat ac tincidunt vitae semper quis. Quam lacus
          suspendisse faucibus interdum posuere. Eget mauris pharetra et
          ultrices neque ornare aenean euismod. Ut tristique et egestas quis
          ipsum. Auctor elit sed vulputate mi sit amet mauris commodo quis.
          Aliquam etiam erat velit scelerisque in. Neque egestas congue quisque
          egestas diam in arcu cursus. Elit at imperdiet dui accumsan sit. Nisl
          nunc mi ipsum faucibus vitae. Turpis in eu mi bibendum neque egestas.
          Vel eros donec ac odio tempor orci. Nunc mattis enim ut tellus
          elementum sagittis vitae et. Morbi tempus iaculis urna id. Malesuada
          proin libero nunc consequat interdum varius sit.
        </Text>
      </Content>
      <Footer>
        <Title
          level={4}
          style={{
            padding: "3rem 5rem",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          Some Footer
        </Title>
      </Footer>
    </Layout>
  );
}

export default App;
