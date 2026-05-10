
const VALID_LANGS = ['ja', 'en'];
const DEFAULT_LANG = 'ja';
const LANG_KEY = 'tsui-ip-info-lang';
const THEME_KEY = 'tsui-ip-info-theme';
const SIZE_KEY = 'tsui-ip-info-size';

const VALID_THEMES = ['calm', 'green', 'amber', 'red', 'pink', 'cyber'];
const DEFAULT_THEME = 'calm';
const VALID_SIZES = ['S', 'M', 'L', 'XL'];
const DEFAULT_SIZE = 'S';

const URL_WORKER = 'https://show-ip.hajimetwi3.workers.dev';
const URL_ICANHAZIP_V4 = 'https://ipv4.icanhazip.com';
const URL_SPEEDTEST = 'https://speed.cloudflare.com/__down?bytes=10000000';

const IS_RESTRICTED_ORIGIN = !['http:', 'https:'].includes(location.protocol);

const I18N_DICT = {
  ja: {
    'app.brand': 'TSUI IP INFO',
    'header.btn.lang.title.toEn': 'Switch to English',
    'header.btn.lang.title.toJa': '日本語に切替',
    'header.btn.about.title': 'このアプリについて',

    'transparency.title': '通信先',
    'transparency.endpoint.label': 'endpoint',
    'transparency.fetches.label': 'fetches',
    'transparency.fetches.value': 'IP / ASN / 地域 / ネットワーク情報 / スピード',
    'transparency.storage.label': 'storage',
    'transparency.storage.value': 'なし(取得情報は表示のみ。設定のみ localStorage)',

    'info.heading': 'IP・ネットワーク',
    'info.desc': '外部ホストから見える、あなたの接続情報を取得します。取得結果は画面表示にのみ使用し、保存・解析は行いません。',
    'info.btn.get': '情報を取得',
    'info.btn.refetch': '再取得',
    'info.btn.copyText': 'テキストとしてコピー',
    'info.btn.copyJson': 'JSONとしてコピー',
    'info.btn.downloadJson': 'JSONをダウンロード',
    'info.copy.notice': '※ 追加調査を実施した場合、その内容もコピー / ダウンロードに含まれます。',
    'info.empty': '未取得。「情報を取得」ボタンを押してください。',
    'info.notice.restricted': '<strong>※ ローカル起動 (file://, content:// 等) では「情報を取得」は動作しません。</strong>Worker 側のオリジン制限によるもので、スピードテストは利用可能です。公式配信からご利用ください: <a href="https://tsuiipinfo.pages.dev/" target="_blank" rel="noopener noreferrer">tsuiipinfo.pages.dev</a>',
    'info.status.loading': '取得中…',
    'info.status.done': '取得完了',
    'info.error.rateLimit': 'アクセス制限中です。少し時間を空けてから再度お試しください。',
    'info.error.network': 'ネットワークエラーが発生しました。接続をご確認のうえ、再度お試しください。',
    'info.error.worker': 'サーバ側でエラーが発生しました。しばらく時間を空けて再度お試しください。',
    'info.error.timeout': 'タイムアウトしました。ネットワーク状態をご確認ください。',

    'row.ipWorker': 'IP (Worker)',
    'row.ipv4': 'IPv4 (icanhazip)',
    'row.timestamp': '取得日時',
    'row.isp': '事業者 (ISP)',
    'row.asn': 'AS番号',
    'row.cityRegion': '都市 / 地域',
    'row.postalCode': '郵便番号',
    'row.coordinates': '位置 (緯度, 経度)',
    'row.timezone': 'タイムゾーン',
    'row.referer': 'Referer',
    'row.xForwardedFor': 'X-Forwarded-For',
    'row.via': 'Via',
    'row.forwarded': 'Forwarded',
    'row.userAgent': 'User-Agent (HTTP)',
    'row.userAgentNav': 'User-Agent (navigator)',
    'row.tlsVersion': 'TLS バージョン',
    'row.httpProtocol': 'HTTP プロトコル',
    'row.acceptLanguage': '言語 (HTTP)',
    'row.langNav': '言語 (navigator)',
    'row.screenSize': '画面サイズ',
    'row.outerSize': 'window.outer',
    'row.innerSize': 'window.inner',
    'row.dpr': 'devicePixelRatio',
    'row.cpuCores': 'CPU コア数',
    'row.deviceMemory': 'メモリ (推定)',
    'row.platform': 'プラットフォーム',
    'row.connection': '接続情報',

    'row.acceptEncoding': '受信圧縮 (Accept-Encoding)',
    'row.dnt': 'Do Not Track',
    'row.secChUa': 'UA Brands (Sec-Ch-Ua)',
    'row.secChUaMobile': 'モバイル (Sec-Ch-Ua-Mobile)',
    'row.secChUaPlatform': 'プラットフォーム (Sec-Ch-Ua-Platform)',
    'row.secChUaPlatformVersion': 'プラットフォーム Ver (Sec-Ch-Ua-Platform-Version)',
    
    'row.languages': '言語リスト (navigator.languages)',
    'row.webdriver': '自動化検知 (navigator.webdriver)',
    'webdriver.detected': 'true (自動化検知あり)',
    'webdriver.notDetected': 'false',
    'row.uaHighEntropy': 'UA-CH 詳細 (getHighEntropyValues)',
    
    'row.tzClient': 'タイムゾーン (クライアント側)',
    'row.tzMatch': 'タイムゾーン整合性',
    'tz.match.ok': '整合 (一致)',
    'tz.match.mismatch': '不一致 — VPN/Proxy 経由の可能性',
    
    'row.colo': 'CF データセンター',
    'row.clientTcpRtt': 'TCP RTT (クライアント↔CF)',
    'rtt.naHttp3': 'N/A (HTTP/3 / QUIC のため)',
    'row.tlsCipher': 'TLS 暗号スイート',

    'speed.heading': 'スピードテスト',
    'speed.desc': 'Cloudflare のテストエンドポイントから 10MB のデータを取得し、ダウンロード速度を簡易測定します。値はあくまで目安です。',
    'speed.btn.run': 'スピードテスト実行',
    'speed.btn.rerun': '再測定',
    'speed.empty': '未測定。「スピードテスト実行」ボタンを押してください。',
    'speed.status.measuring': '測定中…(約10秒)',
    'speed.status.done': '測定完了',
    'speed.headline.unit': 'Mbps',
    'speed.detail.size': 'サイズ',
    'speed.detail.elapsed': '所要時間',
    'speed.detail.ttfb': '初回応答 (TTFB)',
    'speed.error.failed': '測定に失敗しました。再度お試しください。',
    'speed.error.timeout': 'タイムアウトしました。ネットワーク状態をご確認ください。',

    'extra.heading': '追加調査 (FINGERPRINT 詳細)',
    'extra.desc': '通常のサイト訪問でも取得可能な、フィンガープリントに使われる代表的な情報です。教育目的での可視化です。',
    'extra.btn.scan': '追加調査を実行',
    'extra.btn.rescan': '再実行',
    'extra.empty': '未実行。「追加調査を実行」ボタンを押してください。',
    'extra.status.running': '実行中…',
    'extra.status.done': '完了',
    'extra.error.failed': '一部または全部の取得に失敗しました。',
    'row.webglRenderer': 'WebGL Renderer',
    'row.webglVendor': 'WebGL Vendor',
    'row.webglUnmaskedRenderer': 'WebGL Unmasked Renderer',
    'row.webglUnmaskedVendor': 'WebGL Unmasked Vendor',
    'row.canvasFp': 'Canvas Fingerprint (SHA-256)',
    'row.localIps': 'WebRTC ローカル IP',
    'extra.localIps.none': '取得不可 (ブラウザ非対応 or 通信失敗)',
    'extra.localIps.realPrefix': '実 IP',
    'extra.localIps.mdnsSuffix': '個の mDNS アドレス (実 IP は隠蔽されています)',
    'extra.notice': '<p>※ これらは通常のサイト訪問でも取得可能な情報です。トラッキングに使われる代表例として表示しています。</p><ul><li><strong>WebGL Renderer / Vendor</strong>: ブラウザ越しに見える GPU の型番情報。Firefox 等では既定で mask される場合がありますが、masked 値だけでも一定の識別性を持ちます。</li><li><strong>Canvas Fingerprint (SHA-256)</strong>: ブラウザに標準的な画像を描かせ、その出力をハッシュ化した値です。GPU・OS・フォント・アンチエイリアス設定の差で環境ごとに微妙に異なる値になり、Cookie や localStorage を使わずにユーザーを識別する手段として使われます (シークレットモードでも同じ値が出ます)。<small class="cite-ref">※ Canvas Fingerprinting: Keaton Mowery &amp; Hovav Shacham (UC San Diego), &quot;Pixel Perfect: Fingerprinting Canvas in HTML5&quot; (W2SP 2012, https://hovav.net/ucsd/dist/canvas.pdf)</small></li><li><strong>WebRTC ローカル IP</strong>: WebRTC の ICE 交換時に漏れる可能性のある内部 IP アドレス。Chrome 等は通常 mDNS (<code>*.local</code>) でマスクします。VPN 経由でもこの経路でローカル IP が漏洩することがあるため、VPN リーク監査の指標としても使われます。</li></ul>',

    'unit.seconds': '秒',
    'unit.ms': 'ms',
    'unit.megabytes': 'MB',
    'unit.unknown': '不明',
    'unit.unavailable': '取得不可',

    'settings.theme.label': 'Theme',
    'settings.theme.calm': 'calm(既定)',
    'settings.theme.green': 'green',
    'settings.theme.amber': 'amber',
    'settings.theme.red': 'red',
    'settings.theme.pink': 'pink',
    'settings.theme.cyber': 'cyber',
    'settings.size.label': 'Size',

    'about.modalTitle': 'ABOUT',
    'about.close': '閉じる',
    'about.section.about': 'About',
    'about.section.about.body': '<strong>Tsui IP Info</strong> はブラウザで動く、IP アドレス・ASN・地域・接続情報の表示ツールです。Cloudflare Worker と icanhazip から、外部から見える自分の接続情報を取得して表示します。10MB のスピードテスト機能も付属しています。',
    'about.section.endpoints': 'External requests',
    'about.section.endpoints.intro': '本アプリ本体が通信する外部エンドポイントは以下に限られます。',
    'about.section.endpoints.csp': '通信先は Content Security Policy の <code>connect-src</code> ディレクティブで上記 3 ホストに限定されています。DevTools の Network タブで実際の通信を確認できます。',
    'about.section.privacy': 'Privacy',
    'about.section.privacy.p1': '取得した IP・ASN・地域などの情報、および「追加調査」セクションの結果は、画面表示・コピー・ユーザー操作による JSON ダウンロードにのみ使用し、<code>localStorage</code> や <code>IndexedDB</code> には保存しません。',
    'about.section.privacy.p2': 'UI 設定(言語・テーマ・フォントサイズ)のみ <code>localStorage</code> に保存します。これらは個人情報を含みません。',
    'about.section.privacy.p3': '本アプリ本体には、利用者追跡を目的とした Analytics / 広告タグ / 外部送信型トラッキングは含まれていません(取得情報は本人への画面表示専用です)。なお、別途プラットフォーム側(配信元サーバ・接続事業者・Cloudflare 等)でアクセスログが記録される可能性はあります。',
    'about.section.privacy.p4': '作者プロフィールや Tsui series のランディングページ等の情報ページでは、訪問数の把握に Cloudflare Web Analytics を利用しています(Cookie なし / フィンガープリントなし / クロスサイトトラッキングなし)。本アプリ本体には組み込まれていません。',
    'endpoints.worker': 'IP / ASN / geo / network 情報 (Cloudflare Workers 上に作者がデプロイ)',
    'endpoints.icanhazip': 'IPv4 アドレス (生テキスト、Cloudflare 運営)',
    'endpoints.speed': '10MB ダウンロードによるスピードテスト (Cloudflare)',
    'about.section.disclaimer': 'Disclaimer',
    'about.section.disclaimer.body': '本アプリは現状有姿で提供され、動作の正確性・可用性について一切の保証はありません。スピードテストの値は目安です。ご利用は自己責任にてお願いします。',
    'about.section.license': 'License',
    'about.section.license.copyright': 'Copyright (c) 2026 <a href="https://hajimetwi3.github.io/hajimetwi3/" target="_blank" rel="noopener noreferrer">Hajime Tsui</a>',
    'about.section.related': 'Related',
    'about.section.related.series': '本アプリは <a href="https://hajimetwi3.github.io/hajimetwi3/Tsui-series/" target="_blank" rel="noopener noreferrer">Tsui series</a>(静かな道具たち)の一つです。',

    'toast.copied': 'コピーしました',
    'toast.copyFailed': 'コピーに失敗しました',
  },
  en: {
    'app.brand': 'TSUI IP INFO',
    'header.btn.lang.title.toEn': 'Switch to English',
    'header.btn.lang.title.toJa': '日本語に切替',
    'header.btn.about.title': 'About this app',

    'transparency.title': 'EXTERNAL REQUESTS',
    'transparency.endpoint.label': 'endpoint',
    'transparency.fetches.label': 'fetches',
    'transparency.fetches.value': 'IP / ASN / geo / network info / speed',
    'transparency.storage.label': 'storage',
    'transparency.storage.value': 'none (display only; settings stored in localStorage)',

    'info.heading': 'IP & NETWORK',
    'info.desc': 'Fetches the connection info that external hosts can see about you. Results are used only for display; nothing is saved or analyzed.',
    'info.btn.get': 'Get info',
    'info.btn.refetch': 'Refetch',
    'info.btn.copyText': 'Copy as text',
    'info.btn.copyJson': 'Copy as JSON',
    'info.btn.downloadJson': 'Download as JSON',
    'info.copy.notice': 'Note: If extra scan has been run, its results are also included in copy / download.',
    'info.empty': 'Not fetched yet. Press "Get info" to retrieve.',
    'info.notice.restricted': '<strong>Note: When started from a local origin (file://, content://, etc.), "Get info" does not work.</strong>This is due to the Worker\'s origin policy. The speed test still works. Please use the official URL: <a href="https://tsuiipinfo.pages.dev/" target="_blank" rel="noopener noreferrer">tsuiipinfo.pages.dev</a>',
    'info.status.loading': 'Fetching…',
    'info.status.done': 'Fetched.',
    'info.error.rateLimit': 'Rate limit exceeded. Please wait a moment and try again.',
    'info.error.network': 'Network error. Please check your connection and try again.',
    'info.error.worker': 'Server-side error. Please try again later.',
    'info.error.timeout': 'Timed out. Please check your network condition.',

    'row.ipWorker': 'IP (Worker)',
    'row.ipv4': 'IPv4 (icanhazip)',
    'row.timestamp': 'Timestamp',
    'row.isp': 'ISP',
    'row.asn': 'AS number',
    'row.cityRegion': 'City / Region',
    'row.postalCode': 'Postal code',
    'row.coordinates': 'Coordinates (lat, lon)',
    'row.timezone': 'Timezone',
    'row.referer': 'Referer',
    'row.xForwardedFor': 'X-Forwarded-For',
    'row.via': 'Via',
    'row.forwarded': 'Forwarded',
    'row.userAgent': 'User-Agent (HTTP)',
    'row.userAgentNav': 'User-Agent (navigator)',
    'row.tlsVersion': 'TLS version',
    'row.httpProtocol': 'HTTP protocol',
    'row.acceptLanguage': 'Language (HTTP)',
    'row.langNav': 'Language (navigator)',
    'row.screenSize': 'Screen size',
    'row.outerSize': 'window.outer',
    'row.innerSize': 'window.inner',
    'row.dpr': 'devicePixelRatio',
    'row.cpuCores': 'CPU cores',
    'row.deviceMemory': 'Memory (estimate)',
    'row.platform': 'Platform',
    'row.connection': 'Connection',

    'row.acceptEncoding': 'Accept-Encoding',
    'row.dnt': 'Do Not Track',
    'row.secChUa': 'UA Brands (Sec-Ch-Ua)',
    'row.secChUaMobile': 'Mobile (Sec-Ch-Ua-Mobile)',
    'row.secChUaPlatform': 'Platform (Sec-Ch-Ua-Platform)',
    'row.secChUaPlatformVersion': 'Platform Ver (Sec-Ch-Ua-Platform-Version)',
    
    'row.languages': 'Languages (navigator.languages)',
    'row.webdriver': 'Automation (navigator.webdriver)',
    'webdriver.detected': 'true (automation detected)',
    'webdriver.notDetected': 'false',
    'row.uaHighEntropy': 'UA-CH Details (getHighEntropyValues)',
    
    'row.tzClient': 'Timezone (client-side)',
    'row.tzMatch': 'Timezone consistency',
    'tz.match.ok': 'Consistent (match)',
    'tz.match.mismatch': 'Mismatch — possible VPN/Proxy',
    
    'row.colo': 'CF data center',
    'row.clientTcpRtt': 'TCP RTT (client↔CF)',
    'rtt.naHttp3': 'N/A (using HTTP/3 / QUIC)',
    'row.tlsCipher': 'TLS cipher suite',

    'speed.heading': 'SPEED TEST',
    'speed.desc': 'Downloads a 10MB test file from a Cloudflare endpoint to measure download throughput. Approximate values only.',
    'speed.btn.run': 'Run speed test',
    'speed.btn.rerun': 'Run again',
    'speed.empty': 'Not measured yet. Press "Run speed test".',
    'speed.status.measuring': 'Measuring… (~10s)',
    'speed.status.done': 'Measured.',
    'speed.headline.unit': 'Mbps',
    'speed.detail.size': 'Size',
    'speed.detail.elapsed': 'Elapsed',
    'speed.detail.ttfb': 'TTFB',
    'speed.error.failed': 'Measurement failed. Please try again.',
    'speed.error.timeout': 'Timed out. Please check your network condition.',

    'extra.heading': 'EXTRA SCAN (FINGERPRINT DETAILS)',
    'extra.desc': 'Representative information used by browser fingerprinting, all retrievable during normal site visits. Shown here for educational visibility.',
    'extra.btn.scan': 'Run extra scan',
    'extra.btn.rescan': 'Re-run',
    'extra.empty': 'Not run yet. Press "Run extra scan".',
    'extra.status.running': 'Running…',
    'extra.status.done': 'Done.',
    'extra.error.failed': 'Some or all measurements failed.',
    'row.webglRenderer': 'WebGL Renderer',
    'row.webglVendor': 'WebGL Vendor',
    'row.webglUnmaskedRenderer': 'WebGL Unmasked Renderer',
    'row.webglUnmaskedVendor': 'WebGL Unmasked Vendor',
    'row.canvasFp': 'Canvas Fingerprint (SHA-256)',
    'row.localIps': 'WebRTC local IPs',
    'extra.localIps.none': 'Not retrievable (browser unsupported or connection failed)',
    'extra.localIps.realPrefix': 'Real IPs',
    'extra.localIps.mdnsSuffix': 'mDNS addresses (real IPs are masked)',
    'extra.notice': '<p>Note: All values above are retrievable during normal site visits. Shown here as representative examples used in tracking.</p><ul><li><strong>WebGL Renderer / Vendor</strong>: GPU model information visible to the browser. Firefox and others may mask it by default, but even the masked value still carries some identifiability.</li><li><strong>Canvas Fingerprint (SHA-256)</strong>: A hash of the output produced by drawing a standard image in the browser. Differences in GPU, OS, fonts, and anti-aliasing yield subtly different values per environment, allowing user identification without Cookies or localStorage (the same value appears in incognito mode).<small class="cite-ref">Reference — Canvas Fingerprinting: Keaton Mowery &amp; Hovav Shacham (UC San Diego), &quot;Pixel Perfect: Fingerprinting Canvas in HTML5&quot; (W2SP 2012, https://hovav.net/ucsd/dist/canvas.pdf)</small></li><li><strong>WebRTC local IPs</strong>: Internal IP addresses that may leak during WebRTC ICE exchange. Chrome and others typically mask them via mDNS (<code>*.local</code>). Local IPs can leak even through a VPN via this path, so this is also used as a VPN-leak audit indicator.</li></ul>',

    'unit.seconds': 's',
    'unit.ms': 'ms',
    'unit.megabytes': 'MB',
    'unit.unknown': 'unknown',
    'unit.unavailable': 'not available',

    'settings.theme.label': 'Theme',
    'settings.theme.calm': 'calm (default)',
    'settings.theme.green': 'green',
    'settings.theme.amber': 'amber',
    'settings.theme.red': 'red',
    'settings.theme.pink': 'pink',
    'settings.theme.cyber': 'cyber',
    'settings.size.label': 'Size',

    'about.modalTitle': 'ABOUT',
    'about.close': 'Close',
    'about.section.about': 'About',
    'about.section.about.body': '<strong>Tsui IP Info</strong> is a browser tool that displays your IP address, ASN, region, and connection information. It fetches data via a Cloudflare Worker and icanhazip to show what external hosts can see. A 10MB speed test is also included.',
    'about.section.endpoints': 'External requests',
    'about.section.endpoints.intro': 'This app communicates with the following external endpoints, and only these:',
    'about.section.endpoints.csp': 'These endpoints are restricted by the <code>connect-src</code> directive of the Content Security Policy. You can verify the actual traffic in DevTools\' Network tab.',
    'about.section.privacy': 'Privacy',
    'about.section.privacy.p1': 'Fetched IP, ASN, region, and similar information, as well as Extra Scan results, are used only for on-screen display, copy, and user-initiated JSON download — they are not saved to <code>localStorage</code> or <code>IndexedDB</code>.',
    'about.section.privacy.p2': 'Only UI settings (language, theme, font size) are stored in <code>localStorage</code>. These contain no personal information.',
    'about.section.privacy.p3': 'This app contains no Analytics, ad tags, or external tracking aimed at user identification (the fetched information is shown to the user only). Note that the underlying platform (origin server, ISP, Cloudflare, etc.) may log requests separately.',
    'about.section.privacy.p4': 'Cloudflare Web Analytics is used on the author profile pages and the Tsui series landing page (no cookies, no fingerprinting, no cross-site tracking). It is not embedded in this app itself.',
    'endpoints.worker': 'IP / ASN / geo / network info (Cloudflare Worker deployed by the author)',
    'endpoints.icanhazip': 'IPv4 address (raw text, operated by Cloudflare)',
    'endpoints.speed': 'Speed test via 10MB download (Cloudflare)',
    'about.section.disclaimer': 'Disclaimer',
    'about.section.disclaimer.body': 'This software is provided "as is", with no guarantee of correctness or availability. Speed test values are approximate. Use at your own risk.',
    'about.section.license': 'License',
    'about.section.license.copyright': 'Copyright (c) 2026 <a href="https://hajimetwi3.github.io/hajimetwi3/" target="_blank" rel="noopener noreferrer">Hajime Tsui</a>',
    'about.section.related': 'Related',
    'about.section.related.series': 'This app is one of <a href="https://hajimetwi3.github.io/hajimetwi3/Tsui-series/" target="_blank" rel="noopener noreferrer">Tsui series</a> (the quiet little tools).',

    'toast.copied': 'Copied.',
    'toast.copyFailed': 'Copy failed.',
  },
};

function detectInitialLang() {
  try {
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('ja')) return 'ja';
    return 'en';
  } catch { return DEFAULT_LANG; }
}

let currentLang = (() => {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (VALID_LANGS.includes(v)) return v;
  } catch {}
  return detectInitialLang();
})();

function setLang(lang) {
  if (!VALID_LANGS.includes(lang)) return false;
  currentLang = lang;
  return true;
}

function tr(key, vars) {
  const cur = I18N_DICT[currentLang];
  let str = cur && Object.prototype.hasOwnProperty.call(cur, key) ? cur[key] : null;
  if (str == null) {
    const fb = I18N_DICT[DEFAULT_LANG];
    str = fb && Object.prototype.hasOwnProperty.call(fb, key) ? fb[key] : key;
  }
  if (vars && typeof str === 'string') {
    str = str.replace(/\{(\w+)\}/g, (m, k) => Object.prototype.hasOwnProperty.call(vars, k) ? vars[k] : m);
  }
  return str;
}

function renderI18n(root) {
  const r = root || document;
  r.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = tr(key);
  });
  r.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    if (!spec) return;
    for (const pair of spec.split('|')) {
      const eq = pair.indexOf('=');
      if (eq < 0) continue;
      const attr = pair.slice(0, eq).trim();
      const key = pair.slice(eq + 1).trim();
      if (attr && key) el.setAttribute(attr, tr(key));
    }
  });
  r.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key) el.innerHTML = tr(key);
  });
  document.documentElement.setAttribute('lang', currentLang);
}

function readSetting(key, validList, fallback) {
  try {
    const v = localStorage.getItem(key);
    if (validList.includes(v)) return v;
  } catch {}
  return fallback;
}

function applyTheme(theme) {
  if (theme === DEFAULT_THEME) {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  document.querySelectorAll('.theme-dot').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === theme);
  });
}

function setTheme(theme) {
  if (!VALID_THEMES.includes(theme)) return;
  applyTheme(theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch {}
}

function applySize(size) {
  document.documentElement.setAttribute('data-size', size);
  document.querySelectorAll('.size-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.size === size);
  });
}

function setSize(size) {
  if (!VALID_SIZES.includes(size)) return;
  applySize(size);
  try { localStorage.setItem(SIZE_KEY, size); } catch {}
}

let toastTimer = null;

function showToast(text) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = text;
  el.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('show');
    toastTimer = null;
  }, 1800);
}

function openModal() {
  const m = document.getElementById('modal-about');
  if (!m) return;
  m.classList.add('show');
  m.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  const m = document.getElementById('modal-about');
  if (!m) return;
  m.classList.remove('show');
  m.setAttribute('aria-hidden', 'true');
}

async function fetchJsonWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (response.status === 429) {
      throw Object.assign(new Error('rate-limit'), { kind: 'rate-limit' });
    }
    if (!response.ok) {
      throw Object.assign(new Error('worker-error'), { kind: 'worker-error' });
    }
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function fetchTextWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error('http-error');
    return (await response.text()).trim();
  } finally {
    clearTimeout(timer);
  }
}

async function fetchBlobWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const startTime = performance.now();
  try {
    const response = await fetch(url, { ...(options || {}), signal: controller.signal });
    const ttfb = performance.now() - startTime;
    if (!response.ok) throw new Error('speed-not-ok');
    const blob = await response.blob();
    const totalMs = performance.now() - startTime;
    return { blob, ttfb, totalMs };
  } finally {
    clearTimeout(timer);
  }
}

function appendKV(dl, label, value) {
  const dt = document.createElement('dt');
  dt.textContent = label;
  const dd = document.createElement('dd');
  dd.textContent = value;
  dl.appendChild(dt);
  dl.appendChild(dd);
}

function appendSep(dl) {
  const sep = document.createElement('div');
  sep.className = 'group-sep';
  dl.appendChild(sep);
}

function clearChildren(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

function appendStateMessage(parent, className, text) {
  const div = document.createElement('div');
  div.className = className;
  div.textContent = text;
  parent.appendChild(div);
}

let lastResult = null; 

async function fetchInfo() {
  const btn = document.getElementById('btn-fetch');
  const status = document.getElementById('info-status');
  const card = document.getElementById('info-card');
  const copyRow = document.getElementById('info-copy-row');

  btn.disabled = true;
  btn.textContent = tr('info.status.loading');
  status.textContent = '';
  clearChildren(card);
  copyRow.classList.add('is-hidden');
  const copyNoticeEl = document.getElementById('info-copy-notice');
  if (copyNoticeEl) copyNoticeEl.classList.add('is-hidden');

  appendStateMessage(card, 'data-empty', tr('info.status.loading'));

  
  
  const workerPromise = fetchJsonWithTimeout(URL_WORKER, 10000);

  const ipv4Promise = fetchTextWithTimeout(URL_ICANHAZIP_V4, 10000)
    .catch(() => null);

  let workerData;
  try {
    workerData = await workerPromise;
  } catch (e) {
    btn.disabled = false;
    btn.textContent = tr('info.btn.get');
    clearChildren(card);
    let key = 'info.error.network';
    if (e && e.name === 'AbortError') key = 'info.error.timeout';
    else if (e && e.kind === 'rate-limit') key = 'info.error.rateLimit';
    else if (e && e.kind === 'worker-error') key = 'info.error.worker';
    appendStateMessage(card, 'data-error', tr(key));
    return;
  }

  const ipv4 = await ipv4Promise;

  let uaHighEntropy = null;
  if (navigator.userAgentData && typeof navigator.userAgentData.getHighEntropyValues === 'function') {
    try {
      uaHighEntropy = await navigator.userAgentData.getHighEntropyValues([
        'architecture', 'bitness', 'model', 'platform', 'platformVersion',
        'uaFullVersion', 'fullVersionList', 'wow64',
      ]);
    } catch {
      uaHighEntropy = null;
    }
  }

  let clientTimezone = tr('unit.unknown');
  try {
    clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || tr('unit.unknown');
  } catch {}

  
  
  const isUnknownVal = (v) =>
    v == null || v === '' || v === 'unknown'
    || v === tr('unit.unknown') || v === tr('unit.unavailable');
  const workerTz = workerData.timezone;
  let tzMatchOk = null;
  let tzMatchText = tr('unit.unavailable');
  if (!isUnknownVal(workerTz) && !isUnknownVal(clientTimezone)) {
    tzMatchOk = clientTimezone === workerTz;
    tzMatchText = tzMatchOk ? tr('tz.match.ok') : tr('tz.match.mismatch');
  }

  

  let connInfo = 'unknown';
  if (navigator.connection) {
    const c = navigator.connection;
    const eff = c.effectiveType || 'unknown';
    const dl = (c.downlink != null) ? `${c.downlink}` : 'unknown';
    const ty = c.type || 'unknown';
    const rtt = (c.rtt != null) ? `${c.rtt}` : 'unknown';
    connInfo = `effectiveType: ${eff}, downlink: ${dl} Mbps, type: ${ty}, rtt: ${rtt} ${tr('unit.ms')}`;
  }

  const safe = (v) => (v == null || v === '') ? tr('unit.unavailable') : String(v);

  const basicRows = [
    [tr('row.ipWorker'), safe(workerData.ip)],
    [tr('row.ipv4'), ipv4 == null ? tr('unit.unavailable') : ipv4],
    [tr('row.timestamp'), safe(workerData.timestamp)],
    [tr('row.isp'), safe(workerData.isp)],
    [tr('row.asn'), workerData.asn ? `AS${workerData.asn}` : tr('unit.unavailable')],
    [tr('row.cityRegion'), `${safe(workerData.city)} / ${safe(workerData.region)}`],
    [tr('row.postalCode'), safe(workerData.postalCode)],
    [tr('row.coordinates'), `${safe(workerData.latitude)}, ${safe(workerData.longitude)}`],
    [tr('row.timezone'), safe(workerData.timezone)],
    
    [tr('row.tzClient'), clientTimezone],
    [tr('row.tzMatch'), tzMatchText],
    
    [tr('row.colo'), safe(workerData.colo)],
    [tr('row.clientTcpRtt'), (() => {

      const proto = workerData.httpProtocol || '';
      if (proto.startsWith('HTTP/3')) return tr('rtt.naHttp3');
      const rtt = workerData.clientTcpRtt;
      return (rtt != null && rtt !== 'unknown' && rtt !== 0)
        ? `${rtt} ${tr('unit.ms')}`
        : tr('unit.unavailable');
    })()],
    [tr('row.tlsCipher'), safe(workerData.tlsCipher)],
  ];
  const headerRows = [
    [tr('row.referer'), safe(workerData.referer)],
    [tr('row.xForwardedFor'), safe(workerData.xForwardedFor)],
    [tr('row.via'), safe(workerData.via)],
    [tr('row.forwarded'), safe(workerData.forwarded)],
    [tr('row.userAgent'), safe(workerData.userAgent)],
    [tr('row.tlsVersion'), safe(workerData.tlsVersion)],
    [tr('row.httpProtocol'), safe(workerData.httpProtocol)],
    [tr('row.acceptLanguage'), safe(workerData.acceptLanguage)],
    
    [tr('row.acceptEncoding'), safe(workerData.acceptEncoding)],
    [tr('row.dnt'), safe(workerData.dnt)],
    [tr('row.secChUa'), safe(workerData.secChUa)],
    [tr('row.secChUaMobile'), safe(workerData.secChUaMobile)],
    [tr('row.secChUaPlatform'), safe(workerData.secChUaPlatform)],
    [tr('row.secChUaPlatformVersion'), safe(workerData.secChUaPlatformVersion)],
  ];
  const clientRows = [
    [tr('row.userAgentNav'), navigator.userAgent || tr('unit.unknown')],
    [tr('row.langNav'), navigator.language || tr('unit.unknown')],
    
    [tr('row.languages'), (navigator.languages && navigator.languages.length)
      ? navigator.languages.join(', ') : tr('unit.unknown')],
    [tr('row.webdriver'), navigator.webdriver === true ? tr('webdriver.detected')
      : navigator.webdriver === false ? tr('webdriver.notDetected') : tr('unit.unknown')],
    [tr('row.uaHighEntropy'), uaHighEntropy
      ? JSON.stringify(uaHighEntropy) : tr('unit.unavailable')],
    [tr('row.screenSize'), `${screen.width}×${screen.height}`],
    [tr('row.outerSize'), `${window.outerWidth}×${window.outerHeight}`],
    [tr('row.innerSize'), `${window.innerWidth}×${window.innerHeight}`],
    [tr('row.dpr'), String(window.devicePixelRatio)],
    [tr('row.cpuCores'), navigator.hardwareConcurrency != null ? String(navigator.hardwareConcurrency) : tr('unit.unknown')],
    [tr('row.deviceMemory'), navigator.deviceMemory != null ? `${navigator.deviceMemory} GB` : tr('unit.unknown')],
    [tr('row.platform'), navigator.platform || tr('unit.unknown')],
    [tr('row.connection'), connInfo],
  ];

  clearChildren(card);
  const dl = document.createElement('dl');
  dl.className = 'data-rows';

  basicRows.forEach(([k, v]) => appendKV(dl, k, v));
  appendSep(dl);
  headerRows.forEach(([k, v]) => appendKV(dl, k, v));
  appendSep(dl);
  clientRows.forEach(([k, v]) => appendKV(dl, k, v));

  card.appendChild(dl);

  lastResult = {
    rows: [...basicRows, ...headerRows, ...clientRows],
    data: {
      worker: workerData,
      ipv4: ipv4,
      navigator: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: (navigator.languages && navigator.languages.length) ? [...navigator.languages] : null,
        webdriver: navigator.webdriver === true ? true : navigator.webdriver === false ? false : null,
        platform: navigator.platform,
        hardwareConcurrency: navigator.hardwareConcurrency != null ? navigator.hardwareConcurrency : null,
        deviceMemory: navigator.deviceMemory != null ? navigator.deviceMemory : null,
        connection: navigator.connection ? {
          effectiveType: navigator.connection.effectiveType || null,
          downlink: navigator.connection.downlink != null ? navigator.connection.downlink : null,
          type: navigator.connection.type || null,
          rtt: navigator.connection.rtt != null ? navigator.connection.rtt : null,
        } : null,
        userAgentDataHighEntropy: uaHighEntropy,
      },
      clientTimezone: clientTimezone,
      timezoneMatch: tzMatchOk,
      screen: { width: screen.width, height: screen.height },
      window: {
        outerWidth: window.outerWidth, outerHeight: window.outerHeight,
        innerWidth: window.innerWidth, innerHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
      },
    },
  };

  copyRow.classList.remove('is-hidden');
  const copyNotice = document.getElementById('info-copy-notice');
  if (copyNotice) copyNotice.classList.remove('is-hidden');
  status.textContent = tr('info.status.done');
  btn.disabled = false;
  btn.textContent = tr('info.btn.refetch');
}

function getWebGLInfo() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      return { renderer: 'unsupported', vendor: 'unsupported',
               unmaskedRenderer: null, unmaskedVendor: null };
    }
    const renderer = gl.getParameter(gl.RENDERER);
    const vendor = gl.getParameter(gl.VENDOR);
    let unmaskedRenderer = null;
    let unmaskedVendor = null;
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    if (dbg) {
      try { unmaskedRenderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL); } catch {}
      try { unmaskedVendor = gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL); } catch {}
    }
    return { renderer, vendor, unmaskedRenderer, unmaskedVendor };
  } catch {
    return { renderer: 'error', vendor: 'error',
             unmaskedRenderer: null, unmaskedVendor: null };
  }
}

async function getCanvasFingerprint() {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 130;
    const ctx = canvas.getContext('2d');
    if (!ctx) return 'unsupported';

    

    

    

    

    const text = 'Tsui IP Info 🌱 — Canvas FP, あいうえお Cwm fjordbank glyphs';

    ctx.textBaseline = 'top';
    ctx.font = '14px "Arial"';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.font = '11pt no-real-font-123'; 
    ctx.fillText(text, 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.2)';
    ctx.font = '18pt Arial';
    ctx.fillText(text, 4, 45);

    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = 'rgb(255, 0, 255)';
    ctx.beginPath();
    ctx.arc(50, 90, 40, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgb(0, 255, 255)';
    ctx.beginPath();
    ctx.arc(100, 90, 40, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgb(255, 255, 0)';
    ctx.beginPath();
    ctx.arc(75, 110, 40, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgb(255, 0, 255)';
    ctx.beginPath();
    ctx.arc(75, 100, 75, 0, Math.PI * 2, true);
    ctx.arc(75, 100, 25, 0, Math.PI * 2, true);
    ctx.fill('evenodd');

    const dataUrl = canvas.toDataURL();
    
    const encoder = new TextEncoder();
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(dataUrl));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return 'error';
  }
}

function getLocalIPsViaWebRTC() {
  return new Promise((resolve) => {
    const ips = new Set();
    let pc;
    const timeoutMs = 3000;
    const timer = setTimeout(() => {
      try { if (pc) pc.close(); } catch {}
      resolve([...ips]);
    }, timeoutMs);

    try {
      pc = new RTCPeerConnection({ iceServers: [] });
    } catch {
      clearTimeout(timer);
      resolve([]);
      return;
    }
    try { pc.createDataChannel(''); } catch {}
    pc.onicecandidate = (e) => {
      if (!e.candidate) {
        clearTimeout(timer);
        try { pc.close(); } catch {}
        resolve([...ips]);
        return;
      }
      const cand = e.candidate.candidate || '';

      
      
      const parts = cand.split(' ');
      if (parts.length >= 5) {
        const addr = parts[4];
        const isV4 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(addr);
        const isV6 = /^[0-9a-f:]+$/i.test(addr) && addr.includes(':');
        const isMdns = addr.endsWith('.local');
        if (isV4 || isV6 || isMdns) {
          ips.add(addr);
        }
      }
    };
    pc.createOffer()
      .then(offer => pc.setLocalDescription(offer))
      .catch(() => {});
  });
}

let lastExtraResult = null;

async function runExtraScan() {
  const btn = document.getElementById('btn-extra');
  const status = document.getElementById('extra-status');
  const card = document.getElementById('extra-card');

  
  
  lastExtraResult = null;

  btn.disabled = true;
  btn.textContent = tr('extra.status.running');
  status.textContent = '';
  clearChildren(card);
  appendStateMessage(card, 'data-empty', tr('extra.status.running'));

  try {
    
    const [canvasHash, localIps] = await Promise.all([
      getCanvasFingerprint(),
      getLocalIPsViaWebRTC(),
    ]);
    const webgl = getWebGLInfo();

    clearChildren(card);
    const dl = document.createElement('dl');
    dl.className = 'data-rows';

    appendKV(dl, tr('row.webglRenderer'), webgl.renderer);
    appendKV(dl, tr('row.webglVendor'), webgl.vendor);
    if (webgl.unmaskedRenderer !== null) {
      appendKV(dl, tr('row.webglUnmaskedRenderer'), webgl.unmaskedRenderer);
    }
    if (webgl.unmaskedVendor !== null) {
      appendKV(dl, tr('row.webglUnmaskedVendor'), webgl.unmaskedVendor);
    }
    appendSep(dl);
    appendKV(dl, tr('row.canvasFp'), canvasHash);
    appendSep(dl);

    if (!localIps || localIps.length === 0) {
      appendKV(dl, tr('row.localIps'), tr('extra.localIps.none'));
    } else {
      const realIps = localIps.filter(ip => !ip.endsWith('.local'));
      const mdnsCount = localIps.length - realIps.length;
      const parts = [];
      if (realIps.length > 0) parts.push(`${tr('extra.localIps.realPrefix')}: ${realIps.join(', ')}`);
      if (mdnsCount > 0) parts.push(`${mdnsCount} ${tr('extra.localIps.mdnsSuffix')}`);
      appendKV(dl, tr('row.localIps'), parts.join('  ·  '));
    }

    card.appendChild(dl);

    
    const notice = document.createElement('div');
    notice.className = 'extra-notice';
    notice.innerHTML = tr('extra.notice');
    card.appendChild(notice);

    
    lastExtraResult = {
      scannedAt: new Date().toISOString(),
      webgl,
      canvasFingerprint: canvasHash,
      webrtcLocalIps: localIps,
    };

    status.textContent = tr('extra.status.done');
  } catch (e) {
    
    lastExtraResult = null;
    clearChildren(card);
    appendStateMessage(card, 'data-error', tr('extra.error.failed'));
    status.textContent = '';
  } finally {
    btn.disabled = false;
    btn.textContent = tr('extra.btn.rescan');
  }
}

async function runSpeedTest() {
  const btn = document.getElementById('btn-speed');
  const status = document.getElementById('speed-status');
  const card = document.getElementById('speed-card');

  btn.disabled = true;
  btn.textContent = tr('speed.status.measuring');
  status.textContent = '';
  clearChildren(card);
  appendStateMessage(card, 'data-empty', tr('speed.status.measuring'));

  try {
    
    const { blob, ttfb, totalMs } = await fetchBlobWithTimeout(
      URL_SPEEDTEST, { cache: 'no-store' }, 30000
    );

    const durationSec = totalMs / 1000;

    const sizeMB = blob.size / 1_000_000;
    const speedMbps = (blob.size * 8) / durationSec / 1_000_000;

    clearChildren(card);

    const headline = document.createElement('div');
    headline.className = 'speed-headline';
    headline.textContent = `${speedMbps.toFixed(1)} ${tr('speed.headline.unit')}`;
    card.appendChild(headline);

    const detail = document.createElement('div');
    detail.className = 'speed-detail';
    detail.textContent =
      `${tr('speed.detail.size')}: ${sizeMB.toFixed(2)} ${tr('unit.megabytes')}  ·  ` +
      `${tr('speed.detail.elapsed')}: ${durationSec.toFixed(2)} ${tr('unit.seconds')}  ·  ` +
      `${tr('speed.detail.ttfb')}: ${ttfb.toFixed(0)} ${tr('unit.ms')}`;
    card.appendChild(detail);

    status.textContent = tr('speed.status.done');
  } catch (e) {
    clearChildren(card);
    const key = (e && e.name === 'AbortError') ? 'speed.error.timeout' : 'speed.error.failed';
    appendStateMessage(card, 'data-error', tr(key));
    status.textContent = '';
  } finally {
    btn.disabled = false;
    btn.textContent = tr('speed.btn.rerun');
  }
}

function fallbackCopy(text) {

  const ta = document.createElement('textarea');
  ta.value = text;
  ta.readOnly = true;
  ta.className = 'copy-helper';
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {}
  document.body.removeChild(ta);
  return ok;
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  return fallbackCopy(text);
}

function buildExtraTextLines() {
  if (!lastExtraResult) return [];
  const lines = ['', '--- ' + tr('extra.heading') + ' ---'];
  const w = lastExtraResult.webgl;
  if (w) {
    lines.push(`${tr('row.webglRenderer')}: ${w.renderer}`);
    lines.push(`${tr('row.webglVendor')}: ${w.vendor}`);
    if (w.unmaskedRenderer != null) {
      lines.push(`${tr('row.webglUnmaskedRenderer')}: ${w.unmaskedRenderer}`);
    }
    if (w.unmaskedVendor != null) {
      lines.push(`${tr('row.webglUnmaskedVendor')}: ${w.unmaskedVendor}`);
    }
  }
  lines.push(`${tr('row.canvasFp')}: ${lastExtraResult.canvasFingerprint}`);
  const localIps = lastExtraResult.webrtcLocalIps || [];
  if (localIps.length === 0) {
    lines.push(`${tr('row.localIps')}: ${tr('extra.localIps.none')}`);
  } else {
    const realIps = localIps.filter(ip => !ip.endsWith('.local'));
    const mdnsCount = localIps.length - realIps.length;
    const parts = [];
    if (realIps.length > 0) parts.push(`${tr('extra.localIps.realPrefix')}: ${realIps.join(', ')}`);
    if (mdnsCount > 0) parts.push(`${mdnsCount} ${tr('extra.localIps.mdnsSuffix')}`);
    lines.push(`${tr('row.localIps')}: ${parts.join('  ·  ')}`);
  }
  return lines;
}

function buildMergedJsonData() {
  if (!lastResult) return null;
  
  const merged = { ...lastResult.data };
  if (lastExtraResult) {
    merged.extra = {
      scannedAt: lastExtraResult.scannedAt,
      webgl: lastExtraResult.webgl,
      canvasFingerprint: lastExtraResult.canvasFingerprint,
      webrtcLocalIps: lastExtraResult.webrtcLocalIps,
    };
  }
  return merged;
}

async function copyAsText() {
  if (!lastResult) return;
  const baseLines = lastResult.rows.map(([k, v]) => `${k}: ${v}`);
  const extraLines = buildExtraTextLines();
  const text = [...baseLines, ...extraLines].join('\n');
  const ok = await copyToClipboard(text);
  showToast(tr(ok ? 'toast.copied' : 'toast.copyFailed'));
}

async function copyAsJson() {
  if (!lastResult) return;
  const data = buildMergedJsonData();
  const text = JSON.stringify(data, null, 2);
  const ok = await copyToClipboard(text);
  showToast(tr(ok ? 'toast.copied' : 'toast.copyFailed'));
}

function downloadAsJson() {
  if (!lastResult) return;
  const data = buildMergedJsonData();
  const text = JSON.stringify(data, null, 2);
  
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `tsui-ip-info-${stamp}.json`;
  const blob = new Blob([text], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.className = 'is-hidden';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function refreshLangButton() {
  const btn = document.getElementById('btn-lang');
  if (!btn) return;
  btn.textContent = currentLang === 'ja' ? 'EN' : 'JA';
  btn.setAttribute('title', currentLang === 'ja'
    ? tr('header.btn.lang.title.toEn')
    : tr('header.btn.lang.title.toJa'));
}

function setLangPref(lang) {
  if (!setLang(lang)) return;
  try { localStorage.setItem(LANG_KEY, lang); } catch {}
  renderI18n();
  refreshLangButton();

  
  
  const fetchBtn = document.getElementById('btn-fetch');
  if (fetchBtn) {
    fetchBtn.textContent = lastResult ? tr('info.btn.refetch') : tr('info.btn.get');
  }
  const speedBtn = document.getElementById('btn-speed');
  const speedCard = document.getElementById('speed-card');
  if (speedBtn) {
    const measured = !!(speedCard && speedCard.querySelector('.speed-headline'));
    speedBtn.textContent = measured ? tr('speed.btn.rerun') : tr('speed.btn.run');
  }
  const extraBtn = document.getElementById('btn-extra');
  if (extraBtn) {
    extraBtn.textContent = lastExtraResult ? tr('extra.btn.rescan') : tr('extra.btn.scan');
  }
}

function bind() {
  
  const initTheme = readSetting(THEME_KEY, VALID_THEMES, DEFAULT_THEME);
  const initSize = readSetting(SIZE_KEY, VALID_SIZES, DEFAULT_SIZE);
  applyTheme(initTheme);
  applySize(initSize);

  renderI18n();
  refreshLangButton();

  
  if (IS_RESTRICTED_ORIGIN) {
    const notice = document.getElementById('local-notice');
    if (notice) notice.classList.remove('is-hidden');
  }

  document.getElementById('btn-fetch').addEventListener('click', fetchInfo);
  document.getElementById('btn-speed').addEventListener('click', runSpeedTest);
  document.getElementById('btn-extra').addEventListener('click', runExtraScan);
  document.getElementById('btn-copy-text').addEventListener('click', copyAsText);
  document.getElementById('btn-copy-json').addEventListener('click', copyAsJson);
  document.getElementById('btn-download-json').addEventListener('click', downloadAsJson);

  document.getElementById('btn-lang').addEventListener('click', () => {
    setLangPref(currentLang === 'ja' ? 'en' : 'ja');
  });

  document.getElementById('btn-about').addEventListener('click', openModal);
  document.getElementById('btn-modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-about').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.theme-dot').forEach(b => {
    b.addEventListener('click', () => setTheme(b.dataset.theme));
  });

  document.querySelectorAll('.size-btn').forEach(b => {
    b.addEventListener('click', () => setSize(b.dataset.size));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bind, { once: true });
} else {
  bind();
}
