interface Props {
  variant?: "fixed" | "absolute";
}

export const AnimatedBlobs = ({ variant = "absolute" }: Props) => {
  const positionClass =
    variant === "fixed" ? "fixed inset-0 -z-10" : "absolute inset-0 -z-10";

  return (
    <div aria-hidden className={`pointer-events-none ${positionClass}`}>
      {/* Concentric glowing rings — radiant sun behind the page */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[90vmin] w-[90vmin]">
          {/* Soft core glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--primary) / 0.35), hsl(var(--accent) / 0.15) 45%, transparent 70%)",
            }}
          />
          {/* Concentric rings */}
          {[0.3, 0.45, 0.6, 0.75, 0.9, 1].map((scale, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ring-pulse"
              style={{
                width: `${scale * 100}%`,
                height: `${scale * 100}%`,
                border: "1px solid hsl(var(--primary) / 0.18)",
                boxShadow:
                  "0 0 60px hsl(var(--primary) / 0.12), inset 0 0 40px hsl(var(--accent) / 0.10)",
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle floating blobs for depth */}
      {/* <div
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl animate-blob"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div
        className="absolute bottom-0 -right-24 h-[460px] w-[460px] rounded-full opacity-10 blur-3xl animate-blob"
        style={{ background: "var(--gradient-accent)", animationDelay: "6s" }}
      /> */}
    </div>
  );
};
