// ==UserScript==
// @name         dashboard unfucker
// @version      6.6.6
// @description  no more shitty twitter ui for pc
// @author       dragongirlsnout
// @match        https://www.tumblr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @downloadURL  https://raw.githubusercontent.com/powertashton/dashboard-unfucker/main/unfucker.user.js
// @updateURL    https://raw.githubusercontent.com/powertashton/dashboard-unfucker/main/unfucker.user.js
// @require      https://code.jquery.com/jquery-3.6.4.min.js
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

/* globals tumblr */

'use strict';

const version = "6.6.6";
const type = "b"
const match = [
  "",
  "dashboard",
  "settings",
  "blog",
  "domains",
  "search",
  "likes",
  "following",
  "inbox",
  "tagged",
  "explore",
  "reblog"
];
var $ = window.jQuery;

const storageAvailable = (type) => { //thanks mdn web docs!
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException && (
        e.code === 22 ||
        e.code === 1014 ||
        e.name === "QuotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED"
      ) &&
        storage &&
        storage.length !== 0
    );
  }
}
const waitFor = (selector, retried = 0,) => new Promise((resolve) => {
  if ($(selector).length) {
    resolve()
  } else if (retried < 25) { requestAnimationFrame(() => waitFor(selector, retried + 1).then(resolve)) }
});
const isDashboard = () => ["dashboard", ""].includes(location.pathname.split("/")[1]);
const matchPathname = () => match.includes(location.pathname.split("/")[1]);
const headerFixTarget = () => {
  if (isDashboard() || location.pathname.split("/").some(x => ["messages", "inbox"].includes(x))) return true;
  else return false;
};
const getUtilities = async function () {
  let retries = 0;
  while (retries++ < 1000
    && (typeof unsafeWindow.tumblr === "undefined"
    || typeof unsafeWindow.tumblr.getCssMap === "undefined"
    || typeof unsafeWindow.tumblr.languageData === "undefined")) {
      await new Promise((resolve) => setTimeout(resolve));
  }
  const cssMap = await unsafeWindow.tumblr.getCssMap();
  const keyToClasses = (...keys) => keys.flatMap(key => cssMap[key]).filter(Boolean);
  const keyToCss = (...keys) => `:is(${keyToClasses(...keys).map(className => `.${className}`).join(", ")})`;
  const tr = (string) => `${unsafeWindow.tumblr.languageData.translations[string] || string}`
  return { keyToClasses, keyToCss, tr };
}
    
getUtilities().then(({ keyToClasses, keyToCss, tr }) => {
  const postSelector = "[tabindex='-1'][data-id] article";
  const newNodes = [];
  const target = document.getElementById("root");
  const $styleElement = $(`
    <style id="__s">
      #__h {
        display: flex;
        margin: auto;
        max-width: 1716px;
        padding: 0 20px 0;
        align-items: center;
        height: 55px;
      }
      #__m { margin-bottom: 20px; }
      #__in {
        padding: 8px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      #__in h1 {
        color: rgb(var(--white-on-dark));
        font-size: 1.2em;
        display: inline;
      }
      #__m ul {
        margin: 4px;
        padding: 0;
        background: RGB(var(--white));
        border-radius: 3px;
      }
      #__m li {
        list-style-type: none;
        padding: 8px 12px;
        border-bottom: 1px solid rgba(var(--black),.07);
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(var(--black));
      }
      li.infoHeader {
        background: rgba(var(--black),.07);
        padding: 12px 12px;
        font-weight: bold;
      }
      @media (min-width: 990px) {
        #tumblr {
          --dashboard-tabs-header-height: 0px !important;
          overflow-x: hidden;
        }
        ${keyToCss('reorderButton')} { color: rgba(var(--black),.65); }
        ${keyToCss('subNav')} use { --icon-color-primary: rgba(var(--black),.65) }
        ${keyToCss('heading')} {
          position: sticky;
          top: 0;
          height: 36px;
          width: 240px !important;
          background: RGB(var(--white));
          z-index: 1;
          margin: 0 !important;
          padding: 5px 20px 5px 10px !important;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: .875rem;
          color: rgba(var(--black),.65) !important;
          line-height: 1.5;
          box-sizing: border-box;
        }
        ${keyToCss('heading')}::before {
          background: rgba(var(--black),.07);
          content: '';
          width: 100%;
          height: 36px;
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        #account_subnav {
          background: RGB(var(--white));
          color: RGB(var(--black));
          max-height: 90vh;
          width: 240px;
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: none;
          scrollbar-width: thin;
          scrollbar-color: rgba(var(--black),.4)rgba(var(--white),.1);
          position: fixed;
          top: 48px;
          border-radius: var(--border-radius-small);
          box-shadow: 0 0 15px rgba(0,0,0,.5);
        }
        ${keyToCss('subNav')} a,
        ${keyToCss('subNav')} ${keyToCss('childWrapper')},
        ${keyToCss('subNav')} ${keyToCss('blogName')} { color: RGB(var(--black)) !important; }
        ${keyToCss('subNav')} ${keyToCss('endChildWrapper')},
        ${keyToCss('subNav')} ${keyToCss('count')},
        ${keyToCss('reorderButton')},
        ${keyToCss('navSubHeader')},
        ${keyToCss('subNav')} ${keyToCss('blogTitle')},
        ${keyToCss('navSubHeader')} a {
          color: rgba(var(--black),.65) !important;
          text-decoration: none;
        }
        ${keyToCss('subNav')} use { --icon-color-primary: rgba(var(--black),.65) }
        ${keyToCss("subNav")} > ${keyToCss("navItem")}, ${keyToCss("accountStats")} li {
          list-style-type: none;
        }
        ${keyToCss('subNav')} > ${keyToCss('navItem')}:hover,
        ${keyToCss('accountStats')} li:hover {
          background-color: rgba(var(--black),.07);
        }
        ${keyToCss('subNav')} > li > ul { padding: 0 !important }
        ${keyToCss('navInfo')} ${keyToCss('childWrapper')} {
          display: flex;
          align-items: center;
        }
        ${keyToCss('childWrapper')} > svg {
          margin-right: 10px;
        }
        ${keyToCss('startChildWrapper')} > svg {
          width: 21px !important;
          height: 21px !important;
        }
        ${keyToCss('startChildWrapper')} + ${keyToCss('navInfo')}:not(#account_subnav div) {
          display: none !important;
        }
        ${keyToCss('searchSidebarItem')} {
          max-width: 480px;
          width: 100%;
          z-index: 100;
          height: fit-content;
          padding: 0;
        }
        ${keyToCss('navigationWrapper')} {
          display: none !important;
        }
        ${keyToCss('navigationLinks')} {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          margin: 0;
        }
        ${keyToCss('navItem')}${keyToCss('open')} { border: none !important; }
        ${keyToCss('navItem')}:hover { background-color: transparent; }
        ${keyToCss('navItem')}[title='${tr('Home')}'] { order: -9; }
        ${keyToCss('navItem')}[title='${tr('Live')}'] { order: -8; }
        ${keyToCss('navItem')}[title='${tr('Explore')}'] { order: -7; }
        ${keyToCss('navigationLinks')} > ${keyToCss('targetPopoverWrapper')}:nth-of-type(3) { order: -6; }
        ${keyToCss('navItem')}[title='${tr('Inbox')}'] { order: -5; }
        ${keyToCss('navigationLinks')} > ${keyToCss('targetPopoverWrapper')}:nth-of-type(2) { order: -4; }
        ${keyToCss('navigationLinks')} > ${keyToCss('targetPopoverWrapper')}:nth-of-type(1) { order: -3; }
        ${keyToCss('navItem')}[title='${tr('Get a domain')}'] { order: -2 }
        ${keyToCss('navItem')}[title='${tr('Go Ad-Free')}'] { order: -1 }
        ${keyToCss('navigationLinks')} >${keyToCss('navItem')},
        ${keyToCss('navigationLinks')} >${keyToCss('targetPopoverWrapper')} {
          width: 20px;
          margin: 0 16px;
        }
        ${keyToCss('navigationLinks')} > ${keyToCss('navItem')} ${keyToCss('navLink')},
        ${keyToCss('navigationLinks')} > ${keyToCss('targetPopoverWrapper')} ${keyToCss('navLink')} {
          padding: 0;
          gap: 0;
          justify-content: center;
        }
        ${keyToCss('mainContentWrapper')} {
          flex-basis: unset !important;
          width: 100%;
          justify-content: center !important;
        }
        ${keyToCss('mainContentWrapper')} > ${keyToCss('hasBorder')} {
          max-width: unset !important;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        ${keyToCss('main')} {
          margin-right: 16px;
          padding: 0;
          border: none !important;
        }
        ${keyToCss('tabsHeader')} {
          width: 540px;
          margin: 0 !important;
        }
        ${keyToCss("timelineOptions")} { overflow-x: auto !important; }
        ${keyToCss('stickyContainer')} > ${keyToCss('avatar')} { top: calc(69px + var(--dashboard-tabs-header-height, 0px)) !important; }
        ${keyToCss('createPost')} {
          width: 45px;
          margin-left: 10px;
        }
        ${keyToCss('createPostButton')} {
          gap: 0 !important;
          border-radius: var(--border-radius-small) !important;
          font-size: 0px !important;
          max-width: 45px;
          height: 32px;
        }
        ${keyToCss('container')}${keyToCss('mainContentIs4ColumnMasonry')} { margin: 0 auto !important; }
        ${keyToCss("bluespaceLayout")} > ${keyToCss("newDesktopLayout")} { margin-top: 32px; }
        ${keyToCss("reblogRedesignEnabled")} { border-radius: var(--border-radius-small) !important; }
        .__stickyContainer {
          color: RGB(var(--white-on-dark));
          pointer-events: none;
          height: 100%;
          position: absolute;
          left: -85px;
        } 
        .__avatarOuter {
          pointer-events: auto;
          top: calc(69px + var(--dashboard-tabs-header-height,0px));
          transition: top .25s;
          position: -webkit-sticky;
          position: sticky;
        }
        .__avatarWrapper { position: relative; }
        .__blogLink {
          cursor: pointer;
          word-break: break-word;
          text-decoration: none;
        }
        .__targetWrapper {
          width: inherit;
          vertical-align: top;
          display: inline-block;
        }
        .__avatarInner { position: relative; }
        .__avatarWrapperInner {
          border-radius: var(--border-radius-small);
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .__placeholder {
          width: 100%;
          line-height: 0;
          position: relative;
        }
        .__avatarImage {
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
          visibility: visible;
        }
        .__anonymous {
          background-image: url(/pop/src/assets/images/avatar/anonymous_avatar_40-3af33dc0.png);
          background-size: 100% 100%;
          border-radius: var(--border-radius-small);
        }
      }
    </style>
  `);

  const newAvatar = (blog) => $(`
    <div class="__stickyContainer" data-testid="sticky-avatar-container">
      <div class="__avatarOuter">
        <div class="__avatarWrapper" role="figure" aria-label="${tr("avatar")}">
          <span data-testid="controlled-popover-wrapper" class="__targetWrapper">
            <span class="__targetWrapper">
              <a href="https://${blog}.tumblr.com/" title="${blog}" target="_blank" rel="noopener" role="link" class="__blogLink" tabindex="0">
                <div class="__avatarInner" style="width: 64px; height: 64px;">
                  <div class="__avatarWrapperInner">
                    <div class="__placeholder" style="padding-bottom: 100%;">
                      <img
                      class="__avatarImage"
                      src="https://api.tumblr.com/v2/blog/${blog}/avatar"
                      sizes="64px" 
                      alt="${tr("Avatar")}" 
                      style="width: 64px; height: 64px;" 
                      loading="eager">
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  `);
  const fixHeader = posts => {
    for (const post of posts) {
      let $post = $(post);
      let $header = $post.find(`header${keyToCss("header")}`);
      let parent = "";
      if (location.pathname.split("/").includes("inbox")
        || location.pathname.split("/").includes("messages")) {
        parent = $header.find(keyToCss("blogLink")).eq(1).text()
          || "anon";
      } else {
        parent = $header.find(keyToCss("blogLink")).eq(0).text()
        || $post.find(`[aria-label="${tr("Reblog")}"]`)?.attr("href").split("/")[2];
      }
      if ($header.find(keyToCss("rebloggedFromName")).length) {
        $header.find(keyToCss("reblogged")).hide();
        let $rebloggedFrom = $header.find(keyToCss("rebloggedFromName"));
        let $reblogIcon = $header.find(keyToCss("reblogIcon"));
        $reblogIcon.css("margin-left", "2px");
        $reblogIcon.insertBefore($rebloggedFrom);
        $rebloggedFrom.css("margin-left", "5px");
      } else if ($header.find(keyToCss("avatar")).length) {
        $header.find(keyToCss("avatar")).hide();
      } else {
        $header.find(keyToCss("reblogged")).hide();
        let $reblogIcon = $header.find(keyToCss("reblogIcon"));
        $reblogIcon.css("margin-left", "2px");
        $reblogIcon.appendTo($header.find(keyToCss("attribution")));
        $header.find($(keyToCss("followButton"))).eq(0).hide();
        let $label = $post.find(keyToCss("label")).eq(0).clone();
        $label.insertAfter($reblogIcon);
        $label.css({display: "inline", marginLeft: "5px"});
        $label.find(keyToCss("attribution")).css("color", "rgba(var(--black),.65)");
      }
      if (parent !== "anon") $post.prepend(newAvatar(parent));
      else {
        $header.find(keyToCss("attribution")).css("font-weight", "bold");
        $post.prepend(
          $(`
            <div class="__stickyContainer" data-testid="sticky-avatar-container">
              <div class="__avatarOuter">
                <figure class="__anonymous" aria-label="${tr("Anonymous avatar")}" style="width: 64px; height: 64px;"></figure>
              </div>
            </div>
          `)
        );
      }
    }
  };
  const sortPosts = () => {
    const nodes = newNodes.splice(0);
    if (nodes.length !== 0 && (nodes.some(node => node.matches(postSelector) || node.querySelector(postSelector) !== null))) {
      const posts = [
        ...nodes.filter(node => node.matches(postSelector)),
        ...nodes.flatMap(node => [...node.querySelectorAll(postSelector)])
      ].filter((value, index, array) => index === array.indexOf(value));
      fixHeader(posts);
    }
    else return
  };
  const observer = new MutationObserver(mutations => {
    const nodes = mutations
      .flatMap(({ addedNodes }) => [...addedNodes])
      .filter(node => node instanceof Element)
      .filter(node => node.isConnected);
    newNodes.push(...nodes);
    sortPosts();
  });
  const newSearch = () => $(`
    <div class="${keyToClasses("searchSidebarItem").join(" ")}" style="max-width: 550px; width: 100%;" >
      <div class="${keyToClasses("formContainer").join(" ")}">
        <span data-testid="controlled-popover-wrapper" class="${keyToClasses("targetWrapper").join(" ")}">
          <span class="${keyToClasses("targetWrapper").join(" ")}">
            <form method="GET" action="/search" role="search" class="${keyToClasses("form").join(" ")}">
              <div class="${keyToClasses("searchbarContainer").join(" ")}">
                <div class="${keyToClasses("searchIcon").join(" ")}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" role="presentation" >
                    <use href="#managed-icon__search"></use>
                  </svg>
                </div>
                <input
                  name="q"
                  type="text"
                  autocomplete="off"
                  aria-label="${tr("Search")}"
                  class="${keyToClasses("searchbar").join(" ")}"
                  placeholder="Search Tumblr"
                  autocapitalize="sentences"
                  value=""
                />
              </div>
            </form>
          </span>
        </span>
      </div>
    </div>
  `);
  const newSettings = () => $(` 
    <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
      <button class="${keyToClasses("button")[0]} ${keyToClasses("navLinkButtonWrapper").join(" ")}">
        <span class="${keyToClasses("buttonInner").join(" ")} ${keyToClasses("navLink").join(" ")}" tabindex="-1" style="width: 100%;">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" role="presentation">
            <use href="#managed-icon__settings"></use>
          </svg>
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}" style="font-size: 1rem;">${tr("Settings")}</span>
            <span class="${keyToClasses("buttonInner").join(" ")} ${keyToClasses("caret").join(" ")}" id="settings_caret" style="transition: transform 200ms ease-in-out 0s;">
              <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" role="presentation">
                <use href="#managed-icon__caret-thin"></use>
              </svg>
            </span>
          </div>
        </span>
      </button>
    </li>
  `);
  const settingsSubmenu = () => $(`
    <ul class="${keyToClasses("accountStats").join(" ")}" id="settings_submenu_new" style="margin: 0;">
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/account">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Account")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/dashboard">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Dashboard")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/notifications">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Notifications")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/domains">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Domains")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/ad-free-browsing">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Ad-Free Browsing")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/purchases">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Payment &amp; purchases")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/subscriptions">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Post+ subscriptions")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/apps">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Apps")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/privacy">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Privacy")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/labs">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Labs")}</span>
          </div>
        </a>
      </li>
      <li class="${keyToClasses("navItem").join(" ")} ${keyToClasses("newDesktopLayout").join(" ")}">
        <a class="${keyToClasses("navLink").join(" ")}" href="/settings/gifts">
          <div class="${keyToClasses("navInfo").join(" ")}">
            <span class="${keyToClasses("childWrapper").join(" ")}">${tr("Gifts")}</span>
          </div>
        </a>
      </li>
    </ul>
  `);
  const newCaret = () => $(`
    <button class="${keyToClasses("button")[0]}" aria-label="${tr("Show Blog Statistics")}">
      <span class="${keyToClasses("buttonInner").join(" ")} ${keyToClasses("menuTarget").join(" ")}" style="transform: rotate(0deg); display: flex; transition: transform 200ms ease-in-out 0s;" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" role="presentation">
          <use href="#managed-icon__caret-thin"></use>
        </svg>
      </span>
    </button>
  `);
  const accountStats = blog => $(`
    <ul class="${keyToClasses("accountStats").join(" ")}">
      <li>
        <a href="/blog/${blog.name}">
          <span>${tr("Posts")}</span>
          <span class="${keyToClasses("count")[3]}">${blog.posts ? blog.posts : ""}</span>
        </a>
      </li>
      <li>
        <a href="/blog/${blog.name}/followers">
          <span>${tr("Followers")}</span>
          <span class="${keyToClasses("count")[3]}">${blog.followers ? blog.followers : ""}</span>
        </a>
      </li>
      <li id="__${blog.name}-activity">
        <a href="/blog/${blog.name}/activity">
        <span>${tr("Activity")}</span>
        <span class="${keyToClasses("count")[3]}">${blog.notifications ? blog.notifications : ""}</span>
        </a>
      </li>
      <li>
        <a href="/blog/${blog.name}/drafts">
          <span>${tr("Drafts")}</span>
          <span class="${keyToClasses("count")[3]}">${blog.drafts ? blog.drafts : ""}</span>
        </a>
      </li>
      <li>
        <a href="/blog/${blog.name}/queue">
          <span>${tr("Queue")}</span>
          <span class="${keyToClasses("count")[3]}">${blog.queue ? blog.queue : ""}</span>
        </a>
      </li>
      <li>
        <a href="/blog/${blog.name}/post-plus">
          <span>${tr("Post+")}</span>
        </a>
      </li>
      <li>
        <a href="/blog/${blog.name}/blaze">
          <span>${tr("Tumblr Blaze")}</span>
        </a>
      </li>
      <li>
        <a href="/settings/blog/${blog.name}">
          <span>${tr("Blog settings")}</span>
        </a>
      </li>
      <li>
        <a href="/mega-editor/published/${blog.name}" target="_blank">
          <span>${tr("Mass Post Editor")}</span>
        </a>
      </li>
    </ul>
  `);
  const checkboxEvent = (id, value) => {
    switch (id) {
      case "__c1":
      $(keyToCss("timelineHeader")).toggle(!value);
      break;
      case "__c2":
      $(keyToCss("sidebarItem")).has(keyToCss("recommendedBlogs")).toggle(!value);
      break;
      case "__c3":
      $(keyToCss("sidebarItem")).has(keyToCss("radar")).toggle(!value);
      break;
      case "__c4":
      $(keyToCss("navItem")).has('use[href="#managed-icon__explore"]').toggle(!value);
      break;
      case "__c5":
      $(keyToCss("navItem")).has('use[href="#managed-icon__shop"]').toggle(!value);
      break;
      case "__c6":
      $(keyToCss("navItem")).has('use[href="#managed-icon__live-video"]')
      .add($(keyToCss("navItem")).has('use[href="#managed-icon__coins"]'))
      .add($(keyToCss("listTimelineObject")).has(keyToCss("liveMarqueeTitle")))
      .toggle(!value);
      break;
      case "__c7":
      $(keyToCss("navItem")).has('use[href="#managed-icon__earth"]').toggle(!value);
      break;
      case "__c8":
      $(keyToCss("navItem")).has('use[href="#managed-icon__sparkle"]').toggle(!value);
      break;
      case "__c10":
      value? observer.observe(target, { childList: true, subtree: true })
      : observer.disconnect();
      break;
      default:
      console.error("checkboxEvent: invalid id");
    }
  };
  const unfuck = async function () {
    if ($(keyToCss("headerWrapper")).length) { //initial status checks to determine whether to inject or not
      console.log("no need to unfuck");
      if (!$("#__h").length) { $("#__s").remove() }
      return;
    } else if (isDashboard()
      && $(keyToCss("timeline")).attr("data-timeline").split("?")[0] === "/v2/tabs/for_you") {
      unsafeWindow.tumblr.navigate("/dashboard/following");
      console.log("navigating to following");
      throw "navigating tabs";
    } else if (!$(keyToCss("navigationLinks")).length) {
      console.error("page not loaded, retrying...");
      throw "page not loaded";
    } else { console.log("unfucking dashboard...") };

    const pathname = location.pathname.split("/")[1];
    userinfo = await unsafeWindow.tumblr.apiFetch(`/v2/user/info`);
    const blogs = await userinfo.response.user.blogs;
    const ownName = blogs[0].name;

    // const blogs = unsafeWindow.___INITIAL_STATE___.queries.queries[0].state.data.user.blogs;
    let $navigationLinks = $(keyToCss("navigationLinks"));
    let $content = {};
    let $headerWrapper = $("<nav>", { class: keyToClasses("headerWrapper").join(" "), id: "__hw" });
    let $header = $("<header>", { id: "__h" });
    let $logoContainer = $(keyToCss("logoContainer"));
    let $createPost = $(keyToCss("createPost"));
    let $heading = $(`<div class="${keyToClasses("heading").join(" ")}"><h3>Account</h3></div>`);
    let $likeIcon = $(`<svg xmlns="http://www.w3.org/2000/svg" height="18" width="20" role="presentation" style="--icon-color-primary: rgba(var(--black), 0.65);"><use href="#managed-icon__like-filled"></use></svg>`);
    let $followingIcon = $(`<svg xmlns="http://www.w3.org/2000/svg" height="21" width="20" role="presentation" style="--icon-color-primary: rgba(var(--black), 0.65);"><use href="#managed-icon__following"></use></svg>`);
    let $ownAvatar = $(`
      <div class="__avatarOuter" style="position: absolute; top: 0; left: -85px;">
        <div class="__avatarWrapper" role="figure" aria-label="${tr("avatar")}">
          <span data-testid="controlled-popover-wrapper" class="__targetWrapper">
            <span class="__targetWrapper">
              <a href="https://${ownName}.tumblr.com/" title="${ownName}" target="_blank" rel="noopener" role="link" class="blogLink" tabindex="0">
                <div class="__avatarInner" style="width: 64px; height: 64px;">
                  <div class="__avatarWrapperInner">
                    <div class="__placeholder" style="padding-bottom: 100%;">
                      <img
                      class="__avatarImage"
                      src="https://api.tumblr.com/v2/blog/${ownName}/avatar"
                      sizes="64px" 
                      alt="${tr("Avatar")}" 
                      style="width: 64px; height: 64px;" 
                      loading="eager">
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </span>
        </div>
      </div>
    `);
    let $menu = $(`
      <div id="__m">
        <div id="__in">
          <h1>dashboard unfucker v${version}b</h1>
          <button id="__ab">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" role="presentation" style="--icon-color-primary: rgba(var(--white-on-dark), 0.65);">
              <use href="#managed-icon__ellipsis"></use>
            </svg>
          </button>
          <button id="__cb">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" role="presentation" style="--icon-color-primary: rgba(var(--white-on-dark), 0.65);">
              <use href="#managed-icon__settings"></use>
            </svg>
          </button>
        </div>
        <div id="__a" style="display: none;">
          <ul id="__am">
            <li class="infoHeader">
              <span>about</span>
            </li>
            <li style="flex-flow: column wrap">
              <span style="width: 100%;">version: <b>v${version}b</b> - <b>DEPRECATED</b></span><br>
              <span style="width: 100%;">this version is now deprecated, disable this script in your script injector and install 
                <a target="_blank" href="https://raw.githubusercontent.com/enchanted-sword/dashboard-unfucker/main/unfucker.user.js">this one</a>
              </span>
            </li>
            <li>
              <a target="_blank" href="https://github.com/enchanted-sword/dashboard-unfucker">source</a>
            </li>
            <li>
              <a target="_blank" href="https://tumblr.com/dragongirlsnout">my tumblr!</a>
            </li>
            <li>
              <a target="_blank" href="https://www.paypal.com/paypalme/dragongirled">support my work!</a>
            </li>
          </ul>
        </div>
    `);
    let $settings = newSettings();
    let $settingsSubmenu = settingsSubmenu();
    let $subnav = $("#account_subnav");
    let $blogs = $(keyToCss("blogTile"));
    let $bar = $(`${keyToCss("postColumn")} > ${keyToCss("bar")}`);
    let $timelineHeader = $(keyToCss("timelineHeader"));
    let $navItems = $navigationLinks.children();
    let $main = $(keyToCss("main"));
    let $bluespaceLayout = $(keyToCss("bluespaceLayout"));
    let $navSubHeader = $(keyToCss("navSubHeader"));
    let $tabsHeader = $(keyToCss("tabsHeader"));

    $("html").append($menu); //menu functions
    $("#__cb").on("click", () => {
      if ($("#__c").is(":hidden")) {
        $("#__cb svg").css("--icon-color-primary", "rgb(var(--white-on-dark))");
      } else { $("#__cb svg").css("--icon-color-primary", "rgba(var(--white-on-dark),.65)") }
      $("#__c").toggle();
    });
    $("#__ab").on("click", () => {
      if ($("#__a").is(":hidden")) {
        $("#__ab svg").css("--icon-color-primary", "rgb(var(--white-on-dark))");
      } else { $("#__ab svg").css("--icon-color-primary", "rgba(var(--white-on-dark),.65)") }
      $("#__a").toggle();
    });
    

    $(document).on("click", () => { //add popover functionality to account subnav
      if (!$(`${keyToCss("subNav")}:hover`).length
        && !$subnav.eq(0).attr("hidden")) {
        try { document.getElementById("account_button").click(); }
        catch { throw "element not loaded"}
      }
    });


    if (matchPathname()) { //run on non-permalink pages
      $tabsHeader.insertAfter($bar);
      $content = $(keyToCss("main"));
      waitFor(keyToCss("sidebar")).then(() => { //wait for sidebar to load
        $(keyToCss("sidebar")).prepend($menu);
        let $search = $(keyToCss("searchSidebarItem"));
        $search.insertAfter($logoContainer);
        
      });
      if (isDashboard()) { //reorder tabs for accounts made after 8 may 2023
        waitFor(keyToCss("timelineOptionsItemWrapper")).then(() => {
          if ($(keyToCss("timelineOptionsItemWrapper")).first().has("a[href='/dashboard/stuff_for_you']").length ? true : false) {
            let $forYou = $(keyToCss("timelineOptionsItemWrapper")).has("a[href='/dashboard/stuff_for_you']");
            let $following = $(keyToCss("timelineOptionsItemWrapper")).has("a[href='/dashboard/following']");
            $following.insertBefore($forYou);
          }
        });
      }
    } else { //permalink pages
      $content = $(`${keyToCss("mainContentWrapper")} ${keyToCss("container")}`);
      $("#__h").append(newSearch());
    };
    if (["search", "tagged"].includes(pathname)) {
      $content.css("max-width", "fit-content");
    };
    $bar.prepend($ownAvatar);
    $bluespaceLayout.prepend($headerWrapper);
    $headerWrapper.append($header)
    $header.append($logoContainer);
    $header.append($navigationLinks);
    $header.append($createPost);
    $navSubHeader.addClass(keyToClasses("heading").join(" "));
    $subnav.prepend($heading);
    $heading.append($(keyToCss("logoutButton")));
    $(`[href="/likes"] ${keyToCss("childWrapper")}`).prepend($likeIcon);
    $(`[href="/following"] ${keyToCss("childWrapper")}`).prepend($followingIcon);
    $settings.insertAfter($(keyToCss("navItem")).has("span:contains('Following')"));
    $settingsSubmenu.insertAfter($settings);
    $settingsSubmenu.hide();
    $settings.on("click", () => {
      if ($settingsSubmenu.is(":hidden")) {
        $("#settings_caret").css("transform", "rotate(180deg)");
      }
      else { $("#settings_caret").css("transform", "rotate(0deg)") }
      $settingsSubmenu.toggle();
    });
    for (let i = 0; i < blogs.length; ++i) {
      let $blog = $blogs.eq(i);
      let blog = blogs[i];
      let $button = newCaret();
      test = await unsafeWindow.tumblr.apiFetch(`/v2/blog/${blog.name}/notifications?unread=true`);
      blog.notifications = test.response.notifications.filter(a => a.unread == true).length;
      $blog.find(keyToCss("actionButtons")).append($button);
      var $accountStats = accountStats(blog);
      console.log(blog);
      
      $accountStats.insertAfter($blog);
      if (blog.isGroupChannel) {
        var $members = $(`
          <li>
            <a href="/blog/${blog.name}/members" target="_blank">
              <span>${tr("Members")}</span>
            </a>
          </li>
        `);
        $members.insertAfter($(`#__${blog.name}-activity`));
      }
      $accountStats.hide()
      $button.on("click", function () {
        if ($(keyToCss("accountStats")).eq(i + 1).is(":hidden")) {
          $(this).css("transform", "rotate(180deg)");
        }
        else {
          $(this).css("transform", "rotate(0deg)");
        }
        $(keyToCss("accountStats")).eq(i + 1).toggle();
      });
    }
    $(`button[aria-label="${tr("Show Blog Statistics")}"`).eq(0).trigger("click");
    $(`[title="${tr("Settings")}"]`).hide();
    console.log("dashboard fixed!");
  };

  $styleElement.appendTo("html");
  requestAnimationFrame(() => unfuck());
  unsafeWindow.tumblr.on('navigation', () => requestAnimationFrame(() => 
    window.setTimeout(
      unfuck().catch((e) => 
        window.setTimeout(unfuck, 400)
      ),
      400
    )
  ));
});