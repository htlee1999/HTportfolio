# Hong Teng Lee - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my projects, education, experience, and interests.

## Live Demo

[View Portfolio](https://htlee1999.github.io/HTportfolio/)

## Features

- Responsive design for all devices
- Interactive project showcase with grid/list views
- PDF document viewer modal
- Animated timeline for experience and interests
- Accordion-style education section
- Mobile-friendly navigation with burger menu

## Tech Stack

- **Framework:** React 18
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Timeline:** React Chrono
- **Mobile Menu:** React Burger Menu
- **Styling:** CSS with CSS Variables

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/htlee1999/HTportfolio.git
   cd HTportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `build` folder.

## Project Structure

```
src/
├── assets/
│   └── images/          # Shared image assets
├── components/
│   ├── Education/       # Education section
│   ├── Experience/      # Work experience timeline
│   ├── Interests/       # Interests & activities
│   ├── Profile/         # Profile/home section
│   ├── Projects/        # Projects showcase
│   │   ├── Projects.js
│   │   ├── PDFViewer.js
│   │   ├── ProjectLinks.js
│   │   └── projectsData.js
│   ├── Header.js
│   ├── Footer.js
│   └── Sidebar.js
├── App.js
├── index.js
└── styles.css
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server on port 3000 |
| `npm run build` | Create production build |
| `npm test` | Run tests |

## License

This project is open source and available under the MIT License.

## Contact

- LinkedIn: [hongtenglee](https://www.linkedin.com/in/hongtenglee/)
- GitHub: [htlee1999](https://github.com/htlee1999)
- Email: Leehongteng1999@gmail.com
