/* ===== AI 算法岗面试题库 · 共享站点脚本 =====
   - 顶部导航高亮当前所在区
   - 统一 localStorage 命名空间前缀，避免各页键冲突
   去品牌化：不含任何厂商字样。 */
(function () {
  "use strict";
  // 统一存储前缀，各区记忆标记/进度共享同一命名空间
  window.SITE_STORE_PREFIX = "ai_iview_";

  // 根据 URL 高亮当前激活的导航项
  function path() {
    var p = location.pathname.split("/").pop() || "index.html";
    if (location.hash === "#qa" || location.hash === "#q") return "ai-section.html#qa";
    if (location.hash === "#quiz") return "ai-section.html#quiz";
    return p;
  }
  var cur = path();
  var links = document.querySelectorAll(".navtabs a");
  for (var i = 0; i < links.length; i++) {
    var tgt = links[i].getAttribute("data-nav");
    if (tgt === cur || (tgt === "ai-section.html" && cur.indexOf("ai-section.html") === 0)) {
      links[i].classList.add("active");
    }
  }
})();
