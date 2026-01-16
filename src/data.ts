export type ItemStatus = "completed" | "pending";

export interface DecidedItem {
  id: number;
  title: string;
  description?: string;
  images: string[];
  status: ItemStatus;
}

export interface DiscussItem {
  id: number;
  title: string;
  note?: string;
  images: string[];
}

export const decidedItems: DecidedItem[] = [
  {
    id: 1,
    title: "一樓客廳窗簾盒取消不做",
    images: [],
    status: "completed",
  },
  {
    id: 2,
    title: "三樓公共區域電熱水器改為直立式",
    images: [],
    status: "completed",
  },
  {
    id: 3,
    title: "二樓廁所馬桶旁層架示意圖",
    images: ["A-1.jpg"],
    status: "pending",
  },
  {
    id: 4,
    title: "二樓洗手區域層板示意圖，以及臉盆尺寸參考",
    images: ["B-3.JPG", "2F臉盆尺寸.webp"],
    status: "pending",
  },
  {
    id: 5,
    title:
      "廚房抽油煙機為吊掛器(圖C)，要幫忙照示意圖增加夾板(圖D，圖E) 與上牆層板位置示意圖，上牆層板會有三個支撐鎖點 (圖F) ",
    description:
      "位置在油機孔那面牆，向右97（52+45）中心點位置抓100中心點位置也可以，地面往上100位置（板子下緣）上一塊5分夾板，或是2塊木心板加強",
    images: ["C.png", "D.jpg", "E.jpg", "F.jpg"],
    status: "completed",
  },
  {
    id: 7,
    title: "提醒記得儲藏室隔一個輕隔間與廁所門上緣同高",
    images: ["H.webp"],
    status: "pending",
  },
  {
    id: 8,
    title: "三樓臉盆層板配置",
    images: ["I-2.jpg"],
    status: "pending",
  },
  {
    id: 9,
    title: "一樓洗手台的層板與吊櫃配置",
    images: ["J.jpg"],
    status: "pending",
  },
  {
    id: 10,
    title: "防水美耐板貼皮改為 N281A 胡桃木 4 山紋",
    images: ["K.jpg"],
    status: "pending",
  },
  {
    id: 11,
    title: "一樓廚房、二三樓廁所崁燈9cm",
    images: [],
    status: "pending",
  },
  {
    id: 12,
    title: "一樓廁所油漆直接刷透明漆",
    images: [],
    status: "pending",
  },
  {
    id: 13,
    title: "一樓半牆保留、灰色柱子漆 1501",
    images: ["L.jpg"],
    status: "pending",
  },
  {
    id: 2,
    title: "一到三樓廁所雅朵門幫忙確認是否可以改這扇沒有玻璃的",
    description: "如果一樓的可以沒有透氣窗更好",
    images: ["廁所門.jpg"],
    status: "pending",
  },
];

export const discussItems: DiscussItem[] = [
  //{
  //  id: 1,
  //  title: "一樓灰色管道間柱子待我思考一下",
  //  note: "可能也想聽聽看設計師不鹹的意見底下有幾個方案在選擇中，真是猶豫",
  //  images: ["原始.JPG", "留.jpg", "不留.JPG", "白柱留牆.PNG"],
  //},
  //{
  //  id: 3,
  //  title: "臉盆龍頭如果是換美一點的歐式T型P管嗎, 是不是要加錢🫣",
  //  images: ["T管.png"],
  //},
];
