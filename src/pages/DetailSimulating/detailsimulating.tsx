import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Avatar, Card, Col, Row, Typography, Button, Form, Select, DatePicker, InputNumber, Statistic, CountdownProps } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect, useRef, useState } from 'react';
import './detailsimulating.css';
import Progress from 'antd/es/progress';
import DetailWave from '../../../datas/DetailWave.mp4';
const { RangePicker } = DatePicker;
const { Countdown } = Statistic;
const cookies = document.cookie.split(";");
const isGCenabled = cookies[0];


const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK



const onChange: CountdownProps['onChange'] = (val) => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
        console.log('changed!');
    }
};

const detailsimulating: React.FC = () => {
    const intl = useIntl();
    const [percent, setPercent] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);
    const [isShowVideo, setShowVideo] = useState(false);
    const [rate, setRate] = useState(1); // 默认速率为1
    const [confirmLoading, setConfirmLoading] = useState(false);

    const increase = () => {
        setPercent((prevPercent) => {
            const newPercent = parseFloat((prevPercent + Math.random() * rate).toFixed(1));
            if (newPercent > 100) {
                setIsRunning(false);
                setShowVideo(true);
                return 100;
            }
            return newPercent;
        });
    };

    const startProgressBar = () => {
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            increase();
        }, 1000 - 50 * rate);
    };

    const cancelProgressBar = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
    };

    useEffect(() => {
        const cookies = document.cookie.split(';');
        const isGCenabled = cookies.find((cookie) => cookie.trim().startsWith('isGCenabled='));
        const isEnabled = isGCenabled && isGCenabled.trim().endsWith('true');
        const newRate = isEnabled ? 12 : 1;
        setRate(newRate);
    }, []);

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
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="模型:"
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
                            label="数据集"
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

                        <Form.Item label="日期:"
                            name="date"
                            rules={[{ required: true, message: 'Date Required' }]}>
                            <RangePicker showTime />
                        </Form.Item>

                        <Form.Item label="经纬度:"
                            name="location"
                            rules={[{ required: true, message: 'Date Required' }]}>
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
                                            value={3.52}
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
                                        <Countdown title="计划关机" value={deadline} valueStyle={{ fontWeight: 'bold' }} />
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
                                        <Countdown title="计划关机" value={deadline} valueStyle={{ fontWeight: 'bold' }} />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>

                <Card>
                    <Row>
                        <Progress percent={percent} />
                        <Button onClick={startProgressBar} disabled={isRunning} type='primary'>
                            {isRunning ? 'Running...' : 'Start'}
                        </Button>
                        <Button onClick={cancelProgressBar} disabled={!isRunning} style={{ marginLeft: '20px' }}>
                            Cencel
                        </Button>
                    </Row>
                </Card>

                <Card hidden={!isShowVideo}>
                    <Row gutter={16}>
                        <Col span={12}><Card>
                            <div className="card-cover">
                                <video controls id="card-video" >
                                    <source src={DetailWave} type="video/mp4" />
                                    您的浏览器不支持 HTML5 视频。
                                </video>
                            </div>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Graph A"
                            />
                        </Card></Col>

                        <Col span={12}><Card>
                            <div className="card-cover">
                                <video controls id="card-video" >
                                    <source src={DetailWave} type="video/mp4" />
                                    您的浏览器不支持 HTML5 视频。
                                </video>
                            </div>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Graph A"
                            />
                        </Card></Col>

                        <Col span={12}><Card>
                            <div className="card-cover">
                                <video controls id="card-video" >
                                    <source src={DetailWave} type="video/mp4" />
                                    您的浏览器不支持 HTML5 视频。
                                </video>
                            </div>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Graph A"
                            />
                        </Card></Col>

                        <Col span={12}><Card>
                            <div className="card-cover">
                                <video controls id="card-video" >
                                    <source src={DetailWave} type="video/mp4" />
                                    您的浏览器不支持 HTML5 视频。
                                </video>
                            </div>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Graph A"
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
        </PageContainer >
    );
};

export default detailsimulating;

