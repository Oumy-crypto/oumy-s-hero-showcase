import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { id: Date.now(), text: trimmed, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-lg shadow-elegant">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-serif">Ma To-Do List</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Input row */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
            className="flex gap-2"
          >
            <Input
              placeholder="Nouvelle tâche…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" aria-label="Ajouter">
              <Plus className="h-5 w-5" />
            </Button>
          </form>

          {/* Task list */}
          {tasks.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-8">
              Aucune tâche pour le moment. Ajoutez-en une !
            </p>
          ) : (
            <ul className="space-y-2">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                  />
                  <span
                    className={`flex-1 text-sm transition-all duration-200 ${
                      task.completed
                        ? "line-through text-muted-foreground opacity-60"
                        : "text-foreground"
                    }`}
                  >
                    {task.text}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTask(task.id)}
                    aria-label="Supprimer"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>

        <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {remaining} tâche{remaining !== 1 ? "s" : ""} restante{remaining !== 1 ? "s" : ""}
          </span>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Accueil
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todo;
