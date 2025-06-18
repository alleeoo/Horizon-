/**
@jest-environment jsdom
*/

global.fetch = jest.fn(); // Mock fetch

describe("Review Form Script", () => {
beforeEach(() => {

// Reset fetch before each test
fetch.mockReset();

// Re-require script (this attaches event listener)
jest.isolateModules(() => {
  require('../review.js'); // Adjust path if different
});
});

test("submits review and shows message", async () => {
// Mock fetch for submit_review.php
fetch.mockResolvedValueOnce({
text: () => Promise.resolve("Review submitted!"),
});

javascript
Copy
Edit
const submitEvent = new Event("submit");
document.getElementById("reviewForm").dispatchEvent(submitEvent);

// Wait for message update
await new Promise(setImmediate);

expect(fetch).toHaveBeenCalledWith("submit_review.php", expect.any(Object));
expect(document.getElementById("message").innerText).toBe("Review submitted!");
});

test("loads and renders reviews", async () => {
// Mock fetch for get_reviews.php
fetch.mockResolvedValueOnce({
json: () => Promise.resolve([
{ movie_title: "Interstellar", review: "Epic visuals!" }
]),
});

javascript
Copy
Edit
// Call loadReviews manually
const { loadReviews } = require('../review.js'); // Only if you exported it
if (loadReviews) {
  await loadReviews();
} else {
  window.onload(); // fallback
}

const items = document.querySelectorAll(".review-item");
expect(items.length).toBe(1);
expect(items[0].querySelector(".movie-title").textContent).toBe("Interstellar");
expect(items[0].querySelector(".review-text").textContent).toBe("Epic visuals!");
});
});