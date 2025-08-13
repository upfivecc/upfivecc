import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Blog = GetTypeByName<typeof configuration, "blogs">;
export declare const allBlogs: Array<Blog>;

export type Course = GetTypeByName<typeof configuration, "courses">;
export declare const allCourses: Array<Course>;


export {};
