export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <div style={{
        position: "absolute",
        width: 520,
        height: 520,
        top: -220,
        left: -220,
        background: "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.22), transparent 60%)",
        filter: "blur(2px)",
      }} />
      <div style={{
        position: "absolute",
        width: 620,
        height: 620,
        top: -260,
        right: -260,
        background: "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.18), transparent 60%)",
        filter: "blur(2px)",
      }} />
      <div style={{
        position: "absolute",
        width: 520,
        height: 520,
        bottom: -260,
        left: "35%",
        background: "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.14), transparent 60%)",
        filter: "blur(2px)",
      }} />
    </div>
  );
}
