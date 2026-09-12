import { Layout, Typography } from '@douyinfe/semi-ui'

const Footers = ({ title = '', desc = '' }) => {
    return (
        <Layout.Footer>
            <div>
                <Typography.Paragraph>{desc}</Typography.Paragraph>
                <Typography.Paragraph>
                    Copyright © 2020-{new Date().getFullYear()}{' '}
                    <Typography.Text link={{ href: 'https://jixiejidiguan.top/' }} underline>
                        {title || '画的个人记录'}
                    </Typography.Text>
                    . All Rights Reserved.
                </Typography.Paragraph>
            </div>
            <div className="footer-links">
                <Typography.Text link={{ href: 'https://beian.miit.gov.cn/' }} underline>
                    湘ICP备2022000040号
                </Typography.Text>
                <Typography.Text link={{ href: 'https://icp.gov.moe/?keyword=20220440' }} underline>
                    萌ICP备20220440号
                </Typography.Text>
                <Typography.Text link={{ href: 'https://www.12377.cn/' }} underline>
                    违法和不良信息举报中心
                </Typography.Text>
            </div>
        </Layout.Footer>
    )
}

export default Footers