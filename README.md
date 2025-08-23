# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# EventTrackPro

An intuitive event counting platform where users register and obtain QR codes to be designated as **Event Admins**, **Count Coordinators**, or **Counters**. Admins create events and assign roles via QR scans; coordinators manage counters and review counts, while counters manually submit counts. Built with React (Vite), Express, MongoDB, and Node.js.

---

##  Table of Contents

- [Features](#features)  
- [Architecture & Stack](#architecture--stack)  
- [User Roles & Workflow](#user-roles--workflow)  
- [Getting Started](#getting-started)  
- [Usage Guide](#usage-guide)  
- [Configuration & Environment](#configuration--environment)  
- [Technologies Used](#technologies-used)  
- [Project Roadmap](#project-roadmap)  
- [Contributing](#contributing)  
- [License](#license)

---

## Features

- **User Registration**: Mandatory signup to access any functionality.
- **Dynamic Role Assignment**: Upon role registration, users download QR codes that admins scan to assign roles.
- **Event Lifecycle**:
  - Admins create and start events.
  - Coordinators assign counters to service indices, approve/reject count submissions.
  - Counters submit manual counts which are reviewed and escalated by coordinators to admins.
- **QR-Based Role Management**: Streamlined assignment of roles through QR code scanning.
- **Manual Count Submission**: Easy submission and tracking of counts via coordinator and admin approval flow.

---

## Architecture & Stack

| Layer           | Technology           |
|----------------|----------------------|
| **Frontend**    | React with Vite      |
|                | react-qrcode         |
| **Backend**     | Node.js, Express     |
| **Database**    | MongoDB (via Mongoose) |
| **Miscellaneous** | dotenv, CORS, JSON Web Tokens (potentially) |


---

## User Roles & Workflow

1. **Registration**: Users sign up, then choose to register as:
   - **Admin**
   - **Count Coordinator**
   - **Counter**
2. **QR Code Issuance**: All registrants receive a downloadable QR code.
3. **Role Assignment**:
   - **Admins** scan a user’s QR code to officially assign them as coordinator or counter for an event.
4. **Event Management**:
   - Admins create and launch events on the scheduled date.
5. **Counter Workflow**:
   - Coordinators assign counters to specific service indices.
   - Counters submit manual counts.
   - Coordinators can approve or reject submissions.
   - Approved counts are then forwarded to admins.

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repo
git clone https://github.com/AbiolaDave/eventtrackpro.git
cd eventtrackpro

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
