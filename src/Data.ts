export interface iContactMe {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}
export const ContactMe: iContactMe[] = [
    {
        title: '爱发电',
        description: '支持UP主，一般都不在线。',
        image: '/root/contact/afdian.png',
        link: 'https://afdian.com/a/JIXIEJIDIGUAN'
    },
    {
        title: '哔哩哔哩',
        description: '关注UP主，两三天会上线查看。',
        image: '/root/contact/bilibili.png',
        link: 'https://space.bilibili.com/359155821'
    },
    {
        title: '抖音',
        description: 'UP主基本上每天都会刷抖音。',
        image: '/root/contact/douyin.png',
        link: 'https://v.douyin.com/HkSAkVAqgyQ/'
    },
    {
        title: '网易云音乐',
        description: 'UP主喜欢歌单音乐分享',
        image: '/root/contact/music163.png',
        link: 'https://music.163.com/m/playlist?id=3111626385&creatorId=2070612671'
    },
    {
        title: '酷狗音乐',
        description: 'UP主喜欢的音乐分享',
        image: '/root/contact/kugou.png',
        link: 'https://activity.kugou.com/page/v-3023b6a0/index.html?qrcode=https://activity.kugou.com/share/v-c7b4da67/index.html?id=2e0df7766e16410cad7d09993cbf8240'
    },
    {
        title: 'QQ群',
        description: 'QQ群文件存在一些资源',
        image: '/root/contact/qmqq.png',
        link: 'https://qm.qq.com/q/A692kYM8f0'
    },
    {
        title: 'QQ频道',
        description: '放在吃灰的频道',
        image: '/root/contact/pdqq.png',
        link: 'https://pd.qq.com/s/crozyfoaq?b=5'
    },
]

export interface iOtherWorks {
    status?: string;
    title?: string;
    description?: string;
    tag?: string;
    label?: string;
    image?: string;
    link?: string;
}
export const OtherWorks: iOtherWorks[] = [
    {
        status: '正常',
        title: '画的博客',
        description: '致力于提供通俗易懂的技术教程与踩坑经验。',
        tag: 'Astro',
        label: '博客',
        image: '/root/works/blog.png',
        link: 'https://blog.jixiejidiguan.top/'
    },
    {
        status: '正常',
        title: '画的接口',
        description: '专注开发测速与科研调用的API服务。',
        tag: 'Typecho',
        label: '接口',
        image: '/root/works/jiekou.png',
        link: 'https://s.jixiejidiguan.top/'
    },
    {
        status: '正常',
        title: '画的工具',
        description: '免安装·更高效·更便捷｜在线工具集合',
        tag: 'React ',
        label: '工具',
        image: '/root/works/tools.png',
        link: 'https://tools.jixiejidiguan.top/'
    },
    {
        status: '正常',
        title: '画的资源',
        description: '来自阿里云盘资源＆网易云音乐挂载',
        tag: 'OpenList',
        label: '资源',
        image: '/root/works/ziyuan.png',
        link: 'https://download.jixiejidiguan.top/'
    },
    {
        status: '正常',
        title: '网站状态',
        description: '每五分钟检查一次网站状态',
        tag: ' UptimeRobot',
        label: '状态',
        image: '/root/works/start.png',
        link: 'https://site.jixiejidiguan.eu.org'
    },
    {
        status: '正常',
        title: "Internet Speed Test",
        description: "详细内容请点击【魔法网络】查看",
        tag: 'Cloudflare',
        label: '测速',
        image: '/root/works/speedCloudflare.png',
        link: "https://v2.jixiejidiguan.eu.org"
    },
    {
        status: '暂停服务',
        title: "BiliRoaming Service",
        description: " 一个停止运行的哔哩哔哩漫游服务！",
        tag: 'BiliRoaming',
        label: '漫游',
        image: '/root/works/biliroaming.png',
        link: "https://bili.jixiejidiguan.eu.org"
    },

]

export interface iFriendlyLinks {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}
export const FriendLinks: iFriendlyLinks[] = [
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
        image: 'https://api.xingzhige.com/favicon.ico',
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
    },
];