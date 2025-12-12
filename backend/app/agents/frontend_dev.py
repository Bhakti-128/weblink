import time

class FrontendAgent:
    def __init__(self):
        self.stack = "React + Vite + Tailwind"
        
    def generate_ui(self, requirements):
        """
        Simulates generating frontend components.
        """
        print(f"[Frontend Agent] Initializing {self.stack} environment...")
        time.sleep(1)
        print(f"[Frontend Agent] Parsing UI requirements: {requirements}...")
        
        # In a real run, this would call GPT-4o. 
        # For the demo, we simulate the output generation.
        code_snippet = """
        export default function Login() {
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
              <form className="p-8 bg-gray-800 rounded-lg">
                <input type="email" placeholder="Email" className="block w-full mb-4" />
                <button className="bg-blue-500 text-white px-4 py-2">Login</button>
              </form>
            </div>
          );
        }
        """
        print("[Frontend Agent] Component 'Login.tsx' generated.")
        return code_snippet