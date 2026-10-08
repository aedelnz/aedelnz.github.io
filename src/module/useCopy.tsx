import { useCallback } from 'react'
import { useToast } from './useToast'

/** 复制文本到剪贴板（自动降级 execCommand），成功/失败均弹 Toast 提示 */
export function useCopy(): (text: string) => Promise<boolean> {
  const Toast = useToast()
  return useCallback(async (text: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      Toast.success('已复制到剪贴板')
      return true
    } catch {
      Toast.error('复制失败，请手动选择复制')
      return false
    }
  }, [Toast])
}
