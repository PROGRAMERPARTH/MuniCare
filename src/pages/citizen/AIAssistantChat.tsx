import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export default function AIAssistantChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I am your MuniCare AI Assistant. How can I help you today? You can ask me about municipal services, check complaint status, or get guidance on how to file a report.', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);
    setIsTyping(true);

    // Simulate AI delay
    await new Promise(r => setTimeout(r, 1500));
    
    setIsTyping(false);
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: "I understand you're asking about that. As an AI assistant, I can guide you to the right municipal department. Would you like me to open a service request for this issue?", 
      sender: 'ai' 
    }]);
  };

  return (
    <div className="animate-fadeIn" style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex items-center gap-3">
          <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--gradient-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={20} />
          </div>
          <div>
            <h1 style={{ fontSize: 'var(--text-xl)' }}>MuniCare AI Assistant</h1>
            <p style={{ fontSize: 'var(--text-sm)' }}>Powered by Gemini</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: msg.sender === 'user' ? 'var(--primary-100)' : 'var(--gradient-primary)', color: msg.sender === 'user' ? 'var(--primary-600)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div style={{ 
                background: msg.sender === 'user' ? 'var(--primary-500)' : 'var(--bg-tertiary)', 
                color: msg.sender === 'user' ? '#fff' : 'var(--text-primary)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-lg)',
                borderTopRightRadius: msg.sender === 'user' ? 4 : 'var(--radius-lg)',
                borderTopLeftRadius: msg.sender === 'ai' ? 4 : 'var(--radius-lg)',
                maxWidth: '75%',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.5
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--gradient-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Bot size={16} />
              </div>
              <div style={{ background: 'var(--bg-tertiary)', padding: '12px 16px', borderRadius: 'var(--radius-lg)', borderTopLeftRadius: 4, display: 'flex', gap: 4, alignItems: 'center' }}>
                <div className="typing-dot" style={{ animationDelay: '0s' }} />
                <div className="typing-dot" style={{ animationDelay: '0.2s' }} />
                <div className="typing-dot" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div style={{ padding: 'var(--space-3)', borderTop: '1px solid var(--border-primary)', background: 'var(--bg-secondary)' }}>
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            style={{ display: 'flex', gap: 'var(--space-2)' }}
          >
            <input 
              type="text" 
              className="input" 
              placeholder="Ask me anything..." 
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn btn-primary" disabled={!input.trim() || isTyping}>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
