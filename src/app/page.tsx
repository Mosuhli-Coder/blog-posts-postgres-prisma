import { addTask, getTasks } from "@/actions/actions";
import Image from "next/image";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        All tasks:!
      </h1>

      <ul className="my-10 text-center">
        {tasks?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <form action={addTask} className="space-x-2 h-4">
        <input
          type="text"
          placeholder="Add Task"
          name="title"
          className="px-3 py-1 rounded"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </form>
    </main>
  );
}
