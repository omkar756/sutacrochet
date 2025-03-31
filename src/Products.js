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

import whale from '../src/Assets/whale1.jpg';
import whale2 from '../src/Assets/whale2.jpg';
import whale3 from '../src/Assets/whale3.jpg';

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
    name: "Rose Pot",
    price: 500,
    discount: 150,
    images: [rose3, rose2, rose1,rose4],
    category: "Flowers",
  },
  {
    id: 2,
    name: "Rose Buque(Yellow)",
    price: 1000,
    discount: 250,
    images: [threeyellowRose, threeyellowRose2, threeyellowRose3],
    category: "Flowers",
  },
  {
    id: 3,
    name: "Sunflower Pot",
    price: 500,
    discount: 150,
    images: [sunflower1, sunflower2],
    category: "Flowers",
  },
  {
    id: 4,
    name: "Black Pullover(Hearts)",
    price: 2000,
    discount: 200,
    images: [top],
    category: "Hats",
  },
  {
    id: 5,
    name: "Read Heart",
    price: 500,
    discount: 100,
    images: [heart, heart2],
    category: "Bags",
  },
  {
    id: 6,
    name: "Bow(keychain)",
    price: 100,
    discount: 20,
    images: [mickeykeychain],
    category: "Keychains",
  },
  {
    id: 7,
    name: "Sunflower Keychain",
    price: 120,
    discount: 20,
    images: [flowerkeychain],
    category: "Keychains",
  },
  {
    id: 8,
    name: "Small Red Rose",
    price: 600,
    discount: 150,
    images: [threeredRose],
    category: "Keychains",
  },
  {
    id: 9,
    name: "Small Yellow Rose",
    price: 600,
    discount: 150,
    images: [threeyellowrose],
    category: "Keychains",
  },
  {
    id: 10,
    name: "Lipbalm Holder",
    price: 200,
    discount: 50,
    images: [lipstick],
    category: "Keychains",
  },
  {
    id: 11,
    name: "Sunflower Keychain",
    price: 200,
    discount: 50,
    images: [sunflowerKey, sunflowerKey2, sunflowerKey3],
    category: "Keychains",
  },
  {
    id: 12,
    name: "Crop Top",
    price: 1400,
    discount: 400,
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
    discount: 300,
    images: [doll, doll3],
    category: "Keychains",
  },
  {
    id: 15,
    name: "Muffler",
    price: 800,
    discount: 400,
    images: [whale, whale2,whale3],
    category: "Keychains",
  },
];




// export const ads = [
//   { id: 1, text: "Get 20% off on all flowers this week!", image: rose1 },
//   { id: 2, text: "Buy 2 keychains, get 1 free!", image: sunflowerKey },
//   { id: 3, text: "Hats on sale - 15% off!", image: top },
//   { id: 4, text: "Free shipping on bags over ₹2500!", image: heart },
// ];
