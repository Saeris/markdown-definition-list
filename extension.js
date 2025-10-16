import { dl } from "@mdit/plugin-dl";

export const activate = () => ({
  extendMarkdownIt: (md) => md.use(dl),
});
