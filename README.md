# nextthing
me learning next.js basics


layout app:
seterusnya/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   ├── sign-up/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── notes/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── api/
│   │   ├── notes/
│   │   │   ├── route.ts        # GET, POST
│   │   │   └── [id]/
│   │   │       └── route.ts    # GET, PUT, DELETE
│   │   ├── ai/
│   │   │   └── summarize/
│   │   │       └── route.ts    # OpenAI summarization
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   │
│   ├── layout.tsx
│   └── page.tsx                # Landing page
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── card.tsx
│   │   └── navbar.tsx
│   ├── dashboard-sidebar.tsx
│   ├── note-card.tsx
│   ├── note-editor.tsx
│   └── loading-spinner.tsx
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── validators/
│   │   └── noteSchema.ts
│   ├── rate-limit.ts
│   └── utils.ts
│
├── prisma/
│   └── schema.prisma
│
├── public/
│   ├── favicon.ico
│   └── logo.svg
│
├── styles/
│   └── globals.css
│
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
