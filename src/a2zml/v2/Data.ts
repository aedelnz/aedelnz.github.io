// 代理工具
export interface iOpenTool {
    title?: string;
    description?: string;
    platform?: string[];
    github?: string;
    image?: string;
}

export const OpenTool: iOpenTool[] = [
    {
        title: 'Continuation of Clash Verge',
        description: '基于Tauri的现代GUI客户端，设计用于Windows、macOS和Linux，提供定制化的代理体验',
        platform: ['Windows', 'Linux', 'macOS'],
        github: 'https://github.com/clash-verge-rev/clash-verge-rev',
        image: '/root/opentool/clash-verge-rev.png'
    },
    {
        title: 'V2RayN',
        description: '一个面向Windows、Linux和macOS的图形界面客户端，支持Xray、Sing-box等协议',
        platform: ['Windows', 'Linux', 'macOS'],
        github: 'https://github.com/2dust/v2rayN',
        image: '/root/opentool/v2rayN.jpeg'
    },
    {
        title: 'V2RayNG',
        description: '一款适用于Android的V2Ray客户端，支持Xray核心和v2fly核心',
        platform: ['Android'],
        github: 'https://github.com/2dust/v2rayNG',
        image: '/root/opentool/v2rayNG.jpeg'
    },
    {
        title: 'Sing-box',
        description: '通用代理平台',
        platform: ['通用核心'],
        github: 'https://github.com/SagerNet/sing-box',
        image: '/root/opentool/sing-box.jpeg'
    },
    {
        title: 'Mihomo GUI',
        description: '一个更易用的代理客户端',
        platform: ['Windows', 'Linux', 'macOS'],
        github: 'https://github.com/mihomo-party-org/clash-party',
        image: '/root/opentool/clash-party.jpg'
    },
    {
        title: 'Hiddify-app',
        description: '多平台自动代理客户端，支持 Sing-box、X-ray、TUIC、Hysteria、Reality、Trojan、SSH 等。它是开源的，安全且无广告。',
        platform: ['多平台'],
        github: 'https://github.com/hiddify/hiddify-app',
        image: '/root/opentool/hiddify-app.png'
    },
    {
        title: 'NekoBox for Android',
        description: '一款使用 sing-box 的 Android 通用代理软件.',
        platform: ['Android'],
        github: 'https://github.com/MatsuriDayo/NekoBoxForAndroid',
        image: '/root/opentool/NekoBoxForAndroid.jpeg'
    }
];

// 节点订阅
export interface iSubscribeNode {
    id?: number;
    title?: string;
    platform?: string[];
    url?: string;
}
export const SubscribeNode: iSubscribeNode[] = [
    {
        title: '站长自建订阅 Normal',
        platform: ['v2rayNG', 'MahsaNG', 'v2rayN', 'v2rayN-PRO', 'Shadowrocket', 'Streisand', 'Hiddify'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/normal/84db2e79-5a3f-4daf-8d1b-53e778011f17#%F0%9F%92%A6%20BPB%20Normal'
    },
    {
        title: '站长自建订阅 Normal',
        platform: ['huskyi', 'Nekobox', 'Nekoray', 'Karing'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=singbox#%F0%9F%92%A6%20BPB%20Normal'
    },
    {
        title: '站长自建订阅 Full Normal',
        platform: ['v2rayNG', 'MahsaNG', 'v2rayN', 'v2rayN-PRO', 'Streisand'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/full-normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray#%F0%9F%92%A6%20BPB%20Full%20Normal'
    },
    {
        title: '站长自建订阅 Full Normal',
        platform: ['sing-box', ' v2rayN (sing-box)'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/full-normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=sfa#%F0%9F%92%A6%20BPB%20Full%20Normal'
    },
    {
        title: '站长自建订阅 Full Normal',
        platform: ['Clash Meta', 'Clash Verge', 'FlClash', 'Stash', 'v2rayN (mihomo)'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/full-normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=clash#%F0%9F%92%A6%20BPB%20Full%20Normal'
    },
    {
        title: '站长自建订阅 Fragment',
        platform: ['v2rayNG', 'MahsaNG', 'v2rayN', 'v2rayN-PRO', 'Streisand'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/fragment/84db2e79-5a3f-4daf-8d1b-53e778011f17#%F0%9F%92%A6%20BPB%20Fragment'
    },
    {
        title: '站长自建订阅 Fragment',
        platform: ['Hiddify'],
        url: 'hiddify://import/https://v2.jixiejidiguan.eu.org/sub/fragment/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=hiddify-frag#%F0%9F%92%A6%20BPB%20Fragment'
    },
    {
        title: '站长自建订阅 Warp',
        platform: ['v2rayNG', 'v2rayN', 'Streisand'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray#%F0%9F%92%A6%20BPB%20Warp'
    },
    {
        title: '站长自建订阅 Warp',
        platform: ['sing-box', ' v2rayN (sing-box)'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=singbox#%F0%9F%92%A6%20BPB%20Warp'
    },
    {
        title: '站长自建订阅 Warp',
        platform: ['Hiddify'],
        url: 'hiddify://import/https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=hiddify#%F0%9F%92%A6%20BPB%20Warp'
    },
    {
        title: '站长自建订阅 Warp',
        platform: ['Clash Meta', 'Clash Verge', 'FlClash', 'Stash', 'v2rayN (mihomo)'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=clash#%F0%9F%92%A6%20BPB%20Warp'
    },
    {
        title: '站长自建订阅 Warp PRO',
        platform: ['v2rayNG', 'v2rayN', 'Streisand'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray-pro#%F0%9F%92%A6%20BPB%20Warp%20Pro'
    },
    {
        title: '站长自建订阅 Warp PRO',
        platform: ['MahsaNG', 'v2rayN-PRO'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray-knocker#%F0%9F%92%A6%20BPB%20Warp%20Pro'
    },
    {
        title: '站长自建订阅 Warp PRO',
        platform: ['Clash Meta', 'Clash-verified Verge', 'FlClash', 'Stash', 'v2rayN (mihomo)'],
        url: 'https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=clash-pro#%F0%9F%92%A6%20BPB%20Warp%20Pro'
    },
    {
        title: '站长自建订阅 Warp PRO',
        platform: ['Hiddify'],
        url: 'hiddify://import/https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=hiddify-pro#%F0%9F%92%A6%20BPB%20Warp%20Pro'
    },
    {
        title: 'GitHub Pawdroid/Free-servers',
        platform: ['多平台'],
        url: 'https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub'
    }
]
