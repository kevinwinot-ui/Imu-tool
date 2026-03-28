// modules/ui/Advisor.js
// ---------------------------------------------------------------------------
// FLOATING ADVISOR PANEL (Variant C – Minimalistisch)
// ---------------------------------------------------------------------------
// Functionaliteit:
// • Toont real-time advies van getAdvisorLine()
// • Kan worden aan/uitgezet via Settings (showAdvisor)
// • Zweeft rechtsboven op elk turn-screen
// • Transparant, minimalistisch, niet in de weg
// ---------------------------------------------------------------------------

import React from "https://esm.sh/react@18";
import { IMUState } from "../state.js";
import { getAdvisorLine } from "../advisor.js";

export default function AdvisorPanel() {

  // Advisor is uitgeschakeld?
  if (!IMUState.settings.showAdvisor) return null;

  const advice = getAdvisorLine();

  return React.createElement(
    "div",
    {
      style: {
        position: "fixed",
        top: "20px",
        right: "20px",
        width: "260px",
        background: "rgba(0,0,0,0.75)",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "14px",
        lineHeight: "1.4",
        zIndex: 9999,
        backdropFilter: "blur(4px)",
        border: "1px solid #333",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)"
      }
    },
    [
      React.createElement(
        "div",
        { key: "hdr", style: { fontWeight: "bold", marginBottom: "6px", fontSize: "15px" } },
        "🎯 Advisor"
      ),
      React.createElement(
        "div",
        { key: "msg" },
        advice
      )
    ]
  );
}
