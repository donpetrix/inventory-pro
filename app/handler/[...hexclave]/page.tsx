import { HexclaveHandler } from "@hexclave/next";
import { hexclaveServerApp } from "@/hexclave/server";

export default function Handler() {
  return <HexclaveHandler app={hexclaveServerApp} fullPage />;
}
