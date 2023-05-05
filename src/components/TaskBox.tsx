import prisma from '@/lib/prisma';
import Task from "./Task";

export default async function TaskBox() {
  const tasks = await prisma.tasks.findMany({
    orderBy: {
      id: 'asc',
    }
  });

  return (
    <div className="bg-slate-300">
      <h1 className="p-4 text-6xl font-bold text-gray-700">Task Box</h1>
      {tasks.map((task) => {
        {/* @ts-expect-error Async Server Component */}
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
}