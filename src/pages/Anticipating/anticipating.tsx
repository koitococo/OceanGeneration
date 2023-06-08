import {SmileTwoTone} from '@ant-design/icons';
import {PageContainer} from '@ant-design/pro-components';
import {Card, Row, Typography, Button, Form, Select, DatePicker, InputNumber} from 'antd';
import Meta from 'antd/es/card/Meta';
import React, {useState} from 'react';
import "./anticipating.css";

const {RangePicker} = DatePicker;

const videos: string[] = [
  "/data/video/1.mp4",
  "/data/video/2.mp4",
  "/data/video/3.mp4",
];

const Video: React.FC<{ shown: boolean, url: string, title: string }> = ({shown, url, title}) => {
  console.log("debug: rendering with params: " + `${shown} ${url} ${title}`)
  return shown ?
    <div className={"video-container"} style={{
      flex:"auto",
      flexDirection:"column",
      flexGrow:1
    }}>
        <Card>
          <div className="card-cover" style={{
            minHeight:"160px",
            minWidth:"160px"
          }}>
            <video id="card-video" autoPlay={true} controls={false} muted={true} onPlay={() => {
              console.log("video autoplay")
            }}>
              <source src={url} type="video/mp4"/>
              您的浏览器不支持 HTML5 视频。
            </video>
          </div>
          <Meta
            title={title}
          />
        </Card>
    </div> : <div className={"video-container"}/>
}

const anticipating: React.FC = () => {
  const [isShowVideo, setShowVideo] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  function onFinish(values: any): void {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setShowVideo(true);
    }, 2000);
  }

  return (
    <PageContainer>
      <Card>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '64px'}}>
          <SmileTwoTone/> 海洋模拟计算页面
        </Typography.Title>
        <Card>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
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
                defaultValue={"DCLM"}
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
              <RangePicker showTime/>
            </Form.Item>

            <Form.Item label="经纬度:">
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

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="primary" htmlType="submit" loading={confirmLoading}>
                确定
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Row gutter={16}>
          <Video shown={isShowVideo} url={videos[0]} title={"风速"}/>
          <Video shown={isShowVideo} url={videos[1]} title={"波周期"}/>
          <Video shown={isShowVideo} url={videos[2]} title={"浪高"}/>
        </Row>
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

export default anticipating;
