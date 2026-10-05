import { useState, useEffect } from "react";

const initialEmails = [
  { id: 1, sender: "Alex Morgan", preview: "Re: Q3 Strategy — looks great, one com...", full: "Re: Q3 Strategy — looks great, one comment on slide 4. Can we hop on a call?", time: "9:41 AM", color: "#6C63FF", unread: true, archived: false },
  { id: 2, sender: "Sara Kim", preview: "Invoice #0042 — payment confirmed ✓", full: "Invoice #0042 has been paid. Amount: $3,200. Thank you for your work!", time: "8:15 AM", color: "#E91E8C", unread: true, archived: false },
  { id: 3, sender: "Notion", preview: "Weekly digest: 14 pages updated in D.duen....", full: "Weekly digest: 14 pages were updated in your D.duen workspace this week.", time: "7:00 AM", color: "#FF6B35", unread: false, archived: false },
  { id: 4, sender: "Tom W.", preview: "Can we push the call to Thursday?", full: "Hey, something came up. Can we push the strategy call to Thursday at 3pm?", time: "Yesterday", color: "#00BFA5", unread: false, archived: false },
];
const initialTasks = [
  { id: 1, text: "Design homepage mockup", status: "Done", done: true },
  { id: 2, text: "Send proposal to client", status: "Done", done: true },
  { id: 3, text: "Review Q3 budget sheet", status: "Today", done: false },
  { id: 4, text: "Follow up with Alex re: strategy", status: "Overdue", done: false },
  { id: 5, text: "Update hub automations in Zapier", status: "Soon", done: false },
];

function FadeIn({ children, delay = 0 }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}>{children}</div>;
}

function DarkToggle({ dark, setDark }) {
  return <div onClick={() => setDark(d => !d)} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6, background: dark ? "#2A2A3E" : "#eee", borderRadius: 20, padding: "5px 10px", fontSize: 13, fontWeight: 600, color: dark ? "#fff" : "#555" }}>{dark ? "🌙 Dark" : "☀️ Light"}</div>;
}
