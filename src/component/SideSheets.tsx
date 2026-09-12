import { SideSheet } from "@douyinfe/semi-ui"
import Headers from "./Headers";

const SideSheets = ({ sideSheet, change }: { sideSheet: boolean, change: () => void }) => {
    return (
        <>
            <SideSheet
                style={{ width: 'auto' }}
                bodyStyle={{ padding: 0 }}
                visible={sideSheet}
                onCancel={change}
                headerStyle={{ display: 'none' }}
            >
                <Headers mode="vertical" change={change} />
            </SideSheet>
        </>
    )
}
export default SideSheets