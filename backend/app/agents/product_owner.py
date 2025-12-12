class ProductOwner:
    def __init__(self):
        self.role = "Product Owner (The Critic)"
        self.validation_rules = [
            "Must have clear acceptance criteria",
            "Must be feasible within scope",
            "Must not violate security policies"
        ]

    def validate_user_story(self, story):
        """
        Analyzes the user story for ambiguity.
        Simulates 'Refuses vague tasks' logic.
        """
        print(f"[{self.role}] Reviewing story: {story.get('title')}...")
        
        if not story.get("acceptance_criteria"):
            return {"approved": False, "reason": "Missing acceptance criteria."}
            
        # Simulating approval for the demo scenario
        print(f"[{self.role}] Spec Approved. Handing off to Orchestrator.")
        return {"approved": True, "spec_id": story.get("id")}