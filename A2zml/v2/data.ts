// 代理工具
export interface ProxyTool {
  id: number;
  name: string;
  description: string;
  platform: string[];
  github?: string;
  download?: string;
}

export const proxyTools: ProxyTool[] = [
  {
    id: 2,
    name: 'Continuation of Clash Verge',
    description: '基于Tauri的现代GUI客户端，设计用于Windows、macOS和Linux，提供定制化的代理体验',
    platform: ['Windows', 'Linux', 'macOS'],
    github: 'https://github.com/clash-verge-rev/clash-verge-rev',
    download: 'https://github.com/clash-verge-rev/clash-verge-rev/releases'
  },
  {
    id: 3,
    name: 'V2RayN',
    description: '一个面向Windows、Linux和macOS的图形界面客户端，支持Xray、Sing-box等协议',
    platform: ['Windows', 'Linux', 'macOS'],
    github: 'https://github.com/2dust/v2rayN',
    download: 'https://github.com/2dust/v2rayN/releases'
  },
  {
    id: 4,
    name: 'V2RayNG',
    description: '一款适用于Android的V2Ray客户端，支持Xray核心和v2fly核心',
    platform: ['Android'],
    github: 'https://github.com/2dust/v2rayNG',
    download: 'https://github.com/2dust/v2rayNG/releases'
  },
  {
    id: 5,
    name: 'Sing-box',
    description: '通用代理平台',
    platform: ['通用核心'],
    github: 'https://github.com/SagerNet/sing-box',
    download: 'https://github.com/SagerNet/sing-box/releases'
  },
  {
    id: 6,
    name: 'Mihomo GUI',
    description: '又一个Mihomo图形界面',
    platform: ['Windows', 'Linux', 'macOS'],
    github: 'https://github.com/mihomo-party-org/mihomo-party',  
    download: 'https://github.com/mihomo-party-org/mihomo-party/releases'
  },
  {
    id: 7,
    name: 'Hiddify-app',
    description: '多平台自动代理客户端，支持 Sing-box、X-ray、TUIC、Hysteria、Reality、Trojan、SSH 等。它是开源的，安全且无广告。',
    platform: ['多平台'],
    github: 'https://github.com/hiddify/hiddify-app',
    download: 'https://github.com/hiddify/hiddify-app/releases'
  },
  {
    id: 8,
    name: 'NekoBox for Android',
    description: '一款使用 sing-box 的 Android 通用代理软件.',
    platform: ['Android'],
    github: 'https://github.com/MatsuriDayo/NekoBoxForAndroid', 
    download: 'https://github.com/MatsuriDayo/NekoBoxForAndroid/releases'
  }
];

// 节点订阅
export interface NodeSubscription {
  id: number;
  name: string;
  platform: string[];
  url: string;
}
export const nodeSubscriptions: NodeSubscription[] = [
  {
    id: 1,
    name: '站长自建订阅 Normal',
    platform: ['v2rayNG', 'MahsaNG', 'v2rayN', 'v2rayN-PRO', 'Shadowrocket', 'Streisand', 'Hiddify'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/normal/84db2e79-5a3f-4daf-8d1b-53e778011f17#%F0%9F%92%A6%20BPB%20Normal'
  },
  {
    id: 2,
    name: '站长自建订阅 Normal',
    platform: ['huskyi', 'Nekobox', 'Nekoray', 'Karing'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=singbox#%F0%9F%92%A6%20BPB%20Normal'
  },
  {
    id: 3,
    name: '站长自建订阅 Full Normal',
    platform: ['v2rayNG', 'MahsaNG', 'v2rayN', 'v2rayN-PRO', 'Streisand'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/full-normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray#%F0%9F%92%A6%20BPB%20Full%20Normal'
  },
  {
    id: 4,
    name: '站长自建订阅 Full Normal',
    platform: ['sing-box', ' v2rayN (sing-box)'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/full-normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=sfa#%F0%9F%92%A6%20BPB%20Full%20Normal'
  },
  {
    id: 5,
    name: '站长自建订阅 Full Normal',
    platform: ['Clash Meta', 'Clash Verge', 'FlClash', 'Stash', 'v2rayN (mihomo)'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/full-normal/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=clash#%F0%9F%92%A6%20BPB%20Full%20Normal'
  },
  {
    id: 6,
    name: '站长自建订阅 Fragment',
    platform: ['v2rayNG', 'MahsaNG', 'v2rayN', 'v2rayN-PRO', 'Streisand'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/fragment/84db2e79-5a3f-4daf-8d1b-53e778011f17#%F0%9F%92%A6%20BPB%20Fragment'
  },
  {
    id: 7,
    name: '站长自建订阅 Fragment',
    platform: ['Hiddify'],
    url: 'hiddify://import/https://v2.jixiejidiguan.eu.org/sub/fragment/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=hiddify-frag#%F0%9F%92%A6%20BPB%20Fragment'
  },
  {
    id: 8,
    name: '站长自建订阅 Warp',
    platform: ['v2rayNG', 'v2rayN', 'Streisand'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray#%F0%9F%92%A6%20BPB%20Warp'
  },
  {
    id: 9,
    name: '站长自建订阅 Warp',
    platform: ['sing-box', ' v2rayN (sing-box)'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=singbox#%F0%9F%92%A6%20BPB%20Warp'
  },
  {
    id: 10,
    name: '站长自建订阅 Warp',
    platform: ['Hiddify'],
    url: 'hiddify://import/https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=hiddify#%F0%9F%92%A6%20BPB%20Warp'
  },
  {
    id: 11,
    name: '站长自建订阅 Warp',
    platform: ['Clash Meta', 'Clash Verge', 'FlClash', 'Stash', 'v2rayN (mihomo)'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/warp/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=clash#%F0%9F%92%A6%20BPB%20Warp'
  },
  {
    id: 12,
    name: '站长自建订阅 Warp PRO',
    platform: ['v2rayNG', 'v2rayN', 'Streisand'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray-pro#%F0%9F%92%A6%20BPB%20Warp%20Pro'
  },
  {
    id: 13,
    name: '站长自建订阅 Warp PRO',
    platform: ['MahsaNG', 'v2rayN-PRO'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=xray-knocker#%F0%9F%92%A6%20BPB%20Warp%20Pro'
  },
  {
    id: 14,
    name: '站长自建订阅 Warp PRO',
    platform: ['Clash Meta', 'Clash-verified Verge', 'FlClash', 'Stash', 'v2rayN (mihomo)'],
    url: 'https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=clash-pro#%F0%9F%92%A6%20BPB%20Warp%20Pro'
  },
  {
    id: 15,
    name: '站长自建订阅 Warp PRO',
    platform: ['Hiddify'],
    url: 'hiddify://import/https://v2.jixiejidiguan.eu.org/sub/warp-pro/84db2e79-5a3f-4daf-8d1b-53e778011f17?app=hiddify-pro#%F0%9F%92%A6%20BPB%20Warp%20Pro'
  },
  {
    id: 16,
    name: 'GitHub Pawdroid/Free-servers',
    platform: ['多平台'],
    url: 'https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub'
  }
]
