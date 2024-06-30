import { d as createComponent, r as renderTemplate, g as renderComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, F as Fragment } from '../astro_CfZUJAT6.mjs';
import { $ as $$Layout } from './_id__BRS36_Xa.mjs';
import { createDirectus, rest, readItems, readItem } from '@directus/sdk';

const $$Index$5 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u65E5\u5FD7";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`1` })}`;
}, "/Users/akino/git/github/blog-astro/src/pages/blog/index.astro", void 0);

const $$file$5 = "/Users/akino/git/github/blog-astro/src/pages/blog/index.astro";
const $$url$5 = "/blog";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$5,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u65E5\u5FD7";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`1` })}`;
}, "/Users/akino/git/github/blog-astro/src/pages/demo/index.astro", void 0);

const $$file$4 = "/Users/akino/git/github/blog-astro/src/pages/demo/index.astro";
const $$url$4 = "/demo";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u65E5\u5FD7";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`1` })}`;
}, "/Users/akino/git/github/blog-astro/src/pages/guitar/index.astro", void 0);

const $$file$3 = "/Users/akino/git/github/blog-astro/src/pages/guitar/index.astro";
const $$url$3 = "/guitar";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u65E5\u5FD7";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`1` })}`;
}, "/Users/akino/git/github/blog-astro/src/pages/me/index.astro", void 0);

const $$file$2 = "/Users/akino/git/github/blog-astro/src/pages/me/index.astro";
const $$url$2 = "/me";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u65E5\u5FD7";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`1` })}`;
}, "/Users/akino/git/github/blog-astro/src/pages/photo/index.astro", void 0);

const $$file$1 = "/Users/akino/git/github/blog-astro/src/pages/photo/index.astro";
const $$url$1 = "/photo";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://www.michael-b.com");
const $$Recommend = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Recommend;
  const { RES_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.michael-b.com", "ASSETS_PREFIX": undefined}, { RES_URL: "https://cms.qiuyeo.com/assets/" });
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="recommend"> <div class="recommend-tit"> <a${addAttribute("/blog/" + data.id, "href")}>${data.title}</a> </div> <div class="recommend-sub"> ${data.summary} </div> <div class="recommend-cover"> <a${addAttribute("/blog/" + data.id, "href")}> <img${addAttribute(RES_URL + data.cover, "src")} alt=""> </a> </div> </div>`;
}, "/Users/akino/git/github/blog-astro/src/components/home/recommend.astro", void 0);

const $$Astro$1 = createAstro("https://www.michael-b.com");
const $$BlogList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { RES_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.michael-b.com", "ASSETS_PREFIX": undefined}, { RES_URL: "https://cms.qiuyeo.com/assets/" });
  const { data } = Astro2.props;
  function convertDate(dateString) {
    const dateParts = dateString.split("T")[0].split("-");
    const timeParts = dateString.split("T")[1].split(".")[0].split(":");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    const hour = timeParts[0];
    const minute = timeParts[1];
    const second = timeParts[2];
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
  return renderTemplate`${maybeRenderHead()}<div> <div class="blog-list"> <div class="blog-list-cover"> <img${addAttribute(RES_URL + data.cover, "src")} alt=""> </div> <div class="blog-news"> <div class="blog-title"><a${addAttribute("/blog/" + data.id, "href")}>${data.title}</a></div> <div class="blog-desc"> ${data.summary} </div> <div class="blog-news-bottom"> <div class="blog-news-time"> <strong>时间：</strong>${convertDate(data.date_created)} </div> <div class="blog-news-tag"> ${data.tag?.map((e) => {
    return renderTemplate`<a href="">${e}</a>`;
  })} </div> </div> </div> </div> </div>`;
}, "/Users/akino/git/github/blog-astro/src/components/home/BlogList.astro", void 0);

const $$Astro = createAstro("https://www.michael-b.com");
const $$HomeSide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomeSide;
  const { RES_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.michael-b.com", "ASSETS_PREFIX": undefined}, { RES_URL: "https://cms.qiuyeo.com/assets/" });
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="home-side"> ${data.map((e) => {
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="home-side-tit"> <strong>本周推荐图书</strong> ${e.week} </div> <div class="book-cover"> <img${addAttribute(RES_URL + e.cover, "src")} alt=""> </div> ` })}`;
  })} </div>`;
}, "/Users/akino/git/github/blog-astro/src/components/home/HomeSide.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { CMS_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.michael-b.com", "ASSETS_PREFIX": undefined}, { CMS_URL: "https://cms.qiuyeo.com" });
  const client = createDirectus(CMS_URL).with(rest());
  const items = await client.request(
    readItems("blog", {
      fields: ["id", "title", "date_published", "summary", "cover", "tag", "date_created"],
      sort: ["sort", "-date_created"],
      limit: 10
    })
  );
  const recommendBlog = await client.request(readItem("blog", 1, { top: true }));
  const books = await client.request(
    readItems("book", {
      fields: ["id", "name", "week", "remark", "cover", "detail"],
      sort: ["sort", "-date_created"],
      limit: 1
    })
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "首页" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Recommend", $$Recommend, { "data": recommendBlog })} ${maybeRenderHead()}<div class="container"> <div class="container-left"> ${items.map((e) => {
    return renderTemplate`${renderComponent($$result2, "BlogList", $$BlogList, { "data": e })}`;
  })} </div> ${renderComponent($$result2, "HomeSide", $$HomeSide, { "data": books })} </div> ` })} `;
}, "/Users/akino/git/github/blog-astro/src/pages/index.astro", void 0);
const $$file = "/Users/akino/git/github/blog-astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$4 as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$5 as i };
