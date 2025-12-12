import os
import time
from typing import TypedDict, List
from langgraph.graph import StateGraph, END
from langchain_core.messages import SystemMessage, HumanMessage

# Define the "State" of our agent
class AgentState(TypedDict):
    messages: List[str]
    code: str
    status: str

# --- SIMULATED AI NODES (Free & Fast for Demo) ---

def planner_agent(state: AgentState):
    """Analyzes the request and creates a plan."""
    print("--- 🧠 ORCHESTRATOR: Planning (Simulated) ---")
    
    # Simulate thinking time
    time.sleep(1) 
    
    # Return a realistic-looking plan
    plan_text = (
        "1. Analyze User Requirements for UI/UX.\n"
        "2. Initialize React Component structure.\n"
        "3. Draft FastAPI Backend endpoints.\n"
        "4. Implement Security Headers (CORS/JWT)."
    )
    return {"messages": [plan_text], "status": "planned"}

def coder_agent(state: AgentState):
    """Generates the actual code based on the plan."""
    print("--- 💻 CODER: Writing Code (Simulated) ---")
    
    # Simulate coding time
    time.sleep(2)
    
    # Return realistic-looking React code
    fake_code = """
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // AutoDev Secure Login
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  };

  return (
    <div className="login-container">
      <h1>Secure Login</h1>
      <input type="email" placeholder="User Email" />
      <input type="password" placeholder="********" />
      <button onClick={handleLogin}>Authenticate</button>
    </div>
  );
}
"""
    return {"code": fake_code, "status": "coded"}

def tester_agent(state: AgentState):
    """Mock runs a security scan."""
    print("--- 🛡️ SECURITY: Scanning (Simulated) ---")
    time.sleep(1)
    return {"messages": ["Security Scan: PASSED", "Vulnerabilities: 0"], "status": "verified"}

# --- GRAPH (The Workflow) ---

workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("planner", planner_agent)
workflow.add_node("coder", coder_agent)
workflow.add_node("tester", tester_agent)

# Define edges (flow)
workflow.set_entry_point("planner")
workflow.add_edge("planner", "coder")
workflow.add_edge("coder", "tester")
workflow.add_edge("tester", END)

# Compile the brain
app_graph = workflow.compile()