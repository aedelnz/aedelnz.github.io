import { useMemo } from 'react'
import { Toast } from '@douyinfe/semi-ui'

type ToastType = 'info' | 'error' | 'warning' | 'success'

interface ShowOptions {
  /** 是否先清空已有提示，默认 true（只保留当前一条） */
  clear?: boolean
}

interface ToastApi {
  info: (text: string, options?: ShowOptions) => void
  error: (text: string, options?: ShowOptions) => void
  warning: (text: string, options?: ShowOptions) => void
  success: (text: string, options?: ShowOptions) => void
  destroyAll: () => void
}

export function useToast(): ToastApi {
  return useMemo<ToastApi>(() => {
    const show = (type: ToastType) => (text: string, options?: ShowOptions) => {
      // 默认清空，保证同时只显示一条
      if (options?.clear !== false) {
        Toast.destroyAll()
      }
      Toast[type](text)
    }

    return {
      info: show('info'),
      error: show('error'),
      warning: show('warning'),
      success: show('success'),
      destroyAll: () => Toast.destroyAll(),
    }
  }, [])
}