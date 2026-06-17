import { useState } from "react";

const weeks = [
  {
    week: 1,
    title: "Data Analysis Foundations",
    color: "#6366f1",
    light: "#eef2ff",
    milestone: "Comfortable with Pandas & NumPy for data wrangling",
    outcome: "Analyse a real dataset end-to-end and answer business questions from it.",
    days: [
      { day: 1, topic: "Data Science landscape & roles", type: "concept", resource: "YouTube – Ken Jee: 'What is Data Science?' (20 min) + read DS roadmap on roadmap.sh", project: null },
      { day: 2, topic: "NumPy arrays & vectorised ops", type: "video+code", resource: "freeCodeCamp NumPy tutorial (YouTube, ~1 hr – watch at 1.5×)", project: null },
      { day: 3, topic: "Pandas Series & DataFrames", type: "video+code", resource: "Corey Schafer – Pandas Playlist (EP 1–3)", project: null },
      { day: 4, topic: "Data loading, cleaning & missing values", type: "video+code", resource: "Corey Schafer – Pandas Playlist (EP 4–6)", project: null },
      { day: 5, topic: "GroupBy, merge & pivot tables", type: "video+code", resource: "Corey Schafer – Pandas Playlist (EP 7–9)", project: null },
      { day: 6, topic: "Exploratory Data Analysis (EDA) workflow", type: "concept+code", resource: "Kaggle Learn – Pandas micro-course (free, 2 exercises)", project: null },
      { day: 7, topic: "🛠 Mini Project: EDA on Netflix dataset", type: "project", resource: "Dataset: Kaggle 'Netflix Movies and TV Shows'", project: "Load CSV → clean nulls → answer 5 questions (top genres, release trends, etc.) → export findings" },
    ]
  },
  {
    week: 2,
    title: "Data Visualisation",
    color: "#0891b2",
    light: "#ecfeff",
    milestone: "Build clear, insightful charts and a visual story from data",
    outcome: "Produce a polished visual report / dashboard from a real dataset.",
    days: [
      { day: 8, topic: "Matplotlib basics – line, bar, scatter", type: "video+code", resource: "Corey Schafer – Matplotlib Playlist (EP 1–3)", project: null },
      { day: 9, topic: "Matplotlib subplots & styling", type: "video+code", resource: "Corey Schafer – Matplotlib Playlist (EP 4–6)", project: null },
      { day: 10, topic: "Seaborn for statistical plots", type: "video+code", resource: "Kaggle Learn – Data Visualisation micro-course (lessons 1–3)", project: null },
      { day: 11, topic: "Advanced Seaborn – heatmaps, pair plots", type: "video+code", resource: "Kaggle Learn – Data Visualisation micro-course (lessons 4–6)", project: null },
      { day: 12, topic: "Plotly for interactive charts", type: "video", resource: "YouTube – Charming Data: 'Plotly Express in 10 minutes'", project: null },
      { day: 13, topic: "Storytelling with data – design principles", type: "concept", resource: "Article: 'Storytelling with Data' blog (free) – read 2 posts", project: null },
      { day: 14, topic: "🛠 Project: COVID-19 visual report", type: "project", resource: "Dataset: Our World in Data COVID CSV (free download)", project: "5+ chart types → vaccination vs cases → animated time-series with Plotly → save as HTML" },
    ]
  },
  {
    week: 3,
    title: "Machine Learning Essentials",
    color: "#059669",
    light: "#ecfdf5",
    milestone: "Train, evaluate & tune classification and regression models",
    outcome: "End-to-end ML pipeline from raw data to evaluated model.",
    days: [
      { day: 15, topic: "ML concepts – supervised vs unsupervised, bias-variance", type: "concept", resource: "YouTube – StatQuest: 'Machine Learning Fundamentals' playlist (watch 3 videos)", project: null },
      { day: 16, topic: "Scikit-learn API – fit, predict, pipelines", type: "video+code", resource: "YouTube – Sentdex Scikit-learn series (EP 1–3)", project: null },
      { day: 17, topic: "Linear & Logistic Regression", type: "video+code", resource: "StatQuest – 'Linear Regression' + 'Logistic Regression' (YouTube)", project: null },
      { day: 18, topic: "Decision Trees & Random Forests", type: "video+code", resource: "StatQuest – 'Decision Trees' + 'Random Forests' (YouTube)", project: null },
      { day: 19, topic: "Model evaluation – accuracy, ROC-AUC, confusion matrix", type: "video+code", resource: "Kaggle Learn – Intro to ML micro-course (lessons 5–7)", project: null },
      { day: 20, topic: "Feature engineering & hyperparameter tuning", type: "video+code", resource: "Kaggle Learn – Intermediate ML micro-course (lessons 1–3)", project: null },
      { day: 21, topic: "🛠 Project: Titanic survival prediction", type: "project", resource: "Dataset: Kaggle Titanic (classic beginner competition)", project: "Feature engineering → train 3 models → compare metrics → write a model card with findings" },
    ]
  },
  {
    week: 4,
    title: "GenAI + DS Integration & Portfolio",
    color: "#dc2626",
    light: "#fff1f2",
    milestone: "Apply GenAI to DS workflows; ship a portfolio-ready capstone",
    outcome: "GitHub portfolio with 3 projects + a GenAI-powered DS tool.",
    days: [
      { day: 22, topic: "GenAI in DS – LLMs for EDA, code gen, summarisation", type: "concept+code", resource: "YouTube – 'Using ChatGPT / Claude for Data Analysis' (any recent video)", project: null },
      { day: 23, topic: "LangChain / Claude API for data Q&A", type: "video+code", resource: "Anthropic docs – claude.ai API quickstart (free tier)", project: null },
      { day: 24, topic: "SQL + Python integration for DS pipelines", type: "code", resource: "Mode Analytics SQL tutorial (free) – advanced queries section", project: null },
      { day: 25, topic: "Time-series analysis basics", type: "video+code", resource: "YouTube – Rob Mulla: 'Time Series Analysis with Python'", project: null },
      { day: 26, topic: "Capstone planning – dataset selection & problem framing", type: "concept", resource: "Pick from: Kaggle datasets / UCI ML repo / any domain you know", project: null },
      { day: 27, topic: "Capstone – EDA + modelling", type: "project", resource: "Apply weeks 1–3 skills end-to-end", project: null },
      { day: 28, topic: "Capstone – visualisation + insights", type: "project", resource: "Polish charts, write interpretation", project: null },
      { day: 29, topic: "GitHub portfolio setup + README writing", type: "career", resource: "GitHub Docs – 'Managing your profile README' + Chris Titus portfolio video", project: null },
      { day: 30, topic: "🛠 Final: Present capstone + next-step plan", type: "project", resource: "Record a 5-min Loom walkthrough of your project", project: "Push all 3 projects to GitHub → write a LinkedIn post about your 30-day journey → outline next 30 days" },
    ]
  }
];

const typeColors = {
  "concept": { bg: "#f3f4f6", text: "#374151", label: "Concept" },
  "video+code": { bg: "#dbeafe", text: "#1d4ed8", label: "Video + Code" },
  "code": { bg: "#d1fae5", text: "#065f46", label: "Code" },
  "concept+code": { bg: "#ede9fe", text: "#5b21b6", label: "Concept + Code" },
  "video": { bg: "#fef3c7", text: "#92400e", label: "Video" },
  "project": { bg: "#fce7f3", text: "#9d174d", label: "Project 🛠" },
  "career": { bg: "#ffedd5", text: "#9a3412", label: "Career" },
};

export default function Roadmap() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [expandedDay, setExpandedDay] = useState(null);
  const [checked, setChecked] = useState({});

  const totalDays = 30;
  const completedDays = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completedDays / totalDays) * 100);

  const w = weeks[activeWeek];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", maxWidth: 780, margin: "0 auto", padding: "24px 16px", color: "#111827", background: "#f9fafb", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #4f46e5 0%, #0891b2 100%)", borderRadius: 16, padding: "28px 28px 22px", color: "#fff", marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.8, marginBottom: 6 }}>Learning Roadmap</div>
        <h1 style={{ margin: "0 0 4px", fontSize: 26, fontWeight: 800 }}>Data Science in 30 Days</h1>
        <p style={{ margin: "0 0 18px", opacity: 0.85, fontSize: 14 }}>1 hour/day · Video + Project style · Built on your GenAI & Python base</p>
        {/* Progress */}
        <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 99, height: 10, marginBottom: 8 }}>
          <div style={{ background: "#fff", borderRadius: 99, height: 10, width: `${progress}%`, transition: "width 0.4s" }} />
        </div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>{completedDays} / {totalDays} days complete — {progress}%</div>
      </div>

      {/* Week tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
        {weeks.map((wk, i) => (
          <button key={i} onClick={() => { setActiveWeek(i); setExpandedDay(null); }}
            style={{
              flex: "0 0 auto", padding: "10px 18px", borderRadius: 10, border: "2px solid",
              borderColor: activeWeek === i ? wk.color : "#e5e7eb",
              background: activeWeek === i ? wk.color : "#fff",
              color: activeWeek === i ? "#fff" : "#374151",
              fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s",
              whiteSpace: "nowrap"
            }}>
            Week {wk.week}
          </button>
        ))}
      </div>

      {/* Week card */}
      <div style={{ background: w.light, border: `2px solid ${w.color}22`, borderRadius: 14, padding: "20px 22px", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: w.color, marginBottom: 4 }}>Week {w.week}</div>
            <h2 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 800, color: "#111827" }}>{w.title}</h2>
            <p style={{ margin: 0, fontSize: 13, color: "#4b5563" }}><b>Milestone:</b> {w.milestone}</p>
          </div>
        </div>
        <div style={{ marginTop: 12, padding: "10px 14px", background: "#fff", borderRadius: 8, fontSize: 13, color: "#374151" }}>
          🎯 <b>Week outcome:</b> {w.outcome}
        </div>
      </div>

      {/* Daily tasks */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {w.days.map((d) => {
          const tc = typeColors[d.type] || typeColors["concept"];
          const isOpen = expandedDay === d.day;
          const isDone = checked[d.day];
          return (
            <div key={d.day}
              style={{
                background: isDone ? "#f0fdf4" : "#fff",
                border: `1.5px solid ${isDone ? "#86efac" : isOpen ? w.color : "#e5e7eb"}`,
                borderRadius: 10, overflow: "hidden", transition: "all 0.2s"
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", cursor: "pointer" }}
                onClick={() => setExpandedDay(isOpen ? null : d.day)}>
                {/* Checkbox */}
                <div onClick={e => { e.stopPropagation(); setChecked(c => ({ ...c, [d.day]: !c[d.day] })); }}
                  style={{
                    width: 22, height: 22, borderRadius: 6, border: `2px solid ${isDone ? "#22c55e" : "#d1d5db"}`,
                    background: isDone ? "#22c55e" : "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, cursor: "pointer", transition: "all 0.2s"
                  }}>
                  {isDone && <span style={{ color: "#fff", fontSize: 13, lineHeight: 1 }}>✓</span>}
                </div>
                {/* Day badge */}
                <div style={{ background: w.color, color: "#fff", borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                  Day {d.day}
                </div>
                {/* Topic */}
                <div style={{ flex: 1, fontWeight: 600, fontSize: 14, color: isDone ? "#6b7280" : "#111827", textDecoration: isDone ? "line-through" : "none" }}>
                  {d.topic}
                </div>
                {/* Type badge */}
                <div style={{ background: tc.bg, color: tc.text, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600, flexShrink: 0, display: "none", ...(window.innerWidth > 500 ? { display: "block" } : {}) }}>
                  {tc.label}
                </div>
                <div style={{ fontSize: 14, color: "#9ca3af", flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</div>
              </div>
              {isOpen && (
                <div style={{ padding: "0 16px 16px 16px", borderTop: `1px solid #f3f4f6` }}>
                  <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ fontSize: 13 }}>
                      <span style={{ fontWeight: 700, color: "#374151" }}>📚 Resource: </span>
                      <span style={{ color: "#4b5563" }}>{d.resource}</span>
                    </div>
                    {d.project && (
                      <div style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", borderRadius: 8, padding: "10px 12px", fontSize: 13 }}>
                        <div style={{ fontWeight: 700, color: "#7c3aed", marginBottom: 4 }}>🛠 Project Brief</div>
                        <div style={{ color: "#4b5563" }}>{d.project}</div>
                      </div>
                    )}
                    <div style={{ background: tc.bg, borderRadius: 6, padding: "4px 10px", display: "inline-block", width: "fit-content" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: tc.text }}>Type: {tc.label}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final Outcome */}
      {activeWeek === 3 && (
        <div style={{ marginTop: 24, background: "linear-gradient(135deg, #4f46e5, #0891b2)", borderRadius: 14, padding: "22px 24px", color: "#fff" }}>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>🏆 Final Outcome After 30 Days</div>
          {[
            "3 real projects on GitHub (EDA, ML, Capstone)",
            "Skills: Pandas, NumPy, Matplotlib, Seaborn, Plotly, Scikit-learn",
            "End-to-end ML pipeline: data → model → evaluation",
            "GenAI-augmented DS workflow using Claude/OpenAI API",
            "A LinkedIn post and Loom walkthrough to showcase your journey",
            "Foundation to pursue Kaggle competitions or DS roles",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8, fontSize: 14 }}>
              <span style={{ flexShrink: 0, marginTop: 1 }}>✅</span>
              <span style={{ opacity: 0.92 }}>{item}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#9ca3af" }}>
        Click each day to expand details · Check off days as you complete them
      </div>
    </div>
  );
}
