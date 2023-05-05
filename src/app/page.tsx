import TaskBox from '@/components/TaskBox'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<></>}>
        {/* @ts-expect-error Async Server Component */}
        <TaskBox />
      </Suspense>
    </main>
  )
}
