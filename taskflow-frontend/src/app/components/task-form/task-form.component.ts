import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'  // ← corrigido: era styleUrls (plural)
})
export class TaskFormComponent {

  task: Task = {
    title: '',
    description: '',
    status: 'PENDING'  // ou 'pendente' — depende do seu backend
  };

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.task.title.trim()) {
      alert('O título é obrigatório!');
      return;
    }

    // AQUI ESTAVA O ERRO: o método se chama "create", não "createTask"
    this.taskService.create(this.task).subscribe({
      next: () => {
        alert('Tarefa criada com sucesso!');
        this.router.navigate(['/tasks']);
      },
      error: (err: any) => {
        console.error('Erro ao criar tarefa:', err);
        alert(err.message || 'Erro ao criar a tarefa. Verifique o backend.');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/tasks']);
  }
}
