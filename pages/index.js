
import { Hero, BreadCrumbs } from "@components/common"
import { EthRates, WalletBar } from "@components/web3";
import { CourseList } from "@components/course";
import { OrderCard } from "@components/order";
import { BaseLayout } from "@components/layout";

export default function Home() {
  return (
    <>
      <Hero />
      <BreadCrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <CourseList />
    </>
  )
}

Home.Layout = BaseLayout