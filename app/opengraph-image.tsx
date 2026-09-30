import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Anirban Dutta | Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "64px 72px", color: "#faf5ff",
        background: "linear-gradient(125deg, #10091c 25%, #311653 100%)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 76, height: 76, borderRadius: 20, border: "2px solid #a78bfa", color: "#e9d5ff", fontSize: 32, fontWeight: 700 }}>AD</div>
          <div style={{ display: "flex", color: "#c4b5fd", fontSize: 20, letterSpacing: 4 }}>PORTFOLIO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 38, color: "#c4b5fd" }}>{site.role}</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 25, color: "#ddd6e8" }}>Thoughtful interfaces. Solid backend systems.</div>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid #604279", paddingTop: 24, fontSize: 20, color: "#c4b5fd" }}>portfolio-2-1-nine.vercel.app</div>
      </div>
    ),
    size,
  );
}
