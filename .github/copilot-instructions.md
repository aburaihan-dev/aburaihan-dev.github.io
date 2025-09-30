# Copilot Instructions for Personal Portfolio Website

## Project Overview
This is a React-based personal portfolio website that follows the JSON Resume standard. The entire site content is driven by `src/resume.json`, making it easily customizable for different users.

## Architecture Patterns

### Data-Driven Design
- **Single Source of Truth**: `src/resume.json` contains all personal data (experience, skills, certifications, etc.)
- **JSON Resume Standard**: Follows [jsonresume.org](https://jsonresume.org/) schema with custom extensions (`x_*` fields)
- **Component Pattern**: Each section imports and directly consumes `Resume` object from `src/resume.json`

Example data consumption pattern:
```javascript
import Resume from "../../resume.json";
// Use Resume.work, Resume.skills, Resume.certificates, etc.
```

### Component Structure
- **Layout Components** (`src/components/structure/`): Header, Content, Footer - define page structure
- **Section Components** (`src/components/sections/`): AboutMe, Skills, Experience, etc. - main content areas
- **Element Components** (`src/components/elements/`): Reusable UI elements like Timeline, Badge, CredlyBadge

### Styling Framework
- **Bulma CSS**: Primary framework for responsive design and components
- **Custom CSS**: `public/css/styles.css` for site-specific styling
- **Timeline Plugin**: `bulma-timeline.min.css` for experience/education timelines

## Key Development Patterns

### Badge System
Two distinct badge types based on URL pattern:
- **CredlyBadge**: For Credly.com certificates (uses embedded script)
- **NonCredlyBadge**: For other certificate providers (local images)

### Timeline Components
- **Dynamic Grouping**: Experience items auto-group by year using `useMemo`
- **Reusable Pattern**: Same timeline structure used for both Experience and Education
- **Date Formatting**: Consistent `formatDate` utility for date display

### Image Management
- **Public Assets**: All images stored in `public/images/` for direct access
- **Gravatar Integration**: Uses `react-gravatar` for profile pictures
- **Favicon Structure**: Complete favicon set in `public/images/favicon/`

## Development Workflow

### Local Development
```bash
npm start  # Uses --openssl-legacy-provider flag for Node compatibility
```

### Build Process
```bash
npm run build  # Creates production build with legacy OpenSSL support
```

### Deployment
- **GitHub Pages**: Uses `gh-pages` package for deployment
- **Custom Branch**: Deploys to `mysite-0.0.2` branch
- **Homepage**: Configured for `https://aburaihan-dev.github.io`

## Key Files and Conventions

### Resume Data Structure
- `src/resume.json`: Main data file following JSON Resume standard
- Custom extensions use `x_` prefix (e.g., `x_title`, `x_icon`, `x_imageId`)
- Multiple resume versions stored as `resume_v*.json` for reference

### Component Naming
- Sections: Named after content area (AboutMe, Skills, Experience)
- Elements: Descriptive of functionality (Timeline, Badge, FloatingButton)
- Structure: Named after page layout role (Header, Content, Footer)

### Styling Conventions
- Bulma classes used directly in JSX (`className="section has-background-link"`)
- Custom animations and effects in dedicated CSS files (e.g., `FloatingButton.css`)
- Icon integration via FontAwesome CDN

## External Dependencies
- **FontAwesome**: Icons loaded via CDN script
- **Credly**: Certificate badge embeds via external script
- **Google Analytics**: Integrated for visitor tracking
- **Bulma**: CSS framework loaded via CDN

## Development Guidelines

### What NOT to do
- **No Tests Required**: This is a simple portfolio site - don't write unit tests, integration tests, or test files
- **Minimal Documentation**: Avoid creating extensive README files, API docs, or inline documentation beyond basic comments
- **No Summary Docs**: Don't generate architecture documents, design docs, or technical summaries unless explicitly requested

## Common Customization Points
1. Update `src/resume.json` with personal information
2. Replace images in `public/images/` directory
3. Modify color scheme in `public/css/styles.css`
4. Add new sections by creating components in `src/components/sections/`
5. Update deployment branch in `package.json` deploy script