import { Video } from '@/components/Customs/Video';
import { DownloadOutlined, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Form, InputNumber, Progress, Row, Select, Typography } from 'antd';

const page = () => {
  return (
    <>
      <PageContainer>
        <Card>
          <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
            <SmileTwoTone /> {'真实海面建模工具'}
          </Typography.Title>
          <Card>
            <Form>
              <Col>
                <Row>
                  <Col>
                    <Form.Item
                      label={'选择模型'}
                      name={'model'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <Select
                        showSearch={true}
                        placeholder={'Select a model'}
                        optionFilterProp={'children'}
                        filterOption={(input, option) =>
                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                          {
                            value: 'default',
                            label: 'default',
                          },
                        ]}
                        title={'选择模型'}
                        style={{
                          minWidth: '300%',
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                {/*<Divider/>*/}
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} wrap>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'风速'}
                      name={'wind_speed'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'风向'}
                      name={'wind_direction'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'浪高'}
                      name={'wave_height'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'海向'}
                      name={'marine_direction'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'海周期'}
                      name={'marine_period'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'温度'}
                      name={'temperature'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'盐度'}
                      name={'salinity'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item
                      label={'持续时长'}
                      name={'lasting_span'}
                      rules={[{ required: true, message: 'Required Argument' }]}
                    >
                      <InputNumber min="0" max="180" step="0.001" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify={'end'} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row">
                    <Form.Item>
                      <Button
                        onClick={() => {
                          alert('work in progress');
                        }}
                      >
                        {'保存预设'}
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item>
                      <Button
                        onClick={() => {
                          alert('work in progress');
                        }}
                      >
                        {'加载预设'}
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item>
                      <Button
                        onClick={() => {
                          alert('work in progress');
                        }}
                        type="primary"
                      >
                        {'开始'}
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row">
                    <Form.Item>
                      <Button
                        onClick={() => {
                          alert('work in progress');
                        }}
                        disabled
                      >
                        {'暂停'}
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Form>
            <Progress />
          </Card>
          <Card>
            <Video shown url="/data/video/DetailWave.mp4" title="preview" />
            <Card>
              <Col>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{
                    margin: '8px',
                  }}
                >
                  {'文件大小:'}
                  {'5 GiB'}
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{
                    margin: '8px',
                  }}
                >
                  <Button
                    onClick={() => {
                      alert('work in progress');
                    }}
                    type="primary"
                    icon={<DownloadOutlined />}
                  >
                    {'保存到本地'}
                  </Button>
                </Row>
              </Col>
            </Card>
          </Card>
        </Card>
      </PageContainer>
    </>
  );
};

export default page;
