export default {
  name: "ban-nested",
  rules: {
    "ban-nested": {
      create(context) {
        return {
          "ConditionalExpression > ConditionalExpression": (node) => context.report({
            node,
            message: "Nested ternaries are banned",
          }),
        };
      },
    },
  },
} as Deno.lint.Plugin;
