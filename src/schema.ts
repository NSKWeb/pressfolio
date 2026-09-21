import { SITE } from './config';

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const APP_ID = `${SITE.url}/#software`;

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/apple-touch-icon.png`,
  },
  description: SITE.description,
  email: SITE.supportEmail,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.language,
  publisher: { '@id': ORG_ID },
};

export const softwareApplicationSchema = {
  '@type': 'SoftwareApplication',
  '@id': APP_ID,
  name: SITE.name,
  url: SITE.url,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Content creation software',
  operatingSystem: 'Any (web browser)',
  description: SITE.description,
  featureList: [
    'Automatic press release parsing',
    'Press release to blog post conversion',
    'AI-enhanced blog post generation',
    'News article, quick brief, and tweet thread formats',
    'Markdown, .md file, and HTML export',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  publisher: { '@id': ORG_ID },
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE.url}${item.path}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const howToSchema = (steps: { name: string; text: string }[]) => ({
  '@type': 'HowTo',
  name: 'How to convert a press release into a blog post',
  description:
    'PressFolio turns a raw press release into a publish-ready blog post in five stages: input, parse, refine, compose, and export.',
  totalTime: 'PT3M',
  tool: [{ '@type': 'HowToTool', name: `${SITE.name} press release to blog converter` }],
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    url: `${SITE.url}/how-it-works#step-${index + 1}`,
  })),
});

export const articleSchema = (article: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) => ({
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${article.path}` },
  image: article.image || `${SITE.url}/og-image.png`,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
});