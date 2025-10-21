export const MERGED_API_URLS = [
   "https://my-json-server.typicode.com/mwaqas-developer/tech/db",
   "https://my-json-server.typicode.com/mwaqas-developer/creative/db",
   "https://my-json-server.typicode.com/mwaqas-developer/marketing/db",
   "https://my-json-server.typicode.com/mwaqas-developer/expanded/db",
];

async function safeJson(res) {
   try {
      return await res.json();
   } catch {
      return { categories: [] };
   }
}

export async function fetchMergedCategories() {
   const results = await Promise.allSettled(
      MERGED_API_URLS.map((url) => fetch(url))
   );

   const payloads = await Promise.all(
      results.map(async (r) => {
         if (r.status === "fulfilled" && r.value.ok) {
            return await safeJson(r.value);
         }
         return { categories: [] };
      })
   );

   const categoryMap = new Map();

   payloads.forEach((data) => {
      const categories = Array.isArray(data.categories) ? data.categories : [];
      categories.forEach((cat) => {
         const key = cat.slug || cat.category;
         if (!key) return;

         const incomingServices = Array.isArray(cat.services) ? cat.services : [];
         const existing = categoryMap.get(key);

         if (!existing) {
            categoryMap.set(key, {
               category: cat.category,
               slug: cat.slug || (cat.category || "").toLowerCase().replace(/\s+/g, "-"),
               image: cat.image,
               icon: cat.icon,
               services: [...incomingServices],
            });
         } else {
            const serviceMap = new Map(
               (existing.services || []).map((s) => [s.slug || s.name, s])
            );
            incomingServices.forEach((s) => {
               const sKey = s.slug || s.name;
               if (!serviceMap.has(sKey)) serviceMap.set(sKey, s);
            });
            existing.services = Array.from(serviceMap.values());

            if (!existing.image && cat.image) existing.image = cat.image;
            if (!existing.icon && cat.icon) existing.icon = cat.icon;
            if (!existing.category && cat.category) existing.category = cat.category;
            if (!existing.slug && cat.slug) existing.slug = cat.slug;

            categoryMap.set(key, existing);
         }
      });
   });

   return Array.from(categoryMap.values());
}

export async function fetchMergedData() {
   const categories = await fetchMergedCategories();
   const services = categories.flatMap((category) =>
      (Array.isArray(category.services) ? category.services : []).map((service) => ({
         ...service,
         category: {
            name: category.category,
            slug: category.slug,
            image: category.image,
         },
      }))
   );
   return { categories, services };
}