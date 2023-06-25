import { EditOutlined, EllipsisOutlined, SmileTwoTone, UploadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Avatar, Button, Card, Col, DatePicker, DatePickerProps, Form, Input, InputNumber, Modal, Row, Typography, Upload, UploadProps, message } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useState } from 'react';

const Admin: React.FC = () => {
    const propspic: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            message.success(`${info.file.name} file uploaded successfully`);
        },
    };

    return (
        <PageContainer>
            <Card>
                <Typography.Title level={2} style={{ textAlign: 'center' }}>
                    <SmileTwoTone /> 容器列表页面
                </Typography.Title>
                <Row gutter={16}>
                    <Input.Search style={{ marginBottom: "10px" }} placeholder='搜索容器'></Input.Search>
                </Row>

                <Row gutter={16}>
                    <Col span={6}>
                        <Card hoverable>
                            <Row>
                                <Col span={12}>
                                    <img src="http://10.194.17.166/images/Docker.png" alt="Image" style={{ width: '90%', marginRight: '10px', marginBottom: '10px' }} />
                                </Col>
                                <Col span={12}>
                                    <p>镜像A</p>
                                    <p>类型</p>
                                    <p>已有实例</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>创建日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>

                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>更新日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>
                            </Row>
                            <Row>
                                <Col span={12}><img src='http://10.194.17.166/Avater.jpg' style={{ width: "48px", height: "48px", borderRadius: "32px" }}></img></Col>
                                <Col span={12} style={{ fontSize: "20px", color: "#888888" }}>NanCunChild</Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card hoverable>
                            <Row>
                                <Col span={12}>
                                    <img src="http://10.194.17.166/images/Docker.png" alt="Image" style={{ width: '90%', marginRight: '10px', marginBottom: '10px' }} />
                                </Col>
                                <Col span={12}>
                                    <p>镜像A</p>
                                    <p>类型</p>
                                    <p>已有实例</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>创建日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>

                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>更新日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>
                            </Row>
                            <Row>
                                <Col span={12}><img src='http://10.194.17.166/Avater.jpg' style={{ width: "48px", height: "48px", borderRadius: "32px" }}></img></Col>
                                <Col span={12} style={{ fontSize: "20px", color: "#888888" }}>NanCunChild</Col>
                            </Row>
                        </Card>
                    </Col>


                    <Col span={6}>
                        <Card hoverable>
                            <Row>
                                <Col span={12}>
                                    <img src="http://10.194.17.166/images/Docker.png" alt="Image" style={{ width: '90%', marginRight: '10px', marginBottom: '10px' }} />
                                </Col>
                                <Col span={12}>
                                    <p>镜像A</p>
                                    <p>类型</p>
                                    <p>已有实例</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>创建日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>

                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>更新日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>
                            </Row>
                            <Row>
                                <Col span={12}><img src='http://10.194.17.166/Avater.jpg' style={{ width: "48px", height: "48px", borderRadius: "32px" }}></img></Col>
                                <Col span={12} style={{ fontSize: "20px", color: "#888888" }}>NanCunChild</Col>
                            </Row>
                        </Card>
                    </Col>


                    <Col span={6}>
                        <Card hoverable>
                            <Row>
                                <Col span={12}>
                                    <img src="http://10.194.17.166/images/Docker.png" alt="Image" style={{ width: '90%', marginRight: '10px', marginBottom: '10px' }} />
                                </Col>
                                <Col span={12}>
                                    <p>镜像A</p>
                                    <p>类型</p>
                                    <p>已有实例</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>创建日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>

                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>更新日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>
                            </Row>
                            <Row>
                                <Col span={12}><img src='http://10.194.17.166/Avater.jpg' style={{ width: "48px", height: "48px", borderRadius: "32px" }}></img></Col>
                                <Col span={12} style={{ fontSize: "20px", color: "#888888" }}>NanCunChild</Col>
                            </Row>
                        </Card>
                    </Col>


                    <Col span={6}>
                        <Card hoverable>
                            <Row>
                                <Col span={12}>
                                    <img src="http://10.194.17.166/images/Docker.png" alt="Image" style={{ width: '90%', marginRight: '10px', marginBottom: '10px' }} />
                                </Col>
                                <Col span={12}>
                                    <p>镜像A</p>
                                    <p>类型</p>
                                    <p>已有实例</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>创建日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>

                            </Row>
                            <Row>
                                <Col span={12}><p style={{ fontSize: "14px", color: "gray" }}>更新日期：</p></Col>
                                <Col span={12}><p style={{ fontSize: "16px" }}>2023-05-08</p></Col>
                            </Row>
                            <Row>
                                <Col span={12}><img src='http://10.194.17.166/Avater.jpg' style={{ width: "48px", height: "48px", borderRadius: "32px" }}></img></Col>
                                <Col span={12} style={{ fontSize: "20px", color: "#888888" }}>NanCunChild</Col>
                            </Row>
                        </Card>
                    </Col>



                </Row>
            </Card>
            <p style={{ textAlign: 'center', marginTop: 24 }}>
                遇到调度问题？{' '}
                <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
                    寻求帮助
                </a>
            </p>

        </PageContainer >
    );
};

export default Admin;
