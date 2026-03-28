// modules/ui/Tracker.js
// ---------------------------------------------------------------------------
// FLOATING TURN/DON/ELDER TRACKER (Variant C – Minimalistisch)
// ---------------------------------------------------------------------------
// Functionaliteit:
// • Zwevend rechtsonder
// • Toont realtime:
//    - Turn
//    - DON
//    - Elders
//    - Buffs (Ju Peter / DON buff / Nusjuro)
// • Automatisch verborgen in niet-simulatie schermen
// • Geïntegreerd met settings (showTracker)
// ---------------------------------------------------------------------------

import React from "https://esm.sh/react@18";
import { IMUState } from "../state.js";

export default function TrackerPanel() {

  // tracker uitgeschakeld in settings
  if (!IMUState.settings.showTracker) return null;

  // Niet tonen op deze schermen
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

  return React.createElement(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "220px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "13px",
        lineHeight: "1.4",
        zIndex: 9000,
        backdropFilter: "blur(4px)",
        border: "1px solid #333",
        boxShadow: "0 0 10px rgba(0,0,0,0.4)"
      }
    },
    [

      // HEADER
      React.createElement(
        "div",
        {
          key: "header",
          style: {
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: "center",
            fontSize: "14px"
          }
        },
        "📟 Tracker"
      ),

      // TURN
      React.createElement(
        "div",
        { key: "turn" },
        `Turn: ${IMUState.turn}`
      ),

      // DON
      React.createElement(
        "div",
        { key: "don" },
        `DON: ${IMUState.don} (Buff: +${IMUState.buffDon * 1000})`
      ),

      // ELDERS
      React.createElement(
        "div",
        { key: "elders" },
        `Elders: ${IMUState.elders}`
      ),

      // JU PETER BUFF
      React.createElement(
        "div",
        { key: "jp" },
        `Ju Peter buff: ${IMUState.juPeterBuff ? "✅" : "❌"}`
      ),

      // NUSJURO DEBUFF
      React.createElement(
        "div",
        { key: "nus" },
        `Nusjuro debuff: ${IMUState.nusjuroDebuff ? "✅" : "❌"}`
      )
    ]
  );
}
