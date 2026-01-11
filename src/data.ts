export interface DecidedItem {
  id: number;
  title: string;
  description?: string;
  images: string[];
}

export interface DiscussItem {
  id: number;
  title: string;
  note?: string;
}

export const decidedItems: DecidedItem[] = [
  {
    id: 1,
    title: "一樓客廳窗簾盒取消不做",
    images: [],
  },
  {
    id: 2,
    title: "三樓公共區域電熱水器改為直立式",
    images: [],
  },
  {
    id: 3,
    title: "二樓廁所馬桶旁層架示意圖",
    images: ["A-1.jpg"],
  },
  {
    id: 4,
    title: "二樓洗手區域層板示意圖",
    images: ["B.JPG"],
  },
  {
    id: 5,
    title:
      "廚房抽油煙機鎖點為吊掛器(圖C)，要幫忙照示意圖增加夾板(圖D，圖E) 與層板位置示意圖，層板會有三個支撐鎖點 (圖F) ",
    images: ["C.png", "D.jpg", "E.jpg", "F.jpg"],
  },
  {
    id: 6,
    title: "騎樓陽台磁磚為簽約簡報上那塊",
    description:
      "因為前幾次見面的時候好像我們雙方都以為是跟陽台的磁磚一樣，但後來翻出簡報才看到",
    images: ["G.png"],
  },
  {
    id: 7,
    title: "提醒記得儲藏室隔一個輕隔間與廁所門上緣同高",
    images: ["H.JPG"],
  },
  {
    id: 8,
    title: "三樓臉盆層板配置",
    images: ["I.jpg"],
  },
  {
    id: 9,
    title: "一樓洗手台的層板上緣距離地面高度 70 cm",
    images: ["J.jpg"],
  },
  {
    id: 10,
    title: "防水美耐板改為 N281A 胡桃木 4 山紋",
    images: [],
  },
];

export const discussItems: DiscussItem[] = [
  {
    id: 1,
    title: "一樓灰色管道間柱子待我思考一下",
    note: "可能也想聽聽看設計師不鹹的意見看是否要刷白？還在猶豫中",
  },
  {
    id: 2,
    title: "一到三樓廁所雅朵門幫忙確認是否可以改這扇沒有玻璃的",
    note: "如果一樓的可以沒有透氣窗更好",
  },
  {
    id: 3,
    title: "臉盆龍頭可以幫忙換美一點的歐式 P 管嗎",
  },
];
