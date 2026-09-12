import { useEffect, useState } from 'react';

/** 断点配置，可按项目自定义 */
export const BREAKPOINTS = {
  xs: 0,     // 手机
  sm: 576,   // 小平板
  md: 768,   // 平板
  lg: 992,   // 小屏桌面
  xl: 1200,  // 桌面
  xxl: 1600, // 大屏
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/** 升序排列的断点表 */
const SORTED = (Object.entries(BREAKPOINTS) as [Breakpoint, number][])
  .sort((a, b) => a[1] - b[1]);

/** 根据宽度匹配断点 */
function match(width: number): Breakpoint {
  let current: Breakpoint = 'xs';
  for (const [name, min] of SORTED) {
    if (width >= min) current = name;
  }
  return current;
}

/** 读取当前视口尺寸 */
function getSize() {
  return {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  };
}

/**
 * 响应式断点 Hook，返回屏幕宽高、当前断点及常用判断
 * @param debounce 防抖时间(ms)，默认 100
 *
 * @example
 * const { width, height, breakpoint, isMobile } = useBreakpoint();
 */
export function useBreakpoint(debounce = 100) {
  const [size, setSize] = useState(getSize);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => match(size.width));

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const next = getSize();
        setSize(next);
        setBreakpoint(match(next.width));
      }, debounce);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [debounce]);

  return {
    width: size.width,
    height: size.height,
    breakpoint,
    isMobile: size.width < BREAKPOINTS.md,                       // < 768
    isTablet: size.width >= BREAKPOINTS.md && size.width < BREAKPOINTS.lg, // 768~992
    isDesktop: size.width >= BREAKPOINTS.lg,                     // >= 992
    isPortrait: size.height >= size.width,                       // 竖屏
  };
}

// src/pages/ResponsiveDemo.tsx
// import { Card, Space, Tag, Typography } from '@douyinfe/semi-ui';
// import { useBreakpoint, type Breakpoint } from '@/hooks/useBreakpoint';
//
// const TAG_COLOR: Record<Breakpoint, string> = {
//   xs: 'red', sm: 'orange', md: 'yellow',
//   lg: 'green', xl: 'blue', xxl: 'violet',
// };
//
// export default function ResponsiveDemo() {
//   const { width, height, breakpoint, isMobile, isDesktop, isPortrait } = useBreakpoint();
//
//   return (
//     <Card title="响应式断点演示" style={{ maxWidth: 720, margin: 24 }}>
//       <Space vertical align="start">
//         <Typography.Text>
//           屏幕尺寸：<strong>{width} × {height}</strong> px
//         </Typography.Text>
//         <Typography.Text>
//           当前断点：<Tag color={TAG_COLOR[breakpoint]}>{breakpoint}</Tag>
//           <Tag>{isPortrait ? '竖屏' : '横屏'}</Tag>
//         </Typography.Text>
//
//         {isMobile && <Tag color="red">移动端视图</Tag>}
//         {isDesktop && <Tag color="green">桌面端视图</Tag>}
//       </Space>
//     </Card>
//   );
// }
