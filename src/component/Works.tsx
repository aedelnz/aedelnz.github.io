import { Typography, List, Card, Avatar, Button, Popover, Space, Tag } from '@douyinfe/semi-ui';
import { IconForward } from '@douyinfe/semi-icons';
import { OtherWorks } from '../Data';

const WorksCard = ({ data }) => {
  const { status, title, description, tag, label, image, link } = data;

  const imgUrl = `https://img02.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/95/crop/xy/ai/t/0/?appid=122&url=https://jixiejidiguan.top${image}`;

  return (
    <Card
      shadows="hover"
      style={{ width: '100%' }}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px'
      }}
      cover={
        <div style={{ position: 'relative', height: 200 }}>
          <Avatar
            shape="square"
            size="default"
            src={imgUrl}
            style={{ height: 200, width: '100%' }}
          />

          <Space
            align="center"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box'
            }}
          >
            {[tag, label, status].map((item, index) => (
              <Tag key={index} colorful type="light" shape="circle">
                {item}
              </Tag>
            ))}
          </Space>
        </div>
      }
    >
      <Popover
        position="top"
        showArrow
        content={<article style={{ padding: 6 }}>{description}</article>}
      >
        <Card.Meta
          title={
            <Typography.Paragraph ellipsis={{ suffix: ' ' }}>
              {title}
            </Typography.Paragraph>
          }
          description={
            <Typography.Paragraph ellipsis={{ suffix: ' ' }}>
              {description}
            </Typography.Paragraph>
          }
        />
      </Popover>

      <Button
        type="primary"
        icon={<IconForward />}
        onClick={() => window.open(link, '_blank')}
      />
    </Card>
  );
};

const Works = () => {
  return (
    <section id="works" style={{ margin: '16px 0' }}>
      <Typography.Title heading={3}>其他作品</Typography.Title>
      <Typography.Paragraph>欢迎访问和使用。</Typography.Paragraph>

      <div style={{ margin: '12px 0' }}>
        <List
          grid={{ gutter: 12, xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
          dataSource={OtherWorks}
          renderItem={item => (
            <List.Item style={{ margin: '8px 2px' }}>
              <WorksCard data={item} />
            </List.Item>
          )}
        />
      </div>
    </section>
  );
};

export default Works;
