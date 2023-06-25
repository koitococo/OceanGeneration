import { BoldOutlined, FontSizeOutlined, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Row, Typography, Button, Form, Select, DatePicker, InputNumber, Col } from 'antd';
import React, { useState } from 'react';
import "./DielectricParas.css";

const { RangePicker } = DatePicker;

const videos: string[] = [
    "/data/video/1.mp4",
    "/data/video/2.mp4",
    "/data/video/3.mp4",
];

const Anticipating: React.FC = () => {
    const [isShowVideo, setShowVideo] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    function onFinish(): void {
        setConfirmLoading(true);
        setTimeout(() => {
            setConfirmLoading(false);
            setShowVideo(true);
        }, 2000);
    }

    return (
        <PageContainer>
            <Card>
                <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <SmileTwoTone /> 介电参数计算页面
                </Typography.Title>
                <Row>
                    <Col span={12}>
                        <Card>
                            <Form
                                name="basic"
                                title='场图显示'
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                // onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <div>
                                    <h3>场图显示</h3>
                                </div>
                                <Form.Item
                                    label="数据集"
                                    name="datasets"
                                // rules={[{ required: true, message: 'DataSets Required' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="选择一个数据集"
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

                                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                    <Button type="primary" htmlType="submit" loading={confirmLoading} className='ConfirmButton'>
                                        显示场图
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card>
                            <Form
                                name="basic2"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                // onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <div>
                                    <h3>介电参数计算</h3>
                                </div>
                                <Form.Item label="频率">
                                    <InputNumber<string>
                                        style={{ width: 160, marginRight: '10px' }}
                                        defaultValue="81"
                                        min="0"
                                        max="1000"
                                        step="0.1"
                                        stringMode
                                    />
                                </Form.Item>

                                <Form.Item label="经纬度:">
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

                                <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
                                    <Button type="primary" htmlType="submit" loading={confirmLoading} className='ConfirmButton'>
                                        显示实部
                                    </Button>
                                    <Button type="primary" htmlType="submit" loading={confirmLoading} className='ConfirmButton'>
                                        显示虚部
                                    </Button>
                                    <Button type="primary" htmlType="submit" loading={confirmLoading} className='ConfirmButton'>
                                        读取场图
                                    </Button>
                                    <Button type="primary" htmlType="submit" loading={confirmLoading} className='ConfirmButton'>
                                        输出场图
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Card>
                            <h3>参数场图</h3>
                            <div style={{ textAlign: 'center' }}>
                                <Card><img src="http://10.194.17.166/images/DielectricParas.jpg" alt="Parameter Field Image" /></Card>

                            </div>

                        </Card>
                    </Col>
                </Row>
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

export default Anticipating;
