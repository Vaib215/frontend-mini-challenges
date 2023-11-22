import Image from "next/image";
import Link from "next/link";

export default function Card({ title, icon }: { title: string; icon: string }) {
  return (
    <Link href={'/quiz/'+title} className="card card-side bg-base-100 shadow-md shadow-base-content/40">
      <Image src={icon} alt={title} width={36} height={36} className="ml-4"/>
      <div className="card-body">
        <h2 className="card-title text-base-content">{title}</h2>
      </div>
    </Link>
  );
}
