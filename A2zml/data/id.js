import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
/**
 * 递归为嵌套导航数据重新分配连续 ID
 * @param {Array} data - 导航数据数组
 * @param {number} startId - 起始 ID（默认从 1 开始）
 * @returns {Array} 重新分配 ID 后的导航数据
 */
function reorderNavIds(data, startId = 1) {
  // 用闭包维护递增的 ID 计数器
  let currentId = startId;
  // 递归处理单个节点
  function processNode(node) {
    // 为当前节点分配新 ID
    node.id = currentId++;
    // 如果有子节点，递归处理
    if (node.nav && Array.isArray(node.nav) && node.nav.length > 0) {
      node.nav.forEach(childNode => {
        processNode(childNode);
      });
    }
    return node;
  }
  // 处理根节点数组
  return data.map(node => processNode({ ...node })); // 浅拷贝避免修改原数据
}
// 读取并解析 db.json 文件
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 自执行异步函数，用于处理文件读取和写入
(async () => {
  try {
    const dbPath = path.join(__dirname, 'db.json');
    const dbContent = await fs.readFile(dbPath, 'utf8');
    const originalNavData = JSON.parse(dbContent);
    // ========== 使用示例 ==========
    // 1. 从 ID=1 开始重新排序（默认）
    const reorderedData1 = reorderNavIds(originalNavData);
    // 将排序后的结果写回 db.json 文件
    await fs.writeFile(dbPath, JSON.stringify(reorderedData1, null, 2), 'utf8');
    console.log("排序后的结果已成功写回 db.json 文件");
  } catch (error) {
    console.error("处理过程中发生错误：", error);
  }
})();
