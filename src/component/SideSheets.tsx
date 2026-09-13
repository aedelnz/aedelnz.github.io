import { SideSheet } from "@douyinfe/semi-ui";
import Headers from "./Headers";

interface SideSheetsProps {
    sideSheet: boolean;
    change: () => void;
}

const SideSheets = ({ sideSheet, change }: SideSheetsProps) => {
    return (
        <SideSheet
            style={{ width: "auto" }}
            bodyStyle={{ padding: 0 }}
            visible={sideSheet}
            onCancel={change}
            headerStyle={{ display: "none" }}
        >
            <Headers mode="vertical" change={change} />
        </SideSheet>
    );
};

export default SideSheets;
