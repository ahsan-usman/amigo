import {
  imgShield,
  imgStar,
  imgHeart,
  imgZap,
  imgLeaf,
  imgHandshake1,
  imgEgg,
  imgWarehouse,
  imgWheat,
  imgBird,
  imgCalendarRange,
} from "./assets"

export const valueCards = [
  {
    accentFront: "#105f8c",
    accentBack: "#f0a23a",
    iconBgFront: "#e6f2f5",
    icon: imgShield,
    num: "01",
    title: "Integrity",
    text: "Conducting all operations with honesty, transparency, and high ethical responsibility.",
  },

  {
    accentFront: "#f0a23a",
    accentBack: "#f0a23a",
    iconBgFront: "#fff1d8",
    icon: imgStar,
    num: "02",
    title: "Quality Excellence",
    text: "Upholding uncompromising standards across flock management, feed, and distribution.",
  },

  {
    accentFront: "#105f8c",
    accentBack: "#f0a23a",
    iconBgFront: "#e6f2f5",
    icon: imgHeart,
    num: "03",
    title: "Animal Welfare",
    text: "Prioritizing bird health and comfort through responsible, veterinarian-supervised management.",
  },

  {
    accentFront: "#f0a23a",
    accentBack: "#f0a23a",
    iconBgFront: "#fff1d8",
    icon: imgZap,
    num: "04",
    title: "Innovation",
    text: "Continuously upgrading infrastructure, production methods, and technological systems.",
  },

  {
    accentFront: "#105f8c",
    accentBack: "#f0a23a",
    iconBgFront: "#e6f2f5",
    icon: imgLeaf,
    num: "05",
    title: "Sustainability",
    text: "Utilizing natural resources responsibly to minimize environmental impact.",
  },

  {
    accentFront: "#105f8c",
    accentBack: "#f0a23a",
    iconBgFront: "#e6f2f5",
    icon: imgHandshake1,
    num: "06",
    title: "Customer Commitment",
    text: "Delivering consistent product quality, competitive value, and dependable logistics.",
  },
]

export const stats = [
  {
    id: "commercial_layers",
    icon: imgEgg,
    target: 400000,
    suffix: "+",
    label: "Commercial layer birds",
    accent: "#105f8c",
    highlight: false,
  },

  {
    id: "broiler_capacity",
    icon: imgWarehouse,
    target: 500000,
    suffix: "+",
    label: "Broiler capacity",
    accent: "#105f8c",
    highlight: false,
  },

  {
    id: "feed_output",
    icon: imgWheat,
    target: 1500,
    suffix: "+ MT",
    label: "Feed output / month",
    accent: "#f0a23a",
    highlight: true,
  },

  {
    id: "broiler_breeders",
    icon: imgBird,
    target: 500000,
    suffix: "+",
    label: "Commercial broiler breeders",
    accent: "#105f8c",
    highlight: false,
  },

  {
    id: "heritage",
    icon: imgCalendarRange,
    target: 50,
    suffix: "+ Yrs",
    label: "Heritage since the 1970s",
    accent: "#105f8c",
    highlight: false,
  },
]

export const navLinks: { label: string id: string }[] = [
  { label: "Operations", id: "operations" },

  { label: "About", id: "about" },

  { label: "Heritage", id: "heritage" },

  { label: "Values", id: "values" },

  { label: "Quality", id: "quality" },

  { label: "Contact Us", id: "contact" },
]
