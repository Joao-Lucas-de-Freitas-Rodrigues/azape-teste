// dashboard.models.ts
export interface Customer {
    name: string;
    doc: string;
  }
  
  export interface Seller {
    id: string;
  }
  
  export interface Payment {
    amount: number;
    status: string;
    method: string;
  }
  
  export interface Order {
    _id: string;
    customer: Customer;
    seller: Seller;
    payment: Payment;
    status: string;
    createdAt: string;
  }
  
  export interface DashboardData {
    orders_total: number;
    orders_count: number;
    sales_total: number;
    sales_count: number;
    average_ticket: number;
    orders: Order[];
    has_more: boolean;
    limit: number;
    total_pages: number;
    page: number;
    total: number;
  }