import React from "react";

const Button = ({
  variant = "primary",
  onClick,
  children,
  className = "",
  type = "button",
}) => {
  const styles = {
    base: {
      padding: "0.8rem 2rem",
      borderRadius: "4px",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
    },
    primary: {
      backgroundColor: "#ffd700",
      color: "#1a1a1a",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "2px solid #ffffff",
    },
  };

  const style = {
    ...styles.base,
    ...styles[variant],
    ...(className && { className }),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      onMouseOver={(e) => {
        if (variant === "primary") {
          e.target.style.backgroundColor = "#ffed4a";
        } else if (variant === "secondary") {
          e.target.style.backgroundColor = "#ffffff";
          e.target.style.color = "#1a1a1a";
        }
        e.target.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        if (variant === "primary") {
          e.target.style.backgroundColor = "#ffd700";
        } else if (variant === "secondary") {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#ffffff";
        }
        e.target.style.transform = "translateY(0)";
      }}
    >
      {children}
    </button>
  );
};

export default Button;
