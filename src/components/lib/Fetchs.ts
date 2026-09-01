/**
 * 发起 GET 请求并自动解析 JSON
 * @param url 请求地址
 * @returns 解析后的 JSON 数据（类型为 T）
 */
export async function Fetchs<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      return null;
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}