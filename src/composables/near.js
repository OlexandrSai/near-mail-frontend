import { ref,onMounted } from "vue";
import {wallet} from '@/services/near'
import {
    getMessages,
    deleteAllMessages
  } from "@/services/near";

const accountId = wallet.getAccountId();

export const useMessageBox= () => {
    const myMessages  = ref([])
    const isLoading = ref(false)
    const  err = ref(null)

    onMounted(async () => {
        try {
            isLoading.value=true
            // generatedDesign.value = await getTempDesign(accountId)
            // myDesign.value = await getViewMyDesign(accountId)
            myMessages.value = await getMessages(accountId)
            console.log(myMessages.value)
            isLoading.value=false
        } catch (e) {
            err.value = e
            console.log('error')
        }
    })

    const handledeleteAllMessages = async () => {
        isLoading.value=true
        await deleteAllMessages()
        myMessages.value = await getMessages(accountId)
        isLoading.value=false
    }

    // const handleClaimDesign = async (seed) => {
    //     isLoading.value=true
    //     await claimDesign(seed).then(res=>console.log(res), res=>console.log(res))
    //     myDesign.value = await getViewMyDesign(accountId)
    //     isLoading.value=false
    // }

    // const handleBurnDesign = async () => {
    //     isLoading.value=true
    //     await burnDesign()
    //     myDesign.value = false
    //     isLoading.value=false
    // }

    return {
        isLoading,
        myMessages,
        deleteAllMessages:handledeleteAllMessages
        // generatedDesign,
        // myDesign,
        // generateDesign:  handleGenerateDesign,
        // claimDesign: handleClaimDesign,
        // burnDesign: handleBurnDesign
    }
}