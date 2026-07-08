import type { CSSProperties } from "react";
import { matrixEngines, matrixPrinciples } from "../data/site";

type MatrixStrategyMapProps = {
  compact?: boolean;
};

export function MatrixStrategyMap({ compact = false }: MatrixStrategyMapProps) {
  return (
    <div className={compact ? "matrix-map matrix-map--compact" : "matrix-map"}>
      <div className="matrix-map__copy">
        <div className="matrix-map__intro">
          <p className="matrix-kicker">ToX Strategy Map</p>
          <h2>
            矩联内容与产品矩阵
            <span>One Brand · Multiple Growth Engines</span>
          </h2>
          <p className="matrix-map__summary">
            一个品牌，六大引擎。以内容为连接，以产品为载体，构建全球化、智能化的个人品牌生态系统。
          </p>
        </div>
        <div className="matrix-principles">
          {matrixPrinciples.map((item) => (
            <div key={item.title} className="matrix-principle">
              <span
                className={`matrix-principle__icon matrix-principle__icon--${item.icon}`}
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="matrix-map__stage" aria-label="MatrixLinkTech 六大增长引擎">
        <div className="matrix-map__rings" />
        <div className="matrix-map__axis matrix-map__axis--horizontal" />
        <div className="matrix-map__axis matrix-map__axis--vertical" />
        <div className="matrix-map__center">
          <div className="matrix-mark">M</div>
          <strong>矩联科技</strong>
          <span>MatrixLink</span>
          <small>内容 · 产品 · 技术 · 生态</small>
        </div>

        {matrixEngines.map((engine, index) => (
          <article
            key={engine.code}
            className={`matrix-engine matrix-engine--${index + 1}`}
            style={{ "--engine-color": engine.color } as CSSProperties}
          >
            <div className="matrix-engine__code">{engine.code}</div>
            <h3>{engine.title}</h3>
            <strong>{engine.subtitle}</strong>
            <p>{engine.label}</p>
            <ul>
              {engine.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
