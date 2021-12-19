import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {

   const { data, isFetching } = useGetCryptoQuery();

   console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="20" /> </Col>
                <Col span={12}><Statistic title="Total Market Cap" value="20" /> </Col>
                <Col span={12}><Statistic title="Total Exchanges" value="20" /> </Col>
                <Col span={12}><Statistic title="Total Markets" value="20" /> </Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="20" /> </Col>
      </Row>
    </>
  );
};

export default Homepage;
