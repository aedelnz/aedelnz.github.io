import {
  Avatar,
  Button,
  Card,
  MarkdownRender,
  SideSheet,
} from '@douyinfe/semi-ui';
import { IconAIFilledLevel1 } from '@douyinfe/semi-icons';
import {type CardItem } from './Data';
import { useBreakpoint } from '../hook/useBreakpoint';

const BottomSideSheet = (
{ data, visible, toggleVisible }: {
  data: CardItem;
  visible: boolean;
  toggleVisible: () => void;
}) => {
  const { height } = useBreakpoint();

  const cut = (text?: string) => {
    if (typeof text !== 'string') return undefined;
    const idx = text.indexOf('\n\n');
    return idx === -1 ? text : text.slice(0, idx);
  };

  const cutAfter = (text?: string) =>
    typeof text === 'string' ? text.split('\n\n').slice(1).join('\n\n') : undefined;

  return (
    <SideSheet
      title="详细"
      height={height}
      visible={visible}
      onCancel={toggleVisible}
      closeOnEsc
      placement="bottom"
    >
      <Card
        style={{ width: '100%', marginTop: 8 }}
        title={
          <Card.Meta
            title={data.name}
            description={cut(data.desc)}
            avatar={<Avatar shape="square" size="default" src={data.icon} />}
          />
        }
        footerLine
        footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
        footer={
          <Button
            colorful
            theme="solid"
            type="primary"
            icon={<IconAIFilledLevel1 />}
            onClick={() => window.open(data.url, '_blank', 'noopener,noreferrer')}
          >
            点击直达
          </Button>
        }
      >
        <MarkdownRender
          raw={cutAfter(data.desc)}
          format="md"
          style={{ marginBottom: 20 }}
        />
      </Card>
    </SideSheet>
  );
};

export default BottomSideSheet;
