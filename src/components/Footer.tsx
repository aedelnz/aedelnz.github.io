import { Divider, Typography, Button, Link, BackTop } from '@arco-design/web-react';
import { IconCaretUp } from '@arco-design/web-react/icon';

function Footer() {
    // 当前年份
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Divider style={{ margin: '0 auto' }} />
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                <Typography.Paragraph bold>Copyright © 2020 - {currentYear}  <Link hoverable={false} href='https://jixiejidiguan.top'>画的个人记录</Link>. All Rights Reserved.</Typography.Paragraph>
                <Typography.Paragraph>
                    <Link href='https://beian.miit.gov.cn'>湘ICP备2022000040号</Link>
                    <Link href='https://icp.gov.moe/?keyword=20220440'>萌ICP备20220440号</Link>
                    <Link href='https://www.12377.cn'>违法和不良信息举报中心</Link>
                </Typography.Paragraph>
            </div>
            <BackTop visibleHeight={600}>
                <Button type='outline' icon={<IconCaretUp />} />
            </BackTop>
        </>
    )
};
export default Footer;