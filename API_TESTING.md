# API Testing Guide - Vibe Commerce

Quick reference for testing API endpoints with cURL or Postman.

## Prerequisites
- Backend server running on http://localhost:5000
- MongoDB connected and seeded

## Health Check

```powershell
# Windows PowerShell
Invoke-WebRequest -Uri "http://localhost:5000/api/health"

# Or with curl (if installed)
curl http://localhost:5000/api/health
```

## Products Endpoints

### Get All Products
```powershell
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/products" -Method GET

# cURL
curl http://localhost:5000/api/products
```

### Get Single Product
```powershell
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/products/1" -Method GET

# cURL
curl http://localhost:5000/api/products/1
```

## Cart Endpoints

### Get Cart
```powershell
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/cart" -Method GET

# cURL
curl http://localhost:5000/api/cart
```

### Add to Cart
```powershell
# PowerShell
$body = @{
    productId = 1
    quantity = 2
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/cart" `
    -Method POST `
    -Body $body `
    -ContentType "application/json"

# cURL
curl -X POST http://localhost:5000/api/cart ^
  -H "Content-Type: application/json" ^
  -d "{\"productId\": 1, \"quantity\": 2}"
```

### Update Cart Item
```powershell
# PowerShell
$body = @{
    quantity = 5
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/cart/1" `
    -Method PUT `
    -Body $body `
    -ContentType "application/json"

# cURL
curl -X PUT http://localhost:5000/api/cart/1 ^
  -H "Content-Type: application/json" ^
  -d "{\"quantity\": 5}"
```

### Remove from Cart
```powershell
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/cart/1" -Method DELETE

# cURL
curl -X DELETE http://localhost:5000/api/cart/1
```

### Clear Cart
```powershell
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/cart" -Method DELETE

# cURL
curl -X DELETE http://localhost:5000/api/cart
```

## Checkout Endpoints

### Process Checkout
```powershell
# PowerShell
$body = @{
    customerName = "John Doe"
    customerEmail = "john@example.com"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/checkout" `
    -Method POST `
    -Body $body `
    -ContentType "application/json"

# cURL
curl -X POST http://localhost:5000/api/checkout ^
  -H "Content-Type: application/json" ^
  -d "{\"customerName\": \"John Doe\", \"customerEmail\": \"john@example.com\"}"
```

### Get Order History
```powershell
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/checkout/orders" -Method GET

# cURL
curl http://localhost:5000/api/checkout/orders
```

## Complete Test Flow

Run these commands in sequence to test the full flow:

```powershell
# 1. Get all products
Invoke-RestMethod -Uri "http://localhost:5000/api/products" -Method GET

# 2. Add product to cart
$addBody = @{ productId = 1; quantity = 2 } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/cart" -Method POST -Body $addBody -ContentType "application/json"

# 3. Add another product
$addBody2 = @{ productId = 3; quantity = 1 } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/cart" -Method POST -Body $addBody2 -ContentType "application/json"

# 4. Get cart
Invoke-RestMethod -Uri "http://localhost:5000/api/cart" -Method GET

# 5. Update quantity
$updateBody = @{ quantity = 3 } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/cart/1" -Method PUT -Body $updateBody -ContentType "application/json"

# 6. Checkout
$checkoutBody = @{ customerName = "Test User"; customerEmail = "test@example.com" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/checkout" -Method POST -Body $checkoutBody -ContentType "application/json"

# 7. View order history
Invoke-RestMethod -Uri "http://localhost:5000/api/checkout/orders" -Method GET
```

## Expected Responses

### Success Response Format
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## Testing Error Handling

### Invalid Product ID
```powershell
$body = @{ productId = 999; quantity = 1 } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/cart" -Method POST -Body $body -ContentType "application/json"
```

### Invalid Email Format
```powershell
$body = @{ customerName = "Test"; customerEmail = "invalid-email" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/checkout" -Method POST -Body $body -ContentType "application/json"
```

### Checkout Empty Cart
```powershell
# First clear cart
Invoke-RestMethod -Uri "http://localhost:5000/api/cart" -Method DELETE

# Then try to checkout
$body = @{ customerName = "Test"; customerEmail = "test@example.com" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/checkout" -Method POST -Body $body -ContentType "application/json"
```

## Using Postman

1. Import this collection URL (if you create one)
2. Set base URL variable: `http://localhost:5000/api`
3. Use the requests in order
4. Check response status and data

---

**Happy Testing! 🧪**
