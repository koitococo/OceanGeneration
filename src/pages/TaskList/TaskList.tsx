import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Button, Card, Typography} from 'antd';
import Table from 'antd/lib/table/Table';
import React, { useState } from 'react';

const dataSource = [
  {
    No: '1',
    Date: '2021-05-01',
    Task: '波周期预测',
    Time: '18:57:00',
    Status: '已完成',
    Action: '查看',
  },
  {
    No: '2',
    Date: '2021-05-02',
    Task: '浪高预测',
    Time: '19:21:00',
    Status: '已完成',
    Action: '查看',
  },
  {
    No: '3',
    Date: '2021-05-03',
    Task: '海面建模',
    Time: '21:36:00',
    Status: '已完成',
    Action: '查看',
  },
  {
    No: '4',
    Date: '2021-05-04',
    Task: '风速预测',
    Time: '02:52:00',
    Status: '已完成',
    Action: '查看',
  },
  {
    No: '5',
    Date: '2021-05-05',
    Task: '浪高预测',
    Time: '03:12:00',//2021-05-05 03:12:00
    Status: '已完成',
    Action: '查看',
  }
];

const columns = [
  {
    title: '编号',
    dataIndex: 'No',
    key: 'No',
  },
  {
    title: '日期',
    dataIndex: 'Date',
    key: 'Date',
  },
  {
    title: '任务',
    dataIndex: 'Task',
    key: 'Task',
  },
  {
    title: '时间',
    dataIndex: 'Time',
    key: 'Time',
  },
  {
    title: '状态',
    dataIndex: 'Status',
    key: 'Status',
    render: (text) => <span style={{color:"green"}}>{text}</span>,
  },
  {
    title: '操作',
    dataIndex: 'Action',
    key: 'Action',
    render: (text) => <a>{text}</a>,
  },
];

const tasklist: React.FC = () => {
  return (

    <PageContainer>
      <Card>
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SmileTwoTone /> 任务列表页面
        </Typography.Title>

        <Card>
          <Button type="primary" style={{ float: 'left' }}>清空</Button>
        </Card>
        <Card>
          <Table dataSource={dataSource} columns={columns} />
        </Card>

      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        遇到调度问题？{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          寻求帮助
        </a>
      </p>
    </PageContainer>
  );
};

export default tasklist;
