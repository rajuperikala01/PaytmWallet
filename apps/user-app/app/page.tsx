import { redirect } from "next/navigation";

export default function Page(): JSX.Element {
  redirect("/dashboard");
  return <div></div>;
}
