# Basic Google Apps Script Project Template with Local Testing

This template provides a setup for developing Google Apps Script projects using JavaScript files with TypeScript tooling support (via tsconfig for syntax checking and typings), local testing using gas-local, and deployment using clasp

---

## Features

- TypeScript support with typings for Google Apps Script
- Local development and testing with `gas-local`
- `clasp` integration for pushing code to Google Apps Script

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed
- Google account with access to Google Apps Script

---

## Setup

### 0. Install Clasp & Log in
- Install Clasp with: `npm install @google/clasp -g`
- Use `clasp login` to log into your Google account 

### 1. Install global and development dependencies:
- use `npm install` to install dependencies in package.json

### 2. Initialize clasp project:
- **If you don't have a GAS project created yet:**
    - `clasp create --title "Your Project Name" --type sheets|docs|forms|standalone` - this creates the `.clasp.json`
- **Or if you already have a GAS project, clone it:**
    - `clasp clone <scriptId>` - this creates the `.clasp.json`

### 3. Setup your tsconfig.json:
- Create or update the tsconfig.json file in the root

### 4. Folder structure:
- ├── src/          # Apps Script source files
- ├── test/         # Local test files (run with gas-local)
- ├── .clasp.json   # clasp config (auto-generated)
- ├── tsconfig.json # TypeScript config for type checks etc.
- ├── package.json  # Dependencies found here
- ├── runner.js     # For local testing
- └── README.md     

### 5. Use `.claspignore` to exclude files/folders from `clasp push`.
- this file is parsed with Anymatch
- use syntax like: **/node_modules/**
- it is not needed if you define the "rootDir" in `.clasp.json`

---

## References
- [Google Apps Script Clasp](https://github.com/google/clasp)
- [NPM Package - Clasp](https://www.npmjs.com/package/@google/clasp/v/1.4.1)
- [gas-local](https://github.com/hoichuan/gas-local)
- [Google Apps Script TypeScript typings](https://www.npmjs.com/package/@types/google-apps-script)