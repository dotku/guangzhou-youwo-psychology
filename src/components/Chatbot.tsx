import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

type ComponentType = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  inline?: boolean;
};

const markdownComponents: Partial<Components> = {
  a: ({ children, href }: ComponentType) => (
    <a
      href={href}
      className="text-rose-600 hover:text-rose-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  p: ({ children }: ComponentType) => (
    <p className="mb-1">
      {children}
    </p>
  ),
  ul: ({ children }: ComponentType) => (
    <ul className="mb-1">
      {children}
    </ul>
  ),
  li: ({ children }: ComponentType) => (
    <li className="mb-0">
      {children}
    </li>
  ),
  code: ({ inline, className, children }: ComponentType) => {
    const match = /language-(\w+)/.exec(className || "");
    return (
      <code
        className={`${
          inline ? "bg-gray-200 px-1 py-0.5 rounded" : "block bg-gray-100 p-2 rounded"
        } ${match ? `language-${match[1]}` : ""}`}
      >
        {children}
      </code>
    );
  },
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "抱歉，出现了技术问题。请稍后再试或直接拨打 020-XXXXXXXX 联系我们。",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col transition-all duration-300 ${
        isOpen ? "h-[80vh] w-[90vw] md:w-[400px]" : "h-12 w-12"
      }`}
    >
      {isOpen && (
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="flex items-center justify-between bg-rose-500 px-4 py-2">
            <h2 className="text-lg font-semibold text-white">尤我心理咨询助手</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-rose-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-600 py-8">
                <p className="mb-4">欢迎使用尤我心理咨询在线助手</p>
                <p className="mb-2">您可以询问：</p>
                <ul className="space-y-2 text-sm">
                  <li>• 心理咨询服务介绍</li>
                  <li>• 预约咨询流程</li>
                  <li>• 心理健康建议</li>
                  <li>• 服务时间和地点</li>
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  注：本助手仅提供初步咨询，如需专业帮助请预约面谈
                </p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 ${
                    message.role === "assistant"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-rose-500 text-white"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                      <ReactMarkdown components={markdownComponents}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] animate-pulse rounded-lg bg-gray-100 px-4 py-2">
                  <div className="h-4 w-12 rounded bg-gray-300"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="请输入您的问题..."
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-lg bg-rose-500 px-4 py-2 text-white hover:bg-rose-600 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="h-full w-full rounded-full bg-rose-500 text-white shadow-lg hover:bg-rose-600"
        >
          <MessageCircle className="mx-auto h-6 w-6" />
        </button>
      )}
    </div>
  );
};
