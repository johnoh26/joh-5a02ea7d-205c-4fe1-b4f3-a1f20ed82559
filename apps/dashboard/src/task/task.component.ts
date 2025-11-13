import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Task {
  id?: number;
  content: string;
  status: string;
  owner?: string;
  priority?: string;
}

@Component({
  selector: 'app-task',
  imports: [CommonModule ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() userId?: string;
  email?: string | null;
  tasks: Task[] = [];
  loading = false;
  error?: string;
  private router = inject(Router);

  ngOnInit(): void {
    // read email from navigation state (set in login navigation)
    const nav = this.router.getCurrentNavigation();
    this.email =
      (nav?.extras?.state as { email?: string })?.email ??
      (history.state?.email as string | undefined) ??
      null;

    // auto-load when a userId is provided
    if (this.email) {
      this.loadTasks();
    }
  }

  async loadTasks() {
    if (!this.email) {
      this.error = 'No email provided';
      return;
    }

    this.loading = true;
    this.error = undefined;
    try {
      const res = await fetch(`/api/tasks?email=${encodeURIComponent(this.email)}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText);
      }
      const data = await res.json();
      // expect an array of tasks
      this.tasks = Array.isArray(data) ? data : [];
    } catch (err: any) {
      this.error = err?.message || 'Failed to load tasks';
    } finally {
      this.loading = false;
    }
  }
}
