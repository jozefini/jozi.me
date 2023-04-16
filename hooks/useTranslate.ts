import { shallow } from 'zustand/shallow'
import { useAppStore } from 'stores/useAppStore'

export function useTranslate() {
  const [translate, setTranslate] = useAppStore((s) => [s.translate, s.setTranslate], shallow)

  return { translate, setTranslate }
}
