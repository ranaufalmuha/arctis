import { nextJsConfig } from "@arctis/eslint-config/next-js";
import boundaries from "eslint-plugin-boundaries";

/** @type {import("eslint").Linter.Config[]} */
export default [
    ...nextJsConfig,
    {
        files: ["features/**/*.{ts,tsx,js,jsx}"],
        rules: {
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: [
                                "@/features/**",
                                "../**/features/**",
                                "../../features/**",
                            ],
                            message: "❌ Features must not be imported from other features! Use shared instead."
                        },
                        {
                            group: [
                                "@/app/**",
                                "../app/**",
                                "../../app/**",
                            ],
                            message: "❌ Features cannot be imported from the app!"
                        }
                    ]
                }
            ]
        }
    },
    {
        files: ["shared/**/*.{ts,tsx,js,jsx}"],
        rules: {
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: [
                                "@/features/**",
                                "../features/**",
                                "../../features/**",
                                "../**/features/**"
                            ],
                            message: "❌ Shared can not import from features!"
                        },
                        {
                            group: [
                                "@/app/**",
                                "../app/**",
                                "../../app/**"
                            ],
                            message: "❌ Shared can not import from app!"
                        }
                    ]
                }
            ]
        }
    },
    {
        files: [
            "app/**/*.{ts,tsx,js,jsx}",
            "features/**/*.{ts,tsx,js,jsx}",
            "shared/**/*.{ts,tsx,js,jsx}"
        ],
        plugins: {
            boundaries,
        },
        settings: {
            "boundaries/elements": [
                {
                    type: "app",
                    pattern: "app/**",
                },
                {
                    type: "feature",
                    pattern: "features/*/**",
                    capture: ["featureName"],
                },
                {
                    type: "shared",
                    pattern: "shared/**",
                },
            ],
        },
        rules: {
            "boundaries/element-types": [
                "error",
                {
                    default: "disallow",
                    rules: [
                        {
                            from: ["app"],
                            allow: ["app", "shared", "feature"],
                        },
                        {
                            from: ["feature"],
                            allow: [
                                "shared",
                                ["feature", { featureName: "${from.featureName}" }]
                            ],
                        },
                        {
                            from: ["shared"],
                            allow: ["shared"],
                        },
                    ],
                },
            ],
        },
    },
];