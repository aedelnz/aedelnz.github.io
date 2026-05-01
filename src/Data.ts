
// 咸鱼的社交圈
export interface MySocial {
    title: string;
    link: string;
}
export const MY_SOCIALS: MySocial[] = [
    { title: "爱发电", link: "https://afdian.com/a/JIXIEJIDIGUAN" },
    { title: "哔哩哔哩", link: "https://b23.tv/BJULPJJ" },
    { title: "快手", link: "https://v.kuaishou.com/2FvxsLA" },
    { title: "抖音", link: "https://v.douyin.com/lRfkI3ENw98" },
    { title: "微博", link: "https://weibo.com/u/7882405990" },
    { title: "微信公众号", link: "https://mp.weixin.qq.com/mp/author?action=show&author_id=ofMoI4-2KfsxPOlxFS5_kuG4-YjA" },
    { title: "QQ群聊", link: "https://qm.qq.com/q/zMafUp6LRe" },
    { title: "腾讯频道", link: "https://pd.qq.com/s/29y1ect4g?b=9" },
    { title: "猫耳FM", link: "https://www.missevan.com/21564822" },
    { title: "网易云音乐", link: "https://y.music.163.com/m/user?id=2070612671" },
    { title: "酷狗音乐", link: "https://activity.kugou.com/share/v-c7b4da67/index.html?id=2e0df7766e16410cad7d09993cbf8240" }
];

// 咸鱼作品集
export interface SubSites {
    title: string;
    description: string;
    tag: string;
    image: string;
    link: string;
}
export const Sub_Site: SubSites[] = [
    {
        title: '画的博客',
        description: '致力于提供通俗易懂的技术教程与踩坑经验。',
        tag: 'Astro',
        image: '/root/SubSite/blog.png',
        link: 'https://blog.jixiejidiguan.top/'
    },
    {
        title: '画的接口',
        description: '专注开发测速与科研调用的API服务。',
        tag: 'OpenList',
        image: '/root/SubSite/jiekou.png',
        link: 'https://s.jixiejidiguan.top/'
    },
    {
        title: '画的工具',
        description: '免安装·更高效·更便捷｜在线工具集合',
        tag: 'OpenList',
        image: '/root/SubSite/tools.png',
        link: 'https://tools.jixiejidiguan.top/'
    },
    {
        title: '画的资源',
        description: '来自阿里云盘资源＆网易云音乐挂载',
        tag: 'OpenList',
        image: '/root/SubSite/ziyuan.png',
        link: 'https://download.jixiejidiguan.top/'
    },
    {
        title: '网站状态',
        description: '每五分钟检查一次网站状态',
        tag: ' UptimeRobot',
        image: '/root/SubSite/start.png',
        link: 'https://site.jixiejidiguan.eu.org'
    },
    {
        title: "Internet Speed Test",
        description: "详细内容请点击【魔法网络】查看",
        tag: 'Cloudflare',
        image: '/root/SubSite/speedCloudflare.png',
        link: "https://v2.jixiejidiguan.eu.org"
    }
];

export const Sub_Site_Stop: SubSites[] = [
    {
        title: "BiliRoaming Service",
        description: " 一个停止运行的哔哩哔哩漫游服务！",
        tag: 'BiliRoaming',
        image: '/root/SubSite/biliroaming.png',
        link: "https://bili.jixiejidiguan.eu.org"
    },

];

// 友情链接
export interface FriendlyLink {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}
export const FRIENDLY_LINKS: FriendlyLink[] = [
    {
        title: 'Ar-Sr-Na个人网站',
        description: '突破计算边界，构筑数字视界',
        image: 'https://st1-res.arsrna.cn/logo.ico',
        link: 'https://www.arsrna.cn'
    },
    {
        title: '白鹭学园',
        description: '白鹭学园是一个动漫同好社区，著力于分享ACG相关信息',
        image: 'https://img.srsg.moe/2021/06/01/c5b555e3b8a17.png',
        link: 'https://srsg.moe'
    },
    {
        title: '团子笔记',
        description: '最简单的小站，记录自己的每时每刻',
        image: 'https://q1.qlogo.cn/g?b=qq&nk=1351856278&s=5',
        link: 'https://www.zhouzhou.work/'
    },
    {
        title: "Xiwangly's Blog",
        description: '这是Xiwangly的博客，记录我自己的技术成长过程和我的日常',
        image: 'https://q1.qlogo.cn/g?b=qq&nk=1334850101&s=5',
        link: 'https://xiwangly.top'
    },
    {
        title: 'Magma Ink',
        description: '为美好的生活献礼',
        image: 'https://q1.qlogo.cn/g?b=qq&nk=823202450&s=5',
        link: 'https://magma.ink'
    },
    {
        title: '小丁的屋舍',
        description: '谈笑有鸿儒，往来无白丁',
        image: 'https://q1.qlogo.cn/g?b=qq&nk=2724962172&s=5',
        link: 'https://xding.top'
    },
    {
        title: '星之阁API',
        description: '不要和你的努力说对不起，那样会多对不起你的努力啊！',
        image: 'https://p.qlogo.cn/gh/905188643/905188643/0',
        link: 'https://api.xingzhige.com'
    },
    {
        title: '二次元论坛',
        description: '按下F逃离世界！',
        image: 'https://p.qlogo.cn/gh/892876555/892876555/0',
        link: 'https://www.ecylt.top'
    },
    {
        title: "PangBai's Blog",
        description: "PangBai's Blog = 𝕺𝖚𝖗 𝕷𝖎𝖋𝖊 = 旁白博客",
        image: 'https://q1.qlogo.cn/g?b=qq&nk=1642981619&s=5',
        link: 'https://pangbai.work'
    },
    {
        title: 'TomyJan',
        description: '一只菜的要死还每天不努力只知道bbll娱乐至死的废柴',
        image: 'https://q1.qlogo.cn/g?b=qq&nk=2445387644&s=5',
        link: 'https://blog.tomys.top/'
    },
    {
        title: 'MCWQZSの小站',
        description: 'MCWQZSの小站',
        image: 'https://q1.qlogo.cn/g?b=qq&nk=3519137422&s=5',
        link: 'https://www.mcwqzs.com'
    }
];