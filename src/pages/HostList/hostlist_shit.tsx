import { SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Card, Col, Row, Typography, Button, Checkbox, Modal, Form, Input, Select, DatePicker, InputNumber, Space, Statistic, CountdownProps, Tag, Transfer } from 'antd';
import { ColumnsType } from 'antd/es/table/InternalTable';
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
const mockData: RecordType[] = Array.from({ length: 4 }).map((_, i) => ({
    key: i.toString(),
    title: `NVIDIA RTX 4090 ${i + 1}`,
    description: `description of content${i + 1}`,
}));


const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

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

const detailsimulating: React.FC = () => {
    const [visible, setVisible] = useState(false);
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
    const handleSettings = (record: DataType) => {
        // 处理设置逻辑，可以在这里进行设置操作等
        console.log('设置主机：', record);
    };

    const showSettingsModal = (hostName: string) => {
        setVisible(true);
        // 处理设置模态框中的数据
        console.log('显示设置模态框：', hostName);
    };
    const SettingsForm = ({ hostName }: { hostName: string }) => {
        const [form] = Form.useForm();
        const [record, setRecord] = useState<DataType | undefined>(undefined); // 新增

        const onFinish = () => {
            form.validateFields().then((values) => {
                handleSettings({ ...record, ...values }); // 修改
                form.resetFields();
                setVisible(false);
            });
        };

        const onCancel = () => {
            form.resetFields();
            setVisible(false);
        };

        return (
            <Modal
                title={record ? `设置主机：${record.HostName}` : '设置主机'} // 修改
                visible={visible}
                onCancel={onCancel}
                footer={[
                    <Button key="cancel" onClick={onCancel}>
                        取消
                    </Button>,
                    <Button key="save" type="primary" onClick={onFinish}>
                        保存
                    </Button>,
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="passwd"
                        label="调度密码"
                        rules={[{ required: true, message: '请输入授权密码' }]}
                    >
                        <Input placeholder="请输入授权密码" />
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
                    </Form.Item>
                </Form>
            </Modal>
        );
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
                    <a onClick={() => showSettingsModal(record.HostName)}>设置</a>
                </Space>
            ),
        },
    ];


    const intl = useIntl();
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
                    <SmileTwoTone /> 主机管理页面
                </Typography.Title>
                <Card>
                    <Table columns={columns} dataSource={data} />
                </Card>
                <SettingsForm />

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

