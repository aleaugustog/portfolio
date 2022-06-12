import BaseLink from "next/link";

export default function Link({ children, href }) {
  return (
    <BaseLink href={href}>
      <a className="block font-bold hover:text-indigo-500">{children}</a>
    </BaseLink>
  );
}
