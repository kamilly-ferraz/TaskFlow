import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';

  constructor() {}

  private getTasksFromStorage(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveTasksToStorage(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getAll(): Observable<Task[]> {
    return of(this.getTasksFromStorage());
  }

  create(task: Omit<Task, 'id'>): Observable<Task> {
    const tasks = this.getTasksFromStorage();
    const newTask: Task = { ...task, id: Date.now() };
    tasks.push(newTask);
    this.saveTasksToStorage(tasks);
    return of(newTask);
  }

  update(id: number, task: Partial<Task>): Observable<Task> {
    const tasks = this.getTasksFromStorage();
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return throwError(() => new Error('Tarefa não encontrada'));
    tasks[index] = { ...tasks[index], ...task };
    this.saveTasksToStorage(tasks);
    return of(tasks[index]);
  }

  delete(id: number): Observable<void> {
    let tasks = this.getTasksFromStorage();
    tasks = tasks.filter(t => t.id !== id);
    this.saveTasksToStorage(tasks);
    return of(void 0);
  }
}
