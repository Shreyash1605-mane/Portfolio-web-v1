import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shreyash Mane - Resume</title>
  <style>
    @page {
      margin: 0.6in;
      size: A4;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      color: #1e293b;
      line-height: 1.55;
      font-size: 10.5pt;
      background: #fff;
      padding: 0.6in;
      max-width: 8.27in;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none !important; }
    }
    header {
      text-align: center;
      padding-bottom: 14px;
      border-bottom: 2.5px solid #3b82f6;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 24pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
      margin-bottom: 4px;
    }
    .subtitle {
      font-size: 10.5pt;
      color: #3b82f6;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .contact-info {
      font-size: 9pt;
      color: #64748b;
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .contact-info span { white-space: nowrap; }
    .section { margin-bottom: 16px; }
    .section-title {
      font-size: 12pt;
      font-weight: 700;
      color: #3b82f6;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      padding-bottom: 5px;
      border-bottom: 1.5px solid #e2e8f0;
      margin-bottom: 10px;
    }
    .item { margin-bottom: 10px; }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 4px;
    }
    .item-title {
      font-size: 11pt;
      font-weight: 700;
      color: #0f172a;
    }
    .item-subtitle {
      font-size: 9.5pt;
      color: #64748b;
      font-style: italic;
    }
    .item-date {
      font-size: 9pt;
      color: #94a3b8;
      white-space: nowrap;
    }
    .item-desc {
      font-size: 9.5pt;
      color: #475569;
      margin-top: 3px;
      list-style-position: inside;
    }
    .item-desc li { margin-bottom: 2px; }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3px 24px;
      font-size: 9.5pt;
      color: #475569;
    }
    .skills-grid div { padding: 1px 0; }
    .skills-grid strong { color: #0f172a; }
    .projects-list { list-style: none; padding: 0; }
    .projects-list li {
      font-size: 9.5pt;
      color: #475569;
      padding: 2px 0;
    }
    .projects-list li strong { color: #0f172a; }
    .achievements { display: flex; gap: 10px; flex-wrap: wrap; }
    .achievement-badge {
      display: inline-block;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: 600;
    }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 7in) {
      .two-col { grid-template-columns: 1fr; }
      .skills-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Shreyash Mane</h1>
    <div class="subtitle">Computer Science Student &amp; Cybersecurity Enthusiast</div>
    <div class="contact-info">
      <span>📍 Pune, Maharashtra, India</span>
      <span>📧 shreyashmane@email.com</span>
      <span>🔗 github.com/shreyashmane</span>
      <span>💼 linkedin.com/in/shreyashmane</span>
    </div>
  </header>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p style="font-size:9.5pt;color:#475569;">
      Passionate Computer Science student specializing in Cybersecurity, Data Science, IoT Development, and Machine Learning. National-level Silver Medalist with hands-on experience building IoT systems, web applications, and ML models. Dedicated to competitive problem solving and developing innovative solutions to real-world challenges. Currently preparing for India Skills 2025-26 national cybersecurity competition.
    </p>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Bachelor of Computer Science</span>
          <span class="item-subtitle"> — DYPatil School of Engineering &amp; Management (DYPSEM)</span>
        </div>
        <span class="item-date">2023 – Present</span>
      </div>
      <div class="item-desc">
        <ul>
          <li>Specializing in Cybersecurity and Data Science</li>
          <li>Active member of college tech community and hackathon teams</li>
          <li>Relevant coursework: Data Structures, Algorithms, DBMS, Computer Networks, Machine Learning</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Projects</div>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Smart Parking System</span>
          <span class="item-subtitle"> — IoT &amp; Embedded</span>
        </div>
        <span class="item-date">2024</span>
      </div>
      <div class="item-desc">
        <ul>
          <li>Built real-time parking slot monitoring using Arduino/ESP32 with IR sensor integration</li>
          <li>Implemented wireless data transmission and LED dashboard for live slot visualization</li>
          <li>Automated slot counting algorithm for efficient parking management</li>
          <li><strong>Tech:</strong> Arduino, ESP32, C++, IR Sensors, Wireless Communication</li>
        </ul>
      </div>
    </div>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">E-Grampanchayat Portal</span>
          <span class="item-subtitle"> — Web Development</span>
        </div>
        <span class="item-date">2023</span>
      </div>
      <div class="item-desc">
        <ul>
          <li>Developed digital governance dashboard for village record management and administration</li>
          <li>Implemented citizen records management, birth/death registration, and tax collection modules</li>
          <li>Automated report generation improving transparency in rural governance</li>
          <li><strong>Tech:</strong> HTML, CSS, JavaScript, PHP, MySQL</li>
        </ul>
      </div>
    </div>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Disease Prediction System</span>
          <span class="item-subtitle"> — Machine Learning</span>
        </div>
        <span class="item-date">2024 – In Progress</span>
      </div>
      <div class="item-desc">
        <ul>
          <li>Developing supervised ML models (Random Forest, SVM, Logistic Regression) for disease prediction</li>
          <li>Implemented comprehensive data preprocessing pipelines and feature engineering</li>
          <li>Building Flask-based web interface with probability-scored predictions</li>
          <li><strong>Tech:</strong> Python, Scikit-learn, Pandas, NumPy, Flask</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="two-col">
    <div class="section">
      <div class="section-title">Technical Skills</div>
      <div class="skills-grid">
        <div><strong>Languages:</strong> Python, C++, Java, JavaScript, SQL</div>
        <div><strong>Web Dev:</strong> HTML, CSS, React, Next.js, PHP</div>
        <div><strong>ML / AI:</strong> Scikit-learn, Pandas, NumPy, TensorFlow</div>
        <div><strong>IoT:</strong> Arduino, ESP32, Sensors, Embedded C</div>
        <div><strong>Tools:</strong> Git, VS Code, Docker, Linux</div>
        <div><strong>Soft Skills:</strong> Team Leadership, Problem Solving</div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Achievements</div>
      <div class="achievements" style="display:block;">
        <ul class="projects-list">
          <li>🥇 <strong>National Level Silver Medalist</strong> — India Skills Competition (Cybersecurity)</li>
          <li>🏆 <strong>Regional Winner</strong> — State-level cybersecurity championship</li>
          <li>🏅 <strong>Hackathon Finalist</strong> — Multiple inter-college hackathons</li>
          <li>📜 <strong>Certified:</strong> TechSaksham Program (Data Science &amp; AI)</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Interests &amp; Activities</div>
    <p style="font-size:9.5pt;color:#475569;">
      Open source contributing • Competitive programming • Cloud security research • Building developer tools • Community tech workshops
    </p>
  </div>

  <div class="no-print" style="text-align:center;margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;">
    <p style="font-size:9pt;color:#94a3b8;">
      Use <strong>Ctrl+P</strong> (or <strong>⌘+P</strong> on Mac) to save this resume as PDF
    </p>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
