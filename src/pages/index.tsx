import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
/* import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons"; */
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section>
        <h1 className="text-4xl font-bold text-center">Hello</h1>
      </section>
    </DefaultLayout>
  );
}
