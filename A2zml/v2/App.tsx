import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Layout, PageHeader, Typography, Link, Divider, Grid, Card, Button, Popconfirm, BackTop, Affix, Tag, Input, Space } from '@arco-design/web-react';
import { IconUp, IconDownload, IconInfoCircle, IconQrcode } from '@arco-design/web-react/icon';
import { proxyTools, ProxyTool, nodeSubscriptions, NodeSubscription } from './data';

function App() {
  // 当前年份
  const currentYear = new Date().getFullYear();
  // base64编码函数
  const toBase64 = (str: string) => {
    try {
      return btoa(encodeURIComponent(str));
    } catch (error) {
      console.error('编码失败:', error);
      return '';
    }
  };
  // base64解码函数
  const fromBase64 = (str: string) => {
    try {
      return decodeURIComponent(atob(str));
    } catch (error) {
      console.error('解码失败:', error);
      return '';
    }
  };
  // 待编码的文本
  const [textToEncode, setTextToEncode] = useState('');
  // 编码后的文本
  const [encodedResult, setEncodedResult] = useState('');

  return (
    <>
      <Layout>
        <Layout>
          <Affix>
            <Layout.Header style={{ background: 'var(--color-bg-1)' }}>
              <PageHeader title='风纪委员研究所' subTitle='科学上网服务' />
              <Divider style={{ margin: '0 auto' }} />
            </Layout.Header>
          </Affix>
          <Layout.Content style={{ padding: '8px' }}>
            <Typography.Title heading={4}>代理工具</Typography.Title>
            <Divider />
            <Grid cols={{ xs: 1, sm: 2, md: 2, lg: 3 }} colGap={12} rowGap={16}>
              {proxyTools.map((item: ProxyTool) => (
                <Grid.GridItem key={item.id}>
                  <Card hoverable style={{ overflow: 'hidden' }} actions={[<Button type='outline' icon={<IconInfoCircle />} href={item.github} target='_blank'>详细</Button>, <Button type='text' icon={<IconDownload />} href={item.download} target='_blank'>去下载</Button>]}>
                    <Card.Meta title={item.name} description={<><Typography.Text style={{ display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.description}</Typography.Text><Typography.Paragraph style={{ display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.platform.map((platform) => <Tag key={platform} color='blue' style={{ margin: '2px' }}>{platform}</Tag>)}</Typography.Paragraph></>} />
                  </Card>
                </Grid.GridItem>
              ))}
            </Grid>
            <Typography.Title heading={4}>节点订阅</Typography.Title>
            <Divider />
            <Grid cols={{ xs: 1, sm: 2, md: 2, lg: 3 }} colGap={12} rowGap={16}>
              {nodeSubscriptions.map((item: NodeSubscription) => (
                <Grid.GridItem key={item.id}>
                  <Card hoverable style={{ overflow: 'hidden' }} actions={[<Popconfirm icon={null} title={<QRCodeSVG value={item.url} size={200} />}><Button type='outline' icon={<IconQrcode />}>二维码</Button></Popconfirm>]}>
                    <Card.Meta title={item.name} description={<><Input value={toBase64(item.url)} /><Typography.Paragraph style={{ display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.platform.map((platform) => <Tag key={platform} color='blue' style={{ margin: '2px' }}>{platform}</Tag>)}</Typography.Paragraph></>} />
                  </Card>
                </Grid.GridItem>
              ))}
            </Grid>
            <Typography.Title heading={4}>base64编码</Typography.Title>
            <Divider />
            <Grid cols={{ xs: 1, sm: 1, md: 2, lg: 2 }} colGap={12} rowGap={16}>
              <Grid.GridItem>
                <Typography.Text>输入</Typography.Text>
                <Input.TextArea placeholder='输入' value={textToEncode} onChange={(value) => setTextToEncode(value)} allowClear autoSize />
                <Space style={{ marginTop: '1rem' }}>
                  <Button type='primary' onClick={() => setEncodedResult(toBase64(textToEncode))}>编码</Button>
                  <Button type='primary' onClick={() => setEncodedResult(fromBase64(textToEncode))}>解码</Button>
                </Space>
              </Grid.GridItem>
              <Grid.GridItem>
                <Typography.Text>结果</Typography.Text>
                <Input.TextArea placeholder='结果' value={encodedResult} autoSize />
              </Grid.GridItem>
            </Grid>
          </Layout.Content>

          <Layout.Footer style={{ background: 'var(--color-neutral-1)' }}>
            <Divider style={{ margin: '0' }} />
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>
              <Typography.Paragraph bold>Copyright © 2020 - {currentYear}  <Link hoverable={false} href='https://jixiejidiguan.top'>画的个人记录</Link>. All Rights Reserved.</Typography.Paragraph>
              <Typography.Text>本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。</Typography.Text>
            </div>
            <BackTop visibleHeight={80}>
              <Button type='outline' icon={<IconUp />} style={{ width: 40, height: 40 }} />
            </BackTop>
          </Layout.Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
