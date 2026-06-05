const ASSET_VERSION = "20260605-pano-nodes-1";

const plans = [
  {
    page: 1,
    title: "1#5# - 129-A边户",
    area: "129㎡",
    img: "./assets/floorplan-1.png",
    rendering: "./assets/plan-renderings/plan-1.webp",
    type: "边户",
    style: "中式雅居",
    brief: "深木、屏风、陶瓷与水墨装饰强化东方秩序感，适合边户的大尺度采光。"
  },
  {
    page: 2,
    title: "1#5# - 99-A中间户",
    area: "99㎡",
    img: "./assets/floorplan-2.png",
    rendering: "./assets/plan-renderings/plan-2.webp",
    type: "中间户",
    style: "现代简约",
    brief: "黑白灰、浅木和整墙收纳拉开紧凑户型的清爽尺度。"
  },
  {
    page: 3,
    title: "9# - 129-B西侧边户",
    area: "129㎡",
    img: "./assets/floorplan-3.png",
    rendering: "./assets/plan-renderings/plan-3.webp",
    type: "西侧边户",
    style: "新中式",
    brief: "现代沙发、木格栅和水墨艺术结合，既有东方气质也更轻盈。"
  },
  {
    page: 4,
    title: "9# - 99-B中间户",
    area: "99㎡",
    img: "./assets/floorplan-4.png",
    rendering: "./assets/plan-renderings/plan-4.webp",
    type: "中间户",
    style: "北欧清新",
    brief: "白墙、浅木、布艺和轻彩色让 99㎡空间更明亮年轻。"
  },
  {
    page: 5,
    title: "2#3# - 139户型",
    area: "139㎡",
    img: "./assets/floorplan-5.png",
    rendering: "./assets/plan-renderings/plan-5.webp",
    type: "改善三房",
    style: "欧式经典",
    brief: "护墙线、吊灯、石材和软包组合，营造更正式的改善型客厅。"
  },
  {
    page: 6,
    title: "7#8# - 169㎡精装改造方案",
    area: "169㎡",
    img: "./assets/floorplan-6.png",
    rendering: "./assets/plan-renderings/plan-6.webp",
    type: "主力展示",
    style: "意式轻奢",
    brief: "石材中岛、深木饰面和皮质家具突出 169㎡的开阔与质感。"
  },
  {
    page: 7,
    title: "7#8# - 169㎡建筑改造后方案",
    area: "169㎡",
    img: "./assets/floorplan-7.png",
    rendering: "./assets/plan-renderings/plan-7.webp",
    type: "建筑改造",
    style: "侘寂艺廊",
    brief: "以微水泥、深木和艺术壁龛塑造更强的沉浸感。"
  },
  {
    page: 8,
    title: "6# - 139户型边户",
    area: "139㎡",
    img: "./assets/floorplan-8.png",
    rendering: "./assets/plan-renderings/plan-8.webp",
    type: "边户",
    style: "现代法式",
    brief: "曲线沙发、拱形壁龛和浅色护墙线，匹配边户明亮优雅气质。"
  },
  {
    page: 9,
    title: "6# - 139户型拼接户",
    area: "139㎡",
    img: "./assets/floorplan-9.png",
    rendering: "./assets/plan-renderings/plan-9.webp",
    type: "拼接户",
    style: "工业混搭",
    brief: "黑钢、混凝土、皮质沙发和开放书架，匹配拼接户的复合功能。"
  }
];

const spaces = [
  {
    id: "entry",
    room: "entry",
    label: "入户",
    title: "归家玄关",
    step: "01",
    meta: "电梯厅入户 · 动静分流起点",
    copy: "从合用前室进入，玄关先完成收纳与转折，避免一眼望穿客厅。",
    hot: { x: 60.8, y: 51.2 },
    rendering: "./assets/renderings/entry-dining-kitchen.webp"
  },
  {
    id: "dining",
    room: "dining",
    label: "餐厨",
    title: "洄游餐厨",
    step: "02",
    meta: "入户即达餐厨 · 家庭社交核心",
    copy: "餐厅、厨房和中岛关系紧密，适合日常早餐、亲友小聚与备餐互动。",
    hot: { x: 49.8, y: 41.8 },
    rendering: "./assets/renderings/entry-dining-kitchen.webp"
  },
  {
    id: "living",
    room: "living",
    label: "客厅",
    title: "南向会客厅",
    step: "03",
    meta: "约 6.3m 南向面宽",
    copy: "客厅、餐厅与南向阳台连续展开，形成大尺度会客界面。",
    hot: { x: 51.8, y: 66.6 },
    rendering: "./assets/renderings/living-dining.webp"
  },
  {
    id: "balcony",
    room: "balcony",
    label: "阳台",
    title: "景观阳台",
    step: "04",
    meta: "南向连续采光面",
    copy: "阳台串联客厅与卧室，兼具景观、休闲和家政缓冲价值。",
    hot: { x: 42.7, y: 80.9 },
    rendering: "./assets/renderings/balcony.webp"
  },
  {
    id: "primary",
    room: "primary",
    label: "主卧",
    title: "主卧套间",
    step: "05",
    meta: "南向卧室 · 独立卫浴与收纳",
    copy: "主卧拥有更完整的私密套间感，睡眠、盥洗与收纳互不打扰。",
    hot: { x: 31.4, y: 66.1 },
    rendering: "./assets/renderings/primary-bedroom.webp"
  },
  {
    id: "southBedroom",
    room: "second",
    label: "次卧",
    title: "南向次卧",
    step: "06",
    meta: "南向弹性房 · 可做长辈房/儿童房",
    copy: "次卧靠近公共区和阳台，兼顾采光、照看便利与未来弹性。",
    hot: { x: 38.8, y: 69.0 },
    rendering: "./assets/renderings/second-bedroom.webp"
  }
];

const roomLinks = {
  entry: [
    { to: "dining", label: "去餐厨", x: 64, y: 57 },
    { to: "living", label: "去客厅", x: 38, y: 55 }
  ],
  dining: [
    { to: "entry", label: "回入户", x: 20, y: 58 },
    { to: "living", label: "去客厅", x: 43, y: 60 },
    { to: "balcony", label: "去阳台", x: 76, y: 50 }
  ],
  living: [
    { to: "dining", label: "去餐厨", x: 20, y: 52 },
    { to: "balcony", label: "去阳台", x: 70, y: 48 },
    { to: "primary", label: "去主卧", x: 75, y: 63 },
    { to: "southBedroom", label: "去次卧", x: 53, y: 66 }
  ],
  balcony: [
    { to: "living", label: "回客厅", x: 28, y: 56 },
    { to: "primary", label: "去主卧", x: 68, y: 54 }
  ],
  primary: [
    { to: "living", label: "回客厅", x: 18, y: 60 },
    { to: "balcony", label: "去阳台", x: 62, y: 47 }
  ],
  southBedroom: [
    { to: "living", label: "回客厅", x: 18, y: 56 },
    { to: "balcony", label: "去阳台", x: 70, y: 52 }
  ]
};

const points = [
  ["按户型定风格", "9个户型分别匹配原木、奶油、意式、东方、法式等流行设计。"],
  ["360°节点看房", "房间内设置可点击穿行节点，按入户、餐厨、客厅、阳台、卧室动线串联。"],
  ["真实户型导入", "效果图与原户型图、热点和动线绑定，切换户型即可同步环视。"]
];

const els = {
  title: document.getElementById("spaceTitle"),
  meta: document.getElementById("spaceMeta"),
  copy: document.getElementById("spaceCopy"),
  vr: document.getElementById("vrStage"),
  hint: document.getElementById("dragHint"),
  objects: document.getElementById("sceneObjects"),
  nodes: document.getElementById("vrNodes"),
  tabs: document.getElementById("spaceTabs"),
  hotspots: document.getElementById("planHotspots"),
  route: document.getElementById("routeSteps"),
  points: document.getElementById("sellingPoints"),
  switcher: document.getElementById("planSwitcher"),
  planTitle: document.getElementById("planTitle"),
  planImage: document.getElementById("planImage"),
  area: document.getElementById("areaMark"),
  fullscreen: document.getElementById("fullscreenButton")
};

let activeSpace = spaces[2];
let activePlan = plans[5];
let dragging = false;
let startX = 0;
let startPosition = 50;
let position = 50;
let usePlanRendering = false;

function versioned(src) {
  return `${src}?v=${ASSET_VERSION}`;
}

function setHeroImage(src) {
  els.vr.style.setProperty("--rendering", `url("${versioned(src)}")`);
  els.vr.classList.add("is-rendered", "is-pano");
  els.objects.innerHTML = "";
}

function getRoomRendering(space) {
  return `./assets/room-renderings/plan-${activePlan.page}/${space.room}.webp`;
}

function normalizePan(value) {
  return ((value % 100) + 100) % 100;
}

function setPan(nextPosition, shouldRenderNodes = true) {
  position = nextPosition;
  els.vr.style.backgroundPosition = `${position}% 50%`;
  if (shouldRenderNodes) renderSceneNodes();
}

function renderSceneNodes() {
  if (!els.nodes || usePlanRendering) {
    if (els.nodes) els.nodes.innerHTML = "";
    return;
  }

  const links = roomLinks[activeSpace.id] || [];
  const pan = normalizePan(position);
  const shift = (50 - pan) * 0.34;

  els.nodes.innerHTML = links.map((link) => {
    const target = spaces.find((space) => space.id === link.to);
    if (!target) return "";

    let x = link.x + shift;
    while (x < 14) x += 72;
    while (x > 86) x -= 72;

    return `<button class="room-node" type="button" data-target-space="${link.to}" style="left:${x}%;top:${link.y}%;" aria-label="${link.label}">
      <span class="room-node__dot" aria-hidden="true"></span>
      <span>${link.label}</span>
    </button>`;
  }).join("");
}

function renderSpaces() {
  els.tabs.innerHTML = spaces.map((space) => (
    `<button class="space-tab ${space.id === activeSpace.id && !usePlanRendering ? "is-active" : ""}" type="button" data-space="${space.id}">${space.label}</button>`
  )).join("");

  els.hotspots.innerHTML = spaces.map((space) => (
    `<button class="hotspot ${space.id === activeSpace.id && !usePlanRendering ? "is-active" : ""}" type="button" data-space="${space.id}" data-label="${space.label}" style="left:${space.hot.x}%;top:${space.hot.y}%"></button>`
  )).join("");

  els.route.innerHTML = spaces.map((space) => (
    `<button class="route-step ${space.id === activeSpace.id && !usePlanRendering ? "is-active" : ""}" type="button" data-space="${space.id}">
      <strong>${space.step}</strong><span>${space.label}</span>
    </button>`
  )).join("");
}

function renderPlanSwitcher() {
  els.switcher.innerHTML = plans.map((plan) => (
    `<button class="plan-chip ${plan.page === activePlan.page ? "is-active" : ""}" type="button" data-plan="${plan.page}">
      <img src="${versioned(plan.rendering)}" alt="${plan.title}家装效果图">
      <span class="plan-chip__copy">
        <b>${plan.area} ${plan.style}</b>
        <span>${plan.title}</span>
      </span>
    </button>`
  )).join("");
}

function renderPoints() {
  els.points.innerHTML = points.map(([title, copy]) => (
    `<div class="point"><b>${title}</b><span>${copy}</span></div>`
  )).join("");
}

function setSpace(id) {
  const next = spaces.find((space) => space.id === id);
  if (!next) return;

  activeSpace = next;
  usePlanRendering = false;
  els.title.textContent = next.title;
  els.meta.textContent = `${activePlan.area} ${activePlan.style} · ${next.meta}`;
  els.copy.textContent = next.copy;
  setPan(50, false);
  setHeroImage(getRoomRendering(next));
  renderSpaces();
  renderSceneNodes();
}

function setPlan(page) {
  const next = plans.find((plan) => plan.page === Number(page));
  if (!next) return;

  activePlan = next;
  usePlanRendering = false;
  els.planTitle.textContent = next.title;
  els.area.textContent = next.area;
  els.planImage.src = versioned(next.img);
  els.planImage.alt = `${next.title}户型图`;
  renderPlanSwitcher();
  setSpace(activeSpace.id);
}

document.addEventListener("click", (event) => {
  const nodeButton = event.target.closest("[data-target-space]");
  if (nodeButton) {
    setSpace(nodeButton.dataset.targetSpace);
    return;
  }

  const spaceButton = event.target.closest("[data-space]");
  if (spaceButton) setSpace(spaceButton.dataset.space);

  const planButton = event.target.closest("[data-plan]");
  if (planButton) setPlan(planButton.dataset.plan);
});

if (els.nodes) {
  els.nodes.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
}

els.fullscreen.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

els.vr.addEventListener("pointerdown", (event) => {
  dragging = true;
  startX = event.clientX;
  startPosition = position;
  els.vr.setPointerCapture(event.pointerId);
  els.hint.classList.add("is-hidden");
});

els.vr.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  const delta = event.clientX - startX;
  setPan(startPosition + delta / 7);
});

els.vr.addEventListener("pointerup", (event) => {
  dragging = false;
  if (els.vr.hasPointerCapture(event.pointerId)) {
    els.vr.releasePointerCapture(event.pointerId);
  }
});

els.vr.addEventListener("pointercancel", () => {
  dragging = false;
});

renderPoints();
renderPlanSwitcher();
setPlan(activePlan.page);
