import { Typography, List, Button } from '@douyinfe/semi-ui';
import { IconAIFilledLevel1 } from '@douyinfe/semi-icons/lib/es/icons';
import { FriendLinks } from '../Data';
import LinksCard from './fast/LinksCard';

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

const Links = () => {
    const data = shuffle(FriendLinks);
    const itemStyle = { margin: '8px 2px' };

    return (
        <section id="links" style={{ margin: '16px 0' }}>
            <Typography.Title heading={3}>友情链接</Typography.Title>
            <Typography.Paragraph>列表排名不分先后，随机排序。</Typography.Paragraph>

            <List
                grid={{ gutter: 12, xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item style={itemStyle}>
                        <LinksCard data={item} />
                    </List.Item>
                )}
                style={{ margin: '12px 0' }}
            />

            <Button
                colorful
                theme="solid"
                type="primary"
                icon={<IconAIFilledLevel1 />}
                iconPosition="right"
                onClick={() => window.open('https://wj.qq.com/s2/25425052/c669/', '_blank')}
            >
                友情链接申请
            </Button>
        </section>
    );
};

export default Links;
