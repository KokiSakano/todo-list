import { tasks } from "@prisma/client";
import dayjs from "dayjs";
import TaskComplete from "./TaskComplete";

export default async function Task({ task }: { task: tasks }) {
  return (
    <div className="flex items-end justify-between bg-white p-4 border border-slate-200">
      <div className="flex">
        <TaskComplete task={task} />
        <h2 className="text-4xl text-gray-700 ml-3">
          {task.title}
        </h2>
      </div>
      <p className="ml-3 text-xl text-gray-700">
        {dayjs(task.createdAt).format('YYYY/MM/DD')}
      </p>
    </div>
  );
}