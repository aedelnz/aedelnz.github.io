import { useState, useEffect } from 'react'

// 断点定义
export const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export type BreakpointKey = typeof breakpointKeys[number]

// 断点最大宽度映射
const maxWidth: Record<BreakpointKey, number> = { xs: 575, sm: 767, md: 991, lg: 1199, xl: 1599, xxl: Infinity }

// 根据宽度获取当前断点
const getBreakpoint = (w: number): BreakpointKey => {
  for (const k of breakpointKeys) if (w <= maxWidth[k]) return k
  return 'xxl'
}

// 工厂函数：生成监听窗口指定尺寸的 Hook
const createDimensionHook = (prop: 'innerWidth' | 'innerHeight') => () => {
  const [value, setValue] = useState(typeof window !== 'undefined' ? window[prop] : 0)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const handler = () => setValue(window[prop])
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return value
}

// 导出宽、高监听 Hook
export const useWindowWidth = createDimensionHook('innerWidth')
export const useWindowHeight = createDimensionHook('innerHeight')

// 断点判断 Hook
export const useBreakpoint = (breakpoint?: BreakpointKey) => {
  const width = useWindowWidth()
  const current = getBreakpoint(width)
  return breakpoint
    ? breakpointKeys.indexOf(current) <= breakpointKeys.indexOf(breakpoint)
    : current
}