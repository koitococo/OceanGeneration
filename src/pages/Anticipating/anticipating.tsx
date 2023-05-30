import { EditOutlined, EllipsisOutlined, HeartTwoTone, SettingOutlined, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Avatar, Card, Col, Row, Typography, Button, Checkbox, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
const { RangePicker } = DatePicker;

const anticipating: React.FC = () => {
  const intl = useIntl();
  function onFinish(values: any): void {
    throw new Error('Function not implemented.');
  }

  function onFinishFailed(errorInfo: ValidateErrorEntity<any>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: '该页面只有在通过sudo验证权限后才能更改',
      })}
    >
      <Card>
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SmileTwoTone /> 海洋模拟计算页面
        </Typography.Title>
        <Card>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Model:"
              name="model"
              rules={[{ required: true, message: 'Model Required' }]}
            >
              <Select
                showSearch
                placeholder="Select a model"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'DCLM',
                    label: 'DCLM',
                  },
                  {
                    value: 'MMA',
                    label: 'MMA',
                  },
                  {
                    value: 'Eula',
                    label: 'Eula',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Datasets"
              name="datasets"
              rules={[{ required: true, message: 'DataSets Required' }]}
            >
              <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'DC1',
                    label: 'Dataset 1',
                  },
                  {
                    value: 'DC2',
                    label: 'Dataset 2',
                  },
                  {
                    value: 'DC3',
                    label: 'Dataset 3',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="Date:"
              name="date"
              rules={[{ required: true, message: 'Date Required' }]}>
              <RangePicker showTime />
            </Form.Item>

            <Form.Item label="Location:"
              name="location"
              rules={[{ required: true, message: 'Date Required' }]}>
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
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <Row gutter={16}>
            <Col span={12}><Card cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }>
              <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Graph A"
              />
            </Card></Col>

            <Col span={12}><Card cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }>
              <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Graph B"
              />
            </Card></Col>

            <Col span={12}><Card cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }>
              <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Graph C"
              />
            </Card></Col>

            <Col span={12}><Card cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }>
              <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Graph D"
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

export default anticipating;
