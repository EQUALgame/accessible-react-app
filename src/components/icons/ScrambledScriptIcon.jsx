import { motion, useReducedMotion } from "framer-motion";

/**
 * ScrambledScriptIcon
 * - Normalize by HEIGHT (so every card can be consistent)
 * - Width is computed from original aspect ratio (108x100)
 * - Asymmetric viewBox padding prevents clipping while rotating
 *
 * Props:
 *  - height: rendered height in px (default 100)
 *  - pad:    viewBox padding {top,right,bottom,left}
 *  - className: optional class for layout tweaks
 */
export default function ScrambledScriptIcon({
  height = 120,
  pad = { top: 8, right: 12, bottom: 28, left: 10 },
  className,
}) {
  const reduce = useReducedMotion();

  // --- geometry ---
  const artW = 108;
  const artH = 100;
  const ratio = artW / artH;             // 1.08
  const width = height * ratio;          // auto width from height
  const vb = `${-pad.left} ${-pad.top} ${artW + pad.left + pad.right} ${
    artH + pad.top + pad.bottom
  }`;

  // --- text transitions ---
  const show     = { opacity: 1, y: 0,  transition: { duration: 0.25 } };
  const hideUp   = { opacity: 0, y: -6, transition: { duration: 0.25 } };
  const hideDown = { opacity: 0, y:  6, transition: { duration: 0.25 } };

  // --- wrench motion (tune to taste) ---
  const wrenchRest = {
    x: 0, y: -10, rotate: -8,
    transition: { duration: 0.25 },
  };
  const wrenchHover = reduce ? {} : {
    x: 16, y: 55, rotate: 70,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  };

  return (
    <motion.svg
      className={className}
      viewBox={vb}
      width={width}
      height={height}
      role="img"
      aria-label="Scrambled Script icon"
      style={{ display: "block" }}
      variants={{ rest: {}, hover: {} }} // parent drives rest/hover
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* hover text (pd) — hidden by default, shows on hover */}
      <motion.text
        id="letters-hover"
        x="0.1875" y="87.488"
        fontFamily="Assistant" fontSize="64" fontWeight="600" fill="black"
        initial={hideDown}
        variants={{ rest: hideDown, hover: show }}
        style={{ whiteSpace: "pre" }}
      >
        pd
      </motion.text>

      {/* default text (bq) — shows by default, hides on hover */}
      <motion.text
        id="letters-default"
        x="0.21875" y="87.488"
        fontFamily="Assistant" fontSize="64" fontWeight="600" fill="black"
        variants={{ rest: show, hover: hideUp }}
        style={{ whiteSpace: "pre" }}
      >
        bq
      </motion.text>

      {/* wrench */}
      <motion.g
        id="wrench"
        variants={{ rest: wrenchRest, hover: wrenchHover }}
        style={{ transformOrigin: "center center" }}
      >
        <path
          d="M47.0616 68.6345C48.9062 69.125 50.8473 69.1218 52.6903 68.6252C54.5333 68.1286 56.2134 67.1562 57.5623 65.8053C58.9112 64.4544 59.8815 62.7725 60.3758 60.9282C60.8702 59.0839 60.8713 57.1421 60.379 55.2973L83.041 32.3034C84.6638 32.7813 86.3755 32.8742 88.0405 32.5748C89.7054 32.2754 91.2777 31.592 92.6325 30.5787C93.9874 29.5654 95.0875 28.2502 95.8456 26.7374C96.6038 25.2245 96.999 23.5558 97 21.8635C96.9978 20.3044 96.6607 18.7641 96.0115 17.3467C95.3623 15.9294 94.4161 14.6682 93.2371 13.6487C92.0581 12.6291 90.6738 11.875 89.1781 11.4374C87.6823 10.9997 86.11 10.8889 84.5676 11.1123C83.0253 11.3356 81.5489 11.8881 80.2386 12.7321C78.9283 13.5761 77.8147 14.6921 76.9731 16.0043C76.1316 17.3165 75.5818 18.7943 75.3611 20.3376C75.1403 21.881 75.2537 23.4538 75.6936 24.9494L52.709 47.6205C50.8642 47.1257 48.9217 47.1249 47.0765 47.6184C45.2314 48.1119 43.5484 49.0822 42.1966 50.4321C40.8448 51.7819 39.8716 53.4636 39.3748 55.3086C38.878 57.1536 38.875 59.0968 39.3662 60.9433L47.1304 53.1795L53.5028 54.4995L54.8222 60.8708L47.0616 68.6345ZM79.7534 20.1519L79.8476 18.2373L81.4606 17.1966L82.5009 15.5829L84.4184 15.4886L86.1257 14.6111L87.833 15.4886L89.7505 15.5829L90.7908 17.1966L92.4038 18.2373L92.498 20.1555L93.3752 21.8635L92.498 23.5714L92.4038 25.4897L90.7908 26.5304L89.7505 28.1441L87.833 28.2384L86.1257 29.1159L84.4184 28.2384L82.5009 28.1441L81.4606 26.5304L79.8476 25.4897L79.7534 23.5714L78.8762 21.8635L79.7534 20.1519Z"
          fill="#FF6C74"
        />
      </motion.g>
    </motion.svg>
  );
}
