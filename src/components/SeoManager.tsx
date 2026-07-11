import { useEffect } from "react";

type SeoEntry = {
  title: string;
  description: string;
  keywords: string;
};

const SITE_NAME = "广州矩联科技有限公司";
const SITE_URL = "https://matrixlink.tech";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;

const seoConfig: SeoEntry = {
  title: "广州矩联科技有限公司 - 官网 | 矩联科技",
  description:
    "广州矩联科技有限公司单页官网，集中展示 MatrixLinkTech 的内容产品矩阵、真实项目、内容来源、合作方式与企业信息。",
  keywords:
    "矩联科技,广州矩联科技,广州矩联科技有限公司,矩联科技官网,AI 开发者生态,开发者网络,创作者网络,内容产品矩阵"
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
  useEffect(() => {
    const canonicalUrl = new URL("/", SITE_URL).toString();

    document.title = seoConfig.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: seoConfig.description
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: seoConfig.keywords
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
      content: seoConfig.title
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seoConfig.description
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
      content: seoConfig.title
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seoConfig.description
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
  }, []);

  return null;
}
