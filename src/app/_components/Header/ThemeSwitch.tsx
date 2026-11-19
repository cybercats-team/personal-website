'use client';

import dynamic from 'next/dynamic';

const ThemeButton = dynamic(() => import('@/app/_components/Header/ThemeSwitch/ThemeButton'), { ssr: false })

export default function ThemeSwitch() {
  return <ThemeButton />
}