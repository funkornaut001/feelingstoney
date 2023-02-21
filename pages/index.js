import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [effectInput, setEffectInput] = useState("");
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate-gifts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ effect: effectInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setEffectInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Choose Your High</title>
        <link rel="icon" href="/PotTransparent.png" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.img}>
        <img src= "/PotFillTransparent.png" alt="Pot Leaf" />
        {/* <section class="container">

<section class="wrapper">
<div class="one"></div>
<div class="one1"></div>
 <div class="one2"></div>
 <div class="one3"></div>
<div class="one4"></div>
 <div class="one5"></div>
 <div class="one6"></div>
<div class="one7"></div>
 <div class="one8"></div>
<div class="one9"></div>
 <div class="one10"></div>
 <div class="one11"></div>
 <div class="one12"></div>
 <div class="one13"></div>
 <div class="one14"></div>
 <div class="one15"></div>
 <div class="one16"></div>
 <div class="one17"></div>
<div class="one18"></div>
<div class="one19"></div>
 <div class="one20"></div>
 <div class="one21"></div>
 <div class="one22"></div>
 <div class="one23"></div>
 <div class="one24"></div>
 <div class="one25"></div>
 <div class="one26"></div> 
 <div class="one28"></div>
 <div class="one29"></div>
 <div class="one30"></div>
<div class="one31"></div>
 <div class="one32"></div>
<div class="one33"></div>
 <div class="one34"></div>
 <div class="one35"></div>
 <div class="one36"></div>
 <div class="one37"></div>
 <div class="one38"></div>
 <div class="one39"></div>
 <div class="one40"></div>
 <div class="one41"></div>
 <div class="one42"></div>
 <div class="one43"></div>
 <div class="one44"></div>
<div class="one45"></div>
<div class="one46"></div>
 <div class="one47"></div>
 <div class="one48"></div>
<div class="one49"></div>
</section>
</section> */}
        {/* <iframe src="https://giphy.com/embed/B8lrRCcd4gpcFgdV0W" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rain-high-cannabis-B8lrRCcd4gpcFgdV0W">via GIPHY</a></p> */}
        </div>

        <h3>How Do Want To Feel?</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="effect"
            placeholder="Euphoric, relaxed ..."
            value={effectInput}
            onChange={(e) => setEffectInput(e.target.value)}
          />
          <input type="submit" value="Generate Strains" />
        </form>
        <div className={styles.result}>{result}</div>
        
        {/* waves */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#348858"
            fillOpacity="1"
            d="M0,160L9.6,170.7C19.2,181,38,203,58,197.3C76.8,192,96,160,115,165.3C134.4,171,154,213,173,208C192,203,211,149,230,128C249.6,107,269,117,288,106.7C307.2,96,326,64,346,48C364.8,32,384,32,403,42.7C422.4,53,442,75,461,69.3C480,64,499,32,518,58.7C537.6,85,557,171,576,202.7C595.2,235,614,213,634,181.3C652.8,149,672,107,691,112C710.4,117,730,171,749,181.3C768,192,787,160,806,165.3C825.6,171,845,213,864,208C883.2,203,902,149,922,128C940.8,107,960,117,979,112C998.4,107,1018,85,1037,69.3C1056,53,1075,43,1094,58.7C1113.6,75,1133,117,1152,149.3C1171.2,181,1190,203,1210,202.7C1228.8,203,1248,181,1267,160C1286.4,139,1306,117,1325,128C1344,139,1363,181,1382,170.7C1401.6,160,1421,96,1430,64L1440,32L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
          ></path>
        </svg>
        {/* waves */}

      </main>
    </div>
  );
}
