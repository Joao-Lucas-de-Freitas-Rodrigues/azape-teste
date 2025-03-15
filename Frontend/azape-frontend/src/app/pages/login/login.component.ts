import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        
        console.log(response)
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.profile.name);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Falha no login. Verifique suas credenciais.';
        }
      },
      error: (err) => {
        console.error('Erro de login:', err);
        this.errorMessage = 'Falha no login. Verifique suas credenciais.';
      }
    });
  }
}
