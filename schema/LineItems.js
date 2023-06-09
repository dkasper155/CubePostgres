cube(`LineItems`, {
  sql: `SELECT * FROM public.line_items`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    Products: {
      sql: `${CUBE}.product_id = ${Products}.id`,
      relationship: `belongsTo`
    },
    
    Orders: {
      sql: `${CUBE}.order_id = ${Orders}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },
    
    price: {
      sql: `price`,
      type: `sum`
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    }
  },
  
  dimensions: {
    productId: {
      sql: `product_id`,
      type: `number`
    },
    
    orderId: {
      sql: `order_id`,
      type: `number`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }
});
