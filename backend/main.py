import sys
import os

# --- FIX: Force Python to look in the current directory ---
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
# ----------------------------------------------------------

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
# Now it will find this:
from orchestrator import app_graph 

app = FastAPI()

# Enable CORS (Allows Frontend to talk to Backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data format coming from Frontend
class Request(BaseModel):
    query: str

@app.get("/")
def read_root():
    return {"status": "AutoDev Synapse Online"}

@app.post("/generate")
async def generate_code(request: Request):
    """
    Receives a user query, runs the Agent Graph, and returns the result.
    """
    print(f"Received Query: {request.query}")
    
    # Run the LangGraph Workflow
    inputs = {"messages": [request.query], "code": "", "status": "start"}
    result = app_graph.invoke(inputs)
    
    return {
        "plan": result['messages'][0], # The Architect's Plan
        "code": result['code'],        # The Generated Code
        "status": result['status']     # Final Status
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)