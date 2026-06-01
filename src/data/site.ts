export const company = {
  name: "广州矩联科技有限公司",
  shortName: "MatrixLinkTech",
  slogan: "矩阵联合 科创技联 传播技术 相信价值",
  creditCode: "91440106MAK565BF7N",
  address: "广州市天河区中山大道建中路5号3A03房W45室",
  email: "hello@matrixlink.tech",
  wechat: "atar24",
  siteUrl: "https://matrixlink.tech",
  relatedContentUrl: "https://2aran.com",
  githubUrl: "https://github.com/matrixlinktech"
};

export type ProjectStatus = "live" | "incubating";

export type Project = {
  title: string;
  label: string;
  status: ProjectStatus;
  url: string;
  audience: string;
  description: string;
  proof: string;
};

export const projects: Project[] = [
  {
    title: "博主联盟",
    label: "Creator Network",
    status: "live",
    url: "https://blogger-alliance.cn/",
    audience: "技术创作者、开源作者、开发者社区与科技品牌",
    description:
      "面向技术创作者的合作与分发网络，连接内容生产、品牌合作和开发者社群。",
    proof: "已上线独立站点，可直接访问申请与了解合作方式。"
  },
  {
    title: "前端周刊",
    label: "Frontend Weekly",
    status: "live",
    url: "https://frontendweekly.cn/",
    audience: "前端工程师、全栈开发者、AI 应用开发者",
    description:
      "围绕前端技术、工程实践、AI 工具和开发者生态的内容项目。",
    proof: "已上线独立站点，作为技术内容沉淀与订阅入口。"
  },
  {
    title: "AI 工具与内容自动化",
    label: "Incubating",
    status: "incubating",
    url: "https://2aran.com",
    audience: "开发者、技术写作者、内容运营者",
    description:
      "围绕真实写作、研发和分发流程，探索可复用的 AI 工作流和工具化能力。",
    proof: "相关思考、实验和项目更新优先沉淀在 2aran.com。"
  }
];

export type UpdateCadence = "daily" | "weekly" | "ongoing";

export type UpdateItem = {
  title: string;
  source: string;
  url: string;
  description: string;
  cadence: UpdateCadence;
  highlight?: boolean;
};

export const cadenceLabel: Record<UpdateCadence, string> = {
  daily: "基本每天更新",
  weekly: "每周更新",
  ongoing: "不定期更新"
};

export const updates: UpdateItem[] = [
  {
    title: "调研内容与项目记录",
    source: "2aran.com",
    url: "https://2aran.com/articles",
    description:
      "技术调研、项目记录、AI 工作流实验和长期内容沉淀，是 MatrixLinkTech 当前更新最频繁的内容源。",
    cadence: "daily",
    highlight: true
  },
  {
    title: "前端周刊",
    source: "frontendweekly.cn",
    url: "https://frontendweekly.cn/",
    description:
      "围绕前端、AI 开发和工程效率的精选内容与周刊更新。",
    cadence: "weekly"
  },
  {
    title: "博主联盟",
    source: "blogger-alliance.cn",
    url: "https://blogger-alliance.cn/",
    description:
      "创作者合作、品牌共创和技术内容分发相关信息。",
    cadence: "ongoing"
  }
];

export const cooperationTracks = [
  {
    title: "内容合作",
    description:
      "围绕开发者工具、AI 产品、开源项目和技术实践，策划文章、周刊、专题或联合内容。"
  },
  {
    title: "创作者连接",
    description:
      "通过博主联盟连接技术创作者，帮助品牌或项目找到更匹配的内容共创方式。"
  },
  {
    title: "AI 工作流共创",
    description:
      "基于真实研发、写作和运营场景，一起验证可落地的 AI 工具与自动化流程。"
  }
];
