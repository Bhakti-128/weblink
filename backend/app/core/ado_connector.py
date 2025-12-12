# backend/core/ado_connector.py
import time

class ADOConnector:
    def __init__(self):
        self.project_url = "https://dev.azure.com/techfest-demo/autodev"
        
    def fetch_user_stories(self):
        """
        Simulates fetching user stories from Azure DevOps.
        Returns a structured JSON object as required by the 'Input Layer' architecture.
        """
        print(f"[ADO] Connecting to {self.project_url}...")
        time.sleep(1.5) # Simulate network delay for realism
        print("[ADO] Authenticated. Fetching Backlog items...")
        
        # This acts as your "Golden Sample" input
        return [
            {
                "id": 1024,
                "title": "Create Login Page",
                "description": "As a user, I want a secure login page with email/password and a 'Forgot Password' link.",
                "acceptance_criteria": [
                    "Must be responsive",
                    "Must validate email format",
                    "Must connect to /api/login endpoint"
                ],
                "priority": "High"
            }
        ]