import HomepageSection from "@/components/HomepageSection";
import { getProducts } from "@/app/actions";

export default async function Home() {
  const [topProducts, recent, exclusive] = await Promise.all([
    getProducts({ category: "top", offset: 0, limit: 6 }),
    getProducts({ category: "recent", offset: 0, limit: 6 }),
    getProducts({ category: "exclusive", offset: 0, limit: 6 }),
  ]);

  if (!topProducts || !recent || !exclusive) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div>
      <h1 className="text-2xl p-4">Homepage</h1>

      <HomepageSection
        title="Top prducts"
        category="top"
        fetchProducts={getProducts}
      />

      <HomepageSection
        title="Exclusive products"
        category="exclusive"
        fetchProducts={getProducts}
      />

      <HomepageSection
        title="Recent products"
        category="recent"
        fetchProducts={getProducts}
      />
    </div>
  );
}
