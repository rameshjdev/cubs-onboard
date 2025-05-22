# Cubs Onboard - Daycare Management System

A modern web application for managing daycare operations, built with React and TypeScript.

## Features

- 🎨 Modern and responsive UI design
- 📱 Mobile-friendly interface
- 🖼️ Image preloading for optimal performance
- 📜 Smooth scroll effects
- 📝 Dynamic form handling
- 🖼️ Image gallery
- 💬 Testimonials section
- 📞 Contact form

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd cubs-onboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Gallery.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── hooks/
│   ├── useImagePreload.ts
│   ├── useScrollEffects.ts
│   └── useFormAndScroll.ts
└── App.tsx
```

## Custom Hooks

### useImagePreload
Optimizes image loading performance by preloading images when the application mounts.

### useScrollEffects
Manages scroll-based animations and effects throughout the application.

### useFormAndScroll
Handles form submissions and scroll behavior for the contact section.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please reach out to [your-email@example.com] 