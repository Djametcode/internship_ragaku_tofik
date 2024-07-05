import BannerComponents from "@/components/BannerComponents";
import BrowseTheRangeComponent from "@/components/BrowseTheRange";
import InspirationComponent from "@/components/InspirationComponent";
import OurProductsComponent from "@/components/OurProductComponents";

export default function Home() {
  return (
    <div>
      <BannerComponents />
      <BrowseTheRangeComponent />
      <OurProductsComponent />
      <InspirationComponent />
    </div>
  );
}
