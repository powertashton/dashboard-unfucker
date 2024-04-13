// ==UserScript==
// @name         dashboard unfucker (no flags)
// @version      6.0.0
// @description  no more shitty twitter ui for pc
// @author       dragongirlsnout
// @match        https://www.tumblr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @grant        unsafeWindow
// @downloadURL  https://raw.githubusercontent.com/powertashton/dashboard-unfucker/main/unfucker-noflags.user.js
// @updateURL    https://raw.githubusercontent.com/powertashton/dashboard-unfucker/main/unfucker-noflags.user.js
// @require      https://code.jquery.com/jquery-3.6.4.min.js
// ==/UserScript==

/* globals tumblr */

'use strict';

const version = "4.3.0";
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
    let $navigationLinks = $(keyToCss("navigationLinks"));
    let $content = {};
    let $headerWrapper = $("<nav>", { class: keyToClasses("headerWrapper").join(" "), id: "__hw" });
    let $header = $("<header>", { id: "__h" });
    let $logoContainer = $(keyToCss("logoContainer"));
    let $createPost = $(keyToCss("createPost"));
    let $heading = $(`<div class="${keyToClasses("heading").join(" ")}"><h3>Account</h3></div>`);
    let $likeIcon = $(`<svg xmlns="http://www.w3.org/2000/svg" height="18" width="20" role="presentation" style="--icon-color-primary: rgba(var(--black), 0.65);"><use href="#managed-icon__like-filled"></use></svg>`);
    let $followingIcon = $(`<svg xmlns="http://www.w3.org/2000/svg" height="21" width="20" role="presentation" style="--icon-color-primary: rgba(var(--black), 0.65);"><use href="#managed-icon__following"></use></svg>`);
    let $settings = newSettings();
    let $settingsSubmenu = settingsSubmenu();
    let $subnav = $("#account_subnav");
    let $bar = $(`${keyToCss("postColumn")} > ${keyToCss("bar")}`);
    let $bluespaceLayout = $(keyToCss("bluespaceLayout"));
    let $navSubHeader = $(keyToCss("navSubHeader"));
    let $tabsHeader = $(keyToCss("tabsHeader"));


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