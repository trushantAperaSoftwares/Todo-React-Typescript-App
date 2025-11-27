import { createContext, useContext, useState } from "react";
import type { ReactNode } from 'react';
import toast from "react-hot-toast";


export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id: string,
    task: string,
    completed: boolean,
    createdAt: Date
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const newTodos = localStorage.getItem("todos") || "[]"
            return JSON.parse(newTodos) as Todo[]
        } catch (error) {
            return []
        }
    });

    // Add Todo
    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date()
            },
            ...prev
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos))
            toast.success("Task added!");
            
            return newTodos
        })
    };

    // Toggle Completed
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }

                return todo;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            toast("Task updated!");
            return newTodos;
        });
    };


    // delete todo
    const handleDeleteTodo = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            toast.error("Task deleted!");
            return newTodos;
        });
    };


    return (
        <todosContext.Provider value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}>
            {children}
        </todosContext.Provider>
    );
};

// Consumer hook
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);

    if (!todosConsumer) {
        throw new Error("useTodos must be used inside TodosProvider");
    }

    return todosConsumer;
};
