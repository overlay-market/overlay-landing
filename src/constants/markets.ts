import AiIndex from "../assets/markets-logos/AI-Index.png";
import BTCDominance from "../assets/markets-logos/BTC-Dominance.png";
import RealEstateDominance from "../assets/markets-logos/Real-Estate-Dominance.png";
import SuperETH from "../assets/markets-logos/Super-ETH.png";
import CatsVsDogs from "../assets/markets-logos/cats-vs-dogs.png";
import CatsVsFrogs from "../assets/markets-logos/cats-vs-frogs.png";
import FrogsVsDogs from "../assets/markets-logos/frogs-vs-dogs.png";
import HikaruNakamura from "../assets/markets-logos/hikaru-nakamura.png";
import KnivesCS2Skins from "../assets/markets-logos/knives-CS2-Skins.png";
import KnivesVsRiflesCS2Skins from "../assets/markets-logos/knives-vs-rifles-CS2-Skins.png";
import MagnusCarlsen from "../assets/markets-logos/magnus-carlsen.png";
import QuantumCats from "../assets/markets-logos/quantum-cats.png";
import RiflesCS2Skins from "../assets/markets-logos/rifles-CS2-Skins.png";
import CS2Skins from "../assets/markets-logos/cs2-index.png";
import ETHDominance from "../assets/markets-logos/eth-dom.png";
import BTCFrog from "../assets/markets-logos/btc-frogs.png";
import NodeMonkes from "../assets/markets-logos/node-monkes.png";
import ETHSOL from "../assets/markets-logos/eth-sol.png";
import INK from "../assets/markets-logos/ink.jpeg";
import LanaDelRey from "../assets/markets-logos/lana-del-rey.png";

export const MARKETS_FULL_LOGOS: { [marketId: string]: string | undefined } = {
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