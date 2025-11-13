import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onSubmit(email: string, password: string) {
  this.authService.login(email, password).subscribe({
      next: () => {
        // pass the user's email to the Task route via navigation state
        this.router.navigate(['/tasks'], { state: { email } });
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }
}
