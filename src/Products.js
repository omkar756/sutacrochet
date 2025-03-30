// Products.js
import rose3 from '../src/Assets/rose3.jpg';
import rose2 from '../src/Assets/rose2.jpg';
import rose1 from '../src/Assets/rose1.jpg';
import rose4 from '../src/Assets/rose4.jpg';

import sunflower1 from '../src/Assets/sunflower1.jpg';
import sunflower2 from '../src/Assets/sunflower2.jpg';
import sunflowerKey from '../src/Assets/sunflowerkey1.jpg';
import sunflowerKey2 from '../src/Assets/sunflowerkey2.jpg';
import sunflowerKey3 from '../src/Assets/sunflowerkey3.jpg';
import threeyellowrose from '../src/Assets/threeyellowrose.jpg';
import top from '../src/Assets/top.jpg';
import mickeykeychain from '../src/Assets/mickeykeychain.jpg';
import flowerkeychain from '../src/Assets/flowerkeychain.jpg';
import heart from '../src/Assets/heart.jpg';
import heart2 from '../src/Assets/heart2.jpg';
import lipstick from '../src/Assets/lipstick.jpg';
import threeredRose from '../src/Assets/threerose.jpg';
import threeyellowRose from '../src/Assets/threeyellowbucket.jpg';
import threeyellowRose2 from '../src/Assets/threeyellowbucket2.jpg';
import threeyellowRose3 from '../src/Assets/threeyellowbucket3.jpg';
import whiteTop1 from '../src/Assets/whitetop1.jpg';
import whiteTop2 from '../src/Assets/whitetop2.jpg';
import whiteTop3 from '../src/Assets/whitetop3.jpg';
import handbag from '../src/Assets/handbag.jpg';
import doll from '../src/Assets/doll.jpg';
import doll3 from '../src/Assets/doll3.jpg';

// Carousel with 5 mixed images from different products
export const carouselImages = [
  { id: 1, image: rose3, caption: "Beautiful Red Roses" },
  { id: 2, image: sunflowerKey, caption: "Sunflower Keychain" },
  { id: 3, image: threeyellowRose, caption: "Yellow Rose Trio" },
  { id: 4, image: mickeykeychain, caption: "Mickey Keychain" },
  { id: 5, image: whiteTop1, caption: "Elegant White Top" },
];

export const products = [
  {
    id: 1,
    name: "Red Rose",
    price: 1000,
    discount: 200,
    images: [rose3, rose2, rose1,rose4],
    category: "Flowers",
  },
  {
    id: 2,
    name: "Yellow Three Sunflower",
    price: 1200,
    discount: 300,
    images: [threeyellowRose, threeyellowRose2, threeyellowRose3],
    category: "Flowers",
  },
  {
    id: 3,
    name: "Yellow Sunflower",
    price: 1200,
    discount: 300,
    images: [sunflower1, sunflower2],
    category: "Flowers",
  },
  {
    id: 4,
    name: "Green Hat",
    price: 2000,
    discount: 400,
    images: [top],
    category: "Hats",
  },
  {
    id: 5,
    name: "Purple Bag",
    price: 3000,
    discount: 600,
    images: [heart, heart2],
    category: "Bags",
  },
  {
    id: 6,
    name: "Mickey Keychain",
    price: 800,
    discount: 150,
    images: [mickeykeychain],
    category: "Keychains",
  },
  {
    id: 7,
    name: "Sunflower Keychain",
    price: 800,
    discount: 150,
    images: [flowerkeychain],
    category: "Keychains",
  },
  {
    id: 8,
    name: "Three Red Rose",
    price: 800,
    discount: 150,
    images: [threeredRose],
    category: "Keychains",
  },
  {
    id: 9,
    name: "Three Yellow Rose",
    price: 800,
    discount: 150,
    images: [threeyellowrose],
    category: "Keychains",
  },
  {
    id: 10,
    name: "Lipstick carrier",
    price: 800,
    discount: 150,
    images: [lipstick],
    category: "Keychains",
  },
  {
    id: 11,
    name: "Sunflower Keychain",
    price: 800,
    discount: 150,
    images: [sunflowerKey, sunflowerKey2, sunflowerKey3],
    category: "Keychains",
  },
  {
    id: 12,
    name: "White Top",
    price: 800,
    discount: 150,
    images: [whiteTop1, whiteTop2, whiteTop3],
    category: "Keychains",
  },
  {
    id: 13,
    name: "Hand Bag",
    price: 800,
    discount: 150,
    images: [handbag],
    category: "Keychains",
  },
  {
    id: 14,
    name: "Doll",
    price: 800,
    discount: 150,
    images: [doll, doll3],
    category: "Keychains",
  },
];




// export const ads = [
//   { id: 1, text: "Get 20% off on all flowers this week!", image: rose1 },
//   { id: 2, text: "Buy 2 keychains, get 1 free!", image: sunflowerKey },
//   { id: 3, text: "Hats on sale - 15% off!", image: top },
//   { id: 4, text: "Free shipping on bags over ₹2500!", image: heart },
// ];
