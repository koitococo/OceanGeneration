import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
    Card,
    Col,
    Row,
    Typography,
    Button,
    Form,
    Select,
    DatePicker,
    InputNumber,
    Statistic
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './detailsimulating.css';
import Progress from 'antd/es/progress';
import { Video } from "@/components/Customs/Video";

const { RangePicker } = DatePicker;
const { Countdown } = Statistic;
const detailWave = "/data/video/DetailWave.mp4";

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

// const onChange: CountdownProps['onChange'] = (val) => {
//     if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
//         console.log('changed!');
//     }
// };

const DetailSimulating: React.FC = () => {
    const [percent, setPercent] = useState(0);
    const [CPUUsage, setCPUUsage] = useState(0);
    const [RAMUsage, setRAMUsage] = useState(0);// 显示RAM使用率
    const [GPUUsage, setGPUUsage] = useState(0);// 显示GPU使用率
    const [GPUMemUsage , setGPUMemUsage] = useState(0);// 显示GPU内存使用率

    const [isRunning, setIsRunning] = useState(false);
    const [isShowVideo, setShowVideo] = useState(false);
    const timerRef = useRef<NodeJS.Timer | null>(null);

    function refreshUsage(running:boolean, gpuEnabled:boolean) {
        
        if (running) {
            setCPUUsage((gpuEnabled ? 48.7 : 98.0)*((Math.random()/5)+0.8));
            setGPUUsage((gpuEnabled ? 95.6 :0)*((Math.random()/5)+0.8));
            setRAMUsage(18.25);
            setGPUMemUsage(gpuEnabled ? 34.7 :0);
        } else {
            setCPUUsage(0);
            setGPUUsage(0);
            setRAMUsage(0);
            setGPUMemUsage(0);
        }
    }

    const startProgressBar = () => {
        let isGpuEnabled = sessionStorage.getItem("gpuEnabled") === "true" ? true : false;
        console.log("isGpuEnabled: ", isGpuEnabled);
        setIsRunning(true);// 进度条开始
        timerRef.current = setInterval(() => {
            refreshUsage(true, isGpuEnabled);
            setPercent((prevPercent) => {
                const newPercent = prevPercent + (isGpuEnabled? 20: 3) * Math.random();
                if (newPercent > 100) {
                    setIsRunning(false);// 进度条结束
                    setShowVideo(true);// 显示视频
                    refreshUsage(false, false);
                    return 100;// 进度条结束
                }
                return Math.round(newPercent * 10) /10;  // 进度条继续
            });
        }, 1500);
    };

    const cancelProgressBar = () => {
        if (timerRef.current !== null) {
            console.log("clear timer");
            clearInterval(timerRef.current);// 清除定时器
        } else {
            console.log("timer is null, may be a bug");
        }
        setIsRunning(false);
        setPercent(0);
        setTimeout(()=>{
            refreshUsage(false, false);
        }, 500);
    };

    return (
        <PageContainer>
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
                                placeholder="选择数据集"
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
                    <Card>
                        <Row gutter={16} align={"middle"}>
                            <Col>
                            <Select
                                showSearch
                                title='选择主机'
                                placeholder="切换主机"
                                value={"DC1"}
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'DC1',
                                        label: '切换主机',
                                    },

                                ]}
                            />
                            </Col>
                            <Col>
                            <Countdown title="计划关机" value={deadline} valueStyle={{ fontWeight: 'bold' }} />
                            </Col>
                        </Row>
                    </Card>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="CPU利用率"
                                            value={1.27 + CPUUsage}
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
                                </Row>
                            </Card>
                        </Col>


                        <Col span={8}>
                            <Card>
                                <Col span={12}>
                                    <Statistic
                                        title="内存用量"
                                        value={6.73 + RAMUsage}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600', fontWeight: 'bold' }}
                                        suffix="GB"
                                    />

                                    <Statistic
                                        title="可用内存"
                                        value={73.27 - RAMUsage}
                                        precision={2}
                                        valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                        suffix="GB"
                                    />
                                </Col>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="GPU利用率"
                                            value={GPUUsage}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600', fontWeight: 'bold' }}
                                            suffix="%"
                                        />
                                        <Statistic
                                            title="GPU内存"
                                            value={GPUMemUsage}
                                            precision={2}
                                            valueStyle={{ color: '#111111', fontWeight: 'bold' }}
                                            suffix="/48.0 GB"
                                        />

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
                            Cancel
                        </Button>
                    </Row>
                </Card>
                <Card>
                    <Video shown={isShowVideo} url={detailWave} title={"3D 模拟图样"} />
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

export default DetailSimulating;
