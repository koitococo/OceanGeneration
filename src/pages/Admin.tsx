import { EditOutlined, EllipsisOutlined, SmileTwoTone, UploadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Avatar, Button, Card, Col, DatePicker, DatePickerProps, Form, Input, InputNumber, Modal, Row, Typography, Upload, UploadProps, message } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useState } from 'react';
// import img1 from '../../datas/Temp/20210601-1.jpg'
// import img2 from '../../datas/Temp/20211201-0.jpg'
// import img3 from '../../datas/Temp/20211201-0.jpg'
// import img4 from '../../datas/Temp/20210301-3.jpg'

const Admin: React.FC = () => {
  var [datalist, setDatalist] = useState([
    {
      imageSrc: 'http://10.194.17.166/Temp/20210301-0.jpg',
      actions: [<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
      avatarSrc: 'http://10.194.17.166/Avater.jpg',
      title: '中国渤海（北海域）',
      description: '2023-06-01 04:21:11',
    },
    {
      imageSrc: 'http://10.194.17.166/Temp/20210601-3.jpg',
      actions: [<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
      avatarSrc: 'http://10.194.17.166/Avater.jpg',
      title: '中国黄海（总览）',
      description: '2023-05-30 08:42:01',
    },
    {
      imageSrc: 'http://10.194.17.166/Temp/20211201-0.jpg',
      actions: [<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
      avatarSrc: 'http://10.194.17.166/Avater.jpg',
      title: '中国东海（东海域）',
      description: '2023-05-29 11:01:00',
    },
    {
      imageSrc: 'http://10.194.17.166/Temp/20211201-3.jpg',
      actions: [<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
      avatarSrc: 'http://10.194.17.166/Avater.jpg',
      title: '中国南海（总览）',
      description: '2023-05-27 19:21:11',
    },
    {
      imageSrc: 'http://10.194.17.166/Temp/20210901-2.jpg',
      actions: [<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
      avatarSrc: 'http://10.194.17.166/Avater.jpg',
      title: '中国南海（西海域）',
      description: '2023-05-25 00:05:47',
    },
    {
      imageSrc: 'http://10.194.17.166/Temp/20210901-0.jpg',
      actions: [<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
      avatarSrc: 'http://10.194.17.166/Avater.jpg',
      title: '北冰洋（局部）',
      description: '2023-05-21 16:18:08',
    },
  ]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('模型参数配置');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('Adding the dataset...');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
    const dataset = {
      imageSrc: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      actions: [<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
      avatarSrc: 'http://10.194.17.166/Avater.jpg',
      title: values.name,
      description: values.date.toISOString(),
    };
    setDatalist((prevList) => [...prevList, dataset]);
    console.log(dataset);
    console.log(datalist);
  };


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

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
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'OK',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> 数据库页面
        </Typography.Title>
        <Row gutter={16}>

          <Col span={6}>
            <Card
              style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: '1', justifyContent: 'center', alignItems: 'center' }}
              actions={[
                <div><div style={{ fontSize: '36px' }}>Add New</div></div>
                // 调整文本大小
              ]}
            >
              <Button type="primary" onClick={showModal}>
                Add New DataSet
              </Button>
            </Card>
          </Col>

          {datalist.map((card, index) => (
            <Col span={6} key={index}>
              <Card
                cover={<img alt="example" src={card.imageSrc} />}
                actions={card.actions}
              >
                <Meta
                  avatar={<Avatar src={card.avatarSrc} />}
                  title={card.title}
                  description={card.description}
                />
              </Card>
            </Col>
          ))}

        </Row>
      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        遇到调度问题？{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          寻求帮助
        </a>
      </p>
      <Modal
        title="添加数据集"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={800}
      >
        <p>{modalText}</p>
        <Form
          name="add-dataset"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="数据集名称"
            name="name"
            rules={[{ required: true, message: 'Please input name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="数据集日期"
            name="date"
            rules={[{ required: true, message: 'Please input name!' }]}
          >
            <DatePicker onChange={onDateChange} />
          </Form.Item>

          <Form.Item
            label="数据来源"
            name="origin"
            rules={[{ required: true, message: 'Please input origin!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="地理位置（经纬度）:"
            name="location"
            rules={[{ required: false, message: 'Location Required' }]}>
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

          <Form.Item
            label="数据集封面:"
            name="cover"
          >
            <Upload {...propspic}>
              <Button icon={<UploadOutlined />}>点击上传图片</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="数据源:"
            name="source"
          >
            <Button icon={<UploadOutlined />}>点击上传数据</Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer >
  );
};

export default Admin;
