import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { DashboardData, Order } from '../../interfaces/dashboard.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  dashboardData: DashboardData | null = null;
  isLoading: boolean = true;
  errorMessage: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  change: boolean = false;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadUserName();
    this.loadDashboardData();
  }

  loadUserName(): void {
    const userNameLocal = localStorage.getItem('username');
    if (userNameLocal) {
      this.userName = userNameLocal;
    }
  }

  loadDashboardData(): void {
    this.isLoading = true;
    
    this.dashboardService.getDashboard(this.currentPage, this.itemsPerPage).subscribe({
      next: (data:DashboardData) => {
        this.dashboardData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading dashboard data:', err);
        this.errorMessage = 'Falha ao carregar dados da dashboard. Por favor tente novamente.';
        this.isLoading = false;
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  formatPaymentMethod(method: string): string {
    const methodMap: { [key: string]: string } = {
      'credit': 'Crédito à vista',
      'credit_installments': 'Crédito a prazo',
      'pix': 'Pix',
      'boleto': 'Boleto'
    };
    
    return methodMap[method.toLowerCase()] || method;
  }

  formatOrderStatus(status: string): string {
    const statusMap: { [key: string]: string } = {
      'paid': 'Pagamento aprovado',
      'pending': 'Pendente',
      'canceled': 'Cancelado'
    };
    
    return statusMap[status] || status;
  }

  formatCpfCnpj(document: string): string {
    if (!document) return '';
  
    const cleaned = document.replace(/\D/g, '');
  
    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cleaned.length === 14) {
      return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  
    return document;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadDashboardData();
  }

  onItemsPerPageChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.itemsPerPage = Number(value);
    this.currentPage = 1;
    this.loadDashboardData();
  }
}
