import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TaskService } from '../../services/task.service';
import { Task, TaskStatus } from '../../models/task.model';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewInit {
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;

  tasks: Task[] = [];
  pieChart!: Chart;
  barChart!: Chart;

  showForm = false;
  editTaskId: number | null = null;
  newTask: Partial<Task> = { title: '', description: '', status: 'PENDING' };

  stats = {
    pending: 0,
    inProgress: 0,
    completed: 0,
    total: 0
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  ngAfterViewInit(): void {
    this.createCharts();
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetForm();
  }

  resetForm() {
    this.editTaskId = null;
    this.newTask = { title: '', description: '', status: 'PENDING' };
  }

  cancelForm() {
    this.showForm = false;
    this.resetForm();
  }

  saveTask() {
    if (!this.newTask.title || !this.newTask.status) {
      alert('Título e status são obrigatórios!');
      return;
    }

    if (this.editTaskId) {
      this.taskService.update(this.editTaskId, this.newTask).subscribe({
        next: () => { this.loadTasks(); this.cancelForm(); },
        error: err => console.error(err)
      });
    } else {
      const taskToCreate: Omit<Task, 'id'> = {
        title: this.newTask.title!,
        description: this.newTask.description || '',
        status: this.newTask.status as TaskStatus,
        createdAt: new Date().toISOString() // ← Garante que a tarefa terá data/hora
      };
      this.taskService.create(taskToCreate).subscribe({
        next: () => { this.loadTasks(); this.cancelForm(); },
        error: err => console.error(err)
      });
    }
  }

  editTask(task: Task) {
    this.editTaskId = task.id!;
    this.newTask = { ...task };
    this.showForm = true;
  }

  deleteTask(id: number | undefined): void {
    if (id && confirm('Tem certeza que quer excluir essa tarefa?')) {
      this.taskService.delete(id).subscribe({ next: () => this.loadTasks() });
    }
  }

  loadTasks(): void {
    this.taskService.getAll().subscribe({
      next: data => {
        // Garantir que todas as tarefas tenham createdAt
        this.tasks = (data || []).map(t => ({
          ...t,
          createdAt: t.createdAt ? t.createdAt : new Date().toISOString()
        }));

        this.updateCharts();
        this.updateStats();
      },
      error: err => {
        console.error(err);
        this.tasks = [];
        this.updateCharts();
        this.updateStats();
      }
    });
  }

  // --- Charts ---
  createCharts() {
    setTimeout(() => {
      this.pieChart = new Chart(this.pieCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['Pendentes', 'Em Progresso', 'Concluídas'],
          datasets: [{
            data: [1, 1, 1],
            backgroundColor: ['#FB923C','#60A5FA','#34D399'],
            borderColor:'#fff',
            borderWidth:4
          }]
        },
        options: {
          responsive:true,
          maintainAspectRatio:false,
          plugins:{ legend:{ position:'bottom' as const } }
        }
      });

      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type:'bar',
        data:{
          labels:['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
          datasets:[{
            label:'Tarefas criadas',
            data:[0,0,0,0,0,0,0],
            backgroundColor:'#6366F1',
            borderRadius:8
          }]
        },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}}
      });

      this.updateCharts();
    }, 100);
  }

  updateCharts() {
    if (!this.pieChart || !this.barChart) return;

    const pend = this.tasks.filter(t => t.status==='PENDING').length;
    const prog = this.tasks.filter(t => t.status==='IN_PROGRESS').length;
    const comp = this.tasks.filter(t => t.status==='COMPLETED').length;

    this.pieChart.data.datasets[0].data = [pend, prog, comp];
    this.pieChart.update('none');

    const daily = [0,0,0,0,0,0,0];
    this.tasks.forEach(t => {
      if(t.createdAt){
        const day = new Date(t.createdAt).getDay();
        daily[(day+6)%7]++; // ← Segunda = 0
      }
    });
    this.barChart.data.datasets[0].data = daily;
    this.barChart.update('none');
  }

  updateStats() {
    this.stats.pending = this.tasks.filter(t => t.status === 'PENDING').length;
    this.stats.inProgress = this.tasks.filter(t => t.status === 'IN_PROGRESS').length;
    this.stats.completed = this.tasks.filter(t => t.status === 'COMPLETED').length;
    this.stats.total = this.tasks.length;
  }

  getStatusColor(status: TaskStatus): string {
    switch(status){
      case 'PENDING': return 'warn';
      case 'IN_PROGRESS': return 'primary';
      case 'COMPLETED': return 'accent';
      default: return 'basic';
    }
  }

  getStatusLabel(status: TaskStatus): string {
    switch(status){
      case 'PENDING': return 'Pendente';
      case 'IN_PROGRESS': return 'Em Progresso';
      case 'COMPLETED': return 'Concluída';
      default: return status;
    }
  }
}
