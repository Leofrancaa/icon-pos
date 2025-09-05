"use client";

import { useState } from "react";
import { IMAGES } from "@/lib/images";

export default function TestImages() {
  const [imageStatus, setImageStatus] = useState<Record<string, string>>({});

  const testImage = (url: string, name: string) => {
    const img = new Image();
    img.onload = () => {
      setImageStatus((prev) => ({ ...prev, [name]: "✅ Carregou" }));
      console.log(`✅ ${name} carregou:`, url);
    };
    img.onerror = () => {
      setImageStatus((prev) => ({ ...prev, [name]: "❌ Erro" }));
      console.log(`❌ ${name} erro:`, url);
    };
    img.src = url;
    setImageStatus((prev) => ({ ...prev, [name]: "🔄 Carregando..." }));
  };

  const testAllImages = () => {
    testImage(IMAGES.hero.dental, "Hero Dental");
    testImage(IMAGES.professors.male1, "Professor Male 1");
    testImage(IMAGES.professors.female1, "Professor Female 1");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm z-50">
      <h3 className="font-bold mb-2">Test Images</h3>
      <button
        onClick={testAllImages}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-2 text-sm"
      >
        Testar Imagens
      </button>
      <div className="text-xs space-y-1">
        {Object.entries(imageStatus).map(([name, status]) => (
          <div key={name}>
            {name}: {status}
          </div>
        ))}
      </div>

      {/* Teste visual direto */}
      <div className="mt-4">
        <p className="text-xs font-semibold mb-2">Teste Visual:</p>
        <div className="space-y-2">
          <div
            className="w-20 h-12 bg-cover bg-center border"
            style={{ backgroundImage: `url(${IMAGES.hero.dental})` }}
          ></div>
          <img
            src={IMAGES.professors.male1}
            alt="Test"
            className="w-20 h-20 object-cover border"
            onLoad={() => console.log("IMG tag carregou")}
            onError={() => console.log("IMG tag erro")}
          />
        </div>
      </div>
    </div>
  );
}
