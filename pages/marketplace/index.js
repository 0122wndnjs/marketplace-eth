
import { CourseList, CourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"
import { useWalletInfo, useOwnedCourses } from "@components/hooks/web3"
import { Button, Loader, Message } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@components/ui/marketplace";
import { useWeb3 } from "@components/providers";
import Course from "@pages/courses/[slug]";

export default function Marketplace({courses}) {
  const { web3, contract, requireInstall } = useWeb3()
  const [selectedCourse, setSelectedCourse] = useState(null)
  const { hasConnectedWallet, isConnecting, account } = useWalletInfo()
  const { ownedCourses } = useOwnedCourses(courses, account.data)

  const purchaseCourse = async order => {

    // hex Course ID:
    // 0x31343130343734000000000000000000
    // address
    // 0xA1cFce04e9522E963E8448c53Dc5742283a6d59a
    // 31343130343734000000000000000000A1cFce04e9522E963E8448c53Dc5742283a6d59a
    // Order Hash
    // b2e511361bb612dde2777879216e37a68e78273b4083eb1e9579669822508e56
    // test@gmail.com
    // af257bcc3cf653863a77012256c927f26d8ab55c5bea3751063d049d0538b902
    // Proof:
    // 3f3fc5d251a20e3e110f3794b3e396ae57ab70ef0d487978cea50380424425cd
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)
    const orderHash = web3.utils.soliditySha3(
      { type: "bytes16", value: hexCourseId },
      { type: "address", value: account.data }
    ) 
    const emailHash = web3.utils.sha3(order.email)
    const proof = web3.utils.soliditySha3(
      { type: "bytes32", value: emailHash },
      { type: "bytes32", value: orderHash }
    )

    const value = web3.utils.toWei(String(order.price))

    try {
      const result = await contract.methods.purchaseCourse(
        hexCourseId,
        proof
      ).send({from: account.data, value})
      console.log(result)
    } catch {
      console.error("Purchase course: Operation has failed.")
    }
  }

  return (
    <>
      <MarketHeader />
      <CourseList
        courses={courses}
      >
        { course => {
          const owned = ownedCourses.lookup[course.id]
          return (
            <CourseCard
              key={course.id} 
              course={course} 
              state={owned?.state}
              disabled={!hasConnectedWallet} 
              Footer={() => {

                if (requireInstall) {
                  return (
                    <Button 
                      size="sm"
                      disabled={true}
                      variant="lightPurple">
                      Install
                    </Button>
                  )
                }

                if (isConnecting) {
                  return (
                    <Button
                      size="sm" 
                      // onClick={() => (course)}
                      disabled={true}
                      variant="lightPurple">
                      <Loader size="sm"/>
                    </Button>
                  )
                }

                if (!ownedCourses.hasInitialResponse) {
                  return (
                    <div style={{height: "42px"}}></div>
                    // <Button disabled={true} variant="lightPurple">
                    //   Loading State
                    // </Button>
                  )
                }

                if (owned) {
                  return (
                    <>
                      <div className="flex">
                        <Button onClick={() => alert("You are owner of this course!")} disabled={false} size="sm" variant="white">
                          Yours &#10004;
                        </Button>
                        { owned.state === "deactivated" &&
                        <div className="ml-1">
                          <Button disabled={false} size="sm" onClick={() => alert("Re-activating")} variant="purple">
                            Fund to Activate
                          </Button>
                          </div>
                        }
                      </div>
                      
                    </>
                  )
                }

                return (
                  <Button
                    size="sm" 
                    onClick={() => setSelectedCourse(course)}
                    disabled={!hasConnectedWallet}
                    variant="lightPurple">
                    Purchase
                  </Button>
                )}
              }
            /> 
          )}
        }
      </CourseList>
      { selectedCourse &&
        <OrderModal 
          course={selectedCourse}
          onSubmit={purchaseCourse}
          onClose={() => setSelectedCourse(null)}
        />
      }
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

Marketplace.Layout = BaseLayout
