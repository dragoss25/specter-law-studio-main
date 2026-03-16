import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Message {
  type: 'user' | 'assistant' | 'processing';
  content: string;
  delay?: number; // Delay before showing this message (ms)
}

interface ConversationStep {
  messages: Message[];
}

interface AIConversationDemoProps {
  conversationSteps: ConversationStep[];
  className?: string;
}

export function AIConversationDemo({ conversationSteps, className }: AIConversationDemoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageToType, setMessageToType] = useState<Message | null>(null);

  // Reset animation when conversation changes
  useEffect(() => {
    setCurrentStep(0);
    setVisibleMessages([]);
    setTypingText('');
    setIsTyping(false);
    setMessageToType(null);
  }, [conversationSteps]);

  // Process conversation steps
  useEffect(() => {
    if (currentStep >= conversationSteps.length) return;

    const step = conversationSteps[currentStep];
    let messageIndex = 0;

    const processNextMessage = () => {
      if (messageIndex >= step.messages.length) {
        // Move to next step after a delay
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 2000);
        return;
      }

      const message = step.messages[messageIndex];
      const delay = message.delay || 0;

      setTimeout(() => {
        if (message.type === 'assistant') {
          // Start typing animation for assistant messages
          setMessageToType(message);
          setIsTyping(true);
        } else {
          // Show user and processing messages immediately
          setVisibleMessages(prev => [...prev, message]);
          messageIndex++;
          processNextMessage();
        }
      }, delay);
    };

    processNextMessage();
  }, [currentStep, conversationSteps]);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping || !messageToType) return;

    let currentIndex = 0;
    const fullText = messageToType.content;
    const typingSpeed = 30; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, messageToType]);
        setTypingText('');
        setMessageToType(null);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [isTyping, messageToType]);

  return (
    <div className={cn("bg-background rounded-xl border border-border p-6 min-h-[400px]", className)}>
      <div className="space-y-4">
        {visibleMessages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex",
              message.type === 'user' ? "justify-end" : "justify-start"
            )}
          >
            {message.type === 'user' && (
              <div className="max-w-[80%] rounded-2xl bg-foreground text-background px-4 py-3 animate-fade-in">
                <p className="text-sm">{message.content}</p>
              </div>
            )}
            {message.type === 'processing' && (
              <div className="max-w-[80%] rounded-2xl bg-muted px-4 py-3 animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <p className="text-sm text-muted-foreground">{message.content}</p>
                </div>
              </div>
            )}
            {message.type === 'assistant' && (
              <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-3 animate-fade-in">
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator for assistant message */}
        {isTyping && typingText && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-3">
              <p className="text-sm leading-relaxed">
                {typingText}
                <span className="inline-block w-1 h-4 bg-foreground/60 ml-0.5 animate-pulse" />
              </p>
            </div>
          </div>
        )}

        {/* Show typing dots when waiting to type */}
        {isTyping && !typingText && (
          <div className="flex justify-start">
            <div className="rounded-2xl bg-muted px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
