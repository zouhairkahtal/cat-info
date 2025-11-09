import { useQuery } from "@tanstack/react-query";

export function CatGallery() {

    const apiKey =
    "live_hRhVM86AOKKY00E8M9ATJsed7nfnKLP0deR8JlQC4drZ0FAJvg0AaBtFEEAVH6Sg";

  const { data, isLoading, error } = useQuery({
    queryKey: ["cats"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=100",
        {
          headers: {
            "x-api-key": apiKey, 
          },
        }
      );
      return res.json();
    },
  });

  if (isLoading) return <p>Loading cats...</p>;
  if (error) return <p>Something went wrong 😿</p>;

  return (
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5 p-10 ">
      {data.map((cat: any) => (
        <img
          key={cat.id}
          src={cat.url}
          alt="cat"
          className="rounded-lg shadow-lg aspect-auto my-5 hover:scale-105 transition-transform "
        />
      ))}
    </div>
  );
}
