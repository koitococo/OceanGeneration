import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Avatar, Card, Col, Row, Typography, Button, Form, Select, DatePicker, InputNumber } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useState } from 'react';
import "./anticipating.css";
import Video1 from "../../../datas/1.mp4";
import Video2 from "../../../datas/2.mp4";
import Video3 from "../../../datas/3.mp4";

const { RangePicker } = DatePicker;

const anticipating: React.FC = () => {
  const [isShowVideo, setShowVideo] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const intl = useIntl();
  function onFinish(values: any): void {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setShowVideo(true);
    }, 2000);
  }

  function onFinishFailed(errorInfo: ValidateErrorEntity<any>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <PageContainer>
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
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="模型选择:"
              name="model"
              // rules={[{ required: true, message: 'Model Required' }]}
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
                defaultValue="DCLM"
              />
            </Form.Item>

            <Form.Item
              label="数据集"
              name="datasets"
              // rules={[{ required: true, message: 'DataSets Required' }]}
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
                defaultValue="中国黄海（总览）"
              />
            </Form.Item>

            <Form.Item label="日期:"
              name="date"
              // rules={[{ required: true, message: 'Date Required' }]}
              >
              <RangePicker showTime />
            </Form.Item>

            <Form.Item label="经纬度:"
              name="location">
              <InputNumber<string>
                style={{ width: 160, marginRight: '10px' }}
                defaultValue="71.245"
                min="0"
                max="90"
                step="0.001"
                stringMode
              />
              <InputNumber<string>
                style={{ width: 160 }}
                defaultValue="82.198"
                min="0"
                max="180"
                step="0.001"
                stringMode
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={confirmLoading}>
                确定
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card hidden={!isShowVideo}>
          <Row gutter={16}>
            <Col span={8}><Card>
              <div className="card-cover">
                <video id="card-video" autoPlay={isShowVideo} controls={false}>
                  <source src={Video1} type="video/mp4" />
                  您的浏览器不支持 HTML5 视频。
                </video>
              </div>
              <Meta
                avatar={<Avatar src="http://10.194.17.166/Avater.jpg" />}
                title="风速"
              />
            </Card></Col>

            <Col span={8}><Card>
              <div className="card-cover">
                <video id="card-video" autoPlay={isShowVideo} controls={false}>
                  <source src={Video2} type="video/mp4" />
                  您的浏览器不支持 HTML5 视频。
                </video>
              </div>
              <Meta
                avatar={<Avatar src="http://10.194.17.166/Avater.jpg" />}
                title="波周期"
              />
            </Card></Col>

            <Col span={8}><Card>
              <div className="card-cover">
                <video id="card-video" autoPlay={isShowVideo} controls={false}>
                  <source src={Video3} type="video/mp4" />
                  您的浏览器不支持 HTML5 视频。
                </video>
              </div>
              <Meta
                avatar={<Avatar src="http://10.194.17.166/Avater.jpg" />}
                title="浪高"
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
