// import React from "react";

// export default function Preloader() {
//   return (
//     <div>
//       <>
//         {/* Preloader Start */}
//         <div className="sigma_preloader">
//           <img src="./../assets/img/om.svg" alt="preloader" />
//         </div>
//         {/* Preloader End */}
//       </>
//     </div>
//   );
// }


// components/Preloader.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Preloader = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  return loading ? (
    <div className="sigma_preloader">
      <img src="/assets/img/om.svg" alt="preloader" />
    </div>
  ) : null;
};

export default Preloader;
