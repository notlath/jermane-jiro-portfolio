---
version: 1.0.0
name: jiro-architecture-portfolio
description: A minimalist architectural portfolio interface anchored on paper-white canvas and charcoal type, where visual voltage comes from full-bleed 3D renders and precise structural layouts. Primary actions use a stark geometric button, while secondary details like software proficiencies use monospaced type to reflect technical drafting.

colors:
  primary: "#1a1a1a"
  primary-active: "#000000"
  ink: "#1a1a1a"
  body: "#4a4a4a"
  muted: "#757575"
  hairline: "#e0e0e0"
  canvas: "#fafafa"
  surface-soft: "#f3f3f3"
  surface-strong: "#e8e8e8"
  surface-dark: "#222222"
  signature-biophilic: "#3a5f4c"
  signature-drafting: "#2d5d8c"
  signature-concrete: "#d1d1d1"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  link: "#2d5d8c"
  link-active: "#1a3855"

typography:
  display-xl:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -1px
  display-lg:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  title-lg:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  title-md:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  mono-spec:
    fontFamily: "Roboto Mono, Courier New, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.5px
  button:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1px
    textTransform: uppercase

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 64px
  xxl: 96px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
    border: 1px solid "{colors.ink}"
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.mono-spec}"
    height: 80px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 120px 0
  project-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 0
  technical-spec-rail:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.mono-spec}"
    width: 300px
    padding: 32px
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.mono-spec}"
    padding: 64px
---

## Overview

The portfolio's visual language relies heavily on architectural principles like structure, negative space, and precise alignment. The base atmosphere is a pristine `{colors.canvas}` paper-white, echoing drafting paper. Visual interest is generated purely by the project renders and clean typographic hierarchy.

Type voice uses a classic, highly legible sans-serif for reading, paired with a technical monospace font for software tools (AutoCAD, Revit, SketchUp) and project metrics.

**Key Characteristics:**

- Primary buttons are sharp and geometric with `{rounded.none}`. They look like deliberate structural elements.
- The hero section is completely unstyled canvas. No gradients or background images are used behind the primary introduction.
- Project cards utilize edge-to-edge photography with the descriptive text pushed to a structured grid below or beside the image.
- Border radius is almost exclusively `{rounded.none}` to maintain a constructed, rigid architectural feel.

## Colors

### Brand & Accent

- **Primary** (`{colors.primary}` #1a1a1a): The dominant structural color used for deep contrast, headers, and the primary CTA.
- **Signature Biophilic** (`{colors.signature-biophilic}` #3a5f4c): A deep, muted green specifically used to highlight projects like the Sikodiwa Level II Hospital.
- **Signature Drafting** (`{colors.signature-drafting}` #2d5d8c): A blueprint-inspired blue used for text links and subtle interactive states.

### Surface

- **Canvas** (`{colors.canvas}` #fafafa): The default background. A warm, paper-like white that reduces eye strain compared to pure white.
- **Surface Soft** (`{colors.surface-soft}` #f3f3f3): Used for the technical specification rails and secondary information blocks.
- **Hairline** (`{colors.hairline}` #e0e0e0): The 1px border tone for dividing structural grid sections and footer layouts.

## Typography

### Font Family

The system utilizes a sharp contrast between **Helvetica Neue** (or similar clean sans-serif) for narrative text and **Roboto Mono** for technical data.

### Hierarchy

| Token                     | Size | Weight | Use                                       |
| ------------------------- | ---- | ------ | ----------------------------------------- |
| `{typography.display-xl}` | 48px | 300    | Landing page introduction                 |
| `{typography.display-lg}` | 40px | 400    | Individual project page titles            |
| `{typography.title-lg}`   | 24px | 500    | Section titles (Experience, Education)    |
| `{typography.body-md}`    | 15px | 400    | Paragraphs and design narratives          |
| `{typography.mono-spec}`  | 13px | 400    | Software tags, GWA, dates, and dimensions |
| `{typography.button}`     | 14px | 500    | Interactive buttons (all caps)            |

## Layout

### Grid & Container

- **Max content width:** 1440px centered, allowing architectural renders to display massive and detailed.
- **Modular Grid:** The layout strictly follows a 12-column grid. Text blocks span 4 to 6 columns, while hero renders span all 12.
- **Technical Rail:** Project pages feature a fixed `{component.technical-spec-rail}` on the left or right, listing tools like D5 Render and SketchUp, allowing the narrative body to remain clean.

### Whitespace Philosophy

Whitespace acts as negative space in a physical model. Sections are divided by `{spacing.section}` (120px) to give the viewer time to digest the density of the architectural drawings before moving to the next project.

## Components

**`top-nav`**
A minimal 80px tall bar. The logo or name sits on the left, and simple navigation links (Projects, Resume, About) sit on the right using the `{typography.mono-spec}` font to feel like a drafted document.

**`button-primary`**
Sharp, zero-radius corners. Background `{colors.primary}`, text `{colors.on-primary}`, with generous 16px by 32px padding.

**`project-card`**
The primary vehicle for the portfolio. The image container has no border radius. On hover, the image can subtly scale, but the frame remains rigid. Project titles sit below the image in `{typography.title-md}` with the category (e.g., Level II Hospital) right below it in `{typography.mono-spec}`.

**`technical-spec-rail`**
A side container with `{colors.surface-soft}` background. It organizes project data (Date, Tools, Role, Type) in a clean, tabular format using monospace typography.

## Responsive Behavior

- **Mobile (Under 768px):** The 12-column grid collapses to a single column. The `{component.technical-spec-rail}` moves above the project narrative instead of beside it.
- **Tablet (768px to 1024px):** Project cards display in a 2-up grid layout.
- **Desktop (Over 1024px):** Project grids expand to 2-up or 3-up depending on the aspect ratio of the renders. Hero images remain full-bleed.
