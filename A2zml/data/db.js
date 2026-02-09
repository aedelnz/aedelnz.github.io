import fs from 'fs/promises';
import path from 'path';
/**
 * 自动生成文件路径
 * @param {string} sourcePath - 源文件路径
 * @returns {string} 自动生成的输出路径
 */
function getOutputPath(sourcePath) {
  const dir = path.dirname(sourcePath);
  const ext = path.extname(sourcePath);
  const name = path.basename(sourcePath, ext);
  return path.join(dir, `${name}${ext}`);
}
/**
 * 读取并处理 JSON 文件
 * @param {string} sourceFilePath - 源文件路径
 * @param {number} indent - 缩进空格数，0 表示压缩
 * @param {string} action - 操作类型（用于日志）
 * @returns {Promise<void>}
 */
async function processJsonFile(sourceFilePath, indent, action) {
  try {
    const sourceAbsPath = path.resolve(sourceFilePath);
    const outputPath = getOutputPath(sourceFilePath);
    // 读取并处理 JSON
    const rawData = await fs.readFile(sourceAbsPath, 'utf8');
    const jsonObj = JSON.parse(rawData);
    const processedJson = JSON.stringify(jsonObj, null, indent);
    await fs.writeFile(outputPath, processedJson, 'utf8');
    // 计算大小
    const originalSize = (await fs.stat(sourceAbsPath)).size;
    const processedSize = (await fs.stat(outputPath)).size;
    // 输出日志
    console.log(`JSON ${action}完成：`);
    console.log(`- 源文件：${sourceAbsPath}`);
    console.log(`- 输出文件：${outputPath}`);
    console.log(`- 原始大小：${originalSize} 字节`);
    console.log(`- 处理后大小：${processedSize} 字节`);
    if (indent === 0) {
      console.log(`- 压缩率：${((1 - processedSize / originalSize) * 100).toFixed(2)}%`);
    }
  } catch (error) {
    console.error(`JSON ${action}失败：`, error.message);
    throw error;
  }
}
// 主函数
(async () => {
  const sourceJsonPath = './db.json';
  const args = process.argv.slice(2);
  const command = args[0];
  if (!['compress', 'format'].includes(command)) {
    console.error('请传入有效命令：compress/format');
    console.log('示例：');
    console.log('  node db.js compress  # 仅压缩');
    console.log('  node db.js format    # 仅格式化');
    process.exit(1);
  }
  try {
    if (command === 'compress') {
      await processJsonFile(sourceJsonPath, 0, '压缩');
    } else if (command === 'format') {
      await processJsonFile(sourceJsonPath, 2, '格式化');
    }
  } catch (err) {
    console.error('操作失败：', err);
  }
})();