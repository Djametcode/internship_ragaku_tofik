import HeaderImagesComponents from "@/components/HeaderImage";
import ProductListShopComponent from "@/components/ProductListShop";
import ShopFilterComponent from "@/components/ShopFilterComponents";

export default function ShopComponents() {
  return (
    <div>
      <HeaderImagesComponents />
      <ShopFilterComponent />
      <ProductListShopComponent />
    </div>
  );
}
