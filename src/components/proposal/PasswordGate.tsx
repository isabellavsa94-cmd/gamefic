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
    <div className="fixed inset-0 z-[100] overflow-hidden bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)]">
      <div className="absolute inset-0 opacity-25 gamefic-pattern" />
      <div className="absolute left-[-8%] top-[18%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(0,255,141,0.2),transparent_72%)]" />
      <div className="absolute bottom-[-80px] right-[-80px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_72%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[430px] rounded-[34px] border border-white/15 bg-white/10 p-8 text-white shadow-[0_30px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
        >
          <div className="mb-7 text-center">
            <div className="press-start-lines mx-auto max-w-[290px] px-4 py-2">
              <div className="press-start-title">
                <span>PRESS</span>
                <span>START</span>
              </div>
            </div>
          </div>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent text-primary">
            <Lock size={28} />
          </div>
          <h1 className="mt-6 text-center font-display text-[34px] font-extrabold tracking-[-0.04em]">
            Acesso restrito
          </h1>
          <p className="mt-3 text-center text-[15px] leading-[1.62] text-white/76">
            Digite a senha para visualizar a proposta comercial da Gamefic.
          </p>

          <div className="mt-7 rounded-full bg-white px-5 py-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              autoFocus
              className="w-full bg-transparent text-[15px] text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-accent px-5 py-4 font-display text-[17px] font-extrabold text-primary transition-transform hover:-translate-y-0.5"
          >
            Entrar
          </button>

          {error && <p className="mt-4 text-center text-sm text-red-200">Senha incorreta</p>}
        </form>
      </div>
    </div>
  );
}
