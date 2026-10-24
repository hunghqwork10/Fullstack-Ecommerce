export type ResourceDefinition = {
  table: string
  fields: Readonly<Record<string, string>>
  required: readonly string[]
  select?: string
}

const resourceDefinitions = {
  users: {
    table: 'users',
    fields: {
      username: 'username',
      email: 'email',
      password: 'password_hash',
      phone: 'phone',
      role: 'role',
    },
    required: ['username', 'email', 'password'],
    select:
      'id, username, email, phone, role, created_at, updated_at',
  },
  'user-addresses': {
    table: 'user_addresses',
    fields: {
      user_id: 'user_id',
      recipient_name: 'recipient_name',
      phone: 'phone',
      address_line: 'address_line',
      city: 'city',
      district: 'district',
      ward: 'ward',
      is_default: 'is_default',
    },
    required: [
      'user_id',
      'recipient_name',
      'phone',
      'address_line',
      'city',
      'district',
      'ward',
    ],
  },
  categories: {
    table: 'categories',
    fields: {
      name: 'name',
      parent_id: 'parent_id',
    },
    required: ['name'],
  },
  products: {
    table: 'products',
    fields: {
      category_id: 'category_id',
      name: 'name',
      description: 'description',
      brand: 'brand',
    },
    required: ['name'],
  },
  'product-variants': {
    table: 'product_variants',
    fields: {
      product_id: 'product_id',
      sku: 'sku',
      price: 'price',
      stock_quantity: 'stock_quantity',
      thumbnail_url: 'thumbnail_url',
    },
    required: ['product_id', 'sku', 'price'],
  },
  'cart-items': {
    table: 'cart_items',
    fields: {
      user_id: 'user_id',
      variant_id: 'variant_id',
      quantity: 'quantity',
    },
    required: ['user_id', 'variant_id', 'quantity'],
  },
  orders: {
    table: 'orders',
    fields: {
      user_id: 'user_id',
      total_price: 'total_price',
      status: 'status',
      shipping_address: 'shipping_address',
      payment_method: 'payment_method',
    },
    required: ['total_price', 'shipping_address', 'payment_method'],
  },
  'order-items': {
    table: 'order_items',
    fields: {
      order_id: 'order_id',
      variant_id: 'variant_id',
      quantity: 'quantity',
      price_at_purchase: 'price_at_purchase',
    },
    required: ['order_id', 'quantity', 'price_at_purchase'],
  },
} as const

export type ResourceName = keyof typeof resourceDefinitions

export const resources: Record<ResourceName, ResourceDefinition> =
  resourceDefinitions
