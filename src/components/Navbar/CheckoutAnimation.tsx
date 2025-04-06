import { useState } from "react";
import styled from "styled-components";

const CheckoutAnimation = () => {
  const [textState, setTextState] = useState("Pagar ahora");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTextState("Procesando...");

    setTimeout(() => {
      setTextState("Pago completado. ¡Gracias por tu compra!");
      setTimeout(() => {
        setIsAnimating(false);
        // Opcional: volver a "Pagar ahora" después de un tiempo
        // setTimeout(() => setTextState("Pagar ahora"), 2000);
      }, 3000); // Duración del mensaje final
    }, 4200); // Duración de "Procesando..."
  };

  return (
    <StyledWrapper>
      <div
        className={`container ${isAnimating ? "animating" : ""}`}
        onClick={handleClick}
      >
        <div className="card">
          <div className="card-line" />
          <div className="buttons" />
        </div>
        <div className="post">
          <div className="post-line" />
          <div className="screen">
            <div className="dollar">$</div>
          </div>
          <div className="numbers" />
          <div className="numbers-line2" />
        </div>
        <div className="text-container">
          <div className={` text ${isAnimating ? "fade-in" : ""}`}>
            {textState}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  transform: scale(0.9);

  @media (max-width: 768px) {
    transform: scale(0.85);
  }

  @media (max-width: 480px) {
    transform: scale(0.65);
  }

  .container {
    background-color: #2d6a4f;
    display: flex;
    width: 420px;
    height: 120px;
    position: relative;
    border-radius: 12px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }

  .container.animating {
    transform: scale(1.03);
  }

  .text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 15px;
    margin-left: 120px;
  }

  .text {
    font-size: 22px;
    font-family: "Lexend Deca", sans-serif;
    color: #ffffff;
    text-align: center;
    line-height: 1.3;
    max-width: 100%;
    padding: 5px;
    transition: all 0.3s ease-in-out;
  }

  .fade-in {
    animation: fadeText 0.4s ease-in-out;
  }

  @keyframes fadeText {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card {
    width: 90px;
    height: 60px;
    background-color: #ffffff;
    border-radius: 12px;
    position: absolute;
    display: flex;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 5px -2px rgba(77, 200, 143, 0.72);
    left: 20px;
    top: 30px;
  }

  .card-line {
    width: 70px;
    height: 12px;
    background-color: #80ea69;
    border-radius: 2px;
    margin-top: 8px;
  }

  .buttons {
    width: 10px;
    height: 10px;
    background-color: #379e1f;
    box-shadow: 0 -12px 0 0 #26850e, 0 12px 0 0 #56be3e;
    border-radius: 50%;
    margin-top: 8px;
    transform: rotate(90deg);
    margin: 10px 0 0 -35px;
  }

  .animating .card {
    animation: slide-top 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) both;
  }

  .animating .post {
    animation: slide-post 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }

  @keyframes slide-top {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-80px) rotate(90deg);
    }
    60% {
      transform: translateY(-80px) rotate(90deg);
    }
    100% {
      transform: translateY(-10px) rotate(90deg);
    }
  }

  .post {
    width: 70px;
    height: 80px;
    background-color: #dddde0;
    position: absolute;
    z-index: 11;
    bottom: 10px;
    top: 120px;
    border-radius: 12px;
    overflow: hidden;
    left: 30px;
  }

  .post-line {
    width: 55px;
    height: 10px;
    background-color: #545354;
    position: absolute;
    border-radius: 0px 0px 3px 3px;
    right: 8px;
    top: 8px;
  }

  .post-line:before {
    content: "";
    position: absolute;
    width: 55px;
    height: 10px;
    background-color: #757375;
    top: -10px;
  }

  .screen {
    width: 55px;
    height: 24px;
    background-color: #ffffff;
    position: absolute;
    top: 25px;
    right: 8px;
    border-radius: 3px;
  }

  .numbers {
    width: 14px;
    height: 14px;
    background-color: #838183;
    box-shadow: 0 -20px 0 0 #838183, 0 20px 0 0 #838183;
    border-radius: 2px;
    position: absolute;
    transform: rotate(90deg);
    left: 28px;
    top: 58px;
  }

  .numbers-line2 {
    width: 14px;
    height: 14px;
    background-color: #aaa9ab;
    box-shadow: 0 -20px 0 0 #aaa9ab, 0 20px 0 0 #aaa9ab;
    border-radius: 2px;
    position: absolute;
    transform: rotate(90deg);
    left: 28px;
    top: 75px;
  }

  @keyframes slide-post {
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-80px);
    }
  }

  .dollar {
    position: absolute;
    font-size: 16px;
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    left: 0;
    top: 2px;
    color: #4b953b;
    text-align: center;
  }

  .animating .dollar {
    animation: fade-in-fwd 0.3s 1s backwards;
  }

  @keyframes fade-in-fwd {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default CheckoutAnimation;
