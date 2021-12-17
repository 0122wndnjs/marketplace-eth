
import { Hero, BreadCrumbs } from "@components/ui/common"
import { EthRates, WalletBar } from "@components/ui/web3";
import { CourseList } from "@components/ui/course";
import { OrderCard } from "@components/ui/order";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { useWeb3 } from "@components/providers";
import { useAccount } from "@components/hooks/web3/useAccount";

export default function Mareketplace({courses}) {
    const { account } = useAccount()
    return (
        <>
            <div className="py-4">
                <WalletBar address={account.data} />
            </div>
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

Mareketplace.Layout = BaseLayout