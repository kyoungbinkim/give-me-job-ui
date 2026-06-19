import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const installOptions = [
  {
    id: "quick",
    label: "3초 컷",
    command: "npx give-me-job install",
    note: "설치할 에이전트를 화살표 키로 고르면 끝.",
  },
  {
    id: "codex",
    label: "Codex",
    command: "npx give-me-job install --target codex",
    note: "Codex 유저 프로필에 스킬 8종과 오케스트레이터를 설치합니다.",
  },
  {
    id: "all",
    label: "욕심쟁이",
    command: "npx give-me-job install --target all",
    note: "Codex, OpenCode, Claude Code를 한 번에 챙깁니다.",
  },
];

const features = [
  ["01", "이력서 팩트 채굴", "흩어진 경력 메모를 재사용 가능한 resume.md 근거로 정리."],
  ["02", "JD 현미경 분석", "요구 역량, 평가 기준, 키워드, 빈틈과 리스크를 탈탈 털기."],
  ["03", "자소서 조립", "내 경험 안에서만 씁니다. 없는 성과를 갑자기 낳지 않음."],
  ["04", "HR 악마의 검수", "과장, 근거 없는 주장, 회사명 복붙 사고를 제출 전에 검거."],
  ["05", "면접 방어력 +99", "자소서의 핵심 주장마다 예상 꼬리 질문과 답변 근거 준비."],
  ["06", "지원 패키지 포장", "회사·직무별 결과물과 수동 제출 체크리스트를 한 폴더에."],
];

const workflow = [
  ["공고 투척", "JD URL 또는 텍스트"],
  ["팩트 체크", "resume.md 근거 연결"],
  ["초안 생성", "JD 맞춤 자기소개서"],
  ["인사팀 빙의", "과장·리스크 검수"],
  ["면접 대비", "꼬리 질문 방어"],
  ["사람이 제출", "최종 결정은 언제나 나"],
];

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button className="copy-button" onClick={copy} type="button">
      {copied ? "복사됨 ㅋ" : "복사"}
    </button>
  );
}

function App() {
  const [selectedInstall, setSelectedInstall] = useState(installOptions[0]);

  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top" aria-label="give-me-job 홈">
          GIVE<span>ME</span>JOB
        </a>
        <div className="nav-links">
          <a href="#features">뭐 해줌?</a>
          <a href="#install">설치 ㄱㄱ</a>
          <a
            className="github-link"
            href="https://github.com/kyoungbinkim/give-me-job"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">🚨 취준생 구조대 출동 중 🚨</div>
          <h1>
            자소서 AI,
            <br />
            <span>취업 AI </span>
            <br />
            <span>에이전트.</span>
          </h1>
          <p className="hero-description">
            뇌절 없는 <strong>한국 취업 준비 AI 에이전트</strong>.
            <br />
            내 경력은 지키고, 자소서 퀄리티만 끌어올립니다.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#install">
              일단 설치해 →
            </a>
            <a
              className="button secondary"
              href="https://github.com/kyoungbinkim/give-me-job"
              target="_blank"
              rel="noreferrer"
            >
              코드 구경
            </a>
          </div>
          <p className="tiny-note">Node.js 18.17+ · 최종 제출은 인간 담당 · 취뽀 보장 아님(제발)</p>
        </div>

        <div className="hero-visual" aria-label="give-me-job 작동 예시">
          <div className="sticker sticker-one">스펙 뻥튀기<br />절대 금지</div>
          <div className="sticker sticker-two">면접에서<br />안 털리는 글</div>
          <div className="agent-card">
            <div className="agent-card-bar">
              <span>give-me-job.exe</span>
              <div><i></i><i></i><i></i></div>
            </div>
            <div className="agent-face">👁️👄👁️</div>
            <div className="terminal-line"><span>$</span> 내 이력서 분석 중...</div>
            <div className="terminal-line"><span>✓</span> 근거 없는 자신감 3건 압수</div>
            <div className="terminal-line"><span>✓</span> JD 키워드 12개 포획</div>
            <div className="terminal-line blink"><span>▌</span> 자소서 방어력 올리는 중</div>
          </div>
          <div className="floating-text">취업시켜줘잉</div>
        </div>
      </section>

      <section className="marquee" aria-label="핵심 원칙">
        <div>
          근거 기반 자소서 ★ 허위 경험 생성 안 함 ★ 면접 방어 가능 ★ 최종 제출은 직접 ★&nbsp;
          근거 기반 자소서 ★ 허위 경험 생성 안 함 ★ 면접 방어 가능 ★ 최종 제출은 직접 ★
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <p>그래서 얘가 뭘 하는데</p>
          <h2>취준 풀코스.<br />설거지까지 해드림.</h2>
        </div>
        <div className="feature-grid">
          {features.map(([number, title, description]) => (
            <article className="feature-card" key={number}>
              <span>{number}</span>
              <div className="feature-icon" aria-hidden="true">
                {["🧠", "🔍", "✍️", "😈", "🛡️", "📦"][Number(number) - 1]}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-heading compact">
          <p>입력부터 제출 직전까지</p>
          <h2>이렇게 굴러갑니다</h2>
        </div>
        <div className="workflow">
          {workflow.map(([title, description], index) => (
            <div className="workflow-item" key={title}>
              <div className="workflow-number">{index + 1}</div>
              <strong>{title}</strong>
              <span>{description}</span>
              {index < workflow.length - 1 && <b aria-hidden="true">→</b>}
            </div>
          ))}
        </div>
      </section>

      <section className="install-section" id="install">
        <div className="install-copy">
          <div className="eyebrow pink">⚡ 진짜 금방 끝남 ⚡</div>
          <h2>복붙 한 번이면<br />취준 메이트 입주.</h2>
          <p>
            Codex, Claude Code, OpenCode를 지원합니다.
            <br />
            설치 전에 Node.js 18.17 이상인지 확인하세요.
          </p>
          <div className="safety-card">
            <strong>🫡 인간 최종 승인제</strong>
            <span>로그인, CAPTCHA, 개인정보 전송, 최종 지원은 자동화하지 않습니다.</span>
          </div>
        </div>

        <div className="install-terminal">
          <div className="install-tabs" role="tablist" aria-label="설치 대상 선택">
            {installOptions.map((option) => (
              <button
                className={selectedInstall.id === option.id ? "active" : ""}
                key={option.id}
                onClick={() => setSelectedInstall(option)}
                role="tab"
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="code-window">
            <div className="code-window-bar">
              <span>terminal — 취뽀모드</span>
              <span>● ● ●</span>
            </div>
            <div className="command">
              <code><i>$</i> {selectedInstall.command}</code>
              <CopyButton value={selectedInstall.command} />
            </div>
            <p>{selectedInstall.note}</p>
            <div className="doctor-command">
              <code><i>$</i> give-me-job doctor</code>
              <span># 설치 확인까지 야무지게</span>
            </div>
          </div>
          <a
            className="docs-link"
            href="https://github.com/kyoungbinkim/give-me-job#installation"
            target="_blank"
            rel="noreferrer"
          >
            상세 설치 문서 읽기 ↗
          </a>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-face">😵‍💫</div>
        <p>자소서 빈 문서만 3시간째 보고 있다면</p>
        <h2>이제 에이전트한테<br />일 좀 시키세요.</h2>
        <a
          className="button primary huge"
          href="https://github.com/kyoungbinkim/give-me-job"
          target="_blank"
          rel="noreferrer"
        >
          give-me-job 시작하기 ↗
        </a>
      </section>

      <footer>
        <a className="logo footer-logo" href="#top">GIVE<span>ME</span>JOB</a>
        <p>Made with 절박함, 카페인, 그리고 근거 있는 자신감.</p>
        <p>MIT License · 오픈소스 · 2026</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
