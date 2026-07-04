import React, { useState, useRef } from "react";
import "./ExperienceCard.css";
export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState<any[]>([]);
  // const imgRef = createRef();
  const imgRef = useRef<HTMLImageElement>(null);

  async function getColorArrays() {
    try {
      if (!imgRef.current) return;
      const module = await import("colorthief");
      // prefer synchronous browser API when available
      const getPaletteSync = module.getPaletteSync ?? (module.default && module.default.getPaletteSync);
      const palette = getPaletteSync ? getPaletteSync(imgRef.current) : await module.getPalette(imgRef.current);
      const first = palette ? palette[0] : undefined;
      let rgbArr: number[] = [];
      if (Array.isArray(first)) {
        rgbArr = first as number[];
      } else if (first && typeof first === "object") {
        if (typeof (first as any).r === "number") {
          rgbArr = [(first as any).r, (first as any).g, (first as any).b];
        } else if (typeof (first as any).rgb === "function") {
          rgbArr = (first as any).rgb();
        } else if (typeof (first as any).toRgb === "function") {
          rgbArr = (first as any).toRgb();
        }
      }
      setColorArrays(rgbArr);
    } catch (e) {
      // fallback: leave colorArrays empty
      setColorArrays([]);
    }
  }

  function rgb(values: any) {
    if (values === undefined || values === null) return null;
    if (Array.isArray(values)) return "rgb(" + values.join(", ") + ")";
    if (typeof values === "object") {
      if (typeof values.r === "number" && typeof values.g === "number" && typeof values.b === "number") {
        return `rgb(${values.r}, ${values.g}, ${values.b})`;
      }
      if (typeof values[0] === "number") return "rgb(" + Array.from(values).join(", ") + ")";
    }
    return null;
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map(item => (
        <li
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          key={item}
        >
          {item}
        </li>
      ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{ background: rgb(colorArrays) ?? "" }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
