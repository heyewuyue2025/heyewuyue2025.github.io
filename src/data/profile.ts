export type Project = {
  id: string
  title: string
  role: string
  year: string
  keywords: string[]
  description: string
  links: { label: string; href: string }[]
  accent: 'teal' | 'cobalt' | 'rust' | 'ink'
  scale: 'large' | 'wide' | 'tall' | 'standard'
}

export type AIWork = {
  id: string
  title: string
  year: string
  medium: string
  status: string
  image: string
  imageOpacity?: number
  tools: string[]
  description: string
  process: string
  output: string
  links: { label: string; href: string }[]
}

export type Publication = {
  title: string
  type: 'Journal' | 'Conference' | 'Report' | 'Translation' | 'Essay'
  venue: string
  year: string
  authors: string
  note: string
  href: string
}

export const publicationTypeLabels: Record<Publication['type'], string> = {
  Journal: '期刊',
  Conference: '会议',
  Report: '报告',
  Translation: '翻译',
  Essay: '随笔'
}

export const profile = {
  name: '刘彦成',
  englishName: 'Ryan Liu',
  avatar: 'avatar-liu-yancheng-gray.png',
  initials: '刘',
  preferredName: 'Ryan',
  location: '上海 / 北京 / 天津',
  email: 'heyewuyue2025@gmail.com',
  identity: '个人 AI builder、小红书学术博主',
  manifesto: '社会的观察者，社会的研究者，社会的学生',
  bio: {
    zh: [
      '我目前是天津大学新媒体与传播学院新闻传播学专业的在读硕士，研究兴趣集中在[[智能传播]]、[[人机关系]]、[[媒介社会学]]与[[数据可视化]]等方向。',
      '我关心以 [[AI]] 为代表的新技术如何进入普通人的日常生活与传播场景：它们如何改变我们获取知识、表达观点、判断信任与想象社会的方式；也关心技术与人在当下关系与主体性如何重塑，即人与平台、人与信息、人与技术之间新的关系图景。🤖',
      '此前，我曾在字节跳动、小红书及一家私募基金公司实习，参与平台运营、数据分析、内容策略和用户/行业洞察相关工作。这些经历让我持续观察技术、内容与组织实践之间的连接，也推动我进一步探索 [[AI Agent]]、[[智能体工作流]]和[[生成式工具]]如何进入真实的创意生产与协作过程。',
      '研究之外，我也是一名[[个人 AI builder]]和[[小红书内容创作者]]。✨ 我尝试把学术研究、数据指标、AI 工具和内容叙事结合起来，做成可以被理解、被追问、也值得继续思考的作品。',
      '这个网站记录我的研究、项目、写作、实验，以及一些生活中的碎片。🌱'
    ],
    en: [
      'I am currently a master’s student in Journalism and Communication at the School of New Media and Communication, Tianjin University. My research interests focus on intelligent communication, human-AI relations, media sociology, and data visualization.',
      'I am interested in how emerging technologies, especially AI, enter everyday life and communication practices: how they reshape the ways people access knowledge, express opinions, make trust judgments, and imagine society. I am also concerned with how the relationship between technology and human beings, as well as questions of agency and subjectivity, are being reconfigured today, forming new relational landscapes between people and platforms, people and information, and people and technology. 🤖',
      'Previously, I interned at ByteDance, Xiaohongshu, and a private equity firm, where I worked on platform operations, data analysis, content strategy, and user/industry insights. These experiences have allowed me to continuously observe the connections between technology, content, and organizational practices, and have further motivated me to explore how AI Agents, agentic workflows, and generative tools are entering real-world creative production and collaboration.',
      'Beyond research, I am also an individual AI builder and a Xiaohongshu content creator. ✨ I try to bring together academic research, data indicators, AI tools, and content storytelling, turning them into works that can be understood, questioned, and reflected upon.',
      'This website documents my research, projects, writing, experiments, and fragments of everyday life. 🌱'
    ]
  },
  interests: ['智能传播', 'AI Agent', '人机关系', '平台商业化', '数据分析与可视化', '内容策略', '小红书学术传播', '新媒体编程'],
  currently: [
    '在天津大学新媒体与传播学院攻读新闻传播学硕士，聚焦智能传播与人工智能/人机关系议题。',
    '推进 OperAI 全域运营智能体集群项目，探索运营岗位中的任务自动化、决策辅助和智能体协同。',
    '持续运营社科学术交流/咨询方向的小红书账号，把平台内容实践作为观察知识传播和受众关系的现场。'
  ],
  nav: [
    { label: 'About Me', href: '#about' },
    { label: 'AI Works', href: '#ai-works' },
    { label: 'Publications', href: '#publications' },
    { label: 'Now / Focus', href: '#news' },
    { label: 'Personal', href: '#personal' }
  ],
  contactLinks: [
    { label: 'GitHub', href: 'https://github.com/heyewuyue2025' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/polaris-925024367/' },
    { label: '🍠小红书', href: 'https://www.xiaohongshu.com/user/profile/62f35127000000001f0053d3' }
  ]
}

export const aiWorks: AIWork[] = [
  {
    id: 'opensem-research-platform',
    title: 'OpenSEM：社科结构方程建模平台',
    year: '2025',
    medium: 'AI 辅助科研工具 / SEM / 数据分析平台',
    status: '',
    image: 'work-opensem.jpg',
    tools: ['表单化建模', 'semopy / lavaan', 'APA 导出', 'FastAPI', 'Vue', 'Docker'],
    description:
      'OpenSEM 面向社科研究生、青年教师和初级量化研究者，把复杂的结构方程模型分析转化为“数据导入、表单建模、统计估算、结果解读与导出”的可复核流程。它的核心不是让用户在画布上手动拖拽路径图，而是用结构化表单生成可计算、可追踪、可导出的 SEM 分析。',
    process:
      '项目围绕“让论文焦虑型研究生在一周内独立完成一次 SEM 分析”的北极星目标展开，设计了变量池预览、缺失值提示、CFA/路径模型表单、拟合度仪表盘、Bootstrap 中介检验、lavaan 语法导出和 APA 三线表导出等模块。',
    output:
      '原型覆盖上传数据、配置潜变量与路径关系、生成统计语法、估算模型、解释拟合指标并导出 xlsx/docx/语法文本的主流程；同时提供 strict/lite 两种运行口径，兼顾学术严谨性、部署可行性与教学场景中的可用性。',
    links: [{ label: 'GitHub · heyewuyue2025/OpenSEM', href: 'https://github.com/heyewuyue2025/OpenSEM' }]
  },
  {
    id: 'operai-agent-cluster',
    title: 'OperAI：全域运营智能体集群',
    year: '2025',
    medium: 'AI Agent / 企业运营 OS / 多智能体编排',
    status: '',
    image: 'work-operai.jpg',
    imageOpacity: 0.6,
    tools: ['10 个岗位 Agent', '52 个 Skill', 'Harness 编排', 'Verify Gate', '行业规则 Pack'],
    description:
      'OperAI 是一套面向企业运营团队的智能操作系统。它不是把 ChatGPT 包装成十个窗口，而是把内容运营、用户运营、活动运营、渠道运营、流量投放、市场策略、产品运营、社群运营、交易运营和数据运营拆成十个有岗位逻辑的 Agent，共享同一套数据基座。',
    process:
      '作为项目负责人/PMO，我参与完成产品定位、PRD、功能架构、演示路径和决赛交付材料设计。项目从“工作流自动化”转向“岗位智能搭档”：D-Agent 作为统一数据基座，各职能 Agent 面向具体岗位产出策略、内容、预算、排期、用户分层和复盘报告；Verify Gate 负责证据链、风险提示与可交付性检查。',
    output:
      '当前版本包含 8 个职能入口、10 个运营智能体、52 个可组合 Skill 和一套 Harness 编排引擎，支持从任务输入、能力匹配、上下文传递、质量复核到方案导出的端到端运营交付。项目已晋级“第四届 AI 与未来媒体创新大赛”决赛。',
    links: [{ label: 'GitHub · heyewuyue2025/OperAI', href: 'https://github.com/heyewuyue2025/OperAI' }]
  },
  {
    id: 'onewushengling-biodiversity-archive',
    title: 'One物生灵：从1970到今天，一部正在归零的种群档案',
    year: '2025',
    medium: '数据新闻 / 生态叙事 / D3 交互可视化',
    status: '',
    image: 'work-onewushengling.png',
    imageOpacity: 0.6,
    tools: ['五幕滚动叙事', 'D3.js', '四套科学数据集', 'LPI / IUCN / Palmer', '中文物种档案', '零依赖静态站点'],
    description:
      'One物生灵面向关注生态议题的公众读者、数据新闻从业者和科学传播者，把四套生物多样性数据集转化为五幕滚动叙事。它的核心不是堆砌图表，而是让读者在滚动的过程中，从宏观指数一步步走到微观体征：从全球 LPI 曲线跌到 13，到不丹藓只剩 2 个亚种群，到南极企鹅脂肪里藏着的警报。',
    process:
      '项目围绕“让非专业读者在五分钟内建立起对生物多样性危机的体感”的叙事目标展开，设计了五幕递进结构：全球种群指数、区域落差、极危物种个案、IUCN 保护等级光谱、企鹅健康体征。数据经 Python 清洗聚合为 JSON，D3.js 绑定折线、坡度、横向条形、柱形四类图表，右侧叙事滚动时左侧图表同步切换，支持鼠标悬停探索和点击筛选。标题押韵参考普利策解释性报道，正文参考南方周末特稿的层层递进，图表注解力求口语化可读；视觉方案从高冲击形式回归“先讲清楚再好看”的折线与条形。',
    output:
      '当前版本覆盖 29,625 条 LPI 监测记录、90 种极危物种档案、205 份 IUCN 动物数据和 3,430 只 Palmer 企鹅个体测量；包含五幕叙事模块、四类 D3 交互图表、物种中文卡片墙、区域坡度图和企鹅健康筛选器。项目以纯前端静态站点交付，零依赖运行，无需后端服务。',
    links: [{ label: 'GitHub · heyewuyue2025/OneWuShengLing', href: 'https://github.com/heyewuyue2025/OneWuShengLing' }]
  },
  {
    id: 'agent-arena-evaluation',
    title: 'NeoHuman',
    year: '2025',
    medium: 'AI Agent 评测 / 真实任务验证 / 产品体验反馈',
    status: 'Beta Tester · MIT、JHU 等',
    image: 'work-neohuman.jpg',
    tools: ['Manus', 'Genspark', 'ChatGPT Agent', '任务拆解', '测试用例', '结构化反馈'],
    description:
      '作为 NeoHuman Beta Tester，我使用多种 AI Agent 工具完成平台 challenge，覆盖金融、教育、内容、产品分析等真实任务场景，观察并验证 Agent 在信息检索、推理规划、结果产出和交付质量上的表现。',
    process:
      '评测过程中，我围绕任务拆解、提示词策略、工具调用链路和结果可复现性沉淀可复用的解题流程与测试用例，用来提升任务完成效率和答案稳定性。',
    output:
      '除任务完成本身外，我也对 onboarding 流程、提交链路、排行榜和社区协作等关键节点进行体验走查，输出包含复现步骤、影响范围和优先级的结构化反馈，帮助降低产品使用门槛并推动后续迭代。',
    links: [{ label: '产品链接 · neo-human.ai', href: 'https://neo-human.ai/' }]
  }
]

export const projects: Project[] = [
  {
    id: 'intelligent-communication',
    title: '智能传播与人机关系',
    role: '硕士研究方向 / 天津大学',
    year: '2025-2028',
    keywords: ['智能传播', '人机关系', '新媒体编程'],
    description:
      '在天津大学新媒体与传播学院攻读新闻传播学硕士，主修智能传播、人工智能与人机关系、新媒体编程、数据分析及可视化、计算广告与数据科学。',
    links: [
      { label: '研究计划占位', href: '#' },
      { label: '课程笔记占位', href: '#' }
    ],
    accent: 'teal',
    scale: 'large'
  },
  {
    id: 'platform-seeding',
    title: '平台种草机制与商业化运营',
    role: '商业化运营实习 / 小红书',
    year: '2025',
    keywords: ['小红书', '内容策略', '广告投放'],
    description:
      '从投放策略规划、指标波动诊断、行业趋势洞察和重点客户复盘中理解内容平台的商业化机制，尤其是“种草”如何连接情绪、场景、生活方式人群和转化效率。',
    links: [{ label: '策略笔记占位', href: '#' }],
    accent: 'rust',
    scale: 'wide'
  },
  {
    id: 'global-referral-ops',
    title: '全球化活动运营与组织传播',
    role: '活动运营实习 / 字节跳动',
    year: '2025',
    keywords: ['活动运营', '数据看板', '国际化协作'],
    description:
      '设计分层激励策略，协作搭建活动数据看板，运营内推社群和订阅号，并支持非中国区活动落地、文案翻译、海外奖品发放和跨币种流程协调。',
    links: [{ label: '复盘框架占位', href: '#' }],
    accent: 'cobalt',
    scale: 'standard'
  },
  {
    id: 'tech-talent-mapping',
    title: '技术人才流动与行业研究',
    role: '技术招聘实习 / 小红书',
    year: '2024-2025',
    keywords: ['行业研究', '人才 mapping', '大模型研报'],
    description:
      '参与商业化广告及电商业务工程团队招聘，跟踪互联网行业动态、业务线调整和人才流动趋势，并完成大模型行业发展研报，与技术和业务负责人对接。',
    links: [
      { label: '行研笔记占位', href: '#' },
      { label: '方法说明占位', href: '#' }
    ],
    accent: 'ink',
    scale: 'tall'
  }
]

export const publications: Publication[] = [
  {
    title: '“视线之外”：视障玩家电子游戏实践中的技术盗猎与可见性生产',
    type: 'Conference',
    venue: 'ICA2026 北京区域分会｜北京',
    year: '2026.06',
    authors: '',
    note: 'Top Paper Award',
    href: '#'
  },
  {
    title: '深度｜跟着 Figure 创始人参观机器人工厂：通往 AGI 的最后一块拼图，是让 AI 触碰真实世界',
    type: 'Translation',
    venue: 'Z Potentials',
    year: '2026.05',
    authors: '',
    note: '翻译文章',
    href: 'https://mp.weixin.qq.com/s/xRumtB64AM6BzKQBedT8CA'
  },
  {
    title: '深度｜谷歌 DeepMind CEO：AI 最好的用途，是改善人类健康；把 AI 当作一种工具，帮助我们理解现实世界的本质',
    type: 'Translation',
    venue: 'Z Potentials',
    year: '2026.04',
    authors: '',
    note: '翻译文章',
    href: 'https://mp.weixin.qq.com/s/xYyMzAMHla4LHaYU546vwA'
  },
  {
    title: '系统性嵌入：2025 年人工智能传播行业应用特征与趋势',
    type: 'Journal',
    venue: '现代视听',
    year: '2026.01.15',
    authors: '',
    note: '期刊论文',
    href: 'https://cfffgc1d129f57bb244a4sxfkqq5xfq5fq6o0bfgfy.eds.tju.edu.cn/kcms2/article/abstract?v=yAka2kXFwSR_LGGZvDErUSY0IB7aRIw_CP_MoN48LyTHvRmmf0FoVyzyJobHaTh25tUHG4ij8utI59VezIiOFCEsIKaKNsea6asBVTwR8R-9kBlWBS2rBT2ooghFu7ltE8Isf9UfQyhTg48hHC0rcGE-k0DkNTOZLl58KOB4guOqT78yBsL8MA==&uniplatform=NZKPT&language=CHS'
  },
  {
    title: '未见之见：视障者数字阅读界面的网络联结及秩序协商',
    type: 'Journal',
    venue: '出版发行研究',
    year: '2025.11.05',
    authors: '',
    note: '期刊论文',
    href: 'https://cfffgc1d129f57bb244a4sxfkqq5xfq5fq6o0bfgfy.eds.tju.edu.cn/kcms2/article/abstract?v=yAka2kXFwSQlsjziHc_nqJlPhHKdaKSMeKCZpD8XlGJaM6vQWWmQuSyKIFJG-audmVE_f6ApTITdRBmM6aORUa0Y6rYXcIk_3CK5SWa5SxZR8HlM4U-2FbREfeEAIfqQs6JQL7VPtJJ9KUpgSK1BXfDF3aAJAiXxKq4WDx07N0I3MGgrvfcsXA==&uniplatform=NZKPT&language=CHS'
  },
  {
    title: '“视线之外”：视障玩家电子游戏实践中的技术盗猎与可见性生产',
    type: 'Conference',
    venue: '第六届“2050 学子论坛”｜北京',
    year: '2025.09',
    authors: '',
    note: '一等奖',
    href: '#'
  },
  {
    title: '我在七月，我在上海',
    type: 'Essay',
    venue: '个人随笔',
    year: '2025.07',
    authors: '',
    note: '小红书随笔',
    href: 'https://www.xiaohongshu.com/explore/6863cb95000000002001bd8f?xsec_token=ABsid_auxfNSC3yb3TBPQ-Ecn0_Zjho6ic0tDdpmfzgiU=&xsec_source=pc_user'
  },
  {
    title: '“视线之外”：视障玩家电子游戏实践中的技术盗猎与可见性生产',
    type: 'Conference',
    venue: '首届中国游戏与电竞研究年会｜北京',
    year: '2025.06',
    authors: '',
    note: '论文录用与参会',
    href: '#'
  },
  {
    title: '大模型产业发展研报_2024.12_For应用技术组TL&相关HRVP',
    type: 'Report',
    venue: '行业研究报告',
    year: '2024.12',
    authors: '',
    note: '大模型产业发展研报',
    href: '#'
  },
  {
    title: '中国特色新型智库对外数字传播：发展现状与实践策略',
    type: 'Journal',
    venue: '传媒',
    year: '2024.03.25',
    authors: '',
    note: '期刊论文',
    href: 'https://cfffgc1d129f57bb244a4sxfkqq5xfq5fq6o0bfgfy.eds.tju.edu.cn/kcms2/article/abstract?v=yAka2kXFwST6bdai8ZQ0_n3agDK4IjTedJNRiDJNZj27DjSFOtXVFpnJcH5dHYO7QYNK_Ub3LNodi4ltzfkfnzzz0p9m6TIB9eVqS7aUHBaQwLOkudO2DRmGMxj6k3U6ja9ZAgNU6Z6CzGxjKjxTywba_Xazazb6TTEuVy6CEOrzuNeMGOTpgg==&uniplatform=NZKPT&language=CHS'
  },
  {
    title: '“未见之见”：视障者数字界面的社会网络生成及技术秩序',
    type: 'Conference',
    venue: '智能传播与健康治理国际学术研讨会｜武汉',
    year: '2023.11',
    authors: '',
    note: 'Best Paper Award',
    href: '#'
  }
]

export const timeline = [
  {
    date: '2025.10-12',
    place: '复旦大学 / 北京师范大学',
    title: 'OperAI 全域运营智能体集群晋级 AI 与未来媒体创新大赛决赛',
    detail: '作为项目负责人/PMO，推进智能体产品定位、方案设计、用户价值和商业化路径。'
  },
  {
    date: '2025.11',
    place: 'MIT / JHU 等',
    title: '参与 Agent Arena Beta Test',
    detail: '使用多种 AI Agent 工具完成真实任务 challenge，并输出任务拆解、体验走查和产品反馈。'
  },
  {
    date: '2025.09',
    place: '天津',
    title: '进入天津大学新媒体与传播学院攻读新闻传播学硕士',
    detail: '研究方向为智能传播，课程覆盖人工智能与人机关系、新媒体编程、数据分析及可视化。'
  },
  {
    date: '2025.06-09',
    place: '上海',
    title: '在小红书商业部参与商业化运营与平台策略工作',
    detail: '支持多客户广告投放、行业趋势洞察和 S 级客户复盘；参与支持的亚朵星球项目获 2025 Seed Awards 铜奖。'
  },
  {
    date: '2025.02-05',
    place: '北京',
    title: '在字节跳动全球内推组参与活动运营与数据体系建设',
    detail: '设计分层激励策略，协作搭建活动数据看板，并支持非中国区活动执行和复盘迭代。'
  },
  {
    date: '2024-2025',
    place: '河北大学',
    title: '完成新闻学本科阶段学习并获得国家奖学金',
    detail: 'GPA 4.82/5.0，专业前 2%；获得国家奖学金和河北大学特等奖学金。'
  }
]

export const personalNotes = [
  {
    label: '🏃 中长跑 runner',
    text: '5km PB 23:09，10km PB 56:19。半马/全马等待报名成功一次！'
  },
  {
    label: '🧗 徒步小驴',
    text: '百望山、凤凰岭、舞彩浅山、雁栖湖大环线、虞山小鹰线、穹窿山环线、灵白线……'
  },
  {
    label: '📖 杂食向阅读爱好者',
    text: '文史哲科艺各个 topic 持续广泛吸收中。'
  },
  {
    label: '🎮 一些 gaming',
    text: '炉石传说、WOW、LOL、LOLm、DOTA2、REDⅡ、GTA、塞尔达、刺客信条……FPS 手残。'
  }
]
