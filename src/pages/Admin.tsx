import { EditOutlined, EllipsisOutlined, SmileTwoTone, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Avatar, Card, Col, Row, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

const Admin: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: '该页面只有在通过sudo验证权限后才能更改',
      })}
    >
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
          {/* <Col span={6}>
            <Card
              style={{ width: 320, height: 340 }}
              actions={[<PlusOutlined key="plus"  style={{ fontSize: '81px' }}/>]}
            >
              <Meta
                title="Add New"
                description="Click to add"
              />
            </Card>
          </Col> */}

          <Col span={6}>
            <Card
              style={{ width: 320, height: 340 }} // 自定义宽度和高度
              actions={[
                <div style={{  justifyContent: 'center', alignItems: 'center', height: '100%',flexWrap:'wrap',marginTop:'40px' }}><div style={{ fontSize: '36px' }}>Add New</div><PlusOutlined key="plus" style={{ fontSize: '48px' }} /></div>
                // 调整文本大小
              ]}
            >
            </Card>
          </Col>

          <Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col>
          <Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col><Col span={6}><Card cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="DataSet 1"
              description="Ocean Generating Dataset"
            />
          </Card></Col>
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

export default Admin;
