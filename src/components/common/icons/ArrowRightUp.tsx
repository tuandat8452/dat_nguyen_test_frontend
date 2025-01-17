import React from "react";

export default function ArrowRightUp({ color = "#fff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      color={color}
    >
      <path
        d="M13.7504 1V10.75C13.7504 10.9489 13.6714 11.1397 13.5307 11.2803C13.3901 11.421 13.1993 11.5 13.0004 11.5C12.8015 11.5 12.6107 11.421 12.4701 11.2803C12.3294 11.1397 12.2504 10.9489 12.2504 10.75V2.81031L1.53104 13.5306C1.39031 13.6714 1.19944 13.7504 1.00042 13.7504C0.801394 13.7504 0.610523 13.6714 0.469792 13.5306C0.329062 13.3899 0.25 13.199 0.25 13C0.25 12.801 0.329062 12.6101 0.469792 12.4694L11.1901 1.75H3.25042C3.0515 1.75 2.86074 1.67098 2.72009 1.53033C2.57943 1.38968 2.50042 1.19891 2.50042 1C2.50042 0.801088 2.57943 0.610322 2.72009 0.46967C2.86074 0.329018 3.0515 0.25 3.25042 0.25H13.0004C13.1993 0.25 13.3901 0.329018 13.5307 0.46967C13.6714 0.610322 13.7504 0.801088 13.7504 1Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}
