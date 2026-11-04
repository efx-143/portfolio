"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    __swarmRebuild?: {
      start: () => void;
      stop: (reveal?: boolean) => void;
      toggle: () => void;
      restart: () => void;
      isRunning?: boolean;
      app?: unknown;
    };
    __swarmAutoStart?: boolean;
  }
}

/**
 * Triggers or toggles the Swarm Rebuild multiplayer cursor animation.
 */
export function triggerSwarm() {
  if (typeof window === "undefined") return;

  if (window.__swarmRebuild) {
    if (window.__swarmRebuild.isRunning) {
      window.__swarmRebuild.stop(false);
    } else {
      window.__swarmRebuild.start();
    }
    return;
  }

  // If swarm.js is still loading or hasn't loaded yet
  window.__swarmAutoStart = true;
  let script = document.querySelector('script[src="/swarm.js"]') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.src = "/swarm.js";
    script.async = true;
    document.body.appendChild(script);
  }
  script.onload = () => {
    if (window.__swarmRebuild) {
      window.__swarmRebuild.start();
    }
  };
}

export default function SwarmController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Auto-start SWARM on first time website load
    const STORAGE_KEY = "sanyam_portfolio_swarm_autostart_v2";
    const searchParams = new URLSearchParams(window.location.search);
    const hasSwarmParam =
      searchParams.get("swarm") === "1" ||
      searchParams.get("swarm") === "true" ||
      window.location.hash === "#swarm";

    const hasSeenFirstLoad = sessionStorage.getItem(STORAGE_KEY);

    let timer: NodeJS.Timeout | null = null;
    if (!hasSeenFirstLoad || hasSwarmParam) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      // Small delay to ensure hydration and initial paint are complete
      timer = setTimeout(() => {
        triggerSwarm();
      }, 700);
    } else {
      // Preload in background for instant button clicks
      if (!window.__swarmRebuild && !document.querySelector('script[src="/swarm.js"]')) {
        const script = document.createElement("script");
        script.src = "/swarm.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }

    // Global keyboard shortcut: Alt + Shift + S
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        triggerSwarm();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
