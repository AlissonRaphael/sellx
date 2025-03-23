import base from "@sellx/eslint-config";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  ...base,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    }
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  },
]
