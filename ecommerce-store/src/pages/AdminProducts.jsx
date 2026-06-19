import { useState, useEffect } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState(() => {
    const savedProducts =
      localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          {
            id: 1,
            name: "Laptop",
            price: 50000,
            category: "Electronics",
          },
        ];
  });

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const [editId, setEditId] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.price ||
      !form.category
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    if (editId) {
      setProducts(
        products.map((product) =>
          product.id === editId
            ? {
                ...product,
                ...form,
              }
            : product
        )
      );

      setEditId(null);
    } else {
      setProducts([
        ...products,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      name: "",
      price: "",
      category: "",
    });
  };

  const handleEdit = (
    product
  ) => {
    setEditId(product.id);

    setForm({
      name: product.name,
      price: product.price,
      category:
        product.category,
    });
  };

  const handleDelete = (id) => {
    setProducts(
      products.filter(
        (product) =>
          product.id !== id
      )
    );
  };

  return (
    <div className="container">
      <h1>
        Product Management
      </h1>

      <input
        type="text"
        placeholder="Product Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({
            ...form,
            price: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({
            ...form,
            category:
              e.target.value,
          })
        }
      />

      <button
        onClick={handleSubmit}
      >
        {editId
          ? "Update Product"
          : "Add Product"}
      </button>

      <table className="crud-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map(
            (product) => (
              <tr
                key={product.id}
              >
                <td>
                  {product.name}
                </td>

                <td>
                  ₹ {product.price}
                </td>

                <td>
                  {
                    product.category
                  }
                </td>

                <td>
                  <button
                    onClick={() =>
                      handleEdit(
                        product
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        product.id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}