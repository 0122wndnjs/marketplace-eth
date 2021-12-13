
import { Hero, BreadCrumbs } from "@components/ui/common"
import { EthRates, WalletBar } from "@components/ui/web3";
import { CourseList } from "@components/ui/course";
import { OrderCard } from "@components/ui/order";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { useWeb3 } from "@components/providers";

export default function Home({courses}) {
  const { test } = useWeb3()
  return (
    <>
      { test }
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