import {SmileTwoTone} from '@ant-design/icons';
import {PageContainer} from '@ant-design/pro-components';
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
import React, {useEffect, useRef, useState} from 'react';
import './detailsimulating.css';
import Progress from 'antd/es/progress';
import {Video} from "@/components/Customs/Video";

const {RangePicker} = DatePicker;
const {Countdown} = Statistic;
const detailWave = "/data/video/DetailWave.mp4";

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

// const onChange: CountdownProps['onChange'] = (val) => {
//     if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
//         console.log('changed!');
//     }
// };

const DetailSimulating: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isShowVideo, setShowVideo] = useState(false);
  const [rate, setRate] = useState(1); // 默认速率为1
  let {current: timer} = useRef<NodeJS.Timer>(null);
  // const [confirmLoading, setConfirmLoading] = useState(false);

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
    timer = setInterval(() => {
      increase();
    }, 1000 - 50 * rate);
  };

  const cancelProgressBar = () => {
    if (timer !== null)
      clearInterval(timer);
    setIsRunning(false);
  };

  useEffect(() => {
    const isEnabled = Boolean(sessionStorage.getItem("gpuEnabled"))
    const newRate = isEnabled ? 12 : 1;
    setRate(newRate);
  }, []);

  return (
    <PageContainer>
      <Card>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '64px'}}>
          <SmileTwoTone/> 海洋精细结构模拟页面
        </Typography.Title>
        <Card>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            autoComplete="off"
          >
            <Form.Item
              label="模型:"
              name="model"
              rules={[{required: true, message: 'Model Required'}]}
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
              rules={[{required: true, message: 'DataSets Required'}]}
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
                       rules={[{required: true, message: 'Date Required'}]}>
              <RangePicker showTime/>
            </Form.Item>

            <Form.Item label="经纬度:"
                       name="location"
                       rules={[{required: true, message: 'Date Required'}]}>
              <InputNumber<string>
                style={{width: 160, marginRight: '10px'}}
                defaultValue="71.245"
                min="0"
                max="90"
                step="0.001"
                stringMode
              />
              <InputNumber<string>
                style={{width: 160}}
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
                      value={9}
                      precision={2}
                      valueStyle={{color: '#3f8600', fontWeight: 'bold'}}
                      suffix="%"
                    />
                    <Statistic
                      title="速度"
                      value={3.52}
                      precision={2}
                      valueStyle={{color: '#111111', fontWeight: 'bold'}}
                      suffix="GHz"
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="进程"
                      value={269}
                      precision={0}
                      valueStyle={{color: '#111111', fontWeight: 'bold'}}
                      suffix=" "
                    />
                    <Countdown title="计划关机" value={deadline} valueStyle={{fontWeight: 'bold'}}/>
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
                      value={6.7}
                      precision={2}
                      valueStyle={{color: '#3f8600', fontWeight: 'bold'}}
                      suffix="GB"
                    />
                    <Statistic
                      title="分页缓冲池"
                      value={1.5}
                      precision={2}
                      valueStyle={{color: '#111111', fontWeight: 'bold'}}
                      suffix="GB"
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="可用内存"
                      value={12.9}
                      precision={2}
                      valueStyle={{color: '#111111', fontWeight: 'bold'}}
                      suffix="GB"
                    />
                    <Statistic
                      title="非分页缓冲池"
                      value={855}
                      precision={0}
                      valueStyle={{color: '#111111', fontWeight: 'bold'}}
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
                      value={5.06}
                      precision={2}
                      valueStyle={{color: '#3f8600', fontWeight: 'bold'}}
                      suffix="%"
                    />
                    <Statistic
                      title="共享GPU内存"
                      value={1.1}
                      precision={2}
                      valueStyle={{color: '#111111', fontWeight: 'bold'}}
                      suffix="/11.9 GB"
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="GPU内存"
                      value={1.1}
                      precision={2}
                      valueStyle={{color: '#111111', fontWeight: 'bold'}}
                      suffix="/11.9 GB"
                    />
                    <Countdown title="计划关机" value={deadline} valueStyle={{fontWeight: 'bold'}}/>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card>
          <Row>
            <Progress percent={percent}/>
            <Button onClick={startProgressBar} disabled={isRunning} type='primary'>
              {isRunning ? 'Running...' : 'Start'}
            </Button>
            <Button onClick={cancelProgressBar} disabled={!isRunning} style={{marginLeft: '20px'}}>
              Cancel
            </Button>
          </Row>
        </Card>
        <Card>
          <Video shown={isShowVideo} url={detailWave} title={"3D 模拟图样"}/>
        </Card>
      </Card>
      <p style={{textAlign: 'center', marginTop: 24}}>
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

