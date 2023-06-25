import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Typography, Form, Space, Tag, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table/InternalTable';
import Transfer, { TransferDirection } from 'antd/es/transfer';
import Table from 'antd/lib/table/Table';
import React, { useState } from 'react';

type DataType = {
    key: string;
    HostName: string;
    ip: string;
    tags: string[];
    CPU: string,
    CPUCoresAll: number,
    CPUCoresUse: number,
    CPUAvg: string,
    DISK: string,
    DISKAll: number,
    DISKUse: number,
    RAM: string,
    RAMAll: number,
    RAMUse: number,
    GPU: string,
}
const mockData = [
    {
      key: '1',
      title: 'Intel® 酷睿™ i9-13900K 锐炬™ 显卡770',
      description: 'Description of Content 1',
      extraProp: 'Extra Property 1',
    },
    {
        key: '2',
        title: 'NVIDIA tesla K80',
        description: 'Description of Content 1',
        extraProp: 'Extra Property 1',
      },
    {
      key: '3',
      title: 'NVIDIA tesla K80',
      description: 'Description of Content 2',
      extraProp: 'Extra Property 2',
    },
    {
        key: '4',
        title: 'NVIDIA OVX POD',
        description: 'Description of Content 3',
        extraProp: 'Extra Property 2',
      },
    // 其他元素...
  ];
const initialTargetKeys = mockData.filter((item) => Number(item.key) == 1).map((item) => item.key);


const DetailSimulating: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('点击配置主机使用的资源');
    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    const onChange = (nextTargetKeys: string[], direction: TransferDirection, moveKeys: string[]) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const onScroll = (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    const handleOk = () => {
        setModalText('正在部署新的更改');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
        sessionStorage.setItem("gpuEnabled",true.toString());
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: '主机名称',
            dataIndex: 'HostName',
            key: 'hostname',
        },
        {
            title: 'IP',
            dataIndex: 'ip',
            key: 'ip',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '状态',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 3 ? 'geekblue' : 'green';
                        if (tag === '故障') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'CPU 用量',
            dataIndex: 'CPU',
            key: 'CPU',
            render: (text, record) =>
                <Col>
                    <Row style={{ fontSize: '16px', fontWeight: 'bold' }}>{text}</Row>
                    <Row style={{ fontSize: '12px', color: '#888888' }}>{record.CPUCoresUse} / {record.CPUCoresAll} Cores</Row>
                </Col>,
        },
        {
            title: 'CPU 平均负载',
            dataIndex: 'CPUAvg',
            key: 'CPUAvg',
            render: (text) =>
                <Space size="middle"><span style={{ fontSize: '16px', fontWeight: 'bold' }}>{text}</span></Space>
        },
        {
            title: '内存用量',
            dataIndex: 'RAM',
            key: 'RAM',
            render: (text, record) =>
                <Col>
                    <Row style={{ fontSize: '16px', fontWeight: 'bold' }}>{text}</Row>
                    <Row style={{ fontSize: '12px', color: '#888888' }}>{record.RAMUse} / {record.RAMAll} GB</Row>
                </Col>,
        },
        {
            title: '磁盘用量',
            dataIndex: 'DISK',
            key: 'DISK',
            render: (text, record) =>
                <Col>
                    <Row style={{ fontSize: '16px', fontWeight: 'bold' }}>{text}</Row>
                    <Row style={{ fontSize: '12px', color: '#888888' }}>{record.DISKUse} / {record.DISKAll} TB</Row>
                </Col>,
        },
        {
            title: 'GPU 负载',
            dataIndex: 'GPU',
            key: 'GPU',
            render: (text) =>
                <Space size="middle"><span style={{ fontSize: '16px', fontWeight: 'bold' }}>{text}</span></Space>
        },

        {
            title: '操作',
            key: 'action',
            render: (_,{tags}) => {
                const available = tags.every((tag)=>tag !== '故障' && tag !== '正在检修');
                    return <Space size="middle">
                    <a onClick={()=>{
                        if (! available) {
                            alert('该主机不可用');
                        } else {
                            setOpen(true);
                        }
                    }}>设置</a>
                </Space>
            },
        },
    ];
    const data: DataType[] = [
        {
            key: '1',
            HostName: 'WIN_X86_AA020',
            ip: '120.54.168.21',
            tags: ['正在检修'],
            CPU: '1%',
            CPUCoresAll: 18,
            CPUCoresUse: 2,
            CPUAvg: '0.01',
            RAM: '24%',
            RAMAll: 64,
            RAMUse: 24,
            DISK: '46%',
            DISKAll: 8,
            DISKUse: 3.68,
            GPU: '1%',
        },
        {
            key: '2',
            HostName: 'WIN_X86_AB524',
            ip: '132.54.168.21',
            tags: ['故障'],
            CPU: '80%',
            CPUCoresAll: 18,
            CPUCoresUse: 14,
            CPUAvg: '0.90',
            RAM: '66%',
            RAMAll: 64,
            RAMUse: 42,
            DISK: '30%',
            DISKAll: 4,
            DISKUse: 1.20,
            GPU: '71%',
        },
        {
            key: '3',
            HostName: 'WIN_X86_AB626',
            ip: '192.168.31.2',
            tags: ['空闲', '已检修'],
            CPU: '9%',
            CPUCoresAll: 18,
            CPUCoresUse: 1.2,
            CPUAvg: '0.30',
            RAM: '47%',
            RAMAll: 64,
            RAMUse: 30,
            DISK: '31.25%',
            DISKAll: 8,
            DISKUse: 2.53,
            GPU: '5%',
        },
        {
            key: '4',
            HostName: 'WIN_X64_AC741',
            ip: '192.168.31.201',
            tags: ['空闲', '已检修'],
            CPU: '12%',
            CPUCoresAll: 18,
            CPUCoresUse: 3.4,
            CPUAvg: '0.25',
            RAM: '39%',
            RAMAll: 64,
            RAMUse: 25,
            DISK: '45%',
            DISKAll: 8,
            DISKUse: 3.66,
            GPU: '4%',
        },
        {
            key: '5',
            HostName: 'WIN_X64_AI663',
            ip: '192.168.31.102',
            tags: ['空闲', '已检修'],
            CPU: '15%',
            CPUCoresAll: 18,
            CPUCoresUse: 2.9,
            CPUAvg: '0.14',
            RAM: '31%',
            RAMAll: 64,
            RAMUse: 20,
            DISK: '13%',
            DISKAll: 1.04,
            DISKUse: 8,
            GPU: '2%',
        },
        {
            key: '6',
            HostName: 'UNIX_X64_AK556',
            ip: '192.168.31.306',
            tags: ['空闲', '已检修'],
            CPU: '10%',
            CPUCoresAll: 18,
            CPUCoresUse: 2.0,
            CPUAvg: '0.30',
            RAM: '32%',
            RAMAll: 64,
            RAMUse: 21,
            DISK: '72%',
            DISKAll: 5.80,
            DISKUse: 8,
            GPU: '2%',
        },
    ];
    return (
        <PageContainer>
            <Card>
                <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <SmileTwoTone /> 主机管理页面
                </Typography.Title>
                <Card>
                    <Table columns={columns} dataSource={data} />
                </Card>
                <Modal
                    title='主机配置'
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>{modalText}</p>
                    <Form>
                        <Transfer
                            dataSource={mockData}
                            titles={['可用算力资源', '已启用']}
                            targetKeys={targetKeys}
                            selectedKeys={selectedKeys}
                            onChange={onChange}
                            onSelectChange={onSelectChange}
                            onScroll={onScroll}
                            render={(item) => item.title}
                        />
                    </Form>
                </Modal>

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

