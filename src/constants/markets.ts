import AiIndex from "../assets/markets-logos/AI-Index.webp";
import BTCDominance from "../assets/markets-logos/BTC-Dominance.webp";
import RealEstateDominance from "../assets/markets-logos/Real-Estate-Dominance.webp";
import SuperETH from "../assets/markets-logos/Super-ETH.webp";
import CatsVsDogs from "../assets/markets-logos/cats-vs-dogs.webp";
import CatsVsFrogs from "../assets/markets-logos/cats-vs-frogs.webp";
import FrogsVsDogs from "../assets/markets-logos/frogs-vs-dogs.webp";
import HikaruNakamura from "../assets/markets-logos/hikaru-nakamura.webp";
import KnivesCS2Skins from "../assets/markets-logos/knives-CS2-Skins.webp";
import KnivesVsRiflesCS2Skins from "../assets/markets-logos/knives-vs-rifles-CS2-Skins.webp";
import MagnusCarlsen from "../assets/markets-logos/magnus-carlsen.webp";
import QuantumCats from "../assets/markets-logos/quantum-cats.webp";
import RiflesCS2Skins from "../assets/markets-logos/rifles-CS2-Skins.webp";
import CS2Skins from "../assets/markets-logos/cs2-index.webp";
import ETHDominance from "../assets/markets-logos/eth-dom.webp";
import BTCFrog from "../assets/markets-logos/btc-frogs.webp";
import NodeMonkes from "../assets/markets-logos/node-monkes.webp";
import ETHSOL from "../assets/markets-logos/eth-sol.webp";
import INK from "../assets/markets-logos/ink.webp";
import LanaDelRey from "../assets/markets-logos/lana-del-rey.webp";

export const MARKETS_FULL_LOGOS: { [marketId: string]: string } = {
  "Counter-Strike%202%20Skins": CS2Skins,
  "Rifles%20-%20CS2%20Skins": RiflesCS2Skins,
  "Knives%20-%20CS2%20Skins": KnivesCS2Skins,
  "Knives%20vs%20Rifles%20-%20CS2%20Skins": KnivesVsRiflesCS2Skins,
  "BTC%20Dominance": BTCDominance,
  "ETH%20Dominance": ETHDominance,
  "Bitcoin%20Frogs": BTCFrog,
  NodeMonkes: NodeMonkes,
  "Quantum%20Cats": QuantumCats,
  Ink: INK,
  "ETH%20%2F%20SOL": ETHSOL,
  "AI%20Index": AiIndex,
  "Frogs%20vs%20Dogs%20-%20Meme%20War": FrogsVsDogs,
  "SUPER%20%2F%20ETH": SuperETH,
  "Cats%20vs%20Dogs%20-%20Meme%20War": CatsVsDogs,
  "Real%20Estate%20Dominance": RealEstateDominance,
  "Hikaru%20Nakamura": HikaruNakamura,
  "Cats%20vs%20Frogs%20-%20Meme%20War": CatsVsFrogs,
  "Magnus%20Carlsen": MagnusCarlsen,
  "Lana%20Del%20Rey": LanaDelRey,
};

export const MARKETS_ORDER = [
  'Counter-Strike%202%20Skins',
  'BTC%20Dominance',
  'ETH%20Dominance',
  'AI%20Index',
  'Lana%20Del%20Rey',
  'ETH%20%2F%20SOL',
  'Quantum%20Cats',
  'Bitcoin%20Frogs',
  'NodeMonkes',
  'Ink',
  'Real%20Estate%20Dominance',
  'SUPER%20%2F%20ETH',
  'Hikaru%20Nakamura',
  'Magnus%20Carlsen',
  'Cats%20vs%20Dogs%20-%20Meme%20War',
  'Rifles%20-%20CS2%20Skins',
  'Cats%20vs%20Frogs%20-%20Meme%20War',
  'Knives%20-%20CS2%20Skins',
  'Frogs%20vs%20Dogs%20-%20Meme%20War',
  'Knives%20vs%20Rifles%20-%20CS2%20Skins',
]

export const MARKETS_PRICE_CURRENCIES: { [marketId: string]: string } = {
  "Counter-Strike%202%20Skins": "$",
  "Rifles%20-%20CS2%20Skins": "$",
  "Knives%20-%20CS2%20Skins": "$",
  "Knives%20vs%20Rifles%20-%20CS2%20Skins": "%",
  "BTC%20Dominance": "%",
  "ETH%20Dominance": "%",
  "Bitcoin%20Frogs": "₿",
  NodeMonkes: "₿",
  "Quantum%20Cats": "₿",
  Ink: "₿",
  "ETH%20%2F%20SOL": "",
  "AI%20Index": "$",
  "Frogs%20vs%20Dogs%20-%20Meme%20War": "",
  "SUPER%20%2F%20ETH": "Ξ",
  "Cats%20vs%20Dogs%20-%20Meme%20War": "",
  "Real%20Estate%20Dominance": "%",
  "Hikaru%20Nakamura": "",
  "Cats%20vs%20Frogs%20-%20Meme%20War": "",
  "Magnus%20Carlsen": "",
  "Lana%20Del%20Rey": "%",
};

export enum MARKET_CHART_URL {
  SEPOLIA = "https://api.overlay.market/sepolia-charts/v1/charts",
}