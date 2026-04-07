import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Caresite.io — Google Review Management for Skilled Nursing Facilities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F2744 100%)",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(30, 107, 184, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: 200,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.1)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
          {/* Icon */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#1E6BB8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              fontSize: 28,
              fontWeight: 700,
              color: "white",
            }}
          >
            C
          </div>
          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: 40, fontWeight: 700, color: "#1E6BB8" }}>
              Care
            </span>
            <span style={{ fontSize: 40, fontWeight: 700, color: "#F1F5F9" }}>
              site
            </span>
            <span style={{ fontSize: 40, fontWeight: 500, color: "#1E6BB8" }}>
              .io
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#F8FAFC",
            lineHeight: 1.15,
            maxWidth: 760,
            marginBottom: 28,
          }}
        >
          Turn discharges into
          <br />
          <span style={{ color: "#1E6BB8" }}>5-star Google reviews.</span>
        </div>

        {/* Subhead */}
        <div
          style={{
            fontSize: 26,
            color: "#94A3B8",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          The only reputation platform built exclusively for skilled nursing facilities. HIPAA-safe. PointClickCare-native.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { num: "10x", label: "More reviews/month" },
            { num: "$149", label: "Starting price" },
            { num: "HIPAA", label: "Safe by architecture" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{ fontSize: 32, fontWeight: 800, color: "#10B981" }}
              >
                {stat.num}
              </span>
              <span style={{ fontSize: 18, color: "#64748B" }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
