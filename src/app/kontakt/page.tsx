import { redirect } from "next/navigation";

// 301 redirect: /kontakt -> /contact
export default function KontaktRedirect() {
  redirect("/contact");
}
