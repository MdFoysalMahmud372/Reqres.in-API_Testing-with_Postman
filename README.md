# Reqres API Testing with Postman

Comprehensive **API Test Suite** for [Reqres](https://reqres.in/) using **Postman** and automated reporting with **Newman**.

---

## 📌 Overview

This project tests the Reqres API for functionalities like user creation, deletion, login, registration, and data fetching. All requests and validations are documented and version-controlled for collaborative QA practices.

---

## 🧪 Tools & Tech

- 🧰 **Postman** – API test suite & manual execution
- 🔁 **Newman** – CLI-based test runner for automation
- 📊 **Postman Documenter** – Hosted documentation
- 🧾 **HTML Reporter** – Visual test report generation

---


---

## 📘 Documentation

🔗 **Live Postman Docs:**  
[View API Test Documentation](https://documenter.getpostman.com/view/37010151/2sAYXCjy5j)

---

## 🧾 Test Report (Newman)

Below is a snapshot of the HTML report generated after running the tests via Newman:

![Test Report Screenshot](https://github.com/user-attachments/assets/2d1507db-0245-432d-b1ba-4e2d674af1c2)

---

## 🛠️ Running Tests Locally

### 1. Install Dependencies 
`npm install -g newman newman-reporter-htmlextra`
### 2. Run the Collection
`newman run Reqres.postman_collection.json -r htmlextra --reporter-htmlextra-export newman/index.html`
### 3. View the Report

Make sure you have [Node.js](https://nodejs.org/) and Newman installed:
`newman/index.html`

## Author $ Tester

**[Arifin Mahmud](https://www.linkedin.com/in/arifin-mahmud/)**  
Aspiring QA Engineer | Passionate about quality, bugs, and clean test cases.
