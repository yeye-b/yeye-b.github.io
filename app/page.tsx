const signals = [
  { label: '指令遵循', value: 94 },
  { label: '事实准确', value: 89 },
  { label: '表达一致', value: 92 },
];

const capabilities = [
  { num: '01', tag: 'DATA', title: '训练数据架构', text: '从任务拆解、数据标准到难例挖掘，构建真正能教会模型的数据系统。', meta: ['场景设计', '标注规范', '数据质检'] },
  { num: '02', tag: 'ALIGN', title: '偏好与价值对齐', text: '把模糊的人类偏好转译成可学习、可复用、可追踪的反馈信号。', meta: ['偏好排序', '反馈策略', '边界设计'] },
  { num: '03', tag: 'EVAL', title: '模型质量评测', text: '让“感觉更好”变成可测量的结论，定位能力变化与潜在风险。', meta: ['评测集', '评分量表', '回归分析'] },
  { num: '04', tag: 'PROMPT', title: '提示系统设计', text: '设计稳定的指令、上下文与工具调用链，让模型表现更一致。', meta: ['系统提示', '工作流', '红队测试'] },
];

const workflow = [
  { step: '01', title: '定义好答案', text: '对齐业务目标、用户期待与安全边界。' },
  { step: '02', title: '构建训练信号', text: '把专家判断拆成数据、规则与反馈。' },
  { step: '03', title: '压力测试', text: '用难例、边界案例和真实任务检验模型。' },
  { step: '04', title: '持续迭代', text: '从错误模式回溯根因，让每轮训练有据可依。' },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="scanlines" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回首页"><span className="brand-mark">Y</span><span>AI_TRAINER</span></a>
        <nav className="nav" aria-label="主导航"><a href="#about">01 / 关于</a><a href="#work">02 / 能力</a><a href="#process">03 / 方法</a><a href="#contact">04 / 联系</a></nav>
        <span className="status"><i /> AVAILABLE</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>SYS.01</span> AI 训练师 / HUMAN × MACHINE</div>
          <h1>让 AI 不止<br /><span className="glitch" data-text="能回答">能回答</span><br />更能被信任。</h1>
          <p className="hero-intro">我设计数据、反馈与评测系统，把人的判断力写进模型的行为里。<br />在能力与边界之间，训练更可靠的人机协作。</p>
          <div className="hero-actions"><a className="primary-action" href="#work">探索训练系统 <span>↘</span></a><a className="text-action" href="#contact">发起协作 <span>→</span></a></div>
          <div className="skill-strip" aria-label="核心技能">{['数据策展', '偏好对齐', '质量评测', '提示工程'].map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div>
        </div>

        <aside className="model-card" aria-label="模型训练状态面板">
          <div className="card-chrome"><span>MODEL_ALIGNMENT.exe</span><div><i /><i /><i /></div></div>
          <div className="neural-field" aria-hidden="true"><span className="core-ring ring-one" /><span className="core-ring ring-two" /><span className="core-ring ring-three" /><span className="core-label">ALIGN<br /><b>v.07</b></span>{[0, 1, 2, 3, 4, 5].map((node) => <i className={'node node-' + node} key={node} />)}</div>
          <div className="metrics">{signals.map((signal) => <div className="metric" key={signal.label}><div><span>{signal.label}</span><b>{signal.value}%</b></div><div className="meter"><i style={{ width: signal.value + '%' }} /></div></div>)}</div>
          <div className="terminal-line"><span>TRAINING_LOG</span><code>&gt; alignment stable<span className="cursor">_</span></code></div>
        </aside>
      </section>

      <div className="ticker" aria-hidden="true"><div>CURATE → EVALUATE → ALIGN → ITERATE → CURATE → EVALUATE → ALIGN → ITERATE → CURATE → EVALUATE →</div></div>

      <section className="about section-frame" id="about">
        <div className="section-label"><span>SYS.02</span><p>IDENTITY_PROTOCOL</p></div>
        <div className="about-grid">
          <h2>我站在<br />人类意图与<br /><em>机器行为</em>之间。</h2>
          <div className="about-copy">
            <p className="lead">模型的上限不只取决于参数，也取决于它看过什么、被如何反馈，以及我们如何定义“好”。</p>
            <p>作为 AI 训练师，我把产品目标、用户语言和专家知识转译为可执行的训练信号。我的工作不是追逐神奇提示词，而是建立一套能持续发现问题、修正问题的系统。</p>
            <div className="identity-code"><span>ROLE</span><b>AI TRAINER</b><span>FOCUS</span><b>TRUSTWORTHY AI</b><span>MODE</span><b>HUMAN-IN-THE-LOOP</b></div>
          </div>
        </div>
      </section>

      <section className="capability-section section-frame" id="work">
        <div className="section-heading"><div className="section-label"><span>SYS.03</span><p>CAPABILITY_MATRIX</p></div><div><h2>训练系统，不靠玄学。</h2><p>从数据进入模型，到能力走向用户，我关注每一个影响质量的接口。</p></div></div>
        <div className="capability-grid">
          {capabilities.map((item) => <article className="capability-card" key={item.num}><div className="cap-top"><span>{item.num}</span><code>[{item.tag}]</code></div><h3>{item.title}</h3><p>{item.text}</p><div className="tag-list">{item.meta.map((tag) => <span key={tag}>+ {tag}</span>)}</div></article>)}
        </div>
      </section>

      <section className="process section-frame" id="process">
        <div className="process-intro"><div className="section-label"><span>SYS.04</span><p>TRAINING_LOOP</p></div><h2>把一次灵感，<br />变成持续进化的回路。</h2><p>训练不是一次性的交付。每个错误都是信号，每轮评测都应该推动下一次更精准的学习。</p></div>
        <div className="process-list">{workflow.map((item) => <div className="process-row" key={item.step}><span className="step-no">{item.step}</span><h3>{item.title}</h3><p>{item.text}</p><i>↘</i></div>)}</div>
      </section>

      <section className="scenario-section section-frame" aria-labelledby="scenario-title">
        <div className="section-label"><span>SYS.05</span><p>FIELD_SCENARIOS</p></div>
        <div className="scenario-head"><h2 id="scenario-title">我能进入的训练现场</h2><p>适用于从零搭建训练体系，也适用于定位既有模型的质量瓶颈。</p></div>
        <div className="scenario-grid">
          <article><span>01 / DIALOGUE</span><h3>对话型 AI</h3><p>角色一致性、共情表达、多轮记忆与安全边界。</p></article>
          <article><span>02 / KNOWLEDGE</span><h3>专业知识助手</h3><p>知识准确性、引用规范、拒答策略与复杂任务完成度。</p></article>
          <article><span>03 / AGENT</span><h3>智能体工作流</h3><p>指令解析、工具选择、过程校验与异常恢复。</p></article>
        </div>
      </section>

      <section className="contact section-frame" id="contact">
        <div className="contact-signal"><span className="signal-dot" /><span>CHANNEL OPEN</span></div>
        <p className="contact-kicker">HAVE A MODEL TO TRAIN?</p>
        <h2>让我们把“差不多”，<br />训练成<span>真正可靠</span>。</h2>
        <p className="contact-note">欢迎交流 AI 训练、模型评测与智能体体验设计。<br />当前开放远程与项目制合作。</p>
        <a className="contact-action" href="mailto:?subject=AI%20训练协作"><span>发送合作信号</span><b>↗</b></a>
        <div className="contact-meta"><span>BASED IN CHINA / REMOTE READY</span><span>YE QIANYU © 2026</span></div>
      </section>
    </main>
  );
}
