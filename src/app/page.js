"use client";

import "./page.css";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from "react";

export default function Home() {
  gsap.registerPlugin(ScrambleTextPlugin);

  // Ejecutar al cargar la página
  useEffect(() => {
    // Scramble text for the title
    gsap.to(".title", {
      scrambleText: {
        text: "CSS Cursor Property",
        chars: "upperAndLowerCase",
        revealDelay: 0.2,
        tweenLength: false,
      },
      ease: "power2.inOut",
      overwrite: "auto",
      duration: 2,
    });

    // Scramble text for each card
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const originalText = card.textContent;
      gsap.to(card, {
        scrambleText: {
          text: originalText,
          chars: "upperAndLowerCase",
          revealDelay: 0.2,
          tweenLength: false,
        },
        ease: "power2.inOut",
        overwrite: "auto",
        duration: 1.5,
        delay: Math.random() * 0.5, // Add a slight delay for each card
      });
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">CSS Cursor Property</h1>
      <div className="description">
        <div className="description-note">
          Click on the card to copy the CSS code
        </div>
      </div>
      <div className="container-cards">
        <div className="card card0">default</div>
        <div className="card card1">crosshair</div>
        <div className="card card2">help</div>
        <div className="card card3">move</div>
        <div className="card card4">pointer</div>
        <div className="card card5">progress</div>
        <div className="card card6">text</div>
        <div className="card card7">wait</div>
        <div className="card card8">vertical-text</div>
        <div className="card card9">alias</div>
        <div className="card card10">no-drop</div>
        <div className="card card11">grab</div>
        <div className="card card12">grabbing</div>
        <div className="card card13">zoom-in</div>
        <div className="card card14">zoom-out</div>
        <div className="card card15">not-allowed</div>
        <div className="card card16">cell</div>
        <div className="card card17">copy</div>
        <div className="card card18">ew-resize</div>
        <div className="card card19">ns-resize</div>
        <div className="card card20">nwse-resize</div>
        <div className="card card21">nesw-resize</div>
        <div className="card card22">col-resize</div>
        <div className="card card23">row-resize</div>
        <div className="card card24">all-scroll</div>
        <div className="card card25">context-menu</div>
        <div className="card card26">none</div>
        <div className="card card27">zoom-in</div>
        <div className="card card28">zoom-out</div>
        <div className="card card29">url</div>
      </div>
    </div>
  );
}
