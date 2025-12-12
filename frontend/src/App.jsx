import React, { useState } from 'react';
import GlassCard from './components/GlassCard';
import Terminal from './components/Terminal';
import { Play, Cpu, Shield, Code, Layers, Zap, Activity, CheckCircle, Lock } from 'lucide-react';

function App() {
  const [query, setQuery] = useState('');
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('IDLE');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleIgnite = async () => {
    if (!query) return;
    setStatus('WORKING');
    setLogs(prev => [...prev, `> INITIALIZING PROTOCOL: "${query}"`]);
    setLogs(prev => [...prev, "> CONNECTING TO NEURAL ORCHESTRATOR..."]);

    try {
      const response = await fetch('http://127.0.0.1:8000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();

      setTimeout(() => setLogs(prev => [...prev, `> PLAN ESTABLISHED: ${data.plan}`]), 1000);
      setTimeout(() => setLogs(prev => [...prev, "> DEPLOYING CODING AGENTS..."]), 2000);
      setTimeout(() => {
        setGeneratedCode(data.code);
        setLogs(prev => [...prev, "> CODE GENERATION COMPLETE."]);
      }, 3500);
      setTimeout(() => setLogs(prev => [...prev, "> SECURITY SCAN: VULNERABILITY CHECK..."]), 4500);
      setTimeout(() => {
        setLogs(prev => [...prev, `> SYSTEM STATUS: ${data.status.toUpperCase()}`]);
        setStatus('SUCCESS');
      }, 5500);

    } catch (error) {
      setLogs(prev => [...prev, "> FATAL ERROR: BACKEND UNREACHABLE."]);
      setStatus('IDLE');
    }
  };

  return (
    // 1. MAIN CONTAINER: Forces centering and full height
    <div className="relative min-h-screen w-full font-sans text-white flex items-center justify-center p-4 lg:p-8">
      
      {/* 2. BACKGROUND: High-Quality Cyberpunk City (Direct Link) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076&auto=format&fit=crop')",
        }}
      />
      
      {/* 3. OVERLAY: Darken the image so text pops */}
      <div className="fixed inset-0 z-0 bg-black/80 backdrop-blur-[3px]" />

      {/* 4. DASHBOARD CONTENT */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-8">
        
        {/* HEADER: Centered & Branded */}
        <header className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-neon-blue/10 rounded-full border border-neon-blue/50 shadow-[0_0_20px_rgba(0,243,255,0.5)]">
               <Zap className="w-8 h-8 text-neon-blue" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              WEBLINK
            </h1>
          </div>
          <p className="text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase">
            Autonomous Agentic Development Environment
          </p>
        </header>

        {/* STATUS CARDS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatusCard label="Orchestrator" status="ONLINE" icon={<Cpu />} color="text-cyan-400" border="border-cyan-400/30" />
          <StatusCard label="Security" status="ACTIVE" icon={<Lock />} color="text-purple-400" border="border-purple-400/30" />
          <StatusCard label="Agents" status={status === 'WORKING' ? 'BUSY' : 'IDLE'} icon={<Activity />} color="text-green-400" border="border-green-400/30" />
          <StatusCard label="Build" status="READY" icon={<CheckCircle />} color="text-pink-400" border="border-pink-400/30" />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          
          {/* LEFT: MISSION CONTROL (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard className="h-full border-l-4 border-l-cyan-400">
              <h2 className="text-lg font-bold mb-4 flex items-center text-cyan-400">
                <Layers className="w-5 h-5 mr-2" /> 
                MISSION CONTROL
              </h2>
              <textarea
                className="w-full bg-black/40 border border-white/10 rounded-md p-4 text-cyan-100 placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 h-40 resize-none font-mono text-sm transition-all"
                placeholder="// Enter system requirements..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              
              {/* GLOWING BUTTON */}
              <button
                onClick={handleIgnite}
                disabled={status === 'WORKING'}
                className="mt-6 w-full group relative flex items-center justify-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-md hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)]"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                {status === 'WORKING' ? 'INITIALIZING SWARM...' : 'IGNITE SYSTEM'}
              </button>
            </GlassCard>
          </div>

          {/* RIGHT: TERMINAL & PREVIEW (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            {/* TERMINAL */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0f]">
              <div className="flex items-center px-4 py-2 bg-[#1a1a2e] border-b border-white/5">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono">root@weblink-core:~</span>
              </div>
              <Terminal logs={logs} />
            </div>

            {/* CODE PREVIEW (Only shows when code exists) */}
            {generatedCode && (
              <GlassCard className="border-l-4 border-l-purple-500 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-sm font-bold mb-3 text-purple-400 flex items-center font-mono">
                  <Code className="w-4 h-4 mr-2" /> GENERATED_ARTIFACT.tsx
                </h2>
                <pre className="text-xs text-gray-300 overflow-x-auto bg-[#0a0a0f] p-4 rounded border border-white/5 font-mono leading-relaxed">
                  {generatedCode}
                </pre>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// PREMIUM STATUS CARD COMPONENT
const StatusCard = ({ label, status, icon, color, border }) => (
  <div className={`backdrop-blur-md bg-black/40 border ${border} p-4 rounded-xl flex items-center justify-between shadow-lg`}>
    <div className="flex items-center space-x-3">
      <div className={`${color} opacity-80`}>{React.cloneElement(icon, { size: 20 })}</div>
      <div>
        <div className="text-gray-500 text-[10px] uppercase tracking-wider">{label}</div>
        <div className={`font-bold text-sm ${color}`}>{status}</div>
      </div>
    </div>
  </div>
);

export default App;