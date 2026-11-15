'use client'

import { useLayoutEffect } from 'react'

// 프로젝트 상세 페이지 마운트 시점 페이지 상단 고정 스크롤
const ScrollToTopOnMount = ({ id }: { id: string }) => {
    useLayoutEffect(() =>{
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }, [id])
  return null
}

export default ScrollToTopOnMount