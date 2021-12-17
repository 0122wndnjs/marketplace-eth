
import { EthRates, WalletBar } from "@components/ui/web3";
import { CourseList } from "@components/ui/course";
import { OrderCard } from "@components/ui/order";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { useAccount } from "@components/hooks/web3/useAccount";
import { useNetwork } from "@components/hooks/web3/useNetwork";

export default function Mareketplace({courses}) {
    const { account } = useAccount()
    const { network } = useNetwork()
    return (
        <>
            <div className="py-4">
              { network.data }
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