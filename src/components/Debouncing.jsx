import { useEffect, useState, useRef } from "react";

export default function  ProductSearch() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debounceRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    if (!query) {
      setProducts([]);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      fetchProducts(query);
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  const fetchProducts = async (search) => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`,
        { signal: controller.signal }
      );

      const data = await res.json();

      const filtered = data.products
        .filter((p) => p.rating > 4.0)
        .sort((a, b) => b.rating - a.rating);

      setProducts(filtered);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const highlight = (text, term) => {
    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <h4>{highlight(p.title, query)}</h4>
            <p>Price: ${p.price}</p>
            <p>Rating: {p.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}