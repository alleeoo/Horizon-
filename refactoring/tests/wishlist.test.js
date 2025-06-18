/**
 * @jest-environment jsdom
 */

import fs from "fs";
import path from "path";

describe("RF Wishlist App", () => {
  let html;
  const wishlistData = [
    { title: "Inception", genre: "Sci-Fi", year: "2010" },
    { title: "The Godfather", genre: "Crime", year: "1972" }
  ];

  beforeEach(() => {
    // Load the HTML
    html = fs.readFileSync(path.resolve(__dirname, "../RF_wishlist.html"), "utf8");
    document.documentElement.innerHTML = html;

    // Mock localStorage
    localStorage.clear();
    localStorage.setItem("wishlist", JSON.stringify(wishlistData));

    // Load the script
    require("../RF_wishlist.js"); // Ensure this matches your actual JS filename
  });

  afterEach(() => {
    jest.resetModules();
  });

  test("should display wishlist items from localStorage", () => {
    const rows = document.querySelectorAll("#wishlistTable tbody tr");
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain("Inception");
    expect(rows[1].textContent).toContain("The Godfather");
  });

  test("should add a new item to the wishlist", () => {
    document.getElementById("titleInput").value = "Matrix";
    document.getElementById("genreInput").value = "Action";
    document.getElementById("yearInput").value = "1999";

    window.addToWishlist();

    const updatedList = JSON.parse(localStorage.getItem("wishlist"));
    expect(updatedList.length).toBe(3);
    expect(updatedList[2].title).toBe("Matrix");
  });

  test("should remove an item from the wishlist", () => {
    window.removeItem(0);

    const updatedList = JSON.parse(localStorage.getItem("wishlist"));
    expect(updatedList.length).toBe(1);
    expect(updatedList[0].title).toBe("The Godfather");
  });

  test("should edit a wishlist item inline", () => {
    window.editItem(0, "title", "Interstellar");

    const updatedList = JSON.parse(localStorage.getItem("wishlist"));
    expect(updatedList[0].title).toBe("Interstellar");
  });

  test("should update an existing item", () => {
    document.getElementById("titleInput").value = "Avatar";
    document.getElementById("genreInput").value = "Fantasy";
    document.getElementById("yearInput").value = "2009";
    document.getElementById("selectedIndex").value = "1";

    window.updateWishlistItem();

    const updatedList = JSON.parse(localStorage.getItem("wishlist"));
    expect(updatedList[1]).toEqual({ title: "Avatar", genre: "Fantasy", year: "2009" });
  });
});
/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

module.exports = config;