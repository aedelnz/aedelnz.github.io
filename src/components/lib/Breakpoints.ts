import { useState, useEffect } from 'react';

// 1. 定义断点配置与类型
const BREAKPOINTS = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
} as const;

type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * 获取当前激活的断点
 */
export function useBreakpoint(): BreakpointKey {
  // 获取当前屏幕宽度对应的断点
  const getCurrentBreakpoint = (): BreakpointKey => {
    // 防御性处理：SSR 环境下 window 可能不存在
    if (typeof window === 'undefined') return 'md'; 
    
    const width = window.innerWidth;
    if (width < 576) return 'xs';
    if (width < 768) return 'sm';
    if (width < 992) return 'md';
    if (width < 1200) return 'lg';
    if (width < 1600) return 'xl';
    return 'xxl';
  };

  const [breakpoint, setBreakpoint] = useState<BreakpointKey>(getCurrentBreakpoint);

  useEffect(() => {
    // 使用 ResizeObserver 或 resize 事件监听窗口变化
    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    // 添加防抖以提升性能（可选，这里直接用原生事件演示）
    window.addEventListener('resize', handleResize);
    
    // 初始化时再校验一次，防止 SSR 到 CSR 的切换导致闪烁
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}

/**
 * 判断当前是否匹配某个断点（基于 matchMedia）
 * @param key 断点键名
 */
export function useMatchBreakpoint(key: BreakpointKey): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(BREAKPOINTS[key]).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(BREAKPOINTS[key]);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    
    // 兼容旧版浏览器
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }

    // 初始化同步状态
    setMatches(mediaQuery.matches);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, [key]);

  return matches;
}


/**
 * 监听页面滚动，判断是否超过指定阈值
 * @param threshold 滚动阈值，默认 200px
 */
export function useScrollThreshold(threshold: number = 200): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // window.pageYOffset 兼容性好，也可以用 window.scrollY
      setIsScrolled(window.pageYOffset > threshold);
    };

    // 初始化时先执行一次，防止刷新页面时状态不对
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}