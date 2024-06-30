import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, F as Fragment, u as unescapeHTML } from '../astro_CfZUJAT6.mjs';
/* empty css                         */
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
/* empty css                         */
import { createDirectus, rest, readItem } from '@directus/sdk';

const $$Astro$2 = createAstro("https://www.michael-b.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header> <div class="logo-text"> <strong>QIU</strong> & <strong>YE</strong> </div> <div class="line-box">
秋野的意外:秋野日疏芜，寒江动碧虚。系舟蛮井络，卜宅楚村墟。枣熟从人打，葵荒欲自锄。盘餐老夫食，分减及溪鱼。
</div> </header> <!--<div class="side-area">--> <!--    <div class="header-wrap">--> <!--        <a class="logo">--> <!--            <Image--> <!--                src={Logo}--> <!--                class="mx-auto"--> <!--                alt="A description of my image."--> <!--            />--> <!--            <span>秋野的意外</span>--> <!--        </a>--> <!--        <div class="header-top">--> <!--            <a class={isHome() ? "active" : ""} href="/">首页</a>--> <!--            <a class={isActive("/blog") ? "active" : ""} href="/blog"--> <!--                >日志</a--> <!--            >--> <!--            <a class={isActive("/photo") ? "active" : ""} href="/photo"--> <!--                >相册</a--> <!--            >--> <!--            <a class={isActive("/demo") ? "active" : ""} href="/demo"--> <!--                >一些Demo</a--> <!--            >--> <!--            <a class={isActive("/guitar") ? "active" : ""} href="/guitar"--> <!--                >谱子</a--> <!--            >--> <!--            <a class={isActive("/me") ? "active" : ""} href="/me">猜</a>--> <!--        </div>--> <!--    </div>--> <!--</div>--> `;
}, "/Users/akino/git/github/blog-astro/src/components/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-k2f5zb5c> <div class="footer-area" data-astro-cid-k2f5zb5c> <div class="footer-top" data-astro-cid-k2f5zb5c> <!--易识浮生理，难教一物违。水深鱼极乐，林茂鸟知归。吾老甘贫病，荣华有是非。秋风吹几杖，不厌此山薇。-->
曾经是个摇滚愤青小青年，喜欢唐朝黑豹超载一大帮子，然后子曰主唱让我觉得这个名字不错。然后就用了。
</div> <div class="footer-box" data-astro-cid-k2f5zb5c> <h1 data-astro-cid-k2f5zb5c>
在将要意外的时候 <br data-astro-cid-k2f5zb5c>
没有意外了
</h1> </div> <div class="footer-bottom" data-astro-cid-k2f5zb5c> <a target="_blank" rel="noopener" href="http://beian.miit.gov.cn/" data-astro-cid-k2f5zb5c>苏ICP备2021047286号-1</a> </div> </div> </footer> `;
}, "/Users/akino/git/github/blog-astro/src/components/footer.astro", void 0);

const $$Astro$1 = createAstro("https://www.michael-b.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="main"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/akino/git/github/blog-astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://www.michael-b.com");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: function(str, lang = "vue") {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' + hljs.highlight(str, { language: lang, ignoreIllegals: true }).value + "</code></pre>";
        } catch (__) {
        }
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
    }
  });
  const { id } = Astro2.params;
  const { CMS_URL, RES_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.michael-b.com", "ASSETS_PREFIX": undefined}, { CMS_URL: "https://cms.qiuyeo.com", RES_URL: "https://cms.qiuyeo.com/assets/" });
  const client = createDirectus(CMS_URL).with(rest());
  const item = await client.request(
    readItem("blog", id)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": item.title, "data-astro-cid-gsbvazvt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="detail" data-astro-cid-gsbvazvt> <div class="detail-top" data-astro-cid-gsbvazvt> <a data-astro-cid-gsbvazvt>GO BACK</a> </div> <div class="detail-tit" data-astro-cid-gsbvazvt> <div class="detail-tit_main" data-astro-cid-gsbvazvt> ${item.title} </div> <div class="detail-tit_sub" data-astro-cid-gsbvazvt> ${item.summary} </div> </div> <div class="detail-cover" data-astro-cid-gsbvazvt> <img${addAttribute(RES_URL + item.cover, "src")} alt="" data-astro-cid-gsbvazvt> </div> <div class="detail-box" data-astro-cid-gsbvazvt> <div class="detail-html" data-astro-cid-gsbvazvt> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(md.render(item.html))}` })} </div> <div class="detail-author" data-astro-cid-gsbvazvt></div> </div> </div>             ` })} `;
}, "/Users/akino/git/github/blog-astro/src/pages/blog/[id].astro", void 0);
const $$file = "/Users/akino/git/github/blog-astro/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _ };
