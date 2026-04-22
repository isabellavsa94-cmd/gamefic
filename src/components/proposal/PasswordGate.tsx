import { useState } from "react";
import { Lock } from "lucide-react";
const CORRECT_PASSWORD = "Bemvindosamuel";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(() => {
    return sessionStorage.getItem("site-authorized") === "true";
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem("site-authorized", "true");
      setAuthorized(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (authorized) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 w-full max-w-sm px-6"
      >
        <Lock className="text-muted-foreground" size={32} />
        <h1 className="text-xl font-medium tracking-[0.08em] text-foreground">
          Acesso restrito
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          Digite a senha para visualizar a proposta
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          autoFocus
          className={`w-full px-4 py-3 rounded-lg border text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-colors ${
            error ? "border-red-500 shake" : "border-border focus:border-primary"
          }`}
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium tracking-[0.06em] hover:opacity-90 transition-opacity"
        >
          Entrar
        </button>
        {error && (
          <p className="text-xs text-red-500">Senha incorreta</p>
        )}
      </form>
    </div>
  );
}
