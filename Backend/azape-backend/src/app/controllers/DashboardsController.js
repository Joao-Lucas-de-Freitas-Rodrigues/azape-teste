import Order from "../models/Order";

class DashboardsController {
  async index(req, res) {
    try {
      const limit = parseInt(req.query.limit, 10) || 100;
      const page = parseInt(req.query.page, 10) || 1;
      const skip = (page - 1) * limit;

      const filter = {};

      const ordersMetrics = await Order.aggregate([
        { $match: filter },
        {
          $group: {
            _id: null,
            orders_total: { $sum: "$payment.amount" },
            orders_count: { $sum: 1 }
          }
        }
      ]);
      const ordersTotal = ordersMetrics.length > 0 ? ordersMetrics[0].orders_total : 0;
      const ordersCount = ordersMetrics.length > 0 ? ordersMetrics[0].orders_count : 0;

      const salesMetrics = await Order.aggregate([
        { $match: { ...filter, "payment.status": "succeeded" } },
        {
          $group: {
            _id: null,
            sales_total: { $sum: "$payment.amount" },
            sales_count: { $sum: 1 }
          }
        }
      ]);
      const salesTotal = salesMetrics.length > 0 ? salesMetrics[0].sales_total : 0;
      const salesCount = salesMetrics.length > 0 ? salesMetrics[0].sales_count : 0;
      const averageTicket = salesCount > 0 ? salesTotal / salesCount : 0;

      // Consulta paginada
      const ordersList = await Order.find(filter)
        .select({
          _id: 1,                       
          "seller.id": 1,               
          createdAt: 1,                 
          "customer.name": 1,           
          "customer.doc": 1,            
          status: 1,                    
          "payment.status": 1,          
          "payment.method": 1,          
          "payment.amount": 1           
        })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      // Dados de paginação
      const totalPages = Math.ceil(ordersCount / limit);
      const hasMore = page < totalPages;

      return res.status(200).json({
        orders_total: ordersTotal,
        orders_count: ordersCount,
        sales_total: salesTotal,
        sales_count: salesCount,
        average_ticket: averageTicket,
        orders: ordersList,
        has_more: hasMore,
        limit: limit,
        total_pages: totalPages,
        page: page,
        total: ordersCount
      });
    } catch (error) {
      console.error("Dashboard error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new DashboardsController();
