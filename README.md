# Bandname



# Folder Structue

Bandname/
│
├── Backend/                        # Java Spring Boot backend
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── Bandname/
│           │           ├── BandnameApp.java       # Main application file
│           │           ├── config/                # Configuration classes (e.g., CORS, security)
│           │           ├── controller/            # REST controllers for API endpoints
│           │           ├── model/                 # Data models / entities
│           │           ├── repository/            # Interfaces for database access
│           │           └── service/               # Business logic layer
│           └── resources/                         # Application properties, static files, templates
│
├── docs/                           # Frontend (public website, used by GitHub Pages)
│   ├── css/
│   │   └── styles.css              # Global styles
│   ├── gameshub/                   # HTML pages related to games hub
│   ├── img/                        # All image assets
│   ├── js/                         # JavaScript files
│   ├── shop/                       # Shop-related HTML pages
│   ├── index.html                  # Main landing page
│   ├── contact.html                # Contact form/page
│   ├── liveEvents.html            # Info about upcoming live shows
│   ├── login.html                  # Login form
│   └── signup.html                 # Signup form
│
└── Admin/                          # (Currently empty) Reserved for internal admin tools/pages
    └── admin stuff
