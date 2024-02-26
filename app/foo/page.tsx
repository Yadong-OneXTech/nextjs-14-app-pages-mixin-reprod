// import Image from "next/image";
import AgGridTable from "@/src/components/AgGridTable";
import Main from "@/src/components/Main";
import dynamic from "next/dynamic";
// import dynamic from 'next/dynamic'
// const Main = dynamic(() => import("@/src/components/Main"), { ssr: false })
// const DynamicAgGridTable = dynamic(() => import('@/src/components/AgGridTable'), { ssr: false })

export default async function Home() {
  return (
    <>
    <Main />
    <AgGridTable />
    </>
  );
}
