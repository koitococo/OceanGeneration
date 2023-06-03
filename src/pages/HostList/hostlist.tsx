import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Card, Col, Row, Typography, Form, DatePicker, Space, Tag, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table/InternalTable';
import Transfer, { TransferDirection } from 'antd/es/transfer';
import Table from 'antd/lib/table/Table';
import React, { useState } from 'react';
const { RangePicker } = DatePicker;
interface DataType {
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
interface RecordType {
    key: string;
    title: string;
    description: string;
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
        title: 'NVIDIA RTX 4090',
        description: 'Description of Content 1',
        extraProp: 'Extra Property 1',
      },
    {
      key: '3',
      title: 'NVIDIA Omniverse',
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
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 1).map((item) => item.key);


const detailsimulating: React.FC = () => {

    const intl = useIntl();
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
    const showModal = ({ hostName }: { hostName: string }) => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('正在部署新的更改');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
        document.cookie = "isGCenabled=true; SameSite=None; secure";
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    function onFinish(values: any): void {
        throw new Error('Function not implemented.');
    }

    function onFinishFailed(errorInfo: ValidateErrorEntity<any>): void {
        throw new Error('Function not implemented.');
    }
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
                    <Row style={{ fontSize: '12px', color: '#888888' }}>{record.DISKUse} / {record.DISKAll} GB</Row>
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
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={showModal}>设置</a>
                </Space>
            ),
        },
    ];
    const data: DataType[] = [
        {
            key: '1',
            HostName: 'WIN_X86_AA020',
            ip: '120.54.168.21',
            tags: ['正在检修'],
            CPU: '12%',
            CPUCoresAll: 56,
            CPUCoresUse: 1.2,
            CPUAvg: '0.19',
            RAM: '24%',
            RAMAll: 64,
            RAMUse: 24,
            DISK: '6%',
            DISKAll: 256,
            DISKUse: 98,
            GPU: '66%',
        },
        {
            key: '2',
            HostName: 'WIN_X86_AB524',
            ip: '132.54.168.21',
            tags: ['故障'],
            CPU: '12%',
            CPUCoresAll: 56,
            CPUCoresUse: 1.2,
            CPUAvg: '0.19',
            RAM: '24%',
            RAMAll: 64,
            RAMUse: 24,
            DISK: '6%',
            DISKAll: 256,
            DISKUse: 98,
            GPU: '66%',
        },
        {
            key: '3',
            HostName: 'WIN_X86_AB626',
            ip: '192.168.31.2',
            tags: ['空闲', '已检修'],
            CPU: '12%',
            CPUCoresAll: 56,
            CPUCoresUse: 1.2,
            CPUAvg: '0.19',
            RAM: '24%',
            RAMAll: 64,
            RAMUse: 24,
            DISK: '6%',
            DISKAll: 256,
            DISKUse: 98,
            GPU: '66%',
        },
        {
            key: '4',
            HostName: 'WIN_X64_AC741',
            ip: '192.168.31.201',
            tags: ['空闲', '已检修'],
            CPU: '12%',
            CPUCoresAll: 56,
            CPUCoresUse: 1.2,
            CPUAvg: '0.19',
            RAM: '24%',
            RAMAll: 64,
            RAMUse: 24,
            DISK: '6%',
            DISKAll: 256,
            DISKUse: 98,
            GPU: '66%',
        },
        {
            key: '5',
            HostName: 'WIN_X64_AI663',
            ip: '192.168.31.102',
            tags: ['空闲', '已检修'],
            CPU: '12%',
            CPUCoresAll: 56,
            CPUCoresUse: 1.2,
            CPUAvg: '0.19',
            RAM: '24%',
            RAMAll: 64,
            RAMUse: 24,
            DISK: '6%',
            DISKAll: 256,
            DISKUse: 98,
            GPU: '66%',
        },
        {
            key: '6',
            HostName: 'UNIX_X64_AK556',
            ip: '192.168.31.102',
            tags: ['空闲', '已检修'],
            CPU: '12%',
            CPUCoresAll: 56,
            CPUCoresUse: 1.2,
            CPUAvg: '0.19',
            RAM: '24%',
            RAMAll: 64,
            RAMUse: 24,
            DISK: '6%',
            DISKAll: 256,
            DISKUse: 98,
            GPU: '66%',
        },
    ];
    return (
        <PageContainer
            content={intl.formatMessage({
                id: 'pages.admin.subPage.title',
                defaultMessage: '该页面只有在通过sudo验证权限后才能更改',
            })}
        >
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
                            titles={['Source', 'Target']}
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

export default detailsimulating;

