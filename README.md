
# 🏦 ParaBank Regression Test Suite (Cypress + TypeScript)

This project contains automated regression test cases for the ParaBank online banking application, built using **Cypress** and **TypeScript**. It covers critical user journeys including Registration, Login, Fund Transfer, Account Creation, and Logout.

---

## 📁 Folder Structure

```
cypress/
├── e2e/
│   ├── auth/
│   │   ├── login.cy.ts
│   │   ├── logout.cy.ts
│   │   └── register.cy.ts
│   └── transactions/
│       ├── openAccount.cy.ts
│       └── transferFunds.cy.ts
├── fixtures/
│   └── user.json              # Test data
├── support/
│   ├── commands.ts            # Custom Cypress commands (e.g., login)
│   ├── e2e.ts                 # Cypress support config
│   └── index.d.ts             # Type definitions for commands
```

---

## ⚙️ Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/your-username/parabank-tests.git
cd parabank-tests
```

2. **Install dependencies**
```bash
npm install
```

3. **Open Cypress Test Runner**
```bash
npx cypress open
```

4. **Run headless (CLI)**
```bash
npx cypress run
```

---

## 🔍 Tests Covered

| Feature         | Script File                     |
|----------------|----------------------------------|
| User Register   | `register.cy.ts`                |
| User Login      | `login.cy.ts`                   |
| Transfer Funds  | `transferFunds.cy.ts`           |
| Open New Account| `openAccount.cy.ts`             |
| User Logout     | `logout.cy.ts`                  |

---

## 📦 Test Data

Located in:
```
cypress/fixtures/user.json
```

Update this file with dynamic or static credentials as needed.

---

## 🧪 Custom Commands

Located in:
```
cypress/support/commands.ts
```

You can use:
```ts
cy.login('username', 'password');
```

---

## 📊 Reporting with Mochawesome

### 1. Install Mochawesome
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

### 2. Update Cypress config
In `cypress.config.js`:
```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
});
```

### 3. Run and Merge Reports
```bash
npx cypress run
npx mochawesome-merge cypress/reports/*.json > mochawesome.json
npx marge mochawesome.json --reportDir cypress/reports/html
```

---

## 👨‍💻 Author

**Ajes** – QA Engineer @ Mahorix Technologies  
_Expertise in Cypress, Playwright, Manual QA, and Functional Testing._

---

## 📝 License

MIT
