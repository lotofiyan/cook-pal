import React, { useEffect, useState } from "react";

const Index = () => {
  document.cookie = `referral_key=hello;max-age=604800;domain=example.com`;
  document.cookie = "test1=Hello; SameSite=None; Secure";
  document.cookie = "test2=World; SameSite=None; Secure";
  const [count, setCount] = useState(0);
  const [text, setText] = useState("This is a text test");
  const cookiesData = document.cookie;

  // Increment the count every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addNum = (setCount) => {
    setCount((prevCount) => prevCount + 10);
  };
  const subNum = () => {
    setCount((prevCount) => prevCount - 10);
  };
  const testFunc = () => {
    console.log("the function works");
  };
  const serializedAdd = addNum.toString();
  const serializedSub = subNum.toString();
  const serializedTest = testFunc.toString();

  const functions = {
    function1: serializedAdd,
    function2: serializedSub,
    function3: serializedTest,
  };
  const collectStyles = async () => {
    let allStyles = "";

    // Collect CSS from all style elements
    document.querySelectorAll("style").forEach((styleElement) => {
      allStyles += styleElement.textContent + "\n";
    });

    // Collect CSS from all linked stylesheets
    await Promise.all(
      Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(
        async (linkElement) => {
          // Check if the stylesheet is from your project
          if (linkElement.href.includes("your-project")) {
            try {
              const response = await fetch(linkElement.href);
              const cssText = await response.text();
              allStyles += cssText + "\n";
            } catch (error) {
              console.error("Failed to fetch CSS:", error);
            }
          }
        }
      )
    );

    return allStyles;
  };

  // const collectScripts = async () => {
  //   const scripts = [];

  //   // Collect all script tags
  //   await Promise.all(
  //     Array.from(document.querySelectorAll("script")).map(
  //       async (scriptElement) => {
  //         // Check if the script is from your project

  //         try {
  //           const response = await fetch(scriptElement.src);
  //           const scriptText = await response.text();
  //           scripts.push(scriptText);
  //           console.log(scriptText);
  //           // Remove the original script element from the parent window
  //           scriptElement.remove();
  //         } catch (error) {
  //           console.error("Failed to fetch JavaScript file:", error);
  //         }
  //       }
  //     )
  //   );

  //   return scripts;
  // };

  useEffect(() => {
    const sendMessage = async () => {
      const message = "This the test data being passed";
      const iframe = document.getElementById("my-iframe");
      const styles = await collectStyles();
      // const scripts = await collectScripts();

      iframe.contentWindow.postMessage({ type: "string", text }, "*");

      iframe.contentWindow.postMessage({ type: "styles", styles }, "*");
      iframe.contentWindow.postMessage({ type: "functions", functions }, "*");
      iframe.contentWindow.postMessage(
        { type: "setCookies", cookies: cookiesData },
        "*"
      );
    };

    const iframe = document.getElementById("my-iframe");
    iframe.addEventListener("load", sendMessage);
    sendMessage();
    return () => {
      // Cleanup: remove the event listener when the component unmounts
      iframe.removeEventListener("load", sendMessage);
    };
  }, []);

  useEffect(() => {
    const sendMessage = async () => {
      const iframe = document.getElementById("my-iframe");
      iframe.contentWindow.postMessage({ type: "count", count }, "*");
    };

    const iframe = document.getElementById("my-iframe");
    iframe.addEventListener("load", sendMessage);
    sendMessage();
    return () => {
      // Cleanup: remove the event listener when the component unmounts
      iframe.removeEventListener("load", sendMessage);
    };
  }, [count]);

  return (
    <div>
      <p className="font-poppins font-medium text-[24px] md:text-[36px] text-black">
        Contact us today {count}
        <iframe
          id="my-iframe"
          src={"http://localhost:3001"}
          title="Your Embedded Webapp"
          width="600"
          height="400"
        />
      </p>
    </div>
  );
};

export default Index;
