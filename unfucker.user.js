// ==UserScript==
// @name         dashboard unfucker
// @version      6.7.0
// @description  no more shitty twitter ui for pc
// @author       dragongirlsnout and powertashton
// @match        https://www.tumblr.com/*
// @grant        unsafeWindow
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @downloadURL  https://raw.githubusercontent.com/powertashton/dashboard-unfucker/main/unfucker.user.js
// @updateURL    https://raw.githubusercontent.com/powertashton/dashboard-unfucker/main/unfucker.user.js
// @require      https://code.jquery.com/jquery-3.6.4.min.js
// @run-at       document-start
// ==/UserScript==

/* globals tumblr */
function GM_addStyle (cssStr) {
    var D               = document;
    var newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ    = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}
GM_addStyle ( ` /*No Go ad-free today button*/
.HOjIH {
    display: none;
}

@media (min-width: 990px) {

/* If you wish to remove the sticky header and have it stay in place, 
remove all the text between this and ''Sticky header End''
you will need to redo this any time you update the style!

Unfortunately a fixed header is a bit buggy so remove at your own risk!*/
    
    /*Sticky Header*/
    .ZkG01 .h_Erh {
        z-index: 99 !important;
        position: fixed !important;
    }

    @media (min-width: 1161.3px) {
        /*Moves the search bar - Fullscreen + Sticky*/
        .N5wJr,
        .zmjaW {
            position: fixed !important;
            left: 125px !important;
            top: -5px !important;
            z-index: 99 !important;
            width: 415px !important;
        }
        .N5wJr.X7vaQ {
            left: 133px !important;
            top: 9px !important;
            width: 399px !important;
        }
        
        .G6PED {
            position: fixed !important;
            top: 8px !important;
            z-index: 99;
            left: 133px !important;
            width: 415px;
        }
    }


    @media (max-width: 1161.3px) {
        /*Moves the search bar - Smallscreen + Sticky*/
        .N5wJr,
        .zmjaW {
            position: fixed !important;
            left: 45px !important;
            top: -5px !important;
            z-index: 99 !important;
            width: 280px !important;
        }
        .N5wJr.X7vaQ {
            left: 54px !important;
            top: 9px !important;
        }
        
        .G6PED {
            position: fixed !important;
            top: 8px !important;
            z-index: 99;
            left: 53px !important
        }
        
    }

    .X7vaQ {
        margin-top: 0px;
        padding-top: 14px;
        padding-left: 8px;
        padding-right: 8px;
    }

    .FtjPK .AD_w7 .JZ10N.y0ud2 {
        top: calc(55px + var(--dashboard-tabs-header-height, 0px))!important;
    }


    .N5wJr.QI77K {
        top: 9px !important;
        left: 133px !important;
        width: 399px !important;
    }
    

    /*Sticky Header End*/
    
    
    



@media (max-width: 1161.3px) {
    /*Reorders the Icons in the header*/

/*COMMUNITIES UPDATE - REMOVE /* (around order) IF USING COMMUNITIES PAGES*/

/*Communities*/

.gM9qK > span.ZQMrc:nth-of-type(1) {
/*order: 3 !important;*/
}
/*Activity*/

.gM9qK > span.ZQMrc:nth-of-type(2) {
/*order: 8 !important;*/
}  
/*Chat*/

.gM9qK > span.ZQMrc:nth-of-type(3) {
/*order:7 !important;*/
} 
/*Accounts*/ 

.gM9qK > span.ZQMrc:nth-of-type(4) {
/*order: 15 !important;*/
}
/*shop*/ 

.gM9qK > span.ZQMrc:nth-of-type(5) {
/*order: 5 !important; */
    } 
}
    
    /*Accounts*/
    ul li.g8SYn {
        order: 13;
    }

    @media (max-width: 1161.3px) {
        /*Accounts*/
        .gM9qK > span.ZQMrc:nth-of-type(3) {
            order: 13;
        }
    }
    /*Home*/
    ul li.g8SYn[title="Home"],
    ul li.g8SYn[title="Welcome"],
    ul li.g8SYn[title="ホーム"],
    ul li.g8SYn[title="Pano"],
    ul li.g8SYn[title="Inicio"],
    ul li.g8SYn[title="Главная"],
    ul li.g8SYn[title="Strona główna"],
    ul li.g8SYn[title="Início"],
    ul li.g8SYn[title="홈"],
    ul li.g8SYn[title="主页"],
    ul li.g8SYn[title="首頁"],
    ul li.g8SYn[title="主頁"],
    ul li.g8SYn[title="Beranda"],
    ul li.g8SYn[title="होम"],
    ul li.g8SYn[title="Accueil"] {
        order: 1;
    }
    /*Explore*/
    ul li.g8SYn[title="Explore"],
    ul li.g8SYn[title="Entdecken"],
    ul li.g8SYn[title="Esplora"],
    ul li.g8SYn[title="探索"],
    ul li.g8SYn[title="Keşfet"],
    ul li.g8SYn[title="Explorar"],
    ul li.g8SYn[title="Обзор"],
    ul li.g8SYn[title="Odkrywaj"],
    ul li.g8SYn[title="Verkennen"],
    ul li.g8SYn[title="둘러보기"],
    ul li.g8SYn[title="发现"],
    ul li.g8SYn[title="Jelajah"],
    ul li.g8SYn[title="एक्सप्लोर करें"],
    ul li.g8SYn[title="Explorer"] {
        order: 2;
        
    }

    /*Patio*/
    ul li.g8SYn[title="Patio"] {
        order: 3;
    }

    .G16Pk {
        Display: none;
    }
    /*If you want to hide the patio button, 
    remove the " /* " around display: none; */
    ul li.g8SYn[title="Patio"],
    .KTRcB:has(.B1L2M[aria-label="Patio"]) {
        /*display: none;*/
    }
    
    /*If you want to hide the "patio feedback?" button, 
    remove the " /* " around display: none; */
    .sebgd {
        /*display: none;*/
    }

    /*Communities*/
    ul li.g8SYn[title="Communities"],
    ul li.g8SYn[title="Communitys"],
    ul li.g8SYn[title="Communautés"],
    ul li.g8SYn[title="Community"],
    ul li.g8SYn[title="コミュニティ"],
    ul li.g8SYn[title="Topluluklar"],
    ul li.g8SYn[title="Comunidades"],
    ul li.g8SYn[title="Сообщества"],
    ul li.g8SYn[title="Społeczności"],
    ul li.g8SYn[title="Community's"],
    ul li.g8SYn[title="커뮤니티"],
    ul li.g8SYn[title="社区"],
    ul li.g8SYn[title="社群"],
    ul li.g8SYn[title="समुदाय"],
    ul li.g8SYn[title="Komunitas"] {
        order: 4;
        Display: block
    }

    #community_subnav {right:390px !important}


    /*Shop*/
    @media (min-width: 1161.4px) {
        .gM9qK > span.ZQMrc:nth-of-type(3) {
            order: 5;
        }
    }
    .gM9qK > span.ZQMrc:nth-of-type(4) {
        order: 5;
    }

    /*Inbox*/
    ul li.g8SYn[title="Inbox"],
    ul li.g8SYn[title="Posteingang"],
    ul li.g8SYn[title="Mailbox"],
    ul li.g8SYn[title="Posta"],
    ul li.g8SYn[title="受信箱"],
    ul li.g8SYn[title="Gelen Kutusu"],
    ul li.g8SYn[title="Bandeja de entrada"],
    ul li.g8SYn[title="Входящие"],
    ul li.g8SYn[title="Skrzynka odbiorcza"],
    ul li.g8SYn[title="Caixa de entrada"],
    ul li.g8SYn[title="수신함"],
    ul li.g8SYn[title="收件箱"],
    ul li.g8SYn[title="收件匣"],
    ul li.g8SYn[title="Kotak Masuk"],
    ul li.g8SYn[title="इनबॉक्स"],
    ul li.g8SYn[title="Boîte de réception"] {
        order: 6 !important;
    }

    /*Chat*/
    .gM9qK > span.ZQMrc:nth-of-type(2) {
        order: 7;
    }
    
    /*Activity*/
    .gM9qK > span.ZQMrc:nth-of-type(1) {
        order: 8;
    }

    /*Settings*/
    ul li.g8SYn[title="Settings"],
    ul li.g8SYn[title="Einstellungen"],
    ul li.g8SYn[title="Impostazioni"],
    ul li.g8SYn[title="設定"],
    ul li.g8SYn[title="Ayarlar"],
    ul li.g8SYn[title="Configuración"],
    ul li.g8SYn[title="Настройки"],
    ul li.g8SYn[title="Ustawienia"],
    ul li.g8SYn[title="Preferências"],
    ul li.g8SYn[title="Configurações"],
    ul li.g8SYn[title="Instellingen"],
    ul li.g8SYn[title="설정"],
    ul li.g8SYn[title="设置"],
    ul li.g8SYn[title="設定"],
    ul li.g8SYn[title="Pengaturan"],
    ul li.g8SYn[title="सेटिंग"],
    ul li.g8SYn[title="Paramètres"] {
        order: 9;
        display:none;
    }
    
    /*Tumblr Live*/
    ul li.g8SYn.IYrO9[title="Live"],
    ul li.g8SYn.IYrO9[title="live"],
    ul li.g8SYn.IYrO9[title="ライブ"],
    ul li.g8SYn.IYrO9[title="Tumblr Live"],
    ul li.g8SYn.IYrO9[title="Прямая трансляция"],
    ul li.g8SYn.IYrO9[title="Na żywo"],
    ul li.g8SYn.IYrO9[title="Em direto"],
    ul li.g8SYn.IYrO9[title="라이브"],
    ul li.g8SYn.IYrO9[title="直播"],
    ul li.g8SYn.IYrO9[title="Langsung"],
    ul li.g8SYn.IYrO9[title="लाइव"] {
        order: 0;
        Display: None;
    }

    /*Domain*/
    ul li.g8SYn[title="Get a domain"],
    ul li.g8SYn[title="Domain kaufen"],
    ul li.g8SYn[title="Ottieni domini"],
    ul li.g8SYn[title="ドメインを取得"],
    ul li.g8SYn[title="Alan adını kap"],
    ul li.g8SYn[title="Compra un dominio"],
    ul li.g8SYn[title="Получить домен"],
    ul li.g8SYn[title="Uzyskaj domenę"],
    ul li.g8SYn[title="Obtém um domínio"],
    ul li.g8SYn[title="Obtenha um domínio"],
    ul li.g8SYn[title="Gebruik een domein"],
    ul li.g8SYn[title="도메인 사용하기"],
    ul li.g8SYn[title="获取一个域名"],
    ul li.g8SYn[title="取得一個網域"],
    ul li.g8SYn[title="取得網域"],
    ul li.g8SYn[title="Dapatkan domain"],
    ul li.g8SYn[title="एक डोमेन लें"],
    ul li.g8SYn[title="Obtenez un domaine"],
    ul li.g8SYn[title="Ottieni dominio"] {
        order: 0;
        Display: None;
    }
    /*Ad Free*/
    ul li.g8SYn[title="Go Ad-Free"],
    ul li.g8SYn[title="Go Ad Free"],
    ul li.g8SYn[title="Weg mit Werbung"],
    ul li.g8SYn[title="Surf without ads"],
    ul li.g8SYn[title="Vai senza pubblicità"],
    ul li.g8SYn[title="広告なし機能"],
    ul li.g8SYn[title="Reklamlardan Kurtul"],
    ul li.g8SYn[title="Tumblr sin anuncios"],
    ul li.g8SYn[title="Убрать рекламу"],
    ul li.g8SYn[title="Przejdź na Tumblr bez reklam"],
    ul li.g8SYn[title="Navega sem anúncios"],
    ul li.g8SYn[title="Navegar sem anúncios"],
    ul li.g8SYn[title="Browsen zonder advertenties"],
    ul li.g8SYn[title="광고 없이 보기"],
    ul li.g8SYn[title="设为无广告"],
    ul li.g8SYn[title="選用無廣告"],
    ul li.g8SYn[title="設定無廣告"],
    ul li.g8SYn[title="Bebas Iklan"],
    ul li.g8SYn[title="ऐड-फ़्री हो जाएँ"],
    ul li.g8SYn[title="Surfez sans pub"] {
        order: 0;
        Display: block;
    }
    
    /*Xkit*/
    .tab_xkit.iconic.tab {
        order: 12;
    }



    /*Patio*/
    .sebgd {
        width: 144px;
        position: fixed;
        left: 119px;
        top: 4px;
        padding: 12px 16px;
    }
    @media (min-width: 1018px) {

        .hXNpI {
            -moz-column-gap: 8px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 4px;
            display: flex;
        }

        .hXNpI .COENx {
            text-align: center;
            font-size: inherit !important;
        }
    }

    /*Fixes Some of the changes to the Activity Menu*/
    .ybmTG.ufrME > div.DxQ0f.AzqQv.P4LH6:has(.jBtpD) {
        transform: translate3d(-82.8px, 49px, 0px) !important;
    }

    .mCR4G a {
        color: rgba(var(--black), .65) !important;
    }

    .vlkFO {
        height: 30px;
        padding-top: 0px;
        padding-bottom: 0px;
    }
    .wvij3 {
        background-color: RGB(var(--white));
        border-top: 1px solid rgba(var(--black), .13);
    }


    .lUKCu .SAqxs .BG5X8[aria-selected=true] {
        border-radius: 0px;
        color: RGB(var(--accent));
        box-shadow: inset 0px -2px 0px RGB(var(--accent));
        background-color: RGB(var(--white));
    }

    .lUKCu .SAqxs .BG5X8 {
        flex-grow: 1;
        padding: 8px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5;
    }


    .lUKCu .SAqxs .BG5X8:focus,
    .lUKCu .SAqxs .BG5X8:hover {
        background-color: RGB(var(--white));
        border-radius: 0px;
        outline: none;
    }

    #glass-container > div > div > div.G75qL.lSS47 {
        display: none;
    }

    .lUKCu .SAqxs {
        flex-wrap: wrap;
        gap: 6px;
    }

    #glass-container > div > div > div.jBtpD > div.pclKV > div:nth-child(1) > div.kYovr {
        background-color: rgba(var(--black), .07);
        padding: 3px 1px 3px 1px;
    }


    .lUKCu .SAqxs {
        padding: 0px
    }


    #glass-container > div > div > div.jBtpD > div.lUKCu > div > button:nth-child(1) > span {
        position: relative;
        visibility: hidden;
        width: 52.7px
    }
    #glass-container > div > div > div.jBtpD > div.lUKCu > div > button:nth-child(1) > span:after {
        content: "All";
        visibility: visible;
        position: absolute;
        left: 16.1px;
        top: 0;
    }

    #glass-container > div > div > div.jBtpD > div.lUKCu > div > button:nth-child(1) {
        padding: 5px;
        flex: 0 0 auto;
    }


    .lUKCu {
        display: flex;
        flex-direction: column;
    }

    .LMFDf {
        background-color: transparent;
    }

    /*Removes weird blue icon in posts replies*/
    button.ykm3O.lRHNZ.F_5SW,
    .ykm3O.F_5SW {
        color: inherit !important;
        padding: 10px;
    }

    .ykm3O.jTUmS.F_5SW,
    .ykm3O.ztxCq.F_5SW,
    .ykm3O._vT58.F_5SW,
    .ykm3O.lRHNZ.F_5SW {
        border-bottom-color: RGB(var(--blue));
        background: inherit;
    }

    .ykm3O {
        border-bottom: 2px solid transparent;
        border-radius: 0px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        min-width: 60px;
        padding: 10px;
        display: flex;
    }

    .poThh {
        padding: 0px var(--post-padding);
    }

    .ykm3O.lRHNZ.F_5SW svg use {
        --icon-color-primary: RGB(var(--blue));
    }
    .ykm3O._vT58.F_5SW.F_5SW svg use {
        --icon-color-primary: RGB(var(--green));
    }
    .ykm3O.ztxCq.F_5SW svg use {
        --icon-color-primary: RGB(var(--red));
    }
    .ykm3O.jTUmS.F_5SW svg use {
        --icon-color-primary: RGB(var(--purple));
    }

    .ykm3O svg {
        height: 18px;
        width: 18px;
    }

    .RmVjB {
        gap: 0px;
    }
    
    .DP33z {
        width: 25px;
        height: 25px;
    }
    
    .hfc9Y button {
        Margin-right: 10px
    }

       /*Unhides Messenger Chat Box*/
    .cwvO0 {z-index: 100;}

    /*Resizes Messenger Chat Box*/
    .j17Mp,
    .j17Mp.be6E9 {
        width: 400px !important;
        height: calc(100vh - 32px) !important;
        max-height: 560px !important;
    }


    .YOf31.FLoBV {
        position: static;
    }

    .yrINf,
    .wttFd,
    .FtjPK {
        border-radius: 3px !important;
    }


    /*Moves the following / for you / your tags*/
    .Dk06o,
    .Dk06o.X4W3M {
        top: calc(0px - var(--offset, 0px));
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
        order: 2;
        z-index: 1;
    }

    .O4V_R {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .wttFd {
        order: 1;
    }

    .j8ha0 {
        width: 100%;
        order: 3;
    }

    /*Fixes the no-icons / Moved icons update AGAIN AGAIN*/
    .gPQR5.ah4XU > .lSyOz.t8f_N {
        max-width: 625px;
        min-width: 625px;
        margin-left: -76px;
    }


    div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp > .qgvik {
        visibility: hidden;
    }

    .gPQR5.pTaNm.ah4XU > .lSyOz.t8f_N {
        max-width: 2080px;
        min-width: 650px;
        margin-left: -40px;
    }

    .ZkG01 ._3xgk.ZN00W {
        margin-left: 73px!important;
    }

    .D5eCV div.ZkG01 div._3xgk.ZN00W div.gPQR5.FGfuE.ah4XU.t8f_N div.e1knl {
        min-width: 315px;
    }


    html body#tumblr.palette--trueBlue.xkit--react div#root div div#base-container div.D5eCV div.ZkG01 div._3xgk div.RkANE.r1Zq6 div.DCCfo.ZmMA3 div.pKQCB div.Q05ZE main.gp1sd div.EYjNC div.qN8sP div.j8ha0 div.zAlrA div.rZlUD.KYCZY.F4Tcn div.So6RQ.YSitt.norecommended-done.xpostblock-done div.ge_yK div.c79Av article.FtjPK.r0etU.hMVn9 header.BjErQ.PpzOx div.q4Pce.J_Wh8 div.ZJdm4 div.ffqNn div.WJ6ij {
        margin: 0px;
    }


div.hyiL2 > .USr9U > div:not(:nth-last-child(2)) > div > div > div > article > div.qYXF9 > footer > div > div.MCavR > div:nth-child(2):has(.TRX6J[aria-label="Share"]) {
        margin-left: 10px;
    }

          
      div > .FtjPK > header > div.q4Pce.J_Wh8 > div.ZJdm4 > div.ffqNn > div.WJ6ij, 
    main > .j8ha0 > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .FtjPK > header > div.q4Pce.J_Wh8 > div.ZJdm4 > div.ffqNn > div.WJ6ij, 
    .NLCTe > div > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.q4Pce.J_Wh8 > div.ZJdm4 > div.ffqNn > div.WJ6ij,
    main > .j8ha0 > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.q4Pce.J_Wh8 > div.ZJdm4 > div.ffqNn > div.WJ6ij {
        margin: 4px;
    }
    
    /*Communities*/
    .pvWan > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH,
    /*Blogview*/
    main > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH,
    /*Drafts*/
    main > div.j8ha0 > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .FtjPK > .BjErQ > div.RYkKH,
    /*Likes*/
    .NLCTe > div > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > .RYkKH,
    main > .j8ha0 > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > .RYkKH {
        align-self: flex-start;
        top: 0px;
        padding-right: 10px;
        color: RGB(var(--white-on-dark));
        pointer-events: none;
        height: 100%;
        position: absolute;
        left: -85px;
    }
    /*Communities*/
    .pvWan > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp > .ESMam.ntiBu > div img, 
    .pvWan > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp,
    /*Blogview*/
    main > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp > .ESMam.ntiBu > div img, 
    main > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp,
    /*Drafts*/
main > div.j8ha0 > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .FtjPK > .BjErQ > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp > .ESMam.ntiBu > div img, 
main > div.j8ha0 > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .FtjPK > .BjErQ > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp,      
    /*Likes*/
    .NLCTe > div > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp,
    .NLCTe > div > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > .RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp > div.ESMam.ntiBu > div > img,

    main > .j8ha0 > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp,
    main > .j8ha0 > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > .RYkKH > .nZ9l5 > .BPf9u > span > a > .j4akp > div.ESMam.ntiBu > div > img {
        width: 64px !important;
        height: 64px !important;
    }
    
    /*Communities*/
   .pvWan > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5,
    /*Blogview*/
    main > div.Evcyl > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > div.RYkKH > .nZ9l5,
    /*Drafts*/
    main > div.j8ha0 > div.zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .FtjPK > .BjErQ > div.RYkKH > .nZ9l5,
    /*Likes*/
    .NLCTe > div > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > .RYkKH > .nZ9l5,
    main > .j8ha0 > .zAlrA > .rZlUD > .So6RQ.YSitt > .ge_yK > .c79Av > article > header > .RYkKH > .nZ9l5 {
        pointer-events: auto;
        top: 55px;
        transition: top .25s;
        position: -webkit-sticky;
        position: sticky;
    }


    #base-container > div.D5eCV > div > div._3xgk > div > div > div > div.Q05ZE > main > div > div > div > div.zAlrA > div > div > div > div > article > header > div.RYkKH > div > span > span > a > div,
    #base-container > div.D5eCV > div > div._3xgk > div > div > div > div.Q05ZE > main > div > div > div > div.zAlrA > div > div > div > div > article > header > div.RYkKH > div > span > span > a > div > div.ESMam.ntiBu > div > img {
        width: 32px !important;
        height: 32px !important;
    }


    #base-container > div.D5eCV > div > div._3xgk > div > div > div > div.Q05ZE > main > div > div > div > div.zAlrA > div > div > div > div > article > header > div.RYkKH {
        top: 0px;
        color: RGB(var(--white-on-dark));
        pointer-events: none;
        height: 100%;
        position: inherit;
        left: 0px;
    }

    /*mini-icons*/
    .Coaf7 {
        background: RGB(var(--black));
        padding: 1px;
        width: 30px !important;
        height: 30px !important;
        bottom: -5px !important;
        right: -5px !important;
    }

    .Coaf7 img {
        width: 30px !important;
        height: 30px !important;
    }



    #community_button.TRX6J.UyyJb[aria-expanded="true"] > .EvhBA.tDT48 {
        top: 1.3px;
        right: 439px;
        position: absolute;
    }

   

    .TRX6J:focus > .EvhBA {
        outline: none;
    }



    /*Removes the weird border lines*/
    .FA5JM {
        border-right: 0;
        position: absolute;
    }

    .gPQR5.FGfuE .lSyOz {
        border-right: 0;
    }

    /*reverts search box on collections*/
    .oPa7v,
    .QI77K .R3rx5 {
        color: rgba(var(--white-on-dark), .65);
        background-color: rgba(var(--white-on-dark), .25);
        border-radius: 3px;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        transition: background-color .25s;
        display: flex;
        position: relative;
        overflow: hidden;
        border: none;
    }

    .QI77K .R3rx5 > input {
        font-size: 1rem;
    }
    
    
    
    @media (max-width: 1163px) {
    
    /*Collections Search - Smallscreen*/
    
    .G6PED {
        position: relative;
        top: -42px;
        z-index: 99;
        left: -51.35vw;
        width: 415px;
    }
    
    .oeL0C {
        color: rgba(var(--white-on-dark), .65);
        background-color: rgba(var(--white-on-dark), .25);
        border-radius: 3px;
        justify-content: space-between;
        align-items: center;
        width: 57.83%;
        transition: background-color .25s;
        display: flex;
        position: relative;
        overflow: hidden;
        border: none;
    }

    .EqbwV {
        font-family: var(--font-family);
        color: inherit;
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        padding-left: 13px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        order:2
    }

    
    
    .oeL0C:focus-within {
        color: RGB(var(--black));
        background-color: RGB(var(--white));
    }
    
    .oeL0C .OgtUb > svg {
        order: 1
    }
    

    .OgtUb svg {
        --icon-color-primary: rgba(var(--white-on-dark), .65);
    }  
    
    
    .OgtUb:focus-within svg {
        --icon-color-primary: rgba(var(--black), .65);
    }
    
    .L4V2r.EqbwV::placeholder {
        color: rgba(var(--white-on-dark), .65);
        opacity: 1;
    }
    
    .oeL0C > input:focus::-webkit-input-placeholder {
        color: #B4B4B4;
        opacity: 1;
    }
    
    .zVES4 {
        margin: 0
    }
    
    
    
}
       @media (min-width: 1161.3px) {
    /*Collections Search - widescreen*/
    
    .G6PED {
        position: relative;
        top: -42px;
        z-index: 99;
        left: -46.1vw;
        width: 415px;
    }
    
    .oeL0C {
        color: rgba(var(--white-on-dark), .65);
        background-color: rgba(var(--white-on-dark), .25);
        border-radius: 3px;
        justify-content: space-between;
        align-items: center;
        width: 90.4%;
        transition: background-color .25s;
        display: flex;
        position: relative;
        overflow: hidden;
        border: none;
    }

    .EqbwV {
        font-family: var(--font-family);
        color: inherit;
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        padding-left: 13px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        order:2
    }

    
    
    .oeL0C:focus-within {
        color: RGB(var(--black));
        background-color: RGB(var(--white));
    }
    
    .oeL0C .OgtUb > svg {
        order: 1
    }
    

    .OgtUb svg {
        --icon-color-primary: rgba(var(--white-on-dark), .65);
    }  
    
    
    .OgtUb:focus-within svg {
        --icon-color-primary: rgba(var(--black), .65);
    }
    
    .L4V2r.EqbwV::placeholder {
        color: rgba(var(--white-on-dark), .65);
        opacity: 1;
    }
    
    .oeL0C > input:focus::-webkit-input-placeholder {
        color: #B4B4B4;
        opacity: 1;
    }
    
    .zVES4 {
        margin: 0
    }
    
    
    
 
        /*Moves the search bar - Fullscreen + No Sticky*/
        .N5wJr,
        .zmjaW {
            position: absolute;
            top: -79px;
            z-index: 99;
            right: 46vw;
            width: 415px;
        }
    }

    @media (max-width: 1163px) {
        /*Moves the search bar - Smallscreen + No Sticky*/
        .N5wJr,
        .zmjaW {
            position: absolute;
            left: -645px;
            top: -79px;
            z-index: 99;
            width: 280px;
        }
    }


    @media (min-width: 1161.3px) {
        /*Moves the search bar on search pages - Fullscreen + No Sticky*/
        .N5wJr.X7vaQ {
            position: absolute;
            left: -215.5px;
            top: -34px;
            z-index: 99;
            width: 398.8px;
        }
    }

    @media (max-width: 1163px) {
        /*Moves the search bar on search pages - Smallscreen + No Sticky*/
        .N5wJr.X7vaQ {
            position: absolute;
            left: -40px;
            top: -34px;
            z-index: 99;
            width: 264px;
        }
    }

    @media (min-width: 1161.3px) {
        /*Moves the search bar on collections pages - Fullscreen + No Sticky*/
        .N5wJr.QI77K {
            position: absolute;
            left: -782px;
            top: -86px;
            z-index: 99;
            width: 399px;
        }
    }

    @media (max-width: 1163px) {
        /*Moves the search bar on collections pages - Smallscreen + No Sticky*/
        .N5wJr.QI77K {
            position: absolute;
            left: -600px;
            top: -86px;
            z-index: 99;
            width: 264px;
        }
    }


    /*Removes border under icons when menu is active*/
    .IYrO9.XuIoh {
        border-bottom: 0
    }

    /*Moves the user icons*/
    .FtjPK .AD_w7 .JZ10N.y0ud2 {
        top: calc(50px + var(--dashboard-tabs-header-height, 0px))
    }

    /*Nudges the dashboard back into place*/
    .gPQR5.ah4XU {
        max-width: 960px!important;
        margin: -7px;
        padding-top: 31px!important;
        position: relative;
    }

    .hAFp3,
    .XZFs6 .WIYYp .wvu3V,
    .XZFs6 {
        padding-left: 20px;
        padding-right: 20px
    }


    .tOKgq .m5KTc {
        margin: 0 20px;
    }


    .ZkG01 ._3xgk.ZN00W {
        padding-top: 50px;
    }
    /* com/username links positioning*/
    .RkANE.r1Zq6 {
        padding-top: 55px;
        margin: 40px auto 0;
    }

    .FtjPK.hMVn9,
    .wttFd.g77C_ {
        border-radius: 3px!important;
    }

    /*Check out these blocks sidebar*/
    .gPQR5.ah4XU .e1knl {
        padding-left: 9px;
        padding-top: 14px;
    }

    .D5eCV div.ZkG01 div._3xgk.ZN00W div.gPQR5.FGfuE.ah4XU.t8f_N div.e1knl {
        min-width: 320px;
    }
    .PwJi6 {
        width: 99.9%;
    }

    .Q55_h .QfN0z {
        justify-content: center;
        padding: 0 7px;
        display: flex;
    }

    .oNZY7 {
        width: 100%;
        max-width: 310px;
    }

    /*^ for masonry-view searches*/
    .gPQR5.pTaNm.ah4XU {
        max-width: 1601px!important
    }

    /*fix for notes in masonry view if using post-block*/
    .gstmW {
        min-width: 85px
    }

    .ZkG01 ._3xgk.VsR8V.f_ziq {
        padding-left: 50px
    }


    /*Moves the Buttons back to the Header*/
    .ZkG01 .h_Erh {
        flex-basis: 228px;
        flex-basis: 0px;
        margin-right: 0px;
        position: absolute;
        top: 0;
        height: 54px;
        width: 100%;
        border-bottom: 1px solid rgba(var(--white-on-dark), .13);
        background-color: RGB(var(--navy));
    }

    /*Creates the header bar*/
    .FA5JM {
        width: 100%;
        max-width: 100%;
    }


    /*Positions and organises the buttons*/
    .FA5JM .NkkDk .gM9qK {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
        position: absolute;
        z-index: 90;
        right: 80px;
        justify-content: end;
        align-items: center;
        justify-items: end;
        align-content: center;
        width: 100%;
    }

    .FA5JM .NkkDk {
        padding-bottom: 0px;
        height: 54px;
        overflow-x: visible;
        overflow-y: visible;
        justify-content: center;
    }

    .IYrO9 .tDT48 {
        justify-content: flex-start;
    }

    /*Resizes the button icons & Spaces them*/
    .IYrO9 .kn4U3 svg {
        width: 22px;
        height: 21px;
    }
    @media (max-width: 1161.5px) {
        .IYrO9 .kn4U3 {
            position: absolute;
            align-items: center;
        }
        .IYrO9 .tDT48 {
            justify-content: center;
        }
    }

    .gM9qK > .IYrO9,
    .gM9qK > .ZQMrc {
        width: 53px;
    }

    .a132D {
        width: 0
    }

    .jGgIg {
        border-top: none;
        display: flex;
        top: 0;
        position: absolute;
        padding: 10px 16px 12px;
        justify-content: flex-end;
        height: 54px;
        align-content: center;
        align-items: center;
    }

    /*Moves the notification number icons back into place*/
    .a132D > .jF6A2 > .jpu7k.jDcIV.SmqzX.D0OOd.XnKJk {
        min-width: 23px;
        height: 22px;
        border: 2px solid RGB(var(--navy))!important;
        font-size: .78125rem;
        left: -29px;
        top: -9px;
        border-style: none;
        position: relative;
    }

    .FA5JM .jDcIV:not(.SmqzX) {
border: 2px solid RGB(var(--navy)) !important;
border-style: none;
min-width: 23px;
height: 22px;
    top: -9.5px;
left: 13px;
    }


    /*Hides the icon text*/
    .IYrO9.g8SYn .ZC1wz,
    .HHKOH {
        Display: none;
    }

    .xkit--react nav #xkit_button > button > p {
        Display: none;
    }


    @media (max-width: 1162px) {
        /*Moves the Tumblr Logo*/
        .Gav7q {
            justify-content: center;
            padding: 0px;
            display: flex;
            left: 96px;
            position: absolute;
            padding-bottom: 2px;
        }
    }

    @media (min-width: 1162px) {
        /*Moves the Tumblr Logo*/
        .Gav7q {
            justify-content: center;
            padding: 0px;
            display: flex;
            position: absolute;
            left: 100px;
        }
    }

    /*Resizes the create a post button*/
    .jGgIg .ML6ef {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 18px;
        font-size: 0!important;
        margin-right: 2px;
        max-width: 45px;
        border-radius: 3px;
        height: 32px;
    }

    .jGgIg .ML6ef svg {
        margin-left: 7px
    }

    /*Displays Text ONLY in the menus*/
    .jL4Qq:not([hidden]) .tDT48 .a132D .ZC1wz,
    .jL4Qq:not([hidden]) .ZC1wz,
    .PsDsm:not([hidden]) .ZC1wz {
        display: contents !important
    }

    /*Adds the Spacers back into the menu and moves Log Out button*/
    .jL4Qq > .IYrO9 .lXFLr button {
        font-family: var(--font-family);
        background-color: rgba(var(--black), .07);
        box-sizing: border-box;
        z-index: 1;
        justify-content: space-between;
        align-items: center;
        width: 100% !important;
        height: 30px;
        top: 0px;
        font-size: .900rem;
        color: rgba(var(--black), .65);
        font-weight: 400;
        line-height: 1.5;
        display: flex;
        flex-direction: row-reverse;
        position: absolute;
    }

    #account_subnav > li:nth-child(1) {
        display: block !important;
    }
    #account_subnav > li:nth-child(2) {
        display: block !important;
    }
    #account_subnav > li:nth-child(3) {
        display: block !important;
    }
    #account_subnav > li:nth-child(4) {
        display: block !important;
    }


    #account_subnav > li:nth-child(3) > div > span.ZC1wz > button > span:before {
        visibility: visible;
        content: "Account";
        position: absolute;
        left: 10px;
    }

    #account_subnav > li:nth-child(4) > div > span.ZC1wz > button > span {
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.42857;
    }



    .IYrO9 .UyyJb {
        text-align: left;
        width: 100%;
        height: 100%;
    }

    .pBLQq.pvZtw,
    .FA5JM .NkkDk .h8SQv {
        background-color: rgba(var(--black), .07);
        margin: 0 0px;
        padding: 12px 16px;
        font-size: .900rem;
        box-sizing: border-box;
        z-index: 1;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        font-weight: 400;
        color: rgba(var(--black), .65) !important;
    }

    .gD5c2 {
        font-family: var(--font-family);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }

    #account_subnav.jL4Qq {
        width: 240px;
    }


    .a132D,
    .ywBwc .a132D {
        padding: 8px 0;
    }


    .kbIQf > .jpu7k .jDcIV .SmqzX .D0OOd .XnKJk {
        color: rgba(var(--black), .65);
        text-align: right;
        margin-left: 5px;
    }


    /*Moves the menu so it appears over the top and not contained in the header*/
    .jL4Qq {
        margin-bottom: 5px;
        padding: 0;
        top: 53px;
        position: fixed;
        z-index: 1000;
        overflow-x: hidden;
        border-radius: 3px;
        max-height: calc(100vh - 88px);
        overflow-y: auto;
        box-shadow: 0 0 15px rgba(0, 0, 0, .5);
        Right: 17px;
    }

    /*Changes the colour of the Menus (this is set to tumblr Original Blue 
you may need to change it with other colour pallets)*/
    #account_subnav > li.IZU9t > ul > li > div > div > div > a > div > div.QK2Zh > div.gLEkw,
    .jL4Qq > .IYrO9,
    .xstzY,
    .yElCb,
    .XstzY .kbIQf li a {
        color: inherit !important;
    }

    .KXYTk .fTJAC,
    .IYrO9 .jF6A2,
    .XstzY .kbIQf li a .dTeP6 {
        color: rgba(var(--black), .65)!important
    }

    .jL4Qq {
        background: RGB(var(--white));
        color: RGB(var(--black)) !important;
        border: 1px solid rgba(var(--white-on-dark), .13);
    }

    .a132D {
        font-family: var(--font-family);
        color: RGB(var(--black));
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }

    .jL4Qq > .IYrO9 > .tDT48 > .a132D > .jF6A2 {
        font-family: var(--font-family);
        color: rgba(var(--black), .65);
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.5;
        display: inline-block;
    }


    /*Changes menu font size*/
    .IYrO9 {
        cursor: pointer;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.333;
        list-style-type: none;
        display: flex;
    }

    /*Resizes the settings menu*/
    #settings_subnav:not([hidden]) {
        width: 228px;
        height: 426px;
        overflow-y: scroll;
        overflow-x: hidden;
    }


    /*Adjusts Menu's padding layout*/
    .jL4Qq > .IYrO9 .tDT48,
    .jL4Qq > .IYrO9 .lXFLr button {
        min-height: 35px;
        padding: 1px 20px 0 10px;
        width: 240px;
        padding-left: 20px;
    }

    #base-container > div.D5eCV > div > div._3xgk.ZN00W > div > div.e1knl > aside > .MV1bs.x8N5H > div.j1I7U > .So6RQ.YSitt {
        margin-bottom: 2px;
    }
    
    
    .m8mN_.CWSOV {display:none;}
    /*Dont touch this its needed*/
}

}`);
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
  const unfuck = async function () {
    if ($("#__m").length) { //initial status checks to determine whether to inject or not
      console.log("no need to unfuck");
    //   if (!$("#__h").length) { $("#__s").remove() }
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
    // let $fucked = $("<");
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
    // $bluespaceLayout.prepend($headerWrapper);
    // $headerWrapper.append($header)
    // $header.append($logoContainer);
    // $header.append($navigationLinks);
    // $header.append($createPost);
    // $navSubHeader.addClass(keyToClasses("heading").join(" "));
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
      test = await unsafeWindow.tumblr.apiFetch(`/v2/blog/${blog.name}/activity/notes`);
      console.log(test);
      blog.notifications = test.response.newNotes;
      console.log(blog.notifications);
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