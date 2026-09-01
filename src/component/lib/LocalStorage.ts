import { useState, useEffect, useCallback } from 'react'

/**
 * 将状态持久化到 localStorage 的自定义 Hook
 * @template T 存储值的类型
 * @param key localStorage 的键名
 * @param init 默认值（支持函数，惰性求值）
 * @returns { value, setValue, removeValue }
 *   - value: 当前存储的值
 *   - setValue: 更新值（支持直接值或函数式更新）
 *   - removeValue: 移除存储并重置为初始值
 */
function useLocalStorage<T>(key: string, init: T | (() => T)) {
  const read = (k: string): T => {
    try {
      const raw = localStorage.getItem(k)
      if (raw !== null) return JSON.parse(raw) as T
    } catch {
      void 0
    }
    return typeof init === 'function' ? (init as () => T)() : init
  }

  const [val, setVal] = useState<T>(() => read(key))

  // 只在 key 或 val 变化时写入 localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val))
  }, [key, val])

  const remove = useCallback(() => {
    localStorage.removeItem(key)
    setVal(typeof init === 'function' ? (init as () => T)() : init)
  }, [key, init])

  return { value: val, setValue: setVal, removeValue: remove }
}

export default useLocalStorage