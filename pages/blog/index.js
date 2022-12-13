import Link from "next/link";
import { Layout } from "../../components";

export default function Blog() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">blog!</h1>
      <Link href="/">kembali</Link>
    </Layout>
  );
}
