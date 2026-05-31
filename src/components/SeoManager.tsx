import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoEntry = {
  title: string;
  description: string;
  keywords: string;
  path: string;
};

const SITE_NAME = "广州矩联科技有限公司";
const SITE_URL = "https://matrixlink.tech";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;

const seoMap: Record<string, SeoEntry> = {
  "/": {
    title: "广州矩联科技有限公司 - 官网 | 矩联科技",
    description:
      "广州矩联科技有限公司官方网站，展示 MatrixLinkTech 的真实项目、内容来源、合作方式与企业信息。",
    keywords:
      "矩联科技,广州矩联科技,广州矩联科技有限公司,矩联科技官网,AI 开发者生态,开发者网络,创作者网络",
    path: "/"
  },
  "/about": {
    title: "关于我们 - 广州矩联科技有限公司 | 矩联科技",
    description:
      "了解广州矩联科技有限公司的公司信息、联系方式、真实项目原则与内容沉淀方式。",
    keywords:
      "广州矩联科技有限公司,矩联科技,关于矩联科技,广州矩联科技,AI 开发者生态",
    path: "/about"
  },
  "/projects": {
    title: "项目 - 广州矩联科技有限公司 | 矩联科技",
    description:
      "查看广州矩联科技有限公司的真实项目入口，包括博主联盟、前端周刊与 AI 工作流孵化方向。",
    keywords:
      "矩联科技项目,广州矩联科技项目矩阵,博主联盟,前端周刊,AI 工具矩阵",
    path: "/projects"
  },
  "/updates": {
    title: "动态 - 广州矩联科技有限公司 | 矩联科技",
    description:
      "广州矩联科技有限公司动态索引，引导到 2aran.com、前端周刊与博主联盟等真实内容来源。",
    keywords:
      "矩联科技动态,广州矩联科技,2aran,前端周刊,博主联盟",
    path: "/updates"
  },
  "/cooperation": {
    title: "合作 - 广州矩联科技有限公司 | 矩联科技",
    description:
      "联系广州矩联科技有限公司，围绕技术内容、创作者网络、开发者触达与 AI 工作流进行合作。",
    keywords:
      "矩联科技合作,广州矩联科技合作,技术内容合作,创作者合作,AI 工作流",
    path: "/cooperation"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: ["矩联科技", "广州矩联科技"],
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  email: "hello@matrixlink.tech",
  identifier: "91440106MAK565BF7N",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CN",
    addressRegion: "广东省",
    addressLocality: "广州市",
    streetAddress: "广州市天河区中山大道建中路5号3A03房W45室"
  },
  sameAs: [
    "https://github.com/matrixlinktech",
    "https://2aran.com",
    "https://blogger-alliance.cn/",
    "https://frontendweekly.cn/"
  ]
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertJsonLd(id: string, schema: object) {
  let element = document.head.querySelector(`#${id}`) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }

  element.text = JSON.stringify(schema);
}

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const config = seoMap[location.pathname] ?? seoMap["/"];
    const canonicalUrl = new URL(config.path, SITE_URL).toString();

    document.title = config.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: config.description
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: config.keywords
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index,follow,max-image-preview:large"
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website"
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "zh_CN"
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: config.title
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: config.description
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: DEFAULT_IMAGE
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image"
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: config.title
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: config.description
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: DEFAULT_IMAGE
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl
    });

    upsertJsonLd("organization-jsonld", organizationSchema);
  }, [location.pathname]);

  return null;
}
