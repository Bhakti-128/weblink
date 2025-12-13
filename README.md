# Weblink : Collaborative Agentic Platform
**Techfest 2025-26 | Auto Dev Hackathon Submission**

## 🚀 Overview
Weblink is an intelligent, multi-agent orchestration platform designed to automate the end-to-end software development lifecycle. By connecting directly to Azure DevOps (ADO), it parses user stories and orchestrates a swarm of specialized AI agents to generate, test, secure, and deploy full-stack applications.

Unlike standard code assistants, Weblink operates with a **"Zero Hallucination"** policy, enforcing strict legacy code compliance via Vector DB ingestion.

## 🏗️ Architecture & Agents
Our system utilizes a **LangGraph-based Orchestrator** to manage a cyclic state machine of specialized agents:

Agent 
Orchestrator: LangGraph (Python) | The "Brain" that manages state and task delegation. |
Legacy Agent: Gemini 1.5 Flash + ChromaDB | Scans existing codebases to ensure new code fits the architecture. |
Coding Swarm: DeepSeek Coder V2 | Generates Frontend (React) and Backend (FastAPI) code in parallel. |
Testing Agent: Llama 3.1 (Groq) | Runs unit tests (PyTest/Jest) with <10ms latency. |
Security Agent: OWASP ZAP | Performs SAST and Red Team adversarial attacks. |
Vision Agent: GPT-4o Vision | Validates UI screenshots against requirements. |

## Setup Instructions

### Prerequisites
* Node.js v18+
* Python 3.10+
* Git

### Installation
1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/weblink-nexus.git](https://github.com/YOUR_USERNAME/weblink-nexus.git)
    cd weblink-nexus
    ```

2.  **Backend Setup (The Brain)**
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    
    # Start the Agentic Core
    python main.py
    ```

3.  **Frontend Setup (The Dashboard)**
    ```bash
    cd dashboard
    npm install
    npm run dev
    ```

4.  **Access the Dashboard**
    Open `http://localhost:5173` in your browser.

## Data Privacy & Security
We strictly adhere to the "Zero Retention" policy outlined in the hackathon guidelines:
1.  **Local Secrets:** All API keys (ADO, OpenAI) are stored in a local `.env` file which is strictly excluded from version control via `.gitignore`.
2.  **Privacy Firewall:** The "Product Owner Agent" strips sensitive PII from user stories before processing.
3.  **Ephemeral Memory:** Legacy code is read into vector memory for analysis and flushed immediately after the session. No proprietary code is stored on our servers.

## Repository Structure
* `/backend/agents`: Logic for individual AI agents (Orchestrator, Coder, Tester).
* `/dashboard`: React-based real-time monitoring UI.
* `/generated_output`: The "Sandbox" where agents write and test code.
