import { useState, useEffect, useCallback } from 'react'
import { type NavData } from '../../a2zml/Data'

export const useDB = () => {
    const API_URL = '/root/db.json'
    const [data, setData] = useState<NavData[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(API_URL)
            if (!response.ok) {
                throw new Error(`请求失败，状态码：${response.status}`)
            }
            const json: NavData[] = await response.json()
            setData(json)
        } catch (err) {
            setError(err instanceof Error ? err : new Error('加载导航数据失败'))
            setData(null)
        } finally {
            setLoading(false)
        }
    }, [])
    useEffect(() => {
        const request = window.setTimeout(() => {
            void fetchData()
        }, 0)
        return () => window.clearTimeout(request)
    }, [fetchData])
    return { data, loading, error }
}