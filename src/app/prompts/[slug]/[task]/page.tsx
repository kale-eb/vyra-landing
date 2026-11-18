import { createNestedPage } from "@/lib/section-routes";

const page = createNestedPage("prompts");
export const dynamicParams = false;
export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
