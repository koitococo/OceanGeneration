import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Avatar, Card, Col, Row, Typography, Button, Form, Select, DatePicker, InputNumber } from 'antd';
import Meta from 'antd/es/card/Meta';
import Table from 'antd/lib/table/Table';
import React, { useState } from 'react';

import GraA from '../../../datas/WindDiv/20210301-0.jpg';
import GraB from '../../../datas/WaveTourus/20210301-0.jpg';
import GraC from '../../../datas/WaveDiv/20210301-0.jpg';
import GraD from '../../../datas/Temp/20210301-0.jpg';
import { set } from 'lodash';
const { RangePicker } = DatePicker;

const dataSource = [
  {
    key: '1',
    nameA: '风速',
    valueA: 12,
    unitA: 'm/s',
    nameB: '风向',
    valueB: '(12.1,55.48,12.74)',
    unitB: 'vectory',
  },
  {
    key: '2',
    nameA: '浪高',
    valueA: 12,
    unitA: 'm',
    nameB: '浪向',
    valueB: '(24.10,74.14,5.86)',
    unitB: 'vectory',
  },
  {
    key: '3',
    nameA: '波周期',
    valueA: 12,
    unitA: 's',
    nameB: '温度',
    valueB: 52,
    unitB: 'C',
  },
];

const columns = [
  {
    title: '项1',
    dataIndex: 'nameA',
    key: 'nameA',
  },
  {
    title: '值1',
    dataIndex: 'valueA',
    key: 'valueA',
  },
  {
    title: '单位',
    dataIndex: 'unitA',
    key: 'unitA',
  },
  {
    title: '项2',
    dataIndex: 'nameB',
    key: 'nameB',
  },
  {
    title: '值2',
    dataIndex: 'valueB',
    key: 'valueB',
  },
  {
    title: '单位',
    dataIndex: 'unitB',
    key: 'unitB',
  },
];

const dataanalize: React.FC = () => {
  const intl = useIntl();
  const [isLoad, setIsLoad] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  function onFinish(values: any): void {
    setIsConfirmed(true);
  }
  function onLoad(values: any): void {
    setIsLoad(true);
    setInterval(() => {
      onFinish(values);
    }, 1000);
  }

  function onFinishFailed(errorInfo): void {
    console.log('Failed:', errorInfo);
  }

  return (

    <PageContainer>
      <Card>
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SmileTwoTone /> 数据分析页面
        </Typography.Title>
        <Card>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onLoad={onLoad}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

          >

            <Form.Item
              label="数据集"
              name="datasets"
              rules={[{ required: true, message: 'DataSets Required' }]}
            >
              <Select
                showSearch
                placeholder="Select a dataset"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'DC1',
                    label: '中国渤海（北海域）',
                  },
                  {
                    value: 'DC2',
                    label: '中国黄海（总览）',
                  },
                  {
                    value: 'DC3',
                    label: '中国东海（东海域）',
                  },
                  {
                    value: 'DC4',
                    label: '中国南海（总览）',
                  },
                  {
                    value: 'DC5',
                    label: '中国南海（西海域）',
                  },
                  {
                    value: 'DC6',
                    label: '北冰洋（局部）',
                  },
                ]}
                
              />
            </Form.Item>

            <Form.Item label="日期:"
              name="date"
              rules={[{ required: true, message: 'Date Required' }]}>
              <RangePicker showTime />
            </Form.Item>

            <Form.Item label="经纬度:"
              name="location"
            >
              <InputNumber<string>
                style={{ width: 160, marginRight: '10px' }}
                defaultValue="71.245"
                min="0"
                max="90"
                step="0.000001"
                stringMode
              />
              <InputNumber<string>
                style={{ width: 160 }}
                defaultValue="82.198"
                min="0"
                max="180"
                step="0.000001"
                stringMode
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={isLoad}>
                确定
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card hidden={!isConfirmed}>
          <Table dataSource={dataSource} columns={columns} />;
        </Card>

        <Card hidden={!isConfirmed}>
          <Row gutter={16}>
            <Col span={6}><Card cover={
              <img
                alt="example"
                src={GraA}
              />
            }>
              <Meta
                avatar={<Avatar src="http://10.194.17.166/Avater.jpg" />}
                title="风场图"
              />
            </Card></Col>

            <Col span={6}><Card cover={
              <img
                alt="example"
                src={GraB}
              />
            }>
              <Meta
                avatar={<Avatar src="http://10.194.17.166/Avater.jpg" />}
                title="波周期图"
              />
            </Card></Col>

            <Col span={6}><Card cover={
              <img
                alt="example"
                src={GraC}
              />
            }>
              <Meta
                avatar={<Avatar src="http://10.194.17.166/Avater.jpg" />}
                title="浪场图"
              />
            </Card></Col>

            <Col span={6}><Card cover={
              <img
                alt="example"
                src={GraD}
              />
            }>
              <Meta
                avatar={<Avatar src="http://10.194.17.166/Avater.jpg" />}
                title="温度图"
              />
            </Card></Col>
          </Row>
        </Card>
      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        遇到调度问题？{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          寻求帮助
        </a>
        。
      </p>
    </PageContainer>
  );
};

export default dataanalize;
