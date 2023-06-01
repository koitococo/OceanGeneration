import { ArrowUpOutlined, ArrowDownOutlined, EditOutlined, EllipsisOutlined, HeartTwoTone, SettingOutlined, SmileTwoTone, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Avatar, Card, Col, Row, Typography, Button, Checkbox, Form, Input, Select, DatePicker, InputNumber, Space, Statistic, CountdownProps } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useState } from 'react';
import './detailsimulating.css';
import Progress from 'antd/es/progress';
const { RangePicker } = DatePicker;
const { Countdown } = Statistic;
const cookies = document.cookie.split(";");
const isGCenabled = cookies[0];

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const onFinish: CountdownProps['onFinish'] = () => {
    console.log('finished!');
};

const onChange: CountdownProps['onChange'] = (val) => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
        console.log('changed!');
    }
};

const detailsimulating: React.FC = () => {
    const intl = useIntl();
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [percent, setPercent] = useState<number>(0);
    // console.log(cookies);
    const rate = isGCenabled == 'isGCenabled=true' ? 10 : 1;
    const increase = () => {
        setPercent((prevPercent: number) => {
            const newPercent = parseFloat((prevPercent + Math.random() * rate).toFixed(1));
            if (newPercent > 100) {
                setIsRunning(false);
                return 100;
            }
            return newPercent;
        });
    };
    const startProgressBar = () => {
        setIsRunning(true);
        setTimeout(() => {
            increase();
            if (percent < 100) {
                startProgressBar();
            } else {
                setIsRunning(false);
                return 100;
            }
        }, 1000-50*rate);
    };

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
                    <SmileTwoTone /> 海洋精细结构模拟页面
                </Typography.Title>
                <Card>
                    <Form
                        name="detailsimulating"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        style={{ maxWidth: 800 }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Model:"
                            name="model"
                            rules={[{ required: true, message: 'Model Required' }]}
                            style={{ display: 'inline-block', width: '40%' }}
                        >
                            <Select
                                showSearch
                                placeholder="Select a model"
                                optionFilterProp="children"
                                style={{ maxWidth: 200, margin: '0px 5px 0px 10px' }}
                                filterOption={(input: string, option: { label: any; }) =>
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
                            style={{ display: 'inline-block', width: '40%' }}
                        >
                            <Select
                                showSearch
                                placeholder="Select a person"
                                optionFilterProp="children"
                                style={{ maxWidth: 200, margin: '0px 5px 0px 10px' }}
                                filterOption={(input: string, option: { label: any; }) =>
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

                        <Form.Item wrapperCol={{ span: 20 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </Card>

                <Card>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="CPU利用率"
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600', fontWeight: 'bold' }}
                                            suffix="%"
                                        />
                                        <Statistic
                                            title="速度"
                                            value={6.52}
                                            precision={2}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix="GHz"
                                        />
                                    </Col>
                                    <Col span={12}>
                                        <Statistic
                                            title="进程"
                                            value={269}
                                            precision={0}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix=" "
                                        />
                                        <Countdown title="计划关机" value={deadline} onFinish={onFinish} valueStyle={{ fontWeight: 'bold' }} />
                                    </Col>

                                </Row>
                            </Card>
                        </Col>



                        <Col span={8}>
                            <Card>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="内存用量"
                                            value={10.72}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600', fontWeight: 'bold' }}
                                            suffix="GB"
                                        />
                                        <Statistic
                                            title="分页缓冲池"
                                            value={1.5}
                                            precision={2}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix="GB"
                                        />
                                    </Col>
                                    <Col span={12}>
                                        <Statistic
                                            title="可用内存"
                                            value={12.9}
                                            precision={2}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix="GB"
                                        />
                                        <Statistic
                                            title="非分页缓冲池"
                                            value={855}
                                            precision={0}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix="MB"
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="GPU利用率"
                                            value={38.25}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600', fontWeight: 'bold' }}
                                            suffix="%"
                                        />
                                        <Statistic
                                            title="共享GPU内存"
                                            value={1.1}
                                            precision={2}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix="/11.9 GB"
                                        />
                                    </Col>
                                    <Col span={12}>
                                        <Statistic
                                            title="GPU内存"
                                            value={1.1}
                                            precision={2}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix="/11.9 GB"
                                        />
                                        <Countdown title="计划关机" value={deadline} onFinish={onFinish} valueStyle={{ fontWeight: 'bold' }} />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>

                <Card>
                    <Row>
                        <Progress percent={percent} />
                        <Button onClick={startProgressBar} disabled={isRunning}>
                            {isRunning ? 'Running...' : 'Start'}
                        </Button>
                    </Row>
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

export default detailsimulating;

