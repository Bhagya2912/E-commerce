import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";
import p37_img from "./product_37.png";
import p38_img from "./product_38.png";
import p39_img from "./product_39.png";
import p40_img from "./product_40.png";



let all_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p1_img,
    images: [
     "https://m.media-amazon.com/images/I/81j-RJy9cTL._SY741_.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/81+H8kyOHjL._SY741_.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/81tezVkz3NL._SY741_.jpg",
      ],
      new_price: 50.0,
      old_price: 80.5,
    },
    {
      id: 2,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: p2_img, // Main image (static)
      images: [
        "https://m.media-amazon.com/images/I/815JJ2o0jcL._SY741_.jpg", // Thumbnail 2
        "https://m.media-amazon.com/images/I/81vz6SEfF-L._SY741_.jpg", // Thumbnail 3
        "https://m.media-amazon.com/images/I/81Lymrrqe-L._SY741_.jpg",
      ],
      new_price:85.0,
      old_price: 80.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p3_img, // Main image (static)
    images: [
      "https://m.media-amazon.com/images/I/71o2CGBrzBL._AC_SY550_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/817dNVdW+CL._AC_SY550_.jpg", // Thumbnail 3
      "data:image/png;base64,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",

    ],
    new_price:85.0,
    old_price: 80.5,
},
{
  id: 4,
  name: " Chiffon Blouses Loose Pleated Collared Work Office Tops",
  category: "women",
  image: p4_img, // Main image (static)
  images: [
    "https://m.media-amazon.com/images/I/81de-eAkFOL._SY741_.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/81wbbnLqHuL._SY741_.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/81HGZvNfSJL._SY741_.jpg",
  ],
  new_price:326.0,
  old_price: 300.5,
},
{
  id: 5,
  name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  category: "women",
  image: p5_img, // Main image (static)
  images: [
    "https://m.media-amazon.com/images/I/41cXHK49BUL.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/41puzb6K-ZL.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/41uWGQILXuL.jpg",
  ],
  new_price:85.0,
  old_price: 80.5,
},
{
  id: 6,
  name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  category: "women",
  image: p6_img, // Main image (static)
  images: [
    "https://m.media-amazon.com/images/I/81Zzott4lIL._SY741_.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/81kGNhR22NL._SY741_.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/81Jj3UjuFLL._SY741_.jpg",
  ],
  new_price:85.0,
  old_price: 80.5,
},
{
  id: 7,
  name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  category: "women",
  image: p7_img, // Main image (static)
  images: [
    "https://m.media-amazon.com/images/I/61CL2EK4WYL._SY741_.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/71XqkerI-3L._SY741_.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/61xZOnYEtPL._SY741_.jpg",
  ],
  new_price:85.0,
  old_price: 80.5,
},
{
  id: 8,
  name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  category: "women",
  image: p8_img, // Main image (static)
  images: [
    "https://m.media-amazon.com/images/I/616ISIIMrYL._SY741_.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/51JjaCdBZwL._SY741_.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/61fjR+yMk9L._SY741_.jpg",
  ],
  new_price:85.0,
  old_price: 80.5,
},
{
  id: 9,
  name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  category: "women",
  image: p9_img, // Main image (static)
  images: [
    "https://m.media-amazon.com/images/I/61pOxnKnMQL._SY741_.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/51COtpt+1AL._SY741_.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/51oHjPpaNnL._SY741_.jpg",
  ],
  new_price:85.0,
  old_price: 80.5,
},
 {
      id: 10,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: p10_img, // Main image (static)
      images: [
        "https://m.media-amazon.com/images/I/81FkGaX5-0L._SX569_.jpg", // Thumbnail 2
        "https://m.media-amazon.com/images/I/81sysfEwfHL._SY741_.jpg", // Thumbnail 3
        "https://m.media-amazon.com/images/I/81c4OyLScXL._SY741_.jpg",
      ],
      new_price:85.0,
      old_price: 80.5,
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p11_img, // Main image (static)
    images: [
      "https://m.media-amazon.com/images/I/81bb1PLA0GL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/81JYbFsYXvL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/81REZH1nM9L._SY741_.jpg",
    ],
    new_price:85.0,
    old_price: 80.5,
},
{
  id: 12,
  name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  category: "women",
  image: p12_img, // Main image (static)
  images: [
    "https://m.media-amazon.com/images/I/815vqQ+g1-L._SY741_.jpg", // Thumbnail 2
    "https://m.media-amazon.com/images/I/81cWw0CxzPL._SY741_.jpg", // Thumbnail 3
    "https://m.media-amazon.com/images/I/815vqQ+g1-L._SY741_.jpg",
  ],
  new_price:85.0,
  old_price: 80.5,
},
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    images: [
      "https://m.media-amazon.com/images/I/71V+oSrb9WL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71DTCibdg7L._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/81p91u+ZKVL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    images: [
      "https://m.media-amazon.com/images/I/61EOLk-Bo9L._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/61issFwHQEL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/61WswLTIRqL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p15_img,
    images: [
      "https://m.media-amazon.com/images/I/71QhvE91E1L._SX569_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71I+5VjEzCL._SX569_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/811T6NhOptL._SX569_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p16_img,
    images: [
      "https://m.media-amazon.com/images/I/71NOH37KqrL._SX569_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/81meU+Gu1-L._SX569_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/71aFqco50fL._SX569_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p17_img,
    images: [
      "https://m.media-amazon.com/images/I/6107G1paS2L._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/61fWuTjcMbL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/616Cf530HBL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    images: [
      "https://m.media-amazon.com/images/I/51SO+uR+poL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/51yn92oL9fL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/51e16rLajKL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p19_img,
    images: [
      "https://m.media-amazon.com/images/I/713bu9kf+BL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/814C7PcNDxL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/71JNwPGpFxL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p20_img,
    images: [
      "https://m.media-amazon.com/images/I/51G7pvAI-6L._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/61pb06WBd6L._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/61rTsZwvMXL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p21_img,
    images: [
      "https://m.media-amazon.com/images/I/81aZQlxJ5EL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71VfPyTLb5L._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/81DkTEBpHHL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p22_img,
    images: [
      "https://m.media-amazon.com/images/I/61SbvJC21XL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/61e0ETpZF9L._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/71rF-r6kKvL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p23_img,
    images: [
      "https://m.media-amazon.com/images/I/71uhWHPHRsL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71VcIftBwIL._SX569_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/71v10mVetOL._SX569_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p24_img,
    images: [
      "https://m.media-amazon.com/images/I/81Y6szKmLlL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/81hXs-3R+DL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/81Gr7OXrl4L._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    images: [
      "https://m.media-amazon.com/images/I/71dXO8SYezL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71SiztkeoNL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/71sdBS8olyL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    images: [
      "https://m.media-amazon.com/images/I/71d9718-QtL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71EsaW6lLrL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/81on42+twNL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    images: [
      "https://m.media-amazon.com/images/I/51pHwYJ34xL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/41NveJJ1b2L._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/51XeMh3VNaL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    images: [
      "https://m.media-amazon.com/images/I/617g8oW6omL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/416jsvpGgfL.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/51jEwYUsqEL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    images: [
      "https://m.media-amazon.com/images/I/61sVIuUqqML._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/6109Fj+v7PL._SX679_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/51c1jXfE2CL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    images: [
      "https://m.media-amazon.com/images/I/61aIQ3ZmTeL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71ym0riivML._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/61wSOR-OO8L._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    images: [
      "https://m.media-amazon.com/images/I/41XzucCUP5L._SX679_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/416CnY0FXHL._SX569_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/412uH6bA8nL._SX569_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    images: [
      "https://m.media-amazon.com/images/I/61BmgTmGWtL._SX679_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/61v9xrH4fjL._SX679_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/61Q9YFnM4yL._SX679_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    images: [
      "https://m.media-amazon.com/images/I/415eFd1pb7L.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/515U+GxreWL.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/617S14AWJ+L._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    images: [
      "https://m.media-amazon.com/images/I/61vmktSXBTL._SX679_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71MyR2MSFtL._SX679_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/61+0T2v-O8L._SX679_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    images: [
      "https://m.media-amazon.com/images/I/51hyFOfJUtL._SX569_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/51TCOC7AYaL._SX569_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/51YGzIfzIuL._SX569_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    images: [
      "https://m.media-amazon.com/images/I/71M8JHCjaHL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/81-5Epiym-L._SX679_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/61mirE08LZL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 37,
    name: "Fashion Dream Girl's Floral Printed Maxi Length Dress",
    category: "kid",
    image: p37_img,
    images: [
      "https://m.media-amazon.com/images/I/51fsovNBZqL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/51gcLj2kbdL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/51Hq+RPn-xL._SX679_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 38,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p38_img,
    images: [
      "https://m.media-amazon.com/images/I/81Oa-e7vgvL._SX569_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/81VxMQsWnWL._SX569_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/71Ig1ZhuyxL._SX569_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 39,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p39_img,
    images: [
      "https://m.media-amazon.com/images/I/61me6I3-HnL._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/61NxBoVyQNL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/61RZvls+igL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 40,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p40_img,
    images: [
      "https://m.media-amazon.com/images/I/71QRa4Vyo5L._SY741_.jpg", // Thumbnail 2
      "https://m.media-amazon.com/images/I/71kG1-KEzPL._SY741_.jpg", // Thumbnail 3
      "https://m.media-amazon.com/images/I/81NMSp4DDIL._SY741_.jpg",
    ],
    new_price: 85.0,
    old_price: 120.5,
  },
  
];

export default all_product;


