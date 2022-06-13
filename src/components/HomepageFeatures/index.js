import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Performant",
    Svg: require("@site/static/img/fast.svg").default,
    description: (
      <>
        Managed Components can run code outside the browser: on your server, on
        the edge, and more. This means the browser is available to render the
        website without needing to connect to other servers, or execute more
        JavaScript code.
      </>
    ),
  },
  {
    title: "Secure & Private",
    Svg: require("@site/static/img/secure.svg").default,
    description: (
      <>
        Built with a granular permissions system, Managed Components can only do
        what they're explicitly allowed to do. By default, a Component cannot
        run any JavaScript code in the browser, meaning your users are
        protected.
      </>
    ),
  },
  {
    title: "Free & Open Source",
    Svg: require("@site/static/img/opensource.svg").default,
    description: (
      <>
        Managed Components can run freely using WebCM, an open source Components
        Manager. There is also a growing list of open-sourced Components you can
        use today.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
