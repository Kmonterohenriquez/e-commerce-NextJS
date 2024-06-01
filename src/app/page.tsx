"use client";
import TopNavigation from "@/components/Common/TopNavigation";
import HeroSection from "@/components/Home/HeroSection";
import MobileMenu from "@/components/Home/MobileMenu";
import CategorySection from "@/components/Home/CategorySection";
import FeatureSection from "@/components/Home/FeatureSection";
import CtaSection from "@/components/Home/CtaSection";
import FavoriteSection from "@/components/Home/FavoriteSection";
import FooterNavigation from "@/components/Common/FooterNavigation";
import TrendingProducts from "@/components/Home/TrendingProducts";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "@/lib/slices/productSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";

export default function Example() {
  const dispatch = useDispatch<AppDispatch>();

  const { products } = useSelector((state: RootState) => state.products);
  const getData = () => {
    dispatch(getAllProducts());
  };

  console.log(products);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white">
      <MobileMenu />

      <header className="relative overflow-hidden">
        <TopNavigation />
        <HeroSection />
      </header>
      <main>
        <CategorySection />
        <FeatureSection />
        <FavoriteSection />
        <TrendingProducts />
        <CtaSection />
      </main>

      <FooterNavigation />
    </div>
  );
}
