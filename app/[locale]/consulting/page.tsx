import { redirect } from "next/navigation";

export default async function ConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/consulting/reputation-consulting`);
}
