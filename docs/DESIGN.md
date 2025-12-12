# Project Design Document: Protocol 7

## 1. Overview

Protocol 7 is a **Container Application** designed to host and showcase multiple web applications. It serves as a portfolio and a demonstration of technical capability.

- **Primary Goal**: Showcase WebApplication capabilities using modern React stacks.
- **Target Audience**: Players & Gamers (Focus on fun/interactive experience).
- **Core Experience**: A unified "Retro Cyberpunk" interface that dynamically loads sub-projects.

## 2. Core Features

- **Responsive Navigation**:
  - **Large Screens**: Top-positioned permanent menu.
  - **Small Screens**: Bottom-positioned permanent menu.
- **Project Feed (Infinite Scroll)**:
  - Projects are displayed in a scrollable feed.
  - "Lazy loading" implementation: projects load as needed.
  - **End of Feed**: Clear indicator when all projects have been viewed.
- **Container Architecture**:
  - Acts as a shell/host for sub-applications.
  - Enforces a consistent visual and functional environment.

## 3. Technical Architecture

### Stack

- **Framework**: React (TypeScript) via Vite.
- **Testing**: Vitest (Unit testing for logic is mandatory).
- **Styling**: Vanilla CSS / Modules (or Tailwind if specifically requested later, but currently aiming for custom "Retro Cyberpunk").
- **State/Routing**: React Router (standard), potentially TanStack Query if data fetching becomes complex.

### Coding Standards

- **Professional Structure**: Modular code, separation of concerns.
- **No Comments**: Code must be self-documenting.
- **Testing**: High coverage for logic, even for simple utilities.
- **Configuration**: Hardcoded values extracted to config files/constants.
- **Files**: Short, focused single-responsibility files.

## 4. User Interface & Aesthetics

### Theme: "Retro Cyberpunk"

- **Visuals**: Scanlines, CRT effects, High Contrast.
- **Typography**: Monospace fonts (**Fira Code**).
- **Color Palette**:
  - **Primary**: Neon Green (`#00ff41`), Cyan (`#00f3ff`), Purple, Amber.
  - **Alerts/Errors**: Red (`#ff0055`), Orange.
  - **Background**: Deep Black/Dark Grey (`#050505`).
- **Consistency**: All sub-projects must inherit or adhere to this aesthetic.
- **Branding**: Title displayed as `<PROTOCOL 7/>`.
