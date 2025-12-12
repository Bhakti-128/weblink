import React, { useEffect, useRef } from 'react';

const Terminal = ({ logs }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div 
      ref={scrollRef} 
      className="h-80 overflow-y-auto p-4 font-mono text-sm space-y-1 bg-[#050505]"
    >
      {logs.length === 0 && (
        <div className="text-gray-600 animate-pulse">_ Waiting for input stream...</div>
      )}
      {logs.map((log, i) => (
        <div key={i} className="break-all">
          <span className="text-gray-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
          {log.includes('ERROR') ? (
            <span className="text-red-500 font-bold">{log}</span>
          ) : log.includes('PLAN') ? (
            <span className="text-yellow-400">{log}</span>
          ) : log.includes('SUCCESS') ? (
             <span className="text-green-400 font-bold">{log}</span>
          ) : (
            <span className="text-cyan-300">{log}</span>
          )}
        </div>
      ))}
      <div className="animate-pulse text-cyan-500">_</div>
    </div>
  );
};

export default Terminal;