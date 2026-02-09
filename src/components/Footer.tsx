import { Card, Typography, Button, Link, BackTop } from '@arco-design/web-react';
import { IconWechatpay, IconCaretUp } from '@arco-design/web-react/icon';

function Footer() {
    // 当前年份
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Card style={{ padding: '3rem 1.5rem' }}>
                <Typography style={{ textAlign: 'center', paddingBottom: '1rem' }}>
                    <Typography.Title heading={3}>喜欢我的记录吗？</Typography.Title>
                    <Typography.Paragraph>如果有帮到你，或者只是想支持一下这条咸鱼，欢迎请我喝杯咖啡 ~</Typography.Paragraph>
                    <Button shape='round' size='large' type='outline' status='success' icon={<IconWechatpay />} anchorProps={{ target: '_blank' }} href="https://afdian.com/a/JIXIEJIDIGUAN">
                        前往 爱发电 支持
                    </Button>
                </Typography>
            </Card>

            <footer style={{ padding: '1rem' }}>
                <Typography style={{ textAlign: 'center' }}>
                    <Typography.Paragraph bold>Copyright © 2020 - {currentYear}  <Link hoverable={false} href='https://jixiejidiguan.top'>画的个人记录</Link>. All Rights Reserved.</Typography.Paragraph>
                    <Typography.Paragraph>
                        <Link href='https://beian.miit.gov.cn'>湘ICP备2022000040号</Link>
                        <Link href='https://icp.gov.moe/?keyword=20220440'>萌ICP备20220440号</Link>
                        <Link href='https://www.12377.cn'>违法和不良信息举报中心</Link>
                    </Typography.Paragraph>
                </Typography>
            </footer>

            <BackTop visibleHeight={600}>
                <Button size='large' type='outline' icon={<IconCaretUp />} />
            </BackTop>
        </>
    )
};
export default Footer;