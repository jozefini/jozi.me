import { useMemo } from 'react'
import { v4 as uuid } from 'uuid'

export function useUniqueArrayIds(list: any = []): any[] | [] {
  const uniqueList = useMemo(
    () =>
      Array.isArray(list)
        ? list.map((item: any) => ({ ...item, id: item.id || uuid() }))
        : [],
    [list]
  )
  return uniqueList
}
