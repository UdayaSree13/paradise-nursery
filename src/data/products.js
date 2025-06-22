// src/data/products.js
import aloevera from "../assets/aloevera.jpeg";
import snakeplant from "../assets/snakeplant.jpeg";
import peacelily from "../assets/peacelily.jpeg";
import bostonfern from "../assets/bostonfern.jpeg";
import zzplant from "../assets/zzplant.jpeg";
import orchid from "../assets/orchid.jpeg";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 12.99,
    category: "Succulent",
    image: aloevera
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15.49,
    category: "Succulent",
    image: snakeplant
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18.75,
    category: "Flowering",
    image: peacelily
  },
  {
    id: 4,
    name: "Boston Fern",
    price: 14.99,
    category: "Foliage",
    image: bostonfern
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 16.25,
    category: "Foliage",
    image: zzplant
  },
  {
    id: 6,
    name: "Orchid",
    price: 21.99,
    category: "Flowering",
    image: orchid
  }
];

export default products;