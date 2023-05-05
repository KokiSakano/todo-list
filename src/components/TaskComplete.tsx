'use client'

import prisma from "@/lib/prisma";
import { tasks } from "@prisma/client"
import { ReactEventHandler, useState } from "react"

export default function TaskComplete({ task }: { task: tasks }) {
  const [checked, setChecked] = useState(task.completed);
  const onChange: ReactEventHandler<HTMLInputElement> = async (e) => {
    const res = await fetch(`/api/tasks/${task.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: e.currentTarget.checked
        })
      }
    );
    setChecked((await res.json()).task.completed);
  };

  return (
    <input type="checkbox" onChange={onChange} checked={checked} />
  )
}
