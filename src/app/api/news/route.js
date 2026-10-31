const PAGE_SIZE_CAP = 9;
const CACHE_TTL_MS = 60 * 60 * 1000;
const newsCache = new Map();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "nigeria";
  const page = searchParams.get("page") || "1";
  const requestedSize = Number(searchParams.get("pageSize") || PAGE_SIZE_CAP);
  const pageSize = Math.min(Math.max(requestedSize, 1), PAGE_SIZE_CAP);
  const apiKey = process.env.NEWS_API_KEY || "936f4527d49640cfae821ce52b6ec046";

  const url = new URL("https://newsapi.org/v2/everything");
  url.searchParams.set("q", query);
  url.searchParams.set("language", "en");
  url.searchParams.set("sortBy", "popularity");
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", String(pageSize));
  url.searchParams.set("apiKey", apiKey);

  const cacheKey = `${query}|${page}|${pageSize}`;
  const cached = newsCache.get(cacheKey);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return Response.json(cached.data, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  }

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "OkehebunorFoundation/1.0" },
      cache: "no-store",
    });
    const data = await response.json();
    if (Array.isArray(data.articles)) {
      data.articles = data.articles.filter((article) => article?.title && article.title !== "[Removed]");
    }
    const hasArticles = data.status === "ok" && data.articles?.length > 0;
    if (hasArticles) newsCache.set(cacheKey, { at: Date.now(), data });

    return Response.json(data, {
      status: response.ok ? 200 : response.status,
      headers: {
        "Cache-Control": hasArticles ? "public, s-maxage=3600, stale-while-revalidate=86400" : "no-store",
      },
    });
  } catch {
    return Response.json({ status: "error", articles: [] }, { status: 502 });
  }
}
