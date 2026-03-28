// modules/ui/MiniMap.js
// ---------------------------------------------------------------------------
// FLOATING MINI-MAP NAVIGATION (Variant C – Minimalistisch)
// ---------------------------------------------------------------------------
// Functionaliteit:
// • Toont een compacte visuele flow van het IMU-simulatiepad
// • Dynamische highlight van huidige fase (IMUState.screen)
// • Zwevend aan linkerkant
// • Automatisch verborgen tijdens Dashboard, DeckImport en ProfileSelect
// ---------------------------------------------------------------------------

import React from "https://esm.sh/react@18";
import { IMUState } from "../state.js";

export default function MiniMap() {

  // MiniMap niet tonen op niet-simulatie schermen
  const hiddenScreens = [
    "dashboard",
    "profileSelect",
    "deckImport",
    "handSelect",
    "mulligan",
    "settings",
    "stats",
    "replay"
  ];

  if (hiddenScreens.includes(IMUState.screen)) return null;

  const current = IMUState.screen;

  const steps = [
    { id: "turn1", label: "Turn 1" },
    { id: "turn2", label: "Turn 2" },
    { id: "turn34", label: "Turn 3–4" },
    { id: "turn57", label: "Turn 5–7" },
    { id: "turn8", label: "Turn 8" },
    { id: "turn9", label: "Turn 9" },
    { id: "turn10", label: "Turn 10" },
    { id: "killcalc", label: "Kill Calc" },
    { id: "killresult", label: "Resultaat" }
  ];

  return React.createElement(
    "div",
    {
      style: {
        position: "fixed",
        top: "20px",
        left: "20px",
        width: "140px",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        padding: "12px",
        color: "white",
        borderRadius: "8px",
        border: "1px solid #333",
        fontSize: "13px",
        zIndex: 9000,
        maxHeight: "80vh",
        overflowY: "auto"
      }
    },
    [

      React.createElement(
        "div",
        { key: "title", style: { fontWeight: "bold", marginBottom: "10px", textAlign: "center" } },
        "📌 Mini‑Map"
      ),

      ...steps.map(step =>
        React.createElement(
          "div",
          {
            key: step.id,
            style: {
              padding: "6px 4px",
              marginBottom: "4px",
              background: current === step.id ? "#0066ff" : "#222",
              borderRadius: "4px",
              color: current === step.id ? "white" : "#bbb",
              fontWeight: current === step.id ? "bold" : "normal",
              textAlign: "center"
            }
          },
          step.label
        )
      )
    ]
  );
}
