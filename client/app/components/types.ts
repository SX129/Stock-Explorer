import { DocumentNode } from "@apollo/client";

export type WithFragments = {
    fragments: {[key: string]: DocumentNode };
};