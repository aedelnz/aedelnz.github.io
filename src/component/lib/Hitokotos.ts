import { useState, useCallback, useEffect } from 'react'

interface HitokotoResponse {
  id: number
  hitokoto: string
  type: string
  from: string
  from_who?: string | null
  creator?: string
  creator_uid?: number
  reviewer?: number
  commit_from?: string
  created_at?: string
  length?: number
}

interface UseHitokotoReturn {
  data: HitokotoResponse | null
  loading: boolean
  refresh: () => void
}

export const useHitokoto = (): UseHitokotoReturn => {
  const [data, setData] = useState<HitokotoResponse | null>(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch('https://v1.hitokoto.cn/')
        const json: HitokotoResponse = await response.json()
        setData(json)
      } catch {
        void 0
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => refresh()
    fetchData()
    return () => {setData(null)}
  }, [refresh])

  return { data, loading, refresh }
}