# ShopifyNext - Advanced Headless Shopify Storefront

This is a production-ready, advanced headless Shopify storefront built with Next.js 15, TypeScript, App Router, and React Server Components.

## 🚀 Getting Started

First, install dependencies and set up your environment:

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your Shopify and database credentials
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📋 Features

### Core E-Commerce Features
- ✅ Product catalog with faceted search
- ✅ Product detail pages with variants and galleries
- ✅ Collections and deals pages
- ✅ Persistent shopping cart
- ✅ Shopify hosted checkout integration
- ✅ Customer accounts with authentication
- ✅ Order history and tracking
- ✅ Wishlist and product comparison
- ✅ Address book management

### Professional Features
- ✅ **Advanced Search** with typeahead suggestions
- ✅ **Product Reviews & Ratings** with star system
- ✅ **Multi-Currency Support** with 6 major currencies
- ✅ **Internationalization** with language selector
- ✅ **GDPR Compliance** with cookie consent
- ✅ **Accessibility** with WCAG 2.1 AA compliance
- ✅ **Performance Monitoring** with analytics
- ✅ **Advanced SEO** with structured data and sitemaps
- ✅ **Error Handling** with global boundaries
- ✅ **Maintenance Mode** with countdown

### Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with dark mode
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth with JWT
- **State Management**: React Query
- **Shopify Integration**: Storefront API + Customer Account API
- **UI Components**: Radix UI primitives

## 🛠️ Environment Setup

Create a `.env.local` file with the following variables:

```env
# Shopify Configuration
NEXT_PUBLIC_SHOPIFY_STORE_URL=https://your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/shopify_frontend

# Security
JWT_SECRET=your-super-secret-key-min-32-chars
NEXTAUTH_SECRET=your-secret-key-min-32-chars
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Features
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

## 📦 Database Setup

Run Prisma migrations:

```bash
npx prisma migrate dev
npx prisma generate
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Professional Features Documentation

For detailed information about all professional features, see:

- [PROFESSIONAL_FEATURES.md](PROFESSIONAL_FEATURES.md)

## 🎯 Project Structure

```
shopifynextjs/
├── app/                  # Next.js App Router pages
├── components/           # Reusable UI components
├── lib/                  # Core libraries and utilities
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── styles/               # Global styles
```

## 🔧 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma database GUI

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 📞 Support

For support, please contact:
- Email: support@shopifynext.com
- Issues: GitHub Issues

---

Built with ❤️ using Next.js, Shopify, and TypeScript
