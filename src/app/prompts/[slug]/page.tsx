import { createSlugPage } from "@/lib/section-routes";

const page = createSlugPage("prompts");
export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
