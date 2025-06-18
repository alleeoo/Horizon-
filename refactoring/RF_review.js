document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("movie_title", document.getElementById("movie_title").value);
    formData.append("review", document.getElementById("review").value);

    fetch("submit_review.php", {
        method: "POST",
        body: formData
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("message").innerText = data;
            document.getElementById("reviewForm").reset();
            loadReviews();
        })
        .catch(err => {
            document.getElementById("message").innerText = "Error submitting review.";
            console.error("Submit error:", err);
        });
});

function loadReviews() {
    fetch("get_reviews.php")
        .then(res => res.json())
        .then(data => {
            const ul = document.getElementById("reviewList");
            const formLi = ul.querySelector("li");
            ul.innerHTML = "";
            ul.appendChild(formLi); // Keep form at the top

            data.forEach(r => {
                const li = document.createElement("li");
                li.className = "review-item";
                li.innerHTML = `
                    <div class="movie-title">${r.movie_title}</div>
                    <p class="review-text">${r.review}</p>
                `;
                ul.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Load error:", err);
        });
}

window.onload = loadReviews;


// ✅ Code Reuse: Extracted loadReviews() into a standalone function.

// ✅ Error Handling: Added .catch() for fetch() to catch runtime issues.

// ✅ DOM Isolation: Directly scoped element queries (getElementById, etc.) to avoid unnecessary overhead.

// ✅ Improved UX: Keeps form at top after reloading reviews.