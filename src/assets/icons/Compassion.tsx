import * as React from "react";
import { SVGProps } from "react";
const CompassionSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={26}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={27}
      height={26}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M.749 0h26v26h-26V0Z" />
    </mask>
    <g mask="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M20.697 5.383c0 3.046-2.505 4.778-6.948 8.632-4.443-3.854-6.948-5.586-6.948-8.632 0-1.501.97-4.063 3.751-4.063 1.708 0 2.655 1.247 3.197 2.239.542-.992 1.489-2.239 3.197-2.239 2.781 0 3.75 2.562 3.75 4.063ZM21.163 17.694l2.6-2.601a1.523 1.523 0 0 0-.57-2.514M4.304 12.579a1.519 1.519 0 0 1 1.585.36l1.14 1.14c.71.709 2.411 1.371 3.409 1.471l.037.004a2.508 2.508 0 0 1 2.258 2.496v6.63H7.35v-3.047L4.625 20.27a6.094 6.094 0 0 1-3.368-5.45V7.922a1.523 1.523 0 1 1 3.047 0v4.657Z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="m6.335 17.694-2.6-2.601a1.523 1.523 0 0 1 .57-2.514"
      />
      <path
        fill="#fff"
        d="M24.565 19.5a.508.508 0 1 1-1.015 0 .508.508 0 0 1 1.015 0Z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M25.501 17.73c.477-.877.74-1.874.74-2.91V7.922a1.523 1.523 0 1 0-3.047 0v4.657a1.519 1.519 0 0 0-1.585.36l-1.14 1.14c-.71.709-2.411 1.371-3.41 1.471l-.037.004a2.508 2.508 0 0 0-2.257 2.496v6.63h5.382v-3.047l1.943-.972"
      />
    </g>
  </svg>
);
export default CompassionSvg;
