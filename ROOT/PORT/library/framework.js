// 改进后的通用资源加载器
async function loadResources(resources) {
  try {
    // 使用详细错误追踪的并行加载
    await Promise.all(
      resources.map(async (resource) => {
        switch (resource.type) {
          case 'css':
            await loadCSS(resource.url)
              .then(() => console.log(`CSS loaded: ${resource.url}`))
              .catch((err) => 
                console.error(`CSS加载失败: ${resource.url} -`, err)
              );
            break;
          case 'js':
            await loadJS(resource.url)
              .then(() => console.log(`JS loaded: ${resource.url}`))
              .catch((err) => 
                console.error(`JS加载失败: ${resource.url} -`, err)
              );
            break;
          default:
            throw new Error(`未知资源类型: ${resource.type}`);
        }
      })
    );
    console.log('所有资源加载完成');
  } catch (error) {
    // 捕获顶层错误（理论上不会触发）
    console.error('批量加载资源出错:', error);
  }
}

// 标准化的CSS加载器
function loadCSS(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = resolve;
    link.onerror = (e) => reject(new Error(`加载CSS失败 (${url}): ${e.message}`));
    document.head.appendChild(link);
  });
}

// 标准化的JS加载器
function loadJS(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = (e) => reject(new Error(`加载JS失败 (${url}): ${e.message}`));
    document.head.appendChild(script);
  });
}

// 使用示例
const resources = [
  { type: 'css', url: '/ROOT/PORT/library/mdui.css' },
  { type: 'js', url: '/ROOT/PORT/library/mdui.global.js' },
  { type: 'css', url: '/ROOT/PORT/library/normalize.min.css' }
];

loadResources(resources);
