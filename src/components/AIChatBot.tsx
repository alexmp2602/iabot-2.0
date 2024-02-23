import { useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { XCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AiChatBotProps {
  open: boolean;
  onClose: () => void;
}

export default function AiChatBot({ open, onClose }: AiChatBotProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden"
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30} />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">
        <div className="h-full">Mensajes</div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe un mensaje"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </div>
  );
}
