my-react-app/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── images/
│       ├── hero/
│       ├── carousel/
│       └── icons/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── ImageCarousel.jsx
│   │   └── SectionTitle.jsx
│   │
│   ├── sections/                  # Section components (used inside pages)
│   │   ├── Home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   └── CTASection.jsx
│   │   │
│   │   ├── About/
│   │   │   ├── IntroSection.jsx
│   │   │   ├── TeamSection.jsx
│   │   │   ├── VisionMissionSection.jsx
│   │   │   └── JourneyTimelineSection.jsx
│   │   │
│   │   ├── Contact/
│   │   │   ├── ContactFormSection.jsx
│   │   │   ├── MapSection.jsx
│   │   │   └── FAQSection.jsx
│   │   │
│   │   ├── Services/
│   │   │   ├── ServiceListSection.jsx
│   │   │   ├── PricingSection.jsx
│   │   │   └── ReviewSection.jsx
│   │
│   ├── pages/                     # Full page components (compose sections)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Services.jsx
│   │
│   ├── hooks/
│   │   ├── useWindowSize.js
│   │   ├── useFetch.js
│   │   └── useCarousel.js
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── utils/
│   │   ├── formatDate.js
│   │   └── validateEmail.js
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── index.css
│   │   └── variables.css
│   │
│   ├── App.jsx                    # App layout (Navbar + Routes + Footer)
│   ├── main.jsx                   # Entry point
│   └── router/                    # React Router configuration
│       └── AppRouter.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
