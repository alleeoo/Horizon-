/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import path from 'path';

describe("Signup Form", () => {
    let html;
    let alertMock;

    beforeEach(() => {
        // Load your HTML file
        html = fs.readFileSync(path.resolve(__dirname, "../public/signup.html"), "utf8");
        document.documentElement.innerHTML = html;

        // Mock alert
        alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

        // Load the script (must be done after setting innerHTML)
        require("../public/signup.js");
    });

    afterEach(() => {
        jest.resetModules();
        alertMock.mockRestore();
    });

    test("shows alert if passwords do not match", () => {
        document.getElementById("fullname").value = "John Doe";
        document.getElementById("email").value = "john@example.com";
        document.getElementById("password").value = "pass123";
        document.getElementById("confirmPassword").value = "wrongpass";

        const form = document.getElementById("signupForm");
        form.dispatchEvent(new Event("submit", { bubbles: true }));

        expect(alertMock).toHaveBeenCalledWith("Passwords do not match.");
    });

    test("shows success alert if passwords match and resets form", () => {
        document.getElementById("fullname").value = "Jane Doe";
        document.getElementById("email").value = "jane@example.com";
        document.getElementById("password").value = "pass456";
        document.getElementById("confirmPassword").value = "pass456";

        const form = document.getElementById("signupForm");

        // Spy on form.reset
        const resetSpy = jest.spyOn(form, "reset");

        form.dispatchEvent(new Event("submit", { bubbles: true }));

        expect(alertMock).toHaveBeenCalledWith("Account created for Jane Doe");
        expect(resetSpy).toHaveBeenCalled();
    });
});
