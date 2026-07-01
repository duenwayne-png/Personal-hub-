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
const initialEvents = [
  { id: 1, title: "Team Standup", time: "10:00 AM", duration: "30 min", color: "#6C63FF" },
  { id: 2, title: "Q3 Strategy Call", time: "2:00 PM", duration: "1 hr", color: "#E91E8C" },
  { id: 3, title: "Design Review", time: "4:30 PM", duration: "45 min", color: "#00BFA5" },
];
const initialZaps = [
  { id: 1, name: "New Email → Create Trello Card", trigger: "Gmail", action: "Trello", active: true, runs: 142, lastRun: "2 min ago", color: "#6C63FF" },
  { id: 2, name: "Trello Done → Notify Slack", trigger: "Trello", action: "Slack", active: true, runs: 87, lastRun: "1 hr ago", color: "#00BFA5" },
  { id: 3, name: "Calendar Event → Send Reminder", trigger: "Google Calendar", action: "SMS", active: false, runs: 34, lastRun: "Yesterday", color: "#FF6B35" },
  { id: 4, name: "New Invoice → Update Sheet", trigger: "Gmail", action: "Google Sheets", active: true, runs: 56, lastRun: "8 hr ago", color: "#E91E8C" },
];
const initialNotifs = [
  { id: 1, icon: "✉️", title: "New email from Alex Morgan", body: "Re: Q3 Strategy — looks great!", time: "9:41 AM", read: false, color: "#6C63FF" },
  { id: 2, icon: "⚡", title: "Zap triggered", body: "New Email → Create Trello Card ran successfully", time: "9:42 AM", read: false, color: "#FFB300" },
  { id: 3, icon: "✅", title: "Task overdue", body: "Follow up with Alex re: strategy is overdue", time: "8:00 AM", read: false, color: "#E53935" },
  { id: 4, icon: "📅", title: "Event in 45 minutes", body: "Q3 Strategy Call at 2:00 PM", time: "1:15 PM", read: true, color: "#E91E8C" },
  { id: 5, icon: "💰", title: "Payment confirmed", body: "Invoice #0042 — $3,200 received", time: "8:15 AM", read: true, color: "#00BFA5" },
];

const navItems = [
  { key: "home", icon: "🏠", label: "Home" },
  { key: "inbox", icon: "✉️", label: "Inbox" },
  { key: "tasks", icon: "✅", label: "Tasks" },
  { key: "zapier", icon: "⚡", label: "Zapier" },
  { key: "more", icon: "☰", label: "More" },
];

const getStatusColors = (dark) => ({
  Done:    { bg: dark ? "#1B2E1F" : "#E8F5E9", text: dark ? "#66BB6A" : "#2E7D32" },
  Today:   { bg: dark ? "#2E2010" : "#FFF3E0", text: dark ? "#FFA726" : "#E65100" },
  Overdue: { bg: dark ? "#2E1010" : "#FFEBEE", text: dark ? "#EF5350" : "#C62828" },
  Soon:    { bg: dark ? "#1E1530" : "#EDE7F6", text: dark ? "#AB47BC" : "#4527A0" },
});

function FadeIn({ children, delay = 0 }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}>{children}</div>;
}

function Spinner() {
  return <div style={{ width: 20, height: 20, border: "3px solid #eee", borderTop: "3px s
function ConnectBadge({ connected, onConnect }) {
  return connected
    ? <span style={{ fontSize: 11, fontWeight: 700, color: "#4CAF50", background: "#E8F5E9", borderRadius: 20, padding: "3px 10px" }}>● Connected</span>
    : <span onClick={onConnect} style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: "#6C63FF", borderRadius: 20, padding: "3px 10px", cursor: "pointer" }}>Connect →</span>;
   }D.duen
