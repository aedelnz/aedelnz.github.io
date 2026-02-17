import { Divider, Space, Tag, Typography, Card, Avatar } from '@arco-design/web-react';
import { MY_SOCIALS } from '../constants/Data';

function MySocial() {
    
    const PLATFORM_COLORS = [
        '--color-data-1',
        '--color-data-2',
        '--color-data-3',
        '--color-data-4',
        '--color-data-5',
        '--color-data-6',
        '--color-data-7',
        '--color-data-8',
        '--color-data-9',
        '--color-data-10',
        '--color-data-11',
    ];
    const  colors = PLATFORM_COLORS.map((color) => `var(${color})`);

    return (
        <>
            <Divider />
            <section id="MySocial" className="full-container">
                <Space direction='vertical' align='center' style={{ width: '100%' }}>
                    <Tag size='large' color='cyan'>Contact me</Tag>
                    <div style={{ textAlign: 'center' }}>
                        <Typography.Title heading={3} style={{ fontWeight: '700', margin: '0' }}>社交圈</Typography.Title>
                        <Typography.Paragraph>可以通过下面社交平台联系到我</Typography.Paragraph>
                    </div>
                </Space>

                <Space wrap style={{ display: 'flex', justifyContent: 'center' }}>
                    {MY_SOCIALS.map((item, index) => (
                        <Card key={index} hoverable={true} style={{ width: '100px', height: '100px' }} className='card-custom-hover-style' onClick={() => window.open(item.link, '_blank')}>
                            <Space align='center' direction='vertical' style={{ width: '100%', height: '100%' }}>
                                <Avatar style={{ backgroundColor: colors[index] }}>{item.title[0]}</Avatar>
                                <Typography.Text className='text-ellipsis' style={{ margin: '0', fontWeight: '700' }}>{item.title}</Typography.Text>
                            </Space>
                        </Card>
                    ))}
                </Space>
            </section>
        </>
    );
}

export default MySocial
