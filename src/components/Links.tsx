import { useState, useEffect } from 'react'
import { Typography, Button } from '@douyinfe/semi-ui'
import { Fetchs } from './lib/Fetchs'
import { IconChevronRight } from '@douyinfe/semi-icons';

const Links = () => {
    const [data, setData] = useState<any | null>(null);
    const [, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const loadUser = async () => {
            setLoading(true);
            const data = await Fetchs('/root/index.json');
            if (data) {
                setData(data);
            }
            setLoading(false);
        };
        loadUser();
    }, []);
    return (
        <div>
            {data && data.map((item: any) => (
                <div key={item.title}>
                    <img src={item.image} alt={item.title} />
                    <Typography.Title heading={4}>{item.name}</Typography.Title>
                    <Button icon={<IconChevronRight />} iconPosition="right" theme='solid' type='tertiary' onClick={() => window.open(item.link)} target="_blank" rel="noopener noreferrer">{item.button}</Button>
                </div>
            ))}
        </div>
    )

}
export default Links