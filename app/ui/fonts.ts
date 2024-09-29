import {
  Inter,
  Gowun_Batang,
  Edu_SA_Beginner,
  Lusitana,
} from "next/font/google";

// 本地字体
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const gowun_batang = Gowun_Batang({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const edu_sa_beginner = Edu_SA_Beginner({
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  weight: "400",
  subsets: ["latin"],
});

export const alimama_dao_li_ti = localFont({
  src: "../fonts/AlimamaDaoLiTi.woff2",
  display: "swap",
});
