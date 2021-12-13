
import { Hero, BreadCrumbs } from "@components/ui/common"
import { EthRates, WalletBar } from "@components/ui/web3";
import { CourseList } from "@components/ui/course";
import { OrderCard } from "@components/ui/order";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { useWeb3 } from "@components/providers";

export default function Home({courses}) {
  const { web3, isLoading } = useWeb3()
  return (
    <>
      { isLoading ? "IS Loading Web3..." : web3 ? "Web3 Ready!" : "Please install Metamask" }
      <Hero />
      <CourseList 
        courses={courses} 
      />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    } 
  }
}

Home.Layout = BaseLayout