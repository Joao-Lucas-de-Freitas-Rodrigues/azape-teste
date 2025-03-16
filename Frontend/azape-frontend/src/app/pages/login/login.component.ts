import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Preencha todos os campos obrigatórios.';
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Formato de e-mail inválido.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.profile.name);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Credenciais inválidas. Verifique seu e-mail e senha.';
        }
      },
      error: (err) => {
        console.error('Erro de login:', err);
        this.errorMessage = 'Credenciais inválidas. Verifique seu e-mail e senha.';
      }
    });
  }
}