import { ref, onMounted } from "vue";
import {wallet} from '@/services/near'
// import {
//     getTempDesign,
//     generateDesign,
//     claimDesign,
//     burnDesign,
//     getViewMyDesign
//   } from "@/services/near";

  const accountId = wallet.getAccountId();

// export const useMessageBox= () => {
//     const generatedDesign  = ref(false)
//     const myDesign = ref(false)
//     const isLoading = ref(false)
//     const  err = ref(null)

//     onMounted(async () => {
//         try {
//             isLoading.value=true
//             generatedDesign.value = await getTempDesign(accountId)
//             myDesign.value = await getViewMyDesign(accountId)
//             isLoading.value=false
//         } catch (e) {
//             err.value = e
//             console.log('error')
//         }
//     })

//     const handleGenerateDesign = async (accountId) => {
//         isLoading.value=true
//         await generateDesign(accountId)
//         generatedDesign.value = await getTempDesign(accountId)
//         isLoading.value=false
//     }

//     const handleClaimDesign = async (seed) => {
//         isLoading.value=true
//         await claimDesign(seed).then(res=>console.log(res), res=>console.log(res))
//         myDesign.value = await getViewMyDesign(accountId)
//         isLoading.value=false
//     }

//     const handleBurnDesign = async () => {
//         isLoading.value=true
//         await burnDesign()
//         myDesign.value = false
//         isLoading.value=false
//     }

//     return {
//         isLoading,
//         generatedDesign,
//         myDesign,
//         generateDesign:  handleGenerateDesign,
//         claimDesign: handleClaimDesign,
//         burnDesign: handleBurnDesign
//     }
// }