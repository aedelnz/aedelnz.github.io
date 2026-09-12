import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * 递归为嵌套导航数据重新分配连续 ID（仅对数字类型的 id 生效）
 * @param {Array} data - 导航数据数组（会被直接修改）
 * @param {number} startId - 起始 ID（默认 1）
 * @returns {Array} 修改后的导航数据
 * @description 运行命令：node start.db.id.js
 */
function reorderNavIds(data, startId = 1) {
  let currentId = startId;

  function processNode(node) {
    // 仅当 id 为数字类型时，重新分配并递增计数器
    if (typeof node.id === 'number') {
      node.id = currentId++;
    }
    // 非数字 id 不做修改，计数器不变

    // 递归处理子节点（如果存在 nav 数组）
    if (node.nav && Array.isArray(node.nav)) {
      node.nav.forEach(child => processNode(child));
    }
    return node;
  }

  // 直接修改原数据（避免浅拷贝不彻底的问题）
  data.forEach(node => processNode(node));
  return data;
}

// 获取当前文件目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 自执行异步函数，用于读取、处理并写回 db.json
(async () => {
  try {
    const dbPath = path.join(__dirname, 'db.json');
    const dbContent = await fs.readFile(dbPath, 'utf8');
    const originalNavData = JSON.parse(dbContent);

    // 从 ID=1 开始重新排序（仅对数字 id 生效）
    const reorderedData = reorderNavIds(originalNavData);

    // 将结果写回文件
    await fs.writeFile(dbPath, JSON.stringify(reorderedData, null, 2), 'utf8');
    console.log('✅ 排序成功，已写回 db.json');
  } catch (error) {
    console.error('❌ 处理过程中发生错误：', error);
  }
})();