cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    Products: {
      sql: `${CUBE}.product_id = ${Products}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },
    
    number: {
      sql: `number`,
      type: `sum`
    }
  },
  
  dimensions: {
    userId: {
      sql: `user_id`,
      type: `number`
    },
    
    productId: {
      sql: `product_id`,
      type: `number`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    completedAt: {
      sql: `completed_at`,
      type: `time`
    }
  }
});
